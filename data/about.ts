/**
 * About / value-proposition content. Icons map to lucide-react names,
 * resolved inside the component.
 */
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const ABOUT_FEATURES: Feature[] = [
  {
    icon: "Flame",
    title: "Fresh Charcoal BBQ",
    description: "Every skewer grilled to order over real charcoal for that signature smoke.",
  },
  {
    icon: "ChefHat",
    title: "Authentic Recipes",
    description: "Time-honoured Hyderabadi spice blends and slow-cooked handi traditions.",
  },
  {
    icon: "Leaf",
    title: "Premium Ingredients",
    description: "Hand-picked cuts, fresh produce and freshly ground masalas, every day.",
  },
  {
    icon: "Users",
    title: "Family Dining",
    description: "Warm, spacious seating built for gatherings big and small.",
  },
  {
    icon: "Moon",
    title: "Late-Night Service",
    description: "Open till the early hours for those midnight BBQ cravings.",
  },
  {
    icon: "Bike",
    title: "Takeaway & Delivery",
    description: "Call, WhatsApp or order online for hot food at your doorstep.",
  },
];

/** Animated counter stats for the About section. */
export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 11, suffix: "+", label: "Branches nationwide" },
  { value: 50, suffix: "+", label: "Signature dishes" },
  { value: 1, suffix: "M+", label: "Meals served" },
  { value: 15, suffix: "yrs", label: "Of desi flavour" },
];
