import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class names safely (clsx + tailwind-merge). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Build a tel: href from a display phone number. */
export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** Build a wa.me click-to-chat link. */
export function whatsappHref(phone: string, message?: string) {
  const num = phone.replace(/[^\d]/g, "");
  const q = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${num}${q}`;
}

/** Build a Google Maps search/directions link. */
export function mapsHref(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query,
  )}`;
}

/** Format a price in PKR. */
export function formatPrice(value: number) {
  return `Rs ${value.toLocaleString("en-PK")}`;
}
