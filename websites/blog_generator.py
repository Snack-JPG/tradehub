"""
Blog page generator: 5 SEO blog posts per tradesperson.
"""
import re
from pathlib import Path

BLOG_TEMPLATES = {
    "plumbers": [
        ("How to Find a Reliable Plumber in {area}", "find-reliable-plumber-{area_slug}"),
        ("5 Signs You Need an Emergency Plumber", "signs-need-emergency-plumber"),
        ("Common Plumbing Problems in {area} Homes", "common-plumbing-problems-{area_slug}"),
        ("How Much Does a Plumber Cost in {area}? 2026 Guide", "plumber-cost-{area_slug}-2026"),
        ("Boiler Not Working? Here's What to Check Before Calling a Plumber", "boiler-not-working-checklist"),
    ],
    "gas-engineers": [
        ("How to Find a Gas Safe Engineer in {area}", "find-gas-safe-engineer-{area_slug}"),
        ("Boiler Servicing: Why It Matters and What to Expect", "boiler-servicing-guide"),
        ("Signs Your Boiler Needs Replacing", "signs-boiler-needs-replacing"),
        ("How Much Does a New Boiler Cost in {area}? 2026 Guide", "new-boiler-cost-{area_slug}-2026"),
        ("Carbon Monoxide Safety: What Every {area} Homeowner Should Know", "carbon-monoxide-safety-{area_slug}"),
    ],
    "electricians": [
        ("How to Find a Trusted Electrician in {area}", "find-trusted-electrician-{area_slug}"),
        ("When Do You Need an Emergency Electrician?", "when-need-emergency-electrician"),
        ("Consumer Unit Upgrades: What You Need to Know", "consumer-unit-upgrades-guide"),
        ("How Much Does an Electrician Cost in {area}? 2026 Guide", "electrician-cost-{area_slug}-2026"),
        ("EV Charger Installation: A Complete Guide for {area} Homeowners", "ev-charger-installation-{area_slug}"),
    ],
    "locksmiths": [
        ("Locked Out? What to Do While Waiting for a Locksmith in {area}", "locked-out-waiting-locksmith-{area_slug}"),
        ("How to Choose a Reliable Locksmith in {area}", "choose-reliable-locksmith-{area_slug}"),
        ("UPVC Door Lock Problems: Common Issues and Fixes", "upvc-door-lock-problems"),
        ("How Much Does a Locksmith Cost in {area}? 2026 Guide", "locksmith-cost-{area_slug}-2026"),
        ("Home Security Tips: A Locksmith's Guide for {area} Residents", "home-security-tips-{area_slug}"),
    ],
    "roofers": [
        ("How to Find a Reliable Roofer in {area}", "find-reliable-roofer-{area_slug}"),
        ("5 Signs Your Roof Needs Repairing", "signs-roof-needs-repairing"),
        ("Flat Roof vs Pitched Roof: Which is Best?", "flat-roof-vs-pitched-roof"),
        ("How Much Does a New Roof Cost in {area}? 2026 Guide", "new-roof-cost-{area_slug}-2026"),
        ("Emergency Roof Repairs: What to Do When Your Roof is Leaking", "emergency-roof-repairs-leaking"),
    ],
    "fencing": [
        ("How to Choose the Right Fence for Your {area} Garden", "choose-right-fence-{area_slug}"),
        ("Fence Panel Sizes: A Complete Guide", "fence-panel-sizes-guide"),
        ("How Much Does Fencing Cost in {area}? 2026 Guide", "fencing-cost-{area_slug}-2026"),
        ("Best Time of Year to Install a New Fence", "best-time-install-fence"),
        ("Fence Maintenance Tips to Make Your Fence Last Longer", "fence-maintenance-tips"),
    ],
    "builders": [
        ("How to Find a Reliable Builder in {area}", "find-reliable-builder-{area_slug}"),
        ("Planning Permission: What You Need to Know", "planning-permission-guide"),
        ("How Much Does a House Extension Cost in {area}? 2026 Guide", "house-extension-cost-{area_slug}-2026"),
        ("Questions to Ask Before Hiring a Builder", "questions-ask-hiring-builder"),
        ("Loft Conversions in {area}: A Complete Guide", "loft-conversions-{area_slug}-guide"),
    ],
    "landscapers": [
        ("How to Find a Good Landscaper in {area}", "find-good-landscaper-{area_slug}"),
        ("Garden Maintenance: A Seasonal Guide", "garden-maintenance-seasonal-guide"),
        ("How Much Does Landscaping Cost in {area}? 2026 Guide", "landscaping-cost-{area_slug}-2026"),
        ("Low Maintenance Garden Ideas for {area} Homeowners", "low-maintenance-garden-ideas-{area_slug}"),
        ("When is the Best Time to Start a Garden Project?", "best-time-start-garden-project"),
    ],
    "handymen": [
        ("How to Find a Reliable Handyman in {area}", "find-reliable-handyman-{area_slug}"),
        ("10 Jobs a Handyman Can Help With", "10-jobs-handyman-can-help"),
        ("How Much Does a Handyman Cost in {area}? 2026 Guide", "handyman-cost-{area_slug}-2026"),
        ("DIY vs Hiring a Handyman: When to Call the Pros", "diy-vs-hiring-handyman"),
        ("Home Maintenance Checklist for {area} Homeowners", "home-maintenance-checklist-{area_slug}"),
    ],
    "painters": [
        ("How to Find a Reliable Painter in {area}", "find-reliable-painter-{area_slug}"),
        ("Interior vs Exterior Painting: What to Expect", "interior-vs-exterior-painting"),
        ("How Much Does a Painter Cost in {area}? 2026 Guide", "painter-cost-{area_slug}-2026"),
        ("How to Prepare Your Home for Painting", "prepare-home-for-painting"),
        ("Best Paint Colours for {area} Homes in 2026", "best-paint-colours-{area_slug}-2026"),
    ],
}

# Full blog content templates
BLOG_CONTENT = {}

def _slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

def get_blog_titles(trade_type, area):
    """Return list of (title, slug) tuples for a trade type."""
    area_slug = _slugify(area)
    templates = BLOG_TEMPLATES.get(trade_type, BLOG_TEMPLATES.get("handymen", []))
    result = []
    for title_tpl, slug_tpl in templates:
        title = title_tpl.replace("{area}", area)
        slug = slug_tpl.replace("{area_slug}", area_slug)
        result.append((title, slug))
    return result


def _generate_blog_body(title, trade, area, trade_type):
    """Generate genuine blog content based on the title pattern."""
    trade_label = trade_type.replace("-", " ").rstrip("s")
    name = trade["name"]
    phone = trade.get("phone", "")
    phone_clean = phone.replace(" ", "").replace("-", "")

    # Detect content type from title
    lower_title = title.lower()

    if "how to find" in lower_title or "how to choose" in lower_title:
        body = f"""
<h2>Why Choosing the Right {trade_label.title()} Matters</h2>
<p>Finding a trustworthy {trade_label} in {area} can feel overwhelming. With so many options, how do you know who to trust with your home? The wrong choice can lead to poor workmanship, hidden costs, and a lot of stress. The right choice means quality work, fair prices, and peace of mind.</p>
<p>Here in {area}, we're fortunate to have plenty of skilled tradespeople — but not all of them are created equal. Here's what to look for when choosing a {trade_label} you can rely on.</p>

<h2>Check Reviews and Reputation</h2>
<p>Start with Google reviews. A {trade_label} with consistently high ratings across dozens of reviews is a strong signal. Look for specific comments about quality, punctuality, and pricing — not just generic praise. In {area}, word of mouth still matters, so ask neighbours and friends for recommendations too.</p>

<h2>Verify Qualifications and Insurance</h2>
<p>Always check that your {trade_label} is properly qualified and insured. This protects you if anything goes wrong. Ask to see certificates, and don't be shy about verifying them. A genuine professional will be happy to show their credentials.</p>

<h2>Get Multiple Quotes</h2>
<p>Never go with the first quote you receive. Get at least three quotes from different {trade_label}s in {area}. This gives you a realistic idea of what the job should cost. Be wary of quotes that are significantly cheaper than the rest — there's usually a reason.</p>

<h2>Look for Clear Communication</h2>
<p>A good {trade_label} will explain the work clearly, answer your questions honestly, and provide a detailed written quote. If someone is vague about what's included or reluctant to put things in writing, that's a red flag.</p>

<h2>Ask About Guarantees</h2>
<p>Reputable tradespeople stand behind their work. Ask about guarantees on both labour and materials. This shows confidence in their workmanship and gives you recourse if something isn't right.</p>

<h2>Trust Your Instincts</h2>
<p>Finally, trust your gut feeling. If a {trade_label} is professional, responsive, and makes you feel comfortable, that's a good sign. The best tradespeople in {area} build their reputation on reliability and honest dealings.</p>
"""
    elif "how much" in lower_title or "cost" in lower_title:
        body = f"""
<h2>Understanding {trade_label.title()} Costs in {area}</h2>
<p>One of the most common questions we hear from {area} homeowners is "how much will this cost?" It's a fair question, and while every job is different, we can give you a realistic guide to what you should expect to pay in 2026.</p>

<h2>Factors That Affect the Price</h2>
<p>Several things influence how much a {trade_label} will charge in {area}:</p>
<ul>
<li><strong>Scope of work</strong> — Bigger jobs naturally cost more. A simple repair is far cheaper than a full installation or replacement.</li>
<li><strong>Materials needed</strong> — Quality materials cost more upfront but often save money long-term.</li>
<li><strong>Urgency</strong> — Emergency or out-of-hours work typically carries a premium.</li>
<li><strong>Access</strong> — Difficult-to-reach areas or cramped spaces can increase labour time.</li>
<li><strong>Location</strong> — Rates can vary slightly across {area} and surrounding areas.</li>
</ul>

<h2>Typical Price Ranges</h2>
<p>While prices vary, here's a rough guide for common {trade_label} jobs in the {area} area in 2026:</p>
<ul>
<li><strong>Small repairs:</strong> £50–£150</li>
<li><strong>Medium jobs:</strong> £150–£500</li>
<li><strong>Larger projects:</strong> £500–£2,000+</li>
</ul>
<p>These are ballpark figures — always get a specific quote for your situation.</p>

<h2>How to Get the Best Value</h2>
<p>Getting the best value doesn't mean choosing the cheapest quote. Here's how to make sure you're getting fair value:</p>
<ul>
<li>Get at least three written quotes</li>
<li>Make sure quotes include materials, labour, and VAT</li>
<li>Ask what's NOT included</li>
<li>Check if there are any potential additional costs</li>
<li>Compare like-for-like — the cheapest quote might use inferior materials</li>
</ul>

<h2>Red Flags to Watch For</h2>
<p>Be cautious of {trade_label}s who demand large upfront payments, give verbal-only quotes, or pressure you to decide immediately. Reputable tradespeople in {area} will give you time to consider and provide clear, written pricing.</p>
"""
    elif "emergency" in lower_title or "locked out" in lower_title:
        body = f"""
<h2>When You Need Help Fast</h2>
<p>Emergencies don't wait for convenient times. Whether it's the middle of the night, a weekend, or a bank holiday, knowing what to do and who to call can make all the difference. In {area}, having a trusted {trade_label} on speed dial is one of the smartest things a homeowner can do.</p>

<h2>What Counts as an Emergency?</h2>
<p>Not every issue needs an emergency call-out. Here's how to tell the difference:</p>
<ul>
<li><strong>Emergency:</strong> Situations that pose an immediate safety risk, could cause significant property damage, or leave you unable to secure your home.</li>
<li><strong>Urgent:</strong> Issues that need attention soon but can wait a few hours — perhaps until regular working hours.</li>
<li><strong>Routine:</strong> Work that can be scheduled at your convenience over the coming days or weeks.</li>
</ul>

<h2>What to Do While You Wait</h2>
<p>If you've called out an emergency {trade_label} in {area}, here are some steps you can take while waiting:</p>
<ul>
<li>Stay calm — help is on the way</li>
<li>If safe to do so, try to contain the issue (e.g., turn off water at the stopcock for a leak)</li>
<li>Take photos for insurance purposes</li>
<li>Make a note of what happened and when</li>
<li>Keep your phone available so the {trade_label} can reach you</li>
</ul>

<h2>What to Expect From an Emergency Service</h2>
<p>A reputable emergency {trade_label} in {area} should:</p>
<ul>
<li>Answer the phone promptly, even outside hours</li>
<li>Give you an estimated arrival time</li>
<li>Explain any call-out charges upfront</li>
<li>Arrive when they say they will</li>
<li>Assess the situation and explain what needs doing</li>
<li>Provide a clear price before starting work</li>
</ul>

<h2>Avoiding Emergency Call-Out Scams</h2>
<p>Unfortunately, emergency situations can attract unscrupulous operators. Protect yourself by choosing a {trade_label} with verified Google reviews, proper identification, and transparent pricing. Never pay the full amount upfront, and always get a receipt.</p>
"""
    else:
        # Generic helpful article
        body = f"""
<h2>A Practical Guide for {area} Homeowners</h2>
<p>Whether you're tackling a home improvement project, dealing with a maintenance issue, or just want to be better prepared, this guide covers everything you need to know. We've put together practical advice based on years of experience working with homeowners across {area}.</p>

<h2>Understanding Your Options</h2>
<p>Every home is different, and what works for one property in {area} might not be the best solution for another. Before making any decisions, it's worth understanding the full range of options available to you. A good {trade_label} will take the time to explain your choices and help you make an informed decision.</p>

<h2>What to Consider</h2>
<p>When planning any work on your home, keep these factors in mind:</p>
<ul>
<li><strong>Budget:</strong> Be realistic about what you can afford, but remember that cheapest isn't always best value.</li>
<li><strong>Timeline:</strong> Good tradespeople are often booked up in advance. Plan ahead where possible.</li>
<li><strong>Quality:</strong> Investing in quality materials and workmanship pays off in the long run.</li>
<li><strong>Regulations:</strong> Some work may require building regulations approval or other permissions.</li>
</ul>

<h2>Getting Professional Help</h2>
<p>While some home maintenance tasks are perfectly suited to DIY, others really do need a professional. If you're unsure, it's always better to ask a qualified {trade_label} for advice. Most reputable tradespeople in {area} will happily give you honest guidance — even if it means telling you the job is simple enough to do yourself.</p>

<h2>Maintaining Your Home</h2>
<p>Prevention is better (and cheaper) than cure. Regular maintenance catches small problems before they become big, expensive ones. Create a seasonal maintenance schedule and stick to it. Your home is probably your biggest asset — treat it that way.</p>

<h2>Local Considerations for {area}</h2>
<p>Properties in {area} have their own characteristics. From Victorian terraces to modern estates, each building type has specific maintenance needs. A local {trade_label} who knows the area will understand these nuances and provide tailored advice for your particular property type.</p>
"""

    # FAQ section
    faq = f"""
<h2>Frequently Asked Questions</h2>
<details>
  <summary>How do I find a good {trade_label} in {area}?</summary>
  <p>Check Google reviews, ask for recommendations from neighbours, verify qualifications, and always get multiple written quotes before deciding.</p>
</details>
<details>
  <summary>How much should I expect to pay?</summary>
  <p>Costs vary depending on the job. Get at least three quotes to understand the going rate in {area}. Be wary of prices significantly below average.</p>
</details>
<details>
  <summary>Do I need to be home during the work?</summary>
  <p>For most jobs, it's helpful to be available at the start to discuss the work, but you don't necessarily need to be home the entire time. Discuss arrangements with your {trade_label} beforehand.</p>
</details>
"""

    # CTA
    cta = f"""
<div style="background:var(--accent-light);padding:32px;border-radius:16px;margin-top:40px;text-align:center;">
  <h2 style="font-size:1.4rem;">Need a {trade_label} in {area}?</h2>
  <p style="color:var(--stone);margin-top:8px;">Call {name} on <a href="tel:{phone_clean}" style="color:var(--accent);font-weight:600;">{phone}</a> for a free, no-obligation quote.</p>
  {'<a href="tel:' + phone_clean + '" style="display:inline-block;margin-top:16px;background:var(--dark);color:white;padding:12px 32px;border-radius:100px;font-weight:600;">Call Now</a>' if phone else ''}
</div>
"""

    return body + faq + cta


def generate_blog_page(trade, theme, title, blog_slug, homepage_path="../index.html"):
    """Generate a single blog page HTML."""
    from components.base import render_shared_css, nav_css, footer_css, get_trade_label

    name = trade["name"]
    area = trade.get("area", "")
    trade_type = trade.get("trade_type", "")
    trade_label = get_trade_label(trade_type)
    phone = trade.get("phone", "")
    phone_clean = phone.replace(" ", "").replace("-", "")
    desc = f"{title} - Expert advice from {name}, your trusted {trade_label} in {area}."
    desc_escaped = desc.replace('"', '&quot;')
    title_escaped = title.replace('"', '&quot;')

    body_content = _generate_blog_body(title, trade, area, trade_type)

    areas_json = ", ".join(f'{{"@type": "City", "name": "{a}"}}' for a in trade.get("areas_served", []))

    css = render_shared_css(theme) + nav_css() + footer_css() + """
    .blog-article { max-width: 720px; margin: 0 auto; padding: 40px 24px 64px; }
    .blog-article h1 { font-family: 'DM Serif Display', serif; font-size: 2.4rem; line-height: 1.15; margin-bottom: 16px; }
    .blog-meta { font-size: 0.85rem; color: var(--stone-light); margin-bottom: 40px; }
    .blog-article h2 { font-family: 'DM Serif Display', serif; font-size: 1.5rem; margin: 40px 0 16px; }
    .blog-article p { font-size: 0.95rem; line-height: 1.8; color: var(--stone); margin-bottom: 16px; }
    .blog-article ul { margin: 0 0 16px 20px; }
    .blog-article li { font-size: 0.95rem; line-height: 1.8; color: var(--stone); margin-bottom: 8px; }
    .blog-article details { border: 1px solid var(--border); border-radius: var(--radius); margin-bottom: 8px; overflow: hidden; background: white; }
    .blog-article summary { padding: 16px 20px; font-weight: 600; font-size: 0.9rem; cursor: pointer; list-style: none; }
    .blog-article summary::-webkit-details-marker { display: none; }
    .blog-article details p { padding: 0 20px 16px; margin: 0; }
    .blog-back { display: inline-block; margin-bottom: 24px; font-size: 0.85rem; color: var(--accent); font-weight: 600; }
    @media (max-width: 640px) { .blog-article h1 { font-size: 1.8rem; } }
    """

    phone_link = f'<a href="tel:{phone_clean}" class="nav-phone">{phone}</a>' if phone else ""

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | {name}</title>
  <meta name="description" content="{desc_escaped}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Serif+Display&display=swap" rel="stylesheet">
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "{title_escaped}",
    "description": "{desc_escaped}",
    "author": {{
      "@type": "Organization",
      "name": "{name}"
    }},
    "publisher": {{
      "@type": "Organization",
      "name": "{name}"
    }},
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-15"
  }}
  </script>
  <style>{css}</style>
</head>
<body>
  <nav class="th-nav">
    <a href="{homepage_path}" class="nav-name">{name}</a>
    {phone_link}
  </nav>

  <article class="blog-article">
    <a href="{homepage_path}" class="blog-back">← Back to homepage</a>
    <h1>{title}</h1>
    <div class="blog-meta">By {name} · {area} · January 2026</div>
    {body_content}
  </article>

  <footer class="th-footer">
    <p>&copy; 2026 {name} &middot; Listed on <a href="https://tradehub.uk/trades/{trade['slug']}" target="_blank" rel="noopener">TradeHub</a></p>
  </footer>
</body>
</html>"""


def generate_blogs_for_trade(trade, theme, output_dir):
    """Generate all blog pages for a trade. Returns count."""
    area = trade.get("area", "")
    trade_type = trade.get("trade_type", "")
    titles = get_blog_titles(trade_type, area)

    blog_dir = Path(output_dir) / "blog"
    blog_dir.mkdir(parents=True, exist_ok=True)

    count = 0
    for title, slug in titles:
        html = generate_blog_page(trade, theme, title, slug)
        (blog_dir / f"{slug}.html").write_text(html)
        count += 1

    return count
