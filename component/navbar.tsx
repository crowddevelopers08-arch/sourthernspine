"use client";

import React from "react";
import Image from "next/image";

export default function SouthernSpineHeader() {
  const NAVY = "#0b1842";
  const ORANGE = "#f99c1e";

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">
        <div className="flex h-[76px] sm:h-[62px] md:h-[95px] items-center justify-between gap-3">
          {/* Logo (fluid, never breaks) */}
          <div className="relative h-[60px] sm:h-[34px] md:h-[38px] lg:h-[80px] flex-1 min-w-0">
            <Image
              src="https://ik.imagekit.io/9yxs4igok/public/logos.png"
              alt="Southern Spine Logo"
              fill
              priority
              sizes="(max-width: 640px) 70vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 1020px"
              className="object-contain object-left"
            />
          </div>

          {/* CTA (never wraps, scales cleanly) */}
          <a
            href="tel:+91 9464108108"
            className="
              shrink-0 whitespace-nowrap rounded-full font-extrabold
              text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px]
              px-3 sm:px-4 md:px-5 lg:px-6
              py-1.5 sm:py-2 md:py-2.5
              leading-none
              transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]
            "
            style={{
              backgroundColor: ORANGE,
              color: NAVY,
              border: `2px solid ${NAVY}`,
              boxShadow: `0 2px 0 ${NAVY}`,
            }}
          >
            +91 9464108108
          </a>
        </div>
      </div>

      {/* Wave (fixed small height, always visible) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-[8px] sm:h-[10px] md:h-[12px]"
        viewBox="0 0 1200 16"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="wavePattern"
            x="0"
            y="0"
            width="26"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0,16 Q6.5,0 13,16 T26,16" fill={NAVY} />
          </pattern>
        </defs>
        <rect width="100%" height="16" fill="url(#wavePattern)" />
      </svg>
    </header>
  );
}

