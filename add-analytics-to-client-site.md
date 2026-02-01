# How to Add Analytics to Client Websites

## Quick Guide

### For Static HTML Sites

Add this line before the closing `</body>` tag in every HTML file:

```html
<!-- TradeHub Analytics -->
<script src="https://tradehub.directory/t.js" data-site="CLIENT_SLUG" defer></script>
```

**Replace `CLIENT_SLUG`** with the client's slug from `trades.json`.

Example for "A.B Plastering & Rendering":
```html
<script src="https://tradehub.directory/t.js" data-site="ab-plastering-rendering" defer></script>
```

### For Next.js Sites

Add to the `<head>` section in `app/layout.tsx`:

```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* TradeHub Analytics */}
        <Script
          src="https://tradehub.directory/t.js"
          data-site="CLIENT_SLUG"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### For React Sites

Add to `public/index.html` before `</body>`:

```html
<!-- TradeHub Analytics -->
<script src="https://tradehub.directory/t.js" data-site="CLIENT_SLUG" defer></script>
```

### For WordPress Sites

Add to `footer.php` or use a plugin like "Insert Headers and Footers":

```html
<!-- TradeHub Analytics -->
<script src="https://tradehub.directory/t.js" data-site="CLIENT_SLUG" defer></script>
```

## Finding the Client Slug

The client slug is in `site/data/trades.json`:

```json
{
  "name": "A.B Plastering & Rendering",
  "slug": "ab-plastering-rendering",  // ← Use this
  ...
}
```

## Example Client Sites

### EKH Painting

If there's a site in `client-sites/ekh-painting/`, add the snippet to:

- `client-sites/ekh-painting/index.html`
- `client-sites/ekh-painting/services.html`
- `client-sites/ekh-painting/contact.html`
- etc.

```html
<!-- Add before </body> in each HTML file -->
<script src="https://tradehub.directory/t.js" data-site="ekh-painting" defer></script>
```

## Verification

After adding the snippet:

1. Open the client's website in a browser
2. Open DevTools → Network tab
3. Refresh the page
4. Look for a request to `/t.js` (should load successfully)
5. Click a phone number or WhatsApp button
6. Look for a POST request to `/api/events` (should return 200 OK)
7. Visit `https://tradehub.directory/dashboard/CLIENT_SLUG` to see analytics

## Troubleshooting

### Script not loading

- Check the URL is correct: `https://tradehub.directory/t.js`
- Check the `data-site` attribute is present and correct
- Make sure the script tag is valid HTML

### Events not tracking

- Check the Network tab for POST requests to `/api/events`
- Check for CORS errors (shouldn't happen, but verify)
- Check rate limiting (max 100 events/min per site)

### Dashboard shows no data

- Wait a few minutes for events to be processed
- Check the site slug matches the one in `trades.json`
- Try clicking around the client site to generate events
- Check the date range in the dashboard (default is "This Month")

## Bulk Addition Script

To add analytics to multiple sites at once, create a script:

```bash
#!/bin/bash

# List of client site directories
SITES=(
  "client-sites/ekh-painting"
  "client-sites/ab-plastering"
  "client-sites/solihull-handyman"
)

# Add snippet to each HTML file
for SITE in "${SITES[@]}"; do
  SLUG=$(basename "$SITE")
  echo "Adding analytics to $SLUG..."

  find "$SITE" -name "*.html" -type f | while read FILE; do
    # Check if snippet already exists
    if ! grep -q "tradehub.directory/t.js" "$FILE"; then
      # Add snippet before </body>
      sed -i.bak "s|</body>|<!-- TradeHub Analytics -->\n<script src=\"https://tradehub.directory/t.js\" data-site=\"$SLUG\" defer></script>\n</body>|" "$FILE"
      echo "  ✓ Added to $FILE"
    else
      echo "  → Already exists in $FILE"
    fi
  done
done

echo "Done!"
```

Save as `add-analytics.sh`, make executable with `chmod +x add-analytics.sh`, then run `./add-analytics.sh`.

## Template Integration

For future client sites, add the snippet to your website templates:

### HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{{CLIENT_NAME}}</title>
</head>
<body>
  <!-- Your website content -->

  <!-- TradeHub Analytics -->
  <script src="https://tradehub.directory/t.js" data-site="{{CLIENT_SLUG}}" defer></script>
</body>
</html>
```

### Next.js Template

In your site generator, include:

```tsx
<Script
  src="https://tradehub.directory/t.js"
  data-site={clientSlug}
  strategy="afterInteractive"
/>
```

This ensures every new client site automatically has analytics tracking.
