"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock,
  Loader2,
  Lock,
  Phone,
  Stethoscope,
  User,
} from "lucide-react";
import { outfit } from "./font";
import { concerns, times } from "./booking-options";
import { useRazorpayBooking } from "./use-razorpay-booking";

const BG_IMAGES = [
  "https://ik.imagekit.io/9yxs4igok/public/ban-1.jpg",
  "https://ik.imagekit.io/9yxs4igok/public/ban-2.jpeg",
  "https://ik.imagekit.io/9yxs4igok/public/ban-3.avif",
  "https://ik.imagekit.io/9yxs4igok/public/ban-4.jpeg",
];
const PHONE_HREF = "tel:+919464108108";

const highlights = [
  "Thorough spinal screening before any treatment",
  "Personalised care plan, not a generic package",
  "Transparent pricing with flexible payment plans",
];

export default function HeroBanner() {
  const [form, setForm] = useState({ name: "", phone: "", concern: "Back Pain", time: "Tomorrow" });
  const { startBooking, submitting, error, setError } = useRazorpayBooking();
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setBgIndex((i) => (i + 1) % BG_IMAGES.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const update = (key: keyof typeof form, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const digits = form.phone.replace(/\D/g, "");
    if (form.name.trim().length < 2) return setError("Please enter your full name.");
    if (!/^[6-9]\d{9}$/.test(digits)) return setError("Please enter a valid 10-digit mobile number.");

    // Saves the lead, then opens Razorpay Checkout for the ₹499 consultation
    await startBooking({ name: form.name.trim(), phone: digits, concern: form.concern, time: form.time });
  };

  return (
    <section id="home"       className={`${outfit.className} relative isolate flex w-full items-center overflow-hidden bg-[#0b1842] lg:min-h-[calc(100svh-127px)]`}
    >
      <style>{`
        @keyframes heroZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.12); }
          100% { transform: scale(1); }
        }
        @media (max-width: 639px) {
          #home #book-appointment form h2 { font-size: 20px; }
          #home #book-appointment form > p { font-size: 13px; }
          #home #book-appointment form label > span:first-child { font-size: 11px; }
          #home #book-appointment input,
          #home #book-appointment select { font-size: 14px; }
          #home #book-appointment button[type="submit"] {
            font-size: 12px;
            height: 44px;
            gap: 8px;
            letter-spacing: 0.3px;
          }
          #home #book-appointment button[type="submit"] svg {
            width: 15px;
            height: 15px;
            flex-shrink: 0;
          }
          #home #book-appointment form > p:last-child { font-size: 11px; }
        }
        @media (max-width: 334px) {
          #home { min-width: 0; max-width: 100%; }
          #home > .hero-layout {
            grid-template-columns: minmax(0, 1fr);
            padding-left: 12px;
            padding-right: 12px;
          }
          #home .hero-label {
            font-size: 9px;
            letter-spacing: 0.6px;
            padding-left: 10px;
            padding-right: 10px;
          }
          #home h1 { font-size: 28px; }
          #home .hero-copy { overflow-wrap: anywhere; }
          #home #book-appointment form { padding: 14px; }
          #home #book-appointment input,
          #home #book-appointment select { min-width: 0; max-width: 100%; }
        }
      `}</style>

      {/* Background slider – zoom in / zoom out */}
      {BG_IMAGES.map((src, index) => (
        <div
          key={src}
          aria-hidden="true"
          className={`absolute inset-0 -z-20 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out motion-safe:animate-[heroZoom_16s_ease-in-out_infinite] ${
            index === bgIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}

      {/* Overlays – dark on the text side, clear on the image side */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1842]/95 via-[#0b1842]/75 to-[#0b1842]/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b1842]/60 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#f99c1e]/20 blur-[120px]" />

      <div className="hero-layout mx-auto grid w-full min-w-0 max-w-[1440px] grid-cols-1 items-center gap-6 px-4 py-7 sm:gap-10 sm:py-14 md:px-[60px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-8 xl:gap-16">
        {/* ===== Left: content ===== */}
        <div className="hero-copy min-w-0 text-white">
          <span className="hero-label inline-flex max-w-full items-center gap-[8px] rounded-full border border-[#f99c1e]/40 bg-[#f99c1e]/10 px-[12px] py-[6px] text-[10px] font-semibold uppercase tracking-[1px] text-[#f99c1e] backdrop-blur-sm sm:px-[14px] sm:py-[7px] sm:text-[13px] sm:tracking-[1.8px]">
            <span className="relative flex h-[8px] w-[8px] shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f99c1e] opacity-75" />
              <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-[#f99c1e]" />
            </span>
            Chiropractic Care in Hyderabad
          </span>

          <h1 className="mt-[14px] text-[32px] font-extrabold leading-[1.15] tracking-[-0.5px] sm:mt-[18px] sm:text-[46px] sm:leading-[1.1] lg:text-[50px] xl:text-[58px]">
            Your Spine Deserves{" "}
            <span className="relative inline-block text-[#f99c1e]">
              Specialist Care
              <svg
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-[6px] left-0 h-[10px] w-full"
                aria-hidden="true"
              >
                <path d="M2 9 Q 75 2 150 7 T 298 4" fill="none" stroke="#f99c1e" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-[14px] max-w-[560px] text-[15px] font-normal leading-[1.6] text-white/85 sm:mt-[20px] sm:text-[18px] sm:font-light sm:leading-[1.7]">
            Expert chiropractic care for back pain, neck pain and joint problems. Start with a spinal assessment by{" "}
            <span className="font-bold text-white">Dr. Raghupathi Jadhav</span> and get a plan built around you.
          </p>

          <ul className="mt-[16px] space-y-[10px] sm:mt-[22px] sm:space-y-[12px]">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-[10px] sm:gap-[12px]">
                <span className="mt-[1px] flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#f99c1e] shadow-[0_0_0_4px_rgba(249,156,30,0.18)]">
                  <CheckCircle2 className="h-[15px] w-[15px] text-[#0b1842]" strokeWidth={2.6} />
                </span>
                <span className="text-[14px] font-medium leading-[1.5] text-white/95 sm:text-[17px]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-[18px] flex flex-col gap-[14px] sm:mt-[28px] sm:flex-row sm:items-center">
            <a
              href="#book-appointment"
              className="group hidden sm:inline-flex items-center justify-center gap-[10px] rounded-full bg-[#f99c1e] px-[26px] py-[14px] text-[15px] font-bold uppercase tracking-[0.5px] text-[#0b1842] shadow-[0_10px_30px_-8px_rgba(249,156,30,0.75)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-white"
            >
              <CalendarCheck className="h-[17px] w-[17px]" strokeWidth={2.4} />
              Book Appointment
              <ArrowRight className="h-[16px] w-[16px] transition-transform duration-300 group-hover:translate-x-[3px]" strokeWidth={2.6} />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-[10px] rounded-full border-2 border-white/30 px-[22px] py-[10px] text-[15px] font-semibold uppercase tracking-[0.5px] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#f99c1e] hover:text-[#f99c1e]"
            >
              <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white/15">
                <Phone className="h-[13px] w-[13px]" strokeWidth={2.4} />
              </span>
              Call: 94641 08108
            </a>
          </div>
        </div>

        {/* ===== Right: form ===== */}
        <div id="book-appointment" className="relative mx-auto w-full min-w-0 max-w-[500px] scroll-mt-6 lg:mr-0">
          <div className="absolute -inset-[2px] rounded-[26px] bg-gradient-to-br from-[#f99c1e] via-[#f99c1e]/30 to-transparent opacity-80 blur-[2px]" />

          <div className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            {/* Price header */}
            <div className="relative flex items-center justify-between gap-2 bg-[#0b1842] px-[16px] py-[12px] sm:gap-4 sm:px-[22px] sm:py-[14px]">
              <div className="flex min-w-0 items-center gap-[8px] sm:gap-[12px]">
                <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[12px] bg-[#f99c1e]/15">
                  <Stethoscope className="h-[20px] w-[20px] text-[#f99c1e]" strokeWidth={2.2} />
                </span>
                <p className="text-[11px] font-semibold uppercase leading-[1.4] tracking-[0.2px] text-white sm:text-[14px] sm:leading-[1.35] sm:tracking-[0.5px]">
                  Consultation &amp;
                  <br />
                  Spinal Assessment
                </p>
              </div>
              <div className="shrink-0 rounded-[12px] bg-[#f99c1e] px-[10px] py-[8px] text-center shadow-[0_6px_20px_-6px_rgba(249,156,30,0.9)] sm:px-[14px]">
                <span className="block text-[28px] font-extrabold leading-none text-[#0b1842]">₹499</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-[16px] sm:px-[22px] sm:pb-[18px] sm:pt-[18px]" noValidate>
              <h2 className="text-[22px] font-bold leading-tight text-[#0b1842] sm:text-[25px]">Book Your Appointment</h2>
              <p className="mt-[4px] text-[14.5px] leading-[1.5] text-[#6b7280]">
                Share your details and our team will call to confirm your slot.
              </p>

              <div className="mt-[12px] space-y-[10px] sm:mt-[16px] sm:space-y-[12px]">
                <Field label="Full name" icon={<User className="h-[16px] w-[16px]" />}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className="h-[44px] w-full rounded-[12px] border border-[#e5e7eb] bg-[#f8fafc] pl-[42px] pr-[14px] text-[15.5px] font-normal text-[#0b1842] outline-none transition-all placeholder:text-[#9ca3af] focus:border-[#f99c1e] focus:bg-white focus:ring-4 focus:ring-[#f99c1e]/15"
                  />
                </Field>

                <Field label="Phone number" icon={<Phone className="h-[16px] w-[16px]" />}>
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value.replace(/\D/g, ""))}
                    placeholder="10-digit mobile number"
                    autoComplete="tel-national"
                    className="h-[44px] w-full rounded-[12px] border border-[#e5e7eb] bg-[#f8fafc] pl-[42px] pr-[14px] text-[15.5px] font-normal text-[#0b1842] outline-none transition-all placeholder:text-[#9ca3af] focus:border-[#f99c1e] focus:bg-white focus:ring-4 focus:ring-[#f99c1e]/15"
                  />
                </Field>

                <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2">
                  <Field label="Area of concern" icon={<Stethoscope className="h-[16px] w-[16px]" />} select>
                    <select
                      value={form.concern}
                      onChange={(e) => update("concern", e.target.value)}
                      className="h-[44px] w-full cursor-pointer appearance-none rounded-[12px] border border-[#e5e7eb] bg-[#f8fafc] pl-[42px] pr-[34px] text-[15.5px] font-normal text-[#0b1842] outline-none transition-all focus:border-[#f99c1e] focus:bg-white focus:ring-4 focus:ring-[#f99c1e]/15"
                    >
                      {concerns.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Preferred time" icon={<Clock className="h-[16px] w-[16px]" />} select>
                    <select
                      value={form.time}
                      onChange={(e) => update("time", e.target.value)}
                      className="h-[44px] w-full cursor-pointer appearance-none rounded-[12px] border border-[#e5e7eb] bg-[#f8fafc] pl-[42px] pr-[34px] text-[15.5px] font-normal text-[#0b1842] outline-none transition-all focus:border-[#f99c1e] focus:bg-white focus:ring-4 focus:ring-[#f99c1e]/15"
                    >
                      {times.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>
              </div>

              {error && (
                <p className="mt-[14px] rounded-[10px] bg-red-50 px-[12px] py-[9px] text-[14px] font-medium text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="group mt-[18px] flex h-[48px] w-full items-center justify-center gap-[10px] rounded-[12px] bg-gradient-to-r from-[#f99c1e] to-[#ffb547] text-[16px] font-bold uppercase tracking-[0.6px] text-[#0b1842] shadow-[0_12px_28px_-10px_rgba(249,156,30,0.9)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_16px_34px_-10px_rgba(249,156,30,1)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-[18px] w-[18px] animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={2.4} />
                    Pay ₹499 &amp; Book
                    <ArrowRight className="h-[16px] w-[16px] transition-transform duration-300 group-hover:translate-x-[3px]" strokeWidth={2.6} />
                  </>
                )}
              </button>

              <p className="mt-[10px] flex items-center justify-center gap-[6px] text-center text-[12px] leading-[1.5] text-[#9ca3af] sm:mt-[12px] sm:text-[13px]">
                <Lock className="h-[12px] w-[12px] shrink-0" />
                <span>Secure payment by Razorpay. Your details are used only to schedule your visit.</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  icon,
  select,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  select?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-[6px] block text-[13px] font-semibold uppercase tracking-[0.6px] text-[#0b1842]">{label}</span>
      <span className="relative block">
        <span className="pointer-events-none absolute left-[14px] top-1/2 -translate-y-1/2 text-[#f99c1e]">{icon}</span>
        {children}
        {select && (
          <ChevronDown className="pointer-events-none absolute right-[12px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-[#6b7280]" />
        )}
      </span>
    </label>
  );
}
