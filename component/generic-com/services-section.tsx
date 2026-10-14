import { BicepsFlexed, Bone, Dumbbell, HousePlus, ScanSearch, Zap, type LucideIcon } from "lucide-react";
import { outfit } from "./font";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Chiropractic Adjustments",
    description: "Back and body adjustments to ease pain, improve joint mobility and support posture.",
    icon: Bone,
  },
  {
    title: "Corrective Exercises",
    description: "Personalised exercises to build strength, stability and flexibility for lasting recovery.",
    icon: Dumbbell,
  },
  {
    title: "Physiotherapy & Electrotherapy",
    description: "Physiotherapy, IFT and electro therapy to support healing and reduce discomfort.",
    icon: Zap,
  },
  {
    title: "Spinal Screening",
    description: "Early detection of misalignments to understand the cause of your symptoms.",
    icon: ScanSearch,
  },
  {
    title: "Muscle Injury Care",
    description: "Targeted treatment to support healing and restore muscle function.",
    icon: BicepsFlexed,
  },
  {
    title: "Home Physiotherapy",
    description: "Care at home for patients who find it difficult to travel to the clinic.",
    icon: HousePlus,
  },
];

export default function ServicesSection() {
  return (
    <section id="treatments" className={`${outfit.className} w-full bg-[#f5f7fc] py-[24px] sm:py-[64px]`}>
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-[60px]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-[10px]">
            <span className="h-[2px] w-[22px] bg-[#f99c1e]" />
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#f99c1e] sm:text-[12px]">
              Our Approach
            </span>
            <span className="h-[2px] w-[22px] bg-[#f99c1e]" />
          </div>
          <h2 className="mt-[8px] text-[26px] font-bold leading-tight text-[#0b1842] sm:text-[32px]">
            Comprehensive <span className="text-[#f99c1e]">Spine Care</span>
          </h2>
          <p className="mt-[6px] max-w-[520px] text-[14px] leading-[1.6] text-[#5b6478] sm:text-[15px]">
            A combined approach, matched to what your assessment shows.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[18px] grid grid-cols-1 gap-[10px] min-[480px]:grid-cols-2 sm:mt-[30px] sm:gap-[14px] md:grid-cols-3 lg:grid-cols-6 lg:gap-[16px]">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-[12px] border border-[#e3e8f3] bg-white p-[16px] shadow-[0_4px_14px_-8px_rgba(11,24,66,0.15)] transition-all duration-300 hover:-translate-y-[4px] hover:border-[#f99c1e]/40 hover:shadow-[0_18px_34px_-14px_rgba(11,24,66,0.35)] sm:px-[20px] sm:pb-[24px] sm:pt-[22px]"
            >
              <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-[#f99c1e] transition-transform duration-300 group-hover:scale-x-100" />

              {/* Number */}
              <span className="absolute right-[16px] top-[14px] text-[30px] font-extrabold leading-none text-[#0b1842]/[0.07] transition-colors duration-300 group-hover:text-[#f99c1e]/25">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#0b1842]/[0.05] transition-colors duration-300 group-hover:bg-[#f99c1e]/10 sm:h-[56px] sm:w-[56px]">
                <service.icon
                  className="h-[28px] w-[28px] text-[#0b1842] transition-all duration-300 group-hover:scale-[1.08] group-hover:text-[#f99c1e]"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <h3 className="mt-[10px] text-[16px] font-bold leading-[1.25] text-[#0b1842] sm:mt-[16px] sm:text-[17px]">
                {service.title}
              </h3>

              <p className="mt-[6px] text-[13.5px] leading-[1.55] text-[#5b6478] sm:mt-[8px]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
