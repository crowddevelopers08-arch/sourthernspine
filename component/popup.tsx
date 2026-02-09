import React, { useState } from 'react';

const PopupForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    appointmentType: 'general'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-md animate-slideUp overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900 z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navy Header */}
        <div className="bg-[#0b1842] text-white p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Book Appointment</h2>
            <p className="text-gray-300 mt-2">Fill in your details below</p>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#0b1842] focus:ring-2 focus:ring-[#0b1842]/20 transition-all duration-200 outline-none"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#0b1842] focus:ring-2 focus:ring-[#0b1842]/20 transition-all duration-200 outline-none"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#0b1842] focus:ring-2 focus:ring-[#0b1842]/20 transition-all duration-200 outline-none"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:border-[#0b1842] focus:ring-2 focus:ring-[#0b1842]/20 transition-all duration-200 outline-none bg-white cursor-pointer"
                  required
                >
                  <option value="general">General Consultation</option>
                  <option value="followup">Follow-up Visit</option>
                  <option value="emergency">Emergency</option>
                  <option value="checkup">Regular Check-up</option>
                  <option value="specialist">Specialist Consultation</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-[#0b1842]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 px-6 bg-[#0b1842] hover:bg-[#0a1538] text-white rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                Book Now
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
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
    </div>
  );
};

export default PopupForm;