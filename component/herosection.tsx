"use client";

import React, { useState, useEffect } from "react";
import PopupForm from "./popup";

const HeroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Background images array
  const backgroundImages = [
    "/ban-1.jpg",
    "/ban-2.jpeg",
    "/ban-3.avif",
    "/ban-4.jpeg",
  ];

  // Auto-slide background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden ">
      {/* Background Image Slider with Overlay */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentBgIndex
              ? "opacity-100 animate-zoomIn"
              : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      ))}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0b1842]/85 to-[#1a3058]/86 animate-fadeIn" />

      {/* Container */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-16 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 w-full py-8 lg:py-20">
          {/* Left Content Section */}
          <div className="flex flex-col justify-center animate-slideFromLeft lg:order-1">
            {/* Heading 1 - Desktop: single line, Mobile: multi line */}
            {/* Headings Container */}
            <div className="flex flex-col lg:block">
              {/* Heading 1 - Desktop: single line, Mobile: multi line */}
              <h1 className="text-white font-black mb-2 animate-slideDown max-sm:mb-2 mb-5">
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                  Say goodbye to all your
                </span>{" "}
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl py-2 mt-3 mb-2 bg-[#f99c1e] text-white px-1 py-0 inline-block w-auto animate-glow">
                  aches and pains
                </span>
              </h1>

              {/* Heading 2 - Desktop: single line, Mobile: multi line */}
              <h1 className="text-white font-black mb-2 animate-slideDown  max-sm:mb-2 mb-5">
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                  Visit our
                </span>{" "}
                {"  "}
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl py-1 bg-[#f99c1e] px-1 text-white animate-glow lg:inline-block">
                  spine and joint clinic.
                </span>
              </h1>
            </div>

            {/* Video Testimonial Section - Mobile Only */}
            <div className="block lg:hidden my-4 animate-slideFromRight">
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">
                <div className="relative pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/5Gt1GtuE9ic?autoplay=1&mute=1&loop=1&playlist=5Gt1GtuE9ic&controls=1"
                    title="Treatment Success Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 max-w-[550px] animate-slideDown">
              Helping you achieve your goals pain-free and enabling you to live
              an active lifestyle
            </p>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-4  max-sm:mb-2 mb-6 animate-slideDown">
              <button
                className="group bg-gradient-to-r from-[#f99c1e] to-[#ff8c00] text-white font-bold px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:translate-y-[-5px] shadow-lg shadow-[#f99c1e]/40 hover:shadow-xl hover:shadow-[#f99c1e]/60"
                onClick={() => setIsPopupOpen(true)}
              >
                Book Appointment
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M4 10H16M16 10L11 5M16 10L11 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <a
                href="tel:+919700575616"
                className="group flex items-center gap-2.5 px-8 py-4 border-2 border-white/40 rounded-full text-white font-bold transition-all duration-300 hover:border-[#f99c1e] hover:bg-[#f99c1e]/20 hover:translate-y-[-3px]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 9700575616
              </a>
            </div>

            {/* Doctor Info - Mobile Only */}
            <div className="block lg:hidden  pt-2 border-t border-white/20 animate-slideDown">
              <h3 className="text-white font-bold text-base">
                DR. RAGHUPATHI JADHAV
              </h3>
              <p className="text-white/70 text-xs">B.PT.CERT.CENT.COM.NT</p>
              <p className="text-white/70 text-xs">
                DEPARTMENT OF CHRONIC OBSTRUCTIVE SPINE ADJUSTMENT SPECIALIST
              </p>
            </div>

            {/* Mobile Appointment Button */}
            <div className="flex lg:hidden mt-4 animate-slideDown">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="w-full bg-gradient-to-r from-[#f99c1e] to-[#ff8c00] text-white font-bold py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-[#f99c1e]/40 transition-all duration-300 active:scale-95"
              >
                Book An Appointment
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10H16M16 10L11 5M16 10L11 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Video Section - Desktop only */}
          <div className="hidden lg:flex items-center h-full animate-slideFromRight lg:order-2">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:translate-y-[-15px] hover:scale-[1.02]">
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/5Gt1GtuE9ic?autoplay=1&mute=1&loop=1&playlist=5Gt1GtuE9ic&controls=1"
                  title="Treatment Success Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919700575616"
        className="fixed bottom-18 sm:bottom-8 right-5 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/50 hover:shadow-xl hover:shadow-[#25D366]/70 transition-all duration-400 hover:scale-110 z-50 animate-bounceIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping-slow opacity-75"></div>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          className="relative z-10"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes zoomIn {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .animate-zoomIn {
          animation: zoomIn 20s ease-in-out infinite alternate;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in;
        }

        @keyframes slideFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideFromLeft {
          animation: slideFromLeft 1s ease-out;
        }

        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideFromRight {
          animation: slideFromRight 1s ease-out;
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 1s ease-out backwards;
        }

        @keyframes glow {
          0%,
          100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.3);
          }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-bounceIn {
          animation: bounceIn 1s ease-out 2s backwards;
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 2s ease-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
