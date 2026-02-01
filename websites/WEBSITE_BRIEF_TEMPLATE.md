# TradeHub — Client Website Brief

Use the **frontend-design** skill for this build. Create a distinctive, production-grade single-page website for this tradesperson. Every site should feel unique and bespoke — not templated.

## Business Details

- **Name:** {{BUSINESS_NAME}}
- **Trade:** {{TRADE_TYPE}}
- **Area:** {{PRIMARY_AREA}}
- **Phone:** {{PHONE}}
- **Email:** {{EMAIL}}
- **Address:** {{ADDRESS}}
- **Rating:** {{RATING}}★ ({{REVIEW_COUNT}} reviews)
- **Emergency/24/7:** {{EMERGENCY}}
- **Accreditations:** {{ACCREDITATIONS}}

## Services
{{SERVICES_LIST}}

## Areas Covered
{{AREAS_LIST}}

## Real Customer Reviews
{{REVIEWS}}

## Additional Context
{{NOTES}}

---

## Branding

**Logo/Brand:** {{BRAND_NOTES}}

If logo colours/style are provided, build the ENTIRE colour palette and design language around them. The site should feel like a natural extension of their brand — not a template with their name swapped in. Extract the dominant colours from their logo and use them as the primary accent, with complementary tones for backgrounds and text.

---

## Design Direction

**Audience:** Homeowners and landlords in {{PRIMARY_AREA}} searching Google for a {{TRADE_TYPE}}. They want to see trust signals, reviews, and an easy way to call.

**Vibe:** This is a trade website, not a SaaS landing page. Think bold, confident, professional. The kind of site that makes a tradesman proud and makes a homeowner pick up the phone.

**Reference:** Check `/Users/austin/Desktop/TradeHub/site/hydrogreen/` for the quality bar — dark hero, animated elements, proper typography, gradient accents, responsive design. Match or exceed this level.

**Requirements:**
1. Single `index.html` file with all CSS/JS inline (no external files except Google Fonts)
2. Fully responsive (mobile-first — most customers will find this on their phone)
3. Click-to-call phone number prominent throughout
4. WhatsApp floating button (link to `https://wa.me/44{{PHONE_CLEAN}}`)
5. Use REAL review quotes from above — don't invent fake ones
6. SEO meta tags + JSON-LD structured data (LocalBusiness schema)
7. Footer must include: `Listed on <a href="https://tradehub.directory/trades/{{SLUG}}">TradeHub</a>`
8. Contact section with callback form (can be mailto: or static)
9. No placeholder/stock images unless you create something with CSS/SVG
10. Emergency bar at top if they offer 24/7 or emergency services

**Output location:** `/Users/austin/Desktop/TradeHub/websites/{{SLUG}}/index.html`

11. Copyright year in footer must be 2026
12. Create a `robots.txt` in the same output folder — allow all crawlers:
    ```
    User-agent: *
    Allow: /
    Sitemap: https://{{DOMAIN}}/sitemap.xml
    ```
13. Create an `llms.txt` in the same output folder — help AI models understand the site:
    ```
    # {{BUSINESS_NAME}}
    > {{TRADE_TYPE}} in {{PRIMARY_AREA}}

    ## About
    {{SHORT_DESCRIPTION}}

    ## Contact
    - Phone: {{PHONE}}
    - Area: {{PRIMARY_AREA}} and surrounding areas
    - Website listed on [TradeHub](https://tradehub.directory/trades/{{SLUG}})

    ## Services
    {{SERVICES_LIST}}
    ```

**Make it unforgettable.** Each website should have its own character. Vary the fonts, colours, layouts, and animations between builds. The only constants are quality and the TradeHub footer link.
