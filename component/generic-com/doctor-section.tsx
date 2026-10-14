"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, BadgeCheck, CalendarCheck, Volume2, VolumeX } from "lucide-react";
import { outfit } from "./font";

const VIDEO_ID = "5Gt1GtuE9ic"; // same video as the previous LP banner
const THUMB = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

const specialties = ["Chiropractic", "Physiotherapy", "Osteopathy"];

export default function DoctorSection() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [muted, setMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // talk to the YouTube player (needs enablejsapi=1 on the embed URL)
  const toggleMute = () => {
    const next = !muted;
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: next ? "mute" : "unMute", args: [] }),
      "*"
    );
    if (!next) {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
        "*"
      );
    }
    setMuted(next);
  };

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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="doctor" ref={ref} className={`${outfit.className} relative w-full overflow-hidden bg-[#f5f7fc] py-[24px] sm:py-[72px]`}>
      {/* soft decorative glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[380px] w-[380px] rounded-full bg-[#f99c1e]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#0b1842]/10 blur-[110px]" />

      <div className="relative mx-auto grid w-full max-w-[1440px] items-stretch gap-[14px] px-4 sm:gap-[40px] md:px-[60px] lg:grid-cols-2 lg:gap-[56px]">
        {/* ===== Left: video ===== */}
        <div
          className={`relative order-2 sm:order-none transition-all duration-700 ease-out motion-reduce:transition-none ${
            inView ? "translate-x-0 opacity-100" : "-translate-x-[30px] opacity-0"
          }`}
        >
          {/* offset frame */}
          <div className="absolute -bottom-[14px] -left-[14px] hidden h-full w-full rounded-[24px] border-2 border-[#f99c1e]/50 sm:block" />

          <div className="relative aspect-video overflow-hidden rounded-[16px] bg-[#0b1842] sm:aspect-auto sm:h-full sm:min-h-[340px] sm:rounded-[24px] sm:shadow-[0_30px_60px_-25px_rgba(11,24,66,0.55)] lg:min-h-[440px]">
            {/* thumbnail shows until the section is in view, then the muted video autoplays on top */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={THUMB}
              alt="Dr. Raghupathi Jadhav at Southern Spine"
              onError={(e) => {
                const img = e.currentTarget;
                if (!img.src.includes("hqdefault")) img.src = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {inView && (
              <iframe
                ref={iframeRef}
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`}
                title="Dr. Raghupathi Jadhav – Southern Spine"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {/* mute / unmute */}
            {inView && (
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Unmute video" : "Mute video"}
                aria-pressed={!muted}
                className="group absolute left-[16px] top-[16px] z-10 flex items-center justify-center rounded-full bg-[#0b1842]/80 p-[8px] text-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.6)] ring-1 ring-white/15 backdrop-blur-md transition-all duration-300 hover:bg-[#0b1842]"
              >
                <span
                  className={`relative flex h-[30px] w-[30px] items-center justify-center rounded-full transition-colors duration-300 ${
                    muted ? "bg-white/15 text-white" : "bg-[#f99c1e] text-[#0b1842]"
                  }`}
                >
                  {muted && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#f99c1e]/50 motion-reduce:animate-none" />
                  )}
                  {muted ? (
                    <VolumeX className="relative h-[16px] w-[16px]" strokeWidth={2.3} />
                  ) : (
                    <Volume2 className="relative h-[16px] w-[16px]" strokeWidth={2.3} />
                  )}
                </span>
              </button>
            )}
          </div>

        </div>

        {/* ===== Right: content ===== */}
        <div
          className={`contents sm:flex sm:flex-col sm:justify-center transition-all delay-150 duration-700 ease-out motion-reduce:transition-none ${
            inView ? "translate-x-0 opacity-100" : "translate-x-[30px] opacity-0"
          }`}
        >
          <div className="order-1 sm:order-none">
          <div className="flex items-center gap-[10px]">
            <span className="h-[2px] w-[22px] bg-[#f99c1e]" />
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#f99c1e] sm:text-[12px]">
              Your Doctor
            </span>
          </div>

          <h2 className="mt-[8px] text-[26px] font-bold leading-tight text-[#0b1842] sm:text-[32px] lg:text-[36px]">
            11 Years of <span className="text-[#f99c1e]">Hands-On</span> Spine Care
          </h2>

          <p className="mt-[8px] text-[15px] leading-[1.6] text-[#5b6478] sm:mt-[14px] sm:text-[16px] sm:leading-[1.75]">
            Dr. Jadhav brings an 11-year journey across physiotherapy, osteopathy and chiropractic care. His focus is
            restoring comfort, mobility and quality of life, one spine at a time.
          </p>
          </div>

          {/* Doctor card */}
          <div className="order-3 sm:order-none">
          <div className="flex items-center gap-[12px] rounded-[18px] border border-[#e3e8f3] bg-white p-[12px] shadow-[0_10px_30px_-18px_rgba(11,24,66,0.35)] sm:mt-[26px] sm:gap-[16px] sm:p-[20px]">
            <span className="relative flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0b1842] to-[#25398a] text-[18px] font-bold tracking-[1px] text-[#f99c1e] ring-4 ring-[#f99c1e]/20 sm:h-[64px] sm:w-[64px] sm:text-[22px]">
              RJ
              <BadgeCheck className="absolute -bottom-[2px] -right-[2px] h-[22px] w-[22px] fill-[#f99c1e] text-white" />
            </span>
            <div className="min-w-0 flex-1 sm:flex-initial">
              <p className="text-[18px] font-bold leading-tight text-[#0b1842] sm:text-[19px]">Dr. Raghupathi Jadhav</p>
              <div className="specialties-viewport mt-[8px] overflow-hidden [container-type:inline-size] sm:overflow-visible sm:[container-type:normal]">
              <div className="specialties-track flex w-max gap-[6px] sm:w-auto sm:flex-wrap">
                {specialties.map((item) => (
                  <span
                    key={item}
                    className="shrink-0 whitespace-nowrap rounded-full bg-[#0b1842]/[0.06] px-[10px] py-[4px] text-[12px] font-medium text-[#0b1842]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              </div>
            </div>
          </div>

          <a
            href="#book-appointment"
            className="group mt-[16px] inline-flex min-h-12 w-full items-center justify-center gap-[8px] rounded-full bg-[#f99c1e] px-[16px] py-[12px] text-[13px] font-bold uppercase tracking-[0.5px] text-[#0b1842] shadow-[0_12px_28px_-10px_rgba(249,156,30,0.8)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#0b1842] hover:text-white sm:mt-[28px] sm:min-h-0 sm:w-fit sm:justify-start sm:gap-[10px] sm:px-[26px] sm:py-[14px] sm:text-[15px]"
          >
            <CalendarCheck className="h-[18px] w-[18px]" strokeWidth={2.3} />
            Book with Dr. Jadhav
            <ArrowRight className="h-[16px] w-[16px] transition-transform duration-300 group-hover:translate-x-[3px]" strokeWidth={2.5} />
          </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes specialties-scroll {
          0%, 15%, 100% { transform: translateX(0); }
          45%, 60% { transform: translateX(min(0px, calc(100cqw - 100%))); }
        }
        @media (max-width: 639px) {
          .specialties-track {
            animation: specialties-scroll 10s ease-in-out infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) and (max-width: 639px) {
          .specialties-track { animation: none; }
          .specialties-viewport { overflow-x: auto; }
        }
      `}</style>
    </section>
  );
}
