import type { NavLink } from "@/types";

/**
 * Central site configuration.
 *
 * NOTE ON DATA ACCURACY:
 * Items marked `// VERIFIED` were sourced from public listings
 * (Foodpanda, business directories) during research.
 * Items marked `// PLACEHOLDER` could not be confirmed and should be
 * replaced with official Mirchi 360 information before launch.
 */
export const SITE = {
  name: "Mirchi 360°",
  legalName: "Mirchi 360 Degrees",
  tagline: "Where Every Bite Sparks Flavor",
  description:
    "Mirchi 360° is a premium Pakistani BBQ & fast-food chain famed for authentic Hyderabadi flavours, fresh charcoal BBQ, signature handi biryani and family dining across Pakistan.",
  // PLACEHOLDER — set the real production domain before launch.
  url: "https://www.mirchi360.com",
  // PLACEHOLDER — replace with official central UAN / hotline.
  primaryPhone: "+92 51 2101360", // VERIFIED (Islamabad F-10 branch line)
  // PLACEHOLDER — replace with official WhatsApp ordering number.
  whatsapp: "+92 300 8252360", // VERIFIED (Bahria Town Karachi line)
  // PLACEHOLDER — replace with official email.
  email: "info@mirchi360.com",
  hours: "12:00 PM – 3:00 AM, Daily",
  // VERIFIED: national chain with ~11 branches, "Authentic Hyderabadi Taste".
  branchesCount: 11,
  yearsServing: 15, // PLACEHOLDER — confirm establishment year.
  social: {
    // PLACEHOLDER — replace with official handles/URLs.
    facebook: "https://www.facebook.com/Mirchi360",
    instagram: "https://www.instagram.com/mirchi360",
    foodpanda: "https://www.foodpanda.pk/restaurant/wyuf/mirchi-360-bahria-town", // VERIFIED listing
    youtube: "https://www.youtube.com/@mirchi360",
  },
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Branches", href: "#branches" },
  { label: "Contact", href: "#contact" },
];
