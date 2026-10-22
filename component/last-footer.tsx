import React from 'react';
import Link from 'next/link';
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


          <div >
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

          {/* Policy links */}
          <nav aria-label="Policies" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pb-3 text-sm text-white/80">
            <Link href="/privacy-policy" className="transition-colors hover:text-[#f99c1e]">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-[#f99c1e]">
              Terms &amp; Conditions
            </Link>
            <Link href="/cancellation-refund-policy" className="transition-colors hover:text-[#f99c1e]">
              Cancellation &amp; Refund
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footers;