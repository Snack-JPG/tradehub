# TradeHub — Competitive Analysis & SEO Opportunities

## 1. What Checkatrade Does Well (That We Don't Have)

### ✅ Strong Features They Have

#### A. **Quote Request System**
- **What**: Users fill out a form, get 3 quotes from verified trades
- **Why it works**: Frictionless lead generation, trades pay for leads
- **Our status**: ❌ Don't have this
- **Implementation**: Medium priority, would need lead routing system

#### B. **Tradesperson Profiles with Badges**
- **What**: Detailed profile pages with skills, insurance, certifications
- **Why it works**: Trust signals, detailed portfolios
- **Our status**: ⚠️ Basic profiles only
- **Recommendation**: Add certifications, insurance badges, skills list

#### C. **Work Portfolio/Photos**
- **What**: Tradespeople upload before/after photos of jobs
- **Why it works**: Visual proof of quality
- **Our status**: ❌ Don't have this
- **Recommendation**: HIGH PRIORITY - add photo galleries to profiles

#### D. **Verified Reviews System**
- **What**: Only customers who've paid for a job can review
- **Why it works**: Prevents fake reviews, high trust
- **Our status**: ⚠️ We show scraped Google reviews
- **Recommendation**: Add TradeHub-native review system (see section 2)

#### E. **Average Job Cost Display**
- **What**: Shows typical price ranges for services
- **Why it works**: Helps users budget, reduces time-wasters
- **Our status**: ❌ Don't have this
- **Recommendation**: Add "Typical cost: £150-300" to service listings

#### F. **Tradesperson Response Rate**
- **What**: "Responds within 2 hours" badges
- **Why it works**: Sets expectations, highlights responsive trades
- **Our status**: ❌ Don't have this
- **Recommendation**: Track response times once we have messaging

#### G. **Work Guarantee/Insurance Backed**
- **What**: Checkatrade backs work with insurance up to £1,000
- **Why it works**: Huge trust signal
- **Our status**: ❌ Don't have this
- **Recommendation**: Future - requires insurance partnerships

### ❌ Weak Points of Checkatrade (Our Advantages)

#### A. **Dated UI** (2015-era design)
- **Our advantage**: ✅ Modern, premium UI we just built

#### B. **Cluttered Pages** (too many CTAs, ads)
- **Our advantage**: ✅ Clean, focused design

#### C. **Heavy Pages** (slow load times)
- **Our advantage**: ✅ Fast Next.js static generation

#### D. **Generic Stock Photos**
- **Our advantage**: ✅ Can implement better imagery

#### E. **Poor Mobile Experience**
- **Our advantage**: ✅ Mobile-first design

#### F. **Complex Navigation**
- **Our advantage**: ✅ Simpler, clearer paths

---

## 2. Review Forwarding to Google Business

### Can We Forward Reviews to Google?

**Short Answer**: ❌ **No, this is not possible.**

**Why Not**:
- Google Business Profile (GBP) API is **read-only** for reviews
- Only the business owner can post responses
- No API exists to programmatically create reviews
- Google explicitly prohibits review gating/solicitation
- Reviews must be submitted directly via Google's interface

### What We CAN Do Instead

#### Option A: Native TradeHub Reviews ✅ RECOMMENDED
```
User reviews tradesperson on TradeHub
  ↓
We verify they contacted the tradesperson
  ↓
Review appears on tradesperson's TradeHub profile
  ↓
(Separately) Encourage user to also review on Google
```

**Implementation**:
1. Add review form to `/review/[slug]` page
2. Email verification (user must have contacted trade)
3. Store in `reviews.json` with `source: "tradehub"`
4. After submission, show: "Thanks! Also leave a Google review [link]"

**Benefits**:
- ✅ We control quality
- ✅ Can prevent spam
- ✅ Shows engagement on our platform
- ✅ Complements Google reviews

#### Option B: Google Review Widget (Embed)
- Show Google reviews on our site (already doing this)
- Add "Write a Review" button that opens Google directly
- Track clicks to Google review page

#### Option C: Review Funnel
```
TradeHub review submitted
  ↓
Thank you page
  ↓
"Love this tradesperson? Share on Google too!"
  ↓
Direct link to Google review form
```

**Best Practice**: Dual review system
1. Collect reviews on TradeHub (our platform, our data)
2. Encourage Google reviews separately (for tradesperson's SEO)
3. Display both on our site

---

## 3. Low-Hanging Fruit We're Missing

### 🍎 Priority 1 - Quick Wins (1-2 days each)

#### A. Structured Data (Schema.org) ⚠️ PARTIAL
**Current**: Only on blog posts
**Missing**: Trade profiles, local business schema

**Add to trade profile pages**:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ABC Plumbing",
  "image": "...",
  "telephone": "0121 XXX XXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Birmingham",
    "addressRegion": "West Midlands",
    "postalCode": "B1 1AA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "52.4862",
    "longitude": "-1.8904"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "42"
  }
}
```

**Impact**: Rich snippets in Google, better local SEO

---

#### B. Open Graph Images ❌ MISSING
**Current**: No social media preview images
**Missing**: og:image for sharing

**Implementation**:
```tsx
export const metadata = {
  openGraph: {
    title: 'Find Plumbers in Birmingham',
    description: '...',
    images: ['/og-image-plumbers-birmingham.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '...',
    images: ['/og-image.jpg'],
  }
}
```

**Impact**: Better social shares, professional look

---

#### C. Breadcrumb Navigation ⚠️ PARTIAL
**Current**: Only on blog
**Missing**: On category and location pages

**Example**:
```
Home > Plumbers > Birmingham > ABC Plumbing
```

**Impact**: Better UX, better SEO (breadcrumb schema)

---

#### D. Meta Descriptions ⚠️ GENERIC
**Current**: Generic sitewide description
**Missing**: Unique per page

**Need unique descriptions for**:
- Category pages: "Find 78 trusted plumbers in the West Midlands..."
- Location pages: "23 verified Birmingham plumbers with reviews..."
- Trade profiles: "ABC Plumbing - 4.8 stars, 42 reviews..."

**Impact**: Better CTR from search results

---

#### E. Canonical URLs ❌ MISSING
**Current**: Not set
**Risk**: Duplicate content issues

**Implementation**:
```tsx
export const metadata = {
  alternates: {
    canonical: 'https://tradehub.directory/plumbers/birmingham',
  },
}
```

**Impact**: Prevents duplicate content penalties

---

#### F. Alt Text on Images ❌ MISSING
**Current**: No images on trade profiles
**Future**: When we add photos, need alt text

**Example**:
```tsx
<img
  src="/abc-plumbing-bathroom.jpg"
  alt="ABC Plumbing bathroom renovation in Birmingham"
/>
```

**Impact**: Image SEO, accessibility

---

### 🍎 Priority 2 - High Value (3-5 days each)

#### G. Internal Linking Strategy ⚠️ WEAK
**Current**: Basic navigation only
**Missing**: Contextual internal links

**Add**:
- Related trades section ("Need an electrician too?")
- Nearby locations ("Also serving Solihull")
- Blog posts linking to relevant categories
- "Popular in your area" sidebar

**Impact**: Better crawlability, time on site

---

#### H. FAQ Schema ✅ HAVE DATA
**Current**: Have FAQ content in faqs.json
**Missing**: Schema markup

**Implementation**:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How much does a plumber cost in Birmingham?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "..."
    }
  }]
}
```

**Impact**: FAQ rich snippets in Google

---

#### I. Load Time Optimization ⚠️ NEEDS TESTING
**Current**: Static generation (good)
**Potential issues**: 2000 listings in trades.json

**Optimize**:
- Lazy load trade cards below fold
- Image optimization (add `next/image`)
- Code splitting per route
- Preconnect to Google Fonts

**Target**:
- Mobile: < 3s LCP
- Desktop: < 1.5s LCP

---

#### J. Video Content ❌ MISSING
**Opportunity**: How-to videos, hiring guides

**Ideas**:
- "How to hire a plumber" (embed YouTube)
- Tradesperson testimonials
- Service explainer videos

**Impact**: Time on site, engagement signals

---

### 🍎 Priority 3 - Nice to Have (1+ week each)

#### K. Location Pages with Local Content
**Current**: Just listings
**Add**:
- "About [Trade] in [Location]"
- Local statistics
- Common projects in area
- Neighborhood-specific info

**Example**: "Plumbers in Birmingham"
→ Add section on Birmingham water quality, common pipe issues, local regulations

**Impact**: More content, better local SEO

---

#### L. Click-to-Call Tracking
**Current**: Plain phone links
**Add**: Track which listings get calls

**Implementation**:
```tsx
<a
  href="tel:0121XXXXXX"
  onClick={() => trackEvent('phone_tap', trade.slug)}
>
```

**Impact**: Data for featured listings, ROI proof

---

#### M. "Compare Quotes" Feature
**Current**: Single profile view
**Add**: Side-by-side comparison

**Example**: Select 3 plumbers, compare:
- Rating
- Review count
- Services
- Areas served
- Response time

**Impact**: Better UX, longer sessions

---

#### N. Email Newsletters
**Current**: No email capture
**Add**:
- "New tradespeople in your area"
- "Top-rated this month"
- "Home improvement tips"

**Impact**: Returning visitors, brand awareness

---

## 4. SEO Audit - Current Status

### ✅ What's Good

1. **Technical SEO**
   - ✅ HTTPS
   - ✅ Mobile responsive
   - ✅ Fast (static generation)
   - ✅ Sitemap.xml
   - ✅ Robots.txt
   - ✅ Clean URLs

2. **Content**
   - ✅ 2000+ listings (no thin pages!)
   - ✅ 18 blog posts
   - ✅ Unique content per page
   - ✅ Local focus (West Midlands)

3. **User Experience**
   - ✅ Modern design
   - ✅ Clear navigation
   - ✅ Fast load times

### ⚠️ What Needs Work

1. **On-Page SEO**
   - ⚠️ Generic meta descriptions
   - ⚠️ Missing H1 on some pages
   - ⚠️ No breadcrumbs on category pages
   - ⚠️ Missing canonical tags

2. **Structured Data**
   - ⚠️ Only on blog posts
   - ❌ Missing LocalBusiness schema
   - ❌ Missing AggregateRating schema
   - ❌ Missing FAQ schema

3. **Social**
   - ❌ No Open Graph images
   - ❌ No Twitter cards
   - ⚠️ Generic social descriptions

4. **Internal Linking**
   - ⚠️ Weak contextual linking
   - ❌ No related trades
   - ❌ No "popular nearby"

5. **Content**
   - ❌ No photos/portfolios
   - ❌ No cost guides
   - ⚠️ Blog could be more comprehensive

### ❌ Critical Missing Elements

1. **No backlinks strategy**
   - Need: Press releases, partnerships, directories
2. **No local citations**
   - Need: Yell, FreeIndex, Thomson Local
3. **No Google Business Profile**
   - Need: Create GBP for TradeHub itself
4. **No testimonials/trust signals**
   - Need: User testimonials on homepage

---

## 5. Immediate Action Plan

### Week 1 - Critical SEO Fixes

**Day 1-2**: Structured Data
- [ ] Add LocalBusiness schema to trade profiles
- [ ] Add FAQ schema to category pages
- [ ] Add BreadcrumbList schema

**Day 3-4**: Meta & Social
- [ ] Generate unique meta descriptions (script)
- [ ] Create Open Graph images
- [ ] Add canonical URLs

**Day 5**: Internal Linking
- [ ] Add "Related Trades" component
- [ ] Add "Nearby Locations" component
- [ ] Link blog posts to categories

### Week 2 - Content Enhancements

**Day 1-3**: Trade Profiles
- [ ] Add photo upload capability
- [ ] Add certifications/badges field
- [ ] Add "typical costs" section

**Day 4-5**: Reviews System
- [ ] Build `/review/[slug]` form
- [ ] Add TradeHub-native reviews to profiles
- [ ] Email verification flow

### Week 3 - Scraper Fix & Growth

**Day 1**: Fix Scraper Issue
- [ ] **CRITICAL**: Prevent JSON corruption during scraping
  - Use atomic writes (write to temp file, rename)
  - Lock file during scraping
  - Validate JSON after each write

**Day 2-5**: Continue scraping thin categories
- [ ] Target: 430+ new listings

---

## 6. Quick Reference - Missing vs Checkatrade

| Feature | Checkatrade | TradeHub | Priority |
|---------|-------------|----------|----------|
| Quote Request System | ✅ | ❌ | Medium |
| Photo Portfolios | ✅ | ❌ | **HIGH** |
| Verified Reviews | ✅ | ⚠️ Scraped only | **HIGH** |
| Cost Guides | ✅ | ❌ | High |
| Response Badges | ✅ | ❌ | Medium |
| Insurance Backing | ✅ | ❌ | Low (complex) |
| Modern UI | ❌ | ✅ | ✅ Done |
| Fast Load | ❌ | ✅ | ✅ Done |
| Mobile First | ⚠️ | ✅ | ✅ Done |
| Schema Markup | ⚠️ | ⚠️ | **HIGH** |
| Open Graph | ✅ | ❌ | **HIGH** |
| Breadcrumbs | ✅ | ⚠️ | High |
| Internal Links | ⚠️ | ⚠️ | Medium |

---

## 7. Scraper JSON Corruption Fix

### Current Problem
```
Error: Cannot parse JSON: Unexpected end of JSON input
```

**Cause**: Dev server reads trades.json while scraper is writing to it

### Solution: Atomic Writes

```javascript
// In your scraper
const fs = require('fs').promises;
const path = require('path');

async function saveTradesAtomic(trades) {
  const tempFile = path.join(__dirname, 'trades.json.tmp');
  const finalFile = path.join(__dirname, 'trades.json');

  // Write to temp file
  await fs.writeFile(tempFile, JSON.stringify(trades, null, 2));

  // Validate it's valid JSON
  const test = await fs.readFile(tempFile, 'utf-8');
  JSON.parse(test); // Throws if invalid

  // Atomic rename (safe)
  await fs.rename(tempFile, finalFile);
}
```

**Alternative**: Use a database (SQLite, PostgreSQL) instead of JSON files

---

## Summary

### ✅ You're Doing Well
- Modern, fast UI
- 2000+ listings (no thin pages)
- Good technical foundation

### 🔴 Critical Priorities
1. **Fix scraper corruption** (immediate)
2. **Add structured data** (LocalBusiness, reviews)
3. **Add photo portfolios** (huge differentiation)
4. **Native review system** (own your data)
5. **Unique meta descriptions** (better CTR)

### 🟡 High Value, Lower Urgency
- Open Graph images
- Breadcrumbs everywhere
- FAQ schema
- Internal linking strategy
- Cost guides per service

### 🟢 Future Enhancements
- Quote request system
- Insurance backing
- Messaging system
- Email newsletters

**Bottom Line**: You're ~70% there on SEO, but missing some low-hanging fruit that Checkatrade has. The UI is already better than theirs. Focus on: **structured data → photos → native reviews → content depth**.
