#!/usr/bin/env python3
"""
TradeHub Client Website Generator

Usage:
  python3 generate.py <slug>
  python3 generate.py --all              # Generate for all outreach targets
  python3 generate.py --list             # List all outreach targets

Reads from trades.json, generates a static HTML website in /websites/<slug>/
"""

import json
import sys
import os
from pathlib import Path

TRADES_PATH = Path(__file__).parent.parent / "site" / "data" / "trades.json"
WEBSITES_DIR = Path(__file__).parent

# Service icon mapping
SERVICE_ICONS = {
    # Plumbing / Heating
    "boiler": "🔥", "heating": "🔥", "radiator": "🔥", "gas": "🔥", "combi": "🔥",
    "plumbing": "🔧", "pipe": "🔧", "tap": "🚰", "toilet": "🚽", "leak": "💧",
    "bathroom": "🚿", "shower": "🚿", "hot water": "♨️",
    # Electrical
    "rewir": "⚡", "socket": "🔌", "light": "💡", "consumer unit": "⚡",
    "fault": "🔍", "ev charger": "🔋", "solar": "☀️", "smart": "📱",
    "extractor": "🌀", "pat": "✅",
    # Locksmith
    "lock": "🔒", "key": "🔑", "emergency lockout": "🚨", "door": "🚪",
    "security": "🛡️", "upvc": "🚪", "boarding": "🪵", "auto": "🚗", "car": "🚗",
    # Roofing
    "roof": "🏠", "chimney": "🏠", "gutter": "🏠", "fascia": "🏠",
    "flat roof": "🏠", "tile": "🏠", "lead": "🏠",
    # Fencing
    "fence": "🪵", "gate": "🚪", "trellis": "🌿", "panel": "🪵",
    "post": "🪵", "timber": "🪵", "shed": "🏡",
    # Building
    "extension": "🏗️", "loft": "🏗️", "renovation": "🏗️", "building": "🏗️",
    "brick": "🧱", "concrete": "🧱",
    # Landscaping
    "lawn": "🌱", "garden": "🌳", "hedge": "✂️", "tree": "🌳",
    "paving": "🪨", "driveway": "🪨", "leaf": "🍂",
    # Painting
    "paint": "🎨", "decorat": "🎨", "wallpaper": "🎨",
    # General
    "furniture": "🪑", "tv": "📺", "blind": "🪟", "shelf": "📐",
    "repair": "🔧", "install": "⚙️", "handyman": "🏠",
}

# Color themes per trade type
THEMES = {
    "plumbers": {
        "bg": "#f7f8fc", "accent": "#2563eb", "accent_light": "#dbeafe",
        "dark": "#1e293b", "warm": "#f0f4ff"
    },
    "gas-engineers": {
        "bg": "#fefcf5", "accent": "#dc6b0a", "accent_light": "#fff3e0",
        "dark": "#2c1810", "warm": "#fef5eb"
    },
    "electricians": {
        "bg": "#f5f7fa", "accent": "#7c3aed", "accent_light": "#ede9fe",
        "dark": "#1a1033", "warm": "#f5f0ff"
    },
    "locksmiths": {
        "bg": "#f8f8f6", "accent": "#65750e", "accent_light": "#f0f4d4",
        "dark": "#1c1f0e", "warm": "#f5f5eb"
    },
    "roofers": {
        "bg": "#f8f6f5", "accent": "#b45309", "accent_light": "#fef3c7",
        "dark": "#2c1a0e", "warm": "#faf5eb"
    },
    "builders": {
        "bg": "#f6f7f5", "accent": "#4a7c59", "accent_light": "#dcfce7",
        "dark": "#1a2e1e", "warm": "#f0f5f0"
    },
    "fencing": {
        "bg": "#f8f7f5", "accent": "#92650a", "accent_light": "#fef9e7",
        "dark": "#2a1f0a", "warm": "#faf6eb"
    },
    "landscapers": {
        "bg": "#f5f8f5", "accent": "#2d7a3a", "accent_light": "#d1fae5",
        "dark": "#0f2912", "warm": "#eef5ee"
    },
    "painters": {
        "bg": "#f9f6f8", "accent": "#a855a0", "accent_light": "#fae8fa",
        "dark": "#2a1028", "warm": "#faf0fa"
    },
    "tilers": {
        "bg": "#f5f8fa", "accent": "#0e7490", "accent_light": "#cffafe",
        "dark": "#0c2a33", "warm": "#eef8fa"
    },
    "handymen": {
        "bg": "#fffbf5", "accent": "#d97706", "accent_light": "#fef3c7",
        "dark": "#2c1810", "warm": "#f5f0eb"
    },
    "carpenters": {
        "bg": "#faf8f5", "accent": "#92400e", "accent_light": "#fef3c7",
        "dark": "#2c1a0e", "warm": "#f5eeeb"
    },
}

DEFAULT_THEME = {
    "bg": "#fffbf5", "accent": "#d97706", "accent_light": "#fef3c7",
    "dark": "#2c1810", "warm": "#f5f0eb"
}


def get_icon(service_name: str) -> str:
    """Match a service to an emoji icon."""
    lower = service_name.lower()
    for keyword, icon in SERVICE_ICONS.items():
        if keyword in lower:
            return icon
    return "✓"


def generate_website(trade: dict) -> str:
    """Generate a complete HTML website for a tradesperson."""
    theme = THEMES.get(trade["trade_type"], DEFAULT_THEME)
    
    # Build services HTML
    services_html = ""
    for s in trade.get("services", []):
        icon = get_icon(s)
        services_html += f'        <div class="service-item"><span class="service-dot">{icon}</span> {s}</div>\n'
    
    # Build areas HTML
    areas_html = ""
    for a in trade.get("areas_served", []):
        areas_html += f'        <span class="area-tag">{a}</span>\n'
    
    # Build reviews HTML (only 5-star)
    five_star = [r for r in trade.get("reviews", []) if r.get("rating", 5) >= 5]
    if not five_star:
        five_star = trade.get("reviews", [])
    
    reviews_html = ""
    for r in five_star:
        stars = "★" * int(r.get("rating", 5))
        text = r.get("text", "")[:180]
        author = r.get("author", "Customer")
        date = r.get("date", "")
        # Format date
        date_display = ""
        if date:
            parts = date.split("-")
            months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            if len(parts) >= 2:
                month_idx = int(parts[1])
                date_display = f"{months[month_idx]} {parts[0]}"
        
        reviews_html += f"""        <div class="review-card">
          <div class="review-stars">{stars}</div>
          <p class="review-text">"{text}"</p>
          <p class="review-author">— {author}{f' · {date_display}' if date_display else ''}</p>
        </div>
"""

    # Determine trade label
    trade_label = trade["trade_type"].replace("-", " ").rstrip("s")
    
    # First name extraction (guess from description or use business name)
    name = trade["name"]
    
    # Phone formatting
    phone = trade.get("phone", "")
    phone_clean = phone.replace(" ", "").replace("-", "")
    
    desc_escaped = trade.get('description', '').replace('"', '&quot;')
    
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{name} — Trusted {trade_label.title()} in {trade['area']}</title>
  <meta name="description" content="{trade.get('description', '')[:155]}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=DM+Serif+Display&display=swap" rel="stylesheet">

  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "{name}",
    "description": "{desc_escaped}",
    "telephone": "{phone_clean}",
    "areaServed": [{', '.join(f'{{"@type": "City", "name": "{a}"}}' for a in trade.get('areas_served', []))}],
    "aggregateRating": {{
      "@type": "AggregateRating",
      "ratingValue": "{trade.get('rating', 5)}",
      "reviewCount": "{trade.get('review_count', 0)}"
    }}
  }}
  </script>

  <style>
    * {{ margin: 0; padding: 0; box-sizing: border-box; }}
    :root {{
      --bg: {theme['bg']};
      --accent: {theme['accent']};
      --accent-light: {theme['accent_light']};
      --dark: {theme['dark']};
      --warm: {theme['warm']};
      --stone: #78716c;
      --stone-light: #a8a29e;
      --border: #e7e0d8;
    }}
    body {{
      font-family: 'Inter', -apple-system, sans-serif;
      color: var(--dark);
      background: var(--bg);
      -webkit-font-smoothing: antialiased;
    }}
    a {{ text-decoration: none; color: inherit; }}

    nav {{
      padding: 20px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 960px;
      margin: 0 auto;
    }}
    .nav-name {{
      font-family: 'DM Serif Display', serif;
      font-size: 1.3rem;
    }}
    .nav-phone {{
      font-weight: 600;
      font-size: 0.85rem;
      background: var(--accent-light);
      color: var(--dark);
      padding: 8px 20px;
      border-radius: 100px;
      transition: all 0.2s;
    }}
    .nav-phone:hover {{ background: var(--accent); color: white; }}

    .hero {{
      max-width: 960px;
      margin: 0 auto;
      padding: 60px 24px 40px;
    }}
    .hero-badge {{
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--accent);
      margin-bottom: 20px;
    }}
    .hero h1 {{
      font-family: 'DM Serif Display', serif;
      font-size: 3.2rem;
      line-height: 1.1;
      max-width: 600px;
    }}
    .hero-desc {{
      margin-top: 20px;
      font-size: 1.1rem;
      color: var(--stone);
      line-height: 1.7;
      max-width: 480px;
    }}
    .hero-stats {{
      display: flex;
      gap: 32px;
      margin-top: 32px;
    }}
    .stat-num {{
      font-family: 'DM Serif Display', serif;
      font-size: 2rem;
    }}
    .stat-label {{
      font-size: 0.8rem;
      color: var(--stone-light);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 500;
    }}
    .hero-actions {{
      display: flex;
      gap: 12px;
      margin-top: 36px;
      flex-wrap: wrap;
    }}
    .btn-primary {{
      background: var(--dark);
      color: white;
      padding: 14px 32px;
      border-radius: 100px;
      font-weight: 600;
      font-size: 0.95rem;
      transition: all 0.2s;
    }}
    .btn-primary:hover {{ opacity: 0.9; transform: translateY(-1px); }}
    .btn-secondary {{
      border: 1.5px solid var(--border);
      padding: 14px 32px;
      border-radius: 100px;
      font-weight: 500;
      font-size: 0.95rem;
      color: var(--stone);
      transition: all 0.2s;
    }}
    .btn-secondary:hover {{ border-color: var(--dark); color: var(--dark); }}

    .divider {{ max-width: 960px; margin: 0 auto; padding: 0 24px; }}
    .divider hr {{ border: none; border-top: 1px solid var(--border); }}

    .section {{ max-width: 960px; margin: 0 auto; padding: 56px 24px; }}
    .section-label {{
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--accent);
      margin-bottom: 12px;
    }}
    .section h2 {{
      font-family: 'DM Serif Display', serif;
      font-size: 2rem;
      margin-bottom: 32px;
    }}

    .services-list {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 12px;
    }}
    .service-item {{
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      background: white;
      border: 1px solid var(--border);
      border-radius: 12px;
      font-weight: 500;
      font-size: 0.9rem;
      transition: border-color 0.2s;
    }}
    .service-item:hover {{ border-color: var(--accent); }}
    .service-dot {{ font-size: 1.2rem; flex-shrink: 0; }}

    .areas-tags {{
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }}
    .area-tag {{
      padding: 10px 24px;
      border: 1px solid var(--border);
      border-radius: 100px;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--stone);
      background: white;
    }}

    .reviews-section {{
      background: var(--warm);
      padding: 56px 0;
      overflow: hidden;
    }}
    .reviews-inner {{
      max-width: 960px;
      margin: 0 auto;
      padding: 0 24px;
    }}
    .reviews-header {{
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 32px;
    }}
    .reviews-header h2 {{
      font-family: 'DM Serif Display', serif;
      font-size: 2rem;
    }}
    .reviews-nav {{
      display: flex;
      gap: 8px;
    }}
    .reviews-nav button {{
      width: 40px; height: 40px;
      border-radius: 50%;
      border: 1.5px solid var(--border);
      background: white;
      cursor: pointer;
      font-size: 1rem;
      color: var(--dark);
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }}
    .reviews-nav button:hover {{
      border-color: var(--dark);
      background: var(--dark);
      color: white;
    }}
    .carousel-track {{
      display: flex;
      gap: 16px;
      transition: transform 0.4s ease;
    }}
    .review-card {{
      background: white;
      border-radius: 16px;
      padding: 24px;
      min-width: 260px;
      max-width: 260px;
      flex-shrink: 0;
    }}
    .review-stars {{
      color: var(--accent);
      font-size: 1rem;
      letter-spacing: 2px;
    }}
    .review-text {{
      margin-top: 12px;
      font-size: 0.88rem;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }}
    .review-author {{
      margin-top: 16px;
      font-size: 0.8rem;
      color: var(--stone-light);
      font-weight: 500;
    }}
    .reviews-count {{
      text-align: center;
      margin-top: 24px;
      font-size: 0.85rem;
      color: var(--stone);
    }}

    .cta {{
      max-width: 960px;
      margin: 0 auto;
      padding: 64px 24px;
      text-align: center;
    }}
    .cta h2 {{
      font-family: 'DM Serif Display', serif;
      font-size: 2.4rem;
      max-width: 500px;
      margin: 0 auto;
      line-height: 1.2;
    }}
    .cta p {{ color: var(--stone); margin-top: 12px; font-size: 1rem; }}
    .cta-btn {{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 28px;
      background: var(--dark);
      color: white;
      padding: 16px 40px;
      border-radius: 100px;
      font-weight: 600;
      font-size: 1.05rem;
      transition: all 0.2s;
    }}
    .cta-btn:hover {{ opacity: 0.9; transform: translateY(-1px); }}
    .cta-number {{
      margin-top: 16px;
      font-size: 0.85rem;
      color: var(--stone-light);
    }}

    footer {{
      border-top: 1px solid var(--border);
      padding: 20px 24px;
      text-align: center;
    }}
    footer p {{ font-size: 0.75rem; color: var(--stone-light); }}
    footer a {{ color: var(--accent); font-weight: 500; }}
    footer a:hover {{ text-decoration: underline; }}

    @media (max-width: 640px) {{
      .hero h1 {{ font-size: 2.2rem; }}
      .hero {{ padding: 40px 24px 32px; }}
      .hero-stats {{ gap: 24px; }}
      .stat-num {{ font-size: 1.5rem; }}
      .services-list {{ grid-template-columns: 1fr 1fr; }}
      .cta h2 {{ font-size: 1.8rem; }}
      .review-card {{ min-width: 240px; max-width: 240px; }}
      .reviews-header {{ flex-direction: column; align-items: flex-start; gap: 16px; }}
    }}
    @media (max-width: 380px) {{
      .services-list {{ grid-template-columns: 1fr; }}
      .review-card {{ min-width: 220px; max-width: 220px; }}
    }}
  </style>
</head>
<body>

  <nav>
    <div class="nav-name">{name}</div>
    <a href="tel:{phone_clean}" class="nav-phone">{phone}</a>
  </nav>

  <section class="hero">
    <div class="hero-badge">Trusted local {trade_label}</div>
    <h1>Your trusted {trade_label} in {trade['area']}.</h1>
    <p class="hero-desc">{trade.get('description', '')}</p>
    <div class="hero-stats">
      <div>
        <div class="stat-num">{trade.get('rating', 5)}★</div>
        <div class="stat-label">Google Rating</div>
      </div>
      <div>
        <div class="stat-num">{trade.get('review_count', 0)}</div>
        <div class="stat-label">Reviews</div>
      </div>
    </div>
    <div class="hero-actions">
      <a href="tel:{phone_clean}" class="btn-primary">Call Now</a>
      <a href="sms:{phone_clean}" class="btn-secondary">Text me instead</a>
    </div>
  </section>

  <div class="divider"><hr></div>

  <section class="section">
    <div class="section-label">What we do</div>
    <h2>Services</h2>
    <div class="services-list">
{services_html}    </div>
  </section>

  <section class="section" style="padding-top:0">
    <div class="section-label">Where we work</div>
    <h2>Areas Covered</h2>
    <div class="areas-tags">
{areas_html}    </div>
  </section>

  <section class="reviews-section">
    <div class="reviews-inner">
      <div class="reviews-header">
        <div>
          <div class="section-label">What people say</div>
          <h2>Customer Reviews</h2>
        </div>
        <div class="reviews-nav">
          <button onclick="scrollCarousel(-1)" aria-label="Previous">←</button>
          <button onclick="scrollCarousel(1)" aria-label="Next">→</button>
        </div>
      </div>
      <div class="carousel-track" id="carousel">
{reviews_html}      </div>
      <p class="reviews-count">Selected reviews · {trade.get('review_count', 0)} reviews on Google</p>
    </div>
  </section>

  <section class="cta">
    <h2>Ready to get started?</h2>
    <p>Give us a call or drop a text. No obligation, just a chat.</p>
    <a href="tel:{phone_clean}" class="cta-btn">Call {phone}</a>
    <p class="cta-number">or text if you prefer</p>
  </section>

  <footer>
    <p>© 2026 {name} · Listed on <a href="https://tradehub.uk/trades/{trade['slug']}" target="_blank" rel="noopener">TradeHub</a></p>
  </footer>

  <script>
    const carousel = document.getElementById('carousel');
    const cards = carousel.children;
    const totalCards = cards.length;
    let currentIndex = 0;
    let autoPlay;

    function goToCard(index) {{
      currentIndex = index;
      if (currentIndex >= totalCards) currentIndex = 0;
      if (currentIndex < 0) currentIndex = totalCards - 1;
      const card = cards[currentIndex];
      const offset = card.offsetLeft - 24;
      carousel.style.transform = `translateX(-${{offset}}px)`;
    }}

    function scrollCarousel(direction) {{
      goToCard(currentIndex + direction);
    }}

    function startAutoPlay() {{
      autoPlay = setInterval(() => goToCard(currentIndex + 1), 3000);
    }}

    function stopAutoPlay() {{
      clearInterval(autoPlay);
    }}

    startAutoPlay();
    carousel.parentElement.addEventListener('mouseenter', stopAutoPlay);
    carousel.parentElement.addEventListener('mouseleave', startAutoPlay);

    document.querySelectorAll('.reviews-nav button').forEach(btn => {{
      btn.addEventListener('click', () => {{
        stopAutoPlay();
        setTimeout(startAutoPlay, 5000);
      }});
    }});

    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => {{
      touchStartX = e.changedTouches[0].screenX;
      stopAutoPlay();
    }}, {{ passive: true }});

    carousel.addEventListener('touchend', (e) => {{
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) scrollCarousel(diff > 0 ? 1 : -1);
      setTimeout(startAutoPlay, 5000);
    }}, {{ passive: true }});
  </script>

</body>
</html>"""
    return html


def load_trades():
    with open(TRADES_PATH) as f:
        return json.load(f)


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 generate.py <slug>")
        print("       python3 generate.py --all")
        print("       python3 generate.py --list")
        sys.exit(1)
    
    trades = load_trades()
    
    if sys.argv[1] == "--list":
        targets = [t for t in trades if t.get("outreach_target")]
        print(f"\n{len(targets)} outreach targets:\n")
        for t in targets:
            print(f"  {t['slug']:40s} {t['name']:40s} {t['trade_type']:15s} {t['area']}")
        return
    
    if sys.argv[1] == "--all":
        targets = [t for t in trades if t.get("outreach_target")]
        print(f"Generating websites for {len(targets)} outreach targets...\n")
        for t in targets:
            output_dir = WEBSITES_DIR / t["slug"]
            output_dir.mkdir(exist_ok=True)
            html = generate_website(t)
            (output_dir / "index.html").write_text(html)
            print(f"  ✓ {t['slug']}/index.html ({t['name']})")
        print(f"\nDone! {len(targets)} websites generated.")
        return
    
    slug = sys.argv[1]
    trade = next((t for t in trades if t["slug"] == slug), None)
    if not trade:
        print(f"Error: No trade found with slug '{slug}'")
        print("Available slugs:")
        for t in trades[:10]:
            print(f"  {t['slug']}")
        sys.exit(1)
    
    output_dir = WEBSITES_DIR / slug
    output_dir.mkdir(exist_ok=True)
    html = generate_website(trade)
    (output_dir / "index.html").write_text(html)
    print(f"✓ Generated {output_dir}/index.html")
    print(f"  {trade['name']} ({trade['trade_type']}, {trade['area']})")
    print(f"  {trade['rating']}★ · {trade['review_count']} reviews · {len(trade.get('services', []))} services")


if __name__ == "__main__":
    main()
