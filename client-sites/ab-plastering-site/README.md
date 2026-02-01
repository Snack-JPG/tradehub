# A.B Plastering & Rendering - Website

A premium, high-end website for A.B Plastering & Rendering, a Birmingham-based plasterer with a perfect 5-star Google rating across 64 reviews.

## Design Concept: "Refined Craftsman"

**Aesthetic Direction:**
- Premium tactile quality meets honest tradesman authenticity
- Editorial serif headlines (Fraunces) paired with geometric sans body (DM Sans)
- Warm charcoal base with terracotta/clay accents, cream backgrounds mimicking fresh plaster
- Subtle, weighted animations - like trowel strokes smoothing plaster
- The perfect 5-star record as a visual motif throughout

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Fraunces (Display), DM Sans (Body)
- **Deployment:** Vercel (static export)

## Features

### Sections
1. **Hero** - Full-screen hero with A.B wordmark, 5-star badge, and dual CTAs
2. **About** - Story and trust points with image placeholder
3. **Services** - 4 service categories in visual cards (Plastering, Rendering, Dry Lining, Specialist)
4. **Gallery** - 6 project placeholders (ready for before/after photos)
5. **Reviews** - 3 real Google reviews + 3 placeholders
6. **Why Perfect** - Breakdown of what makes every review 5 stars
7. **Areas Served** - 15 Birmingham areas
8. **Contact** - Full contact form with WhatsApp integration
9. **Footer** - Complete business information

### Components
- WhatsApp floating button (bottom-right, with pre-filled message)
- Smooth scroll animations
- Mobile-optimized (click-to-call, WhatsApp)
- SEO-ready with Schema.org markup

## Getting Started

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build
```bash
npm run build
```

### Production Export
```bash
npm run build
```
Static files will be in the `out/` directory

## Image Placeholders

Replace the following placeholder sections with client photos:

1. **Hero** - Full-width hero background (smooth plastered wall or before/after)
2. **About** - Adam working or finished wall detail
3. **Gallery** - 6 before/after project photos
4. **Contact** - Adam at work or finished project

## SEO Files

- `/public/robots.txt` - Allow all crawlers
- `/public/sitemap.xml` - Basic sitemap (update domain)
- `/public/llms.txt` - Structured plaintext for AI/LLM consumption
- Schema.org JSON-LD in layout.tsx

## Customization

### Colors
Defined in `tailwind.config.ts`:
- Plaster: Warm greys (#F5F3F0 to #3D3D3D)
- Terracotta: Warm clay accents (#C67A4B to #B87333)
- Gold: Star ratings (#F4B740)

### Fonts
- **Display (Headings):** Fraunces - Editorial serif
- **Body (Text):** DM Sans - Clean geometric sans

### WhatsApp
Pre-filled message: "Hi Adam, I found you on Google and I'm looking for a quote for plastering work."

Update phone number in:
- `components/WhatsAppButton.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

## Deployment

### Vercel
1. Push to GitHub
2. Import to Vercel
3. Deploy (auto-detects Next.js)
4. Add custom domain in Vercel settings

### Other Hosts
```bash
npm run build
```
Upload the `out/` directory to any static host

## TODO

- [ ] Add client photos (hero, about, gallery, contact)
- [ ] Update domain in sitemap.xml and llms.txt
- [ ] Add TradeHub listing URL to footer
- [ ] Configure form submission endpoint
- [ ] Test on mobile devices
- [ ] Add Google Analytics (optional)

## Notes

- Mobile-first design (70%+ mobile traffic expected)
- Click-to-call and WhatsApp optimized for mobile
- All animations are subtle and performance-optimized
- Form has no backend - needs integration with email service or form handler

---

Built with premium craftsmanship — matching the quality Adam delivers on every wall.
