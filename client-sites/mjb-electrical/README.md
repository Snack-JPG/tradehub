# MJB Electrical Services Website

Professional, high-quality website for MJB Electrical Services Ltd - a trusted electrician in Halesowen & the West Midlands.

## 🎨 Design Features

- **Authentic Electrician Aesthetic**: Industrial craftsman design with lime green (#7CB342) brand color
- **Mobile-First**: Optimized for 70%+ mobile traffic with thumb-reachable CTAs
- **Performance Optimized**: Built for 90+ Lighthouse score
- **Smooth Animations**: Framer Motion for polished micro-interactions
- **Professional Typography**: DM Sans (body) + Outfit (headings)
- **Trust-Building**: Featured Checkatrade reviews (9.93/10 rating)
- **24/7 Emergency CTA**: Prominent emergency callout buttons throughout

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 🌍 Deployment to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel
```

### Option 2: Deploy via GitHub

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js - just click "Deploy"

### Environment Setup

No environment variables needed - this is a static site.

## 📱 SEO & Schema Markup

- ✅ LocalBusiness schema included
- ✅ Optimized meta tags
- ✅ Mobile-friendly viewport
- ✅ Semantic HTML structure
- ✅ Alt text for images

## 🎯 Key Sections

1. **Hero** - Logo, tagline, Checkatrade rating, call-to-action buttons
2. **Trust Strip** - Badges and social proof
3. **Services** - Categorized electrical services (Home, Lighting, Specialist, Testing)
4. **Reviews** - Real Checkatrade customer testimonials
5. **Areas Served** - Coverage map for West Midlands
6. **Contact Form** - Quote request with 1-hour response promise
7. **Footer** - Contact info, TradeHub link, Checkatrade badge

## 🔧 Customization

### Update Phone Number
Search and replace `07941746878` throughout the codebase.

### Update Colors
Edit `tailwind.config.js`:
```js
colors: {
  'mjb-green': '#7CB342',  // Primary brand color
  'mjb-amber': '#FFA726',  // Emergency/accent color
  'mjb-dark': '#1a1f2e',   // Dark backgrounds
  'mjb-slate': '#2d3748',  // Secondary dark
}
```

### Add Photos
Replace placeholder content in the "Our Recent Work" section when client provides photos.

### Form Integration
The contact form currently submits to `#`. To connect it:
1. Add a form handling service (FormSpree, Netlify Forms, etc.)
2. Update the `<form>` action attribute
3. Or implement API route in `app/api/contact/route.ts`

## 📊 Performance Checklist

- ✅ Static export for fast loading
- ✅ Optimized images (WebP format)
- ✅ Minimal JavaScript bundle
- ✅ CSS-only animations where possible
- ✅ Lazy loading for below-fold content
- ✅ Accessible color contrast ratios

## 🔗 TradeHub Integration

Footer includes link to TradeHub listing. Update the href when the TradeHub listing is live.

## 📝 License

Built for MJB Electrical Services Ltd © 2026
