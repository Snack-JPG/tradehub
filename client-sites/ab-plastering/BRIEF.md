# A.B Plastering & Rendering — Website Brief

## Business Info
- **Name:** A.B Plastering & Rendering
- **Trade:** Plasterer & Renderer
- **Owner:** Adam
- **Location:** 11 Ardley Rd, Kings Heath, Birmingham B14 4AH
- **Phone:** 07864 670314
- **Rating:** 5.0★ on Google (64 reviews) — perfect score, every single review is 5 stars
- **Online presence:** Google Business Profile only. No website, no social media found.
- **Logo:** None available — create a clean text-based wordmark. "A.B" large and bold, "Plastering & Rendering" underneath. Think craftsman/trade — strong, no-nonsense.

---

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (subtle — this is a tradesman's site, not a startup)
- **Deployment:** Vercel (static export)
- **Icons:** Lucide React

### Required Files
- `robots.txt` — allow all crawlers, reference sitemap
- `llms.txt` — structured plaintext summary for AI/LLM consumption
- `sitemap.xml` — auto-generated or static
- Proper `<head>` meta tags, Open Graph, and JSON-LD schema markup

### WhatsApp Floating Button
Use the shared WhatsApp SVG icon from:
**`/Users/austin/Desktop/TradeHub/websites/shared/icons/whatsapp-white.svg`**

Reference the snippet at:
**`/Users/austin/Desktop/TradeHub/websites/shared/snippets/whatsapp-button.html`**

Implement as a floating bottom-right button linking to `https://wa.me/447864670314` with pre-filled message: "Hi Adam, I found you on Google and I'm looking for a quote for plastering work."

---

## Sections (top to bottom)

### 1. Hero
- Text-based wordmark: "A.B" bold, "Plastering & Rendering" underneath
- Headline: "Expert Plastering & Rendering in Birmingham"
- Subtext: "64 five-star reviews. Not a single one below 5. That's the standard Adam works to — every wall, every time."
- Star rating badge: "5.0★ on Google · 64 Reviews — Every Single One 5 Stars"
- CTA: "Call Adam — 07864 670314" (click-to-call)
- Secondary CTA: "Get a Free Quote" (anchor to contact)
- **IMAGE PLACEHOLDER:** Full-width hero — space for a smooth, freshly plastered wall or a before/after shot. Use a warm neutral/concrete-toned gradient placeholder. Comment: `{/* HERO IMAGE: Replace with client's best plastering finish photo — a smooth wall catches the light beautifully */}`

### 2. About / Introduction
- "Adam at A.B Plastering & Rendering has built something rare — a perfect 5-star record across 64 Google reviews. Based in Kings Heath, he works across Birmingham and Solihull, bringing meticulous attention to detail to every job. Whether it's a single wall patch or a full house re-plaster, you'll get the same standard: flawless finishes, honest pricing, and a clean workspace when he leaves."
- Trust points: "Perfect 5★ Record" / "Honest & Fair Pricing" / "Clean & Tidy"
- **IMAGE PLACEHOLDER:** Adam at work or a freshly plastered room. Comment: `{/* ABOUT IMAGE: Photo of Adam working or a beautifully smooth plastered wall */}`

### 3. Services
Display as visual cards with icons:

**Plastering**
- Full room plastering
- Ceiling plastering
- Skim coating over artex
- Plaster repairs & patch work
- New plaster on bare brick/block

**Rendering**
- External house rendering
- Monocouche rendering
- Silicone rendering
- Pebbledash removal & re-render
- Garden wall rendering

**Dry Lining**
- Dot and dab plasterboard
- Stud wall construction
- Insulated dry lining
- Sound insulation boarding

**Specialist Work**
- Artex removal / covering
- Coving & cornice fitting
- Skimming over old plaster
- New build plastering
- Extensions & conversions

### 4. Project Gallery
**IMAGE PLACEHOLDERS** — plastering is a visual trade. Smooth walls, clean lines, before/after transformations.

Create a grid with 6 placeholder slots:
- Each with a trowel/wall icon and "Project Photo Coming Soon"
- Comment: `{/* GALLERY: Before/after pairs work brilliantly for plastering. Rough wall → smooth finish tells the story instantly */}`

Header text: "From rough to flawless. Here's some of our recent work across Birmingham."

### 5. Reviews
**Use REAL Google reviews only** — these are verified from the Google Maps scrape:

1. **Johanna Walkley** — "Adam first came to our rescue when we needed a very poor job rectifying. He promptly returned our call and was able to complete the job quickly and to an excellent standard. He has since returned and carried out additional plastering jobs for us, working effectively alongside other tradespeople."

2. **Carla Powell** — "Adam has just finished plastering my entire home and I couldn't be happier with the results. From the moment he started, Adam worked tirelessly and demonstrated an incredible work ethic. His attention to detail is impressive, and the finish on my walls is absolutely flawless."

3. **Nazim Zahir** — "I contacted Adam after reading the reviews on Google. Must say, he does live up to the 5 star reputation. Great in communication, punctual with the timeline, fair price and quality of work was excellent. Really soft spoken and pays extra attention to customer's request. He tidied up after himself too."

4-6. Add 3 placeholder review cards: `{/* ADD MORE REVIEWS: Pull from Google reviews — Adam has 64 to choose from */}`

Label: "Reviews from Google"
Summary badge: "5.0 average from 64 reviews — every single one is 5 stars"

### 6. Why Every Review is 5 Stars
A short section that sets Adam apart — lean into the perfect record:
- "In 64 reviews, not a single customer has given less than 5 stars. Here's why:"
- **Quality First** — "Flawless finishes on every job, no cutting corners"
- **Fair Pricing** — "Honest quotes with no hidden extras"
- **Reliable** — "Turns up when he says he will, finishes when he says he will"
- **Respectful** — "Treats your home like his own — dust sheets down, mess cleaned up"
- **Communication** — "Keeps you informed every step of the way"

### 7. Areas Served
List with map pin icons:
Kings Heath, Birmingham, Hall Green, Moseley, Sparkhill, Stirchley, Bournville, Selly Oak, Harborne, Edgbaston, Acocks Green, Solihull, Shirley, Billesley, Brandwood

### 8. Contact / Get a Quote
- Click-to-call: "Call Adam — 07864 670314"
- WhatsApp: "Message on WhatsApp" (using shared SVG)
- Contact form: Name, Phone, Email, Postcode, Type of Work (dropdown: Plastering / Rendering / Dry Lining / Patch Repair / Artex Removal / Other), Message
- "Adam aims to respond the same day"
- **IMAGE PLACEHOLDER:** Split layout — form on right, image placeholder on left. Comment: `{/* CONTACT IMAGE: Finished plastering job or Adam at work */}`

### 9. Footer
- Business name + phone + WhatsApp
- Areas served (condensed)
- "Listed on TradeHub" with link
- Google reviews badge: "5.0/5.0 — 64 Reviews"
- Copyright

---

## Design Direction
- **Colours:** Clean, solid, workmanlike:
  - Primary: Warm charcoal or slate (#3D3D3D or #4A4A4A)
  - Accent: Warm terracotta/clay (#C67A4B) or muted copper (#B87333)
  - Background: Light warm grey (#F5F3F0) — like fresh plaster drying
  - Cards: White (#FFFFFF) with subtle shadows
  - The vibe: clean, smooth, quality craftsmanship — like a freshly plastered wall
- **Feel:** Honest, no-nonsense, quality. Adam's a tradesman who lets his work speak for itself. The site should feel solid and trustworthy, not flashy.
- **Typography:** Strong sans-serif throughout. Bold headings, clean body text. No frills.
- **Images:** Placeholder-heavy with plastering-themed icons (trowel, wall, smoothing tool)
- **Mobile:** 70%+ mobile. Click-to-call and WhatsApp thumb-reachable. Sticky phone bar on mobile.

---

## SEO

### Meta
- **Title:** "A.B Plastering & Rendering | Plasterer in Birmingham | 5★ (64 Reviews)"
- **Description:** "Expert plasterer in Kings Heath, Birmingham. Perfect 5-star Google rating across 64 reviews. Plastering, rendering, dry lining, and repairs. Call Adam on 07864 670314 for a free quote."
- **H1:** "Expert Plastering & Rendering in Birmingham"

### Schema Markup (JSON-LD)
- `@type`: LocalBusiness + HomeAndConstructionBusiness
- Include: name, phone, address (11 Ardley Rd, Kings Heath, Birmingham B14 4AH), rating (5.0), reviewCount (64), areaServed, services

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://[domain]/sitemap.xml
```

### llms.txt
```
# A.B Plastering & Rendering

## About
Expert plastering and rendering service based in Kings Heath, Birmingham. Run by Adam. Perfect 5.0 star rating on Google with 64 reviews — every single review is 5 stars.

## Services
- Plastering (full rooms, ceilings, skim coating, patch repairs, new plaster)
- Rendering (external, monocouche, silicone, pebbledash removal)
- Dry Lining (dot and dab, stud walls, insulated dry lining)
- Specialist (artex removal, coving, new builds, extensions)

## Areas Served
Kings Heath, Birmingham, Hall Green, Moseley, Sparkhill, Stirchley, Bournville, Selly Oak, Harborne, Edgbaston, Acocks Green, Solihull, Shirley, Billesley, Brandwood

## Contact
- Phone: 07864 670314
- WhatsApp: https://wa.me/447864670314
- Location: Kings Heath, Birmingham B14
- Website: [domain]
- TradeHub: [tradehub listing URL]

## Reviews
Perfect 5.0 rating from 64 Google reviews. Known for flawless finishes, honest pricing, punctuality, cleanliness, and excellent communication.
```

---

## Deployment
- Vercel (free tier, static export)
- Preview URL for client review
- Custom domain later when they pay

## TradeHub Integration
- Footer: "Listed on TradeHub" → TradeHub listing link
- TradeHub listing updated with backlink once live
