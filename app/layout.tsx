import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MobileActionBar from "@/component/mobile-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Southern Spine Clinic",
  description: " Say goodbye to all your aches and pains",

  // Southern Spine logo mark (cropped from logos.png) – files live in /public, favicon.ico in /app
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon-32x32.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${outfit.variable} antialiased`}
      >
        {/* Google Ads Global Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16482547544"
          strategy="afterInteractive"
        />
        <Script id="google-ads-global" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16482547544');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "mc9ky5jfap");
          `}
        </Script>
          {children}

      </body>
    </html>
  );
}
