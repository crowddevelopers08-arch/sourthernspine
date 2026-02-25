import ActionButtons from "@/component/action";
import Footers from "@/component/last-footer";
import SouthernSpineHeader from "@/component/navbar";
import TestimonialsSections from "@/component/thank-you-review";
import ThankYouBanner from "@/component/thankpage";
import Script from "next/script";
import React from "react";

export default function Home() {
  return (
    <>
      {/* Google Ads Conversion Event */}
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-16482547544/g8dtCMjn2JkZENjuvrM9'
          });
        `}
      </Script>
      <Script id="google-ads-phone-config" strategy="afterInteractive">
        {`
          gtag('config', 'AW-16482547544/e5f2CIqP0_4bENjuvrM9', {
            'phone_conversion_number': '094641 08108'
          });
        `}
      </Script>

      <SouthernSpineHeader />
      <ThankYouBanner />
      <TestimonialsSections />
      <ActionButtons />
      <Footers />
    </>
  );
}
