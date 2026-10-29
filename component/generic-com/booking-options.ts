// Options for the generic LP booking form – shared by the form and the order API (for validation)
export const concerns = ["Back Pain", "Neck Pain", "Hip Pain", "Sciatica", "Shoulder Pain", "Ankle Sprain", "Other"];

/** Clinic open days: Mon, Tue, Fri, Sat (JS getDay(): 0 = Sun … 6 = Sat) */
export const OPEN_WEEKDAYS = [1, 2, 5, 6];
export const CLINIC_DAYS = "Mon, Tue, Fri & Sat";
/** How far ahead a visitor can book */
export const BOOKING_WINDOW_DAYS = 45;

type Location = { value: string; name: string; hours: string; closeHour: number };

export const locations: Location[] = [
  { value: "Chikkadpally, Hyderabad", name: "Chikkadpally", hours: "10 AM – 1 PM", closeHour: 13 },
  { value: "Jubilee Hills, Hyderabad", name: "Jubilee Hills", hours: "4 PM – 8 PM", closeHour: 20 },
];

export const findLocation = (value: string) => locations.find((l) => l.value === value);

/** Today's date (YYYY-MM-DD) and the current hour, in India time */
export function nowInIndia() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(new Date())
      .map((p) => [p.type, p.value])
  );
  return { date: `${parts.year}-${parts.month}-${parts.day}`, hour: Number(parts.hour) };
}

/** "2026-10-31" → Date at UTC midnight (timezone-safe for weekday / arithmetic) */
export const isoToDate = (iso: string) => new Date(`${iso}T00:00:00Z`);
export const dateToIso = (d: Date) => d.toISOString().slice(0, 10);

/** "Fri, 31 Oct 2026" */
export const formatDateLabel = (iso: string) =>
  new Intl.DateTimeFormat("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(
    isoToDate(iso)
  );

/**
 * Can this clinic be booked on this date?
 * Only Mon/Tue/Fri/Sat, not in the past, within the booking window,
 * and not today once that clinic's hours are over.
 */
export function isBookableDate(location: Location, iso: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false;
  const day = isoToDate(iso);
  if (Number.isNaN(day.getTime()) || !OPEN_WEEKDAYS.includes(day.getUTCDay())) return false;
  const now = nowInIndia();
  const diffDays = Math.round((day.getTime() - isoToDate(now.date).getTime()) / 86_400_000);
  if (diffDays < 0 || diffDays > BOOKING_WINDOW_DAYS) return false;
  return diffDays > 0 || now.hour < location.closeHour;
}
