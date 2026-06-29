import { SITE } from "@/constants/site";
import { BRANCHES } from "@/data/branches";

/**
 * JSON-LD structured data (schema.org/Restaurant) for rich results.
 * Each branch is emitted as its own Restaurant node within an ItemList.
 */
export function RestaurantJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": `${SITE.url}/#restaurant`,
        name: SITE.legalName,
        alternateName: SITE.name,
        description: SITE.description,
        url: SITE.url,
        telephone: SITE.primaryPhone,
        servesCuisine: ["Pakistani", "BBQ", "Hyderabadi", "Fast Food"],
        priceRange: "$$",
        image: `${SITE.url}/og.jpg`,
        sameAs: [
          SITE.social.facebook,
          SITE.social.instagram,
          SITE.social.youtube,
        ],
        department: BRANCHES.map((b) => ({
          "@type": "Restaurant",
          name: `${SITE.name} — ${b.city} (${b.name})`,
          telephone: b.phone,
          servesCuisine: ["Pakistani", "BBQ", "Fast Food"],
          address: {
            "@type": "PostalAddress",
            streetAddress: b.address,
            addressLocality: b.city,
            addressCountry: "PK",
          },
          openingHours: "Mo-Su 12:00-03:00",
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
