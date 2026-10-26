export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { GENERIC_LP_FORM, fetchPayment, hmacMatches, razorpayKeys } from "@/lib/razorpay";

const UNVERIFIED = "We could not verify this payment. If money was deducted, please call us at 94641 08108.";

/**
 * Called by the browser after Razorpay Checkout succeeds. Razorpay signs
 * `order_id|payment_id` with the key secret; recomputing it proves the callback
 * was not faked. The webhook records the same payment too, which covers closed tabs.
 */
export async function POST(req: NextRequest) {
  const keys = razorpayKeys();
  if (!keys) return NextResponse.json({ error: "Payments are not configured." }, { status: 500 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const read = (key: string) => (typeof body[key] === "string" ? (body[key] as string) : "");
  const orderId = read("razorpay_order_id");
  const paymentId = read("razorpay_payment_id");
  const signature = read("razorpay_signature");

  if (!orderId || !paymentId || !signature) {
    return NextResponse.json({ error: "Incomplete payment details." }, { status: 400 });
  }

  if (!hmacMatches(`${orderId}|${paymentId}`, signature, keys.keySecret)) {
    console.error("[Generic Razorpay verify] Signature mismatch for order", orderId);
    return NextResponse.json({ verified: false, error: UNVERIFIED }, { status: 400 });
  }

  let method: string | undefined;
  try {
    const payment = await fetchPayment(paymentId, keys.keyId, keys.keySecret);
    if (payment.order_id !== orderId || payment.notes?.form !== GENERIC_LP_FORM) {
      return NextResponse.json({ verified: false, error: UNVERIFIED }, { status: 400 });
    }
    if (payment.status !== "captured" && payment.status !== "authorized") {
      return NextResponse.json({ verified: false, error: `Payment is ${payment.status}. Please try again.` }, { status: 400 });
    }
    method = payment.method;
  } catch (err) {
    // The signature already proves the payment is genuine, so don't fail the visitor over a lookup error.
    console.error("[Generic Razorpay verify] Payment lookup failed:", err instanceof Error ? err.message : err);
  }

  try {
    await prisma.lead.updateMany({
      where: { razorpayOrderId: orderId },
      data: {
        paymentStatus: "paid",
        razorpayPaymentId: paymentId,
        ...(method && { paymentMethod: method }),
        paidAt: new Date(),
      },
    });
  } catch (err) {
    // The webhook will record it as well, so a DB hiccup here must not block the visitor.
    console.error("[Generic Razorpay verify] Could not update lead:", err instanceof Error ? err.message : err);
  }

  return NextResponse.json({ verified: true, paymentId, orderId });
}
