"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { outfit } from "./font";

const reviews = [
  {
    text: "After months of back pain, the treatment gave me relief I never thought possible. The team is professional and caring.",
    name: "Rajesh Kumar",
  },
  {
    text: "I was skeptical at first, but after a few sessions my posture and pain improved significantly.",
    name: "Priya Sharma",
  },
  {
    text: "The personalised care and attention I received made all the difference in my recovery.",
    name: "Vikram Patel",
  },
];

function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Google">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}

function Stars({ size = 18 }: { size?: number }) {
  return (
    <div className="flex items-center gap-[3px]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} style={{ width: size, height: size }} className="fill-[#f99c1e] text-[#f99c1e]" strokeWidth={1.5} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeReview, setActiveReview] = useState(0);
  const holdingRef = useRef(false);

  const goToReview = useCallback((index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const next = (index + reviews.length) % reviews.length;
    const card = carousel.children[next] as HTMLElement;
    carousel.scrollTo({
      left: card.offsetLeft - (carousel.children[0] as HTMLElement).offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (
        window.matchMedia("(max-width: 639px)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
        !document.hidden &&
        !holdingRef.current
      ) {
        goToReview(activeReview + 1);
      }
    }, 4500);
    return () => window.clearInterval(timer);
  }, [activeReview, goToReview]);

  const arrowStyles = "flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-[#f99c1e] hover:text-[#0b1842] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f99c1e]";

  return (
    <section id="reviews" className={`${outfit.className} relative w-full overflow-hidden bg-[#0b1842] py-[32px] sm:py-[72px]`}>
      {/* decorative glows */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[380px] w-[380px] rounded-full bg-[#f99c1e]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[380px] w-[380px] rounded-full bg-[#3f5bb8]/30 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-4 md:px-[60px]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-[10px]">
            <span className="h-[2px] w-[22px] bg-[#f99c1e]" />
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#f99c1e] sm:text-[12px]">
              Testimonials
            </span>
            <span className="h-[2px] w-[22px] bg-[#f99c1e]" />
          </div>
          <h2 className="mt-[8px] text-[26px] font-bold leading-tight text-white sm:text-[32px]">
            What Our <span className="text-[#f99c1e]">Patients Say</span>
          </h2>

          {/* Google rating summary */}
          <div className="mt-[12px] inline-flex items-center gap-[10px] rounded-full bg-white py-[6px] pl-[8px] pr-[14px] shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)] sm:mt-[18px] sm:gap-[12px] sm:py-[8px] sm:pl-[10px] sm:pr-[18px]">
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#f5f7fc]">
              <GoogleIcon className="h-[20px] w-[20px]" />
            </span>
            <span className="text-[20px] font-extrabold leading-none text-[#0b1842]">4.9</span>
            <Stars size={16} />
            <span className="hidden text-[13px] font-medium text-[#5b6478] sm:inline">Google Reviews</span>
          </div>
        </div>

        {/* Cards */}
        <div className="relative mt-[20px] sm:mt-[36px]">
        <div
          id="testimonials-carousel"
          ref={carouselRef}
          onPointerDown={() => { holdingRef.current = true; }}
          onPointerUp={() => { holdingRef.current = false; }}
          onPointerCancel={() => { holdingRef.current = false; }}
          onPointerLeave={() => { holdingRef.current = false; }}
          onScroll={() => {
            const carousel = carouselRef.current;
            if (!carousel || !carousel.children[0]) return;
            const cardWidth = (carousel.children[0] as HTMLElement).offsetWidth + 18;
            setActiveReview(Math.max(0, Math.min(reviews.length - 1, Math.round(carousel.scrollLeft / cardWidth))));
          }}
          className="relative flex snap-x snap-mandatory gap-[18px] overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:overflow-visible md:grid-cols-3 lg:gap-[24px]"
        >
          {reviews.map((review) => {
            const initials = review.name
              .split(" ")
              .map((w) => w[0])
              .join("");
            return (
              <article
                key={review.name}
                className="group relative flex w-full shrink-0 snap-center flex-col rounded-[16px] bg-white p-[18px] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] transition-all duration-300 hover:shadow-[0_28px_50px_-20px_rgba(249,156,30,0.45)] sm:w-auto sm:rounded-[20px] sm:p-[28px] sm:hover:-translate-y-[6px]"
              >
                <span className="absolute inset-x-[24px] top-0 h-[3px] origin-left scale-x-0 rounded-b-full bg-[#f99c1e] transition-transform duration-300 group-hover:scale-x-100" />

                {/* top row: stars + google */}
                <div className="flex items-center justify-between">
                  <Stars />
                  <GoogleIcon className="h-[26px] w-[26px]" />
                </div>

                <Quote className="mt-[10px] h-[24px] w-[24px] fill-[#f99c1e]/15 text-[#f99c1e] sm:mt-[18px] sm:h-[30px] sm:w-[30px]" strokeWidth={1.5} />

                <p className="mt-[6px] flex-1 text-[15px] leading-[1.6] text-[#3b4560] sm:mt-[10px] sm:text-[16px] sm:leading-[1.7]">{review.text}</p>

                <div className="mt-[14px] flex items-center gap-[12px] border-t border-[#e3e8f3] pt-[12px] sm:mt-[22px] sm:pt-[18px]">
                  <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0b1842] to-[#25398a] text-[15px] font-bold text-[#f99c1e] ring-[3px] ring-[#f99c1e]/20">
                    {initials}
                  </span>
                  <div>
                    <p className="text-[16px] font-bold leading-tight text-[#0b1842]">{review.name}</p>
                    <p className="mt-[2px] text-[13px] text-[#5b6478]">Patient</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
          <div className="mt-3 flex items-center justify-center gap-5 sm:hidden">
            <button type="button" aria-label="Previous testimonial" aria-controls="testimonials-carousel" onClick={() => goToReview(activeReview - 1)} className={arrowStyles}><ChevronLeft aria-hidden="true" className="h-5 w-5" /></button>
            <div className="flex items-center gap-1">
              {reviews.map((review, index) => (
                <button key={review.name} type="button" aria-label={`Show testimonial ${index + 1} from ${review.name}`} aria-controls="testimonials-carousel" aria-current={activeReview === index ? "true" : undefined} onClick={() => goToReview(index)} className="flex h-8 w-8 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f99c1e]">
                  <span className={`h-2 rounded-full transition-all duration-300 ${activeReview === index ? "w-5 bg-[#f99c1e]" : "w-2 bg-white/35"}`} />
                </button>
              ))}
            </div>
            <button type="button" aria-label="Next testimonial" aria-controls="testimonials-carousel" onClick={() => goToReview(activeReview + 1)} className={arrowStyles}><ChevronRight aria-hidden="true" className="h-5 w-5" /></button>
          </div>
        </div>

        <p className="mt-[12px] text-center text-[12px] italic text-white/50 sm:mt-[24px] sm:text-[13px]">Individual experiences may vary.</p>
      </div>
    </section>
  );
}
