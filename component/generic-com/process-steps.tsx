"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarCheck, ClipboardList, HeartHandshake, ScanSearch, type LucideIcon } from "lucide-react";
import { outfit } from "./font";

/* ---------- geometry (SVG units, viewBox 0 0 1000 340) ---------- */
const VB_W = 1000;
const VB_H = 340;
const CY = 170;
const CENTERS = [155, 385, 615, 845];
const CARD_R = 112; // card polygon radius (rounded stroke adds ~9 more)
const RIB_R = 140; // ribbon centre-line radius
const S3 = Math.sqrt(3) / 2;

const hexPoints = (cx: number, cy: number, r: number) =>
  [
    [cx, cy - r],
    [cx + r * S3, cy - r / 2],
    [cx + r * S3, cy + r / 2],
    [cx, cy + r],
    [cx - r * S3, cy + r / 2],
    [cx - r * S3, cy - r / 2],
  ]
    .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");

/* Ribbon weaves: over hex 1, under hex 2, over hex 3, under hex 4 */
const ribbonPath = (() => {
  const dx = RIB_R * S3;
  const top = CY - RIB_R;
  const bottom = CY + RIB_R;
  const hi = CY - RIB_R / 2;
  const lo = CY + RIB_R / 2;
  const [a, b, c, d] = CENTERS;
  return [
    `M ${a - dx} ${lo}`,
    `L ${a - dx} ${hi} L ${a} ${top} L ${a + dx} ${hi}`,
    `L ${b - dx} ${lo} L ${b} ${bottom} L ${b + dx} ${lo}`,
    `L ${c - dx} ${hi} L ${c} ${top} L ${c + dx} ${hi}`,
    `L ${d - dx} ${lo} L ${d} ${bottom} L ${d + dx} ${lo} L ${d + dx} ${hi}`,
  ].join(" ");
})();

/* ---------- content ---------- */
type Step = { title: string; text: string; icon: LucideIcon };

const steps: Step[] = [
  { title: "Book Consultation", text: "Reserve your slot for ₹499 online or by phone.", icon: CalendarCheck },
  { title: "Spinal Assessment", text: "A thorough screening of your spine and condition.", icon: ScanSearch },
  { title: "Customised Plan", text: "A care plan based on your findings and goals.", icon: ClipboardList },
  { title: "Ongoing Support", text: "Follow-up sessions and guidance for long-term relief.", icon: HeartHandshake },
];

/* hex i appears as the ribbon reaches it */
const delay = (i: number) => 0.35 + i * 0.35;

function StepContent({ step, index, desktop }: { step: Step; index: number; desktop?: boolean }) {
  const Icon = step.icon;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center">
      <span className="ps-float block" style={{ animationDelay: `${index * 0.4}s` }}>
        <Icon
          className={`text-[#f99c1e] transition-transform duration-300 group-hover:scale-[1.15] ${
            desktop ? "h-[3.8cqw] w-[3.8cqw]" : "h-[32px] w-[32px] sm:h-[40px] sm:w-[40px]"
          }`}
          strokeWidth={1.7}
          aria-hidden="true"
        />
      </span>
      <span
        className={`font-semibold uppercase tracking-[1.5px] text-[#f99c1e] ${
          desktop ? "mt-[1.2cqw] text-[1.05cqw]" : "mt-[6px] text-[11px] sm:mt-[10px] sm:text-[12px]"
        }`}
      >
        Step {String(index + 1).padStart(2, "0")}
      </span>
      <h3
        className={`font-bold leading-[1.2] text-[#0b1842] ${
          desktop ? "mt-[0.4cqw] text-[1.75cqw]" : "mt-[4px] text-[16px] sm:text-[18px]"
        }`}
      >
        {step.title}
      </h3>
      <p
        className={`text-[#5b6478] ${
          desktop ? "mt-[0.6cqw] text-[1.25cqw] leading-[1.45]" : "mt-[4px] text-[13px] leading-[1.45] sm:mt-[6px] sm:text-[14px]"
        }`}
      >
        {step.text}
      </p>
    </div>
  );
}

export default function ProcessSteps() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [showGlow, setShowGlow] = useState(false);

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
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // start the travelling glow once the ribbon has finished drawing
  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(() => setShowGlow(true), 2100);
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <section id="journey" ref={ref} className={`${outfit.className} w-full overflow-hidden bg-white py-[24px] sm:py-[64px]`}>
      <style>{`
        @keyframes psFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        .ps-float { animation: psFloat 3.2s ease-in-out infinite; }
        @keyframes psFadeIn { from { opacity: 0; } to { opacity: 1; } }
        .ps-glow { animation: psFadeIn 0.5s ease forwards; }
        @media (prefers-reduced-motion: reduce) {
          .ps-anim, .ps-anim * { transition: none !important; animation: none !important; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-[60px]">
        {/* Heading */}
        <div
          className={`ps-anim flex flex-col items-center text-center transition-all duration-700 ease-out ${
            inView ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"
          }`}
        >
          <div className="flex items-center gap-[10px]">
           
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#f99c1e] sm:text-[12px]">
              Your Journey
            </span>
           
          </div>
          <h2 className="mt-[8px] text-[26px] font-bold leading-tight text-[#0b1842] sm:text-[32px]">
            4 Simple Steps to <span className="text-[#f99c1e]">Better Spine Health</span>
          </h2>
        </div>

        {/* ===== Desktop / tablet: weaving ribbon infographic ===== */}
        <div
          className="ps-anim @container relative mx-auto mt-[40px] hidden w-full max-w-[1200px] md:block"
          style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
        >
          <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
            <defs>
              <linearGradient id="ribbonGrad" gradientUnits="userSpaceOnUse" x1="30" y1="0" x2="970" y2="0">
                <stop offset="0%" stopColor="#3f5bb8" />
                <stop offset="40%" stopColor="#25398a" />
                <stop offset="75%" stopColor="#14245e" />
                <stop offset="100%" stopColor="#0b1842" />
              </linearGradient>
              <filter id="hexShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0b1842" floodOpacity="0.18" />
              </filter>
            </defs>

            {/* Ribbon draws itself left → right */}
            <path
              d={ribbonPath}
              pathLength={1}
              fill="none"
              stroke="url(#ribbonGrad)"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="butt"
              strokeDasharray="1"
              style={{
                strokeDashoffset: inView ? 0 : 1,
                transition: "stroke-dashoffset 1.8s cubic-bezier(0.65, 0, 0.35, 1) 0.2s",
              }}
            />

            {/* Orange glow travelling along the ribbon */}
            {showGlow && (
              <g className="ps-glow">
                <circle r="13" fill="#f99c1e" opacity="0.25">
                  <animateMotion dur="7s" repeatCount="indefinite" path={ribbonPath} />
                </circle>
                <circle r="6" fill="#f99c1e">
                  <animateMotion dur="7s" repeatCount="indefinite" path={ribbonPath} />
                </circle>
              </g>
            )}

            {/* Hexagons pop in one by one, lift + orange edge on hover */}
            {CENTERS.map((cx, i) => (
              <polygon
                key={cx}
                points={hexPoints(cx, CY, CARD_R)}
                fill="#ffffff"
                stroke={hovered === i ? "#f99c1e" : "#ffffff"}
                strokeWidth="18"
                strokeLinejoin="round"
                filter="url(#hexShadow)"
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  transform: !inView ? "scale(0.6)" : hovered === i ? "translateY(-4px) scale(1.05)" : "scale(1)",
                  opacity: inView ? 1 : 0,
                  transition: `transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                    hovered === null ? delay(i) : 0
                  }s, opacity 0.5s ease ${delay(i)}s, stroke 0.3s ease`,
                }}
              />
            ))}
          </svg>

          {CENTERS.map((cx, i) => (
            <div
              key={cx}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group absolute cursor-default"
              style={{
                left: `${((cx - 88) / VB_W) * 100}%`,
                top: `${((CY - 96) / VB_H) * 100}%`,
                width: `${(176 / VB_W) * 100}%`,
                height: `${(192 / VB_H) * 100}%`,
                opacity: inView ? 1 : 0,
                transform: !inView ? "translateY(14px)" : hovered === i ? "translateY(-4px)" : "translateY(0)",
                transition: `opacity 0.6s ease ${delay(i) + 0.2}s, transform 0.6s ease ${
                  hovered === null ? delay(i) + 0.2 : 0
                }s`,
              }}
            >
              <StepContent step={steps[i]} index={i} desktop />
            </div>
          ))}
        </div>

        {/* ===== Mobile: stacked hexagons on a vertical ribbon ===== */}
        <div className="ps-anim relative mx-auto mt-[18px] flex max-w-[300px] flex-col items-center gap-[10px] sm:mt-[30px] sm:gap-[18px] md:hidden">
          <span
            className="absolute bottom-[40px] left-1/2 top-[40px] w-[14px] origin-top rounded-full bg-gradient-to-b from-[#3f5bb8] via-[#25398a] to-[#0b1842]"
            style={{
              transform: `translateX(-50%) scaleY(${inView ? 1 : 0})`,
              transition: "transform 1.8s ease-in-out 0.2s",
            }}
          />
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="group relative aspect-[0.866] w-[220px] sm:w-[270px]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(30px) scale(0.92)",
                transition: `opacity 0.7s ease ${delay(i)}s, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay(i)}s`,
              }}
            >
              <svg viewBox="0 0 200 231" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
                <defs>
                  <filter id={`hexShadowM${i}`} x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0b1842" floodOpacity="0.18" />
                  </filter>
                </defs>
                <polygon
                  points={hexPoints(100, 115.5, 106)}
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth="14"
                  strokeLinejoin="round"
                  filter={`url(#hexShadowM${i})`}
                />
              </svg>
              <div className="absolute inset-x-[16%] inset-y-[14%]">
                <StepContent step={step} index={i} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
