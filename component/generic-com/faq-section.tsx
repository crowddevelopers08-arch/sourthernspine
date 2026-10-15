"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { outfit } from "./font";

const faqs = [
  {
    question: "What is included in the ₹499 consultation?",
    answer: "A consultation with the doctor and a spinal assessment, followed by a personalised care recommendation.",
  },
  {
    question: "What does the treatment plan include?",
    answer: "A thorough spinal assessment, personalised adjustments and ongoing care to support your spinal health.",
  },
  {
    question: "Are payment plans available?",
    answer: "Yes, flexible payment plans are available so quality care stays affordable.",
  },
  {
    question: "Are there any hidden charges?",
    answer: "No. Pricing is transparent, with no hidden fees or surprise charges.",
  },
  {
    question: "How do I know which plan is right for me?",
    answer: "After your consultation and spinal assessment, our team recommends a plan tailored to your needs.",
  },
];

const IMAGES = {
  topLeft: "https://ik.imagekit.io/9yxs4igok/public/ban-2.jpeg",
  bottomLeft: "https://ik.imagekit.io/9yxs4igok/public/ban-3.avif",
  right: "https://ik.imagekit.io/9yxs4igok/public/If-youre.jpg",
};

export default function FaqSection() {
  // one item is always open, so the accordion (and the collage beside it) keeps a steady height
  const [open, setOpen] = useState(0);

  return (
    <section id="faqs" className={`${outfit.className} w-full bg-white py-[32px] sm:py-[72px]`}>
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-[60px]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-[10px]">
            
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#f99c1e] sm:text-[12px]">FAQs</span>
            
          </div>
          <h2 className="mt-[8px] text-[26px] font-bold leading-tight text-[#0b1842] sm:text-[32px]">
            Common <span className="text-[#f99c1e]">Questions</span>
          </h2>
        </div>

        {/* Two equal halves */}
        <div className="mt-[20px] grid items-stretch gap-[10px] sm:mt-[36px] sm:gap-[28px] lg:grid-cols-2 lg:gap-[40px]">
          {/* ===== Left: accordion ===== */}
          <div className="contents sm:flex sm:flex-col sm:gap-[14px]">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={faq.question}
                  className={`${i < 2 ? "order-1" : "order-3"} sm:order-none relative overflow-hidden rounded-[12px] sm:rounded-[16px] bg-white transition-all duration-300 ${
                    isOpen
                      ? "border border-[#f99c1e]/40 shadow-[0_14px_34px_-14px_rgba(11,24,66,0.3)]"
                      : "border border-[#e3e8f3] shadow-[0_2px_10px_-6px_rgba(11,24,66,0.12)] hover:border-[#c9d2e6]"
                  }`}
                >
                  {/* orange accent on the open item */}
                  <span
                    className={`absolute bottom-0 left-0 top-0 w-[4px] bg-[#f99c1e] transition-transform duration-300 ${
                      isOpen ? "scale-y-100" : "scale-y-0"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-3 px-[16px] py-[13px] text-left sm:gap-4 sm:px-[24px] sm:py-[18px]"
                  >
                    <span
                      className={`text-[15px] leading-[1.35] transition-colors duration-300 sm:text-[17px] ${
                        isOpen ? "font-bold text-[#0b1842]" : "font-semibold text-[#0b1842]/90"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? "rotate-180 bg-[#f99c1e] text-[#0b1842]" : "bg-[#0b1842]/[0.06] text-[#0b1842]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-[16px] w-[16px]" strokeWidth={2.4} />
                      ) : (
                        <Plus className="h-[16px] w-[16px]" strokeWidth={2.4} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-[16px] pb-[14px] pr-[48px] text-[14px] leading-[1.6] text-[#5b6478] sm:px-[24px] sm:pb-[20px] sm:pr-[64px] sm:text-[16px] sm:leading-[1.7]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ===== Right: image collage (stretches to the accordion height) ===== */}
          <div className="relative order-2 my-[6px] h-[240px] sm:order-none sm:my-0 sm:h-[460px] lg:h-auto">
          <div className="grid h-full grid-cols-[0.78fr_1fr] grid-rows-[2.4fr_1fr] gap-[8px] sm:gap-[12px] lg:absolute lg:inset-0">
            {/* eslint-disable @next/next/no-img-element */}
            <img
              src={IMAGES.topLeft}
              alt=""
              className="h-full w-full rounded-[18px] object-cover shadow-[0_14px_30px_-16px_rgba(11,24,66,0.45)]"
            />
            <div className="relative row-span-2 overflow-hidden rounded-[18px] shadow-[0_14px_30px_-16px_rgba(11,24,66,0.45)]">
              <img src={IMAGES.right} alt="" className="h-full w-full object-cover" />
              <span className="absolute inset-0 bg-gradient-to-t from-[#0b1842]/45 via-transparent to-transparent" />
              <span className="absolute bottom-0 left-0 right-0 h-[5px] bg-[#f99c1e]" />
            </div>
            <img
              src={IMAGES.bottomLeft}
              alt=""
              className="h-full w-full rounded-[18px] object-cover shadow-[0_14px_30px_-16px_rgba(11,24,66,0.45)]"
            />
            {/* eslint-enable @next/next/no-img-element */}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
