'use client'

import { useState } from "react";
import PopupForm from "./popup";

export default function HealthJourney() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  return (
    <div className="flex items-center justify-center max-sm:px-5 p-8 max-sm:pt-5">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl md:text-4xl text-center max-sm:mb-6 mb-12">
          Start your own journey to better health.
        </h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:gap-4 max-sm:mb-6 mb-12">
          {/* Card 1 - Predict */}
          <div className="bg-white rounded-md overflow-hidden shadow-xl flex flex-col h-full">
            {/* Orange Header */}
            <div className="bg-[#f99c1e] py-4 max-sm:py-2 flex items-center justify-center">
              <span className="text-white max-sm:text-2xl  text-4xl font-bold">1</span>
            </div>
            
            {/* Card Content */}
            <div className="p-8 flex flex-col flex-grow max-sm:pt-3">
              <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-900 mb-2 text-center">
                Predict
              </h2>
              <p className="text-md text-gray-700 mb-2 text-center">
                Dive Deep Into Your Story
              </p>
              <p className="text-gray-600 leading-relaxed text-left">
                Tackle a comprehensive exploration of your well-being at Southern Spine, led by our expert Physiotherapist, Osteopath, and Chiropractor. Uncover the intricacies of your health, anticipate potential challenges, and reveal hidden strengths.
              </p>
            </div>
          </div>

          {/* Card 2 - Prevent */}
          <div className="bg-white rounded-md overflow-hidden shadow-xl flex flex-col h-full">
            {/* Orange Header */}
            <div className="bg-[#f99c1e] py-4 max-sm:py-2 flex items-center justify-center">
              <span className="text-white text-4xl max-sm:text-2xl font-bold">2</span>
            </div>
            
            {/* Card Content */}
            <div className="p-8 flex flex-col flex-grow max-sm:pt-3">
              <h2 className="text-3xl font-bold max-sm:text-2xl text-gray-900 mb-2 text-center ">
                Prevent
              </h2>
              <p className="text-md text-gray-700 mb-2 text-center">
                Empowering You for a Lifetime of Well-Being
              </p>
              <p className="text-gray-600 leading-relaxed text-left">
                Take a proactive approach to your well-being with our specialized Physiotherapy, Osteopathy, and Chiropractic care at Southern Spine. Address the core of your condition through personalized exercises, insights into body mechanics, and injury-prevention strategies, ensuring a life of vitality.
              </p>
            </div>
          </div>

          {/* Card 3 - Perform */}
          <div className="bg-white rounded-md overflow-hidden shadow-xl flex flex-col h-full">
            {/* Orange Header */}
            <div className="bg-[#f99c1e] py-4 max-sm:py-2 flex items-center justify-center">
              <span className="text-white text-4xl max-sm:text-2xl font-bold">3</span>
            </div>
            
            {/* Card Content */}
            <div className="p-8 flex flex-col flex-grow max-sm:pt-3">
              <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-900 mb-2 text-center ">
                Perform
              </h2>
              <p className="text-md text-gray-700 mb-2 text-center">
                Ignite Your Full Potential
              </p>
              <p className="text-gray-600 leading-relaxed text-left">
                Experience tailored rehabilitation, collaborative goal-setting, and expert guidance from our Physiotherapist, Osteopath, and Chiropractor at Southern Spine. Navigate sport-specific training to unleash your complete potential, rewriting your health narrative with every milestone.
              </p>
            </div>
          </div>
        </div>
        
        {/* Buttons Container - Properly aligned below cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
          {/* Book Appointment Button */}
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-[#f99c1e] text-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-semibold transition-colors duration-300 flex items-center gap-2 shadow-md hover:shadow-xl group"
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
        </div>
      </div>
      
      <PopupForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}