import { createHmac, timingSafeEqual } from "crypto";

// Tags every order the generic LP creates (and the leads it saves), so the webhook can
// ignore payments from other sites that share this Razorpay account.
export const GENERIC_LP_FORM = "generic-leads";

export interface RazorpayPayment {
  id: string;
  order_id: string;
  amount: number; // paise
  currency: string;
  status: string;
  method?: string;
  email?: string;
  contact?: string;
  notes?: Record<string, string>;
}

export function razorpayKeys() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  return keyId && keySecret ? { keyId, keySecret } : null;
}

// RAZORPAY_CONSULTATION_AMOUNT is in rupees; returns null when missing or invalid.
export function consultationFeeRupees() {
  const fee = Number(process.env.RAZORPAY_CONSULTATION_AMOUNT);
  return Number.isFinite(fee) && fee > 0 ? fee : null;
}

export function basicAuth(keyId: string, keySecret: string) {
  return `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`;
}

// Constant-time comparison of a hex HMAC-SHA256 signature.
export function hmacMatches(payload: string, signature: string, secret: string) {
  const expected = createHmac("sha256", secret).update(payload).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function fetchPayment(paymentId: string, keyId: string, keySecret: string): Promise<RazorpayPayment> {
  const res = await fetch(`https://api.razorpay.com/v1/payments/${encodeURIComponent(paymentId)}`, {
    headers: { Authorization: basicAuth(keyId, keySecret) },
    cache: "no-store",
    signal: AbortSignal.timeout(15000),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error?.description || `Razorpay HTTP ${res.status}`);
  return data as RazorpayPayment;
}
