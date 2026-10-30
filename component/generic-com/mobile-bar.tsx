"use client";

import { Calendar } from "lucide-react";
export default function MobileActionBar() {

  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-white border-t shadow-lg
        flex md:hidden
      "
    >
      {/* Book Now – full width (opens the booking popup) */}
      <a
       href="#book-appointment"
        className="
          flex-1 flex items-center justify-center gap-2
          py-4 font-semibold
          text-white
          bg-[#f99c1e]
          text-sm
          active:scale-95 transition
        "
      >
        <Calendar className="w-4 h-4" />
        Book Your Appointment
      </a>
    </div>
  );
}
