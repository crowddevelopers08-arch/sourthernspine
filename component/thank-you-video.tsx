"use client";

import { Volume2, Play } from "lucide-react";
type VideoCardProps = {
  src: string;
  duration: string;
};


const videos = [
  { src: "/videos/v1.mp4", duration: "2:23" },
  { src: "/videos/v2.mp4", duration: "2:27" },
  { src: "/videos/v3.mp4", duration: "1:53" },
  { src: "/videos/v4.mp4", duration: "0:55" },
];

export default function TestimonialVideos() {
  return (
    <section className="w-full bg-[#0b1842] py-20">

      <div className="mx-auto max-w-7xl px-6">

        {/* 🔥 Heading Section */}
        <div className="text-center mb-14">
          <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Real Patient Testimonials
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
            Hear directly from our patients about their recovery journey and
            experience with Southern Spine care.
          </p>
        </div>


        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v, i) => (
            <VideoCard key={i} {...v} />
          ))}
        </div>

      </div>
    </section>
  );
}


function VideoCard({ src, duration } :VideoCardProps) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-xl group">

      {/* Real Video */}
      <video
        src={src}
        className="w-full h-[360px] object-cover"
        muted
        preload="metadata"
      />

      {/* Speaker Icon */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-full text-white">
        <Volume2 size={18} />
      </div>

      {/* Bottom Orange Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-[#f99c1e] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-semibold text-sm">
          <Play size={16} fill="white" />
          {duration}
        </div>

        <div className="text-white text-lg">•••</div>
      </div>
    </div>
  );
}
