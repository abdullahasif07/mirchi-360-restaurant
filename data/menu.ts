import type { Dish, MenuCategory } from "@/types";
import { IMG } from "./images";

/**
 * Menu categories. Order here drives the on-page tab/accordion order.
 */
export const MENU_CATEGORIES: MenuCategory[] = [
  { id: "bbq", title: "Charcoal BBQ", description: "Flame-grilled signatures", icon: "Flame" },
  { id: "karahi", title: "Karahi", description: "Wok-tossed, bone-in classics", icon: "CookingPot" },
  { id: "handi", title: "Handi", description: "Slow-cooked in clay", icon: "Soup" },
  { id: "chinese", title: "Chinese", description: "Desi-Chinese favourites", icon: "Utensils" },
  { id: "fast-food", title: "Fast Food", description: "Quick & loaded bites", icon: "Sandwich" },
  { id: "burgers", title: "Burgers", description: "Stacked & juicy", icon: "Beef" },
  { id: "sandwiches", title: "Sandwiches", description: "Toasted & filled", icon: "Sandwich" },
  { id: "rice", title: "Rice", description: "Biryani & fried rice", icon: "Wheat" },
  { id: "platters", title: "Platters", description: "Made for sharing", icon: "Users" },
  { id: "deals", title: "Deals", description: "Value combos", icon: "Tags" },
  { id: "desserts", title: "Desserts", description: "Sweet endings", icon: "IceCream" },
  { id: "beverages", title: "Beverages", description: "Coolers & shakes", icon: "CupSoda" },
];

/**
 * Full dish catalogue.
 *
 * Prices marked // VERIFIED were sourced from public Mirchi 360 listings.
 * All other prices are reasonable PLACEHOLDERS — confirm before launch.
 */
export const DISHES: Dish[] = [
  // ---------------- BBQ ----------------
  {
    id: "chicken-tikka",
    title: "Chicken Tikka",
    description: "Charcoal-grilled chicken marinated in roasted spices, smoked over open flame.",
    image: IMG.chickenTikka,
    category: "bbq",
    price: 420,
    tags: ["bestseller", "spicy"],
    featured: true,
  },
  {
    id: "chicken-boti",
    title: "Chicken Boti",
    description: "Tender boneless cubes flame-kissed with a smoky tandoori glaze.",
    image: IMG.chickenBoti,
    category: "bbq",
    price: 480,
    tags: ["bestseller"],
    featured: true,
  },
  {
    id: "malai-boti",
    title: "Malai Boti",
    description: "Creamy, mildly spiced chicken in a rich cheese & cream marinade.",
    image: IMG.malaiBoti,
    category: "bbq",
    price: 520,
    tags: ["chef"],
    featured: true,
  },
  {
    id: "reshmi-kabab",
    title: "Reshmi Kabab",
    description: "Silky minced chicken kababs, soft as silk, grilled to perfection.",
    image: IMG.reshmiKabab,
    category: "bbq",
    price: 460,
    featured: true,
  },
  {
    id: "seekh-kabab",
    title: "Seekh Kabab",
    description: "Hand-pressed spiced mince skewers, charred on the seekh.",
    image: IMG.seekhKabab,
    category: "bbq",
    price: 440,
    tags: ["spicy"],
    featured: true,
  },
  {
    id: "beef-bihari",
    title: "Beef Bihari",
    description: "Thin beef strips in a fiery Bihari marinade, melt-in-the-mouth tender.",
    image: IMG.beefBihari,
    category: "bbq",
    price: 560,
    tags: ["spicy", "chef"],
    featured: true,
  },

  // ---------------- Karahi ----------------
  {
    id: "chicken-karahi",
    title: "Chicken Karahi",
    description: "Bone-in chicken simmered with tomatoes, ginger & freshly ground spice.",
    image: IMG.chickenKarahi,
    category: "karahi",
    price: 1450,
    tags: ["bestseller", "family"],
    featured: true,
  },
  {
    id: "white-karahi",
    title: "White Karahi",
    description: "A creamy, peppery karahi finished with yoghurt and green chillies.",
    image: IMG.whiteKarahi,
    category: "karahi",
    price: 1650,
    tags: ["chef"],
    featured: true,
  },
  {
    id: "mutton-karahi",
    title: "Mutton Karahi",
    description: "Slow-cooked mutton in a robust tomato & spice gravy.",
    image: IMG.muttonKarahi,
    category: "karahi",
    price: 2200,
    tags: ["family"],
    featured: true,
  },
  {
    id: "achari-karahi",
    title: "Achari Karahi",
    description: "Tangy pickle-spiced karahi with a bold, zesty kick.",
    image: IMG.achariKarahi,
    category: "karahi",
    price: 1550,
    tags: ["spicy"],
  },

  // ---------------- Handi ----------------
  {
    id: "chicken-handi",
    title: "Chicken Handi",
    description: "Creamy chicken slow-cooked in a traditional clay handi.",
    image: IMG.chickenHandi,
    category: "handi",
    price: 1350,
    tags: ["bestseller"],
    featured: true,
  },
  {
    id: "cheese-handi",
    title: "Cheese Handi",
    description: "Indulgent chicken handi loaded with molten cheese.",
    image: IMG.cheeseHandi,
    category: "handi",
    price: 1550,
    tags: ["new"],
  },
  {
    id: "afghani-handi",
    title: "Afghani Handi",
    description: "Mild, creamy Afghani-style handi with cashew & cream.",
    image: IMG.afghaniHandi,
    category: "handi",
    price: 1500,
    tags: ["chef"],
  },

  // ---------------- Chinese ----------------
  {
    id: "chicken-chowmein",
    title: "Chicken Chowmein",
    description: "Stir-fried noodles tossed with chicken & crunchy vegetables.",
    image: IMG.chickenChowmein,
    category: "chinese",
    price: 650,
  },
  {
    id: "chicken-manchurian",
    title: "Chicken Manchurian",
    description: "Crispy chicken in a sweet-and-spicy Manchurian sauce.",
    image: IMG.chickenManchurian,
    category: "chinese",
    price: 720,
    tags: ["spicy"],
  },

  // ---------------- Fast Food ----------------
  {
    id: "shawarma",
    title: "Chicken Shawarma",
    description: "Spiced shaved chicken wrapped with garlic sauce & pickles.",
    image: IMG.shawarma,
    category: "fast-food",
    price: 320,
    tags: ["bestseller"],
  },
  {
    id: "loaded-fries",
    title: "Loaded Fries",
    description: "Crispy fries smothered in cheese, sauces & grilled chicken.",
    image: IMG.loadedFries,
    category: "fast-food",
    price: 450,
    tags: ["new"],
  },

  // ---------------- Burgers ----------------
  {
    id: "chicken-burger",
    title: "Chicken Burger",
    description: "Grilled chicken patty, fresh veg & house sauce in a soft bun.",
    image: IMG.chickenBurger,
    category: "burgers",
    price: 380,
    featured: true,
  },
  {
    id: "zinger-burger",
    title: "Zinger Burger",
    description: "Crispy fried chicken fillet with lettuce & creamy mayo.",
    image: IMG.zingerBurger,
    category: "burgers",
    price: 464, // VERIFIED (Hyderabad listing)
    tags: ["bestseller"],
    featured: true,
  },
  {
    id: "chicken-supreme-burger",
    title: "Chicken Supreme Burger",
    description: "Double-stacked supreme fillet with cheese & signature sauce.",
    image: IMG.chickenBurger,
    category: "burgers",
    price: 702, // VERIFIED (Hyderabad listing)
    tags: ["chef"],
  },

  // ---------------- Sandwiches ----------------
  {
    id: "club-sandwich",
    title: "Club Sandwich",
    description: "Triple-decker toasted club with chicken, egg & fresh veg.",
    image: IMG.clubSandwich,
    category: "sandwiches",
    price: 410, // VERIFIED (Hyderabad listing)
    featured: true,
  },
  {
    id: "bbq-club-sandwich",
    title: "BBQ Spicy Club Sandwich",
    description: "Smoky BBQ chicken club with a spicy mayo finish.",
    image: IMG.clubSandwich,
    category: "sandwiches",
    price: 464, // VERIFIED (Hyderabad listing)
    tags: ["spicy"],
  },

  // ---------------- Rice ----------------
  {
    id: "chicken-biryani",
    title: "Chicken Biryani",
    description: "Hyderabadi-style biryani layered with fragrant basmati & spice.",
    image: IMG.chickenBiryani,
    category: "rice",
    price: 380,
    tags: ["bestseller", "spicy"],
    featured: true,
  },
  {
    id: "chicken-fried-rice",
    title: "Chicken Fried Rice",
    description: "Wok-fried rice with chicken, egg & crisp vegetables.",
    image: IMG.chickenFriedRice,
    category: "rice",
    price: 520,
    featured: true,
  },

  // ---------------- Platters ----------------
  {
    id: "mix-bbq-platter",
    title: "Mix BBQ Platter",
    description: "A grand assortment of tikka, boti, kababs & naan for two.",
    image: IMG.mixBbqPlatter,
    category: "platters",
    price: 1850,
    tags: ["chef", "family"],
    featured: true,
  },
  {
    id: "family-bbq-platter",
    title: "Family BBQ Platter",
    description: "Our biggest grilled feast — perfect for the whole family.",
    image: IMG.familyBbqPlatter,
    category: "platters",
    price: 3200,
    tags: ["family", "bestseller"],
    featured: true,
  },

  // ---------------- Deals ----------------
  {
    id: "deal-for-two",
    title: "Deal for Two",
    description: "BBQ, karahi, naan & drinks bundled at a value price.",
    image: IMG.dealCombo,
    category: "deals",
    price: 1999,
    tags: ["family"],
  },

  // ---------------- Bread (grouped under fast-food display) ----------------
  {
    id: "garlic-naan",
    title: "Garlic Naan",
    description: "Tandoor-baked naan brushed with garlic butter.",
    image: IMG.garlicNaan,
    category: "fast-food",
    price: 120,
    featured: true,
  },
  {
    id: "roghni-naan",
    title: "Roghni Naan",
    description: "Soft, sesame-topped roghni naan straight from the tandoor.",
    image: IMG.roghniNaan,
    category: "fast-food",
    price: 110,
    featured: true,
  },

  // ---------------- Desserts ----------------
  {
    id: "kheer",
    title: "Kheer",
    description: "Slow-cooked rice pudding with cardamom & pistachio.",
    image: IMG.kheer,
    category: "desserts",
    price: 220,
    featured: true,
  },
  {
    id: "falooda",
    title: "Falooda",
    description: "Classic rose falooda with vermicelli, basil seeds & ice cream.",
    image: IMG.falooda,
    category: "desserts",
    price: 320,
    tags: ["bestseller"],
    featured: true,
  },
  {
    id: "ice-cream",
    title: "Kulfa Ice Cream",
    description: "Rich, creamy desi kulfa topped with falooda.",
    image: IMG.iceCream,
    category: "desserts",
    price: 250,
  },

  // ---------------- Beverages ----------------
  {
    id: "mint-margarita",
    title: "Mint Margarita",
    description: "Refreshing mint & lime cooler — a Mirchi 360 favourite.",
    image: IMG.mintMargarita,
    category: "beverages",
    price: 280,
    tags: ["bestseller"],
    featured: true,
  },
  {
    id: "fresh-lime",
    title: "Fresh Lime",
    description: "Zesty fresh lime soda, sweet or salted.",
    image: IMG.freshLime,
    category: "beverages",
    price: 180,
  },
  {
    id: "soft-drinks",
    title: "Soft Drinks",
    description: "Chilled bottled & canned soft drinks.",
    image: IMG.softDrinks,
    category: "beverages",
    price: 90,
  },
];

/** Helper: dishes for a given category. */
export const dishesByCategory = (id: string) =>
  DISHES.filter((d) => d.category === id);

/** Helper: featured dishes for the homepage showcase. */
export const FEATURED_DISHES = DISHES.filter((d) => d.featured);

/** The single hero dish for the Chef's Recommendation section. */
export const CHEF_PICK =
  DISHES.find((d) => d.id === "family-bbq-platter") ?? DISHES[0];
