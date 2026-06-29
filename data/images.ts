/**
 * Centralized image registry.
 *
 * IMPORTANT (per project spec): components NEVER hardcode image paths.
 * Every image lives here so it can be swapped for official Mirchi 360
 * photography or a CMS/storage URL (Sanity, Supabase, Firebase, etc.)
 * without touching any UI component.
 *
 * Current values are premium royalty-free placeholders (Unsplash) chosen
 * to resemble Pakistani BBQ & desi cuisine. Replace the IDs / URLs below
 * with real assets when available.
 */

const UNSPLASH = "https://images.unsplash.com/photo-";
const PARAMS = "?auto=format&fit=crop&q=80";

/** Build an optimized Unsplash URL from a photo id. */
export const img = (id: string, w = 1280) => `${UNSPLASH}${id}${PARAMS}&w=${w}`;

/**
 * Named image tokens grouped by usage. Keep keys descriptive so swapping
 * a single dish photo is trivial.
 */
export const IMG = {
  // --- Hero / ambience ---
  heroBbq: img("1555939594-58d7cb561ad1", 2000),
  smokeBg: img("1504674900247-0877df9cc836", 1800),

  // --- BBQ ---
  chickenTikka: img("1633237308525-cd587cf71926"),
  chickenBoti: img("1599487488170-d11ec9c172f0"),
  malaiBoti: img("1529692236671-f1f6cf9683ba"),
  reshmiKabab: img("1601050690597-df0568f70950"),
  seekhKabab: img("1544025162-d76694265947"),
  beefBihari: img("1603360946369-dc9bb6258143"),
  mixBbqPlatter: img("1555939594-58d7cb561ad1"),
  familyBbqPlatter: img("1565299624946-b28f40a0ae38"),

  // --- Karahi ---
  chickenKarahi: img("1610057099431-d73a1c9d2f2f"),
  whiteKarahi: img("1631515243349-e0cb75fb8d3a"),
  muttonKarahi: img("1551782450-a2132b4ba21d"),
  achariKarahi: img("1574484284002-952d92456975"),

  // --- Handi ---
  chickenHandi: img("1585032226651-759b368d7246"),
  cheeseHandi: img("1589302168068-964664d93dc0"),
  afghaniHandi: img("1626645738196-c2a7c87a8f58"),

  // --- Chinese ---
  chickenChowmein: img("1612927601601-6638404737ce"),
  chickenManchurian: img("1455619452474-d2be8b1e70cd"),

  // --- Fast food / burgers / sandwiches ---
  chickenBurger: img("1568901346375-23c9450c58cd"),
  zingerBurger: img("1571091718767-18b5b1457add"),
  clubSandwich: img("1567620905732-2d1ec7ab7445"),
  shawarma: img("1559314809-0d155014e29e"),
  loadedFries: img("1550547660-d9450f859349"),

  // --- Rice ---
  chickenBiryani: img("1563379091339-03b21ab4a4f8"),
  chickenFriedRice: img("1603894584373-5ac82b2ae398"),

  // --- Bread ---
  garlicNaan: img("1565958011703-44f9829ba187"),
  roghniNaan: img("1626777552726-4a6b54c97e46"),
  tandooriNaan: img("1601050690597-df0568f70950"),

  // --- Desserts ---
  kheer: img("1488477181946-6428a0291777"),
  falooda: img("1488477181946-6428a0291777"),
  iceCream: img("1563805042-7684c019e1cb"),

  // --- Beverages ---
  mintMargarita: img("1546069901-ba9599a7e63c"),
  freshLime: img("1513104890138-7c749659a591"),
  softDrinks: img("1554866585-cd94860890b7"),

  // --- Deals / platters ---
  dealCombo: img("1607013251379-e6eecfffe234"),

  // --- Restaurant ambience ---
  interior: img("1517248135467-4c7edcad34c4", 1400),
  exterior: img("1414235077428-338989a2e8c0", 1400),
  familySeating: img("1466978913421-dad2ebd01d17", 1400),
  liveBbqStation: img("1599487488170-d11ec9c172f0", 1400),
  chefCooking: img("1577219491135-ce391730fb2c", 1400),
  diningHall: img("1559339352-11d035aa65de", 1400),
  nightView: img("1578474846511-04ba529f0b88", 1400),
  kitchen: img("1581349485608-9469926a8e5e", 1400),
  fire: img("1504674900247-0877df9cc836", 1200),
  freshNaan: img("1565958011703-44f9829ba187", 1200),
  closeupFood: img("1633237308525-cd587cf71926", 1200),

  // --- About section ---
  aboutMain: img("1504674900247-0877df9cc836", 1400),
  aboutSecondary: img("1565299624946-b28f40a0ae38", 900),

  // --- Reviewer avatars ---
  avatar1: img("1500648767791-00dcc994a43e", 200),
  avatar2: img("1494790108377-be9c29b29330", 200),
  avatar3: img("1535713875002-d1d0cf377fde", 200),
  avatar4: img("1438761681033-6461ffad8d80", 200),
  avatar5: img("1507003211169-0a1dd7228f2d", 200),
} as const;
