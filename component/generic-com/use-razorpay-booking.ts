"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

type RazorpaySuccess = { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string };
type RazorpayInstance = {
  open: () => void;
  on: (event: "payment.failed", cb: (res: { error?: { description?: string } }) => void) => void;
};
declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => RazorpayInstance;
  }
}

export type BookingFields = { name: string; phone: string; concern: string; time: string };

// Loads Razorpay Checkout on first use instead of on every page view.
function loadRazorpay() {
  return new Promise<boolean>((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => {
      script.remove();
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

/** Generic LP booking: saves the lead, opens Razorpay Checkout, verifies the payment, then goes to the thank-you page. */
export function useRazorpayBooking() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const busy = useRef(false);

  const fail = (message: string) => {
    busy.current = false;
    setSubmitting(false);
    setError(message);
  };

  const verifyPayment = async (response: RazorpaySuccess) => {
    try {
      const res = await fetch("/api/generic/razorpay/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(response),
      });
      const data = await res.json();
      if (!res.ok || !data.verified) throw new Error(data.error || "Verification failed");
      router.push(`/generic/thank-you?payment_id=${encodeURIComponent(data.paymentId)}`);
    } catch (err) {
      console.error("Payment verification failed:", err);
      fail("We could not verify your payment. If money was deducted, please call us at 94641 08108.");
    }
  };

  const startBooking = async (fields: BookingFields) => {
    if (busy.current) return;
    busy.current = true;
    setSubmitting(true);
    setError(null);

    try {
      const [loaded, res] = await Promise.all([
        loadRazorpay(),
        fetch("/api/generic/razorpay/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fields),
        }),
      ]);
      const order = await res.json();
      if (!res.ok) return fail(order.error || "Could not start the payment. Please try again.");
      if (!loaded || !window.Razorpay) {
        return fail("Could not load the payment window. Please check your connection and try again.");
      }

      const checkout = new window.Razorpay({
        key: order.keyId,
        order_id: order.orderId,
        amount: order.amount,
        currency: order.currency,
        name: "Southern Spine",
        description: "Consultation & Spinal Assessment",
        prefill: order.prefill,
        notes: { concern: fields.concern, preferredTime: fields.time },
        theme: { color: "#0b1842" },
        handler: verifyPayment,
        modal: {
          ondismiss: () => {
            busy.current = false;
            setSubmitting(false);
          },
        },
      });
      checkout.on("payment.failed", (res) => {
        console.error("Razorpay payment failed:", res.error);
      });
      checkout.open();
    } catch (err) {
      console.error("Booking failed:", err);
      fail("Sorry, we could not start your booking. Please try again or call us.");
    }
  };

  return { startBooking, submitting, error, setError };
}
