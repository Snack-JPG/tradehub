# TradeHub — Claude Code Build Prompt

## What This Is

TradeHub is a local trades directory for the West Midlands (Birmingham, Solihull, Redditch, Bromsgrove, Warwickshire). It's a Next.js 14 site using Tailwind CSS, statically generated from JSON data files. The directory is live at the project level but not yet deployed.

**Domain:** `tradehub.directory`
**Business model:** Free directory listings → upsell tradespeople on websites (£29-79/month) and featured listings (£10-20/month).

## Project Location

`/Users/austin/Desktop/TradeHub/site/`

## What's Already Built

### Pages (all working, build passes clean)
- **Homepage** (`app/page.tsx`) — Hero with search bar (two dropdowns: trade + location), trust badges, featured trades grid, browse by trade, browse by location
- **Category pages** (`app/[trade]/page.tsx`) — e.g. `/plumbers` — lists all trades in that category with cards, links to location sub-pages
- **Category + Location pages** (`app/[trade]/[location]/page.tsx`) — e.g. `/plumbers/solihull` — filtered results. 208 combo pages generated
- **Individual profiles** (`app/trades/[slug]/page.tsx`) — Full trade profile with description, services, areas served, reviews, contact details, schema markup
- **List Your Business** (`app/list-your-business/page.tsx`) — Pricing page with 3 tiers. **Note: pricing needs updating** (see below)
- **Blog** (`app/blog/page.tsx`) — Lists 3 placeholder posts but **no actual blog post pages exist yet** (no `app/blog/[slug]/page.tsx`)

### Components
- `Header.tsx` — Sticky nav, logo, trade links, "List Your Business" CTA button
- `Footer.tsx` — 4-column footer with trade links, area links, for tradespeople links
- `SearchBar.tsx` — Client component, two dropdowns (trade + location), navigates to `/[trade]/[location]`
- `TradeCard.tsx` — Card with name, trade type, area, stars, description snippet, top 3 service tags
- `ReviewStars.tsx` — Star rating display
- `TrustBadges.tsx` — Trust signals section

### Data (all JSON in `data/`)
- `trades.json` — **41 listings** across 13 trade types, all enriched with detailed services, accreditations, reviews, contact info
- `categories.json` — 13 categories (plumbers, electricians, roofers, builders, landscapers, plasterers, painters, carpenters, locksmiths, handymen, gas-engineers, tilers, fencing)
- `locations.json` — 16 locations (Solihull, Birmingham, Redditch, Bromsgrove, Sutton Coldfield, Knowle, Shirley, Moseley, Kings Heath, Hall Green, Astwood Bank, Studley, Alcester, Wythall, Hampton in Arden, Dorridge)

### SEO (`lib/seo.ts`)
- `generateMetadata()` for all pages (title, description, OpenGraph, Twitter, canonical)
- `localBusinessSchema()` — JSON-LD LocalBusiness for each trade profile
- `breadcrumbSchema()` — BreadcrumbList for navigation
- `itemListSchema()` — ItemList for category/location pages
- `public/llms.txt` — AI discoverability file
- `public/robots.txt` — Allow all + sitemap reference

### Design
- Tailwind CSS with custom colours: `navy: #1e293b`, `trust: #16a34a`
- Clean, professional look. Cards with hover effects. Responsive grid layouts.
- No images/logos yet — text-based branding ("Trade**Hub**" with green accent)

## What Needs Building Next (Priority Order)

### 1. Blog Post Pages (HIGH)
The blog index (`app/blog/page.tsx`) lists 3 posts but there's no `app/blog/[slug]/page.tsx` route. Need:
- Dynamic blog post page component
- Actual content for the 3 existing posts (or at least 1-2 real ones):
  - "How to Find a Reliable Plumber in Birmingham"
  - "5 Signs You Need a New Boiler"
  - "What to Expect When Hiring an Electrician"
- SEO metadata + schema markup (Article schema) for each post
- Internal links to relevant category/location pages
- Breadcrumbs

### 2. Sitemap Generation (HIGH)
`robots.txt` references `/sitemap.xml` but it doesn't exist. Need:
- Auto-generated sitemap covering all static pages (home, categories, category+location combos, individual profiles, blog posts, list-your-business)
- Can use `next-sitemap` package or Next.js built-in `app/sitemap.ts`

### 3. Pricing Page Update (MEDIUM)
The `/list-your-business` page currently shows:
- Directory Listing: £10-20/month
- Professional Website: £400-500 one-off
- Premium Package: £750-1,000 one-off

**Update to this pricing model instead:**
- **Free Listing:** £0 — Basic profile on TradeHub (this is how we get them in the door)
- **Featured Listing:** £29/month — Priority placement, featured badge, enhanced profile
- **Professional Website:** £49/month — Everything above + full website built for them, mobile-responsive, SEO, contact form
- **Premium Package:** £79/month — Everything above + Google Business Profile management, monthly content updates, AI search optimisation

All monthly, no upfront cost. The CTA buttons should link to a contact method (phone/WhatsApp) for now — no payment integration needed yet.

Also update the phone number in the CTA section (currently `07000000000` placeholder).

### 4. Mobile Navigation (MEDIUM)
The header nav is `hidden md:flex` — no mobile hamburger menu. Need a mobile menu component (hamburger icon, slide-out or dropdown with all nav links).

### 5. Contact Form on List Your Business (MEDIUM)
The CTA buttons don't do anything. Add a simple contact/enquiry form at the bottom of the page:
- Business name
- Contact name
- Phone number
- Trade type (dropdown)
- Message (optional)

For now, just have it POST to a Vercel serverless function that sends an email notification, OR use a simple service like Formspree/Web3Forms. Keep it simple.

### 6. Emergency Landing Pages (LOWER)
Create routes for emergency trades:
- `app/emergency/[trade]/[location]/page.tsx`
- Focus on: plumber, locksmith, electrician
- These should be high-urgency pages: big phone number, "Available 24/7", filtered to show only emergency-flagged trades
- Strong SEO targeting "emergency [trade] [location]" keywords

### 7. Favicon & Open Graph Image (LOWER)
- Generate a simple favicon (green "TH" on dark background, or similar)
- Create a default OG image for social sharing (1200x630)
- Add to `app/layout.tsx`

### 8. 404 Page (LOWER)
The default Next.js 404 is fine for now but a branded one with search and popular links would be better.

## Technical Notes

- **Static site** — everything is pre-rendered at build time from JSON. No database, no API.
- **TypeScript** throughout
- **No state management** needed — data comes from JSON imports
- The `SearchBar` is the only client component (`"use client"`)
- Build command: `npx next build` (currently passes clean)
- All SEO helpers are in `lib/seo.ts` — use `generateMetadata()` for consistency

## Design Guidelines

- Keep the existing navy + green (`trust`) colour scheme
- Cards should have subtle borders, hover shadows
- Mobile-first responsive design
- No stock photos — keep it clean and text-driven
- Emergency pages should feel urgent (maybe red accents for emergency CTAs)

## Files to NOT Modify

- `data/trades.json` — This is the source of truth for all listings. Don't restructure or remove data.
- `data/categories.json` — Categories are set.
- `data/locations.json` — Locations are set.

## After Building

Run `npx next build` to verify everything compiles. Fix any TypeScript or build errors before considering it done.
