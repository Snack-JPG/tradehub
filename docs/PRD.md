# TradeHub — Product Requirements Document

## Overview

TradeHub is a local trades directory website that lists vetted tradespeople across the West Midlands. It's built to rank for local search terms, generate leads, and serve as the central hub for Austin's web design business.

---

## Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 14 (App Router) | SSG/ISR for SEO, React ecosystem |
| Styling | Tailwind CSS | Rapid development, consistent design |
| Rendering | Static Generation + ISR | Fast pages, great for SEO |
| Deployment | Vercel | Zero-config, edge network, free tier |
| Data | JSON files (initially) | Simple, version-controlled, easy migration to DB later |
| SEO | JSON-LD, sitemap, llms.txt | Full structured data coverage |

---

## Pages

### Homepage (`/`)
- Hero section: "Find Trusted Tradespeople Near You"
- Search bar: trade type + location
- Featured trades grid (3–6 cards)
- Trust messaging: "Vetted Professionals", "Local to You", "Free Quotes"
- Category quick links (icons + labels)
- CTA: "Are you a tradesperson? List your business"

### Category Pages (`/[trade]`)
- `/plumbers`, `/electricians`, `/roofers`, `/builders`, `/landscapers`, `/plasterers`, `/painters`, `/carpenters`, `/locksmiths`, `/handymen`
- H1: "Trusted [Trade] in the West Midlands"
- Filtered list of trades in that category
- Location sub-links: "Plumbers in Solihull", "Plumbers in Birmingham"
- SEO content block at bottom (200–300 words)

### Location Pages (`/trades/[location]`)
- `/trades/solihull`, `/trades/birmingham`, `/trades/redditch`, `/trades/bromsgrove`, `/trades/worcester`
- H1: "Trusted Tradespeople in [Location]"
- All trades serving that area
- Category sub-links

### Combined Pages (`/[trade]/[location]`) — **SEO Money Pages**
- `/plumbers/solihull`, `/electricians/birmingham`, `/roofers/redditch`
- H1: "Trusted [Trade] in [Location]"
- Filtered trades matching both category and location
- These target the exact keywords people search: "plumber solihull", "electrician birmingham"
- Unique SEO content per page

### Individual Profile Pages (`/trades/[slug]`)
- `/trades/jb-plumbing`, `/trades/spark-electrical`
- Trade name, photo/logo
- Description and services list
- Areas served
- Reviews with star ratings
- Phone number (click-to-call on mobile)
- Link to full website
- Contact form (future)
- JSON-LD: LocalBusiness schema

### Blog (`/blog`)
- Blog index with article cards
- Individual posts: `/blog/[slug]`
- Content marketing: "How to find a reliable plumber in Birmingham", "5 signs you need a new boiler", "What to look for in an electrician"
- Targets long-tail keywords, builds topical authority

### List Your Business (`/list-your-business`)
- CTA page for attracting new tradespeople
- Benefits of listing
- Pricing overview
- Contact form or "Call us" CTA
- Testimonials from existing clients (future)

### About (`/about`) — Future
- Who we are, why we built this
- Trust and credibility

---

## Data Model

### Trade (trades.json)

```typescript
interface Trade {
  name: string;              // "JB Plumbing"
  slug: string;              // "jb-plumbing"
  trade_type: string;        // "plumber"
  area: string;              // Primary area: "Solihull"
  phone: string;             // "07700 900123"
  email: string;             // "info@jbplumbing.co.uk"
  website_url: string;       // "https://jbplumbing.co.uk"
  description: string;       // 2-3 sentence overview
  services: string[];        // ["Boiler Installation", "Emergency Repairs", ...]
  areas_served: string[];    // ["Solihull", "Birmingham", "Shirley", ...]
  reviews: Review[];
  rating: number;            // 4.8
  review_count: number;      // 23
  featured: boolean;         // Premium listing
  image: string;             // "/images/trades/jb-plumbing.jpg"
  added_date: string;        // "2025-01-15"
}

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}
```

### Category (categories.json)

```typescript
interface Category {
  name: string;        // "Plumbers"
  slug: string;        // "plumbers"
  singular: string;    // "Plumber"
  description: string; // SEO description
  icon: string;        // Emoji or icon name
}
```

### Location (locations.json)

```typescript
interface Location {
  name: string;   // "Solihull"
  slug: string;   // "solihull"
  county: string; // "West Midlands"
}
```

---

## SEO Requirements

### JSON-LD Schema (every page)
- **Homepage:** `WebSite` + `ItemList` of featured trades
- **Category pages:** `ItemList` of trades
- **Profile pages:** `LocalBusiness` with full details, `AggregateRating`, `Review`
- **All pages:** `BreadcrumbList`

### llms.txt (root)
Machine-readable summary of the directory for AI crawlers (ChatGPT, Perplexity, Google AI Overviews).

### Technical SEO
- `sitemap.xml` — auto-generated from data files
- `robots.txt` — allow all, point to sitemap
- OpenGraph meta tags on every page
- Twitter Card meta tags
- Canonical URLs
- Semantic HTML: `<main>`, `<article>`, `<nav>`, `<header>`, `<footer>`, `<section>`
- Proper heading hierarchy (single H1 per page)

### On-Page SEO
- Title format: "[Trade] in [Location] | TradeHub" or "[Business Name] — [Trade] in [Area] | TradeHub"
- Meta descriptions: unique, keyword-rich, 150–160 chars
- Alt text on all images
- Internal linking between related pages

---

## Design System

### Colours
- **Navy:** `#1e293b` (header, dark sections)
- **White:** `#ffffff` (content background)
- **Green:** `#16a34a` (trust accents, CTAs, badges)
- **Light grey:** `#f8fafc` (alternate sections)
- **Amber:** `#f59e0b` (star ratings)

### Typography
- System font stack (fast loading): `Inter, system-ui, sans-serif`
- H1: 2.5rem bold
- H2: 1.875rem semibold
- Body: 1rem, line-height 1.75

### Components
- **TradeCard:** Photo, name, trade type, area, rating stars, short description, CTA button
- **SearchBar:** Two inputs (trade type dropdown + location) with search button
- **ReviewStars:** Filled/empty stars with numeric rating
- **TrustBadges:** "Vetted", "Insured", "Local" badges with icons

### Principles
- Mobile-first (>60% of searches are mobile)
- Fast (target <2s LCP)
- Accessible (WCAG 2.1 AA)
- Clean and trustworthy — this is about trust
