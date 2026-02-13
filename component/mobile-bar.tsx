"use client";

import { Phone, Calendar } from "lucide-react";
import PopupForm from "./popup";
import { useState } from "react";

export default function MobileActionBar() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-white border-t shadow-lg
        flex md:hidden
      "
    >
      {/* Call Now */}
      <a
        href="tel:+919700575616"
        className="
          flex-1 flex items-center justify-center gap-2
          py-4 font-semibold text-white
          text-sm
          bg-[#0b1842]
          active:scale-95 transition
        "
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>

      {/* Book Now */}
      <button
onClick={() => setIsPopupOpen(true)}
        className="
          flex-1 flex items-center justify-center gap-2
          py-4 font-semibold
          text-white
          bg-[#f99c1e]
          text-sm
          border-l border-gray-200
          active:scale-95 transition
        "
      >
        <Calendar className="w-4 h-4" />
        Book Now
      </button>
            <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}
