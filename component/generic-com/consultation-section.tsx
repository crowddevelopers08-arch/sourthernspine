import { ArrowRight, CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { outfit } from "./font";
import Link from "next/link";

const clinics = [
  { name: "Jubilee Hills", address: "3rd Floor, Plot No. 1269, Road No. 36, Jubilee Hills, Hyderabad – 500033" },
  { name: "Chikkadpally", address: "2nd Floor, 1-1-192/A, Road No. 6, Chikkadpally RTC X Road, Hyderabad" },
];
const focusStyles = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f99c1e]";

export default function ConsultationSection() {
  return (
    <div className={`${outfit.className} bg-[#f5f6fb] text-[#0b1842]`}>
      <section aria-labelledby="consultation-heading" className="relative isolate overflow-hidden px-4 py-14 sm:py-20 md:px-[60px]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(249,156,30,0.09),transparent_55%)]" />
        <div className="mx-auto max-w-[1320px]">
          <div className="relative isolate overflow-hidden rounded-[28px] bg-[#0b1842] px-6 pb-12 pt-10 text-center shadow-[0_24px_65px_-30px_rgba(11,24,66,0.5)] sm:px-12 sm:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-56 -z-10 h-[620px] w-[620px] rounded-full border-[80px] border-white/[0.035]" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-56 -left-48 -z-10 h-[500px] w-[500px] rounded-full border border-[#f99c1e]/15" />
            <span aria-hidden="true" className="mx-auto mb-6 block h-1 w-12 rounded-full bg-[#f99c1e]" />
            <h2 id="consultation-heading" className="mx-auto max-w-[850px] text-[32px] font-semibold leading-[1.15] tracking-[-0.8px] text-white sm:text-[44px] lg:text-[54px]">
              Take the First Step Towards <span className="text-[#ffb547]">Pain-Free Movement</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[650px] text-base leading-8 text-[#d1d8eb] sm:text-xl">
              Book your consultation and spinal assessment for <span className="inline-block rounded-lg border border-[#f99c1e]/30 bg-[#f99c1e]/10 px-3 py-0.5 font-semibold text-[#ffb547]">₹499.</span>
            </p>
            <div className="mx-auto mt-8 flex max-w-[580px] flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a href="#book-appointment" className={`group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#f99c1e] px-7 py-4 text-base font-semibold text-[#0b1842] shadow-[0_8px_24px_-12px_rgba(249,156,30,0.65)] transition-colors hover:bg-[#ffb547] ${focusStyles}`}>
                <CalendarCheck aria-hidden="true" className="h-5 w-5 shrink-0" />Book Appointment<ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1" />
              </a>
              <a href="tel:+919464108108" className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10 ${focusStyles}`}>
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />Call: 94641 08108
              </a>
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {clinics.map((clinic) => (
              <article key={clinic.name} className="relative flex items-start gap-4 overflow-hidden rounded-[20px] border border-[#e0e5f0] bg-white p-6 shadow-[0_8px_30px_-20px_rgba(11,24,66,0.2)] sm:gap-5 sm:p-8">
                <span aria-hidden="true" className="absolute inset-y-7 left-0 w-[3px] rounded-r-full bg-[#f99c1e]" />
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#ffe3b7] bg-[#fff6e7] text-[#ad6200]"><MapPin aria-hidden="true" className="h-5 w-5" /></span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[1.5px] text-[#ad6200] sm:text-base">{clinic.name}</h3>
                  <address className="mt-2 text-sm not-italic leading-7 text-[#52607a] sm:text-base">{clinic.address}</address>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-[#e1e5ef] bg-white px-4 py-8 md:px-[60px]">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#29469b]">
            <a href="tel:+919464108108" className={`inline-flex items-center gap-2 rounded-sm hover:text-[#ad6200] ${focusStyles}`}><Phone aria-hidden="true" className="h-4 w-4" />+91 94641 08108</a>
            <span aria-hidden="true" className="text-[#9aa6bf]">·</span>
            <a href="mailto:info@southernspine.co.in" className={`inline-flex items-center gap-2 break-all rounded-sm hover:text-[#ad6200] ${focusStyles}`}><Mail aria-hidden="true" className="h-4 w-4 shrink-0" />info@southernspine.co.in</a>
          </div>
          <p className="mt-5 text-sm leading-7 text-[#65708a]">Disclaimer: Results vary from person to person. Treatment is recommended only after consultation and assessment. This page is for information and is not a substitute for medical advice.</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#edf0f5] pt-4 text-sm text-[#65708a]">
            <p>© Southern Spine, Hyderabad. All rights reserved.</p>
            <Link href="/generic/privacy-policy" className={`rounded-sm text-[#29469b] hover:underline ${focusStyles}`}>Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
