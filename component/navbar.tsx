// import React from "react";

// export default function SouthernSpineHeader() {
//   const NAVY = "#0b1842";
//   const ORANGE = "#f99c1e";

//   return (
//     <header className="w-full bg-white">
//       {/* Top Bar */}
//       <div className="mx-auto flex w-full items-center justify-between px-8 py-4">
//         {/* Left: Logo + Text */}
//         <div className="flex items-center gap-4">
//           {/* Logo (inline SVG, colors updated) */}
//           <div className="h-12 w-12">
//             <svg
//               viewBox="0 0 120 120"
//               className="h-full w-full"
//               xmlns="http://www.w3.org/2000/svg"
//               aria-hidden="true"
//             >
//               <path
//                 d="M24 76 C40 34, 80 34, 96 76"
//                 fill="none"
//                 stroke={ORANGE}
//                 strokeWidth="10"
//                 strokeLinecap="round"
//               />
//               <path
//                 d="M20 84 C40 56, 80 56, 100 84"
//                 fill="none"
//                 stroke={NAVY}
//                 strokeWidth="8"
//                 strokeLinecap="round"
//               />
//               <circle cx="60" cy="24" r="10" fill={NAVY} />
//               <path
//                 d="M60 36 L60 86"
//                 stroke={ORANGE}
//                 strokeWidth="6"
//                 strokeLinecap="round"
//               />
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <circle key={i} cx="60" cy={44 + i * 7} r="2.2" fill={NAVY} />
//               ))}
//             </svg>
//           </div>

//           <div className="leading-tight">
//             <div className="flex items-baseline gap-2">
//               <span
//                 className="text-[22px] font-extrabold tracking-[0.08em]"
//                 style={{ color: NAVY }}
//               >
//                 SOUTHERN
//               </span>
//               <span
//                 className="text-[22px] font-extrabold tracking-[0.08em]"
//                 style={{ color: ORANGE }}
//               >
//                 SPINE
//               </span>
//             </div>

//             <div className="mt-1 text-[12px] font-semibold tracking-wide text-[#6B7280]">
//               Physio Rehab | Osteopathy | Chiropractic
//             </div>
//           </div>
//         </div>

//         {/* Right: CTA */}
//         <a
//           href="tel:+919700575616"
//           className="rounded-full px-7 py-3 text-[16px] font-extrabold"
//           style={{
//             backgroundColor: ORANGE,
//             color: NAVY,
//             border: `2px solid ${NAVY}`,
//             boxShadow: `0 2px 0 ${NAVY}`,
//           }}
//         >
//           +91 9700575616
//         </a>
//       </div>

//       {/* Bottom Wave - Smooth semicircles exactly like uploaded image */}
//       <div className="w-full h-4">
//         <svg
//           className="block w-full h-4"
//           viewBox="0 0 1200 16"
//           preserveAspectRatio="none"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-hidden="true"
//         >
//           <defs>
//             <pattern id="wavePattern" x="0" y="0" width="32" height="16" patternUnits="userSpaceOnUse">
//               <path 
//                 d="M0,16 Q8,0 16,16 T32,16" 
//                 fill={NAVY}
//               />
//             </pattern>
//           </defs>
//           <rect x="0" y="0" width="100%" height="16" fill="url(#wavePattern)" />
//         </svg>
//       </div>
//     </header>
//   );
// }

"use client";

import React from "react";
import Image from "next/image";

export default function SouthernSpineHeader() {
  const NAVY = "#0b1842";
  const ORANGE = "#f99c1e";

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">
        <div className="flex h-[76px] sm:h-[62px] md:h-[95px] items-center justify-between gap-3">
          {/* Logo (fluid, never breaks) */}
          <div className="relative h-[60px] sm:h-[34px] md:h-[38px] lg:h-[80px] flex-1 min-w-0">
            <Image
              src="/logos.png"
              alt="Southern Spine Logo"
              fill
              priority
              sizes="(max-width: 640px) 70vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 1020px"
              className="object-contain object-left"
            />
          </div>

          {/* CTA (never wraps, scales cleanly) */}
          <a
            href="tel:+919700575616"
            className="
              shrink-0 whitespace-nowrap rounded-full font-extrabold
              text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px]
              px-3 sm:px-4 md:px-5 lg:px-6
              py-1.5 sm:py-2 md:py-2.5
              leading-none
              transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]
            "
            style={{
              backgroundColor: ORANGE,
              color: NAVY,
              border: `2px solid ${NAVY}`,
              boxShadow: `0 2px 0 ${NAVY}`,
            }}
          >
            +91 9700575616
          </a>
        </div>
      </div>

      {/* Wave (fixed small height, always visible) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-[8px] sm:h-[10px] md:h-[12px]"
        viewBox="0 0 1200 16"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="wavePattern"
            x="0"
            y="0"
            width="26"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0,16 Q6.5,0 13,16 T26,16" fill={NAVY} />
          </pattern>
        </defs>
        <rect width="100%" height="16" fill="url(#wavePattern)" />
      </svg>
    </header>
  );
}

