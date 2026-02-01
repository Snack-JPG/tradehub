# TradeHub — SEO Improvements Build Prompt

## Project Location
`/Users/austin/Desktop/TradeHub/site/`

## Context
TradeHub is a Next.js 14 local trades directory (Tailwind CSS, TypeScript, static JSON data). It's already built with 321 pages, schema markup, sitemap, blog, emergency pages, mobile nav, etc. Now we need to close the SEO gaps that separate us from the top directories (Checkatrade, TrustATrader, MyBuilder).

**Domain:** `tradehub.directory`
**Colours:** navy `#1e293b`, trust/green `#16a34a`

## Key Files
- `data/trades.json` — 41 listings (DO NOT modify structure or remove data)
- `data/categories.json` — 13 trade categories with name, slug, singular, description, icon
- `data/locations.json` — 16 locations with name, slug, county
- `data/blog-posts.json` — existing blog post data
- `lib/trades.ts` — data access functions
- `lib/seo.ts` — SEO helpers (generateMetadata, localBusinessSchema, breadcrumbSchema, itemListSchema)
- `app/[trade]/page.tsx` — category pages
- `app/[trade]/[location]/page.tsx` — category+location combo pages
- `app/trades/[slug]/page.tsx` — individual profile pages
- `app/blog/[slug]/page.tsx` — blog post pages

## Tasks (work through in order)

### Task 1: FAQ Data + FAQ Sections on Category Pages

Create `data/faqs.json` with 3-5 genuine, helpful FAQs per trade category. These must be REAL questions people search for, with proper detailed answers (not filler). Structure:

```json
{
  "plumbers": [
    {
      "question": "How much does a plumber charge per hour in the UK?",
      "answer": "Most plumbers in the West Midlands charge between £40-£60 per hour..."
    }
  ],
  "electricians": [...],
  ...all 13 categories
}
```

Then update `app/[trade]/page.tsx` to:
1. Import and display the FAQs for that category in a collapsible accordion section
2. Add **FAQPage schema markup** (JSON-LD) so Google can show FAQ rich snippets
3. Make the accordion a client component if needed (for expand/collapse)

The FAQ section should sit below the listings but above the footer. Style it cleanly — navy headings, gray answers, subtle borders.

### Task 2: Fix Thin Content on Category+Location Pages

The current `app/[trade]/[location]/page.tsx` generates 208 pages, many with 0 listings and identical template text. This is a thin content risk.

**Fix by:**
1. Create `data/location-content.json` with unique content snippets per location (2-3 sentences about each area — population, character, what homeowners typically need). Example:
```json
{
  "solihull": {
    "description": "Solihull is an affluent town in the West Midlands with a mix of period properties and modern estates. Homeowners here often need skilled tradespeople for renovations, extensions, and high-quality finishing work.",
    "nearby": ["knowle", "dorridge", "shirley", "hall-green"]
  }
}
```

2. Update the location+category page to:
   - Show a **"No listings yet — browse nearby areas"** section with links to nearby locations when there are 0 listings (instead of just a dead-end)
   - Use the unique location description in the SEO content block instead of the generic template
   - Add a "Nearby Areas" section at the bottom linking to adjacent location pages
   - Add a "Related Trades" section linking to other trade categories in the same location

3. For pages with 0 listings, add `noindex` meta tag to prevent Google indexing empty pages, BUT keep the page accessible for users who navigate there.

### Task 3: Cost Guide Blog Posts

Create 5 new cost guide blog posts in `data/blog-posts.json`. These should be Checkatrade-style "how much does X cost" articles. They are the #1 organic traffic driver for trade directories.

**Posts to create:**
1. "How Much Does a Plumber Cost in 2026? (UK Price Guide)"
2. "New Boiler Cost 2026: Installation Prices & What to Expect"
3. "Emergency Locksmith Prices: What You'll Pay for a Call-Out"
4. "How Much Does Plastering Cost Per Room? (2026 Prices)"
5. "Roof Repair Costs UK: Complete 2026 Price Guide"

Each post needs:
- `title`, `slug`, `excerpt`, `date`, `category`: "Cost Guides", `author`: "TradeHub", `readTime`
- `content` array with paragraph and heading blocks — make these genuinely helpful with:
  - Average price ranges (research realistic UK prices)
  - Price tables/breakdowns (as paragraph content with clear formatting)
  - Factors that affect cost
  - Tips for getting the best value
  - When to call an emergency vs. wait for a standard appointment
- `relatedLinks` pointing to relevant category pages on TradeHub (e.g., plumber cost guide links to `/plumbers` and `/plumbers/solihull`)

Make the content genuinely useful — real UK prices, real advice. NOT generic filler.

### Task 4: Dynamic Title Tags with Review Counts

Update `lib/seo.ts` and the category page metadata to include listing counts in title tags.

- Category page: "Find 3+ Trusted Plumbers in the West Midlands | TradeHub"
- Category+Location page: "Find 2+ Trusted Plumbers in Solihull | TradeHub"
- If 0 listings: "Trusted Plumbers in Solihull | TradeHub" (no count)

This requires passing the filtered trade count into the metadata function. Checkatrade does this ("Find 43+ Plumbers in Solihull") and it significantly improves click-through rates.

### Task 5: Internal Linking — Related Trades + Nearby Areas

Add two new sections to the bottom of category pages (`app/[trade]/page.tsx`):

1. **"Related Trades"** — link to 3-4 related trade categories. Create a mapping:
   - plumbers → gas-engineers, builders, tilers
   - electricians → builders, handymen
   - roofers → builders, plasterers
   - builders → plumbers, electricians, plasterers
   - landscapers → fencing, builders
   - plasterers → painters, builders
   - painters → plasterers, carpenters
   - carpenters → builders, painters
   - locksmiths → handymen, electricians
   - handymen → plumbers, electricians, painters
   - gas-engineers → plumbers, builders
   - tilers → plasterers, plumbers, painters
   - fencing → landscapers, builders

2. **"Browse by Area"** — grid of all 16 locations linking to `/[trade]/[location]`

Also add to individual profile pages (`app/trades/[slug]/page.tsx`):
- "More [trade type] in [area]" link back to the category+location page
- "Other trades in [area]" links to 3-4 other category pages for the same location

### Task 6: "How to Choose" Section on Category Pages

Add a "How to Choose a Good [Singular Trade]" section to each category page, between the listings and the FAQs. 

Create `data/hiring-guides.json`:
```json
{
  "plumbers": {
    "qualifications": ["Gas Safe registered (for gas work)", "City & Guilds qualified"],
    "questions": ["Are you Gas Safe registered?", "Can you provide a written quote?", "Do you have public liability insurance?"],
    "redFlags": ["No written quote", "Asking for full payment upfront", "No ID or credentials"],
    "priceRange": "£40-£60/hour"
  }
}
```

Render this as a clean, helpful section with icons or checkmarks. This adds unique, authoritative content to every category page and targets "how to find a good plumber" type searches.

## Technical Notes

- The site is fully static (SSG) — no API, no database
- All data comes from JSON files in `data/`
- Client components need `"use client"` directive
- Use existing `lib/seo.ts` helpers where possible, extend if needed
- Existing colour scheme: navy `#1e293b` for headings/backgrounds, trust green `#16a34a` for CTAs/accents
- Run `npx next build` after each task to verify clean compilation

## Files to NOT Modify (data integrity)
- `data/trades.json` — do not restructure or remove existing data
- `data/categories.json` — categories are set
- `data/locations.json` — locations are set

## After Building
Run `npx next build` to verify everything compiles with zero errors. Fix any TypeScript or build errors before considering it done.

When completely finished with all tasks, run this command to notify me:
clawdbot gateway wake --text 'Done: TradeHub SEO improvements complete — FAQs, thin content fix, cost guides, dynamic titles, internal linking, hiring guides' --mode now
