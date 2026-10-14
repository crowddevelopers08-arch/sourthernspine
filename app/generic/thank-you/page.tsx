import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft, Check, Phone } from "lucide-react";
import { outfit } from "@/component/generic-com/font";

export const metadata: Metadata = {
  title: "Thank You | Southern Spine",
  description: "Your appointment request has been received. Southern Spine will contact you to confirm your visit.",
  robots: { index: false, follow: false },
};

const focusStyles = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f99c1e]";

export default function GenericThankYouPage() {
  return (
    <main className={`${outfit.className} min-h-screen bg-[#f5f6fb] pb-4 text-[#0b1842] sm:pb-2`}>
      <Script id="generic-google-ads-conversion" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('event', 'conversion', {
            'send_to': 'AW-16482547544/g8dtCMjn2JkZENjuvrM9'
          });`}
      </Script>
      <header className="border-b border-[#e1e5ef] bg-white px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
          <Link href="/generic" className={`relative block h-[52px] w-[200px] shrink-0 rounded-sm sm:h-[58px] sm:w-[230px] ${focusStyles}`}>
            <Image src="https://ik.imagekit.io/9yxs4igok/public/logos.png" alt="Southern Spine â€” Home" fill priority sizes="(min-width: 640px) 230px, 200px" className="object-contain object-left" />
          </Link>
          <a href="tel:+919464108108" className={`inline-flex items-center gap-2 rounded-sm text-sm font-medium text-[#29469b] ${focusStyles}`}><Phone aria-hidden="true" className="h-4 w-4" />+91 94641 08108</a>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-5 py-2 sm:py-5">
        <section aria-labelledby="thank-you-heading" className="relative isolate overflow-hidden rounded-[28px] bg-[#0b1842] px-6 py-12 text-center shadow-[0_24px_65px_-30px_rgba(11,24,66,0.5)] sm:px-12 sm:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[500px] w-[500px] rounded-full border-[70px] border-white/5" />
          <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#ffb547]/30 bg-[#ffb547]/10"><Check aria-hidden="true" className="h-10 w-10 text-[#ffb547]" /></span>
          <h1 id="thank-you-heading" className="mt-7 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">Thank You for Choosing <span className="text-[#ffb547]">Southern Spine</span></h1>
          <p className="mt-6 text-lg font-medium text-white">Your appointment request has been received.</p>
          <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-[#d1d8eb]">Our team will call you to discuss your concerns and confirm your appointment. Your visit is confirmed once you hear from us.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/generic" className={`inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#f99c1e] px-6 py-4 font-semibold text-[#0b1842] transition-colors hover:bg-[#ffb547] ${focusStyles}`}><ArrowLeft aria-hidden="true" className="h-4 w-4" />Back to Home</Link>
            <a href="tel:+919464108108" className={`inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/10 ${focusStyles}`}><Phone aria-hidden="true" className="h-4 w-4" />Call: 94641 08108</a>
          </div>
        </section>
        <footer className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3 text-center text-sm text-[#65708a]">
          <p>Â© Southern Spine, Hyderabad. All rights reserved.</p>
          <Link href="/generic/privacy-policy" className={`rounded-sm text-[#29469b] hover:underline ${focusStyles}`}>Privacy Policy</Link>
        </footer>
      </div>
    </main>
  );
}
