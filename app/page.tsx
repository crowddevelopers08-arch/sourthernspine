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

export default function Home() {
  return (
    <>
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
