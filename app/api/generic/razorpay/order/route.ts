export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { GENERIC_LP_FORM, basicAuth, consultationFeeRupees, razorpayKeys } from "@/lib/razorpay";
import { concerns, findLocation, formatDateLabel, isBookableDate } from "@/component/generic-com/booking-options";
import { cleanPageUrl, pageUrlLine } from "@/lib/page-url";

const NOT_CONFIGURED = "Online payment is not available right now. Please call us at 94641 08108 to book.";
const APPOINTMENT_TYPE = "Consultation & Spinal Assessment";

/**
 * Generic LP booking: validates the form, saves the lead in the database straight away
 * (paymentStatus "pending", so visitors who abandon checkout can still be called back),
 * then creates a Razorpay order for it. The amount always comes from the server env.
 */
export async function POST(req: NextRequest) {
  const keys = razorpayKeys();
  const fee = consultationFeeRupees();
  if (!keys || fee === null) {
    console.error("[Generic Razorpay order] RAZORPAY_KEY_ID / RAZORPAY_KEY_SECRET / RAZORPAY_CONSULTATION_AMOUNT not set");
    return NextResponse.json({ error: NOT_CONFIGURED }, { status: 500 });
  }

  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    // handled by validation below
  }
  const read = (key: string) => (typeof body[key] === "string" ? (body[key] as string).trim() : "");

  const name = read("name").slice(0, 100);
  const phone = read("phone").replace(/\D/g, "");
  const concern = read("concern");
  const location = read("location");
  const date = read("date"); // YYYY-MM-DD
  const clinic = findLocation(location);
  // Landing page incl. UTM params; falls back to the Referer header
  const pageUrl = cleanPageUrl(read("pageUrl")) ?? cleanPageUrl(req.headers.get("referer"));

  if (name.length < 2 || !/^[6-9]\d{9}$/.test(phone)) {
    return NextResponse.json({ error: "Please enter your name and a valid 10-digit mobile number." }, { status: 400 });
  }
  if (!concerns.includes(concern) || !clinic) {
    return NextResponse.json({ error: "Please select your area of concern and clinic location." }, { status: 400 });
  }
  // must be a real open day for that clinic (Mon/Tue/Fri/Sat, not in the past)
  if (!isBookableDate(clinic, date)) {
    return NextResponse.json({ error: "That date is not available. Please pick another date." }, { status: 400 });
  }
  // visit time = the clinic's hours, e.g. "Fri, 31 Oct 2026 · 10 AM – 1 PM"
  const appointment = `${formatDateLabel(date)} · ${clinic.hours}`;

  const amountPaise = Math.round(fee * 100);

  // 1) Save the lead first – the dashboard shows it even if payment is never completed.
  let leadId: string;
  try {
    const lead = await prisma.lead.create({
      data: {
        name,
        phone,
        treatment: concern,
        procedure: APPOINTMENT_TYPE,
        appointmentType: APPOINTMENT_TYPE,
        condition: concern,
        city: location, // clinic location (shown in the dashboard)
        preferredDate: date,
        preferredTime: clinic.hours,
        message: [`Area of concern: ${concern}`, `Location: ${location}`, `Preferred time: ${appointment}`, pageUrl && pageUrlLine(pageUrl)]
          .filter(Boolean)
          .join("\n"),
        consent: true,
        source: "generic form",
        formName: GENERIC_LP_FORM,
        status: "new",
        paymentStatus: "pending",
        paymentAmount: amountPaise,
      },
    });
    leadId = lead.id;
  } catch (err) {
    console.error("[Generic Razorpay order] Could not save lead:", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Could not start the booking. Please try again." }, { status: 500 });
  }

  // 2) Create the Razorpay order, tagged with the lead id.
  try {
    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: { Authorization: basicAuth(keys.keyId, keys.keySecret), "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: amountPaise,
        currency: "INR",
        receipt: `ss_${leadId}`.slice(0, 40), // Razorpay caps receipt at 40 chars
        notes: {
          product: "Southern Spine Consultation & Spinal Assessment",
          form: GENERIC_LP_FORM,
          leadId,
          name,
          phone,
          concern,
          location,
          appointment,
          pageUrl: (pageUrl ?? "").slice(0, 250), // Razorpay limits each note to 256 chars
        },
      }),
      signal: AbortSignal.timeout(15000),
      cache: "no-store",
    });

    const order = await res.json();
    if (!res.ok) throw new Error(order?.error?.description || `Razorpay HTTP ${res.status}`);

    await prisma.lead.update({ where: { id: leadId }, data: { razorpayOrderId: order.id } });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: keys.keyId, // publishable key – safe to expose to the browser
      prefill: { name, contact: `+91${phone}` },
    });
  } catch (err) {
    console.error("[Generic Razorpay order] Error:", err instanceof Error ? err.message : err);
    // The lead stays saved as "pending" so the team can still call back.
    return NextResponse.json({ error: "Could not start the payment. Please try again." }, { status: 502 });
  }
}
