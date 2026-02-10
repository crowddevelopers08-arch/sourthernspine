"use client";

export default function ThankYouBanner() {
  return (
    <section className="w-full bg-[#0b1842] text-white text-center py-14 md:py-8 px-4">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2
          className="
            font-bold leading-tight mb-6
            text-2xl
            md:text-[40px]
            lg:text-4xl
          "
        >
          Thank You for Choosing Southern Spine
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto max-w-[900px]
            text-md md:text-lg
            leading-[1.8]
            opacity-95
          "
        >
          We are committed to providing you with the highest quality care and
          personalized attention. Whether you are seeking relief from pain,
          recovering from an injury, or striving to enhance your physical
          performance, our dedicated team is here to support you every step of
          the way.
        </p>

      </div>
    </section>
  );
}
