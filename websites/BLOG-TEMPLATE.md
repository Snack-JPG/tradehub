# TradeHub Blog Post Template — SEO Optimised

## Purpose
Every client website gets 5 blog posts targeting local search keywords. Each post is a genuine, helpful article that:
1. Ranks for "[service] in [area]" long-tail keywords
2. Links back to the client's main website page (internal link)
3. Links back to their TradeHub listing (backlink for TradeHub SEO)
4. Establishes the tradesperson as a local authority
5. Has FAQ schema markup for Google rich snippets

---

## Blog Post Structure

### 1. Meta (HTML Head)
```html
<title>{Blog Title} | {Business Name}</title>
<meta name="description" content="{150-char summary with area + trade keywords}">
<link rel="canonical" href="https://{domain}/blog/{slug}">

<!-- Schema: BlogPosting -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{Blog Title}",
  "description": "{Meta description}",
  "author": {
    "@type": "Organization",
    "name": "{Business Name}"
  },
  "datePublished": "{YYYY-MM-DD}",
  "publisher": {
    "@type": "Organization",
    "name": "{Business Name}"
  }
}
</script>

<!-- Schema: FAQPage (for the FAQ section) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{Question 1}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{Answer 1}"
      }
    }
  ]
}
</script>
```

### 2. Article Body — 600-800 Words

**Opening paragraph (50-80 words):**
- Hook the reader with a relatable problem
- Mention the area naturally within the first 2 sentences
- Include the primary keyword once
- Set up what the article will cover

**Section 1 — H2 subheading (150-200 words):**
- Core advice/information
- Practical, actionable tips
- Mention a specific neighbourhood or local reference naturally
- Use bullet points or numbered lists where appropriate

**Section 2 — H2 subheading (150-200 words):**
- Deeper detail on the topic
- Include a secondary keyword naturally
- Reference the tradesperson's expertise subtly ("experienced [trade] professionals know that...")
- More practical tips

**Section 3 — H2 subheading (100-150 words):**
- Wrap up with a "what to look for" or "when to act" angle
- Mention the area again
- Natural lead-in to the CTA

**CTA paragraph (40-60 words):**
- Direct but not pushy
- Include business name, phone number, and area
- Link to main website homepage
- Link to TradeHub listing

```html
<p class="cta-block">
  Need a trusted {trade} in {area}? <strong>{Business Name}</strong> covers 
  {area} and surrounding areas with {rating}★ rated service across {review_count}+ reviews. 
  <a href="tel:{phone}">Call {phone}</a> for a free, no-obligation quote, or 
  <a href="https://tradehub.uk/trades/{slug}">view our full profile on TradeHub</a>.
</p>
```

### 3. FAQ Section — 4 Questions

Place at the bottom of every blog post. Use `<details><summary>` HTML for accordion behaviour.

```html
<section class="faq-section">
  <h2>Frequently Asked Questions</h2>
  
  <details>
    <summary>{Question 1 — include area + trade keyword}</summary>
    <p>{Answer — 40-80 words, helpful and specific. Mention area naturally.}</p>
  </details>
  
  <details>
    <summary>{Question 2}</summary>
    <p>{Answer}</p>
  </details>
  
  <details>
    <summary>{Question 3}</summary>
    <p>{Answer}</p>
  </details>
  
  <details>
    <summary>{Question 4}</summary>
    <p>{Answer}</p>
  </details>
</section>
```

**FAQ rules:**
- First question MUST include the area name (e.g. "How much does a plumber cost in Solihull?")
- Questions should match real Google "People Also Ask" queries
- Answers should be genuinely helpful, not salesy
- Keep answers 40-80 words — Google pulls concise answers into snippets
- Final question can be more specific to the business ("Do you offer emergency callouts in {area}?")

### 4. Internal Links — Required Per Post

Every blog post MUST include:
- **1 link to the main website homepage** (anchor text varies: business name, "our services", "get in touch")
- **1 link to the TradeHub listing** (anchor text: "view our reviews on TradeHub", "our TradeHub profile", "read our {review_count} reviews")
- **1 link to another blog post on the same site** (cross-linking between the 5 posts)

Link placement should feel natural, not forced. Embed in relevant sentences.

---

## Writing Rules

### Tone
- **Helpful and knowledgeable** — you're a local expert giving free advice
- **Conversational** — write like you're explaining to a neighbour, not a textbook
- **Confident** — state things directly ("You should..." not "You might want to consider...")
- **Local** — mention the area, specific neighbourhoods, local context where relevant

### SEO Rules
- **Primary keyword** in: title, meta description, H1, first paragraph, one H2, last paragraph
- **Secondary keywords** sprinkled naturally through the body (2-3 times)
- **Area name** mentioned 3-5 times across the article (not stuffed)
- **No keyword stuffing** — if it reads awkwardly, rewrite it
- **H2 subheadings** should include a keyword variation where natural
- **Alt text** on any images (when we add them): descriptive, include area if relevant

### Keyword Targeting Per Post Type

| Post Topic | Primary Keyword | Secondary Keywords |
|-----------|----------------|-------------------|
| "How to Find a Reliable {trade} in {area}" | {trade} in {area} | trusted {trade} {area}, best {trade} near me, local {trade} |
| "How Much Does a {trade} Cost in {area}?" | {trade} cost {area} | {trade} prices, how much {trade}, {trade} quotes {area} |
| "Emergency {service}" | emergency {trade} {area} | 24 hour {trade}, urgent {trade} near me |
| "Common {trade} Problems" | {trade} problems {area} | {specific issue}, when to call a {trade} |
| Guide/Tips posts | {specific topic} {area} | related terms, long-tail variations |

### What NOT to Do
- Don't write generic content that could be about any area — make it specific
- Don't be salesy in the body — save selling for the CTA at the end
- Don't use phrases like "in today's world" or "it's important to note" — get to the point
- Don't repeat the same information in different words to pad length
- Don't use AI-obvious phrases ("navigate the complexities", "landscape of", "it's worth noting")
- Don't make up statistics — if you don't know, don't include numbers

---

## Blog Post Templates by Trade Type

### Plumbers
1. "How to Find a Reliable Plumber in {area}"
2. "5 Signs You Need an Emergency Plumber"
3. "Common Plumbing Problems in {area} Homes"
4. "How Much Does a Plumber Cost in {area}? 2026 Guide"
5. "Boiler Not Working? Here's What to Check Before Calling a Plumber"

### Electricians
1. "How to Find a Trusted Electrician in {area}"
2. "When Do You Need an Emergency Electrician?"
3. "Consumer Unit Upgrades: What {area} Homeowners Need to Know"
4. "How Much Does an Electrician Cost in {area}? 2026 Guide"
5. "EV Charger Installation: A Complete Guide for {area} Homeowners"

### Locksmiths
1. "Locked Out in {area}? Here's What to Do"
2. "How to Choose a Reliable Locksmith in {area}"
3. "UPVC Door Lock Problems: Common Issues and Fixes"
4. "How Much Does a Locksmith Cost in {area}? 2026 Guide"
5. "Home Security Tips: A Locksmith's Guide for {area} Residents"

### Gas Engineers
1. "How to Find a Gas Safe Engineer in {area}"
2. "Boiler Servicing: Why It Matters and What to Expect"
3. "Signs Your Boiler Needs Replacing"
4. "How Much Does a New Boiler Cost in {area}? 2026 Guide"
5. "Carbon Monoxide Safety: What Every {area} Homeowner Should Know"

### Roofers
1. "How to Find a Reliable Roofer in {area}"
2. "5 Signs Your Roof Needs Repairing"
3. "Flat Roof vs Pitched Roof: Pros and Cons"
4. "How Much Does a New Roof Cost in {area}? 2026 Guide"
5. "Emergency Roof Repairs: What to Do When Your Roof Leaks"

### Fencing
1. "How to Choose the Right Fence for Your {area} Garden"
2. "Fence Panel Sizes: A Complete Guide"
3. "How Much Does Garden Fencing Cost in {area}? 2026 Guide"
4. "Best Time of Year to Install a New Fence"
5. "Fence Maintenance Tips to Make It Last"

### Builders
1. "How to Find a Reliable Builder in {area}"
2. "Do I Need Planning Permission? A Guide for {area} Homeowners"
3. "How Much Does a House Extension Cost in {area}? 2026 Guide"
4. "Questions to Ask Before Hiring a Builder"
5. "Loft Conversions in {area}: Everything You Need to Know"

### Landscapers
1. "How to Find a Good Landscaper in {area}"
2. "Garden Maintenance: A Seasonal Guide for {area}"
3. "How Much Does Landscaping Cost in {area}? 2026 Guide"
4. "Low Maintenance Garden Ideas for Busy Homeowners"
5. "When is the Best Time to Start a Garden Project in {area}?"

### Handymen
1. "How to Find a Reliable Handyman in {area}"
2. "10 Jobs a Handyman Can Help With"
3. "How Much Does a Handyman Cost in {area}? 2026 Guide"
4. "DIY vs Hiring a Handyman: When to Call the Pros"
5. "Home Maintenance Checklist for {area} Homeowners"

### Painters & Decorators
1. "How to Find a Reliable Painter in {area}"
2. "Interior vs Exterior Painting: What to Expect"
3. "How Much Does a Painter Cost in {area}? 2026 Guide"
4. "How to Prepare Your Home for Painting"
5. "Best Paint Colours for {area} Homes in 2026"

### Tilers
1. "How to Find a Good Tiler in {area}"
2. "Bathroom Tiling: A Complete Guide"
3. "How Much Does Tiling Cost in {area}? 2026 Guide"
4. "Porcelain vs Ceramic Tiles: Which Should You Choose?"
5. "Kitchen Splashback Ideas for {area} Homeowners"

### Carpenters
1. "How to Find a Reliable Carpenter in {area}"
2. "Bespoke vs Flat-Pack Furniture: Is Custom Worth It?"
3. "How Much Does a Carpenter Cost in {area}? 2026 Guide"
4. "Kitchen Fitting: What to Expect From Start to Finish"
5. "Built-In Wardrobes: A Complete Guide for {area} Homeowners"

---

## Example Blog Post

### Title: How Much Does a Plumber Cost in Solihull? 2026 Guide

**Meta description:** Average plumber costs in Solihull for 2026. From tap repairs to boiler installations, here's what to expect to pay for plumbing work in Solihull and surrounding areas.

---

Nobody likes surprise bills, especially when it comes to plumbing. If you're looking for a plumber in Solihull, knowing what to expect price-wise helps you budget properly and spot anyone trying to overcharge. Here's a realistic breakdown of plumbing costs in the Solihull area for 2026.

## Typical Plumber Rates in Solihull

Most plumbers in Solihull charge between £40-£80 per hour, with the average sitting around £55-£65. Some work on a day rate instead — expect £250-£400 for a full day depending on the complexity of the work.

Keep in mind:
- **Callout fees** typically range from £30-£60
- **Emergency callouts** (evenings, weekends) add 50-100% on top
- **Materials** are usually charged separately at cost plus a small markup
- Most plumbers will give you a **fixed quote** for defined jobs rather than charging hourly

If a plumber won't give you a clear price before starting work, that's a red flag.

## Common Job Prices in Solihull

Here's what typical plumbing jobs cost in the area:

- **Tap replacement:** £80-£150 (including parts)
- **Toilet repair:** £75-£150
- **Leaking pipe repair:** £100-£250
- **Radiator installation:** £150-£300 per radiator
- **Boiler service:** £70-£120
- **New boiler installation:** £1,800-£3,500
- **Full bathroom plumbing:** £500-£1,200
- **Blocked drain clearance:** £80-£200

Prices vary depending on the specific issue, accessibility, and parts needed. Properties in areas like Knowle and Dorridge sometimes cost slightly more due to larger homes with more complex plumbing systems.

## How to Get a Fair Price

The best approach is to get 2-3 quotes from local plumbers. When comparing, check that each quote covers the same scope of work and includes materials. A trusted plumber will always explain what needs doing and why before starting — no surprises when the invoice arrives.

Look for plumbers with strong Google reviews from other Solihull residents. Reviews from real customers are the best indicator of fair pricing and quality work.

Need a trusted plumber in Solihull? **Pipe Guys** cover Solihull, Marston Green, and surrounding areas with a 4.9★ rating across 275 reviews. [Call 07869 837241](tel:07869837241) for a free quote, or [view our profile on TradeHub](https://tradehub.uk/trades/pipe-guys) to read what our customers say.

## Frequently Asked Questions

<details>
<summary>How much does an emergency plumber cost in Solihull?</summary>
<p>Emergency plumbers in Solihull typically charge £100-£200 for a callout outside normal hours. This includes the first hour of work. Evening and weekend rates are usually 50-100% higher than standard daytime rates. Always confirm the callout fee before agreeing.</p>
</details>

<details>
<summary>Do plumbers in Solihull charge for quotes?</summary>
<p>Most plumbers offer free quotes for standard jobs. Some may charge a small callout fee (£30-£60) for diagnostic visits where they need to inspect the issue before quoting. A reputable plumber will always be upfront about any charges before visiting.</p>
</details>

<details>
<summary>How do I know if a plumber in Solihull is trustworthy?</summary>
<p>Check their Google reviews — look for consistent 4.5+ star ratings with detailed reviews from real customers. Ask if they offer a written quote before starting work. Trusted directories like TradeHub vet their listed tradespeople so you can hire with confidence.</p>
</details>

<details>
<summary>Should I choose the cheapest plumber in Solihull?</summary>
<p>Not always. The cheapest quote might mean corners being cut or hidden costs added later. Compare 2-3 quotes from well-reviewed plumbers and go with the one who explains the work clearly and gives a transparent, fixed price. Quality work saves money long-term.</p>
</details>

---

## Checklist Before Publishing

- [ ] Primary keyword in title, meta description, H1, first paragraph, one H2
- [ ] Area name mentioned 3-5 times naturally
- [ ] 600-800 words (not including FAQ)
- [ ] 3-4 H2 subheadings
- [ ] At least 1 bulleted or numbered list
- [ ] CTA paragraph with phone link + TradeHub link
- [ ] 4 FAQ questions with concise answers
- [ ] 1 cross-link to another blog post on the same site
- [ ] FAQPage schema markup in head
- [ ] BlogPosting schema markup in head
- [ ] Reads naturally — not keyword-stuffed
- [ ] Genuinely helpful content someone would actually read
