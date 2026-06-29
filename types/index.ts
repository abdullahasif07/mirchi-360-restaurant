/**
 * Shared domain types for Mirchi 360°.
 *
 * These types are intentionally CMS-agnostic. When wiring a real backend
 * (Sanity / Strapi / Payload / Supabase / Firebase), map the CMS response
 * to these shapes so the UI never has to change.
 */

export type MenuCategoryId =
  | "bbq"
  | "karahi"
  | "handi"
  | "chinese"
  | "fast-food"
  | "burgers"
  | "sandwiches"
  | "rice"
  | "platters"
  | "deals"
  | "desserts"
  | "beverages";

export interface MenuCategory {
  id: MenuCategoryId;
  title: string;
  /** Short tagline shown under the category title. */
  description: string;
  /** Lucide icon name reference (resolved in the component). */
  icon: string;
}

export interface Dish {
  id: string;
  title: string;
  description: string;
  /** Image URL — swap for CMS/storage URL later. */
  image: string;
  category: MenuCategoryId;
  /** Price in PKR. `null` when the item is market/seasonal priced. */
  price: number | null;
  /** Optional flags for badges. */
  tags?: Array<"spicy" | "bestseller" | "new" | "chef" | "family">;
  /** Marks an item as featured on the homepage showcase. */
  featured?: boolean;
}

export interface Branch {
  id: string;
  city: string;
  name: string;
  address: string;
  /** Primary phone, in international format e.g. +92 21 1234567 */
  phone: string;
  /** WhatsApp number (defaults to phone if omitted). */
  whatsapp?: string;
  hours: string;
  /** Free-text used to build the Google Maps query. */
  mapQuery: string;
  /** Whether branch data was verified from public sources. */
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  /** Masonry span hint: tall items get more vertical room. */
  span?: "tall" | "wide" | "normal";
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar: string;
  /** Optional food photo accompanying the review. */
  photo?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
