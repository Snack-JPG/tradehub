# SEO & AI Crawler Setup

## Overview

The site is fully configured for search engine optimization and AI/LLM indexing.

## ✅ What's Configured

### 1. Robots.txt
**Location**: `/app/robots.ts` (source) → `/out/robots.txt` (built)

**Purpose**: Tells search engines and AI crawlers what they can access

**AI Crawlers Allowed**:
- ✅ Google (Googlebot)
- ✅ ChatGPT (ChatGPT-User, GPTBot)
- ✅ Claude (anthropic-ai, Claude-Web)
- ✅ Perplexity (PerplexityBot)
- ✅ Common Crawl (CCBot)
- ✅ Google AI (Google-Extended)
- ✅ ByteDance (Bytespider)

All crawlers have **full access** to index the site for AI training and search.

### 2. Sitemap.xml
**Location**: `/app/sitemap.ts` (source) → `/out/sitemap.xml` (built)

**Purpose**: Helps search engines discover and index all pages

**Current Entries**:
- Homepage (/)
- Last modified date (auto-updated on each build)
- Change frequency: Monthly
- Priority: 1.0 (highest)

### 3. Schema Markup (Structured Data)
**Location**: `/app/layout.tsx`

**Type**: LocalBusiness + Electrician

**Includes**:
- Business name, phone, address
- Aggregate rating (9.93/10 from 105 reviews)
- Service area (Halesowen, Birmingham, West Midlands)
- Opening hours (24/7)
- Price range

This helps Google show rich snippets in search results (star ratings, phone number, etc.)

### 4. Meta Tags
**Location**: `/app/layout.tsx`

**Configured**:
- ✅ Title tag (SEO optimized)
- ✅ Meta description
- ✅ Keywords
- ✅ Open Graph tags (for social sharing)
- ✅ Viewport (mobile responsive)

### 5. Semantic HTML
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Semantic section tags
- ✅ Alt text for images
- ✅ ARIA labels where needed

## 📍 File Paths

### Source Files (edit these):
```
/app/robots.ts          - Robots.txt configuration
/app/sitemap.ts         - Sitemap configuration
/app/layout.tsx         - Meta tags & schema markup
/public/robots.txt      - Static fallback (optional)
/public/sitemap.xml     - Static fallback (optional)
```

### Built Files (auto-generated):
```
/out/index.html         - Main page
/out/robots.txt         - Search engine instructions
/out/sitemap.xml        - Site structure
```

## 🔧 Customization

### Update Site URL
When you have a custom domain:

1. Create `.env.local`:
```bash
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com
```

2. Or update in Vercel dashboard:
   - Settings → Environment Variables
   - Add: `NEXT_PUBLIC_SITE_URL` = `https://www.yourdomain.com`

The robots.txt and sitemap.xml will automatically use the new URL.

### Verify Setup After Deployment

1. **Check robots.txt**: Visit `https://yourdomain.com/robots.txt`
2. **Check sitemap**: Visit `https://yourdomain.com/sitemap.xml`
3. **Test structured data**: Use [Google Rich Results Test](https://search.google.com/test/rich-results)
4. **Submit to Google**: Add sitemap in Google Search Console

## 🤖 AI Indexing

This site is **AI-friendly** by design:

- ✅ All AI crawlers explicitly allowed
- ✅ Clean semantic HTML structure
- ✅ Schema markup for context
- ✅ No crawler blocking
- ✅ Fast loading (AI crawlers prefer fast sites)

### Why This Matters

When potential customers ask AI assistants:
- "Find me an electrician in Halesowen"
- "Who's the best rated electrician near Birmingham?"
- "I need emergency electrical work in West Midlands"

Your site will be indexed and can be recommended by:
- ChatGPT
- Claude
- Perplexity
- Google AI
- Other AI assistants

## 📊 Search Console Setup (Post-Deploy)

After deploying to your domain:

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your domain
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### Bing Webmaster Tools
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap

## 🎯 Local SEO Keywords

The site is optimized for these search terms:

**Primary**:
- Electrician Halesowen
- Emergency electrician West Midlands
- Electrician near me (when searched in Halesowen)

**Secondary**:
- House rewiring Halesowen
- EV charger installation Birmingham
- EICR testing West Midlands
- Fuseboard replacement Dudley
- Emergency electrician Stourbridge

**Long-tail**:
- "24/7 emergency electrician Halesowen"
- "Checkatrade approved electrician West Midlands"
- "Best rated electrician near Birmingham"

## ✅ SEO Checklist

- [x] robots.txt configured
- [x] sitemap.xml configured
- [x] Schema markup added
- [x] Meta tags optimized
- [x] Alt text for images
- [x] Mobile responsive
- [x] Fast loading speed
- [x] Semantic HTML
- [x] Local SEO keywords
- [x] AI crawler friendly
- [ ] Submit to Google Search Console (after deploy)
- [ ] Submit to Bing Webmaster (after deploy)
- [ ] Monitor search rankings
- [ ] Track click-through rates

## 📈 Expected Results

**Timeline**:
- **1-3 days**: Site indexed by Google/Bing
- **1-2 weeks**: Appear in local searches
- **1 month**: Start ranking for business name
- **2-3 months**: Rank for "electrician Halesowen"
- **3-6 months**: Rank for competitive terms

**Factors that help**:
- 9.93/10 rating (trust signal)
- 400+ reviews (social proof)
- Fast loading site (UX signal)
- Mobile-friendly (Google priority)
- Local content (area names, postcodes)
- Regular updates (add blog/photos)

---

**Status**: ✅ Fully configured and ready for search engines and AI crawlers
