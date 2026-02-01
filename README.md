# TradeHub — Local Trades Directory

## What Is This?

TradeHub is a local trades directory platform that lists vetted tradespeople (plumbers, electricians, builders, roofers, landscapers etc.) across the West Midlands. It serves as:

1. **A central hub** for all clients whose websites we build
2. **An SEO engine** — backlinks from the directory boost each client's site, while the directory itself ranks for high-value local search terms like "plumber in Solihull" or "electrician Birmingham"
3. **A lead generation platform** — homeowners find tradespeople, we capture and route the leads
4. **A sales tool** — proves credibility when pitching website builds to new tradespeople

## Why It Exists

Austin is building a business selling websites to tradespeople. The directory creates a flywheel:

**Build site → List on directory → Directory ranks → Leads flow → Referrals happen → More clients sign up**

Think a better, modern Checkatrade — but one we own, with AI-powered SEO, no extortionate monthly fees, and genuine value for both tradespeople and homeowners.

## Business Model

- **Website builds:** £200–1,000 one-off (tiered)
- **Hosting:** £30/mo recurring
- **Directory listings:** £10–20/mo for non-website clients
- **Featured listings:** £50/mo premium placement
- **Lead generation:** £30–50/lead for high-value trades
- **Google Ads management:** £150–300/mo

See [BUSINESS-MODEL.md](./BUSINESS-MODEL.md) for full breakdown.

## Tech Stack

- **Next.js 14** (App Router, static generation with ISR)
- **Tailwind CSS** for styling
- **Vercel** for deployment
- **JSON/Markdown** data files (no database needed initially)
- **Full SEO:** JSON-LD schema, llms.txt, sitemap, OpenGraph, semantic HTML

## Project Structure

```
TradeHub/
├── README.md              ← You are here
├── BUSINESS-MODEL.md      ← Revenue, unit economics, projections
├── PRD.md                 ← Product requirements
├── ROADMAP.md             ← Phased delivery plan
├── PITCH.md               ← Sales scripts and objection handling
└── site/                  ← Next.js project
```

## Getting Started

```bash
cd site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
