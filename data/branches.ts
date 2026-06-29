import type { Branch } from "@/types";

/**
 * Branch directory.
 *
 * `verified: true` entries were sourced from public listings (Foodpanda,
 * business directories) during research. Phone numbers / addresses should
 * still be re-confirmed with the official Mirchi 360 team before launch.
 * `verified: false` entries are PLACEHOLDERS.
 */
export const BRANCHES: Branch[] = [
  {
    id: "hyderabad-thandi-sarak",
    city: "Hyderabad",
    name: "Thandi Sarak",
    address: "Defence Plaza, Shop #7 & 9, Block B, Thandi Sarak, Hyderabad",
    phone: "+92 22 2782008",
    hours: "12:00 PM – 2:00 AM",
    mapQuery: "Mirchi 360 Thandi Sarak Hyderabad",
    verified: true,
  },
  {
    id: "hyderabad-qasimabad",
    city: "Hyderabad",
    name: "Qasimabad",
    address: "Block-I, Phase 1, Qasimabad, Hyderabad",
    phone: "+92 308 3336360",
    hours: "12:00 PM – 2:00 AM",
    mapQuery: "Mirchi 360 Qasimabad Hyderabad",
    verified: true,
  },
  {
    id: "hyderabad-cantt",
    city: "Hyderabad",
    name: "Cantonment",
    address: "Chandni Cinema Rd, Defence Housing Society, Cantonment, Hyderabad",
    // PLACEHOLDER — confirm branch line.
    phone: "+92 22 2782008",
    hours: "12:00 PM – 2:00 AM",
    mapQuery: "Mirchi 360 Cantonment Hyderabad",
    verified: true,
  },
  {
    id: "karachi-dha-stadium",
    city: "Karachi",
    name: "DHA — Stadium Commercial",
    address: "Stadium Lane 3, Phase V, Stadium Commercial Area, DHA, Karachi",
    phone: "+92 21 35248805",
    hours: "12:00 PM – 4:30 AM",
    mapQuery: "Mirchi 360 Stadium Commercial DHA Karachi",
    verified: true,
  },
  {
    id: "karachi-bahria",
    city: "Karachi",
    name: "Bahria Town",
    address: "Ground Floor, Plot #168, Midway Commercial A, Bahria Town, Karachi",
    phone: "+92 300 8252360",
    hours: "12:00 PM – 3:00 AM",
    mapQuery: "Mirchi 360 Bahria Town Karachi",
    verified: true,
  },
  {
    id: "islamabad-f10",
    city: "Islamabad",
    name: "F-10 Markaz",
    address: "Sumbal Rd, F-10 Markaz, F-10/3, Islamabad",
    phone: "+92 51 2101360",
    hours: "12:00 PM – 1:00 AM",
    mapQuery: "Mirchi 360 F-10 Markaz Islamabad",
    verified: true,
  },
  {
    id: "nawabshah",
    city: "Nawabshah",
    name: "Shaheed Benazirabad",
    address: "Qazi Ahmed — N Shah Road, Shaheed Benazirabad, Nawabshah",
    phone: "+92 244 363360",
    hours: "12:00 PM – 1:00 AM",
    mapQuery: "Mirchi 360 Shaheed Benazirabad Nawabshah",
    verified: true,
  },
  {
    id: "mirpurkhas",
    city: "Mirpurkhas",
    name: "Ratnabad Bypass",
    address: "Ratnabad Bypass, Mirpurkhas",
    phone: "+92 336 3300360",
    hours: "12:00 PM – 1:00 AM",
    mapQuery: "Mirchi 360 Ratnabad Bypass Mirpurkhas",
    verified: true,
  },
];
