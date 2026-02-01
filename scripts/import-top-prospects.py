#!/usr/bin/env python3
"""
Import top-rated prospects from scrape data into trades.json.
Takes the highest-reviewed prospects, converts to trades.json format,
deduplicates against existing entries.
"""

import json
import re
from datetime import datetime

TRADES_PATH = "/Users/austin/Desktop/TradeHub/site/data/trades.json"
LOCATIONS_PATH = "/Users/austin/Desktop/TradeHub/site/data/locations.json"

SCRAPE_FILES = [
    "/Users/austin/Desktop/TradeHub/prospects/2026-01-31-api-scrape.json",
    "/Users/austin/Desktop/TradeHub/prospects/2026-02-01-emergency-services-scrape.json",
    "/Users/austin/Desktop/TradeHub/prospects/2026-02-01-mobile-tyre-scrape.json",
    "/Users/austin/Desktop/TradeHub/prospects/2026-02-01-vehicle-recovery-wide.json",
]

# Map scrape trade_search terms to category slugs
TRADE_MAP = {
    "plumber": "plumbers",
    "electrician": "electricians",
    "roofer": "roofers",
    "builder": "builders",
    "landscaper": "landscapers",
    "plasterer": "plasterers",
    "painter decorator": "painters",
    "carpenter joiner": "carpenters",
    "locksmith": "locksmiths",
    "handyman": "handymen",
    "gas engineer boiler": "gas-engineers",
    "tiler": "tilers",
    "fencing contractor": "fencing",
    "pest control": "pest-control",
    "drainage blocked drains": "drainage",
    "emergency glazier window repair": "emergency-glaziers",
    "tree surgeon": "tree-surgeons",
    "mobile fuel delivery roadside": "vehicle-recovery",  # closest match
    "appliance repair": "appliance-repair",
    "garage door repair": "garage-door-repair",
    "skip hire": "skip-hire",
    "emergency electrician": "electricians",
    "boiler repair engineer": "gas-engineers",
    "vehicle recovery breakdown": "vehicle-recovery",
    "car recovery service": "vehicle-recovery",
    "24 hour breakdown recovery": "vehicle-recovery",
    "emergency vehicle recovery": "vehicle-recovery",
    "roadside assistance": "vehicle-recovery",
    "car towing service": "vehicle-recovery",
    "mobile tyre fitting": "mobile-tyre-fitting",
    "24 hour tyre replacement": "mobile-tyre-fitting",
    "emergency tyre repair": "mobile-tyre-fitting",
}

# Min reviews to import
MIN_REVIEWS = 20
# Min rating
MIN_RATING = 4.5

def slugify(name):
    s = name.lower().strip()
    s = re.sub(r'[^a-z0-9\s-]', '', s)
    s = re.sub(r'[\s-]+', '-', s)
    s = s.strip('-')
    return s

def extract_area(address):
    """Try to get the city/town from the address."""
    parts = [p.strip() for p in address.split(',')]
    # Usually the second-to-last or third-to-last part is the city
    for part in reversed(parts):
        part = part.strip()
        # Skip postcodes
        if re.match(r'^[A-Z]{1,2}\d', part):
            continue
        # Skip "UK" or "United Kingdom"
        if part.lower() in ('uk', 'united kingdom', 'england'):
            continue
        # Skip house numbers
        if re.match(r'^\d', part):
            continue
        return part
    return parts[-2] if len(parts) >= 2 else parts[0]

def guess_areas_served(address, area_search):
    """Generate plausible areas served."""
    primary = extract_area(address)
    areas = [primary]
    if area_search and area_search != primary:
        areas.append(area_search)
    return areas[:5]

def generate_description(prospect, trade_type):
    """Generate a description from prospect data."""
    name = prospect['name']
    rating = prospect['rating']
    count = prospect['review_count']
    area = extract_area(prospect['address'])
    
    desc = f"{name} is a highly-rated {trade_type.replace('-', ' ')} service based in {area}"
    desc += f", with a {rating}-star Google rating across {count} reviews."
    
    # Add review snippets if available
    if prospect.get('reviews'):
        top = prospect['reviews'][0]
        if top.get('text'):
            snippet = top['text'][:100].strip()
            if not snippet.endswith('.'):
                snippet = snippet.rsplit(' ', 1)[0] + '...'
            desc += f' Customers say: "{snippet}"'
    
    return desc

def convert_prospect(prospect, trade_slug):
    """Convert a scraped prospect to trades.json format."""
    slug = slugify(prospect['name'])
    area = extract_area(prospect['address'])
    
    reviews = []
    for r in prospect.get('reviews', []):
        if r.get('text'):
            reviews.append({
                "author": r.get('author', 'Google Reviewer'),
                "rating": r.get('rating', 5),
                "text": r['text'][:300],
                "date": "2025-12-01",  # approximate
            })
    
    # Determine if emergency service
    emergency_types = ['locksmiths', 'vehicle-recovery', 'mobile-tyre-fitting', 
                       'emergency-glaziers', 'drainage', 'gas-engineers']
    is_emergency = trade_slug in emergency_types or 'emergency' in prospect['name'].lower() or '24' in prospect['name'].lower()
    
    return {
        "name": prospect['name'],
        "slug": slug,
        "trade_type": trade_slug,
        "area": area,
        "phone": prospect.get('phone', ''),
        "email": "",
        "website_url": prospect.get('website', ''),
        "description": generate_description(prospect, trade_slug),
        "services": [],  # would need manual population
        "areas_served": guess_areas_served(prospect['address'], prospect.get('_area_search', '')),
        "reviews": reviews[:3],
        "rating": prospect['rating'],
        "review_count": prospect['review_count'],
        "featured": prospect['review_count'] >= 100,
        "emergency": is_emergency,
        "verified": False,
        "image": "",
        "accreditations": [],
        "added_date": datetime.now().strftime("%Y-%m-%d"),
        "google_maps_url": prospect.get('google_maps_url', ''),
        "has_website": bool(prospect.get('website', '')),
    }


def main():
    # Load existing
    with open(TRADES_PATH) as f:
        existing = json.load(f)
    
    existing_names = set(t['name'].lower().strip() for t in existing)
    existing_slugs = set(t['slug'] for t in existing)
    
    print(f"Existing trades: {len(existing)}")
    
    # Load all prospects from all scrapes
    all_prospects = []
    for path in SCRAPE_FILES:
        try:
            with open(path) as f:
                prospects = json.load(f)
                print(f"Loaded {len(prospects)} from {path.split('/')[-1]}")
                all_prospects.extend(prospects)
        except FileNotFoundError:
            print(f"SKIP: {path} not found")
    
    print(f"\nTotal scraped prospects: {len(all_prospects)}")
    
    # Deduplicate by name
    seen = {}
    for p in all_prospects:
        key = p['name'].lower().strip()
        if key not in seen or p['review_count'] > seen[key]['review_count']:
            seen[key] = p
    
    prospects = list(seen.values())
    print(f"After dedup: {len(prospects)}")
    
    # Filter
    qualified = [p for p in prospects if p['rating'] >= MIN_RATING and p['review_count'] >= MIN_REVIEWS]
    qualified.sort(key=lambda x: -x['review_count'])
    print(f"Qualified ({MIN_RATING}+ stars, {MIN_REVIEWS}+ reviews): {len(qualified)}")
    
    # Convert and add
    new_trades = []
    skipped_existing = 0
    skipped_no_category = 0
    
    for p in qualified:
        name_key = p['name'].lower().strip()
        
        # Skip if already exists
        if name_key in existing_names:
            skipped_existing += 1
            continue
        
        # Map trade search to category
        trade_search = p.get('_trade_search', '')
        trade_slug = TRADE_MAP.get(trade_search)
        
        if not trade_slug:
            skipped_no_category += 1
            continue
        
        # Convert
        trade = convert_prospect(p, trade_slug)
        
        # Ensure unique slug
        base_slug = trade['slug']
        counter = 1
        while trade['slug'] in existing_slugs:
            trade['slug'] = f"{base_slug}-{counter}"
            counter += 1
        
        existing_names.add(name_key)
        existing_slugs.add(trade['slug'])
        new_trades.append(trade)
    
    print(f"\nSkipped (already exists): {skipped_existing}")
    print(f"Skipped (no category mapping): {skipped_no_category}")
    print(f"New trades to add: {len(new_trades)}")
    
    # Stats by category
    from collections import Counter
    cat_counts = Counter(t['trade_type'] for t in new_trades)
    print("\nBy category:")
    for cat, count in cat_counts.most_common():
        no_web = sum(1 for t in new_trades if t['trade_type'] == cat and not t['has_website'])
        print(f"  {cat}: {count} ({no_web} no website)")
    
    # Stats: with/without website
    with_web = sum(1 for t in new_trades if t['has_website'])
    without_web = sum(1 for t in new_trades if not t['has_website'])
    print(f"\nWith website: {with_web}")
    print(f"Without website: {without_web} <- build these!")
    
    # Merge and save
    merged = existing + new_trades
    
    # Save backup first
    backup_path = TRADES_PATH + '.backup-pre-import'
    with open(backup_path, 'w') as f:
        json.dump(existing, f, indent=2)
    print(f"\nBackup saved: {backup_path}")
    
    with open(TRADES_PATH, 'w') as f:
        json.dump(merged, f, indent=2)
    print(f"Updated trades.json: {len(merged)} total trades")
    
    # Print top new additions
    print(f"\n=== TOP NEW ADDITIONS ===")
    for t in new_trades[:25]:
        web = "🌐" if t['has_website'] else "🎯 NO SITE"
        print(f"  {t['name']} | {t['trade_type']} | {t['rating']}* ({t['review_count']} reviews) | {web}")


if __name__ == "__main__":
    main()
