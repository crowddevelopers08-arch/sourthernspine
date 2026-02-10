'use client'

import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  testimonial: string;
  title: string;
}

const TestimonialsSections = () => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleExpand = (id: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Nawaz Mohammad",
      position: "2 years ago",
      testimonial: "Hi all, I was having hell of back pain and I got relief from it now in just 6 sessions Dr Jadhav sir is very good and expert in this I recommend to all to contact him, thanks.",
      title: "NM"
    },
    {
      id: 2,
      name: "Mohammed Pasha",
      position: "2 years ago",
      testimonial: "I highly recommend Southern spine, Dr Jadhav is a genius, I was suffering from lower back for almost 3 years, it took 5 sessions to get rid of it, the treatment is pocket friendly ,if you are suffering from pain then don't hesitate just visit him, and I want to thank the 4 staff who were around me and assisted me during the sessions🙏.",
      title: "MP"
    },
    {
      id: 3,
      name: "Sree Durga Bhavani",
      position: "2 years ago",
      testimonial: "Dr. Raghupathi Jadhav is truly exceptional. His interactive sessions are a game-changer, creating an environment that not only promotes healing but also uplifts the patient's spirits. The positivity they bring to each session is palpable, making every session a genuinely enjoyable experience.Raghupathi Jadhav has a unique ability to connect with the patient, ensuring they feel comfortable and engaged throughout the Physiotherapy sessions. His personalized approach and infectious positivity have been instrumental in the progress. I wholeheartedly recommend Raghupathi Jadhav anyone seeking a dedicated and uplifting physiotherapist. His exceptional skills and uplifting demeanour makes him a true asset.",
      title: "SDB"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Google Icon SVG
  const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  // Verified Badge Icon SVG
  const VerifiedIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#4285F4" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Star Icon SVG
  const StarIcon = ({ filled = true }: { filled?: boolean }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
        fill={filled ? "#f99c1e" : "#e5e7eb"}
        stroke={filled ? "#f99c1e" : "#e5e7eb"}
        strokeWidth="1"
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  // Arrow Icon
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

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      padding: '10px 0px',
      backgroundColor: '#0b1842',
      maxWidth: '1500px',
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        <h1 style={{
          fontSize: 'clamp(22px, 5vw, 36px)',
          fontWeight: '700',
          color: '#ffffff',
          margin: '0',
          lineHeight: '1.2'
        }}>
          Peoples Talk About<br />Mediox
        </h1>
      </div>

      {/* Desktop Grid View */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
      className="desktop-view">
        {testimonials.map((item) => (
          <TestimonialCard 
            key={item.id} 
            item={item} 
            expandedCards={expandedCards}
            toggleExpand={toggleExpand}
            GoogleIcon={GoogleIcon}
            VerifiedIcon={VerifiedIcon}
            StarIcon={StarIcon}
          />
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="mobile-view" style={{
        display: 'none',
        maxWidth: '100%'
      }}>
        {/* Carousel Container */}
        <div style={{
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            transition: 'transform 0.4s ease-in-out',
            transform: `translateX(-${currentSlide * 100}%)`
          }}>
            {testimonials.map((item) => (
              <div key={item.id} style={{
                minWidth: '100%',
                padding: '0 10px'
              }}>
                <TestimonialCard 
                  item={item} 
                  expandedCards={expandedCards}
                  toggleExpand={toggleExpand}
                  GoogleIcon={GoogleIcon}
                  VerifiedIcon={VerifiedIcon}
                  StarIcon={StarIcon}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Below Card */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          marginTop: '24px'
        }}>
          <button
            onClick={prevSlide}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '2px solid #e2e8f0',
              backgroundColor: '#ffffff',
              color: '#0b1842',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f99c1e';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = '#f99c1e';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#0b1842';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}
          >
            <ArrowIcon direction="left" />
          </button>

          {/* Dots Indicator */}
          <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                style={{
                  width: currentSlide === index ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: currentSlide === index ? '#f99c1e' : '#e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '2px solid #e2e8f0',
              backgroundColor: '#ffffff',
              color: '#0b1842',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f99c1e';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = '#f99c1e';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#0b1842';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      {/* CSS for responsive behavior */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-view {
            display: none !important;
          }
          .mobile-view {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ 
  item, 
  expandedCards, 
  toggleExpand,
  GoogleIcon,
  VerifiedIcon,
  StarIcon
}: {
  item: any;
  expandedCards: Record<number, boolean>;
  toggleExpand: (id: number) => void;
  GoogleIcon: React.FC;
  VerifiedIcon: React.FC;
  StarIcon: React.FC<{ filled?: boolean }>;
}) => {
  return (
    <div style={{
      backgroundColor: '#f8fafc',
      borderRadius: '20px',
      padding: '40px 32px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      border: '1px solid #e2e8f0',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      height: '100%'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(11, 24, 66, 0.1)';
      e.currentTarget.style.transform = 'translateY(-5px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }}>
      
      {/* Google Icon - Top Left */}
      <div style={{
        position: 'absolute',
        top: '32px',
        left: '32px'
      }}>
        <GoogleIcon />
      </div>

      {/* Title Badge - Top Right */}
      <div style={{
        position: 'absolute',
        top: '24px',
        right: '32px'
      }}>
        <div style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          backgroundColor: '#f0f9ff',
          border: '4px solid #ffffff',
          boxShadow: '0 4px 12px rgba(11, 24, 66, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '700',
          fontSize: '22px',
          color: '#f99c1e'
        }}>
          {item.title}
        </div>
      </div>

      {/* Quote Icon */}
      <div style={{
        fontSize: '56px',
        color: '#f99c1e',
        fontWeight: '700',
        lineHeight: '1',
        fontFamily: 'Georgia, serif',
        marginTop: '20px'
      }}>
        "
      </div>

      {/* Name and Position */}
      <div style={{
        marginTop: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '4px'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#0b1842',
            margin: '0'
          }}>
            {item.name}
          </h3>
          <VerifiedIcon />
        </div>
        <p style={{
          fontSize: '14px',
          color: '#64748b',
          margin: '0',
          fontWeight: '500'
        }}>
          {item.position}
        </p>
      </div>

      {/* Testimonial Text with Read More */}
      <div>
        <p style={{
          fontSize: '15px',
          color: '#475569',
          lineHeight: '1.7',
          margin: '0',
          flexGrow: 1,
          display: '-webkit-box',
          WebkitLineClamp: expandedCards[item.id] ? 'unset' : 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {item.testimonial}
        </p>
        
        {/* Read More / Show Less Button */}
        {item.testimonial.length > 200 && (
          <button
            onClick={() => toggleExpand(item.id)}
            style={{
              background: 'none',
              border: 'none',
              color: '#f99c1e',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              padding: '8px 0 0 0',
              marginTop: '0px',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ff8c00';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#f99c1e';
            }}
          >
            {expandedCards[item.id] ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>

      {/* Google Star Rating */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        marginTop: 'auto',
        paddingTop: '8px'
      }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon key={star} filled={true} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSections;