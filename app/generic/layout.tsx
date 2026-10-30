import Script from "next/script";
import MetaPixelPageView from "@/component/generic-com/meta-pixel-pageview";

const GTM_ID = "GTM-NSQ8Z49K";
const META_PIXEL_ID = "1129859606127945";

// Google Tag Manager + Meta Pixel for the generic LP (/generic and its sub-pages: thank-you, policies)
export default function GenericLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* dataLayer + gtag, then the gtm.js start event GTM needs for its "All Pages" triggers */}
      <Script id="generic-gtm-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        `}
      </Script>
      <Script
        id="generic-gtm"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        strategy="afterInteractive"
      />

      {/* GTM fallback for visitors with JavaScript disabled */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>

      {/* Meta Pixel Code */}
      <Script id="generic-meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      {/* PageView on in-site page changes (e.g. after payment → thank-you) */}
      <MetaPixelPageView />
      {/* End Meta Pixel Code */}

      {children}
    </>
  );
}
