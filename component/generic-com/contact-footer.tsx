import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUp, CalendarCheck, CheckCircle2, Mail, MapPin, Navigation, Phone, ShieldCheck } from "lucide-react";
import { outfit } from "./font";
import { clinics, footerLinks, mapsLink } from "./nav-links";

const BG_IMAGE = "https://ik.imagekit.io/9yxs4igok/public/ban-4.jpeg";
const PHONE_HREF = "tel:+919464108108";
const EMAIL = "info@southernspine.co.in";

const included = ["Doctor consultation", "Full spinal assessment", "Personalised care plan"];

export default function ContactFooter() {
  return (
    <div id="contact" className={`${outfit.className} scroll-mt-4 bg-[#f5f7fc]`}>
      {/* ================= CTA band ================= */}
      <section aria-labelledby="cta-heading" className="px-4 py-[28px] sm:py-[72px] md:px-[60px]">
        <div className="relative isolate mx-auto max-w-[1320px] overflow-hidden rounded-[28px] bg-[#0b1842] shadow-[0_30px_70px_-30px_rgba(11,24,66,0.6)]">
          {/* photo + overlays */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: `url('${BG_IMAGE}')` }}
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1842] via-[#0b1842]/92 to-[#0b1842]/70" />
          <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 -z-10 h-[340px] w-[340px] rounded-full bg-[#f99c1e]/25 blur-[110px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-24 -z-10 h-[420px] w-[420px] rounded-full border-[70px] border-white/[0.04]" />

          <div className="grid items-center gap-[22px] px-5 py-[26px] sm:gap-[36px] sm:px-[48px] sm:py-[56px] lg:grid-cols-2 lg:gap-[48px]">
            {/* ---- Left: message ---- */}
            <div className="text-white">
              <span className="inline-flex items-center gap-[8px] rounded-full border border-[#f99c1e]/40 bg-[#f99c1e]/10 px-[14px] py-[6px] text-[12px] font-semibold uppercase tracking-[1.8px] text-[#f99c1e]">
                <span className="relative flex h-[8px] w-[8px]">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f99c1e] opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-[#f99c1e]" />
                </span>
                Book Today
              </span>

              <h2 id="cta-heading" className="mt-[12px] text-[27px] font-bold leading-[1.15] tracking-[-0.5px] sm:mt-[16px] sm:text-[38px] lg:text-[44px]">
                Take the First Step Towards <span className="text-[#f99c1e]">Pain-Free Movement</span>
              </h2>

              <p className="mt-[10px] text-[15px] leading-[1.6] text-white/80 sm:mt-[14px] sm:text-[18px] sm:leading-[1.7]">
                Book your consultation and spinal assessment for{" "}
                <span className="rounded-[8px] bg-[#f99c1e] px-[10px] py-[2px] font-bold text-[#0b1842]">₹499</span>
              </p>

              <ul className="mt-[14px] flex flex-wrap gap-x-[16px] gap-y-[6px] sm:mt-[20px] sm:gap-x-[20px] sm:gap-y-[10px]">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-[8px] text-[14px] font-medium text-white/90 sm:text-[15px]">
                    <CheckCircle2 className="h-[18px] w-[18px] text-[#f99c1e]" strokeWidth={2.2} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-[18px] flex flex-col gap-[8px] sm:mt-[28px] sm:flex-row sm:gap-[12px]">
                <a
                  href="#book-appointment"
                  className="group inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-[8px] rounded-full bg-[#f99c1e] px-[12px] py-[12px] text-center text-[13px] font-bold uppercase tracking-[0.2px] text-[#0b1842] shadow-[0_12px_30px_-10px_rgba(249,156,30,0.8)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-white sm:min-h-0 sm:w-auto sm:gap-[10px] sm:px-[26px] sm:py-[14px] sm:text-[15px] sm:tracking-[0.5px]"
                >
                  <CalendarCheck className="h-[18px] w-[18px] shrink-0" strokeWidth={2.3} />
                  Book Appointment
                  <ArrowRight className="h-[16px] w-[16px] shrink-0 transition-transform duration-300 group-hover:translate-x-[3px]" strokeWidth={2.5} />
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-[8px] rounded-full border-2 border-white/25 px-[12px] py-[10px] text-center text-[13px] font-semibold uppercase tracking-[0.2px] text-white transition-all duration-300 hover:border-[#f99c1e] hover:text-[#f99c1e] sm:min-h-0 sm:w-auto sm:gap-[10px] sm:px-[22px] sm:py-[12px] sm:text-[15px] sm:tracking-[0.5px]"
                >
                  <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Phone className="h-[13px] w-[13px]" strokeWidth={2.4} />
                  </span>
                  Call: 94641 08108
                </a>
              </div>
            </div>

            {/* ---- Right: clinic locations ---- */}
            <div className="flex flex-col gap-[10px] sm:gap-[16px]">
              <p className="text-[12px] font-semibold uppercase tracking-[2px] text-white/60">Visit our clinics</p>
              {clinics.map((clinic, i) => (
                <article
                  key={clinic.name}
                  className="group relative flex items-start gap-[12px] rounded-[16px] border border-white/15 bg-white/[0.07] p-[14px] backdrop-blur-md transition-all duration-300 hover:-translate-y-[3px] hover:border-[#f99c1e]/50 hover:bg-white/[0.11] sm:gap-[16px] sm:rounded-[20px] sm:p-[24px]"
                >
                  <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[12px] bg-[#f99c1e] text-[#0b1842] shadow-[0_8px_20px_-8px_rgba(249,156,30,0.9)] sm:h-[48px] sm:w-[48px] sm:rounded-[14px]">
                    <MapPin className="h-[22px] w-[22px]" strokeWidth={2.2} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-[18px] font-bold text-white sm:text-[19px]">{clinic.name}</h3>
                      <span className="text-[12px] font-semibold text-white/40">0{i + 1}</span>
                    </div>
                    <address className="mt-[6px] text-[14px] not-italic leading-[1.6] text-white/75 sm:text-[15px]">
                      {clinic.address}
                    </address>
                    <a
                      href={mapsLink(clinic.address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-[8px] inline-flex items-center gap-[6px] text-[13px] font-semibold uppercase tracking-[0.8px] text-[#f99c1e] transition-colors hover:text-white sm:mt-[12px]"
                    >
                      <Navigation className="h-[14px] w-[14px]" strokeWidth={2.3} />
                      Get directions
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="bg-[#081231] pb-[calc(34px+env(safe-area-inset-bottom))] text-white md:pb-0">
        <div className="mx-auto grid max-w-[1440px] gap-[22px] px-4 py-[28px] sm:grid-cols-2 sm:gap-[36px] sm:py-[48px] md:px-[60px] lg:grid-cols-[1.3fr_0.8fr_1.2fr_1.2fr] lg:gap-[40px]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block rounded-[14px] bg-white px-[14px] py-[10px]">
              <Image
                src="https://ik.imagekit.io/9yxs4igok/public/logos.png"
                alt="Southern Spine Logo"
                width={200}
                height={56}
                className="h-[44px] w-auto object-contain"
              />
            </a>
            <p className="mt-[12px] max-w-[300px] text-[14px] leading-[1.6] text-white/65 sm:mt-[16px] sm:leading-[1.7]">
              Chiropractic, physiotherapy and osteopathy care in Hyderabad, led by Dr. Raghupathi Jadhav.
            </p>
            <div className="mt-[12px] space-y-[6px] sm:mt-[18px] sm:space-y-[10px]">
              <a href={PHONE_HREF} className="flex items-center gap-[10px] text-[15px] font-medium text-white transition-colors hover:text-[#f99c1e]">
                <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white/10">
                  <Phone className="h-[14px] w-[14px] text-[#f99c1e]" strokeWidth={2.3} />
                </span>
                +91 94641 08108
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-[10px] break-all text-[15px] font-medium text-white transition-colors hover:text-[#f99c1e]">
                <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Mail className="h-[14px] w-[14px] text-[#f99c1e]" strokeWidth={2.3} />
                </span>
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[2px] text-[#f99c1e]">Quick Links</h3>
            <ul className="mt-[10px] grid grid-cols-2 gap-x-4 gap-y-[8px] sm:mt-[16px] sm:block sm:space-y-[10px]">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-[8px] text-[15px] text-white/75 transition-colors hover:text-white"
                  >
                    <span className="h-[2px] w-[10px] bg-[#f99c1e]/60 transition-all duration-300 group-hover:w-[18px] group-hover:bg-[#f99c1e]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinics */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[2px] text-[#f99c1e]">Our Clinics</h3>
            <ul className="mt-[10px] space-y-[10px] sm:mt-[16px] sm:space-y-[16px]">
              {clinics.map((clinic) => (
                <li key={clinic.name} className="flex gap-[10px]">
                  <MapPin className="mt-[3px] h-[16px] w-[16px] shrink-0 text-[#f99c1e]" strokeWidth={2.2} />
                  <div>
                    <p className="text-[15px] font-semibold text-white">{clinic.name}</p>
                    <p className="mt-[2px] text-[14px] leading-[1.6] text-white/65">{clinic.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[2px] text-[#f99c1e]">Please Note</h3>
            <div className="mt-[10px] rounded-[16px] border border-white/10 bg-white/[0.04] p-[14px] sm:mt-[16px] sm:p-[16px]">
              <ShieldCheck className="h-[22px] w-[22px] text-[#f99c1e]" strokeWidth={2} />
              <p className="mt-[10px] text-[13.5px] leading-[1.7] text-white/65">
                Results vary from person to person. Treatment is recommended only after consultation and assessment. This
                page is for information and is not a substitute for medical advice.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-[8px] px-4 py-[12px] text-center text-[12px] text-white/55 sm:gap-[12px] sm:py-[18px] sm:text-[13.5px] md:px-[60px]">
            <p>© {new Date().getFullYear()} Southern Spine, Hyderabad. All rights reserved.</p>
            <div className="flex w-full items-center justify-center">
              <Link href="/generic/privacy-policy" className="inline-flex min-h-11 items-center justify-center rounded-sm text-[14px] font-medium text-white transition-colors hover:text-[#f99c1e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f99c1e]">
                Privacy Policy
              </Link>
              <a
                href="#home"
                aria-label="Back to top"
                className="fixed bottom-[calc(76px+env(safe-area-inset-bottom))] right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#f99c1e] text-[#0b1842] shadow-lg transition-transform duration-300 hover:-translate-y-[3px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f99c1e] md:bottom-6 md:right-6"
              >
                <ArrowUp className="h-[16px] w-[16px]" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
