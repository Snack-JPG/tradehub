# TradeHub — Client Website Brief

Use the **frontend-design** skill for this build. Create a distinctive, production-grade single-page website for this tradesperson. Every site should feel unique and bespoke — not templated.

## Business Details

- **Name:** Power Plus Heating Ltd
- **Trade:** gas engineers
- **Area:** Birmingham
- **Phone:** 07305 928834
- **Email:** Not listed
- **Address:** Bath Row, Birmingham B1 1JW
- **Rating:** 5.0★ (336 reviews)
- **Emergency/24/7:** Yes
- **Accreditations:** Gas Safe Registered

## Services
- Boiler Replacement
- Boiler Servicing
- Boiler Repairs
- Gas Safety Certificates
- Central Heating
- Radiator Installation
- Thermostat Fitting
- Emergency Callouts

## Areas Covered
Birmingham, City Centre, Edgbaston, Digbeth, Jewellery Quarter, Aston, Ladywood, Nechells

## Real Customer Reviews
- ★★★★★ "Saboor did a fantastic job diagnosing and replacing our boiler. He was efficient, professional, and delivered excellent quality work. I highly recommend his services to anyone looking for reliable and skilled workmanship." — Jose Luis V., 2025-10-31
- ★★★★★ "Power Plus Heating have done regular boiler service at my place for the last couple of years and they have been excellent. Saboor Khan is the main person whom I have dealt with in the company. He is very competent, a thorough professional and extremely polite to talk to. I would recommend them to everyone." — Vandna V., 2026-01-17
- ★★★★★ "Mr Khan was a complete professional, great communication, prompt with his work, went over and above regarding the gas safe work he engaged in. What a delight to have someone so knowledgeable and personable. I will be recommending him to everyone I can." — Belinda K., 2025-12-31


## Additional Context


---

## Design Direction

**Audience:** Homeowners and landlords in Birmingham searching Google for a gas engineers. They want to see trust signals, reviews, and an easy way to call.

**Vibe:** This is a trade website, not a SaaS landing page. Think bold, confident, professional. The kind of site that makes a tradesman proud and makes a homeowner pick up the phone.

**Reference:** Check `/Users/austin/Desktop/TradeHub/site/hydrogreen/` for the quality bar — dark hero, animated elements, proper typography, gradient accents, responsive design. Match or exceed this level.

**Requirements:**
1. Single `index.html` file with all CSS/JS inline (no external files except Google Fonts)
2. Fully responsive (mobile-first — most customers will find this on their phone)
3. Click-to-call phone number prominent throughout
4. WhatsApp floating button (link to `https://wa.me/447305928834`)
5. Use REAL review quotes from above — don't invent fake ones
6. SEO meta tags + JSON-LD structured data (LocalBusiness schema)
7. Footer must include: `Listed on <a href="https://tradehub.directory/trades/power-plus-heating-ltd">TradeHub</a>`
8. Contact section with callback form (can be mailto: or static)
9. No placeholder/stock images unless you create something with CSS/SVG
10. Emergency bar at top if they offer 24/7 or emergency services

**Output location:** `/Users/austin/Desktop/TradeHub/websites/power-plus-heating-ltd/index.html`

11. Copyright year in footer must be 2026
12. Create a `robots.txt` in the same output folder — allow all crawlers:
    ```
    User-agent: *
    Allow: /
    Sitemap: https://{{DOMAIN}}/sitemap.xml
    ```
13. Create an `llms.txt` in the same output folder — help AI models understand the site:
    ```
    # Power Plus Heating Ltd
    > gas engineers in Birmingham

    ## About
    {{SHORT_DESCRIPTION}}

    ## Contact
    - Phone: 07305 928834
    - Area: Birmingham and surrounding areas
    - Website listed on [TradeHub](https://tradehub.directory/trades/power-plus-heating-ltd)

    ## Services
    - Boiler Replacement
- Boiler Servicing
- Boiler Repairs
- Gas Safety Certificates
- Central Heating
- Radiator Installation
- Thermostat Fitting
- Emergency Callouts
    ```

**Make it unforgettable.** Each website should have its own character. Vary the fonts, colours, layouts, and animations between builds. The only constants are quality and the TradeHub footer link.


## ADDITIONAL CONTEXT

### About the owner
- Run by Saboor Khan — independent gas engineer, one-man operation
- Based at Bath Row, Birmingham B1 1JW
- Active on Nextdoor, Facebook, Instagram (@powerplusheating)
- Personality: friendly, personable
- Current website is a blank Workfolio page with zero content
- 336 five-star Google reviews — all organic word of mouth

### Key selling points
- 336 five-star reviews (mention prominently)
- Gas Safe registered
- Independent — deal directly with Saboor, not a callcentre
- 24/7 emergency breakdowns
- Covers all of Birmingham and West Midlands
- Copyright year in footer: 2026

### Reference site
Read /Users/austin/Desktop/TradeHub/site/hydrogreen/index.html and /Users/austin/Desktop/TradeHub/site/hydrogreen/style.css for quality bar. Match or exceed. But DIFFERENT fonts, colours, layout.

When finished, run: clawdbot gateway wake --text 'POWER_PLUS_SITE_COMPLETE' --mode now
