# CHM Heating Services Ltd - Website

A professional, conversion-focused website for CHM Heating Services, a Gas Safe registered heating engineer in Solihull.

## Design Approach

**Aesthetic**: Editorial warmth meets industrial craft
- Warm amber/rust tones paired with deep navy
- Typography-led design with Libre Baskerville display font
- Generous whitespace with strategic testimonial placement
- Subtle radiator-line patterns as visual texture
- Professional but approachable - not corporate or flashy

## Key Features

- ✅ **24/7 Emergency CTA** - Prominent throughout the site
- ✅ **5★ Google Reviews** - Featured prominently with social proof
- ✅ **Mobile Responsive** - Optimized for all devices
- ✅ **Fast Loading** - Next.js with optimized assets
- ✅ **SEO Optimized** - Meta tags, schema markup, semantic HTML
- ✅ **Schema.org Markup** - LocalBusiness structured data
- ✅ **Accessibility** - WCAG compliant, semantic HTML
- ✅ **Call-to-Action** - Multiple conversion points

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4
- **TypeScript**: Full type safety
- **Icons**: Lucide React
- **Animations**: CSS + Framer Motion ready

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## SEO Configuration

### Primary Keywords
- gas engineer Solihull
- boiler repair Solihull
- emergency boiler breakdown Solihull
- heating engineer Solihull

### Schema Markup
- LocalBusiness schema with full contact details
- Aggregate rating from Google reviews
- Opening hours and service area

### Performance
- Static generation for fast loading
- Optimized images and fonts
- Minimal JavaScript bundle

## File Structure

```
/app
  /globals.css          # Global styles with custom animations
  /layout.tsx           # Root layout with metadata
  /page.tsx             # Main homepage component
  /robots.ts            # Dynamic robots.txt
  /sitemap.ts           # Dynamic sitemap.xml

/public
  /favicon.svg          # Site favicon
  /llms.txt             # LLM-readable business information
  /robots.txt           # Static robots file
  /sitemap.xml          # Static sitemap
```

## Content Sections

1. **Emergency Bar** - Immediate attention to 24/7 availability
2. **Hero** - Business name, 5★ rating, primary CTA
3. **Services** - All 8 core services with icons
4. **Reviews** - 3 featured Google reviews
5. **About** - Craig's personal story and credentials
6. **Areas** - Geographic coverage
7. **Contact** - Phone, hours, location
8. **Footer** - Quick links and business info

## Conversion Optimization

- **Above the fold**: Phone number and emergency messaging
- **Social proof**: 5★ rating visible in multiple sections
- **Trust signals**: Gas Safe badge, credentials, clean work guarantee
- **Multiple CTAs**: Phone buttons throughout journey
- **Urgency**: Emergency messaging creates action
- **Personal touch**: Craig's name and story build trust

## Brand Colors

```css
Warmth (Primary):
- warmth-50: #fef7ee (light cream)
- warmth-500: #f15b0b (rust orange)
- warmth-600: #e24106 (deeper orange)

Trust (Accent):
- trust-600: #0074c7 (professional blue)

Navy (Text):
- navy-900: #1a2332 (deep navy)
- navy-700: #374870 (medium navy)
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
```

Deploy the `.next` folder and `public` directory.

## Updates Needed

- [ ] Add actual logo image to `/public/logo.webp`
- [ ] Confirm Gas Safe registration number
- [ ] Add email address if available
- [ ] Take professional photos of Craig/work
- [ ] Set up Google Analytics (optional)

## Contact

For support or questions about this website, contact the TradeHub team.

---

**Built with care for CHM Heating Services Ltd** 🔥
