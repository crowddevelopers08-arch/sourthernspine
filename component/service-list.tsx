'use client'
import React, { useState, useRef } from "react";

export default function PainTypesGridReplica() {
  const NAVY = "#0b1842";
  const ORANGE = "#f99c1e";
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "Back Pain",
      titleStyle: "chip",
      desc: "Pain localized to the upper, middle, or lower back.",
      cond: "Herniated discs, muscle spasms, sciatica, and posture-related issues.",
    },
    {
      title: "Neck Pain",
      titleStyle: "orange",
      desc: "Pain in the cervical spine region.",
      cond: "Cervical strain, whiplash, cervical disc issues, and poor neck posture.",
    },
    {
      title: "Joint Pain",
      titleStyle: "orange",
      desc: "Pain affecting a specific joint or multiple joints.",
      cond: "Osteoarthritis, rheumatoid arthritis, bursitis, and joint injuries.",
    },
    {
      title: "Headaches",
      titleStyle: "orange",
      desc: "Pain in the head, often accompanied by other symptoms.",
      cond: "Tension headaches, migraines, cervicogenic headaches (originating from the neck).",
    },
    {
      title: "Nerve Pain",
      titleStyle: "orange",
      desc: "Pain resulting from irritation or compression of nerves.",
      cond: "Sciatica, carpal tunnel syndrome, and radiculopathy.",
    },
    {
      title: "Post-Surgical Pain",
      titleStyle: "orange",
      desc: "Pain experienced after surgical procedures.",
      cond: "Orthopedic surgeries, joint replacements, and spinal surgeries.",
    },
    {
      title: "Chronic Pain",
      titleStyle: "orange",
      desc: "Persistent pain lasting for an extended period.",
      cond: "Fibromyalgia, chronic back pain, and neuropathic pain.",
    },
    {
      title: "Pain Associated with Aging",
      titleStyle: "orange",
      desc: "Pain related to degenerative changes associated with aging.",
      cond: "Osteoarthritis, spinal stenosis, and loss of joint mobility.",
    },
  ];

  const dottedBorderStyle = {
    borderRadius: 12,
    padding: 2,
    background:
      "repeating-linear-gradient(to right, rgba(255,255,255,0.85) 0 2px, transparent 2px 10px) top / 100% 2px no-repeat," +
      "repeating-linear-gradient(to right, rgba(255,255,255,0.85) 0 2px, transparent 2px 10px) bottom / 100% 2px no-repeat," +
      "repeating-linear-gradient(to bottom, rgba(255,255,255,0.85) 0 2px, transparent 2px 10px) left / 2px 100% no-repeat," +
      "repeating-linear-gradient(to bottom, rgba(255,255,255,0.85) 0 2px, transparent 2px 10px) right / 2px 100% no-repeat",
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index :number) => {
    setCurrentIndex(index);
  };

  const renderCard = (it:any) => (
    <div key={it.title} className="relative h-full  max-sm:pt-7">
      <div className="relative h-full" style={dottedBorderStyle}>
        <div
          className="pointer-events-none absolute -top-3 left-5 h-[34px] w-[86px] rounded-md"
          style={{ backgroundColor: NAVY }}
        />
        <div className="absolute -top-7 left-6 z-10 flex h-[58px] w-[58px] items-center justify-center rounded-lg bg-white shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke={ORANGE}
              strokeWidth="2.2"
            />
            <path
              d="M7.5 12.2l2.8 2.8L16.8 8.5"
              stroke={ORANGE}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          className="flex h-full flex-col rounded-[10px] px-7 pb-7 pt-12"
          style={{ backgroundColor: NAVY }}
        >
          {it.titleStyle === "chip" ? (
            <span
              className="text-[20px] font-extrabold text-white"
              style={{ color: ORANGE }}
            >
              {it.title}
            </span>
          ) : (
            <h3
              className="text-[20px] font-extrabold"
              style={{ color: ORANGE }}
            >
              {it.title}
            </h3>
          )}
          <div className="mt-5 flex flex-1 flex-col space-y-2 text-[15px] leading-relaxed text-white">
            <p className="font-extrabold">Description :</p>
            <p className="opacity-95">{it.desc}</p>
            <p className="pt-2 font-extrabold">Common Conditions:</p>
            <p className="opacity-95">{it.cond}</p>
            <div className="flex-1" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-7xl px-6 py-5 md:py-15">
        <div className="mx-auto max-w-5xl text-center text-white mb-10">
          <p className="text-2xl md:text-4xl font-bold mb-4 ">
            Your Pain, Our Expertise
          </p>
          <p className="text-md md:text-lg font-semibold">
            As an expert, I understand various types of pain to provide effective assessment, diagnosis, and treatment. Here are some common types of pain that a
          </p>
          <p className="text-md md:text-lg font-semibold">
            Physiotherapist, Osteopath, or Chiropractor should be well-equipped to address:
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <div className="mt-10 grid auto-rows-fr gap-10 md:grid-cols-2 xl:grid-cols-4">
            {items.map(renderCard)}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="mt-10">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              {/* Cards Wrapper */}
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {items.map((it, index) => (
                  <div key={it.title} className="w-full flex-shrink-0 px-2">
                    {renderCard(it)}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Placed below cards */}
            <div className="mt-2 flex justify-center space-x-4">
              <button
                onClick={prevSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}