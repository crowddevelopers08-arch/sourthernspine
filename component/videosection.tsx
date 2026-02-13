'use client'
import React, { useState, useRef, useEffect } from "react";
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
  
  const handleFormSubmit = (formData: AppointmentFormData) => {
    console.log('Appointment booked:', formData);
    alert(`Appointment booked successfully!\n\nName: ${formData.fullName}\nPhone: ${formData.phoneNumber}\nEmail: ${formData.email}\nType: ${formData.appointmentType}`);
  };

  const cards = [
    {
      video: "/video1.mov",
      duration: "1:56",
    },
    {
      video: "/video2.mov",
      duration: "1:24",
    },
    {
      video: "/video3.mov",
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
  const VideoCard = ({ card }: { card: typeof cards[0] }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false); // Changed to false to enable sound by default
    const [currentTime, setCurrentTime] = useState("0:00");
    const [duration, setDuration] = useState(card.duration);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const handleTimeUpdate = () => {
        const minutes = Math.floor(video.currentTime / 60);
        const seconds = Math.floor(video.currentTime % 60);
        setCurrentTime(`${minutes}:${seconds.toString().padStart(2, '0')}`);
      };

      const handleLoadedMetadata = () => {
        const minutes = Math.floor(video.duration / 60);
        const seconds = Math.floor(video.duration % 60);
        setDuration(`${minutes}:${seconds.toString().padStart(2, '0')}`);
      };

      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }, []);

    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.log("Playback failed:", error);
            });
          }
        }
        setIsPlaying(!isPlaying);
      }
    };

    const toggleMute = () => {
      if (videoRef.current) {
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    };

    // Calculate progress percentage
    const progressPercentage = videoRef.current 
      ? (videoRef.current.currentTime / videoRef.current.duration) * 100 
      : 0;

    return (
      <div className="overflow-hidden rounded-lg shadow-lg">
        {/* VIDEO AREA */}
        <div className="relative aspect-[4/6] w-full overflow-hidden bg-black">
          <video
            ref={videoRef}
            src={card.video}
            className="h-full w-full object-cover"
            loop
            playsInline
            onClick={togglePlay}
            preload="metadata"
          />

          {/* Sound Control Icon - clickable */}
          <button
            onClick={toggleMute}
            className="absolute right-6 top-6 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-black/70 hover:bg-black/90 transition-all duration-300 cursor-pointer"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              // Muted Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7"
                aria-hidden="true"
              >
                <path d="M11 5L6.5 8.5H3v7h3.5L11 19V5Z" fill="white" />
                <line 
                  x1="15" 
                  y1="9" 
                  x2="21" 
                  y2="15" 
                  stroke="#f99c1e" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                />
                <line 
                  x1="21" 
                  y1="9" 
                  x2="15" 
                  y2="15" 
                  stroke="#f99c1e" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              // Unmuted Icon
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
            )}
          </button>

          {/* Player controls strip */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-[4px] w-full bg-black/30">
              <div
                className="h-full transition-all duration-300"
                style={{ 
                  width: `${progressPercentage}%`,
                  backgroundColor: ORANGE 
                }}
              />
            </div>

            <div className="flex items-center justify-between bg-white px-4 py-3">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-105"
                  style={{ backgroundColor: ORANGE }}
                  aria-label={isPlaying ? "Pause" : "Play"}
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="h-5 w-5"
                    >
                      <rect x="6" y="5" width="4" height="14" fill="white" />
                      <rect x="14" y="5" width="4" height="14" fill="white" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="ml-[2px] h-5 w-5"
                    >
                      <path d="M8 5v14l11-7L8 5Z" />
                    </svg>
                  )}
                </button>

                <span className="text-[18px] font-extrabold text-[#f99c1e]">
                  {isPlaying ? currentTime : duration}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 lg:py-4">
        <p className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          Real Patient, Real Results
        </p>

        {/* Desktop Grid View */}
        <div className="desktop-view mt-10 grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <VideoCard key={i} card={c} />
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="mobile-view max-sm:mt-5 mt-10">
          {/* Carousel with Side Arrows */}
          <div className="relative flex items-center justify-center gap-2 sm:gap-4">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-white text-white transition-all duration-300 hover:bg-[#f99c1e] hover:border-[#f99c1e]"
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
                  <div key={i} className="w-full flex-shrink-0 px-1">
                    <VideoCard card={c} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white transition-all duration-300 hover:bg-[#f99c1e] hover:border-[#f99c1e]"
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
        <div className="mt-5 lg:mt-16 flex justify-center">
          <button 
            className="group bg-[#f99c1e] text-white hover:bg-white hover:text-black py-3 px-8 lg:px-12 rounded-lg font-bold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
            onClick={() => setIsPopupOpen(true)}
          >
            Book Appointment
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="arrow transition-transform group-hover:translate-x-1">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (min-width: 769px) {
          .mobile-view {
            display: none !important;
          }
        }
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