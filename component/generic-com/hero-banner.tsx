"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CalendarCheck, CheckCircle2, Phone, Volume2, VolumeX } from "lucide-react";
import { outfit } from "./font";
import BookingModal from "./booking-modal";

const BG_IMAGES = [
  "https://ik.imagekit.io/9yxs4igok/public/ban-1.jpg",
  "https://ik.imagekit.io/9yxs4igok/public/ban-2.jpeg",
  "https://ik.imagekit.io/9yxs4igok/public/ban-3.avif",
  "https://ik.imagekit.io/9yxs4igok/public/ban-4.jpeg",
];
const PHONE_HREF = "tel:+919464108108";
const VIDEO_ID = "5Gt1GtuE9ic"; // landscape banner video from the previous LP

const highlights = [
  "Thorough spinal screening before any treatment",
  "Personalised care plan, not a generic package",
  "Transparent pricing with flexible payment plans",
];

export default function HeroBanner() {
  const [bgIndex, setBgIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setBgIndex((i) => (i + 1) % BG_IMAGES.length), 6000);
    return () => clearInterval(timer);
  }, []);

  // talk to the YouTube player (needs enablejsapi=1 on the embed URL)
  const toggleMute = () => {
    const next = !muted;
    const send = (func: string, args: unknown[] = []) =>
      videoRef.current?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args }), "*");
    send(next ? "mute" : "unMute");
    if (!next) send("setVolume", [100]);
    setMuted(next);
  };

  return (
    <section id="home"       className={`${outfit.className} relative isolate flex w-full items-center overflow-hidden bg-[#0b1842] lg:min-h-[calc(100svh-127px)]`}
    >
      <style>{`
        @keyframes heroZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.12); }
          100% { transform: scale(1); }
        }
        @media (max-width: 334px) {
          #home { min-width: 0; max-width: 100%; }
          #home > .hero-layout {
            grid-template-columns: minmax(0, 1fr);
            padding-left: 12px;
            padding-right: 12px;
          }
          #home .hero-label {
            font-size: 9px;
            letter-spacing: 0.6px;
            padding-left: 10px;
            padding-right: 10px;
          }
          #home h1 { font-size: 28px; }
          #home .hero-copy { overflow-wrap: anywhere; }
        }
      `}</style>

      {/* Background slider – zoom in / zoom out */}
      {BG_IMAGES.map((src, index) => (
        <div
          key={src}
          aria-hidden="true"
          className={`absolute inset-0 -z-20 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out motion-safe:animate-[heroZoom_16s_ease-in-out_infinite] ${
            index === bgIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}

      {/* Overlays – dark on the text side, clear on the image side */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1842]/95 via-[#0b1842]/75 to-[#0b1842]/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b1842]/60 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#f99c1e]/20 blur-[120px]" />

      <div className="hero-layout mx-auto grid w-full min-w-0 max-w-[1440px] grid-cols-1 items-center gap-6 px-4 py-7 sm:gap-10 sm:py-14 md:px-[60px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-8 xl:gap-14">
        {/* ===== Left: content ===== */}
        <div className="hero-copy min-w-0 text-white">
          <span className="hero-label inline-flex max-w-full items-center gap-[8px] rounded-full border border-[#f99c1e]/40 bg-[#f99c1e]/10 px-[12px] py-[6px] text-[10px] font-semibold uppercase tracking-[1px] text-[#f99c1e] backdrop-blur-sm sm:px-[14px] sm:py-[7px] sm:text-[13px] sm:tracking-[1.8px]">
            <span className="relative flex h-[8px] w-[8px] shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f99c1e] opacity-75" />
              <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-[#f99c1e]" />
            </span>
            Chiropractic Care in Hyderabad
          </span>

          <h1 className="mt-[14px] text-[32px] font-extrabold leading-[1.15] tracking-[-0.5px] sm:mt-[18px] sm:text-[46px] sm:leading-[1.1] lg:text-[50px] xl:text-[58px]">
            Your Spine Deserves{" "}
            <span className="relative inline-block text-[#f99c1e]">
              Specialist Care
              <svg
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-[6px] left-0 h-[10px] w-full"
                aria-hidden="true"
              >
                <path d="M2 9 Q 75 2 150 7 T 298 4" fill="none" stroke="#f99c1e" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-[14px] max-w-[560px] text-[15px] font-normal leading-[1.6] text-white/85 sm:mt-[20px] sm:text-[18px] sm:font-light sm:leading-[1.7]">
            Expert chiropractic care for back pain, neck pain and joint problems. Start with a spinal assessment by{" "}
            <span className="font-bold text-white">Dr. Raghupathi Jadhav</span> and get a plan built around you.
          </p>

          <ul className="mt-[16px] space-y-[10px] sm:mt-[22px] sm:space-y-[12px]">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-[10px] sm:gap-[12px]">
                <span className="mt-[1px] flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#f99c1e] shadow-[0_0_0_4px_rgba(249,156,30,0.18)]">
                  <CheckCircle2 className="h-[15px] w-[15px] text-[#0b1842]" strokeWidth={2.6} />
                </span>
                <span className="text-[14px] font-medium leading-[1.5] text-white/95 sm:text-[17px]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-[18px] flex flex-col gap-[14px] sm:mt-[28px] sm:flex-row sm:items-center">
            <a
              href="#book-appointment"
              className="group hidden sm:inline-flex items-center justify-center gap-[10px] rounded-full bg-[#f99c1e] px-[26px] py-[14px] text-[15px] font-bold uppercase tracking-[0.5px] text-[#0b1842] shadow-[0_10px_30px_-8px_rgba(249,156,30,0.75)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-white"
            >
              <CalendarCheck className="h-[17px] w-[17px]" strokeWidth={2.4} />
              Book Appointment
              <ArrowRight className="h-[16px] w-[16px] transition-transform duration-300 group-hover:translate-x-[3px]" strokeWidth={2.6} />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-[10px] rounded-full border-2 border-white/30 px-[22px] py-[10px] text-[15px] font-semibold uppercase tracking-[0.5px] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#f99c1e] hover:text-[#f99c1e]"
            >
              <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white/15">
                <Phone className="h-[13px] w-[13px]" strokeWidth={2.4} />
              </span>
              Call: 94641 08108
            </a>
          </div>
        </div>

        {/* ===== Right: landscape video ===== */}
        <div className="relative mx-auto w-full min-w-0 max-w-[780px] lg:mr-0">
          <div className="absolute -inset-[2px] rounded-[26px] bg-gradient-to-br from-[#f99c1e] via-[#f99c1e]/30 to-transparent opacity-80 blur-[2px]" />

          <div className="relative overflow-hidden rounded-[24px] bg-[#0b1842] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            {/* Taller than 16:9 – the 16:9 video is scaled to fill (no black bars); only the side edges are trimmed.
                Box 16:11 → video width = 11/9 of the box (122.22%), centred (-11.11% each side). */}
            <div className="relative aspect-[16/11] w-full overflow-hidden">
              <iframe
                ref={videoRef}
                className="absolute left-[-11.11%] top-0 h-full w-[122.22%] max-w-none"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`}
                title="Southern Spine – chiropractic care in Hyderabad"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {/* mute / unmute */}
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Unmute video" : "Mute video"}
                aria-pressed={!muted}
                className="absolute left-[12px] top-[12px] z-10 flex items-center gap-[8px] rounded-full bg-[#0b1842]/80 py-[6px] pl-[6px] pr-[12px] text-[12px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.6)] ring-1 ring-white/15 backdrop-blur-md transition-colors hover:bg-[#0b1842] sm:left-[16px] sm:top-[16px] sm:text-[13px]"
              >
                <span
                  className={`relative flex h-[28px] w-[28px] items-center justify-center rounded-full transition-colors ${
                    muted ? "bg-white/15 text-white" : "bg-[#f99c1e] text-[#0b1842]"
                  }`}
                >
                  {muted && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#f99c1e]/50 motion-reduce:animate-none" />
                  )}
                  {muted ? <VolumeX className="relative h-[15px] w-[15px]" strokeWidth={2.3} /> : <Volume2 className="relative h-[15px] w-[15px]" strokeWidth={2.3} />}
                </span>
                {muted ? "Tap for sound" : "Sound on"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <BookingModal />
    </section>
  );
}
