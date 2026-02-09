'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PopupForm from './popup';

const HeroSection = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
      const handleFormSubmit = (formData) => {
    console.log('Appointment booked:', formData);
    // Handle form submission - API call, etc.
    alert(`Appointment booked successfully!\n\nName: ${formData.fullName}\nPhone: ${formData.phoneNumber}\nEmail: ${formData.email}\nType: ${formData.appointmentType}`);
  };
  return (
    <section className="hero-banner">
      <div className="hero-wrapper">
        {/* Left Content */}
        <div className="content-side">
          <div className="badge-tag">
            <span className="live-dot"></span>
            Expert Care Available
          </div>
          
          <h1 className="hero-heading">
            Say goodbye to
            <span className="pain-text">aches & pains</span>
          </h1>
          
          <p className="hero-description">
            Visit our spine and joint clinic. Achieve your goals pain-free and live an active lifestyle.
          </p>
          
          <div className="action-buttons">
            <button className="book-btn" onClick={() => setIsPopupOpen(true)}>
              Book Appointment
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="arrow">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <a href="tel:+919700575616" className="call-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now
            </a>
          </div>
          
          <div className="trust-badges">
            <div className="trust-item">
              <div className="trust-number">6+</div>
              <div className="trust-label">Years</div>
            </div>
            <div className="divider"></div>
            <div className="trust-item">
              <div className="trust-number">500+</div>
              <div className="trust-label">Patients</div>
            </div>
            <div className="divider"></div>
            <div className="trust-item">
              <div className="trust-number">98%</div>
              <div className="trust-label">Success</div>
            </div>
          </div>
        </div>

        {/* Right Video */}
        <div className="video-side">
          <div className="video-box">
            <Image 
              src="/images/video-thumbnail.jpg" 
              alt="Treatment Success" 
              width={600}
              height={400}
              className="hero-video"
            />
            <button className="play-btn" aria-label="Play video">
              <div className="play-circle">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" fill="white"/>
                </svg>
              </div>
            </button>
            <div className="video-badge">
              <span className="badge-number">6</span>
              <span className="badge-label">Years Pain Free</span>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float */}
      <a href="https://wa.me/919700575616" className="whatsapp-fab" target="_blank" rel="noopener noreferrer">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="ping-circle"></span>
      </a>

      <style jsx>{`
        .hero-banner {
          background: linear-gradient(135deg, #0b1842 0%, #1a3058 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-banner::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(249, 156, 30, 0.12) 0%, transparent 70%);
          border-radius: 50%;
        }

        .hero-wrapper {
          max-width: 1300px;
          margin: 0 auto;
          padding: 60px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          min-height: 85vh;
          position: relative;
          z-index: 1;
        }

        .content-side {
          animation: slideInLeft 0.7s ease-out;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .badge-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(249, 156, 30, 0.15);
          border: 1px solid rgba(249, 156, 30, 0.4);
          padding: 10px 20px;
          border-radius: 30px;
          color: #f99c1e;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 30px;
          letter-spacing: 0.5px;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background: #f99c1e;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .hero-heading {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          color: white;
          line-height: 1.15;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }

        .pain-text {
          display: block;
          color: #f99c1e;
          background: linear-gradient(135deg, #f99c1e 0%, #ff8c00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          color: rgba(255, 255, 255, 0.85);
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.7;
          margin: 0 0 35px 0;
          max-width: 500px;
        }

        .action-buttons {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
        }

        .book-btn {
          background: linear-gradient(135deg, #f99c1e 0%, #ff8c00 100%);
          color: white;
          font-size: 16px;
          font-weight: 700;
          padding: 16px 32px;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(249, 156, 30, 0.4);
        }

        .book-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(249, 156, 30, 0.5);
        }

        .book-btn .arrow {
          transition: transform 0.3s ease;
        }

        .book-btn:hover .arrow {
          transform: translateX(4px);
        }

        .call-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px 28px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .call-btn:hover {
          border-color: #f99c1e;
          background: rgba(249, 156, 30, 0.1);
        }

        .trust-badges {
          display: flex;
          align-items: center;
          gap: 25px;
          padding: 20px 0;
        }

        .trust-item {
          text-align: center;
        }

        .trust-number {
          font-size: 28px;
          font-weight: 900;
          color: #f99c1e;
          line-height: 1;
          margin-bottom: 5px;
        }

        .trust-label {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 600;
        }

        .divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
        }

        .video-side {
          animation: slideInRight 0.7s ease-out 0.2s backwards;
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .video-box {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          transition: transform 0.4s ease;
        }

        .video-box:hover {
          transform: translateY(-10px);
        }

        .hero-video {
          width: 100%;
          height: auto;
          display: block;
        }

        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .play-btn:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }

        .play-circle {
          width: 80px;
          height: 80px;
          background: rgba(249, 156, 30, 0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 30px rgba(249, 156, 30, 0.5);
        }

        .video-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #f99c1e 0%, #ff8c00 100%);
          padding: 12px 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 4px 20px rgba(249, 156, 30, 0.4);
        }

        .badge-number {
          font-size: 36px;
          font-weight: 900;
          color: white;
          line-height: 1;
        }

        .badge-label {
          font-size: 14px;
          font-weight: 700;
          color: white;
          line-height: 1.2;
        }

        .whatsapp-fab {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .whatsapp-fab:hover {
          transform: scale(1.1);
        }

        .ping-circle {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #25D366;
          border-radius: 50%;
          animation: ping 2s ease-out infinite;
        }

        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
/* Tablet Styles (768px - 1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  .hero-wrapper {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 50px 30px;
  }

  .hero-heading {
    font-size: 3rem;
    line-height: 1.2;
  }

  .hero-description {
    font-size: 1.1rem;
    max-width: 100%;
  }

  .action-buttons {
    flex-wrap: wrap;
  }

  .book-btn,
  .call-btn {
    padding: 14px 24px;
    font-size: 15px;
  }

  .trust-badges {
    gap: 20px;
  }

  .trust-number {
    font-size: 24px;
  }

  .trust-label {
    font-size: 12px;
  }

  .video-box {
    max-width: 500px;
    margin: 0 auto;
  }

  .badge-number {
    font-size: 30px;
  }

  .badge-label {
    font-size: 12px;
  }

  .play-circle {
    width: 70px;
    height: 70px;
  }
}

/* Mobile Styles (up to 768px) */
@media (max-width: 768px) {
  .hero-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 20px;
    min-height: auto;
  }

  .content-side {
    text-align: center;
    animation: slideInUp 0.7s ease-out;
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .badge-tag {
    padding: 8px 16px;
    font-size: 13px;
    margin-bottom: 25px;
  }

  .hero-heading {
    font-size: 2.5rem;
    line-height: 1.15;
    margin-bottom: 20px;
  }

  .hero-description {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 30px;
    max-width: 100%;
    padding: 0 10px;
  }

  .action-buttons {
    flex-direction: column;
    gap: 15px;
    margin-bottom: 35px;
    padding: 0 10px;
  }

  .book-btn,
  .call-btn {
    width: 100%;
    justify-content: center;
    padding: 16px 20px;
    font-size: 16px;
  }

  .book-btn {
    order: 1;
  }

  .call-btn {
    order: 2;
  }

  .trust-badges {
    justify-content: center;
    gap: 20px;
    padding: 25px 0;
    flex-wrap: wrap;
  }

  .trust-item {
    flex: 1;
    min-width: 80px;
  }

  .trust-number {
    font-size: 26px;
  }

  .trust-label {
    font-size: 12px;
  }

  .divider {
    height: 30px;
  }

  .video-side {
    animation: slideInUp 0.7s ease-out 0.3s backwards;
    padding: 0 10px;
  }

  .video-box {
    border-radius: 15px;
    max-width: 100%;
  }

  .video-badge {
    top: 15px;
    right: 15px;
    padding: 10px 15px;
    border-radius: 10px;
  }

  .badge-number {
    font-size: 28px;
  }

  .badge-label {
    font-size: 11px;
  }

  .play-circle {
    width: 65px;
    height: 65px;
  }

  .play-circle svg {
    width: 20px;
    height: 20px;
  }

  /* WhatsApp button adjustments for mobile */
  .whatsapp-fab {
    bottom: 20px;
    right: 20px;
    width: 55px;
    height: 55px;
  }

  .whatsapp-fab svg {
    width: 24px;
    height: 24px;
  }
}

/* Small Mobile Styles (up to 480px) */
@media (max-width: 480px) {
  .hero-wrapper {
    padding: 30px 15px;
    gap: 35px;
  }

  .hero-heading {
    font-size: 2rem;
    padding: 0 5px;
  }

  .pain-text {
    font-size: 2.2rem;
  }

  .hero-description {
    font-size: 0.95rem;
    padding: 0 5px;
  }

  .badge-tag {
    font-size: 12px;
    padding: 6px 14px;
  }

  .action-buttons {
    padding: 0;
  }

  .book-btn,
  .call-btn {
    padding: 14px 16px;
    font-size: 15px;
  }

  .trust-badges {
    gap: 15px;
  }

  .trust-item {
    min-width: 70px;
  }

  .trust-number {
    font-size: 22px;
  }

  .trust-label {
    font-size: 11px;
  }

  .video-badge {
    padding: 8px 12px;
    top: 12px;
    right: 12px;
  }

  .badge-number {
    font-size: 24px;
  }

  .badge-label {
    font-size: 10px;
  }

  .play-circle {
    width: 55px;
    height: 55px;
  }

  .whatsapp-fab {
    bottom: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
  }
}

/* Extra small screens (up to 360px) */
@media (max-width: 360px) {
  .hero-heading {
    font-size: 1.8rem;
  }

  .pain-text {
    font-size: 2rem;
  }

  .trust-badges {
    gap: 10px;
  }

  .trust-item {
    min-width: 65px;
  }

  .trust-number {
    font-size: 20px;
  }

  .video-badge {
    flex-direction: column;
    gap: 5px;
    padding: 8px 10px;
  }

  .badge-number {
    font-size: 22px;
  }

  .badge-label {
    font-size: 9px;
    text-align: center;
  }
}

/* Landscape mode adjustments */
@media (max-height: 600px) and (orientation: landscape) {
  .hero-wrapper {
    min-height: auto;
    padding: 30px 20px;
  }

  .hero-heading {
    font-size: 2rem;
    margin-bottom: 15px;
  }

  .hero-description {
    margin-bottom: 20px;
  }

  .action-buttons {
    margin-bottom: 25px;
  }
}

/* Fix for very tall mobile screens */
@media (min-height: 800px) and (max-width: 768px) {
  .hero-wrapper {
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
};

export default HeroSection;