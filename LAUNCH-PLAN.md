# TradeHub — Launch Plan

## Phase 0: Pre-Population (NOW — Before Launch)

**Goal:** 30-50 real business listings across multiple trades and areas so the directory looks legitimate from day one.

### Target Trades (aim for 5-8 listings per trade)
- [ ] Plumbers (emergency + general)
- [ ] Electricians (emergency + general)
- [ ] Locksmiths (24hr / emergency)
- [ ] Gas Engineers / Boiler Repair
- [ ] Roofers
- [ ] Builders / General Building
- [ ] Plasterers
- [ ] Landscapers / Garden Maintenance

### Target Areas
- Birmingham (city centre + suburbs)
- Solihull
- Redditch
- Bromsgrove
- Warwickshire (Stratford, Henley, Warwick, Leamington)
- Sutton Coldfield
- Coventry (stretch goal)

### Per Listing — Data Required
- Business name
- Trade type / category
- Owner name (if public)
- Phone number
- Area(s) served
- Services offered (list)
- Google rating + review count
- Key reviews (2-3 best quotes)
- Website URL (if they have one)
- Accreditations (Gas Safe, NICEIC, Checkatrade member, Which? Trusted, etc.)
- Facebook page (if exists)
- Address / postcode (if public)

### Data Sources
1. Google Maps — search "[trade] [area]", extract listing data
2. Google Reviews — public, pull star rating + count + best review quotes
3. Facebook pages — many trades run off Facebook only
4. Checkatrade — public profiles with reviews
5. TrustATrader — public profiles
6. Yell.com — basic listing data
7. Company websites — pull services, accreditations, contact details

### Pre-Population Checklist
- [ ] Batch 1: 10 listings (mixed trades, Birmingham/Solihull) 
- [ ] Batch 2: 10 listings (mixed trades, Redditch/Bromsgrove)
- [ ] Batch 3: 10 listings (emergency trades — plumbers, locksmiths, electricians)
- [ ] Batch 4: 10 listings (Warwickshire — Stratford, Henley, Warwick, Leamington)
- [ ] Batch 5: 10 listings (fill gaps — whichever trades/areas are underrepresented)
- [ ] All listings added to `/site/data/trades.json`
- [ ] All category pages generating correctly
- [ ] All location combo pages generating correctly
- [ ] Individual profile pages looking good with real data
- [ ] Emergency landing pages populated

### Output Format
Save raw prospect data to `/prospects/YYYY-MM-DD.md` then convert to `trades.json` entries.

Each `trades.json` entry:
```json
{
  "name": "JB Plumbing",
  "slug": "jb-plumbing",
  "trade": "plumber",
  "owner": "John Brown",
  "phone": "07700 900123",
  "email": "",
  "website": "https://jbplumbing.co.uk",
  "description": "Reliable plumber serving Solihull and surrounding areas. Specialising in emergency repairs, boiler installations, and bathroom fitting.",
  "services": ["Emergency Plumbing", "Boiler Installation", "Bathroom Fitting", "Leak Repairs", "Central Heating"],
  "areas": ["solihull", "birmingham", "redditch"],
  "rating": 4.9,
  "reviewCount": 47,
  "reviews": [
    { "text": "Fantastic service, arrived within the hour...", "author": "Sarah M.", "date": "2 weeks ago", "rating": 5 }
  ],
  "accreditations": ["Gas Safe", "Checkatrade"],
  "featured": false,
  "emergency": true,
  "verified": false,
  "addedDate": "2026-01-31"
}
```

---

## Phase 1: Launch (Week 1)

- [ ] Buy tradehub.directory domain (£26)
- [ ] Deploy site to Vercel
- [ ] Point domain to Vercel
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools (ChatGPT uses Bing)
- [ ] Submit sitemap.xml
- [ ] Verify llms.txt is accessible at tradehub.directory/llms.txt
- [ ] Verify robots.txt is correct
- [ ] Test all pages render correctly
- [ ] Test mobile responsiveness
- [ ] Test page speed (aim for 95+ Lighthouse score)
- [ ] Create Google Business Profile for TradeHub itself
- [ ] Set up basic analytics (Vercel Analytics or Google Analytics)

---

## Phase 2: Content & SEO (Weeks 2-3)

- [ ] Write 5 blog posts targeting common questions:
  - "How to find a reliable plumber in Birmingham (2026 guide)"
  - "Emergency locksmith costs — what to expect in the West Midlands"
  - "Gas Safe register: how to check if your engineer is legit"
  - "What to do when your boiler breaks down — step by step"
  - "Best trades in Solihull — local recommendations"
- [ ] Create emergency landing pages:
  - `/emergency/plumber/[area]`
  - `/emergency/locksmith/[area]`  
  - `/emergency/electrician/[area]`
- [ ] Add FAQ schema to content pages
- [ ] Build location-specific content for top 5 areas
- [ ] Internal linking strategy between blog posts, category pages, and profiles

---

## Phase 3: Growth (Month 2)

- [ ] 50+ listings live
- [ ] All client websites backlinking to directory
- [ ] Directory backlinking to all client sites
- [ ] Start tracking organic search traffic
- [ ] Lead gen test: build one standalone emergency trade page to test AI referral traffic
- [ ] Featured listings concept ready for upsell
- [ ] Begin outreach to trades not yet clients: "You're listed on our directory — want a website too?"

---

## Phase 4: Scale (Month 3+)

- [ ] Admin panel for easy listing management
- [ ] Review aggregation (pull from Google, Facebook, Checkatrade automatically)
- [ ] "TradeHub Verified" badge system
- [ ] Real-time availability indicators
- [ ] Contact form tracking per listing (prove lead generation to trades)
- [ ] Expand to adjacent areas (Wolverhampton, Coventry, Worcester)
- [ ] Consider hiring VA for prospect research at scale
