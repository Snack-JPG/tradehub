#!/usr/bin/env python3
"""
TradeHub — Fill thin categories scraper
Lower thresholds: 3.5+ stars, 1+ review, has phone number
Expanded search terms and wider geography
"""

import json
import os
import sys
import time
import requests
from datetime import datetime
import re

API_KEY = "AIzaSyAcPT4MoPatD4z90b7bryid8QasHYJTnyM"
ENDPOINT = "https://places.googleapis.com/v1/places:searchText"
FIELD_MASK = ",".join([
    "places.displayName","places.formattedAddress","places.nationalPhoneNumber",
    "places.websiteUri","places.rating","places.userRatingCount","places.types",
    "places.reviews","places.googleMapsUri",
])

# Expanded areas - full West Midlands
AREAS = [
    "Birmingham", "Solihull", "Coventry", "Wolverhampton", "Walsall",
    "Dudley", "Redditch", "Bromsgrove", "Sutton Coldfield", "West Bromwich",
    "Tamworth", "Nuneaton", "Leamington Spa", "Rugby", "Kidderminster",
    "Stourbridge", "Halesowen", "Cannock", "Lichfield", "Telford",
    "Shirley", "Knowle", "Warwick", "Stratford-upon-Avon",
]

# Critical + High priority categories with expanded search terms
CATEGORIES = {
    "handymen": [
        "handyman", "odd job man", "property maintenance", "home repairs handyman",
        "general handyman", "multi-trade handyman",
    ],
    "skip-hire": [
        "skip hire", "waste removal", "rubbish removal", "skip bin hire",
        "mini skip hire",
    ],
    "carpenters": [
        "carpenter", "joiner", "carpentry services", "kitchen fitter carpenter",
        "bespoke joinery", "cabinet maker",
    ],
    "garage-door-repair": [
        "garage door repair", "garage door installation", "roller shutter repair",
        "electric garage door", "garage door company",
    ],
    "tilers": [
        "tiler", "tiling services", "bathroom tiler", "floor tiler",
        "wall and floor tiling",
    ],
    "drainage": [
        "drainage", "blocked drain", "drain unblocking", "drain repair",
        "CCTV drain survey", "drain jetting",
    ],
    "plasterers": [
        "plasterer", "plastering services", "rendering", "dry lining",
        "skimming plasterer",
    ],
    "emergency-glaziers": [
        "emergency glazier", "window repair", "glass replacement",
        "double glazing repair", "broken window repair", "boarding up service",
    ],
    "fencing": [
        "fencing contractor", "garden fencing", "fence installation",
        "fence repair", "security fencing",
    ],
    "pest-control": [
        "pest control", "rat exterminator", "wasp nest removal",
        "mouse control", "bed bug treatment",
    ],
    "appliance-repair": [
        "appliance repair", "washing machine repair", "oven repair",
        "fridge repair", "dishwasher repair", "tumble dryer repair",
    ],
    "painters": [
        "painter decorator", "painting services", "exterior painter",
        "interior decorator", "spray painter",
    ],
}

MIN_RATING = 3.5
MIN_REVIEWS = 1


def search_places(query):
    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": FIELD_MASK,
    }
    body = {
        "textQuery": query,
        "languageCode": "en",
        "regionCode": "GB",
        "maxResultCount": 20,
    }
    resp = requests.post(ENDPOINT, headers=headers, json=body)
    if resp.status_code != 200:
        print(f" ERROR {resp.status_code}")
        return []
    return resp.json().get("places", [])


def extract_prospect(place):
    reviews = []
    for r in place.get("reviews", []):
        text = r.get("text", {}).get("text", "")
        if text:
            reviews.append({
                "author": r.get("authorAttribution", {}).get("displayName", "Google Reviewer"),
                "rating": r.get("rating", 5),
                "text": text[:300],
                "relativePublishTimeDescription": r.get("relativePublishTimeDescription", ""),
            })
    return {
        "name": place.get("displayName", {}).get("text", "Unknown"),
        "address": place.get("formattedAddress", ""),
        "phone": place.get("nationalPhoneNumber", ""),
        "website": place.get("websiteUri", ""),
        "rating": place.get("rating", 0),
        "review_count": place.get("userRatingCount", 0),
        "types": [t for t in place.get("types", []) if t not in ("point_of_interest", "establishment", "store")],
        "google_maps_url": place.get("googleMapsUri", ""),
        "reviews": reviews[:3],
    }


def slugify(name):
    s = name.lower().strip()
    s = re.sub(r'[^a-z0-9\s-]', '', s)
    s = re.sub(r'[\s-]+', '-', s)
    return s.strip('-')


def extract_area(address):
    parts = [p.strip() for p in address.split(',')]
    for part in reversed(parts):
        part = part.strip()
        if re.match(r'^[A-Z]{1,2}\d', part): continue
        if part.lower() in ('uk', 'united kingdom', 'england'): continue
        if re.match(r'^\d', part): continue
        return part
    return parts[-2] if len(parts) >= 2 else parts[0]


def convert_to_trade(prospect, trade_slug):
    slug = slugify(prospect['name'])
    area = extract_area(prospect['address'])
    
    reviews = []
    for r in prospect.get('reviews', []):
        if r.get('text'):
            reviews.append({
                "author": r.get('author', 'Google Reviewer'),
                "rating": r.get('rating', 5),
                "text": r['text'][:300],
                "date": "2025-12-01",
            })
    
    emergency_types = ['locksmiths', 'vehicle-recovery', 'mobile-tyre-fitting',
                       'emergency-glaziers', 'drainage', 'gas-engineers']
    is_emergency = trade_slug in emergency_types
    
    desc = f"{prospect['name']} — {prospect['rating']}★ rated {trade_slug.replace('-', ' ')} service in {area} with {prospect['review_count']} Google reviews."
    if reviews:
        snippet = reviews[0]['text'][:80]
        if not snippet.endswith('.'):
            snippet = snippet.rsplit(' ', 1)[0] + '...'
        desc += f' "{snippet}"'
    
    return {
        "name": prospect['name'],
        "slug": slug,
        "trade_type": trade_slug,
        "area": area,
        "phone": prospect.get('phone', ''),
        "email": "",
        "website_url": prospect.get('website', ''),
        "description": desc,
        "services": [],
        "areas_served": [area],
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
    # Load existing trades
    with open("/Users/austin/Desktop/TradeHub/site/data/trades.json") as f:
        existing = json.load(f)
    
    existing_names = set(t['name'].lower().strip() for t in existing)
    existing_slugs = set(t['slug'] for t in existing)
    
    # Count per category
    from collections import Counter
    cat_counts = Counter(t['trade_type'] for t in existing)
    
    print("Current counts:")
    for cat in sorted(CATEGORIES.keys()):
        print(f"  {cat}: {cat_counts.get(cat, 0)}")
    print()
    
    all_new = []
    total_api = 0
    
    for cat_slug, search_terms in CATEGORIES.items():
        current = cat_counts.get(cat_slug, 0)
        needed = max(0, 50 - current)
        if needed == 0:
            print(f"SKIP {cat_slug}: already at {current}")
            continue
        
        print(f"\n{'='*60}")
        print(f"SCRAPING: {cat_slug} (have {current}, need {needed} more)")
        print(f"{'='*60}")
        
        cat_prospects = {}
        
        for term in search_terms:
            for area in AREAS:
                query = f"{term} in {area}"
                print(f"  {query}", end="", flush=True)
                
                places = search_places(query)
                total_api += 1
                
                new = 0
                for p in places:
                    prospect = extract_prospect(p)
                    
                    # Quality filters
                    if prospect['rating'] < MIN_RATING: continue
                    if prospect['review_count'] < MIN_REVIEWS: continue
                    if not prospect['phone']: continue  # must have phone
                    
                    key = prospect['name'].lower().strip()
                    if key in existing_names: continue
                    if key in cat_prospects:
                        # Keep higher review count version
                        if prospect['review_count'] <= cat_prospects[key]['review_count']:
                            continue
                    
                    prospect['_trade_search'] = term
                    prospect['_area_search'] = area
                    cat_prospects[key] = prospect
                    new += 1
                
                print(f" -> {len(places)} results, {new} new")
                time.sleep(0.3)
        
        # Sort by review count and convert
        sorted_prospects = sorted(cat_prospects.values(), key=lambda x: -x['review_count'])
        
        for prospect in sorted_prospects:
            trade = convert_to_trade(prospect, cat_slug)
            
            # Unique slug
            base = trade['slug']
            counter = 1
            while trade['slug'] in existing_slugs:
                trade['slug'] = f"{base}-{counter}"
                counter += 1
            
            existing_names.add(prospect['name'].lower().strip())
            existing_slugs.add(trade['slug'])
            all_new.append(trade)
        
        no_web = sum(1 for p in sorted_prospects if not p.get('website'))
        print(f"\n  Found {len(sorted_prospects)} new for {cat_slug} ({no_web} no website)")
    
    print(f"\n{'='*60}")
    print(f"SUMMARY")
    print(f"{'='*60}")
    print(f"API calls: {total_api}")
    print(f"New trades to add: {len(all_new)}")
    
    # Merge
    merged = existing + all_new
    
    # Backup
    backup = "/Users/austin/Desktop/TradeHub/site/data/trades.json.backup-thin-scrape"
    with open(backup, 'w') as f:
        json.dump(existing, f, indent=2)
    print(f"Backup: {backup}")
    
    with open("/Users/austin/Desktop/TradeHub/site/data/trades.json", 'w') as f:
        json.dump(merged, f, indent=2)
    print(f"Updated trades.json: {len(merged)} total")
    
    # Final counts
    final_counts = Counter(t['trade_type'] for t in merged)
    print("\nFinal counts:")
    for cat in sorted(CATEGORIES.keys()):
        count = final_counts.get(cat, 0)
        status = "✅" if count >= 50 else "🟡" if count >= 30 else "🔴"
        print(f"  {status} {cat}: {count}")
    
    # Save scrape results separately too
    scrape_path = f"/Users/austin/Desktop/TradeHub/prospects/{datetime.now().strftime('%Y-%m-%d')}-thin-categories-scrape.json"
    with open(scrape_path, 'w') as f:
        json.dump(all_new, f, indent=2)
    print(f"\nNew listings saved: {scrape_path}")


if __name__ == "__main__":
    main()
