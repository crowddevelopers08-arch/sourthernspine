"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Star, Stethoscope, Users, type LucideIcon } from "lucide-react";
import { outfit } from "./font";

type Stat = {
  end: number;
  decimals?: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
};

const stats: Stat[] = [
  { end: 52, suffix: "K+", label: "Satisfied clients", icon: Users },
  { end: 12, suffix: "+", label: "Professional staff", icon: Stethoscope },
  { end: 4.9, decimals: 1, suffix: "/5", label: "Patient reviews", icon: Star },
  { end: 11, suffix: " yrs", label: "Doctor's experience", icon: Award },
];

const DURATION = 2000;

function CountUp({ end, decimals = 0, suffix, start }: Omit<Stat, "icon"> & { start: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    let frame = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic: fast start, smooth stop
      setValue(end * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, end]);

  return (
    <>
      {value.toFixed(decimals)}
      {suffix}
    </>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`${outfit.className} w-full bg-gradient-to-b from-[#0e1d4f] to-[#0b1842]`}>
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 px-4 md:px-[60px] lg:grid-cols-4">
        {stats.map(({ icon: Icon, ...stat }, index) => (
          <div
            key={stat.label}
            className={`group flex flex-col items-center justify-center gap-[12px] py-[22px] text-center sm:py-[26px] lg:flex-row lg:gap-[18px] lg:text-left ${
              index % 2 === 1 ? "border-l border-white/10" : ""
            } ${index === 2 ? "lg:border-l lg:border-white/10" : ""} ${
              index < 2 ? "border-b border-white/10 lg:border-b-0" : ""
            }`}
          >
            <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#f99c1e]/40 bg-[#f99c1e]/10 text-[#f99c1e] shadow-[0_0_0_5px_rgba(249,156,30,0.06)] transition-all duration-300 group-hover:bg-[#f99c1e] group-hover:text-[#0b1842] sm:h-[50px] sm:w-[50px] lg:h-[54px] lg:w-[54px]">
              <Icon
                className="h-[20px] w-[20px] sm:h-[22px] sm:w-[22px] lg:h-[24px] lg:w-[24px]"
                strokeWidth={1.9}
                fill={Icon === Star ? "currentColor" : "none"}
              />
            </span>
            <div className="flex flex-col items-center lg:items-start">
              <span className="whitespace-nowrap text-[34px] font-bold leading-none tracking-[-0.5px] text-[#f99c1e] tabular-nums sm:text-[40px] lg:text-[46px]">
                <CountUp {...stat} start={inView} />
              </span>
              <span className="mt-[7px] text-[10px] font-medium uppercase tracking-[1.4px] text-white/70 sm:text-[11px]">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
