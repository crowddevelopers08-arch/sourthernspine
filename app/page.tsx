import ProfessionalsSection from "@/component/about";
import GuidingYouForward from "@/component/componnt";
import ContactLocationSection from "@/component/footer";
import SouthernSpineClinic from "@/component/footer";
import HeroSection from "@/component/herosection";
import Footers from "@/component/last-footer";
import Header from "@/component/navbar";
import TestimonialsSection from "@/component/review";
import WhatWeDo from "@/component/service-list";
import RealPatientResultsSection from "@/component/videosection";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        id="google-ads-tag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('config', 'AW-16482547544/e5f2CIqP0_4bENjuvrM9', {
              'phone_conversion_number': '094641 08108'
            });
          `
        }}
      />
      <Header /> 
      <HeroSection /> 
      <TestimonialsSection /> 
      <WhatWeDo /> 
      <ProfessionalsSection /> 
      <RealPatientResultsSection /> 
      <GuidingYouForward /> 
      <ContactLocationSection />  
      <Footers />  
    </>
  );
}