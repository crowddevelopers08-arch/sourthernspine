"use client";
import React from "react";

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-5 mt-4 sm:mb-6">
      
      {/* Back to Home */}
      <a
        href="/"
        className="group bg-[#f99c1e] text-white px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        Back to Home
      </a>

      {/* WhatsApp Button */}
      {/* <a
        href="https://wa.me/919380902110"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-[#25D366] text-white px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
        </svg>
        Chat on WhatsApp
      </a> */}

    </div>
  );
};

export default ActionButtons;
