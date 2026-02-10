"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  appointmentType: string;
}

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: FormData) => void;
}

const PopupForm: React.FC<PopupFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    appointmentType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Prepare the data for API submission with formName as "southernspine"
      const submissionData = {
        name: formData.fullName,
        phone: formData.phoneNumber,
        email: formData.email,
        appointmentType: formData.appointmentType,
        formName: 'southernspine', // This is IMPORTANT nanba!
        source: 'website-form',
        consent: true, // Assuming consent is given
        status: 'new'
      };

      console.log('📤 Submitting form data:', {
        formName: 'southernspine',
        name: formData.fullName,
        phone: formData.phoneNumber,
        appointmentType: formData.appointmentType
      });

      // Submit to your API endpoint
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      console.log('📥 API Response:', result);

      if (response.ok && result.success) {
        // Call the original onSubmit if provided
        if (onSubmit) {
          onSubmit(formData);
        }

        // Close the form
        onClose();
        
        // Redirect to thank you page
        router.push('/thank-you'); // Change this to your actual thank you page path
        
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmitMessage({
        type: 'error',
        text: error.message || '❌ Failed to book appointment. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      style={{ animation: 'fadeIn 0.2s ease-out' }}
    >
      <div 
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'slideUp 0.3s ease-out' }}
      >
        {/* Close Button - Top Right */}
        <button
          onClick={handleClose}
          type="button"
          className="absolute top-5 right-5 z-10 p-2 rounded-full hover:bg-gray-100 transition-all duration-200 group"
          aria-label="Close form"
          disabled={isSubmitting}
        >
          <svg 
            className="w-6 h-6 text-gray-600 group-hover:text-[#f99c1e] transition-colors duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navy Header */}
        <div className="bg-gradient-to-r from-[#0b1842] to-[#0d1f5c] text-white px-8 py-4 pt-5">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Book Appointment</h2>
            <p className="text-gray-300 text-sm">Fill in your details below</p>
          </div>
        </div>

        {/* Form Content */}
        <div className="px-8 py-8">
          {submitMessage && (
            <div className={`mb-6 p-4 rounded-lg ${submitMessage.type === 'success' ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
              <div className="flex items-start">
                {submitMessage.type === 'success' ? (
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
                <span>{submitMessage.text}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-[#0b1842] mb-2">
                Full Name <span className="text-[#f99c1e]">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3.5 text-base border-2 border-gray-200 rounded-xl focus:border-[#0b1842] focus:ring-4 focus:ring-[#0b1842]/10 transition-all duration-200 outline-none placeholder:text-gray-400"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-[#0b1842] mb-2">
                Phone Number <span className="text-[#f99c1e]">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3.5 text-base border-2 border-gray-200 rounded-xl focus:border-[#0b1842] focus:ring-4 focus:ring-[#0b1842]/10 transition-all duration-200 outline-none placeholder:text-gray-400"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#0b1842] mb-2">
                Email Address <span className="text-[#f99c1e]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3.5 text-base border-2 border-gray-200 rounded-xl focus:border-[#0b1842] focus:ring-4 focus:ring-[#0b1842]/10 transition-all duration-200 outline-none placeholder:text-gray-400"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Appointment Type Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-[#0b1842] mb-2">
                Appointment Type <span className="text-[#f99c1e]">*</span>
              </label>
              <div className="relative">
                <select
                  name="appointmentType"
                  value={formData.appointmentType}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 text-base border-2 border-gray-200 rounded-xl appearance-none focus:border-[#0b1842] focus:ring-4 focus:ring-[#0b1842]/10 transition-all duration-200 outline-none bg-white cursor-pointer"
                  required
                  
                  disabled={isSubmitting}
                >
                  <option value="Choose Your Problem">Choose Your Problem</option>
                  <option value="Back Pain">Back Pain</option>
                  <option value="Neck Pain">Neck Pain</option>
                  <option value="Joint Pain">Joint Pain</option>
                  <option value="Muscular Pain">Muscular Pain</option>
                  <option value="Others">Others</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-[#0b1842]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 py-3.5 px-6 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3.5 px-6 bg-[#0b1842] hover:bg-[#0d1f5c] text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Booking...
                  </>
                ) : (
                  <>
                    Book Now
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PopupForm;