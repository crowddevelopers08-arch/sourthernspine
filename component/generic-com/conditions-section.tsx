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
    <section id="conditions" className={`${outfit.className} w-full bg-[#081231] py-[50px] sm:py-[60px]`}>
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-[60px]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-[10px]">
          
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#f99c1e] sm:text-[12px]">
              Conditions
            </span>
          
          </div>
          <h2 className="mt-[8px] text-[26px] font-bold leading-tight text-white sm:text-[32px]">What We Treat</h2>
          <p className="mt-[6px] max-w-[520px] text-[14px] leading-[1.6] text-white/60 sm:text-[15px]">
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
              className={`${index >= conditions.length ? "sm:hidden" : ""} group w-[160px] shrink-0 overflow-hidden rounded-[12px] border border-white/[0.07] bg-gradient-to-b from-[#13235a] to-[#0c173d] transition-all duration-300 hover:border-[#f99c1e]/45 hover:shadow-[0_14px_30px_-12px_rgba(249,156,30,0.4)] sm:w-auto sm:hover:-translate-y-[4px] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#f99c1e]`}
            >
              <div className="relative flex aspect-[4/3] items-center justify-center bg-[radial-gradient(circle_at_50%_42%,#1d3275_0%,#0e1a45_72%)]">
                {/* ground shadow */}
                <span className="absolute bottom-[12%] left-1/2 h-[8px] w-[44%] -translate-x-1/2 rounded-[50%] bg-black/45 blur-[4px]" />
                <span className="relative flex aspect-square w-[58%] max-w-[120px] items-center justify-center rounded-full bg-white shadow-[0_10px_22px_-8px_rgba(0,0,0,0.6)] ring-[3px] ring-[#f99c1e]/70 transition-all duration-500 group-hover:scale-[1.08] group-hover:ring-[#f99c1e]">
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
              <p className="flex min-h-[44px] items-center justify-center border-t border-white/[0.06] px-[8px] py-[10px] text-center text-[13px] font-medium leading-[1.3] text-white/85 transition-colors duration-300 group-hover:text-[#f99c1e] sm:text-[14px]">
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
