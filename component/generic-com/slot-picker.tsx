"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Check, ChevronLeft, ChevronRight, Clock, MapPin, X } from "lucide-react";
import {
  BOOKING_WINDOW_DAYS,
  CLINIC_DAYS,
  dateToIso,
  findLocation,
  formatDateLabel,
  isBookableDate,
  isoToDate,
  nowInIndia,
} from "./booking-options";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type Props = {
  location: string;
  initialDate?: string;
  onConfirm: (date: string) => void;
  onClose: () => void;
};

/** Calendar popup for one clinic: only Mon/Tue/Fri/Sat can be picked; the visit time is the clinic's hours. */
export default function SlotPicker({ location, initialDate, onConfirm, onClose }: Props) {
  const clinic = findLocation(location);
  const today = nowInIndia().date;

  // first bookable day – where the calendar opens if nothing is chosen yet
  const firstAvailable = useMemo(() => {
    if (!clinic) return today;
    for (let i = 0; i <= BOOKING_WINDOW_DAYS; i++) {
      const iso = dateToIso(new Date(isoToDate(today).getTime() + i * 86_400_000));
      if (isBookableDate(clinic, iso)) return iso;
    }
    return today;
  }, [clinic, today]);

  const [date, setDate] = useState(clinic && initialDate && isBookableDate(clinic, initialDate) ? initialDate : "");
  const [month, setMonth] = useState(() => (date || firstAvailable).slice(0, 7)); // "YYYY-MM"

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [onClose]);

  if (!clinic) return null;

  // calendar grid for the visible month (weeks start on Monday)
  const first = isoToDate(`${month}-01`);
  const daysInMonth = new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + 1, 0)).getUTCDate();
  const leadingBlanks = (first.getUTCDay() + 6) % 7;
  const cells: (string | null)[] = [
    ...Array.from({ length: leadingBlanks }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => `${month}-${String(i + 1).padStart(2, "0")}`),
  ];

  const shiftMonth = (delta: number) =>
    setMonth(dateToIso(new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + delta, 1))).slice(0, 7));
  const lastBookable = dateToIso(new Date(isoToDate(today).getTime() + BOOKING_WINDOW_DAYS * 86_400_000));
  const canGoBack = month > today.slice(0, 7);
  const canGoForward = month < lastBookable.slice(0, 7);
  const monthLabel = new Intl.DateTimeFormat("en-IN", { month: "long", year: "numeric", timeZone: "UTC" }).format(first);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-[#0b1842]/60 p-3 backdrop-blur-[2px] sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="slot-picker-title"
    >
      <div
        className="slot-card relative my-auto w-full max-w-[440px] overflow-hidden rounded-[22px] bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes slotIn { from { opacity: 0; transform: translateY(14px) scale(0.98); } to { opacity: 1; transform: none; } }
          .slot-card { animation: slotIn 0.22s ease-out; }
          @media (prefers-reduced-motion: reduce) { .slot-card { animation: none; } }
        `}</style>

        {/* Header: location */}
        <div className="relative bg-[#0b1842] px-[18px] py-[14px] pr-[54px] text-white sm:px-[22px]">
          <p className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#f99c1e]">Choose your visit date</p>
          <p id="slot-picker-title" className="mt-[4px] flex items-center gap-[8px] text-[17px] font-bold sm:text-[18px]">
            <MapPin className="h-[18px] w-[18px] shrink-0 text-[#f99c1e]" />
            {clinic.value}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close calendar"
            className="absolute right-[12px] top-1/2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
          >
            <X className="h-[18px] w-[18px]" />
          </button>
        </div>

        <div className="p-[16px] sm:p-[20px]">
          {/* Month navigation */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => shiftMonth(-1)}
              disabled={!canGoBack}
              aria-label="Previous month"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full text-[#0b1842] transition-colors hover:bg-[#f5f7fc] disabled:opacity-30"
            >
              <ChevronLeft className="h-[18px] w-[18px]" />
            </button>
            <p className="flex items-center gap-[8px] text-[15px] font-bold text-[#0b1842]">
              <CalendarDays className="h-[17px] w-[17px] text-[#f99c1e]" />
              {monthLabel}
            </p>
            <button
              type="button"
              onClick={() => shiftMonth(1)}
              disabled={!canGoForward}
              aria-label="Next month"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full text-[#0b1842] transition-colors hover:bg-[#f5f7fc] disabled:opacity-30"
            >
              <ChevronRight className="h-[18px] w-[18px]" />
            </button>
          </div>

          {/* Calendar – only Mon, Tue, Fri, Sat are clickable */}
          <div className="mt-[10px] grid grid-cols-7 gap-[4px] text-center">
            {WEEKDAYS.map((d) => {
              const open = ["Mon", "Tue", "Fri", "Sat"].includes(d);
              return (
                <span
                  key={d}
                  className={`py-[4px] text-[11.5px] font-semibold uppercase tracking-[0.5px] ${open ? "text-[#0b1842]" : "text-[#cbd2e1]"}`}
                >
                  {d}
                </span>
              );
            })}
            {cells.map((iso, i) => {
              if (!iso) return <span key={`blank-${i}`} />;
              const bookable = isBookableDate(clinic, iso);
              const selected = iso === date;
              const isToday = iso === today;
              return (
                <button
                  key={iso}
                  type="button"
                  disabled={!bookable}
                  onClick={() => setDate(iso)}
                  aria-pressed={selected}
                  aria-label={formatDateLabel(iso)}
                  className={`relative mx-auto flex h-[38px] w-full max-w-[44px] items-center justify-center rounded-[10px] text-[14px] font-semibold transition-all ${
                    selected
                      ? "bg-[#f99c1e] text-[#0b1842] shadow-[0_6px_16px_-6px_rgba(249,156,30,0.9)]"
                      : bookable
                        ? "bg-[#f5f7fc] text-[#0b1842] hover:bg-[#f99c1e]/15"
                        : "cursor-not-allowed text-[#cbd2e1]"
                  }`}
                >
                  {Number(iso.slice(8))}
                  {isToday && !selected && <span className="absolute bottom-[4px] h-[4px] w-[4px] rounded-full bg-[#f99c1e]" />}
                </button>
              );
            })}
          </div>

          {/* Clinic timing (fixed for the location) */}
          <div className="mt-[16px] flex items-center gap-[12px] rounded-[14px] border border-[#f99c1e]/40 bg-[#f99c1e]/10 px-[14px] py-[12px]">
            <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#f99c1e] text-[#0b1842]">
              <Clock className="h-[18px] w-[18px]" strokeWidth={2.4} />
            </span>
            <span className="min-w-0">
              <span className="block text-[15px] font-bold text-[#0b1842]">{clinic.hours}</span>
              <span className="block text-[12.5px] text-[#5b6478]">
                {clinic.name} timing · {CLINIC_DAYS}
              </span>
            </span>
          </div>

          {/* Confirm */}
          <button
            type="button"
            disabled={!date}
            onClick={() => onConfirm(date)}
            className="mt-[16px] flex h-[46px] w-full items-center justify-center gap-[8px] rounded-[12px] bg-gradient-to-r from-[#f99c1e] to-[#ffb547] text-[15px] font-bold uppercase tracking-[0.5px] text-[#0b1842] shadow-[0_12px_28px_-10px_rgba(249,156,30,0.9)] transition-all hover:-translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
          >
            <Check className="h-[18px] w-[18px]" strokeWidth={2.6} />
            {date ? `Confirm · ${formatDateLabel(date).replace(/ \d{4}$/, "")}` : "Select a date"}
          </button>
        </div>
      </div>
    </div>
  );
}
