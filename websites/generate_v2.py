#!/usr/bin/env python3
"""
TradeHub Client Website Generator v2 — Component-based system.

Usage:
  python3 generate_v2.py <slug>              # Generate one website
  python3 generate_v2.py --all               # Generate all outreach targets
  python3 generate_v2.py --list              # List targets
  python3 generate_v2.py <slug> --with-blogs # Include blog pages
  python3 generate_v2.py --all --with-blogs  # Everything
"""

import json
import sys
import os
from pathlib import Path

# Ensure we can import from this directory
sys.path.insert(0, str(Path(__file__).parent))

TRADES_PATH = Path(__file__).parent.parent / "site" / "data" / "trades.json"
WEBSITES_DIR = Path(__file__).parent
CONFIGS_DIR = WEBSITES_DIR / "configs"

from components.base import (
    get_theme, render_head, render_nav, render_footer,
    nav_css, footer_css, get_trade_label
)
from components import hero_a, hero_b, hero_c
from components import trust_bar, services_grid, services_list
from components import how_it_works, reviews_carousel, reviews_grid
from components import areas, about, accreditations, faq
from components import cta_banner, blog_list, whatsapp_button, contact_form, gallery
from blog_generator import generate_blogs_for_trade

# Component registry
COMPONENTS = {
    "hero_a": hero_a,
    "hero_b": hero_b,
    "hero_c": hero_c,
    "trust_bar": trust_bar,
    "services_grid": services_grid,
    "services_list": services_list,
    "how_it_works": how_it_works,
    "reviews_carousel": reviews_carousel,
    "reviews_grid": reviews_grid,
    "areas": areas,
    "about": about,
    "accreditations": accreditations,
    "faq": faq,
    "cta_banner": cta_banner,
    "blog_list": blog_list,
    "whatsapp_button": whatsapp_button,
    "contact_form": contact_form,
    "gallery": gallery,
}

# Default block configs per trade type
DEFAULT_CONFIGS = {
    "plumbers": {
        "hero": "hero_a",
        "blocks": ["trust_bar", "how_it_works", "services_grid", "reviews_carousel", "areas", "faq", "blog_list", "cta_banner"],
        "whatsapp": True,
    },
    "gas-engineers": {
        "hero": "hero_a",
        "blocks": ["trust_bar", "accreditations", "how_it_works", "services_grid", "reviews_carousel", "areas", "faq", "blog_list", "cta_banner"],
        "whatsapp": True,
    },
    "locksmiths": {
        "hero": "hero_b",
        "blocks": ["trust_bar", "services_grid", "reviews_carousel", "areas", "faq", "cta_banner"],
        "whatsapp": True,
    },
    "fencing": {
        "hero": "hero_c",
        "blocks": ["services_grid", "areas", "reviews_grid", "cta_banner"],
        "whatsapp": True,
    },
    "landscapers": {
        "hero": "hero_c",
        "blocks": ["services_grid", "areas", "reviews_grid", "cta_banner"],
        "whatsapp": True,
    },
    "builders": {
        "hero": "hero_a",
        "blocks": ["trust_bar", "how_it_works", "services_list", "reviews_carousel", "about", "faq", "blog_list", "cta_banner"],
        "whatsapp": True,
    },
    "_default": {
        "hero": "hero_a",
        "blocks": ["trust_bar", "services_grid", "gallery", "reviews_carousel", "areas", "faq", "cta_banner"],
        "whatsapp": True,
    },
}


def load_config(slug, trade_type):
    """Load config from file, or generate default."""
    config_path = CONFIGS_DIR / f"{slug}.json"
    if config_path.exists():
        with open(config_path) as f:
            return json.load(f)

    # Auto-generate default
    defaults = DEFAULT_CONFIGS.get(trade_type, DEFAULT_CONFIGS["_default"])
    return {
        "slug": slug,
        "theme": "auto",
        "hero": defaults["hero"],
        "hero_headline": None,
        "hero_subtitle": None,
        "blocks": defaults["blocks"],
        "whatsapp": defaults.get("whatsapp", True),
        "blogs": True,
        "custom_faq": None,
        "custom_how_it_works": None,
    }


def generate_website(trade, config=None):
    """Generate a complete HTML website from components."""
    trade_type = trade["trade_type"]
    if config is None:
        config = load_config(trade["slug"], trade_type)

    # Resolve theme
    if config.get("theme", "auto") == "auto":
        theme = get_theme(trade_type)
    else:
        theme = get_theme(config["theme"])

    # Collect all CSS
    all_css = nav_css() + footer_css()
    all_js = ""

    # Hero component
    hero_name = config.get("hero", "hero_a")
    hero_mod = COMPONENTS.get(hero_name, hero_a)
    all_css += hero_mod.css()

    # Block components
    block_modules = []
    for block_name in config.get("blocks", []):
        mod = COMPONENTS.get(block_name)
        if mod:
            block_modules.append((block_name, mod))
            all_css += mod.css()

    # WhatsApp
    if config.get("whatsapp", True) and trade.get("phone"):
        all_css += whatsapp_button.css()

    # Collect JS from components that have it
    block_names = [b[0] for b in block_modules]
    if "reviews_carousel" in block_names:
        all_js += reviews_carousel.js()
    if "gallery" in block_names:
        all_js += gallery.js()

    # Render
    head = render_head(trade, theme, extra_css=all_css)
    nav = render_nav(trade, theme)
    hero_html = hero_mod.render(trade, theme, config)

    blocks_html = ""
    for block_name, mod in block_modules:
        blocks_html += mod.render(trade, theme, config)

    wa_html = ""
    if config.get("whatsapp", True) and trade.get("phone"):
        wa_html = whatsapp_button.render(trade, theme, config)

    footer = render_footer(trade, theme)

    # Assemble
    html = head + nav + hero_html + blocks_html + wa_html + "\n" + all_js + "\n" + footer
    return html


def load_trades():
    with open(TRADES_PATH) as f:
        return json.load(f)


def generate_one(slug, with_blogs=False):
    trades = load_trades()
    trade = next((t for t in trades if t["slug"] == slug), None)
    if not trade:
        print(f"Error: No trade found with slug '{slug}'")
        available = [t["slug"] for t in trades[:10]]
        print(f"Available: {', '.join(available)}...")
        sys.exit(1)

    config = load_config(slug, trade["trade_type"])
    theme = get_theme(trade["trade_type"]) if config.get("theme", "auto") == "auto" else get_theme(config["theme"])

    output_dir = WEBSITES_DIR / slug
    output_dir.mkdir(exist_ok=True)

    html = generate_website(trade, config)
    (output_dir / "index.html").write_text(html)
    print(f"  ✓ {slug}/index.html ({trade['name']} — {config.get('hero', 'hero_a')})")

    if with_blogs:
        count = generate_blogs_for_trade(trade, theme, output_dir)
        print(f"    + {count} blog pages in {slug}/blog/")


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    trades = load_trades()
    with_blogs = "--with-blogs" in sys.argv

    if sys.argv[1] == "--list":
        targets = [t for t in trades if t.get("outreach_target")]
        print(f"\n{len(targets)} outreach targets:\n")
        for t in targets:
            config = load_config(t["slug"], t["trade_type"])
            print(f"  {t['slug']:45s} {t['trade_type']:15s} {config.get('hero','hero_a'):8s} {t['area']}")
        return

    if sys.argv[1] == "--all":
        targets = [t for t in trades if t.get("outreach_target")]
        print(f"Generating {len(targets)} websites...\n")
        for t in targets:
            generate_one(t["slug"], with_blogs)
        print(f"\nDone! {len(targets)} websites generated.")
        return

    slug = sys.argv[1]
    generate_one(slug, with_blogs)


if __name__ == "__main__":
    main()
