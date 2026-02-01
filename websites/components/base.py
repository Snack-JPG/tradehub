"""
Shared base components: head, nav, footer, themes, CSS.
Bold trade aesthetic — Bebas Neue + IBM Plex Sans, dark sections, accent pops.
"""

SERVICE_ICONS = {
    "boiler": "🔥", "heating": "🔥", "radiator": "🔥", "gas": "🔥", "combi": "🔥",
    "plumbing": "🔧", "pipe": "🔧", "tap": "🚰", "toilet": "🚽", "leak": "💧",
    "bathroom": "🚿", "shower": "🚿", "hot water": "♨️",
    "rewir": "⚡", "socket": "🔌", "light": "💡", "consumer unit": "⚡",
    "fault": "🔍", "ev charger": "🔋", "solar": "☀️", "smart": "📱",
    "extractor": "🌀", "pat": "✅",
    "lock": "🔒", "key": "🔑", "emergency lockout": "🚨", "door": "🚪",
    "security": "🛡️", "upvc": "🚪", "boarding": "🪵", "auto": "🚗", "car": "🚗",
    "roof": "🏠", "chimney": "🏠", "gutter": "🏠", "fascia": "🏠",
    "flat roof": "🏠", "tile": "🏠", "lead": "🏠",
    "fence": "🪵", "gate": "🚪", "trellis": "🌿", "panel": "🪵",
    "post": "🪵", "timber": "🪵", "shed": "🏡",
    "extension": "🏗️", "loft": "🏗️", "renovation": "🏗️", "building": "🏗️",
    "brick": "🧱", "concrete": "🧱",
    "lawn": "🌱", "garden": "🌳", "hedge": "✂️", "tree": "🌳",
    "paving": "🪨", "driveway": "🪨", "leaf": "🍂",
    "paint": "🎨", "decorat": "🎨", "wallpaper": "🎨",
    "furniture": "🪑", "tv": "📺", "blind": "🪟", "shelf": "📐",
    "repair": "🔧", "install": "⚙️", "handyman": "🏠",
}

THEMES = {
    "electricians": {
        "bg": "#f5f5f0", "accent": "#EAB308", "accent_light": "#fef9c3",
        "dark": "#1a1a1a", "warm": "#f0efe8", "charcoal": "#1c1c1c"
    },
    "plumbers": {
        "bg": "#f0f4f8", "accent": "#2563eb", "accent_light": "#dbeafe",
        "dark": "#0f172a", "warm": "#e8edf4", "charcoal": "#1e293b"
    },
    "gas-engineers": {
        "bg": "#f5f0eb", "accent": "#E85A1B", "accent_light": "#fed7aa",
        "dark": "#1a1210", "warm": "#f0ebe5", "charcoal": "#1c1410"
    },
    "locksmiths": {
        "bg": "#f5f4f0", "accent": "#D4A017", "accent_light": "#fef3c7",
        "dark": "#111111", "warm": "#f0efe8", "charcoal": "#1a1a1a"
    },
    "builders": {
        "bg": "#f0f4f0", "accent": "#22C55E", "accent_light": "#dcfce7",
        "dark": "#0a1a0e", "warm": "#e8f0e8", "charcoal": "#1a2e1e"
    },
    "roofers": {
        "bg": "#f5f3f0", "accent": "#F59E0B", "accent_light": "#fef3c7",
        "dark": "#1a1814", "warm": "#f0ede8", "charcoal": "#1e1c18"
    },
    "fencing": {
        "bg": "#f5f3f0", "accent": "#B8860B", "accent_light": "#fef9e7",
        "dark": "#1a1508", "warm": "#f0ebe0", "charcoal": "#2a1f0a"
    },
    "landscapers": {
        "bg": "#f0f5f0", "accent": "#16A34A", "accent_light": "#dcfce7",
        "dark": "#0a170a", "warm": "#e8f0e8", "charcoal": "#0f2912"
    },
    "painters": {
        "bg": "#f5f0f4", "accent": "#E11D48", "accent_light": "#ffe4e6",
        "dark": "#1a0a14", "warm": "#f0e8ee", "charcoal": "#2a1028"
    },
    "tilers": {
        "bg": "#f0f5f8", "accent": "#0ea5e9", "accent_light": "#e0f2fe",
        "dark": "#0c1a24", "warm": "#e8f0f5", "charcoal": "#0c2a33"
    },
    "handymen": {
        "bg": "#f5f3f0", "accent": "#E85A1B", "accent_light": "#fed7aa",
        "dark": "#1a1410", "warm": "#f0ebe5", "charcoal": "#2c1810"
    },
    "carpenters": {
        "bg": "#f5f2f0", "accent": "#D97706", "accent_light": "#fef3c7",
        "dark": "#1a1208", "warm": "#f0ebe5", "charcoal": "#2c1a0e"
    },
    "plasterers": {
        "bg": "#f2f2f0", "accent": "#9CA3AF", "accent_light": "#f3f4f6",
        "dark": "#18181b", "warm": "#ededeb", "charcoal": "#1f2937"
    },
}

DEFAULT_THEME = {
    "bg": "#f5f3f0", "accent": "#E85A1B", "accent_light": "#fed7aa",
    "dark": "#1a1410", "warm": "#f0ebe5", "charcoal": "#1c1c1c"
}


def get_theme(trade_type):
    return THEMES.get(trade_type, DEFAULT_THEME)


def get_icon(service_name):
    lower = service_name.lower()
    for keyword, icon in SERVICE_ICONS.items():
        if keyword in lower:
            return icon
    return "✓"


def get_trade_label(trade_type):
    return trade_type.replace("-", " ").rstrip("s")


def render_shared_css(theme):
    return f"""
    * {{ margin: 0; padding: 0; box-sizing: border-box; }}
    :root {{
      --bg: {theme['bg']};
      --accent: {theme['accent']};
      --accent-light: {theme['accent_light']};
      --dark: {theme['dark']};
      --warm: {theme['warm']};
      --charcoal: {theme.get('charcoal', '#1c1c1c')};
      --stone: #64748b;
      --stone-light: #94a3b8;
      --border: #d4d4d4;
      --radius: 8px;
    }}
    body {{
      font-family: 'IBM Plex Sans', -apple-system, sans-serif;
      color: var(--charcoal);
      background: var(--bg);
      -webkit-font-smoothing: antialiased;
      line-height: 1.6;
    }}
    a {{ text-decoration: none; color: inherit; }}
    img {{ max-width: 100%; }}
    .section {{
      max-width: 960px;
      margin: 0 auto;
      padding: 72px 24px;
    }}
    .section-label {{
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--accent);
      margin-bottom: 12px;
    }}
    .section h2 {{
      font-family: 'Bebas Neue', sans-serif;
      font-size: 2.5rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 32px;
      line-height: 1.1;
    }}
    .section-dark {{
      background: var(--dark);
      color: #ffffff;
    }}
    .section-dark .section-label {{
      color: var(--accent);
    }}
    .section-dark h2 {{
      color: #ffffff;
    }}
    .btn-primary {{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--accent);
      color: white;
      padding: 16px 36px;
      border-radius: var(--radius);
      font-weight: 700;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      transition: all 0.2s;
      border: none;
      cursor: pointer;
    }}
    .btn-primary:hover {{ opacity: 0.9; transform: translateY(-1px); }}
    .btn-secondary {{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border: 2px solid rgba(255,255,255,0.3);
      padding: 16px 36px;
      border-radius: var(--radius);
      font-weight: 600;
      font-size: 1rem;
      color: white;
      transition: all 0.2s;
      background: transparent;
      cursor: pointer;
    }}
    .btn-secondary:hover {{ border-color: white; color: white; }}
    .divider {{ max-width: 960px; margin: 0 auto; padding: 0 24px; }}
    .divider hr {{ border: none; border-top: 1px solid var(--border); }}
    @media (max-width: 640px) {{
      .section h2 {{ font-size: 2rem; }}
      .section {{ padding: 56px 24px; }}
    }}
    """


def render_head(trade, theme, extra_css="", title_override=None, desc_override=None, extra_head=""):
    name = trade["name"]
    trade_label = get_trade_label(trade["trade_type"])
    title = title_override or f"{name} — Trusted {trade_label.title()} in {trade['area']}"
    desc = desc_override or trade.get("description", "")[:155]
    desc_escaped = desc.replace('"', '&quot;')
    phone_clean = trade.get("phone", "").replace(" ", "").replace("-", "")

    areas_json = ", ".join(
        f'{{"@type": "City", "name": "{a}"}}'
        for a in trade.get("areas_served", [])
    )

    schema = ""
    if trade.get("review_count", 0) > 0:
        schema = f"""
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "{name}",
    "description": "{desc_escaped}",
    "telephone": "{phone_clean}",
    "areaServed": [{areas_json}],
    "aggregateRating": {{
      "@type": "AggregateRating",
      "ratingValue": "{trade.get('rating', 5)}",
      "reviewCount": "{trade.get('review_count', 0)}"
    }}
  }}
  </script>"""

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="description" content="{desc_escaped}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  {schema}
  {extra_head}
  <style>
    {render_shared_css(theme)}
    {extra_css}
  </style>
</head>"""


def render_nav(trade, theme):
    phone = trade.get("phone", "")
    phone_clean = phone.replace(" ", "").replace("-", "")
    phone_link = f'<a href="tel:{phone_clean}" class="nav-phone">📞 {phone}</a>' if phone else ""
    return f"""
<body>
  <nav class="th-nav">
    <div class="nav-name">{trade['name']}</div>
    {phone_link}
  </nav>"""


def render_footer(trade, theme):
    return f"""
  <footer class="th-footer">
    <p>&copy; 2026 {trade['name']} &middot; Listed on <a href="https://tradehub.uk/trades/{trade['slug']}" target="_blank" rel="noopener">TradeHub</a></p>
  </footer>
</body>
</html>"""


def nav_css():
    return """
    .th-nav {
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 960px;
      margin: 0 auto;
      position: sticky;
      top: 0;
      background: var(--dark);
      z-index: 100;
      max-width: 100%;
    }
    .th-nav .nav-name {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.5rem;
      letter-spacing: 0.04em;
      color: white;
    }
    .nav-phone {
      font-weight: 700;
      font-size: 0.9rem;
      background: var(--accent);
      color: white;
      padding: 10px 24px;
      border-radius: var(--radius);
      transition: all 0.2s;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .nav-phone:hover { opacity: 0.9; transform: translateY(-1px); }
    """


def footer_css():
    return """
    .th-footer {
      background: var(--dark);
      padding: 32px 24px;
      text-align: center;
    }
    .th-footer p { font-size: 0.8rem; color: rgba(255,255,255,0.5); }
    .th-footer a { color: var(--accent); font-weight: 600; }
    .th-footer a:hover { text-decoration: underline; }
    """
