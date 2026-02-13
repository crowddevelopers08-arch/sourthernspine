"use client";
import React, { useState } from "react";
import PopupForm from "./popup";

const AboutSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  return (
    <div id="about" className="text-white py-4 px-4 md:py-16 lg:py-10 relative bg-[#0b1842]">
      
      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="flex justify-center text-2xl md:text-4xl font-extrabold tracking-tight text-white max-sm:mb-3 mb-8">
          Our Expert
        </p>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-start">
          
          {/* Image Section - 40% width (2 out of 5 columns) - Hidden on mobile */}
          <div className="hidden md:block md:col-span-2">
            <div className="w-full h-auto rounded-xl overflow-hidden shadow-2xl border-2 border-white/30">
              <img
                src="/DR-Raghu.png"
                alt="Dr. Raghupathi Jadhav"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section - 60% width on medium+, full width on mobile */}
          <div className="md:col-span-3 space-y-1">
            
            {/* Introduction Paragraph */}
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-[#f99c1e]">Dr. Raghupathi Jadhav :</h2>
              <p className="text-white/90 leading-relaxed text-base">
                Dr. Raghupathi Jadhav is a renowned healthcare professional with 11 years of experience in holistic healthcare and expertise in Physiotherapy, Osteopathy, and Chiropractic care. Dr. Jadhav offers comprehensive solutions to patients, including alternatives to surgery and medication.
              </p>
            </div>

            {/* Image for Mobile Only - Placed BELOW the introduction paragraph */}
            <div className="block md:hidden my-6">
              <div className="w-full h-auto rounded-xl overflow-hidden shadow-2xl border-2 border-white/30">
                <img
                  src="/DR-Raghu.png"
                  alt="Dr. Raghupathi Jadhav"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Qualifications & Experience */}
            <div className="space-y-2">
              
              {/* Education Section */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#f99c1e]">Education and Qualifications:</h3>
                <ul className="space-y-1 pl-4">
                  <li className="text-white/90">• MASTER OF CHIROPRACTIC (SWEDEN)</li>
                  <li className="text-white/90">• D.O OSTEOPATHY (CANADA)</li>
                  <li className="text-white/90">• FDM.FASCIAL DISTORTION MODEL (GERMANY)</li>
                  <li className="text-white/90">• BACHELOR OF PHYSIOTHERAPY</li>
                </ul>
              </div>

              {/* Specializations Section */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#f99c1e]">Specializations:</h3>
                <p className="text-white/90">
                  Dr. Jadhav's expertise includes specialized treatments like chiropractic and physiotherapy interventions.
                </p>
              </div>

              {/* Clinical Experience Section */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[#f99c1e]">Clinical Experience:</h3>
                <p className="text-white/90">
                  With over a decade of experience, Dr. Jadhav provides hands-on spinal manipulation and holistic healing approaches. The Best Doctors Award in 2018 recognized his commitment to patient well-being.
                </p>
              </div>
            </div>

            {/* Appointment Button with Play Animation */}
            <div className="pt-4 flex items-center flex-wrap gap-4">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="bg-[#f99c1e] text-white hover:bg-[#0b1842] px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white/30"
              >
                Book Appointment
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="arrow"
                >
                  <path
                    d="M4 10H16M16 10L11 5M16 10L11 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Play Button Animation with Text */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsImagePopupOpen(true)}
                  className="relative flex items-center justify-center w-16 h-16 cursor-pointer group"
                  aria-label="View clinic tour"
                >
                  {/* Animated Rings */}
                  <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-30 animate-ping"></span>
                  <span className="absolute inline-flex h-12 w-12 rounded-full bg-white opacity-40 animate-pulse"></span>
                  
                  {/* Play Button Circle */}
                  <span className="relative inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#0b1842] shadow-lg group-hover:bg-[#0a1538] transition-colors duration-300 border-2 border-white/30">
                    {/* Play Icon */}
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M15 9L1.5 17.6603L1.5 0.339745L15 9Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
                
                {/* Text beside animation */}
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm"> Watch Clinic Tour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Form Popup */}
      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

      {/* Image Popup */}
      {isImagePopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setIsImagePopupOpen(false)}
        >
          <div
            className="relative w-full h-full max-w-7xl max-h-screen flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsImagePopupOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Image Container */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/If-youre.jpg"
                alt="Dr. Raghupathi Jadhav - Full View"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutSection;