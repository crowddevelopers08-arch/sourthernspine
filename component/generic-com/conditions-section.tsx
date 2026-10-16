"use client";

import { useState } from "react";
import Image from "next/image";
import { outfit } from "./font";

type Condition = { name: string; icon: string };

/* Icons live in /public/brand-icons (recoloured to brand navy + orange) */
const conditions: Condition[] = [
  { name: "Back Pain", icon: "/brand-icons/sur-icons-1.png" },
  { name: "Neck Pain", icon: "/brand-icons/sur-icons-2.png" },
  { name: "Sciatica", icon: "/brand-icons/sur-icons-3.png" },
  { name: "Slip Disc", icon: "/brand-icons/sur-icons-4.png" },
  { name: "Cervical Spondylosis", icon: "/brand-icons/sur-icons-5.png" },
  { name: "Shoulder Impingement", icon: "/brand-icons/sur-icons-6.png" },
  { name: "Hip Pain", icon: "/brand-icons/sur-icons-7.png" },
  { name: "Ankle Strain", icon: "/brand-icons/sur-icons-8.png" },
  { name: "Sports Injuries", icon: "/brand-icons/sur-icons-9.png" },
  { name: "Chondromalacia Patella", icon: "/brand-icons/sur-icons-10.png" },
  { name: "Muscle Injury", icon: "/brand-icons/sur-icons-11.png" },
  { name: "Posture Problems", icon: "/brand-icons/sur-icons-12.png" },
];

export default function ConditionsSection() {
  const [holding, setHolding] = useState(false);

  return (
    <section
      id="conditions"
      className={`${outfit.className} relative w-full overflow-hidden bg-gradient-to-b from-[#fff8ef] to-[#fffdf9] py-[50px] sm:py-[60px]`}
    >
      {/* soft decorative glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-32 h-[340px] w-[340px] rounded-full bg-[#f99c1e]/15 blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-32 h-[360px] w-[360px] rounded-full bg-[#0b1842]/[0.07] blur-[110px]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-4 md:px-[60px]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-[10px]">
          
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#f99c1e] sm:text-[12px]">
              Conditions
            </span>
          
          </div>
          <h2 className="mt-[8px] text-[26px] font-bold leading-tight text-[#0b1842] sm:text-[32px]">
            What We <span className="text-[#f99c1e]">Treat</span>
          </h2>
          <p className="mt-[6px] max-w-[520px] text-[14px] leading-[1.6] text-[#5b6478] sm:text-[15px]">
            If you are dealing with any of these, an assessment is the right first step.
          </p>
        </div>

        {/* Cards */}
        <div
          className="conditions-viewport mt-[30px] overflow-hidden sm:overflow-visible"
          onPointerDown={() => setHolding(true)}
          onPointerUp={() => setHolding(false)}
          onPointerLeave={() => setHolding(false)}
          onPointerCancel={() => setHolding(false)}
          onLostPointerCapture={() => setHolding(false)}
        >
        <div className="conditions-track flex w-max gap-[12px] sm:grid sm:w-full sm:grid-cols-3 sm:gap-[16px] md:grid-cols-4 lg:grid-cols-6" style={{ animationPlayState: holding ? "paused" : undefined }}>
          {[...conditions, ...conditions].map((condition, index) => (
            <a
              key={`${condition.name}-${index}`}
              href="#book-appointment"
              aria-hidden={index >= conditions.length ? true : undefined}
              tabIndex={index >= conditions.length ? -1 : undefined}
              className={`${index >= conditions.length ? "sm:hidden" : ""} group w-[160px] shrink-0 overflow-hidden rounded-[16px] border border-[#f1e4d2] bg-white shadow-[0_6px_18px_-10px_rgba(11,24,66,0.18)] transition-all duration-300 hover:border-[#f99c1e]/60 hover:shadow-[0_18px_34px_-14px_rgba(249,156,30,0.45)] sm:w-auto sm:hover:-translate-y-[4px] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#f99c1e]`}
            >
              <div className="relative flex aspect-[4/3] items-center justify-center bg-[radial-gradient(circle_at_50%_42%,#fff1dc_0%,#fffaf3_60%,#ffffff_100%)]">
                {/* ground shadow */}
                <span className="absolute bottom-[12%] left-1/2 h-[8px] w-[44%] -translate-x-1/2 rounded-[50%] bg-[#0b1842]/15 blur-[4px]" />
                <span className="relative flex aspect-square w-[58%] max-w-[120px] items-center justify-center rounded-full bg-white shadow-[0_10px_22px_-10px_rgba(11,24,66,0.35)] ring-[3px] ring-[#0b1842]/10 transition-all duration-500 group-hover:scale-[1.08] group-hover:ring-[#f99c1e]">
                  <Image
                    src={condition.icon}
                    alt=""
                    width={512}
                    height={512}
                    sizes="90px"
                    className="h-[72%] w-[72%] object-contain"
                  />
                </span>
              </div>
              <p className="flex min-h-[44px] items-center justify-center border-t border-[#f1e4d2] px-[8px] py-[10px] text-center text-[13px] font-semibold leading-[1.3] text-[#0b1842] transition-colors duration-300 group-hover:border-[#0b1842] group-hover:bg-[#0b1842] group-hover:text-white sm:text-[14px]">
                {condition.name}
              </p>
            </a>
          ))}
        </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes conditions-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 6px)); }
        }
        @media (max-width: 639px) {
          .conditions-track {
            animation: conditions-scroll 48s linear infinite;
            will-change: transform;
          }
          .conditions-viewport:hover .conditions-track,
          .conditions-viewport:focus-within .conditions-track {
            animation-play-state: paused;
          }
        }
        @media (prefers-reduced-motion: reduce) and (max-width: 639px) {
          .conditions-track { animation: none; will-change: auto; }
          .conditions-viewport { overflow-x: auto; }
        }
      `}</style>
    </section>
  );
}
