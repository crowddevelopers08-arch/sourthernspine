"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CalendarCheck, CalendarDays, ChevronDown, Loader2, Lock, MapPin, Phone, Stethoscope, User, X } from "lucide-react";
import { outfit } from "./font";
import { concerns, findLocation, formatDateLabel, locations } from "./booking-options";
import SlotPicker from "./slot-picker";
import { useRazorpayBooking } from "./use-razorpay-booking";

/** Every "Book Appointment" link on the generic LP points here; clicking one opens this popup. */
export const BOOKING_HASH = "#book-appointment";

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", concern: "Back Pain", location: "", date: "" });
  // calendar popup, opened after choosing a location
  const [slotPickerFor, setSlotPickerFor] = useState<string | null>(null);
  const { startBooking, submitting, error, setError } = useRazorpayBooking();
  const nameRef = useRef<HTMLInputElement>(null);

  // Open on any click of a link to #book-appointment (navbar, hero, cards, footer, mobile bar …)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.(`a[href="${BOOKING_HASH}"]`);
      if (!link) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    // also open when the page is visited with #book-appointment in the URL
    const frame = window.location.hash === BOOKING_HASH ? requestAnimationFrame(() => setOpen(true)) : 0;
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
    };
  }, []);

  // While open: lock page scroll, close on Esc, focus the first field
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !submitting && !slotPickerFor) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const focusTimer = setTimeout(() => nameRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      clearTimeout(focusTimer);
    };
  }, [open, submitting, slotPickerFor]);

  const close = () => {
    if (!submitting) setOpen(false);
  };

  const update = (key: keyof typeof form, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  // choosing a location opens the calendar for that clinic; a new clinic clears the old slot
  const chooseLocation = (value: string) => {
    setForm((prev) => (prev.location === value ? prev : { ...prev, location: value, date: "" }));
    setSlotPickerFor(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const digits = form.phone.replace(/\D/g, "");
    if (form.name.trim().length < 2) return setError("Please enter your full name.");
    if (!/^[6-9]\d{9}$/.test(digits)) return setError("Please enter a valid 10-digit mobile number.");

    if (!form.location) return setError("Please select your preferred clinic location.");
    if (!form.date) {
      setSlotPickerFor(form.location);
      return setError("Please pick a date for your visit.");
    }

    // Saves the lead, then opens Razorpay Checkout for the ₹499 consultation
    await startBooking({
      name: form.name.trim(),
      phone: digits,
      concern: form.concern,
      location: form.location,
      date: form.date,
      time: findLocation(form.location)?.hours ?? "",
    });
  };

  if (!open) return null;

  return (
    <div
      id="booking-modal"
      className={`${outfit.className} fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto overscroll-contain bg-[#0b1842]/70 px-3 py-4 backdrop-blur-sm sm:items-center sm:p-6`}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <style>{`
        @keyframes bookingModalIn { from { opacity: 0; transform: translateY(16px) scale(0.98); } to { opacity: 1; transform: none; } }
        #booking-modal .booking-card { animation: bookingModalIn 0.25s ease-out; }
        @media (prefers-reduced-motion: reduce) { #booking-modal .booking-card { animation: none; } }
        @media (max-width: 639px) {
          #booking-modal form h2 { font-size: 20px; }
          #booking-modal form > p { font-size: 13px; }
          #booking-modal form label > span:first-child { font-size: 11px; }
          #booking-modal input, #booking-modal select { font-size: 16px; }
          #booking-modal button[type="submit"] { font-size: 12px; height: 44px; gap: 8px; letter-spacing: 0.3px; }
          #booking-modal button[type="submit"] svg { width: 15px; height: 15px; flex-shrink: 0; }
          #booking-modal form > p:last-child { font-size: 11px; }
        }
        @media (max-width: 359px) {
          #booking-modal .booking-header-icon { display: none; }
          #booking-modal .booking-price { font-size: 20px; }
          #booking-modal form { padding: 14px; }
        }
      `}</style>

      {slotPickerFor && (
        <div onClick={(e) => e.stopPropagation()}>
          <SlotPicker
            location={slotPickerFor}
            initialDate={form.location === slotPickerFor ? form.date : undefined}
            onConfirm={(date) => {
              setForm((prev) => ({ ...prev, location: slotPickerFor, date }));
              setError(null);
              setSlotPickerFor(null);
            }}
            onClose={() => setSlotPickerFor(null)}
          />
        </div>
      )}

      <div className="booking-card relative w-full max-w-[500px] sm:my-auto" onClick={(e) => e.stopPropagation()}>
        <div className="absolute -inset-[2px] rounded-[26px] bg-gradient-to-br from-[#f99c1e] via-[#f99c1e]/30 to-transparent opacity-80 blur-[2px]" />

        <div className="relative overflow-hidden rounded-[24px] bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
          {/* Price header */}
          <div className="relative flex items-center justify-between gap-2 bg-[#0b1842] py-[12px] pl-[14px] pr-[50px] sm:gap-4 sm:py-[14px] sm:pl-[22px] sm:pr-[60px]">
            <div className="flex min-w-0 items-center gap-[8px] sm:gap-[12px]">
              <span className="booking-header-icon flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[12px] bg-[#f99c1e]/15 sm:h-[40px] sm:w-[40px]">
                <Stethoscope className="h-[18px] w-[18px] text-[#f99c1e] sm:h-[20px] sm:w-[20px]" strokeWidth={2.2} />
              </span>
              <p className="text-[11px] font-semibold uppercase leading-[1.4] tracking-[0.2px] text-white sm:text-[14px] sm:leading-[1.35] sm:tracking-[0.5px]">
                Consultation &amp;
                <br />
                Spinal Assessment
              </p>
            </div>
            <div className="shrink-0 rounded-[12px] bg-[#f99c1e] px-[8px] py-[7px] text-center sm:py-[8px] shadow-[0_6px_20px_-6px_rgba(249,156,30,0.9)] sm:px-[14px]">
              <span className="booking-price block text-[22px] font-extrabold leading-none text-[#0b1842] sm:text-[28px]">₹499</span>
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={close}
              disabled={submitting}
              aria-label="Close booking form"
              className="absolute right-[10px] top-1/2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-50 sm:right-[14px]"
            >
              <X className="h-[18px] w-[18px]" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-[16px] sm:px-[22px] sm:pb-[18px] sm:pt-[18px]" noValidate>
            <h2 id="booking-modal-title" className="text-[22px] font-bold leading-tight text-[#0b1842] sm:text-[25px]">
              Book Your Appointment
            </h2>
            <p className="mt-[4px] text-[14.5px] leading-[1.5] text-[#6b7280]">
              Share your details and our team will call to confirm your slot.
            </p>

            <div className="mt-[12px] space-y-[10px] sm:mt-[16px] sm:space-y-[12px]">
              <Field label="Full name" icon={<User className="h-[16px] w-[16px]" />}>
                <input
                  ref={nameRef}
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

                <Field label="Location" icon={<MapPin className="h-[16px] w-[16px]" />} select>
                  <select
                    value={form.location}
                    onChange={(e) => chooseLocation(e.target.value)}
                    className={`h-[44px] w-full cursor-pointer appearance-none rounded-[12px] border border-[#e5e7eb] bg-[#f8fafc] pl-[42px] pr-[34px] text-[15.5px] font-normal outline-none transition-all focus:border-[#f99c1e] focus:bg-white focus:ring-4 focus:ring-[#f99c1e]/15 ${
                      form.location ? "text-[#0b1842]" : "text-[#9ca3af]"
                    }`}
                  >
                    <option value="" disabled>
                      Select location
                    </option>
                    {locations.map((loc) => (
                      <option key={loc.value} value={loc.value} className="text-[#0b1842]">
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* chosen appointment slot – click to change */}
              {form.location && (
                <button
                  type="button"
                  onClick={() => setSlotPickerFor(form.location)}
                  className={`flex w-full items-center gap-[10px] rounded-[12px] border px-[12px] py-[10px] text-left transition-all ${
                    form.date
                      ? "border-[#f99c1e]/50 bg-[#f99c1e]/10 hover:border-[#f99c1e]"
                      : "border-dashed border-[#f99c1e] bg-white hover:bg-[#f99c1e]/5"
                  }`}
                >
                  <CalendarDays className="h-[18px] w-[18px] shrink-0 text-[#f99c1e]" />
                  <span className="min-w-0 flex-1 text-[14px] leading-snug text-[#0b1842]">
                    {form.date ? (
                      <>
                        <span className="font-semibold">{formatDateLabel(form.date)}</span> · {findLocation(form.location)?.hours}
                        <span className="block text-[12px] text-[#5b6478]">{findLocation(form.location)?.name}</span>
                      </>
                    ) : (
                      <span className="font-semibold">Pick your visit date</span>
                    )}
                  </span>
                  <span className="shrink-0 text-[12.5px] font-semibold text-[#f99c1e] underline-offset-2 hover:underline">
                    {form.date ? "Change" : "Open calendar"}
                  </span>
                </button>
              )}
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
