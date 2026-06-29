import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE } from "@/constants/site";
import { SmoothScroll } from "@/components/effects/smooth-scroll";
import { CursorGlow } from "@/components/effects/cursor-glow";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { LoadingScreen } from "@/components/effects/loading-screen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Premium Pakistani BBQ & Fast Food`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Mirchi 360",
    "Pakistani BBQ",
    "Hyderabadi food",
    "charcoal BBQ",
    "handi biryani",
    "karahi",
    "fast food Pakistan",
    "restaurant Karachi",
    "restaurant Hyderabad",
    "restaurant Islamabad",
  ],
  authors: [{ name: SITE.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Where Every Bite Sparks Flavor`,
    description: SITE.description,
    // PLACEHOLDER — add a real 1200x630 OG image at /public/og.jpg.
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Mirchi 360 — Premium Pakistani BBQ & Fast Food",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Where Every Bite Sparks Flavor`,
    description: SITE.description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "restaurant",
};

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-ink antialiased">
        {/* Skip link for keyboard / screen-reader users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-secondary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>

        <LoadingScreen />
        <ScrollProgress />
        <CursorGlow />

        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
