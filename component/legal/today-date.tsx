"use client";

import { useEffect, useState } from "react";

/** "22 October 2026" in India time */
const formatToday = () =>
  new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

/** Shows today's date; computed in the browser so it is always current, even on pre-built pages */
export default function TodayDate() {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    setToday(formatToday());
  }, []);

  // reserve the space until the date is filled in, so the line doesn't jump
  return <span className="inline-block min-w-[9ch]">{today ?? " "}</span>;
}
