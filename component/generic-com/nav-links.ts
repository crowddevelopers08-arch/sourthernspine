// Section anchors on the generic LP – shared by the navbar and the footer
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Conditions", href: "#conditions" },
  { label: "Treatments", href: "#treatments" },
  { label: "Doctor", href: "#doctor" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
];

export const footerLinks = [
  ...navLinks,
  { label: "Your Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const clinics = [
  {
    name: "Jubilee Hills",
    address: "3rd Floor, Plot No. 1269, Road No. 36, Jubilee Hills, Hyderabad – 500033",
  },
  {
    name: "Chikkadpally",
    address: "2nd Floor, 1-1-192/A, Road No. 6, Chikkadpally RTC X Road, Hyderabad",
  },
];

export const mapsLink = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Southern Spine, ${address}`)}`;
