# TradeHub Emergency Pivot — Action Plan

**Status**: Ready to execute
**Timeline**: 12 weeks to fully pivot
**Owner**: Austin

---

## Phase 1: Foundation (Weeks 1-2) — CRITICAL PATH

### Week 1: Data Model & Tech Setup

**Priority 1: Add Emergency Fields to Trade Data**
- [ ] Update `data/trades.json` schema:
  ```json
  {
    "emergency": true,
    "emergencyCallout": "£80-£120",
    "emergencyHourly": "£75-£150/hr",
    "responseTime": "<2 hours",
    "availability": "24/7"
  }
  ```
- [ ] Manually tag 20-30 existing trades as emergency-capable
- [ ] Test: Can filter trades by `emergency: true`

**Priority 2: Emergency Badge Component**
- [ ] Create `/components/EmergencyBadge.tsx`:
  ```tsx
  <Badge variant="destructive" className="animate-pulse">
    🚨 24/7 Emergency
  </Badge>
  ```
- [ ] Add to TradeCard component
- [ ] Add to TradeProfile page
- [ ] Test: Emergency badge shows on correct trades

**Priority 3: Call Tracking (Simple Version)**
- [ ] Create `/lib/analytics.ts` function:
  ```typescript
  export function trackEmergencyCall(tradeSlug: string, source: string) {
    // Log to database/file: timestamp, trade, source, category
  }
  ```
- [ ] Update TradeCard phone button to track clicks
- [ ] Create `/data/emergency-calls.json` to log calls
- [ ] Test: Click phone number → logs to file

**Priority 4: Update llms.txt**
- [ ] Read `EMERGENCY-GUIDES-LLMS-TXT-UPDATE.md`
- [ ] Copy emergency section to `/site/public/llms.txt`
- [ ] Add positioning: "Emergency-first trade directory"
- [ ] Add all 6 emergency guide summaries
- [ ] Test: File size under 1MB, valid format

---

### Week 2: Homepage Redesign (Emergency-First)

**Priority 1: New Hero Section**
- [ ] Create `/components/EmergencyHero.tsx`:
  - Red/urgent color scheme
  - "Emergency Tradesperson Needed?" heading
  - Dropdown: Select your emergency
  - Options: Burst pipe, Locked out, Smell gas, Blocked drain, Power cut, Car breakdown
  - CTA: "Find Emergency Help →"
- [ ] Add to `/app/page.tsx` at top (above everything)
- [ ] Mobile-first design (90% of panic searches)
- [ ] Test: Dropdown works, links to correct category filtered by emergency

**Priority 2: Emergency Quick Links Section**
- [ ] Below hero, add 6 large buttons:
  - 💧 Emergency Plumber
  - ⚡ Emergency Electrician
  - 🔐 Emergency Locksmith
  - 🚽 Emergency Drainage
  - 💨 Gas Leak / Gas Engineer
  - 🚗 Vehicle Recovery
- [ ] Each links to: `/[category]?emergency=true`
- [ ] Add 24/7 icons, response times
- [ ] Test: Clicking shows only emergency trades

**Priority 3: How It Works Section**
- [ ] 3-step cards:
  1. "Check Emergency Guide" (link to /emergency/guides)
  2. "Call Local Tradesperson" (direct contact, no wait)
  3. "Get Help in <2 Hours" (speed guarantee)
- [ ] Add comparison: "vs Checkatrade: 12-48 hour quote wait"
- [ ] Test: Links work, messaging is clear

**Priority 4: Demote Planned Work**
- [ ] Move "Browse All Trades" below emergency section
- [ ] Add heading: "Planning a project? We do that too."
- [ ] Keep category grid but secondary visually
- [ ] Test: Emergency = primary, planned = secondary (clear hierarchy)

---

## Phase 2: Emergency Content Blitz (Weeks 3-6)

### Week 3: Integrate Existing Emergency Guides

**Priority 1: Create Emergency Routes**
- [ ] Create `/app/emergency/page.tsx` (landing page)
  - Lists all emergency guides
  - Search/filter by category
  - Quick links to emergency trades
- [ ] Create `/app/emergency/[slug]/page.tsx` (individual guide)
  - Render emergency guide JSON
  - Right sidebar: Related emergency trades
  - "Need help now?" CTA with phone numbers
- [ ] Update navigation: Add "🚨 Emergency Help" menu item
- [ ] Test: All 6 guides render correctly

**Priority 2: Add Emergency Guides to Sitemap**
- [ ] Update `/app/sitemap.ts`:
  ```typescript
  // Add emergency guide pages
  emergencyGuides.forEach((guide) => {
    routes.push({
      url: `${baseUrl}/emergency/${guide.slug}`,
      priority: 0.9, // High priority (emergency content)
      changeFrequency: "monthly"
    });
  });
  ```
- [ ] Test: `/sitemap.xml` includes all emergency guides

**Priority 3: Internal Linking (Emergency Guides ↔ Trades)**
- [ ] Update emergency guide renderer:
  - Add "Find Emergency [Trade]" CTA at top
  - Add "Related Emergency Services" sidebar
  - Link to: `/[category]?emergency=true`
- [ ] Update category pages:
  - Add "Emergency Guide" link if emergency trades exist
  - E.g., on `/plumbers`: Link to "What to do if ceiling is leaking"
- [ ] Test: Click paths work both directions

**Priority 4: Schema Markup for Emergency Guides**
- [ ] All guides already have Article schema in JSON
- [ ] Verify HowTo schema for "IMMEDIATE ACTION" sections:
  ```json
  {
    "@type": "HowTo",
    "name": "What to do if you smell gas",
    "step": [
      {"@type": "HowToStep", "text": "Evacuate immediately"},
      ...
    ]
  }
  ```
- [ ] Test: Google Rich Results Test validates schema

---

### Week 4-6: Write 20 New Emergency Guides

**Schedule: 5 guides/week × 3 weeks = 15 guides (aim for 20)**

**Week 4: Home Emergencies** (5 guides)
- [ ] Boiler won't turn on (winter emergency)
- [ ] No heating in winter
- [ ] Toilet overflowing
- [ ] Fuse box tripped won't reset
- [ ] Washing machine flooded kitchen

**Week 5: Vehicle Emergencies** (5 guides)
- [ ] Oven won't turn off
- [ ] Radiator leak
- [ ] Hot water tank leaking
- [ ] Car won't start
- [ ] Lost car keys

**Week 6: Pest/Property Emergencies** (5-10 guides)
- [ ] Smoke alarm won't stop beeping
- [ ] Window broken/smashed
- [ ] Wasp nest in loft
- [ ] Rats/mice in house
- [ ] Flat tyre on motorway
- [ ] (Stretch: 5 more if time permits)

**Template for each guide** (copy structure from existing 6):
```markdown
1. Title: "[Problem]? What to Do + Costs 2026"
2. IMMEDIATE ACTION box (5-7 steps)
3. Cost table (West Midlands specific)
4. What could be wrong + costs
5. DIY options (if safe)
6. Who to call (link to trades)
7. Prevention tips
8. Real costs examples (Birmingham, Solihull, etc.)
9. Quick summary
10. Word count: 1,000-1,500 words
```

**Efficiency tips**:
- Use AI (Claude/ChatGPT) to draft, you edit for accuracy
- Research real West Midlands pricing (call 2-3 trades for quotes)
- Reuse table/section structures from existing guides
- Batch research: 5 guides on same day, write next day

---

## Phase 3: Trade Filtering & UX (Weeks 5-7)

### Week 5: Emergency Filtering System

**Priority 1: Category Page Filters**
- [ ] Update `/app/[trade]/page.tsx`:
  ```tsx
  <FilterBar>
    <Toggle checked={emergencyOnly} onChange={setEmergencyOnly}>
      🚨 24/7 Emergency Only
    </Toggle>
    <Select value={responseTime}>
      <option>Any response time</option>
      <option>&lt;2 hours</option>
      <option>&lt;4 hours</option>
      <option>&lt;24 hours</option>
    </Select>
  </FilterBar>
  ```
- [ ] Filter trades client-side based on `emergency: true`
- [ ] URL param: `/plumbers?emergency=true`
- [ ] Test: Toggle works, URL updates, results filter correctly

**Priority 2: Emergency-First Sorting**
- [ ] When `emergency=true`, sort results:
  1. Emergency trades with fastest response time
  2. Emergency trades with most reviews
  3. Non-emergency trades (greyed out)
- [ ] Visual separation: Emergency trades in red-bordered cards
- [ ] Test: Emergency trades always show first

**Priority 3: Emergency Callout Info**
- [ ] Update TradeCard to show emergency info when `emergency: true`:
  ```tsx
  {trade.emergency && (
    <div className="mt-2 space-y-1 text-sm">
      <div>⏱️ {trade.responseTime} response</div>
      <div>💰 Call-out: {trade.emergencyCallout}</div>
      <div>💷 Hourly: {trade.emergencyHourly}</div>
    </div>
  )}
  ```
- [ ] Test: Emergency info displays on cards

---

### Week 6: Location Page Emergency Updates

**Priority 1: Add Emergency Section to Location Pages**
- [ ] Update `/app/[trade]/[location]/page.tsx`
- [ ] Add section at top (if emergency trades exist):
  ```tsx
  {emergencyTrades.length > 0 && (
    <section className="bg-red-50 border-2 border-red-600 p-6">
      <h2>🚨 Emergency {category.name} in {location.name}</h2>
      <p>Need immediate help? These trades offer 24/7 emergency service:</p>
      <div className="grid gap-4 mt-4">
        {emergencyTrades.map(trade => (
          <EmergencyTradeCard key={trade.slug} trade={trade} />
        ))}
      </div>
    </section>
  )}
  ```
- [ ] Test: Emergency section shows when emergency trades exist

**Priority 2: Emergency Pricing on Location Pages**
- [ ] Add pricing table:
  ```
  Emergency Service | Average Cost
  Call-out fee      | £80-£120
  Hourly rate       | £75-£150/hr
  Response time     | <2 hours
  ```
- [ ] Pull from emergency trade data (average)
- [ ] Test: Table displays correct data

---

### Week 7: Trade Profile Emergency Enhancements

**Priority 1: Emergency Profile Badge**
- [ ] Update `/app/trades/[slug]/page.tsx`
- [ ] Add large emergency badge if `trade.emergency: true`:
  ```tsx
  {trade.emergency && (
    <div className="bg-red-600 text-white p-4 rounded-lg">
      <h3>🚨 24/7 Emergency Service Available</h3>
      <div className="mt-2 space-y-1">
        <div>Response time: {trade.responseTime}</div>
        <div>Emergency call-out: {trade.emergencyCallout}</div>
        <div>Emergency hourly rate: {trade.emergencyHourly}</div>
      </div>
      <Button className="mt-4">Call Now (Emergency)</Button>
    </div>
  )}
  ```
- [ ] Position above services list (high visibility)
- [ ] Test: Badge shows for emergency trades

**Priority 2: Emergency Call Tracking on Profiles**
- [ ] Update "Call Now" button:
  ```tsx
  <Button
    onClick={() => {
      trackEmergencyCall(trade.slug, 'profile-page-emergency');
      window.location.href = `tel:${trade.phone}`;
    }}
  >
    Call Now: {trade.phone}
  </Button>
  ```
- [ ] Track: timestamp, source, trade slug
- [ ] Test: Click logs to `/data/emergency-calls.json`

---

## Phase 4: SEO Optimization (Weeks 7-10)

### Week 7-8: On-Page SEO for Emergency Pages

**Priority 1: Update Meta Titles/Descriptions**
- [ ] Homepage:
  - Title: "Emergency Tradespeople West Midlands | Help in <2 Hours | TradeHub"
  - Description: "24/7 emergency plumbers, electricians, locksmiths & more. Direct contact, no quote wait. West Midlands emergency trades respond in <2 hours."
- [ ] Category pages with `emergency=true`:
  - Title: "Emergency {Category} {Location} | 24/7 Call-Out | TradeHub"
  - Description: "Need emergency {category} in {location}? Call-out £X-Y. Response in <2 hours. Direct contact. No quote request wait."
- [ ] Emergency guide pages:
  - Already have good meta (from JSON)
  - Verify: Title under 60 chars, description under 155 chars
- [ ] Test: View source, meta tags correct

**Priority 2: Add Emergency Schema**
- [ ] Add WebSite schema with SearchAction to homepage:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://tradehub.directory",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tradehub.directory/search?q={search_term}",
      "query-input": "required name=search_term"
    }
  }
  ```
- [ ] Add Service schema for emergency services:
  ```json
  {
    "@type": "Service",
    "serviceType": "24/7 Emergency Plumber",
    "provider": {"@type": "Organization", "name": "TradeHub"},
    "areaServed": "West Midlands",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://tradehub.directory/plumbers?emergency=true"
    }
  }
  ```
- [ ] Test: Google Rich Results Test validates

**Priority 3: Internal Linking Audit**
- [ ] Emergency guides → Emergency trades ✓ (already done)
- [ ] Homepage → Emergency guides (add to hero dropdown)
- [ ] Category pages → Relevant emergency guide (add banner)
- [ ] Blog posts → Emergency guides (cross-link where relevant)
- [ ] Footer → "Emergency Help" prominent link
- [ ] Test: All internal links work, no 404s

---

### Week 9-10: Featured Snippet Optimization

**Priority 1: Target 5 High-Value Queries**
- [ ] "what to do if locked out"
- [ ] "ceiling leaking water what to do"
- [ ] "smell gas what to do"
- [ ] "emergency plumber cost"
- [ ] "emergency electrician cost"

**Priority 2: Optimize Each Guide for Snippet**
- [ ] Add clear Q&A format at top:
  ```markdown
  ## What to do if you smell gas?

  1. Evacuate immediately
  2. Don't use lights or phone inside
  3. Call 0800 111 999 (FREE gas emergency)
  4. Don't re-enter until safe
  ```
- [ ] Keep answer 40-60 words (snippet ideal length)
- [ ] Use numbered lists (Google prefers these)
- [ ] Add FAQPage schema (already done)
- [ ] Test: Check if snippet appears in Google Search Console

**Priority 3: Table Optimization**
- [ ] Ensure all cost tables are clean HTML tables (not divs)
- [ ] Use proper `<thead>`, `<tbody>` structure
- [ ] Add `<caption>` for context
- [ ] Example:
  ```html
  <table>
    <caption>Emergency Locksmith Costs (West Midlands 2026)</caption>
    <thead>
      <tr>
        <th>Service</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Emergency call-out</td>
        <td>£80-£150</td>
      </tr>
    </tbody>
  </table>
  ```
- [ ] Test: Google extracts table data

---

## Phase 5: Trade Onboarding (Weeks 8-12)

### Week 8: Emergency Trade Outreach (First 20)

**Priority 1: Identify Target Trades**
- [ ] Search Google: "emergency plumber birmingham" (call top 5)
- [ ] Search Google: "emergency electrician solihull" (call top 5)
- [ ] Search Google: "emergency locksmith birmingham" (call top 3)
- [ ] Search Google: "emergency drainage coventry" (call top 3)
- [ ] Search Google: "emergency gas engineer birmingham" (call top 4)
- [ ] Total: 20 emergency trades to contact

**Priority 2: Create Outreach Materials**
- [ ] Email template (see pivot doc)
- [ ] One-pager PDF:
  - "TradeHub Emergency Premium Listing"
  - Benefits: 24/7 badge, priority placement, emergency guides
  - Pricing: FREE 3 months, then £20/month + £12/call
  - Call tracking dashboard (coming soon)
  - QR code to example listing
- [ ] Test: Send to yourself, verify links/formatting

**Priority 3: Outreach Campaign**
- [ ] Day 1: Call 5 trades, pitch verbally, send email follow-up
- [ ] Day 2: Call 5 trades, pitch, send email
- [ ] Day 3: Call 5 trades, pitch, send email
- [ ] Day 4: Call 5 trades, pitch, send email
- [ ] Day 5: Follow up with trades who said "maybe" or "send info"
- [ ] Goal: 10/20 signed up (50% conversion)

**Priority 4: Onboard First 10 Trades**
- [ ] Collect info: Business name, phone, email, areas served, insurance cert
- [ ] Add to `/data/trades.json` with `emergency: true`
- [ ] Verify Gas Safe registration (if plumber/gas engineer)
- [ ] Take profile photo or use logo
- [ ] Add reviews (scrape from Google or ask for testimonials)
- [ ] Send confirmation email: "You're live on TradeHub!"
- [ ] Test: Profile looks good, emergency badge shows

---

### Week 9-10: Scale to 50 Emergency Trades

**Priority 1: Expand to More Locations**
- [ ] Coventry: Find 5 emergency trades
- [ ] Redditch: Find 3 emergency trades
- [ ] Bromsgrove: Find 3 emergency trades
- [ ] Sutton Coldfield: Find 5 emergency trades
- [ ] Solihull: Find 10 emergency trades (high-value area)
- [ ] Walsall/Dudley: Find 4 emergency trades
- [ ] Total: 30 new trades (50 total)

**Priority 2: Add Mobile Mechanics & Tyre Fitters**
- [ ] New categories: Vehicle recovery, mobile mechanic, mobile tyre fitting
- [ ] Find 5 emergency vehicle trades
- [ ] Add to data model
- [ ] Create category pages
- [ ] Link from "Car won't start" / "Run out of fuel" emergency guides

**Priority 3: Email Existing Trades (Non-Emergency)**
- [ ] Send email to existing 5,085 trades:
  ```
  Subject: Offer 24/7 emergency service? Get a free upgrade

  Hi [Name],

  We're launching emergency listings on TradeHub.

  If you offer emergency call-outs, we'll upgrade your listing for FREE for 3 months:
  - 🚨 Emergency badge
  - Priority in emergency searches
  - Listed in our emergency guides (getting 1,000s of views)

  No catch. After 3 months, it's £20/month + £12 per emergency call we send you.

  Interested? Reply with:
  1. Your emergency call-out fee
  2. Your emergency hourly rate
  3. Your typical response time

  Thanks,
  Austin
  ```
- [ ] Track responses, onboard trades who reply
- [ ] Goal: 20 more emergency trades (70 total)

---

### Week 11-12: Dashboard & Analytics (Future-Proofing)

**Priority 1: Simple Call Analytics Dashboard**
- [ ] Create `/app/dashboard/[tradeSlug]/page.tsx`
- [ ] Show data from `/data/emergency-calls.json`:
  - Total calls this month
  - Calls by day (line chart)
  - Calls by source (emergency guide, category page, profile)
  - Average calls per day
- [ ] Add password protection (basic auth)
- [ ] Send login link to emergency premium trades
- [ ] Test: Trades can view their own dashboard

**Priority 2: Billing Prep**
- [ ] Create `/data/emergency-billing.json`:
  ```json
  {
    "tradeSlug": "john-smith-plumbing",
    "month": "2026-02",
    "listingFee": 20,
    "calls": 12,
    "callFee": 12,
    "totalCalls": 144,
    "total": 164,
    "status": "unpaid"
  }
  ```
- [ ] Create monthly billing script (manual for now):
  ```bash
  node scripts/generate-monthly-invoices.js
  ```
- [ ] Generates invoice PDFs from template
- [ ] Test: Can generate invoice for one trade

**Priority 3: Payment Collection (Simple)**
- [ ] For now: Manual invoicing via email
- [ ] Email trades on 1st of month: "Your February invoice: £164"
- [ ] Include PayPal link or bank transfer details
- [ ] Track payments in spreadsheet
- [ ] (Phase 2: Stripe integration for auto-billing)

---

## Phase 6: Marketing & Launch (Weeks 10-12)

### Week 10: Google Search Console Setup

**Priority 1: Submit All Emergency Guides**
- [ ] Google Search Console → URL Inspection
- [ ] Submit all 26 emergency guide URLs for indexing
- [ ] Request immediate crawl (emergency flag)
- [ ] Monitor: Indexed within 1-3 days

**Priority 2: Create Google Business Profile**
- [ ] Visit google.com/business
- [ ] Create listing: "TradeHub"
- [ ] Category: "Business to business service"
- [ ] Add West Midlands service areas
- [ ] Add photos: Logo, office (if you have), team
- [ ] Write description: "Emergency tradesperson directory..."
- [ ] Verify ownership (postcard or phone)
- [ ] Test: Appears in Google Maps

**Priority 3: Local Citations**
- [ ] Submit to Yell.com (£0-£50/year basic listing)
- [ ] Submit to FreeIndex (free)
- [ ] Submit to Thomson Local (free)
- [ ] Submit to Yelp UK (free)
- [ ] Submit to Scoot (free)
- [ ] Goal: 7 local citations for backlinks + local SEO

---

### Week 11: Social Media & Community

**Priority 1: Create Social Accounts**
- [ ] Twitter/X: @TradeHubWM (West Midlands)
- [ ] Facebook Page: TradeHub West Midlands
- [ ] LinkedIn Company Page: TradeHub
- [ ] Instagram: @tradehubdirectory
- [ ] Post bio: "24/7 emergency tradespeople in West Midlands. <2hr response."

**Priority 2: Launch Content**
- [ ] Share all 26 emergency guides on social:
  - "Locked out? Here's what to do + costs" (link to guide)
  - "Smell gas? EVACUATE NOW. Then read this." (link to guide)
  - Post 2-3/day for 2 weeks
- [ ] Share to local Facebook groups:
  - "Birmingham Community"
  - "Solihull Local"
  - "Coventry News"
  - Format: "Thought this might help someone - emergency guide for..."

**Priority 3: Email Existing Trades About Launch**
- [ ] Announce emergency pivot:
  ```
  Subject: TradeHub is now the emergency trade directory

  Hi [Name],

  Big update: TradeHub now focuses on emergency trades.

  We're ranking #1 for emergency searches and sending 100+ calls/month.

  If you offer emergency call-outs, upgrade to Emergency Premium:
  - 🚨 24/7 badge
  - Priority placement
  - £20/month + £12/call (3 months FREE trial)

  Not interested? No worries - your free listing stays active.

  Austin
  ```
- [ ] Track: How many upgrade to emergency premium

---

### Week 12: PR & Outreach

**Priority 1: Local News Pitch**
- [ ] Write press release:
  ```
  TradeHub Launches West Midlands' First Emergency-Only Trade Directory

  [Birmingham, Feb 2026] — TradeHub, a West Midlands trade directory, has pivoted to focus exclusively on emergency tradespeople following a surge in demand for immediate help.

  Unlike traditional directories (Checkatrade, MyBuilder) that use slow quote request systems, TradeHub provides direct contact to 24/7 plumbers, electricians, and locksmiths with <2 hour response times.

  "When your ceiling is leaking at 11pm, you can't wait 2 days for quotes," says founder Austin. "We built this for emergencies."

  The site also publishes free emergency guides covering common crises (locked out, smell gas, blocked drains) with immediate action steps and honest West Midlands pricing.

  TradeHub is free for consumers and lists 70+ vetted emergency trades across Birmingham, Solihull, and Coventry.

  Visit: tradehub.directory/emergency
  ```
- [ ] Send to: Birmingham Mail, Express & Star, Coventry Telegraph
- [ ] Goal: 1-2 articles = 2-5 high-DA backlinks

**Priority 2: Money-Saving Blog Outreach**
- [ ] Email MoneySavingExpert community forum moderators:
  ```
  Subject: Free emergency trade guide for your community

  Hi,

  I run TradeHub, a West Midlands trade directory.

  I noticed lots of forum posts about people getting ripped off by emergency locksmiths (£50 quote → £500 on arrival).

  I wrote a guide on avoiding scams + real costs: [link]

  Free to share with your community if helpful. No paywall, no ads.

  Austin
  ```
- [ ] Similar outreach to: Which?, HotUKDeals, Reddit /r/AskUK
- [ ] Goal: 5-10 backlinks from money-saving communities

**Priority 3: Trade Publication Outreach**
- [ ] Pitch article to trade magazines:
  - "How emergency tradespeople can get more call-outs"
  - "Why quote request systems don't work for emergencies"
- [ ] Target: PlumbingMonthly, Electrical Review, PBC Today
- [ ] Goal: 2-3 backlinks from trade publications

---

## Ongoing Tasks (Post-Launch)

### Weekly

**Content**:
- [ ] Publish 1 new emergency guide/week (aim for 50 total guides by Month 6)
- [ ] Update existing guides with new pricing (quarterly)
- [ ] Monitor Google Search Console: Which guides are ranking? Double down.

**Trades**:
- [ ] Onboard 5-10 new emergency trades/week
- [ ] Check emergency calls data: Are trades responding? Getting jobs?
- [ ] Email trades with call stats: "You received 8 calls this month"

**SEO**:
- [ ] Monitor rankings: Are we climbing for "emergency [trade] [location]"?
- [ ] Build backlinks: 2-3 new backlinks/month (guest posts, PR, local links)
- [ ] Check featured snippets: Did we win any? Optimize losing ones.

---

### Monthly

**Analytics Review**:
- [ ] Google Analytics: Traffic, bounce rate, conversions
- [ ] Google Search Console: Impressions, CTR, average position
- [ ] Emergency call data: How many calls? Which trades converting?
- [ ] Revenue: How much from emergency premium trades?

**Trade Check-In**:
- [ ] Email top 10 trades: "You're our top emergency trades - thank you"
- [ ] Email bottom 10 trades: "Not getting calls? Let's fix your profile"
- [ ] Remove trades who don't respond to calls (quality control)

**Content Refresh**:
- [ ] Update pricing in guides (West Midlands inflation)
- [ ] Add new seasonal content: "Boiler breakdown in winter" (Oct-Feb), "Air con emergency" (Jun-Aug)

---

## Success Milestones

### Month 1
- [ ] 20 emergency trades signed
- [ ] 26 emergency guides published
- [ ] Homepage redesigned (emergency-first)
- [ ] Emergency filtering works
- [ ] 1,000 monthly impressions (Google Search Console)

### Month 3
- [ ] 50 emergency trades signed
- [ ] 5 guides ranking top 10
- [ ] 1 featured snippet won
- [ ] 10,000 monthly impressions
- [ ] £1,500/month revenue

### Month 6
- [ ] 100 emergency trades signed
- [ ] 10 guides ranking top 5
- [ ] 3 featured snippets won
- [ ] 50,000 monthly impressions
- [ ] £5,000/month revenue

### Month 12
- [ ] 150 emergency trades signed
- [ ] Dominate "emergency [trade] [West Midlands]" searches
- [ ] 150,000 monthly impressions
- [ ] £10,000/month revenue
- [ ] Ready to expand to 2nd region (Manchester or Leeds)

---

## Resource Requirements

### Time (Austin)
- **Weeks 1-2**: Full-time (40 hrs/week) — Tech setup, homepage redesign
- **Weeks 3-6**: 30 hrs/week — Content writing (20 guides)
- **Weeks 7-12**: 20 hrs/week — Trade onboarding, SEO, marketing

**Total**: ~300 hours over 12 weeks (part-time sustainable)

### Money
- **Domain/hosting**: £0 (already have)
- **Tools**: £0 (Google Search Console, Analytics free)
- **Local directory listings**: £50 (optional paid upgrades)
- **Stock photos** (if needed): £30 (Unsplash free alternative)
- **Total**: £50-£100 one-time

**No significant capital required.** This is a bootstrapped, organic growth strategy.

---

## Risk Mitigation

### If SEO doesn't work (guides don't rank)
- **Pivot**: Focus on paid ads (Google Ads for "emergency plumber birmingham")
- **Budget**: £500/month test budget (£5-£10 CPC × 50-100 clicks)
- **ROI**: If 10% convert to calls, 5-10 calls × £15 commission = £75-£150 revenue vs £500 spend (break-even)

### If trades don't want to pay per call
- **Pivot**: Flat £30/month emergency premium (no per-call fee)
- **Lower revenue but easier sell**: 100 trades × £30 = £3,000/month (vs £10k+ with per-call)

### If content writing takes too long
- **Pivot**: Use AI to draft (Claude/ChatGPT), you edit for 30 mins/guide
- **Alternative**: Hire freelance writer (£50-£100/guide) if revenue allows

---

## Quick Start Checklist (This Week)

If you only have time for 5 things this week, do these:

1. [ ] **Add emergency fields to 20 existing trades in data/trades.json**
   - Flag as `emergency: true`
   - Add call-out fees, hourly rates, response times
   - Test: Can filter by emergency

2. [ ] **Create EmergencyBadge component**
   - Add to TradeCard
   - Add to homepage hero
   - Test: Badge shows on emergency trades

3. [ ] **Update homepage hero with emergency dropdown**
   - "Emergency Tradesperson Needed?"
   - 6 emergency options
   - Links to filtered category pages

4. [ ] **Update llms.txt with emergency positioning**
   - Add emergency section from EMERGENCY-GUIDES-LLMS-TXT-UPDATE.md
   - Position TradeHub as "emergency-first"

5. [ ] **Call 5 emergency trades, pitch Emergency Premium**
   - Get 2-3 signed up
   - Add to directory with emergency badge
   - Track if they get any calls this week

**If these 5 things work, you've validated the pivot. Go all-in on Phases 1-6.**

---

## Questions? Blockers?

**Technical questions**: Comment in code or ask Claude Code for help implementing
**Business questions**: Document in `/docs/decisions.md` and review weekly
**Stuck on something**: Ship 80% solution, iterate later (speed > perfection for MVP)

**Remember**: The goal is to SHIP, not to perfect. Get emergency listings live, get content published, get trades onboarded. Feedback loop > planning.

Let's go. 🚀
