import React from 'react';
import { Facebook } from 'lucide-react';

const Footers = () => {
  return (
    <footer className="w-full bg-[#0b1842] text-white py-1 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          {/* Copyright Text */}
          <div className="text-sm md:text-base leading-relaxed">
            <p className="mb-2">
              Copyright © {new Date().getFullYear()}  Southern Spinei Powered by Crow Medico
            </p>
            <p className="text-white/90 text-sm">
              This site is not a part of the Facebook website or Facebook Inc. Additionally, 
              This site is NOT endorsed by Facebook in any way.
            </p>
          </div>

          {/* Facebook Trademark Section */}
          <div className="border-t border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <Facebook className="w-5 h-5 text-white" />
                <span className="text-base font-semibold">FACEBOOK</span>
              </div>
              <div className="text-sm text-white/80">
                is trademark of FACEBOOK, Inc.
              </div>
            </div>
          </div>

          {/* Optional: Add some spacing or additional links */}
          <div>
            {/* <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact Us
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;