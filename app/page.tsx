import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileContactBar } from "@/components/layout/mobile-contact-bar";
import { FloatingOrderCta } from "@/components/layout/floating-order-cta";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedDishes } from "@/components/sections/featured-dishes";
import { Menu } from "@/components/sections/menu";
import { RestaurantJsonLd } from "@/components/seo/restaurant-jsonld";

/**
 * Below-the-fold sections are code-split via next/dynamic. SSR is kept on
 * (default) so content stays crawlable for SEO while shipping smaller
 * initial JS for faster first load.
 */
const ChefsRecommendation = dynamic(() =>
  import("@/components/sections/chefs-recommendation").then(
    (m) => m.ChefsRecommendation,
  ),
);
const Gallery = dynamic(() =>
  import("@/components/sections/gallery").then((m) => m.Gallery),
);
const Branches = dynamic(() =>
  import("@/components/sections/branches").then((m) => m.Branches),
);
const Reviews = dynamic(() =>
  import("@/components/sections/reviews").then((m) => m.Reviews),
);
const Contact = dynamic(() =>
  import("@/components/sections/contact").then((m) => m.Contact),
);

export default function Home() {
  return (
    <>
      <RestaurantJsonLd />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <FeaturedDishes />
        <Menu />
        <ChefsRecommendation />
        <Gallery />
        <Branches />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <MobileContactBar />
      <FloatingOrderCta />
    </>
  );
}
