# TradeHub Review System — Build Plan

## Overview
Post-job review collection system that tradespeople give to customers. Simple link/QR → leave a review → goes live on their TradeHub listing.

## User Flow

### Customer Journey
1. Tradesperson finishes job, hands customer a card / texts them a link
2. Customer visits `tradehub.uk/review/[slug]` (e.g. `/review/jack-the-plumber`)
3. Sees: tradesperson name, their photo/logo, "How was your experience?"
4. Fills in: star rating (1-5), name (first name only fine), short review text
5. Submits → thank you page with "Also leave a Google review?" link (helps the tradesperson's Google ranking too)
6. Review saved and appears on the tradesperson's listing page

### Tradesperson Journey
1. Austin gives them their review link + QR code during onboarding
2. They text/give it to customers after each job
3. Reviews accumulate on their TradeHub listing automatically
4. They can see their reviews on their listing page

## Technical Implementation

### 1. Review Submission Page — `/review/[slug]`
- **Route:** `app/review/[slug]/page.tsx`
- **Dynamic:** looks up tradesperson from `trades.json` by slug
- **UI:**
  - Clean, mobile-first (customers will open on phone)
  - Tradesperson name + rating at top
  - Star rating selector (tap stars, 1-5)
  - "Your name" input (text, optional-ish — "First name is fine")
  - "How was your experience?" textarea (min 20 chars, max 500)
  - Submit button
  - No login, no signup, no friction
- **Validation:** Must select rating, review text min 20 chars
- **404** if slug doesn't match any tradesperson

### 2. Review Storage
- **File:** `data/reviews.json` — separate from trades.json
- **Format:**
```json
{
  "jack-the-plumber": [
    {
      "id": "r_abc123",
      "author": "Sarah",
      "rating": 5,
      "text": "Jack was brilliant, fixed our leaking tap in 20 minutes.",
      "date": "2026-01-31",
      "source": "tradehub",
      "approved": true
    }
  ]
}
```
- Reviews keyed by tradesperson slug
- `source: "tradehub"` distinguishes from Google-scraped reviews
- `approved: true` by default (can add moderation later if spam becomes an issue)

### 3. API Route — `/api/reviews`
- **Route:** `app/api/reviews/route.ts`
- **POST** body: `{ slug, author, rating, text }`
- **Validation:**
  - slug must match existing tradesperson
  - rating must be 1-5 integer
  - text must be 20-500 chars
  - author must be 1-50 chars
  - Basic rate limiting: max 3 reviews per IP per hour (simple in-memory map)
  - Basic spam check: reject if text contains URLs
- **On success:**
  - Generate review ID (`r_` + random 8 chars)
  - Append to `data/reviews.json` under the slug key
  - Return 200 with success message
- **On failure:** Return 400 with error message

### 4. Display Reviews on Listing Page
- **Modify:** `app/trades/[slug]/page.tsx`
- **Load** both `trades.json` reviews AND `reviews.json` reviews for the slug
- **Merge and sort** by date descending
- **Distinguish visually:**
  - Google reviews: show as-is (existing)
  - TradeHub reviews: show with a small "✓ Verified on TradeHub" badge
- **Update review count** display to include both sources

### 5. Thank You Page
- After submission, show:
  - "Thanks [name]! Your review has been published."
  - "Help [tradesperson] even more — leave a Google review too"
  - Button linking to their Google Maps URL (from trades.json `google_maps_url`)
  - Link back to the tradesperson's TradeHub listing

### 6. QR Code / Review Link Generation
- **Add to listing data display** (or a simple utility):
  - Each tradesperson's review link: `https://tradehub.uk/review/[slug]`
  - QR code generation: use a simple QR library or even just link to `https://api.qrserver.com/v1/create-qr-code/?data=https://tradehub.uk/review/[slug]&size=300x300`
- **Future:** Print-ready review cards with QR code + tradesperson name

## File Changes Summary

### New Files:
- `app/review/[slug]/page.tsx` — Review submission page
- `app/api/reviews/route.ts` — Review submission API
- `data/reviews.json` — Review storage (start with `{}`)
- `components/StarRating.tsx` — Interactive star rating input component
- `components/ReviewBadge.tsx` — "Verified on TradeHub" badge

### Modified Files:
- `app/trades/[slug]/page.tsx` — Merge reviews from both sources
- `lib/trades.ts` — Add `getReviewsBySlug()` function to load from reviews.json

## Design Notes
- Mobile-first — 90% of customers will open this on their phone
- Minimal fields — don't ask for email, phone, or anything unnecessary
- Fast — should load instantly, submit instantly
- Friendly — warm tone, not corporate
- The Google review redirect on thank-you page is a value-add for the tradesperson (helps their Google ranking AND our credibility)

## Not Building Yet (Future)
- Admin dashboard to moderate reviews
- Email notifications to tradesperson when they get a review
- Photo uploads with reviews
- Review response from tradesperson
- Print-ready QR cards (PDF generation)
- SMS follow-up sequences
