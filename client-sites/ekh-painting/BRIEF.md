# EKH Painting & Decorating — Website Brief

## Business Info
- **Name:** EKH Painting & Decorating
- **Trade:** Painter & Decorator
- **Owner:** Glen (and Nina)
- **Location:** 63 Elizabeth Rd, Sutton Coldfield, Birmingham B73 5AP
- **Phone:** 07380 906902
- **Rating:** 5.0★ on Google (50 reviews)
- **Online presence:** None — no website, no social media found
- **Logo:** None available — use clean text-based logo/wordmark (e.g. "EKH" in a bold serif or brush-style font with "Painting & Decorating" underneath)

---

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel (static export)
- **Icons:** Lucide React

### Required Files
- `robots.txt` — allow all crawlers, reference sitemap
- `llms.txt` — structured plaintext summary of the business for AI/LLM consumption (name, services, areas, contact, reviews summary)
- `sitemap.xml` — auto-generated or static
- Proper `<head>` meta tags, Open Graph, and JSON-LD schema markup

### WhatsApp Floating Button
Use the shared WhatsApp SVG icon from:
**`/Users/austin/Desktop/TradeHub/websites/shared/icons/whatsapp-white.svg`**

Reference the snippet at:
**`/Users/austin/Desktop/TradeHub/websites/shared/snippets/whatsapp-button.html`**

Implement as a floating bottom-right button that links to `https://wa.me/447380906902` with a pre-filled message: "Hi Glen, I found you on Google and I'm looking for a quote for painting/decorating work."

---

## Sections (top to bottom)

### 1. Hero
- Text-based logo/wordmark: "EKH" prominent, "Painting & Decorating" below
- Headline: "Professional Painters & Decorators in Sutton Coldfield"
- Subtext: "Transforming homes across Birmingham and the West Midlands — rated 5 stars by every customer"
- Star rating badge: "5.0★ on Google · 50+ Reviews"
- CTA: "Call Glen — 07380 906902" (click-to-call)
- Secondary CTA: "Get a Free Quote" (anchor to contact)
- **IMAGE PLACEHOLDER:** Full-width hero background — space for a stunning before/after or finished room photo. Use a warm, neutral gradient placeholder (think fresh painted walls) with text overlay. Add comment: `{/* HERO IMAGE: Replace with client's best project photo */}`

### 2. About / Introduction
- "Glen and Nina at EKH Painting & Decorating bring a personal touch to every project. Based in Sutton Coldfield, they've built a reputation for meticulous attention to detail, respect for your home, and flawless finishes — backed by 50 five-star reviews from happy customers."
- Trust points as icons: "5★ Every Review" / "Prompt & Reliable" / "Spotless & Tidy"
- **IMAGE PLACEHOLDER:** Photo of Glen/team at work or a freshly decorated room. Add comment: `{/* ABOUT IMAGE: Team photo or mid-project shot */}`

### 3. Services
Display as visual cards with icons and brief descriptions:

**Interior Painting**
- Living rooms, bedrooms, kitchens
- Feature walls & accent colours
- Ceilings & coving

**Exterior Painting**
- Fascias, soffits & guttering
- Front doors & window frames
- Garden walls & fences

**Wallpapering**
- Feature walls
- Full room wallpapering
- Wallpaper stripping & prep

**Decorating**
- Hallways, stairs & landings
- Full house redecorations
- New build finishing

**Preparation Work**
- Surface preparation & filling
- Plastering touch-ups
- Sanding & priming

**Commercial**
- Office redecorations
- Shop fronts
- Rental property turnarounds

### 4. Project Gallery
**IMAGE PLACEHOLDERS** — this is crucial for a painter/decorator. Create a grid gallery section with 6-8 placeholder slots.

Layout: Masonry or uniform grid, each slot should have:
- A placeholder div with a paint brush/roller icon and "Project Photo Coming Soon"
- Subtle border and hover effect ready for real images
- Comment: `{/* GALLERY: Replace placeholders with client project photos. Before/after pairs work great */}`

Include text above: "Every project tells a story. Here's some of our recent work across Sutton Coldfield and Birmingham."

### 5. Reviews
Use REAL Google reviews. Display as cards with stars.

1. **Alpa Burke** — "Glen and Nina did a wonderful job painting various areas of our house. Swift response and so respectful of our home, we couldn't be happier with the finished result. If you ever need a decorator, Glen's your man! Already forwarded his details to a friend."

2. **Natasha A** — "I would give more than 5 stars if I could! Absolute perfection by Glen and Nina who have recently redecorated our hallway stairs and landing. Glen and Nina are extremely hard working, their standard of work is honestly best of the best! They are polite, respectful, friendly and arrive promptly."

3. **Leeanne Minto** — "Contacted EKH and had a swift response, quote sent out detailing everything. Was able to fit me in a very reasonable timeframe. Very satisfied with the finish and would recommend again. Thanks to Glen and co!"

4. Add 3 more placeholder review cards with comment: `{/* ADD MORE REVIEWS: Pull from Google reviews */}`

Label: "Reviews from Google"
Summary badge: "5.0 average from 50+ reviews on Google"

### 6. Areas Served
List with map pin icons:
Sutton Coldfield, Birmingham, Erdington, Four Oaks, Mere Green, Wylde Green, Boldmere, Walmley, Streetly, Great Barr, Kingstanding, Perry Barr, Lichfield, Tamworth, Solihull

### 7. Contact / Get a Quote
- Click-to-call button: "Call Glen — 07380 906902"
- WhatsApp button: "Message on WhatsApp" (using shared SVG)
- Contact form: Name, Phone, Email, Postcode, Job Description (dropdown: Interior Painting / Exterior Painting / Wallpapering / Full Redecoration / Other), Message
- "We aim to respond the same day"
- **IMAGE PLACEHOLDER:** Split layout — form on one side, image placeholder on the other. Comment: `{/* CONTACT IMAGE: Finished project photo or Glen at work */}`

### 8. Footer
- Business name + phone + WhatsApp link
- Areas served (condensed)
- "Listed on TradeHub" with link to TradeHub listing
- Google reviews badge/link
- Copyright

---

## Design Direction
- **Colours:** Warm and inviting — think:
  - Primary: Deep sage green or warm navy (#2D5A4B or #1E3A5F)
  - Accent: Warm gold/cream (#D4A853 or #F5E6C8)
  - Background: Off-white/cream (#FAFAF5)
  - Text: Charcoal (#2C2C2C)
  - The vibe should say "fresh, clean, quality finish" — like a freshly decorated room
- **Feel:** Warm, personal, trustworthy. Glen and Nina are a husband-and-wife team — the site should feel personal, not corporate. Friendly but professional.
- **Typography:** Clean serif for headings (feels premium/traditional craft), sans-serif for body
- **Images:** PLACEHOLDER HEAVY — this trade is visual. Every section should have a clearly marked image placeholder ready to swap in. Use subtle paint-themed placeholder graphics (brush strokes, colour swatches, etc.)
- **Mobile:** 70%+ mobile visitors. Click-to-call and WhatsApp must be thumb-reachable. Sticky phone bar at bottom on mobile.

---

## SEO

### Meta
- **Title:** "EKH Painting & Decorating | Painters in Sutton Coldfield | 5★ Reviews"
- **Description:** "Professional painters and decorators in Sutton Coldfield, Birmingham. 5-star rated on Google with 50+ reviews. Interior & exterior painting, wallpapering, full redecorations. Call Glen on 07380 906902 for a free quote."
- **H1:** "Professional Painters & Decorators in Sutton Coldfield"

### Schema Markup (JSON-LD)
- `@type`: LocalBusiness + HousePainter
- Include: name, phone, address, rating, reviewCount, areaServed, services

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://[domain]/sitemap.xml
```

### llms.txt
```
# EKH Painting & Decorating

## About
Professional painting and decorating service based in Sutton Coldfield, Birmingham. Run by Glen and Nina. Rated 5.0 stars on Google with 50+ reviews.

## Services
- Interior painting (living rooms, bedrooms, kitchens, hallways, stairs, landings)
- Exterior painting (fascias, soffits, doors, window frames, garden walls)
- Wallpapering (feature walls, full rooms, stripping and prep)
- Full house redecorations
- Surface preparation, filling, sanding, priming
- Commercial decorating (offices, shops, rental properties)

## Areas Served
Sutton Coldfield, Birmingham, Erdington, Four Oaks, Mere Green, Wylde Green, Boldmere, Walmley, Streetly, Great Barr, Kingstanding, Perry Barr, Lichfield, Tamworth, Solihull

## Contact
- Phone: 07380 906902
- WhatsApp: https://wa.me/447380906902
- Location: Sutton Coldfield, Birmingham B73
- Website: [domain]
- TradeHub: [tradehub listing URL]

## Reviews
5.0 average rating from 50+ Google reviews. Known for attention to detail, tidiness, punctuality, and fair pricing.
```

---

## Deployment
- Vercel (free tier, static export)
- Preview URL for client review
- Custom domain later when they pay

## TradeHub Integration
- Footer: "Find us on TradeHub" → TradeHub listing link
- TradeHub listing updated with backlink once live
