import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";
import { outfit } from "@/component/generic-com/font";

export const metadata: Metadata = {
  title: "Thank You | Southern Spine",
  description: "Your appointment request has been received. Southern Spine will contact you to confirm your visit.",
  robots: { index: false, follow: false },
};

const focusStyles = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f99c1e]";

export default async function GenericThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ payment_id?: string | string[] }>;
}) {
  const { payment_id } = await searchParams;
  // Only show values shaped like a Razorpay payment id
  const paymentId = typeof payment_id === "string" && /^pay_[A-Za-z0-9]{6,40}$/.test(payment_id) ? payment_id : null;

  return (
    <main className={`${outfit.className} min-h-screen bg-[#f5f6fb] pb-4 text-[#0b1842] sm:pb-2`}>
      <Script id="generic-google-ads-conversion" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('event', 'conversion', {
            'send_to': 'AW-16482547544/g8dtCMjn2JkZENjuvrM9'
          });`}
      </Script>
      {/* Meta Pixel conversion: fbq('track', 'SubmitApplication').
          The Pixel loads asynchronously (via GTM), so wait until fbq exists, then fire exactly once. */}
      <Script id="generic-meta-submit-application" strategy="afterInteractive">
        {`(function () {
          if (window.__ssSubmitApplicationSent) return;
          var tries = 0;
          (function fire() {
            if (typeof window.fbq === 'function') {
              window.__ssSubmitApplicationSent = true;
              fbq('track', 'SubmitApplication');
            } else if (++tries < 50) {
              setTimeout(fire, 300); // keep trying for ~15s while the Pixel loads
            } else {
              console.warn('Meta Pixel (fbq) not found – SubmitApplication not sent');
            }
          })();
        })();`}
      </Script>
      <header className="border-b border-[#e1e5ef] bg-white px-4 py-3 sm:px-8 sm:py-5">
        <div className="mx-auto flex max-w-5xl flex-nowrap items-center justify-between gap-3">
          <Link href="/generic" className={`relative block h-[40px] w-[150px] min-w-0 shrink rounded-sm sm:h-[58px] sm:w-[230px] ${focusStyles}`}>
            <Image src="https://ik.imagekit.io/9yxs4igok/public/logos.png" alt="Southern Spine — Home" fill priority sizes="(min-width: 640px) 230px, 150px" className="object-contain object-left" />
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-5 sm:px-5">
        <section aria-labelledby="thank-you-heading" className="relative isolate overflow-hidden rounded-[22px] bg-[#0b1842] px-5 py-10 text-center sm:rounded-[28px] shadow-[0_24px_65px_-30px_rgba(11,24,66,0.5)] sm:px-12 sm:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[500px] w-[500px] rounded-full border-[70px] border-white/5" />
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full sm:h-20 sm:w-20 border border-[#ffb547]/30 bg-[#ffb547]/10"><Check aria-hidden="true" className="h-8 w-8 text-[#ffb547] sm:h-10 sm:w-10" /></span>
          <h1 id="thank-you-heading" className="mt-6 text-[28px] font-semibold leading-tight tracking-tight text-white sm:text-5xl">Thank You for Choosing <span className="text-[#ffb547]">Southern Spine</span></h1>
          <p className="mt-5 text-base font-medium text-white sm:mt-6 sm:text-lg">
            {paymentId ? "Your payment was successful and your booking request has been received." : "Your appointment request has been received."}
          </p>
          {paymentId && (
            <div className="mx-auto mt-5 inline-flex max-w-full flex-col items-center gap-1 rounded-2xl border border-[#ffb547]/30 bg-[#ffb547]/10 px-5 py-3 text-sm text-[#ffd99a] sm:flex-row sm:gap-3">
              <span className="inline-flex items-center gap-2 font-semibold text-white">
                <ShieldCheck aria-hidden="true" className="h-4 w-4 text-[#ffb547]" />
                Payment received · ₹499
              </span>
              <span className="break-all">Payment ID: {paymentId}</span>
            </div>
          )}
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-7 text-[#d1d8eb] sm:text-base">Our team will call you to discuss your concerns and confirm your appointment. Your visit is confirmed once you hear from us.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/generic" className={`inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#f99c1e] px-6 py-4 font-semibold text-[#0b1842] transition-colors hover:bg-[#ffb547] ${focusStyles}`}><ArrowLeft aria-hidden="true" className="h-4 w-4" />Back to Home</Link>
          </div>
        </section>
        <footer className="mt-6 flex flex-wrap justify-center sm:mt-8 gap-x-5 gap-y-3 text-center text-sm text-[#65708a]">
          <p>© Southern Spine, Hyderabad. All rights reserved.</p>
          <Link href="/generic/privacy-policy" className={`rounded-sm text-[#29469b] hover:underline ${focusStyles}`}>Privacy Policy</Link>
          <Link href="/generic/terms-and-conditions" className={`rounded-sm text-[#29469b] hover:underline ${focusStyles}`}>Terms &amp; Conditions</Link>
          <Link href="/generic/cancellation-refund-policy" className={`rounded-sm text-[#29469b] hover:underline ${focusStyles}`}>Cancellation &amp; Refund</Link>
        </footer>
      </div>
    </main>
  );
}
