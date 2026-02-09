
'use client'
import React, { useState } from "react";
import PopupForm from "./popup";
type AppointmentFormData = {
  fullName: string;
  phoneNumber: string;
  email: string;
  appointmentType: string;
};
export default function RealPatientResultsSection() {
  const NAVY = "#0b1842";
  const ORANGE = "#f99c1e";
  const [currentSlide, setCurrentSlide] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
      const handleFormSubmit = (formData:AppointmentFormData) => {
    console.log('Appointment booked:', formData);
    // Handle form submission - API call, etc.
    alert(`Appointment booked successfully!\n\nName: ${formData.fullName}\nPhone: ${formData.phoneNumber}\nEmail: ${formData.email}\nType: ${formData.appointmentType}`);
  };

  const cards = [
    {
      poster:
        "https://images.unsplash.com/photo-1580281657527-47f249e8f6b5?auto=format&fit=crop&w=1400&q=60",
      duration: "1:56",
    },
    {
      poster:
        "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1400&q=60",
      duration: "1:24",
    },
    {
      poster:
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1400&q=60",
      duration: "0:13",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Arrow Icon Component
  const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: direction === 'left' ? 'rotate(180deg)' : 'none'
      }}
    >
      <path 
        d="M9 18l6-6-6-6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  // Video Card Component
  const VideoCard = ({ card }: { card: typeof cards[0] }) => (
    <div className="overflow-hidden">
      {/* VIDEO AREA */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
        <img
          src={card.poster}
          alt=""
          className="h-full w-full object-cover"
          draggable={false}
        />

        {/* Top-left logo circle */}
        <div className="absolute left-4 top-6 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col items-center justify-center leading-none">
            <div className="h-10 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 120"
                className="h-full w-full"
                aria-hidden="true"
              >
                <path
                  d="M24 76 C40 34, 80 34, 96 76"
                  fill="none"
                  stroke={ORANGE}
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M20 84 C40 56, 80 56, 100 84"
                  fill="none"
                  stroke={NAVY}
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <circle cx="60" cy="24" r="10" fill={NAVY} />
                <path
                  d="M60 36 L60 86"
                  stroke={ORANGE}
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                {Array.from({ length: 6 }).map((_, idx) => (
                  <circle
                    key={idx}
                    cx="60"
                    cy={44 + idx * 7}
                    r="2.2"
                    fill={NAVY}
                  />
                ))}
              </svg>
            </div>
            <div className="mt-1 text-[9px] font-extrabold tracking-[0.08em] text-[#0b1842]">
              SOUTHERN
            </div>
            <div className="-mt-[2px] text-[9px] font-extrabold tracking-[0.08em] text-[#f99c1e]">
              SPINE
            </div>
          </div>
        </div>

        {/* Top-right speaker */}
        <div className="absolute right-6 top-6 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-black/70">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path d="M11 5L6.5 8.5H3v7h3.5L11 19V5Z" fill="white" />
            <path
              d="M15.5 8.5c1 1 1 6 0 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M18 6c2 2 2 10 0 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Player controls strip */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-[4px] w-full bg-black/30">
            <div
              className="h-full w-[22%]"
              style={{ backgroundColor: ORANGE }}
            />
          </div>

          <div className="flex items-center justify-between bg-white px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ backgroundColor: ORANGE }}
                aria-label="Play"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="ml-[2px] h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7L8 5Z" />
                </svg>
              </button>

              <span className="text-[18px] font-extrabold text-[#f99c1e]">
                {card.duration}
              </span>
            </div>

            <span className="text-[26px] leading-none text-gray-400">
              ···
            </span>
          </div>
        </div>
      </div>

      {/* BELOW VIDEO: Brand row ONLY */}
      <div className="flex items-center justify-between bg-white px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 120"
              className="h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M24 76 C40 34, 80 34, 96 76"
                fill="none"
                stroke={ORANGE}
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M20 84 C40 56, 80 56, 100 84"
                fill="none"
                stroke={NAVY}
                strokeWidth="8"
                strokeLinecap="round"
              />
              <circle cx="60" cy="24" r="10" fill={NAVY} />
            </svg>
          </div>

          <div className="leading-tight">
            <div className="text-[16px] font-extrabold tracking-[0.06em] text-[#0b1842]">
              SOUTHERN <span style={{ color: ORANGE }}>SPINE</span>
            </div>
            <div className="text-[10px] font-semibold text-gray-500">
              Physio Rehab | Osteopathy | Chiropractic
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-2xl md:text-4xl font-extrabold tracking-tight text-white">
          Real Patient, Real Results
        </p>

        {/* Desktop Grid View */}
        <div className="desktop-view mt-10 grid gap-10 md:grid-cols-3">
          {cards.map((c, i) => (
            <VideoCard key={i} card={c} />
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="mobile-view mt-10" style={{ display: 'none' }}>
          {/* Carousel with Side Arrows */}
          <div className="relative flex items-center justify-center gap-4">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-white text-white transition-all duration-300 hover:bg-[#f99c1e] hover:border-[#f99c1e]"
              aria-label="Previous slide"
            >
              <ArrowIcon direction="left" />
            </button>

            {/* Card Container */}
            <div className="flex-1 overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {cards.map((c, i) => (
                  <div key={i} className="w-full flex-shrink-0">
                    <VideoCard card={c} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white transition-all duration-300 hover:bg-[#f99c1e] hover:border-[#f99c1e]"
              aria-label="Next slide"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>

          {/* Dots Indicator Below */}
          <div className="mt-6 flex justify-center gap-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="transition-all duration-300"
                style={{
                  width: currentSlide === index ? '32px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  backgroundColor: currentSlide === index ? ORANGE : 'rgba(255,255,255,0.3)',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Book Appointment Button */}
        <div className="mt-10 flex justify-center">
          <button className="book-btn"   onClick={() => setIsPopupOpen(true)}>
            Book Appointment
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="arrow">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-view {
            display: none !important;
          }
          .mobile-view {
            display: block !important;
          }
        }
      `}</style>
        <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSubmit={handleFormSubmit}
      />
    </section>
  );
}