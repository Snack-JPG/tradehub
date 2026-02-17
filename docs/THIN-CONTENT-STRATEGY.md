# TradeHub Thin Content Strategy

## Problem Analysis

### Current State
- **840 total tradespeople** across 22 trade categories and 16 locations
- **352 location+trade combinations** in sitemap
- **195+ pages with only 1-2 listings** (thin content)

### Examples of Thin Pages
```
Alcester Carpenters: 1 tradesperson ❌
Birmingham B1 2LP Skip Hire: 1 tradesperson ❌
Banbury Vehicle Recovery: 4 tradespeople ⚠️
```

### SEO Risk
Google's **Panda algorithm** specifically targets thin content:
- Pages with < 5 substantial listings = **high risk**
- Pages with 1-2 listings = **very high risk** of ranking penalty
- Can affect entire domain authority

---

## Distribution Analysis

### Trade Types by Count
| Trade | Count | Status |
|-------|-------|--------|
| Vehicle Recovery | 127 | ✅ Healthy |
| Plumbers | 78 | ✅ Healthy |
| Electricians | 73 | ✅ Healthy |
| Landscapers | 53 | ✅ Healthy |
| Gas Engineers | 50 | ✅ Healthy |
| Roofers | 48 | ✅ Healthy |
| Locksmiths | 43 | ✅ Healthy |
| Painters | 38 | ⚠️ Marginal |
| Tree Surgeons | 37 | ⚠️ Marginal |
| Mobile Tyre Fitting | 32 | ⚠️ Marginal |
| Builders | 28 | ⚠️ Marginal |
| Appliance Repair | 28 | ⚠️ Marginal |
| Pest Control | 27 | ⚠️ Marginal |
| Fencing | 26 | ⚠️ Marginal |
| Emergency Glaziers | 26 | ⚠️ Marginal |
| Plasterers | 23 | ⚠️ Marginal |
| Drainage | 20 | ❌ Thin |
| Tilers | 19 | ❌ Thin |
| Garage Door Repair | 19 | ❌ Thin |
| Carpenters | 16 | ❌ Thin |
| Skip Hire | 15 | ❌ Thin |
| Handymen | 14 | ❌ Thin |

### Location+Trade Combinations
When combining location + trade type, most pages have 1-3 listings.

**Example: Birmingham Builders**
- Only 28 builders total
- Spread across 50+ Birmingham postcodes
- Average: < 1 builder per postcode = **very thin pages**

---

## Solutions Implemented

### ✅ 1. Homepage Limit (Done)
**Problem**: Showing 840 featured trades on homepage
**Solution**: Show only top 10, add "Browse All" button

**Benefits**:
- Faster page load
- Better user experience
- Showcases best tradespeople

### ✅ 2. Browse All Page (Done)
**Location**: `/browse`

**Features**:
- Search by name/service
- Filter by trade type
- Filter by location
- Sort by rating/reviews/recent
- Shows total count
- Active filter chips

**Benefits**:
- Central hub for all 840 tradespeople
- User can self-filter
- No thin content (all listings on one page)

### 🔄 3. Thin Page Detection (Added to lib/trades.ts)

**New Helper Functions**:
```typescript
MIN_LISTINGS_THRESHOLD = 5
hasEnoughListings(count: number): boolean
getTradeCount(category?, location?): number
getRelatedCategories(category, limit): Category[]
getNearbyLocations(location, limit): Location[]
```

---

## Recommended Actions

### Priority 1: Fix Thin Category Pages ⚠️

**Current Issue**: Categories with < 30 listings create thin location pages

**Solution Options**:

#### Option A: Don't Create Sub-Pages
- Only create location pages if count > 5
- Redirect thin combos to parent category
- Example: "Alcester Carpenters" (1 person) → "Carpenters West Midlands"

```typescript
// In [trade]/[location]/page.tsx
const trades = getTradesByCategoryAndLocation(categorySlug, locationName);
if (!hasEnoughListings(trades.length)) {
  redirect(`/${categorySlug}`); // Redirect to category page
}
```

#### Option B: Bulk Up with Related Content
For thin pages, add:
- **Hiring guide** (auto-generated from category data)
- **Related trades** section
- **Nearby locations** section
- **FAQs** (from faqs.json)

```tsx
{trades.length < 5 && (
  <>
    <RelatedTradesSection category={category} />
    <NearbyLocationsSection location={location} />
    <HiringGuideSection category={category} />
  </>
)}
```

**Recommendation**: **Use Option B** (bulk up content)
- Better for SEO (keeps pages indexed)
- Better UX (users get helpful info)
- Shows we're comprehensive

---

### Priority 2: Group Micro-Locations 🎯

**Current Issue**: Too granular postcodes (Birmingham B1 2LP)

**Solution**: Group by area code

**Examples**:
- ❌ Birmingham B1 2LP, B1 3EG, B1 4TR (3 thin pages)
- ✅ Birmingham B1 (1 healthy page)

**Implementation**:
1. Add `area_code` field to location data
2. Create area-based routes: `/plumbers/birmingham-b1`
3. Update sitemap to use area codes for thin categories

**Benefits**:
- Fewer pages, more listings per page
- Still location-specific
- Better SEO

---

### Priority 3: Multi-Trade Support 🔧

**Current Issue**: One tradesperson = one trade_type

**Many tradespeople do multiple trades**:
- Plumber + Gas Engineer
- Builder + Carpenter
- Electrician + Appliance Repair

**Solution**: Add `trade_types: string[]` field

**Schema Update**:
```json
{
  "name": "John Smith Plumbing & Heating",
  "slug": "john-smith-plumbing-heating",
  "trade_types": ["plumbers", "gas-engineers", "heating"],  // NEW
  "primary_trade": "plumbers",  // NEW
  ...
}
```

**Benefits**:
- One person → multiple categories
- Bulks up thin categories
- More accurate representation
- Better search results

**Implementation**:
1. Update schema
2. Migrate existing data (set `trade_types: [trade_type]`)
3. Update filters to check array
4. Show "Also does:" badges on cards

---

### Priority 4: Dynamic Sitemap Generation 🗺️

**Current Issue**: Generating pages for all combos, even thin ones

**Solution**: Generate sitemap dynamically based on threshold

```typescript
// In sitemap.ts
const validCombinations = [];

for (const category of categories) {
  for (const location of locations) {
    const count = getTradeCount(category.slug, location.name);

    if (hasEnoughListings(count)) {
      validCombinations.push({
        url: `/${category.slug}/${location.slug}`,
        lastModified: new Date(),
      });
    }
  }
}
```

**Benefits**:
- No thin pages in sitemap
- Google won't index low-value pages
- Better crawl budget usage

---

## Content Bulking Strategies

### For Pages with 3-5 Listings (Marginal)

Add **one** of these sections:

1. **Why Hire in [Location]** (100-150 words)
   - Auto-generated from location data
   - Local advantages, area info

2. **What to Look For** (150-200 words)
   - From hiring guides data
   - Category-specific checklist

3. **Related Services** (visual section)
   - Show 3-4 related trade cards
   - "You might also need..."

### For Pages with 1-2 Listings (Thin)

Add **multiple** sections:

1. **Hiring Guide** (300+ words)
   - Full guide from hiring-guides.json
   - Category-specific advice

2. **FAQs** (200+ words)
   - 4-5 FAQs from faqs.json
   - Category + location specific

3. **Related Trades** (visual)
   - 6 cards from related categories

4. **Nearby Locations** (visual)
   - 4-6 cards from same county

5. **About [Trade] in [Location]** (200+ words)
   - Industry overview
   - Local demand
   - Typical costs

**Result**: Thin page (500 words) → Substantial page (1000+ words)

---

## Implementation Priority

### Week 1 (Immediate)
- ✅ Limit homepage to top 10
- ✅ Create /browse page with filters
- ✅ Add thin page detection helpers

### Week 2 (High Priority)
- [ ] Implement bulk-up strategy for thin pages
- [ ] Add related trades section component
- [ ] Add nearby locations section component
- [ ] Add hiring guide component

### Week 3 (Medium Priority)
- [ ] Group micro-locations into area codes
- [ ] Update sitemap to skip thin combos
- [ ] Add multi-trade support to schema

### Week 4 (Optimization)
- [ ] Migrate multi-trade data
- [ ] A/B test thin page improvements
- [ ] Monitor Google Search Console for thin content flags

---

## Success Metrics

### Before
- 352 pages total
- 195+ pages with < 5 listings (55% thin)
- Average listings per page: 2.4

### Target After Implementation
- 150-200 pages total (only healthy combos)
- 0 pages with < 5 listings (0% thin)
- Average listings per page: 8+
- Average page word count: 800+ words

---

## Example: Before & After

### Before: "Alcester Carpenters"
```
❌ 1 listing
❌ 200 words total
❌ High bounce rate
❌ Thin content penalty risk
```

### After: "Carpenters in Worcestershire"
```
✅ 16 listings (grouped area)
✅ 1200 words (guide + FAQs + related)
✅ Better engagement
✅ No SEO penalty
```

---

## Next Steps

1. **Review this strategy** - confirm approach
2. **Prioritize fixes** - which solution first?
3. **Update schema** - add multi-trade support?
4. **Implement bulking** - add content sections

**Recommendation**: Start with **Option B (bulk up)** + **multi-trade support**. This gives best ROI with minimal disruption.
