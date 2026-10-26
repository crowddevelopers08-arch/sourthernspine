// The landing-page URL a lead was submitted from (keeps UTM / gclid params for ad attribution).
// Stored as a "Page URL: …" line in the lead's message – no dedicated DB column needed.

const MAX_LENGTH = 500;

/** Returns a safe http(s) URL string, or null for anything else. */
export function cleanPageUrl(value: unknown): string | null {
  if (typeof value !== "string" || !value.trim()) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.toString().slice(0, MAX_LENGTH);
  } catch {
    return null;
  }
}

export const pageUrlLine = (url: string) => `Page URL: ${url}`;
