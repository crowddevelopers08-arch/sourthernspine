import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight, Mail, Phone } from "lucide-react";
import { outfit } from "@/component/generic-com/font";
import type { LegalSection } from "./content";
import TodayDate from "./today-date";

const focusStyles = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f99c1e]";

type PolicyKey = "privacy" | "terms" | "refund";

const POLICIES: { key: PolicyKey; label: string; slug: string }[] = [
  { key: "privacy", label: "Privacy Policy", slug: "privacy-policy" },
  { key: "terms", label: "Terms & Conditions", slug: "terms-and-conditions" },
  { key: "refund", label: "Cancellation & Refund Policy", slug: "cancellation-refund-policy" },
];

type Props = {
  /** "" for the main landing page, "/generic" for the generic landing page */
  basePath: "" | "/generic";
  current: PolicyKey;
  title: string;
  intro: string;
  icon: LucideIcon;
  sections: LegalSection[];
};

export default function LegalPage({ basePath, current, title, intro, icon: Icon, sections }: Props) {
  const homeHref = basePath || "/";

  return (
    <main className={`${outfit.className} min-h-screen bg-[#f5f6fb] pb-8 text-[#0b1842] sm:pb-16`}>
      {/* Header */}
      <header className="border-b border-[#e1e5ef] bg-white px-4 py-3 sm:py-5 md:px-[60px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-nowrap items-center justify-between gap-3">
          <Link
            href={homeHref}
            className={`relative block h-[40px] w-[150px] min-w-0 shrink rounded-sm sm:h-[58px] sm:w-[230px] ${focusStyles}`}
          >
            <Image
              src="https://ik.imagekit.io/9yxs4igok/public/logos.png"
              alt="Southern Spine — Home"
              fill
              priority
              sizes="(min-width: 640px) 230px, 150px"
              className="object-contain object-left"
            />
          </Link>
          <Link
            href={homeHref}
            className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-[#e1e5ef] px-3 py-2 text-[13px] font-medium text-[#52607a] transition-colors hover:border-[#29469b] hover:text-[#29469b] sm:gap-2 sm:border-0 sm:px-0 sm:text-sm ${focusStyles}`}
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            <span className="sm:hidden">Home</span>
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1440px] px-4 pt-6 sm:pt-10 md:px-[60px]">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-[20px] bg-[#0b1842] p-6 text-white sm:rounded-[24px] sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border-[55px] border-white/5"
          />
          <Icon aria-hidden="true" className="mb-4 h-8 w-8 text-[#ffb547] sm:mb-5 sm:h-9 sm:w-9" />
          <h1 className="relative text-[30px] font-semibold leading-tight tracking-tight sm:text-5xl">{title}</h1>
          <p className="relative mt-3 max-w-3xl text-[15px] leading-7 text-[#d1d8eb] sm:mt-4 sm:text-base">{intro}</p>
          <p className="mt-5 text-sm text-[#ffb547]">
            Last updated: <TodayDate />
          </p>
        </div>

        {/* Body */}
        {/* Sections: one per row on mobile, two per row (01+02, 03+04 …) from tablet up */}
        <article className="mt-4 grid gap-4 sm:mt-6 md:grid-cols-2 md:gap-5">
          {sections.map((section, i) => {
            const lastAndAlone = i === sections.length - 1 && sections.length % 2 === 1;
            return (
              <section
                key={section.title}
                className={`group relative overflow-hidden rounded-[20px] border border-[#e1e5ef] bg-white p-5 transition-all duration-300 hover:border-[#f99c1e]/50 hover:shadow-[0_14px_30px_-18px_rgba(11,24,66,0.35)] sm:p-7 ${
                  lastAndAlone ? "md:col-span-2" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#f99c1e] transition-transform duration-300 group-hover:scale-x-100"
                />
                <h2 className="flex items-center gap-3 text-[17px] font-semibold leading-snug sm:text-lg">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f99c1e]/12 text-[13px] font-bold text-[#c97300] ring-1 ring-[#f99c1e]/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>
                {Array.isArray(section.text) ? (
                  <ul className="mt-3 space-y-2">
                    {section.text.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-7 text-[#52607a]">
                        <span aria-hidden="true" className="mt-[11px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#f99c1e]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-[15px] leading-7 text-[#52607a]">{section.text}</p>
                )}
              </section>
            );
          })}

          {/* Contact – full width */}
          <section className="rounded-[20px] border border-[#e1e5ef] bg-white p-5 sm:p-7 md:col-span-2 md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <h2 className="text-[17px] font-semibold sm:text-lg">Contact us</h2>
              <p className="mt-2 text-[15px] leading-7 text-[#52607a]">
                For questions about this page, contact Southern Spine, Hyderabad:
              </p>
            </div>
            <div className="mt-4 flex flex-col items-start gap-3 text-[#29469b] sm:flex-row sm:flex-wrap sm:gap-x-6 md:mt-0 md:shrink-0">
              <a href="mailto:info@southernspine.co.in" className={`inline-flex max-w-full items-center gap-3 rounded-sm hover:underline ${focusStyles}`}>
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                <span className="break-all">info@southernspine.co.in</span>
              </a>
              <a href="tel:+919464108108" className={`inline-flex items-center gap-3 rounded-sm hover:underline ${focusStyles}`}>
                <Phone aria-hidden="true" className="h-4 w-4" />
                +91 94641 08108
              </a>
            </div>
          </section>
        </article>

        {/* Related policies */}
        <nav aria-label="Related policies" className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
          {POLICIES.filter((p) => p.key !== current).map((p) => (
            <Link
              key={p.key}
              href={`${basePath}/${p.slug}`}
              className={`group inline-flex items-center gap-3 whitespace-nowrap rounded-full border border-[#e1e5ef] bg-white px-5 py-3 font-semibold text-[#0b1842] transition-all hover:border-[#f99c1e]/60 hover:shadow-[0_10px_24px_-14px_rgba(11,24,66,0.35)] ${focusStyles}`}
            >
              {p.label}
              <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-[#f99c1e] transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
