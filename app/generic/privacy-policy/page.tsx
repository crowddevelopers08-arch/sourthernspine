import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, Phone, ShieldCheck } from "lucide-react";
import { outfit } from "@/component/generic-com/font";

export const metadata: Metadata = {
  title: "Privacy Policy | Southern Spine",
  description: "How Southern Spine handles appointment enquiries, website usage information, and privacy requests.",
};

const sections = [
  {
    title: "Information you share with us",
    text: "When you submit an appointment or enquiry form, we collect the information you provide, such as your name, phone number, area of concern, and preferred appointment time. Depending on the form, you may also provide an email address, location, appointment date, or a message. We also record the enquiry source and consent information submitted with the form. Please avoid including medical records or other sensitive details that are not needed to arrange your visit.",
  },
  {
    title: "How we use your information",
    text: "We use enquiry information to contact you, respond to your questions, arrange or confirm appointments, and understand the care you are seeking. Website usage information helps us understand how visitors use the site and measure the performance of our advertising. Submitting an enquiry does not confirm an appointment; our team will contact you to arrange it.",
  },
  {
    title: "Cookies, advertising, and website analytics",
    text: "This website includes Google Ads tags for advertising and conversion measurement, and Microsoft Clarity for usage analytics, including interactions and session recordings. These services may use cookies or similar technologies and process information such as your IP address, browser, device, pages visited, and interactions. You can manage or block cookies in your browser settings. Some third-party services may still receive technical information when their scripts load.",
  },
  {
    title: "Service providers and external content",
    text: "Appointment enquiries are stored in our website database and may be sent to TeleCRM when that integration is configured, so our team can manage follow-up. Hosting, database, analytics, and advertising providers may process information as part of providing their services. Pages may also load externally hosted images, Google Maps, or YouTube content. These providers may receive technical information when their content loads and handle it under their own privacy policies. Information may be processed outside your location depending on the provider.",
  },
  {
    title: "Keeping and protecting information",
    text: "Enquiry information is retained to support appointment follow-up and related administrative needs. Retention can vary depending on the enquiry and any applicable record-keeping requirements. No website or electronic transmission can be guaranteed completely secure. Contact us if you have questions about information we hold or wish to request its deletion.",
  },
  {
    title: "Your choices and privacy requests",
    text: "You can contact us to ask about your personal information, request a correction or deletion, or ask us to stop contacting you about an enquiry. We may need to verify your identity before responding. Requests are considered in light of applicable obligations and information we need to retain. Browser privacy settings can also help you manage cookies and tracking.",
  },
  {
    title: "Children’s information",
    text: "A parent or guardian should contact us when arranging care for a child. If you believe a child has submitted personal information without appropriate involvement from a parent or guardian, please contact us so we can review it.",
  },
  {
    title: "Changes to this policy",
    text: "We may update this policy when our website or information handling changes. The updated policy will appear on this page with a revised date.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className={`${outfit.className} min-h-screen bg-[#f5f6fb] pb-28 text-[#0b1842] sm:pb-16`}>
      <header className="border-b border-[#e1e5ef] bg-white px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
          <Link href="/" className="relative block h-[52px] w-[200px] shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f99c1e] sm:h-[58px] sm:w-[230px]">
            <Image
              src="https://ik.imagekit.io/9yxs4igok/public/logos.png"
              alt="Southern Spine — Home"
              fill
              priority
              sizes="(min-width: 640px) 230px, 200px"
              className="object-contain object-left"
            />
          </Link>
          <Link href="/generic" className="inline-flex items-center gap-2 rounded-sm text-sm text-[#52607a] hover:text-[#29469b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f99c1e]"><ArrowLeft aria-hidden="true" className="h-4 w-4" />Back to Home</Link>
        </div>
      </header>
      <div className="mx-auto max-w-5xl px-5 pt-10 sm:px-8 sm:pt-14">
        <div className="relative overflow-hidden rounded-[24px] bg-[#0b1842] p-7 text-white sm:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border-[55px] border-white/5" />
          <ShieldCheck aria-hidden="true" className="mb-5 h-9 w-9 text-[#ffb547]" />
          <h1 className="relative text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="relative mt-4 max-w-2xl text-base leading-7 text-[#d1d8eb]">This policy explains how Southern Spine handles information collected through this website and appointment enquiries.</p>
          <p className="mt-5 text-sm text-[#ffb547]">Last updated: 14 October 2026</p>
        </div>
        <article className="mt-6 rounded-[24px] border border-[#e1e5ef] bg-white p-7 sm:p-12">
          <div className="space-y-9">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p className="mt-3 text-base leading-8 text-[#52607a]">{section.text}</p>
              </section>
            ))}
            <section className="border-t border-[#e1e5ef] pt-8">
              <h2 className="text-xl font-semibold">Contact us</h2>
              <p className="mt-3 leading-8 text-[#52607a]">For privacy questions or requests, contact Southern Spine, Hyderabad:</p>
              <div className="mt-4 flex flex-col items-start gap-4 text-[#29469b]">
                <a href="mailto:info@southernspine.co.in" className="inline-flex max-w-full items-center gap-3 rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f99c1e]"><Mail aria-hidden="true" className="h-4 w-4 shrink-0" /><span className="break-all">info@southernspine.co.in</span></a>
                <a href="tel:+919464108108" className="inline-flex items-center gap-3 rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f99c1e]"><Phone aria-hidden="true" className="h-4 w-4" />+91 94641 08108</a>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
