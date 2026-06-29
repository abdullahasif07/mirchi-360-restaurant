# Mirchi 360° — Premium Pakistani BBQ & Fast Food

A world-class, cinematic restaurant website for **Mirchi 360°**, a Pakistani
BBQ & fast-food chain. Built to feel like a luxury steakhouse site — warm,
smoky, immersive and appetising — while making it effortless for guests to
**call, WhatsApp and order**.

> This is a marketing / brand experience site (not e-commerce). Ordering is
> driven through click-to-call and WhatsApp.

## Tech Stack

- **Next.js 16** (App Router, React Server Components, Turbopack)
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **Framer Motion** — reveals, parallax, carousels, magnetic buttons
- **GSAP** — available for advanced timelines
- **Lenis** — smooth scrolling
- **lucide-react** — icons (social brand glyphs are custom SVGs)
- **next/image**, **next/font** (Playfair Display + Inter)
- **ESLint**

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Project Structure

```
app/                  App Router: layout, page, robots, sitemap, manifest, globals
components/
  brand/              Logo + custom social SVG icons
  effects/            LoadingScreen, SmoothScroll, CursorGlow, ScrollProgress,
                      EmberParticles, SmokeOverlay
  layout/             Navbar, Footer, MobileContactBar, FloatingOrderCta
  sections/           Hero, About, FeaturedDishes, Menu, ChefsRecommendation,
                      Gallery, Branches, Reviews, Contact
  seo/                RestaurantJsonLd (schema.org structured data)
  shared/             Reveal, Magnetic, TiltCard, AnimatedCounter,
                      SectionHeading, DishCard
  ui/                 Button (cva variants), Badge
constants/            site.ts (brand, contact, nav)
data/                 images.ts, menu.ts, branches.ts, gallery.ts, reviews.ts,
                      about.ts  ← all content lives here
hooks/                use-media-query, use-mounted
lib/                  utils.ts (cn, tel/whatsapp/maps href, price format)
types/                Domain types (CMS-agnostic)
```

## Content & Image System

**No component hardcodes content or image paths.** Everything is driven from
the `data/` layer:

- `data/images.ts` — a single registry of every image (`IMG.*`). Swap a URL
  here to change a photo everywhere it's used.
- `data/menu.ts` — categories + dishes (`id, title, description, image,
  category, price, tags, featured`).
- `data/branches.ts`, `data/gallery.ts`, `data/reviews.ts`, `data/about.ts`.

To replace placeholder photography with official Mirchi 360 assets, just
update the URLs/IDs in `data/images.ts` — **no UI changes required**.

### Future CMS support

Types in `types/index.ts` are intentionally backend-agnostic. To connect
Sanity / Strapi / Payload / Supabase / Firebase, fetch in a Server Component
and map the response to these types — the UI stays untouched. Remote image
hosts are configured in `next.config.ts` (`images.remotePatterns`).

## Data Accuracy

Branch addresses, phone numbers and verified menu prices were sourced from
public listings (Foodpanda, business directories) and are marked `// VERIFIED`
in the code. Unconfirmed values (central hotline, email, logo, social handles,
some prices) are marked `// PLACEHOLDER` and should be replaced with official
information before launch. No false information is invented.

## Features

Loading screen · transparent→solid sticky navbar with scroll-spy · cinematic
hero with mouse + scroll parallax · animated counters · expandable menu ·
Chef's Recommendation with animated glowing border · masonry gallery · branch
finder with call/WhatsApp/maps · reviews carousel · floating ember particles ·
smoke overlays · cursor glow · scroll progress · magnetic buttons · mobile
sticky call/WhatsApp bar.

## Accessibility & SEO

- Semantic HTML, ARIA labels, keyboard focus states, skip-to-content link
- `prefers-reduced-motion` respected globally (animations + Lenis disabled)
- Metadata, Open Graph, Twitter cards, `robots.txt`, `sitemap.xml`, web manifest
- JSON-LD `Restaurant` schema with per-branch nodes

## To-do before launch

- Replace placeholder photography with official Mirchi 360 images (`data/images.ts`)
- Add a real `public/og.jpg` (1200×630) and favicon set
- Confirm phone numbers, hours, email, social links in `constants/site.ts`
- Swap the typographic logo for the official brand logo (`components/brand/logo.tsx`)
- Verify all menu prices per branch
```
