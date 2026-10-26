export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { GENERIC_LP_FORM, RazorpayPayment, hmacMatches } from "@/lib/razorpay";

/**
 * Razorpay calls this server-to-server once a payment settles. It is the reliable
 * half of the flow: the browser callback is lost if the visitor closes the tab
 * mid-payment, but this still fires, so every paid booking is marked in the dashboard.
 *
 * Configure in Razorpay → Settings → Webhooks:
 *   URL     https://<your-domain>/api/razorpay/webhook
 *   Secret  RAZORPAY_WEBHOOK_SECRET
 *   Events  payment.captured, payment.failed
 */
export async function POST(req: NextRequest) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) {
    console.error("[Razorpay webhook] RAZORPAY_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Webhook not configured." }, { status: 500 });
  }

  const signature = req.headers.get("x-razorpay-signature");
  if (!signature) return NextResponse.json({ error: "Missing signature." }, { status: 400 });

  // The signature covers the exact bytes Razorpay sent, so read raw text before parsing.
  const rawBody = await req.text();
  if (!hmacMatches(rawBody, signature, secret)) {
    console.error("[Razorpay webhook] Signature mismatch – request rejected");
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  let body: { event?: string; payload?: { payment?: { entity?: RazorpayPayment } } };
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const event = body.event || "";
  const payment = body.payload?.payment?.entity;

  // Acknowledge everything we don't act on with 200 so Razorpay stops retrying –
  // including payments from other sites sharing this Razorpay account.
  if (event !== "payment.captured" && event !== "payment.failed") {
    return NextResponse.json({ received: true, ignored: event });
  }
  if (!payment?.id || !payment.order_id || payment.notes?.form !== GENERIC_LP_FORM) {
    return NextResponse.json({ received: true, ignored: "not a generic-lp payment" });
  }

  let db: "ok" | "failed" = "ok";
  try {
    if (event === "payment.captured") {
      await prisma.lead.updateMany({
        where: { razorpayOrderId: payment.order_id },
        data: {
          paymentStatus: "paid",
          razorpayPaymentId: payment.id,
          paymentAmount: payment.amount,
          paymentMethod: payment.method || null,
          paidAt: new Date(),
        },
      });
    } else {
      // A failed attempt must never overwrite a payment that already succeeded (visitors can retry).
      await prisma.lead.updateMany({
        where: { razorpayOrderId: payment.order_id, NOT: { paymentStatus: "paid" } },
        data: { paymentStatus: "failed", razorpayPaymentId: payment.id, paymentMethod: payment.method || null },
      });
    }
  } catch (err) {
    db = "failed";
    console.error("[Razorpay webhook] Could not update lead:", err instanceof Error ? err.message : err);
  }

  // The updates above are idempotent, so on a DB error ask Razorpay to retry (it backs off automatically).
  if (db === "failed") return NextResponse.json({ received: false, error: "Database update failed." }, { status: 500 });
  return NextResponse.json({ received: true, event, paymentId: payment.id, db });
}
