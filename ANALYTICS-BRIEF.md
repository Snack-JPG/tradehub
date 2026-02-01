# TradeHub Analytics — Claude Code Brief

## Overview

Build a lightweight, privacy-first analytics system that tracks lead-generating events on client websites and TradeHub directory pages. The goal: quantify how many leads each client gets so we can prove ROI and upsell.

## Architecture

### 1. Tracking Snippet (`tradehub-analytics.js`)

A single lightweight JS file (~2KB max) that gets dropped into every client website template. No cookies, no GDPR consent needed — anonymous event counting only.

**Location:** Host on `tradehub.directory/t.js` (short URL, fast CDN)

**Events to track:**
- `phone_tap` — click/tap on any `tel:` link
- `whatsapp_tap` — click/tap on WhatsApp button/link
- `form_submit` — contact form submission
- `directions_tap` — click on Google Maps / "Get Directions" link
- `email_tap` — click on any `mailto:` link
- `page_view` — page load (with referrer, device type, path)

**Data captured per event (no PII):**
```json
{
  "site_id": "mjb-electrical",     // client identifier
  "event": "phone_tap",            // event type
  "ts": 1706803200,                // unix timestamp
  "ref": "tradehub.directory",     // referrer domain (stripped to domain only)
  "src": "organic",                // source: organic | tradehub | direct | social | paid
  "device": "mobile",              // mobile | desktop | tablet
  "path": "/",                     // page path
  "ua_class": "ios"                // broad UA class: ios | android | windows | mac | other
}
```

**How it identifies links to track:**
- `tel:` links → `phone_tap`
- Links containing `wa.me` or `whatsapp` → `whatsapp_tap`
- Forms with `type="submit"` → `form_submit`
- Links containing `maps.google` or `directions` → `directions_tap`
- `mailto:` links → `email_tap`
- Automatic `page_view` on load

**Source detection from referrer:**
- `tradehub.directory` → `tradehub`
- Google/Bing/DuckDuckGo → `organic`
- Facebook/Instagram/TikTok/Twitter → `social`
- No referrer → `direct`
- UTM params override if present (`?utm_source=tradehub`)

**Implementation notes:**
- Self-executing IIFE, no global pollution
- `navigator.sendBeacon()` for fire-and-forget (doesn't slow page)
- Fallback to `fetch()` with `keepalive: true`
- Site ID passed via data attribute: `<script src="https://tradehub.directory/t.js" data-site="mjb-electrical"></script>`
- Must work on all client sites (static HTML, Next.js, anything)
- No external dependencies
- Debounce duplicate events (same event + path within 5 seconds)

### 2. Ingest API

**Endpoint:** `POST https://tradehub.directory/api/events`

**Tech:** Next.js API route (already a Next.js site)

**What it does:**
- Receives event payloads from the tracking snippet
- Validates `site_id` against known clients
- Stores events in a lightweight database
- Rate limit: 100 events/min per site_id (prevent abuse)
- CORS: allow all origins (snippet runs on client domains)

**Storage options (pick simplest):**
- SQLite via `better-sqlite3` (simplest, file-based, works on Vercel with caveats)
- Or: Vercel KV / Upstash Redis (serverless-friendly, cheap)
- Or: JSON append log per client per month (literally just append to files) — simplest MVP

**Recommended for MVP:** Upstash Redis or a simple Postgres on Vercel (free tier). Each event is tiny.

**Schema (if SQL):**
```sql
CREATE TABLE events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  site_id TEXT NOT NULL,
  event TEXT NOT NULL,
  ts INTEGER NOT NULL,
  ref TEXT,
  src TEXT,
  device TEXT,
  path TEXT,
  ua_class TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_site_event ON events(site_id, event, ts);
```

### 3. TradeHub Directory Outbound Click Tracking

On the TradeHub directory itself, track every outbound click to a client's website or phone number.

**Events:**
- `directory_click_website` — clicked "Visit Website" on a listing
- `directory_click_phone` — clicked phone number on a listing  
- `directory_click_whatsapp` — clicked WhatsApp on a listing
- `directory_view_profile` — viewed a tradesperson's profile page

These are tracked server-side or via the same JS approach on TradeHub pages. Same events table, `site_id` = the tradesperson's slug.

### 4. Dashboard Page

**Route:** `https://tradehub.directory/dashboard/[site-id]`

**Auth:** Simple token-based for now. Each client gets a unique URL with a token: `tradehub.directory/dashboard/mjb-electrical?token=abc123`. No login system needed for MVP.

**What it shows:**

**Header:**
- Client business name
- "Your website analytics for [month]"
- Period selector (this month / last month / last 90 days)

**Key Metrics (big numbers):**
- 📞 Phone Taps: 38
- 💬 WhatsApp Taps: 12
- 📧 Form Submissions: 4
- 👀 Page Views: 340
- 📍 Direction Clicks: 8
- **Total Leads: 54** (phone + whatsapp + form + email)

**Lead Value Calculator:**
- "What's your average job worth?" input field (saved per client)
- Auto-calculates: "Estimated revenue generated: 54 leads × 40% close rate × £150 avg = **£3,240**"
- "Your TradeHub subscription costs £30/month. **That's a 108x return.**"

**Traffic Sources Chart (simple bar):**
- From TradeHub directory: 67 visits
- From Google: 180 visits
- Direct: 58 visits
- Social: 35 visits

**Daily/Weekly Trend:**
- Simple line chart showing lead events over time
- Shows growth trajectory

**Device Split:**
- Mobile: 78%
- Desktop: 18%
- Tablet: 4%

**Design:** Match TradeHub's existing design system. Clean, simple, no clutter. These are tradespeople — they want to see big numbers going up, not complicated charts.

### 5. Admin Dashboard

**Route:** `https://tradehub.directory/admin/analytics`

**Auth:** Password protected (Austin only)

**What it shows:**
- All clients in a table with their key metrics
- Sort by: total leads, phone taps, page views
- Flag clients with low activity (need attention)
- Flag clients with high activity (upsell candidates)
- Export to CSV
- Total leads generated across all clients (the impressive number for pitching new clients)

### 6. Monthly Report Email (Future)

Not for MVP, but design with this in mind. Eventually auto-send each client a monthly email:
- "Your TradeHub Report — January 2026"
- Key numbers
- Comparison to previous month
- "Want more leads? Talk to us about SEO"

## Integration with Client Website Templates

The tracking snippet needs to be baked into the website generator. When a new client site is generated:

1. Add the script tag with the correct `data-site` attribute
2. Generate a dashboard token
3. Store both in the client record

**In the website templates (all of them):**
```html
<!-- TradeHub Analytics -->
<script src="https://tradehub.directory/t.js" data-site="CLIENT_SLUG" defer></script>
```

That's it. One line. Works everywhere.

## File Structure

```
site/
  app/
    api/
      events/
        route.ts          # Ingest endpoint
    dashboard/
      [siteId]/
        page.tsx          # Client dashboard
    admin/
      analytics/
        page.tsx          # Admin overview
  components/
    analytics/
      MetricCard.tsx      # Big number display
      LeadChart.tsx       # Simple trend chart
      SourceBreakdown.tsx # Traffic sources
      DeviceSplit.tsx     # Device breakdown
      ROICalculator.tsx   # Revenue calculator
  lib/
    analytics.ts          # DB queries and helpers
    tracking.ts           # Event validation
  public/
    t.js                  # The tracking snippet (served from /t.js)
  data/
    clients.json          # Add dashboard_token field per client
```

## Privacy & Legal

- **No cookies** — no consent banner needed
- **No PII** — no IP addresses, no user IDs, no fingerprinting
- **Anonymous aggregate counts** — GDPR-friendly
- **Referrer stripped to domain** — no full URLs stored
- **No third-party sharing** — data stays on TradeHub

## Success Criteria

1. Snippet loads in <1KB, doesn't affect page speed
2. Events fire reliably on mobile (where 80% of traffic is)
3. Dashboard loads fast and looks clean
4. A tradesperson can glance at it and instantly understand "I got 38 calls from my website this month"
5. Austin can see all clients' performance in one admin view
6. The ROI calculator makes renewals and upsells a no-brainer

## Tech Stack

- Next.js (already using)
- Tailwind CSS (already using)
- Database: Vercel Postgres or Upstash Redis (free tier)
- Charts: Recharts or Chart.js (lightweight)
- No auth library — just URL tokens for clients, password for admin
