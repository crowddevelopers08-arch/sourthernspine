"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type Fbq = (...args: unknown[]) => void;

/**
 * The Meta Pixel base code fires PageView only on a full page load. Next.js changes pages
 * without reloading (e.g. /generic → /generic/thank-you after payment), so send a PageView
 * for every later in-site page change too. The first page is already covered by the base code.
 */
export default function MetaPixelPageView() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const fbq = (window as unknown as { fbq?: Fbq }).fbq;
    if (typeof fbq === "function") fbq("track", "PageView");
  }, [pathname]);

  return null;
}
