import Footers from "@/component/last-footer";
import SouthernSpineHeader from "@/component/navbar";
import TestimonialsSections from "@/component/thank-you-review";
import TestimonialVideos from "@/component/thank-you-video";
import ThankYouBanner from "@/component/thankpage";
import Image from "next/image";
import React from "react";

export default function Home() {
  return <>
  <SouthernSpineHeader />
  <ThankYouBanner />
  <TestimonialsSections />
  <TestimonialVideos />
  <Footers />
  </>;
}
