# TradeHub Analytics System

## Overview

A lightweight, privacy-first analytics system that tracks lead-generating events on client websites and TradeHub directory pages.

## Features

- **Privacy-First**: No cookies, no PII, GDPR-friendly
- **Lightweight**: <2KB tracking snippet
- **Lead Tracking**: Phone taps, WhatsApp clicks, form submissions, email taps, directions
- **Traffic Source Attribution**: Organic, TradeHub, direct, social, referral
- **Device Breakdown**: Mobile, desktop, tablet
- **ROI Calculator**: Built-in calculator to show value generated
- **Client Dashboard**: Clean, simple analytics for each client
- **Admin Dashboard**: Overview of all clients' performance

## Setup

### 1. Create Analytics Data Directory

```bash
mkdir -p site/data/analytics
```

This directory will store event logs in JSONL format (one file per client per month).

### 2. Add Tracking Snippet to Client Sites

Add this snippet to every client website template (in the `<head>` or before `</body>`):

```html
<!-- TradeHub Analytics -->
<script src="https://tradehub.directory/t.js" data-site="CLIENT_SLUG" defer></script>
```

Replace `CLIENT_SLUG` with the client's slug from `trades.json` (e.g., `ab-plastering-rendering`).

### 3. Deploy

The analytics system is fully integrated into the Next.js app:

- Tracking snippet: `/public/t.js`
- API endpoint: `/app/api/events/route.ts`
- Analytics library: `/lib/analytics.ts`
- Client dashboard: `/app/dashboard/[siteId]/page.tsx`
- Admin dashboard: `/app/admin/analytics/page.tsx`

Simply deploy the Next.js app and the analytics system will be live.

## Usage

### Client Dashboard

Clients can view their analytics at:

```
https://tradehub.directory/dashboard/CLIENT_SLUG
```

Example: `https://tradehub.directory/dashboard/ab-plastering-rendering`

**No password required** - URLs are private but not authenticated (for MVP simplicity).

### Admin Dashboard

Access all clients' analytics at:

```
https://tradehub.directory/admin/analytics?password=tradehub2026
```

Password: `tradehub2026` (change this in `/app/admin/analytics/page.tsx`)

## Tracked Events

### From Client Websites

- `page_view` - Page load
- `phone_tap` - Click on `tel:` link
- `whatsapp_tap` - Click on WhatsApp link (`wa.me` or `whatsapp`)
- `form_submit` - Form submission
- `email_tap` - Click on `mailto:` link
- `directions_tap` - Click on Google Maps link

### From TradeHub Directory

To track clicks from the directory, add these event tracking calls in your directory components:

```typescript
// Example: Track website click
fetch('/api/events', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    site_id: 'CLIENT_SLUG',
    event: 'directory_click_website',
    ts: Math.floor(Date.now() / 1000),
    ref: '',
    src: 'tradehub',
    device: 'desktop',
    path: '/trades/CLIENT_SLUG',
    ua_class: 'other',
  }),
});
```

Events to track from directory:
- `directory_click_website` - Clicked "Visit Website"
- `directory_click_phone` - Clicked phone number
- `directory_click_whatsapp` - Clicked WhatsApp button
- `directory_view_profile` - Viewed profile page

## Data Storage

Events are stored as JSONL files in `site/data/analytics/`:

```
site/data/analytics/
  ab-plastering-rendering-2026-01.jsonl
  ab-plastering-rendering-2026-02.jsonl
  solihull-handyman-2026-01.jsonl
  ...
```

Each line is a JSON event record:

```json
{"site_id":"ab-plastering-rendering","event":"phone_tap","ts":1706803200,"ref":"tradehub.directory","src":"tradehub","device":"mobile","path":"/","ua_class":"ios","id":"1706803200123-abc123","created_at":"2026-02-01T10:00:00.000Z"}
```

## Metrics

### Lead Events (counted in "Total Leads")

- Phone taps
- WhatsApp taps
- Form submissions
- Email taps
- Directory phone clicks
- Directory WhatsApp clicks

### Non-Lead Events

- Page views
- Directions taps
- Directory website clicks
- Directory profile views

## ROI Calculator

The client dashboard includes a calculator that estimates revenue:

```
Estimated Revenue = Total Leads × Close Rate × Average Job Value
ROI = Estimated Revenue / Monthly Subscription Cost
```

Default values:
- Close Rate: 40%
- Average Job Value: £150
- Subscription Cost: £30/month

Clients can adjust these values to see their personalized ROI.

## Privacy & Legal

- **No cookies**: No consent banner needed
- **No PII**: No IP addresses, user IDs, or fingerprinting
- **Anonymous counts**: Only aggregate event counts
- **Domain-level referrers**: Full URLs are stripped to domain only
- **GDPR compliant**: Anonymous statistical data

## Performance

- Tracking snippet: ~2KB gzipped
- Uses `navigator.sendBeacon()` for reliability (works even when page is closing)
- Fallback to `fetch()` with `keepalive: true`
- No impact on page load speed (async, deferred)
- Events are debounced (same event + path within 5 seconds)

## Rate Limiting

- 100 events per minute per site_id
- Prevents abuse and spam
- Simple in-memory store (resets on server restart)

## Future Enhancements

### Short Term
1. Add directory outbound click tracking
2. Export to CSV from admin dashboard
3. Email alerts for low-activity clients
4. Week-over-week comparison

### Long Term
1. Monthly email reports to clients
2. Webhook integration for real-time alerts
3. A/B testing capabilities
4. Custom event tracking
5. Integration with CRM systems

## Troubleshooting

### Events not showing up

1. Check the tracking snippet is loaded: Open browser DevTools → Network tab → look for `t.js`
2. Check events are being sent: Network tab → look for POST to `/api/events`
3. Check CORS: Events from client domains require CORS headers (already configured)
4. Check rate limiting: Max 100 events/minute per site

### Dashboard shows no data

1. Make sure the site_id matches the slug in `trades.json`
2. Check `site/data/analytics/` directory exists and has JSONL files
3. Try a different date range (data might be in a different month)

### Admin dashboard won't load

1. Check the password is correct: `tradehub2026`
2. Include password in URL: `?password=tradehub2026`

## Support

For questions or issues, contact Austin or check the codebase:

- Tracking snippet: `/public/t.js`
- Analytics library: `/lib/analytics.ts`
- API endpoint: `/app/api/events/route.ts`
- Components: `/components/analytics/`
- Dashboards: `/app/dashboard/` and `/app/admin/analytics/`
