#!/usr/bin/env python3
"""
Check domain availability for TradeHub prospects.

Usage:
  python3 check_domains.py <slug>          # Check one prospect
  python3 check_domains.py --all           # Check all outreach targets
"""

import subprocess, json, sys, re
from pathlib import Path

TRADES_PATH = Path(__file__).parent.parent / "site" / "data" / "trades.json"


def check_domain(domain):
    try:
        result = subprocess.run(["host", domain], capture_output=True, text=True, timeout=5)
        if "NXDOMAIN" in result.stdout or "not found" in result.stdout:
            return True
        elif "has address" in result.stdout:
            return False
        return None
    except:
        return None


def generate_domain_suggestions(trade):
    """Generate smart domain suggestions based on business name and trade."""
    name = trade["name"].lower()
    trade_type = trade["trade_type"]
    area = trade.get("area", "").lower().replace(" ", "")

    # Clean the name into slug parts
    clean = re.sub(r"[^a-z0-9\s]", "", name)
    words = clean.split()
    slug = "".join(words)
    slug_hyphen = "-".join(words)

    # Trade labels
    trade_labels = {
        "plumbers": "plumbing",
        "gas-engineers": "heating",
        "electricians": "electrical",
        "locksmiths": "locksmiths",
        "builders": "building",
        "fencing": "fencing",
        "roofers": "roofing",
        "landscapers": "landscaping",
        "painters": "decorating",
    }
    trade_word = trade_labels.get(trade_type, trade_type.replace("-", ""))

    domains = []
    seen = set()

    def add(d):
        d = d.lower()
        if d not in seen:
            seen.add(d)
            domains.append(d)

    # Primary: exact name
    add(f"{slug}.co.uk")
    add(f"{slug}.uk")
    add(f"{slug}.com")

    # With trade type
    add(f"{slug}{trade_word}.co.uk")

    # Hyphenated
    if len(words) > 1:
        add(f"{slug_hyphen}.co.uk")

    # Name + area
    if area:
        add(f"{slug}{area}.co.uk")
        add(f"{slug_hyphen}-{area}.co.uk")

    # Short variations
    if "ltd" in words:
        no_ltd = [w for w in words if w != "ltd"]
        add(f"{''.join(no_ltd)}.co.uk")

    if "and" in words:
        no_and = [w for w in words if w != "and"]
        add(f"{''.join(no_and)}.co.uk")

    # Initials + trade (e.g. "mjb" + "electrical")
    if len(words) >= 2:
        initials = "".join(w[0] for w in words if len(w) > 0)
        if len(initials) >= 2:
            add(f"{initials}{trade_word}.co.uk")

    return domains[:10]  # Cap at 10 suggestions


def check_prospect(trade):
    name = trade["name"]
    suggestions = generate_domain_suggestions(trade)

    print(f"\n{'='*60}")
    print(f"  {name}")
    print(f"  {trade['trade_type']} | {trade.get('area', '')} | {trade.get('phone', 'no phone')}")
    print(f"{'='*60}")

    available = []
    for domain in suggestions:
        is_available = check_domain(domain)
        if is_available is True:
            status = "✅ AVAILABLE"
            available.append(domain)
        elif is_available is False:
            status = "❌ taken"
        else:
            status = "🟡 unknown"
        print(f"  {status:16s} {domain}")

    if available:
        print(f"\n  💡 Best option: {available[0]}")
    else:
        print(f"\n  ⚠️  No obvious domains available — may need creative naming")

    return available


def main():
    with open(TRADES_PATH) as f:
        trades = json.load(f)

    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    if sys.argv[1] == "--all":
        targets = [t for t in trades if t.get("outreach_target") and t["slug"] != "spark-and-sons-electrical"]
        targets.sort(key=lambda x: -x.get("review_count", 0))

        results = {}
        for t in targets:
            available = check_prospect(t)
            results[t["slug"]] = available

        # Summary
        print(f"\n\n{'='*60}")
        print(f"  SUMMARY — Domain Availability")
        print(f"{'='*60}")
        for slug, avail in results.items():
            trade = next(t for t in trades if t["slug"] == slug)
            best = avail[0] if avail else "❌ none found"
            print(f"  {trade['name']:40s} → {best}")
        return

    slug = sys.argv[1]
    trade = next((t for t in trades if t["slug"] == slug), None)
    if not trade:
        print(f"Error: No trade '{slug}'")
        sys.exit(1)
    check_prospect(trade)


if __name__ == "__main__":
    main()
