#!/usr/bin/env python3
"""
Generate a Claude Code brief for a trade website.

Usage:
  python3 generate_brief.py <slug>
  python3 generate_brief.py --list        # List all outreach targets
  python3 generate_brief.py <slug> --copy  # Copy to clipboard (macOS)
"""

import json, sys, re
from pathlib import Path

TRADES_PATH = Path(__file__).parent.parent / "site" / "data" / "trades.json"
TEMPLATE_PATH = Path(__file__).parent / "WEBSITE_BRIEF_TEMPLATE.md"


def load_trades():
    with open(TRADES_PATH) as f:
        return json.load(f)


def generate_brief(trade):
    template = TEMPLATE_PATH.read_text()

    phone = trade.get("phone", "")
    phone_clean = re.sub(r"[^0-9]", "", phone)
    if phone_clean.startswith("0"):
        phone_clean = phone_clean[1:]  # Strip leading 0 for WhatsApp

    services = "\n".join(f"- {s}" for s in trade.get("services", []))
    areas = ", ".join(trade.get("areas_served", []))
    accreds = ", ".join(trade.get("accreditations", [])) or "None listed"

    reviews = ""
    for r in trade.get("reviews", []):
        stars = "★" * r.get("rating", 5)
        reviews += f'- {stars} "{r["text"]}" — {r["author"]}, {r.get("date", "")}\n'
    if not reviews:
        reviews = "(No reviews in database — research their Google reviews before building)"

    brief = template
    replacements = {
        "{{BUSINESS_NAME}}": trade["name"],
        "{{TRADE_TYPE}}": trade["trade_type"].replace("-", " "),
        "{{PRIMARY_AREA}}": trade.get("area", ""),
        "{{PHONE}}": phone,
        "{{PHONE_CLEAN}}": phone_clean,
        "{{EMAIL}}": trade.get("email", "") or "Not listed",
        "{{ADDRESS}}": trade.get("address", "") or "Not listed",
        "{{RATING}}": str(trade.get("rating", "N/A")),
        "{{REVIEW_COUNT}}": str(trade.get("review_count", 0)),
        "{{EMERGENCY}}": "Yes" if trade.get("emergency") else "No",
        "{{ACCREDITATIONS}}": accreds,
        "{{SERVICES_LIST}}": services,
        "{{AREAS_LIST}}": areas,
        "{{REVIEWS}}": reviews,
        "{{NOTES}}": "",
        "{{SLUG}}": trade["slug"],
    }

    for key, val in replacements.items():
        brief = brief.replace(key, val)

    return brief


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 generate_brief.py <slug> [--copy]")
        print("       python3 generate_brief.py --list")
        sys.exit(1)

    trades = load_trades()

    if sys.argv[1] == "--list":
        targets = [t for t in trades if t.get("outreach_target")]
        targets.sort(key=lambda x: (-x.get("review_count", 0)))
        print(f"\n{len(targets)} outreach targets:\n")
        for t in targets:
            has_site = Path(__file__).parent / t["slug"] / "index.html"
            status = "✅ BUILT" if has_site.exists() else "⬜ TODO"
            print(f"  {status} {t['slug']:45s} {t['rating']}★ ({t['review_count']:3d}) {t['trade_type']}")
        return

    slug = sys.argv[1]
    trade = next((t for t in trades if t["slug"] == slug), None)
    if not trade:
        print(f"Error: No trade '{slug}' found")
        sys.exit(1)

    brief = generate_brief(trade)
    print(brief)

    if "--copy" in sys.argv:
        import subprocess
        subprocess.run(["pbcopy"], input=brief.encode(), check=True)
        print("\n✅ Brief copied to clipboard!")


if __name__ == "__main__":
    main()
