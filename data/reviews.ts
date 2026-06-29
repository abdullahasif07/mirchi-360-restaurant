import type { Review } from "@/types";
import { IMG } from "./images";

/**
 * Customer reviews.
 *
 * PLACEHOLDER content written in the spirit of common Mirchi 360 feedback
 * (authentic Hyderabadi taste, generous BBQ portions, family ambience).
 * Replace with real, attributed Google/Facebook reviews before launch.
 */
export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Ahmed Raza",
    location: "Karachi",
    rating: 5,
    quote:
      "The mix BBQ platter was incredible — smoky, juicy and perfectly spiced. Easily the best charcoal BBQ in the area.",
    avatar: IMG.avatar1,
    photo: IMG.mixBbqPlatter,
  },
  {
    id: "r2",
    name: "Fatima Khan",
    location: "Hyderabad",
    rating: 5,
    quote:
      "That authentic Hyderabadi handi biryani flavour is unmatched. Felt like a proper family feast.",
    avatar: IMG.avatar2,
    photo: IMG.chickenBiryani,
  },
  {
    id: "r3",
    name: "Bilal Ahmed",
    location: "Islamabad",
    rating: 5,
    quote:
      "Malai boti melts in your mouth and the mint margarita is so refreshing. Service was warm and quick.",
    avatar: IMG.avatar3,
    photo: IMG.malaiBoti,
  },
  {
    id: "r4",
    name: "Sana Malik",
    location: "Karachi",
    rating: 5,
    quote:
      "Great spot for family dinners. Clean, cosy ambience and the chicken karahi was rich and full of flavour.",
    avatar: IMG.avatar4,
    photo: IMG.chickenKarahi,
  },
  {
    id: "r5",
    name: "Usman Tariq",
    location: "Nawabshah",
    rating: 5,
    quote:
      "Late-night cravings sorted! Ordered takeaway, food arrived hot and the seekh kababs were spot on.",
    avatar: IMG.avatar5,
    photo: IMG.seekhKabab,
  },
];
