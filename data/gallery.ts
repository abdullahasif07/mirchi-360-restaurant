import type { GalleryItem } from "@/types";
import { IMG } from "./images";

/**
 * Gallery items for the masonry layout.
 * `span` controls masonry sizing. Swap `src` for real Mirchi 360 photos.
 */
export const GALLERY: GalleryItem[] = [
  { id: "g-bbq", src: IMG.closeupFood, alt: "Charcoal BBQ platter close-up", category: "BBQ", span: "tall" },
  { id: "g-karahi", src: IMG.chickenKarahi, alt: "Sizzling chicken karahi", category: "Karahi", span: "normal" },
  { id: "g-handi", src: IMG.chickenHandi, alt: "Clay handi being served", category: "Handi", span: "normal" },
  { id: "g-interior", src: IMG.interior, alt: "Warm restaurant interior", category: "Interior", span: "wide" },
  { id: "g-exterior", src: IMG.exterior, alt: "Restaurant exterior at dusk", category: "Exterior", span: "normal" },
  { id: "g-chef", src: IMG.chefCooking, alt: "Chef grilling over charcoal", category: "Chef", span: "tall" },
  { id: "g-family", src: IMG.familySeating, alt: "Family dining together", category: "Dining", span: "normal" },
  { id: "g-naan", src: IMG.freshNaan, alt: "Fresh naan from the tandoor", category: "Bread", span: "normal" },
  { id: "g-fire", src: IMG.fire, alt: "Flames over the grill", category: "Fire", span: "tall" },
  { id: "g-smoke", src: IMG.smokeBg, alt: "Smoke rising from the BBQ", category: "Smoke", span: "normal" },
  { id: "g-kitchen", src: IMG.kitchen, alt: "Live kitchen in action", category: "Kitchen", span: "wide" },
  { id: "g-night", src: IMG.nightView, alt: "Restaurant night view", category: "Ambience", span: "normal" },
];
