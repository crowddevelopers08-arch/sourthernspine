"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CalendarCheck, Mail, MapPin } from "lucide-react";
import { outfit } from "./font";
import { navLinks } from "./nav-links";

const primaryMenu = navLinks;

const EMAIL = "info@southernspine.co.in";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // highlight the menu item for the section currently on screen
  useEffect(() => {
    const sections = primaryMenu
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`${outfit.className} w-full bg-[#ebebeb] pt-[0px]`}>
      <style>{`html { scroll-behavior: smooth; } @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }`}</style>
      {/* ===== Top info bar ===== */}
      <div className="w-full bg-[#0b1842]">
        <div className="mx-auto flex h-[42px] max-w-[1400px] items-center justify-between gap-4 px-4 md:px-[0px]">
          {/* Location */}
          <div className="flex min-w-0 items-center gap-[8px]">
            <MapPin className="h-[14px] w-[14px] shrink-0 text-[#f99c1e]" strokeWidth={2.2} />
            <span className="truncate text-[11px] font-medium uppercase tracking-[0.3px] text-white sm:text-[13px] sm:tracking-[0.4px]">
              Jubilee Hills &amp; Chikkadpally<span className="hidden sm:inline">, Hyderabad</span>
            </span>
          </div>

          {/* Email */}
          <div className="flex shrink-0 items-center">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-[7px] text-[13px] font-medium tracking-[0.3px] text-white transition-colors duration-200 hover:text-[#f99c1e]"
            >
              <Mail className="h-[13px] w-[13px] shrink-0 text-[#f99c1e]" strokeWidth={2.2} />
              <span className="hidden sm:inline">{EMAIL}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ===== Main header ===== */}
      <div className="w-full border-b-[3px] border-[#f99c1e] bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-4 py-[12px] md:px-[0px]">
          {/* Logo */}
          <a href="#home" className="relative block h-[52px] w-[200px] shrink-0 sm:h-[58px] sm:w-[230px]">
            <Image
              src="https://ik.imagekit.io/9yxs4igok/public/logos.png"
              alt="Southern Spine Logo"
              fill
              priority
              sizes="230px"
              className="object-contain object-left"
            />
          </a>

          {/* Desktop menu + CTA */}
          <div className="hidden items-center gap-[34px] lg:flex">
            <nav>
              <ul className="flex items-center gap-[30px]">
                {primaryMenu.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      aria-current={active === item.href ? "true" : undefined}
                      className={`group relative py-[4px] text-[15px] font-semibold uppercase tracking-[0.3px] transition-colors duration-200 hover:text-[#f99c1e] ${
                        active === item.href ? "text-[#f99c1e]" : "text-[#0b1842]"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute -bottom-[2px] left-0 h-[2px] w-full origin-left rounded-full bg-[#f99c1e] transition-transform duration-300 group-hover:scale-x-100 ${
                          active === item.href ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="#book-appointment"
              className="flex items-center gap-[8px] whitespace-nowrap rounded-full border-2 border-[#0b1842] bg-[#f99c1e] px-[22px] py-[11px] text-[14px] font-bold uppercase tracking-[0.3px] leading-none text-[#0b1842] shadow-[0_2px_0_#0b1842] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#0b1842] hover:text-white active:translate-y-0"
            >
              <CalendarCheck className="h-[15px] w-[15px]" strokeWidth={2.4} />
              Book Appointment
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-[38px] w-[38px] flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span className={`block h-[2px] w-[22px] bg-[#0b1842] transition-transform duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-[22px] bg-[#0b1842] transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-[22px] bg-[#0b1842] transition-transform duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden bg-white transition-[max-height] duration-300 lg:hidden ${
            mobileOpen ? "max-h-[600px]" : "max-h-0"
          }`}
        >
          <ul className="border-t border-[#eeeeee] px-4">
            {primaryMenu.map((item) => (
              <li key={item.label} className="border-b border-[#f2f2f2]">
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-[13px] text-[15px] font-semibold uppercase transition-colors hover:text-[#f99c1e] ${
                    active === item.href ? "text-[#f99c1e]" : "text-[#0b1842]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-[16px] pt-[14px]">
            <a
              href="#book-appointment"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-[8px] rounded-full border-2 border-[#0b1842] bg-[#f99c1e] py-[13px] text-[15px] font-bold uppercase leading-none text-[#0b1842] shadow-[0_2px_0_#0b1842]"
            >
              <CalendarCheck className="h-[15px] w-[15px]" strokeWidth={2.4} />
              Book Appointment
            </a>
            <p className="mt-[12px] flex items-center justify-center gap-[6px] text-center text-[13px] font-normal text-[#6b7280]">
              <MapPin className="h-[12px] w-[12px] text-[#f99c1e]" />
              Jubilee Hills &amp; Chikkadpally, Hyderabad
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
