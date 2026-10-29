import Navbar from "@/component/generic-com/navbar";
import HeroBanner from "@/component/generic-com/hero-banner";
import StatsBar from "@/component/generic-com/stats-bar";
import ConditionsSection from "@/component/generic-com/conditions-section";
import ServicesSection from "@/component/generic-com/services-section";
import ProcessSteps from "@/component/generic-com/process-steps";
import DoctorSection from "@/component/generic-com/doctor-section";
import TestimonialsSection from "@/component/generic-com/testimonials-section";
import FaqSection from "@/component/generic-com/faq-section";
import ContactFooter from "@/component/generic-com/contact-footer";
import MobileActionBar from "@/component/generic-com/mobile-bar";

export default function GenericPage() {
  return (
    <main className="min-h-screen bg-[#ebebeb]">
      <Navbar />
      <HeroBanner />
      <StatsBar />
      <ConditionsSection />
      <ServicesSection />
      <ProcessSteps />
      <DoctorSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactFooter />
      {/* <MobileActionBar /> */}
    </main>
  );
}
