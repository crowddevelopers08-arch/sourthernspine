import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  appointmentType: string;
}

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

const PopupForm: React.FC<PopupFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    appointmentType: "general",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
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
                >
                  <option value="general">General Consultation</option>
                  <option value="followup">Follow-up Visit</option>
                  <option value="emergency">Emergency</option>
                  <option value="checkup">Regular Check-up</option>
                  <option value="specialist">Specialist Consultation</option>
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
                className="flex-1 py-3.5 px-6 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3.5 px-6 bg-[#0b1842] hover:bg-[#0d1f5c] text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Book Now
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
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