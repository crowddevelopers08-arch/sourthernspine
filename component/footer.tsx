"use client";

import React from "react";
import Image from "next/image";

const ContactLocationSection = () => {
  return (
    <section className="relative py-10 lg:py-14 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-[#f99c1e]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 animate-fade-in-left">
            {/* Logo */}
            <div className="bg-white p-5 rounded-2xl inline-block shadow-2xl animate-logo-float">
              <Image
                src="/logos.png"
                alt="Southern Spine Logo"
                width={150}
                height={120}
                className="w-full max-w-[250px] h-auto"
              />
            </div>

            {/* Description */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
              <p className="text-white text-base leading-relaxed">
                Bid farewell to all your aches and pains as you step into a
                realm of comprehensive healthcare at our Spine and Joint Clinic.
                At the heart of our commitment to your well-being is our
                esteemed expert, Dr. Raghupathi Jadhav, a seasoned healthcare
                professional with a remarkable 11-year journey in Physiotherapy,
                Osteopathy, and Chiropractic care.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#f99c1e]/15 text-[#f99c1e] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[#f99c1e] text-sm font-semibold uppercase tracking-wide mb-1.5">
                    Location
                  </div>
                  <div className="text-white text-base leading-relaxed">
                    Street number 6, 1-1-192, Chikkadpally Rd, Hyderabad,
                    Telangana 500020
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#f99c1e]/15 text-[#f99c1e] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[#f99c1e] text-sm font-semibold uppercase tracking-wide mb-1.5">
                    Phone Numbers
                  </div>
                  <div className="space-y-2">
                    <a
                      href="tel:9700575616"
                      className="text-white text-base font-medium hover:text-[#f99c1e] transition-colors block"
                    >
                      9700575616
                    </a>
                    <a
                      href="tel:9464108108"
                      className="text-white text-base font-medium hover:text-[#f99c1e] transition-colors block"
                    >
                      9464108108
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4">
  <a
    href="tel:9700575616"
    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#f99c1e] to-[#ff8c00] text-white font-bold rounded-xl shadow-lg shadow-[#f99c1e]/40 hover:shadow-xl hover:shadow-[#f99c1e]/50 hover:-translate-y-0.5 transition-all duration-300 w-auto"
  >
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
    +91 9700575616
  </a>
</div>
          </div>

          {/* Right Column - Map */}
          <div className="animate-fade-in-right">
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#f99c1e]/30">
              {/* Google Map Iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6731.8852250566015!2d78.494921!3d17.40536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb992d0c62cd19%3A0xc392b9f2934e59fc!2sSouthern%20Spine%20%7C%20Best%20chiropractor%20in%20hyderabad!5e1!3m2!1sen!2sin!4v1770635000025!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.2s backwards;
        }
      `}</style>
    </section>
  );
};

export default ContactLocationSection;