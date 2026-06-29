import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow these hosts to access Next.js dev resources (HMR, etc.) so the
  // dev server can be reached via localhost / loopback / LAN IP without the
  // "Blocked cross-origin request" warning.
  allowedDevOrigins: ["localhost", "127.0.0.1", "0.0.0.0"],
  images: {
    formats: ["image/avif", "image/webp"],
    // Remote image providers used for premium placeholder photography.
    // Replace these with the real Mirchi 360 CMS / asset domain later
    // (e.g. Sanity `cdn.sanity.io`, Supabase storage, Firebase, etc.).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
