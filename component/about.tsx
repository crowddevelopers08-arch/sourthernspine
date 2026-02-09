'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function ProfessionalsSection() {
  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="8" width="6" height="24" rx="2" stroke="#4F46E5" strokeWidth="2" fill="none"/>
          <rect x="24" y="8" width="6" height="24" rx="2" stroke="#4F46E5" strokeWidth="2" fill="none"/>
          <line x1="13" y1="14" x2="13" y2="26" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="27" y1="14" x2="27" y2="26" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "Patient-Centered Care",
      description: "Putting you at the heart of everything we do. Our patient-centered approach ensures personalized."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 12C20 12 16 16 12 16C12 20 14 24 20 28C26 24 28 20 28 16C24 16 20 12 20 12Z" stroke="#4F46E5" strokeWidth="2" fill="none" strokeLinejoin="round"/>
          <circle cx="20" cy="20" r="3" fill="#4F46E5"/>
          <path d="M15 18L17 20L15 22" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25 18L23 20L25 22" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Specialist Doctors",
      description: "Putting you at the heart of everything we do. Our patient-centered approach ensures personalized."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="10" stroke="#4F46E5" strokeWidth="2" fill="none"/>
          <path d="M20 14V20L24 22" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="20" cy="8" r="1.5" fill="#4F46E5"/>
          <circle cx="20" cy="32" r="1.5" fill="#4F46E5"/>
          <circle cx="32" cy="20" r="1.5" fill="#4F46E5"/>
          <circle cx="8" cy="20" r="1.5" fill="#4F46E5"/>
        </svg>
      ),
      title: "24 Hours Service",
      description: "Putting you at the heart of everything we do. Our patient-centered approach ensures personalized."
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="mb-6 flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12 8L18 8L13 12L15 18L10 14L5 18L7 12L2 8L8 8L10 2Z" fill="#4F46E5"/>
                </svg>
                <span className="text-sm font-semibold text-indigo-600">About Us</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Professionals<br />
              dedicated to your<br />
              health
            </h2>

            {/* Description */}
            <p className="mb-10 text-base text-gray-600 leading-relaxed">
              Our team of skilled professionals is committed to providing<br className="hidden lg:block" />
              personalized, compassionate care. With a focus.
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-indigo-50">
                    {feature.icon}
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              View More About Us
            </motion.button>
          </motion.div>

          {/* Right Images Grid - WITH BASE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Container */}
            <div className="relative h-[580px] lg:h-[620px]">
              
              {/* BASE/DEFAULT IMAGE - Nurse with Elderly Patient (BOTTOM RIGHT POSITION) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute bottom-0 right-0 w-[340px] lg:w-[380px]"
              >
                <div className="overflow-hidden rounded-[40px] shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=700&q=80"
                    alt="Nurse with elderly patient"
                    className="h-[480px] lg:h-[520px] w-full object-cover"
                  />
                </div>
              </motion.div>

              {/* OVERLAY 1: Top Left Image - Doctor with Tablet (VIDEO CALL SUPPORT) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute left-0 top-0 z-20 w-[240px] lg:w-[260px]"
              >
                <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
                      alt="Doctor with tablet"
                      className="h-[280px] w-full object-cover"
                    />
                    {/* Dark gradient overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                  </div>
                  {/* Label */}
                  <div className="bg-slate-900 px-6 py-4">
                    <p className="text-center text-xs font-bold text-white tracking-[0.15em] uppercase">
                      VIDEO CALL SUPPORT
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* OVERLAY 2: Opening Hours Floating Card (BOTTOM RIGHT - ON TOP OF BASE IMAGE) */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-12 right-12 z-30 w-[240px]"
              >
                <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 shadow-2xl">
                  {/* Clock Icon Circle - Top Right */}
                  <div className="absolute -top-2 -right-2 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="#4F46E5" strokeWidth="2.5" fill="none"/>
                      <path d="M12 7V12L15.5 14.5" stroke="#4F46E5" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="pt-8">
                    <h3 className="mb-5 text-xl font-bold text-white">
                      Opening Hours
                    </h3>
                    
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-indigo-100">Mon To Fri</span>
                        <span className="text-sm font-bold text-white">09:30 - 07:30</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-indigo-100">Saturday</span>
                        <span className="text-sm font-bold text-white">10:30 - 5:00</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-indigo-100">Sunday</span>
                        <span className="text-sm font-bold text-white">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}