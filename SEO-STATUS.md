# TradeHub SEO Audit — 17 February 2026

## Executive Summary

TradeHub (tradehub.directory) is a well-built Next.js trade directory for the West Midlands with strong on-page SEO foundations. However, **Google indexing status is unknown** (web_search was unavailable during this audit — Brave API key not configured). The site has excellent technical basics but needs Google Search Console setup urgently to confirm indexing and drive organic growth.

---

## 1. Google Indexing Status

**⚠️ UNABLE TO VERIFY** — `site:tradehub.directory` search could not be performed (Brave Search API key missing from OpenClaw config).

**Action needed:** Austin must manually check `site:tradehub.directory` in Google to see how many pages are indexed. Given the site has 300+ URLs in its sitemap, ideally most should be indexed.

---

## 2. robots.txt ✅ GOOD

**URL:** https://tradehub.directory/robots.txt (redirects to www.)

```
User-agent: *
Allow: /

# AI/LLM Crawlers - Explicitly whitelisted
User-agent: CCBot, ChatGPT-User, GPTBot, Google-Extended, anthropic-ai, Claude-Web, PerplexityBot, Bytespider
Allow: /

Sitemap: https://tradehub.directory/sitemap.xml
```

**Assessment:**
- ✅ All crawlers allowed
- ✅ AI crawlers explicitly whitelisted (good for AI search engines like Perplexity, ChatGPT search)
- ✅ Sitemap referenced
- ⚠️ Minor: Sitemap URL points to non-www but site redirects to www. Consider using `https://www.tradehub.directory/sitemap.xml` for consistency

---

## 3. Sitemap ✅ EXCELLENT

**URL:** https://tradehub.directory/sitemap.xml (200 OK, valid XML)

**Contents (estimated 300+ URLs):**
- Homepage (priority 1, daily)
- `/list-your-business` (priority 0.8, monthly)
- `/blog` (priority 0.7, weekly)
- **22 category pages** (priority 0.8, weekly): plumbers, electricians, roofers, builders, landscapers, plasterers, painters, carpenters, locksmiths, handymen, gas-engineers, tilers, fencing, pest-control, drainage, tree-surgeons, vehicle-recovery, mobile-tyre-fitting, emergency-glaziers, appliance-repair, garage-door-repair, skip-hire
- **Location pages** for each category × ~15 locations (priority 0.7, weekly): Solihull, Birmingham, Redditch, Bromsgrove, Sutton Coldfield, Knowle, Shirley, Moseley, Kings Heath, Hall Green, Astwood Bank, Studley, Alcester, Wythall, Hampton in Arden, Dorridge

**Assessment:**
- ✅ Well-structured with appropriate priorities and change frequencies
- ✅ Lastmod timestamps are current (2026-02-17)
- ✅ Good URL hierarchy: `/trade/location`
- ⚠️ No individual trade profile pages in sitemap (e.g. `/trades/ab-plastering-rendering`). **These should be added** — they're the most unique content on the site.
- ⚠️ Blog post URLs not visible in sitemap (only `/blog` root)

---

## 4. Homepage On-Page SEO ✅ STRONG

**URL:** https://www.tradehub.directory/

### Title Tag ✅
`TradeHub | Find Trusted Local Tradespeople`

### Meta Description ✅
`Find 5,085+ trusted, vetted tradespeople across 22 categories in the West Midlands. Plumbers, electricians, roofers, builders and more — all local, all reviewed.`

### Canonical ✅
`https://tradehub.directory` (correct)

### Open Graph ✅
- og:title, og:description, og:url, og:image all present
- og:type = website
- Twitter card = summary_large_image

### Structured Data ✅
Two JSON-LD blocks found:

1. **WebSite schema** with SearchAction:
```json
{
  "@type": "WebSite",
  "name": "TradeHub",
  "url": "https://tradehub.directory",
  "potentialAction": { "@type": "SearchAction", "target": "...?q={search_term_string}" }
}
```

2. **BreadcrumbList schema**:
```json
{ "@type": "BreadcrumbList", "itemListElement": [{ "position": 1, "name": "Home" }] }
```

### Headings
- H2s found: "24/7 Emergency Services", "Featured Tradespeople", "Browse by Trade", "What Our Customers Say", "How It Works", "Are You a Tradesperson?"
- ⚠️ **No H1 tag visible** — The hero section uses "100% Verified Tradespeople" as visual headline but it may not be in an `<h1>`. Need to verify this is actually wrapped in `<h1>`.

### Content Quality ✅
- Rich content with 551 tradespeople, reviews, ratings
- Good internal linking to category and location pages
- CTA for tradespeople to list their business
- Trust signals: Gas Safe, NICEIC, TrustMark, Which?, FMB certifications mentioned

---

## 5. Category Page SEO (/plumbers) ✅ GOOD

**Title:** `Find 78+ Trusted Plumbers in the West Midlands | TradeHub`

**Assessment:**
- ✅ Keyword-rich title with count and location
- ✅ Breadcrumb navigation (Home > Plumbers)
- ✅ Location links (Solihull, Birmingham, Redditch, etc.)
- ✅ Individual trade profiles with reviews, ratings, services
- ✅ Rich descriptive content for each tradesperson
- ⚠️ Could not verify meta description for category page (need to check source)

---

## 6. Competitor Landscape

**⚠️ Web search unavailable** — Could not search "trade directory UK" or "find local tradesmen UK" due to missing Brave API key.

**Known major competitors based on industry knowledge:**
| Competitor | Domain Authority | Strengths |
|---|---|---|
| Checkatrade | Very High | National brand, TV ads, huge backlink profile |
| Rated People | High | Lead generation model, national coverage |
| MyBuilder | High | Quote comparison, national |
| Bark | High | Service marketplace, national |
| Yell.com | Very High | Legacy directory, massive DA |
| TrustATrader | Medium-High | Trust-focused, good local SEO |
| Which? Trusted Traders | Very High | Brand authority, consumer trust |
| FMB (Find a Builder) | High | Industry body authority |

**TradeHub's competitive advantage:**
- Hyper-local (West Midlands focused) — can win long-tail local searches
- Individual location pages (e.g. "plumbers in Solihull") are the right strategy
- 551 verified trades is a solid starting point

---

## 7. Search Visibility for Relevant Terms

**⚠️ Could not verify** — web_search unavailable.

**Terms to track (manually check in Google):**
- `plumber solihull` / `plumber birmingham` / `plumber redditch`
- `electrician solihull` / `roofer solihull`
- `find tradesman west midlands`
- `trade directory birmingham`
- `trusted plumber near me` (from West Midlands IP)
- `tradehub directory`

---

## 8. Technical SEO Notes

### Positives ✅
- HTTPS with valid SSL
- Clean URL structure (`/trade/location`)
- Fast-loading Next.js site (server-side rendered)
- Proper canonical tags
- www redirect working (non-www → www)
- Sitemap auto-generated and up-to-date
- Social media links in footer (Facebook, Twitter, Instagram, LinkedIn)
- Mobile-responsive design (Tailwind CSS)

### Issues / Concerns ⚠️
- **www vs non-www inconsistency**: robots.txt sitemap points to non-www, site serves on www. Canonical is non-www. Pick one and be consistent. Recommend: canonical to `https://www.tradehub.directory` since that's where it serves.
- **Trade profile pages not in sitemap**: URLs like `/trades/ab-plastering-rendering` contain unique, valuable content but aren't in the XML sitemap
- **No blog posts in sitemap**: Only `/blog` root page, not individual posts
- **H1 tag**: Verify the homepage has a proper `<h1>` element
- **Social links point to `#`**: Facebook, Twitter, Instagram, LinkedIn links are placeholder `#` — set up real social profiles or remove

---

## 9. Prioritised Action Items

### 🔴 CRITICAL (Do This Week)

1. **Set up Google Search Console**
   - Go to https://search.google.com/search-console
   - Add property `tradehub.directory` (or `www.tradehub.directory`)
   - Verify ownership (DNS TXT record is easiest, or HTML file upload)
   - Submit sitemap: `https://tradehub.directory/sitemap.xml`
   - Request indexing of homepage
   - **This is THE most important thing to do**

2. **Set up Bing Webmaster Tools**
   - https://www.bing.com/webmasters
   - Can import from Google Search Console

3. **Check Google indexing manually**
   - Search `site:tradehub.directory` in Google
   - Note how many pages are indexed
   - If zero: site may not be indexed at all yet

### 🟡 HIGH PRIORITY (This Month)

4. **Add trade profile pages to sitemap**
   - Every `/trades/[slug]` page should be in sitemap.xml
   - These are your most unique, link-worthy pages

5. **Add blog post URLs to sitemap**
   - Individual blog posts need sitemap entries

6. **Fix www/non-www consistency**
   - Update canonical URLs to use `www.tradehub.directory` consistently
   - Update robots.txt sitemap reference to match

7. **Fix placeholder social links**
   - Create real social profiles or remove the `#` links
   - Dead links hurt credibility

8. **Verify H1 tag on homepage**
   - Ensure there's exactly one `<h1>` with primary keywords

### 🟢 MEDIUM PRIORITY (Next 2-3 Months)

9. **Build backlinks**
   - List on UK business directories (Yell, Thomson Local, FreeIndex)
   - Get links from local business networks, chambers of commerce
   - Create a Google Business Profile for TradeHub itself
   - Consider local PR/press coverage

10. **Content strategy — Blog SEO**
    - Write "best [trade] in [location]" guides
    - "How much does a [service] cost in [location]?"
    - "How to find a trusted [trade] in the West Midlands"
    - These target long-tail informational queries

11. **Add LocalBusiness schema** to trade profile pages
    - Each tradesperson page should have structured data for their business
    - Include aggregate rating schema

12. **Add FAQ schema** to category pages
    - "How much does a plumber cost in Solihull?"
    - Targets featured snippets

13. **Internal linking improvements**
    - Cross-link between related trades (plumber ↔ gas engineer)
    - Location pages should link to each other

14. **Image optimisation**
    - Add alt text to all images
    - Use WebP format
    - Lazy load below-fold images

### 🔵 NICE TO HAVE (Ongoing)

15. **Set up Google Analytics 4** (if not already)
16. **Monitor Core Web Vitals** in Search Console
17. **Build up review/testimonial content** for individual pages
18. **Consider Google Ads** for competitive terms while organic grows
19. **Submit to AI search engines** (Perplexity, etc.) — robots.txt already allows them

---

## 10. Google Search Console Submission

**YES — This is mandatory and the #1 priority.**

Steps:
1. Go to https://search.google.com/search-console
2. Click "Add property"
3. Choose "Domain" property type → enter `tradehub.directory`
4. Verify via DNS TXT record (add to your domain registrar)
5. Once verified: Go to Sitemaps → Submit `https://tradehub.directory/sitemap.xml`
6. Use URL Inspection tool to request indexing of key pages
7. Monitor Coverage report for any crawl errors

Without Search Console, you're flying blind. You won't know if Google is indexing your pages, finding errors, or penalising anything.

---

## Summary Score

| Area | Score | Notes |
|---|---|---|
| robots.txt | 9/10 | Minor www inconsistency |
| Sitemap | 7/10 | Missing trade profiles and blog posts |
| Meta tags | 9/10 | Title, description, OG all present |
| Structured data | 8/10 | WebSite + Breadcrumb present; needs LocalBusiness on profiles |
| Content quality | 9/10 | Rich, unique content with real reviews |
| Technical SEO | 8/10 | Fast, clean URLs, HTTPS; www consistency needed |
| Off-page SEO | 3/10 | Unknown — likely minimal backlinks for a new site |
| Google Search Console | 0/10 | Not set up (assumed) |

**Overall: Strong foundation, needs Search Console + indexing verification urgently.**

---

*Audit performed: 17 Feb 2026 13:00 GMT*
*Note: Web search was unavailable (Brave API key not configured). Competitor and indexing checks should be re-run once configured.*
