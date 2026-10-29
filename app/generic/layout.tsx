import Script from "next/script";

const GTM_ID = "GTM-NSQ8Z49K";

// Google Tag Manager for the generic LP (/generic and its sub-pages: thank-you, policies)
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

      {children}
    </>
  );
}
