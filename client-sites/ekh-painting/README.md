# EKH Painting & Decorating - Website

A premium, high-end website for EKH Painting & Decorating, a professional painting and decorating service in Sutton Coldfield, Birmingham.

## Features

- ✨ **Editorial craftsmanship design** — Warm, sophisticated aesthetic inspired by high-end interior design magazines
- 🎨 **Distinctive typography** — Crimson Pro serif paired with Inter sans-serif
- 📱 **Fully responsive** — Mobile-first design optimized for all devices
- 🎭 **Framer Motion animations** — Smooth, luxurious reveal animations throughout
- 🌿 **Warm color palette** — Deep sage green, cream, and gold accents
- ⭐ **5-star social proof** — Real Google reviews prominently featured
- 💬 **WhatsApp integration** — Floating button with pre-filled message
- 🔍 **SEO optimized** — Comprehensive meta tags, schema markup, sitemap
- 📸 **Image-ready** — Placeholder slots throughout for project photos

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Crimson Pro, Inter)
- **Deployment:** Vercel (static export)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

\`\`\`bash
npm install
\`\`\`

2. Run the development server:

\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
\`\`\`

This creates an optimized static export in the `out` directory, ready for deployment.

## Adding Client Photos

The site is designed with image placeholders throughout. To add real project photos:

### Hero Section
- File: `src/app/page.tsx:26`
- Replace the gradient background with a hero image
- Look for comment: `{/* HERO IMAGE: Replace with client's best project photo */}`

### About Section
- File: `src/app/page.tsx:136`
- Replace placeholder with team photo or project shot
- Look for comment: `{/* ABOUT IMAGE: Team photo or mid-project shot */}`

### Project Gallery
- File: `src/app/page.tsx:266`
- Replace 6 placeholder divs with real project images
- Look for comment: `{/* GALLERY: Replace placeholders with client project photos */}`
- **Tip:** Before/after pairs work exceptionally well

### Contact Section
- File: `src/app/page.tsx:485`
- Replace placeholder with finished project photo
- Look for comment: `{/* CONTACT IMAGE: Finished project photo or Glen at work */}`

## Customization

### Colors

Edit `tailwind.config.ts` to modify the color palette:

- `sage` — Primary brand color (green tones)
- `cream` — Accent color (warm neutrals)

### Content

Main content is in `src/app/page.tsx`:

- **Services:** Edit the `services` array (line 795)
- **Reviews:** Edit the `reviews` array (line 840) — add more from Google
- **Areas:** Edit the `areas` array (line 856)

### Contact Form

The contact form is currently client-side only. To make it functional:

1. Add a form handling service (Formspree, Basin, etc.)
2. Or connect to your own backend API
3. Update the `<form>` element in `src/app/page.tsx:495`

### SEO

Update domain references in:

- `public/robots.txt`
- `public/sitemap.xml`
- `public/llms.txt`
- `src/app/layout.tsx` (metadata)

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will auto-detect Next.js and deploy
4. Configure custom domain in Vercel dashboard

### Manual Export

\`\`\`bash
npm run build
\`\`\`

Upload the contents of the `out` directory to any static hosting service.

## Site Structure

\`\`\`
ekh-painting/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata & schema
│   │   ├── page.tsx        # Main homepage with all sections
│   │   └── globals.css     # Global styles & utilities
│   └── components/
│       └── WhatsAppButton.tsx  # Floating WhatsApp button
├── public/
│   ├── robots.txt          # Search engine directives
│   ├── sitemap.xml         # Site structure for SEO
│   └── llms.txt           # AI-readable business info
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
\`\`\`

## Sections

1. **Hero** — Bold logo, headline, CTAs, 5-star badge
2. **About** — Personal introduction to Glen & Nina with trust points
3. **Services** — 6 service cards with icons and descriptions
4. **Project Gallery** — 6-slot photo grid (ready for images)
5. **Reviews** — 3 real Google reviews + 3 placeholder slots
6. **Areas Served** — List of coverage areas with map pins
7. **Contact** — Phone, WhatsApp, contact form
8. **Footer** — Business info, links, social proof

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Static export for fast loading
- Optimized fonts with `display: swap`
- Efficient animations with Framer Motion
- Mobile-first responsive design
- Semantic HTML for accessibility

## License

Private project for EKH Painting & Decorating.

---

**Need help?** Contact the developer or refer to the BRIEF.md for full specifications.
