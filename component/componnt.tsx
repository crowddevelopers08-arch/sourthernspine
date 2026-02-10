'use client'

import React, { useState } from "react";
import PopupForm from "./popup";
type AppointmentFormData = {
  fullName: string;
  phoneNumber: string;
  email: string;
  appointmentType: string;
};
const GuidingYouForward = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  const NAVY = "#0b1842";
  const ORANGE = "#f99c1e";

  return (
    <div className="py-12 md:py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative circles - Changed to NAVY color */}
      <div className="absolute top-8 left-4 md:left-12 w-24 h-24 md:w-32 md:h-32 rounded-full opacity-20" style={{ backgroundColor: NAVY }}></div>
      <div className="absolute top-8 right-4 md:right-20 w-16 h-16 md:w-20 md:h-20 rounded-full opacity-20" style={{ backgroundColor: NAVY }}></div>
      <div className="absolute bottom-20 left-1/4 md:left-1/3 w-20 h-20 md:w-24 md:h-24 rounded-full opacity-20" style={{ backgroundColor: NAVY }}></div>
      <div className="absolute bottom-32 right-4 md:right-12 w-40 h-40 md:w-56 md:h-56 rounded-full opacity-20" style={{ backgroundColor: NAVY }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-5 md:mb-10 px-4">
          <div 
            className="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full mb-6"
            style={{ backgroundColor: ORANGE }}
          >
            <span className="text-white">✦</span>
            <span className="text-sm font-medium tracking-wide">
              HOW WE WORK
            </span>
          </div>
          <p 
            className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-serif mb-6 leading-tight"
            style={{ color: NAVY }}
          >
            Start your own journey to better health.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start px-4">
          {/* Card 01 - Predict */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 relative">
            <div className="absolute -top-4 -right-0 text-6xl md:text-8xl font-serif opacity-10" style={{ color: ORANGE }}>
              01
            </div>

            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="32"
                    cy="22"
                    r="10"
                    stroke={ORANGE}
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M20 42c0-6.627 5.373-12 12-12s12 5.373 12 12"
                    stroke={ORANGE}
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="32" cy="19" r="2" fill={ORANGE} />
                </svg>
              </div>
            </div>

            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-center mb-4" style={{ color: ORANGE }}>
              Predict
            </p>
            <p className="text-lg md:text-xl font-serif text-center mb-3" style={{ color: ORANGE }}>
              Dive Deep Into Your Story
            </p>
            <p className="text-gray-600 text-center mb-6 md:mb-8">
              Tackle a comprehensive exploration of your well-being at Southern
              Spine, led by our expert Physiotherapist, Osteopath, and
              Chiropractor. Uncover the intricacies of your health, anticipate
              potential challenges, and reveal hidden strengths.
            </p>

            <div className="flex justify-center  mt-3">
              <button   onClick={() => setIsPopupOpen(true)}
                className="flex items-center gap-2 border-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full text-white transition-all duration-300 font-medium"
                style={{ 
                  borderColor: ORANGE,
                  backgroundColor: ORANGE
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = NAVY;
                  e.currentTarget.style.borderColor = NAVY;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = ORANGE;
                  e.currentTarget.style.borderColor = ORANGE;
                }}
              >
                <span className="px-4 py-1 hover:text-white">Book Now</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle cx="8" cy="8" r="8" fill="white" />
                  <path
                    d="M6 5l3 3-3 3"
                    stroke={ORANGE}
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 02 - Prevent */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 relative lg:mt-10 xl:mt-20">
            <div className="absolute -top-4 -right-0 text-6xl md:text-8xl font-serif opacity-10" style={{ color: ORANGE }}>
              02
            </div>

            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="16"
                    y="16"
                    width="32"
                    height="32"
                    rx="2"
                    stroke={ORANGE}
                    strokeWidth="2"
                    fill="none"
                  />
                  <line
                    x1="24"
                    y1="24"
                    x2="40"
                    y2="24"
                    stroke={ORANGE}
                    strokeWidth="2"
                  />
                  <line
                    x1="24"
                    y1="32"
                    x2="40"
                    y2="32"
                    stroke={ORANGE}
                    strokeWidth="2"
                  />
                  <line
                    x1="24"
                    y1="40"
                    x2="32"
                    y2="40"
                    stroke={ORANGE}
                    strokeWidth="2"
                  />
                  <rect
                    x="20"
                    y="20"
                    width="8"
                    height="8"
                    rx="1"
                    fill="#fde8cc"
                  />
                </svg>
              </div>
            </div>

            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-center mb-4" style={{ color: ORANGE }}>
              Prevent
            </p>
            <p className="text-lg md:text-xl font-serif text-center mb-3" style={{ color: ORANGE }}>
              Empowering You for a Lifetime of Well-Being
            </p>
            <p className="text-gray-600 text-center mb-6 md:mb-8 ">
              Take a proactive approach to your well-being with our specialized
              Physiotherapy, Osteopathy, and Chiropractic care at Southern
              Spine. Address the core of your condition through personalized
              exercises, insights into body mechanics, and injury-prevention
              strategies, ensuring a life of vitality.
            </p>

            <div className="flex justify-center  mt-3" >
              <button   onClick={() => setIsPopupOpen(true)}
                className="flex items-center gap-2 border-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full text-white transition-all duration-300 font-medium"
                style={{ 
                  borderColor: ORANGE,
                  backgroundColor: ORANGE
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = NAVY;
                  e.currentTarget.style.borderColor = NAVY;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = ORANGE;
                  e.currentTarget.style.borderColor = ORANGE;
                }}
              >
                <span className="px-4 py-1 hover:text-white">Book Now</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle cx="8" cy="8" r="8" fill="white" />
                  <path
                    d="M6 5l3 3-3 3"
                    stroke={ORANGE}
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 03 - Perform */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 relative mt-10 lg:mt-20 xl:mt-40">
            <div className="absolute -top-4 -right-0 text-6xl md:text-8xl font-serif opacity-10" style={{ color: ORANGE }}>
              03
            </div>

            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="16"
                    y="20"
                    width="14"
                    height="18"
                    rx="2"
                    stroke={ORANGE}
                    strokeWidth="2"
                    fill="none"
                  />
                  <rect
                    x="34"
                    y="20"
                    width="14"
                    height="18"
                    rx="2"
                    stroke={ORANGE}
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="23" cy="27" r="2" fill={ORANGE} />
                  <circle cx="41" cy="27" r="2" fill={ORANGE} />
                  <path
                    d="M18 42c0-3 2-5 5-5s5 2 5 5"
                    stroke={ORANGE}
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M36 42c0-3 2-5 5-5s5 2 5 5"
                    stroke={ORANGE}
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-center mb-4" style={{ color: ORANGE }}>
              Perform
            </p>
            <p className="text-lg md:text-xl font-serif text-center mb-3" style={{ color: ORANGE }}>
              Ignite Your Full Potential
            </p>
            <p className="text-gray-600 text-center mb-6 md:mb-8 ">
              Experience tailored rehabilitation, collaborative goal-setting,
              and expert guidance from our Physiotherapist, Osteopath, and
              Chiropractor at Southern Spine. Navigate sport-specific training
              to unleash your complete potential, rewriting your health
              narrative with every milestone.
            </p>

            <div className="flex justify-center mt-3">
              <button   onClick={() => setIsPopupOpen(true)}
                className="flex items-center mr-3 border-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full text-white transition-all duration-300 font-medium "
                style={{ 
                  borderColor: ORANGE,
                  backgroundColor: ORANGE
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = NAVY;
                  e.currentTarget.style.borderColor = ORANGE;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = ORANGE;
                  e.currentTarget.style.borderColor = ORANGE;
                }}
              >
                <span className="px-4 py-1 hover:text-white">Book Now</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle cx="8" cy="8" r="8" fill="white" />
                  <path
                    d="M6 5l3 3-3 3"
                    stroke={ORANGE}
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
            <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default GuidingYouForward;