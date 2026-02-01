#!/usr/bin/env python3
"""
TradeHub — Google Places API Research Tool
Searches for tradespeople across target areas and saves raw prospect data.
Uses the Places API (New) Text Search endpoint.
"""

import json
import os
import sys
import time
import requests
from datetime import datetime

API_KEY = "AIzaSyAcPT4MoPatD4z90b7bryid8QasHYJTnyM"
ENDPOINT = "https://places.googleapis.com/v1/places:searchText"

# What we want from each result
FIELD_MASK = ",".join([
    "places.displayName",
    "places.formattedAddress", 
    "places.nationalPhoneNumber",
    "places.websiteUri",
    "places.rating",
    "places.userRatingCount",
    "places.types",
    "places.reviews",
    "places.googleMapsUri",
])

TRADES = [
    "plumber",
    "electrician", 
    "roofer",
    "builder",
    "landscaper",
    "plasterer",
    "painter decorator",
    "carpenter joiner",
    "locksmith",
    "handyman",
    "gas engineer boiler",
    "tiler",
    "fencing contractor",
]

AREAS = [
    "Solihull",
    "Birmingham",
    "Redditch",
    "Bromsgrove",
    "Sutton Coldfield",
    "Knowle",
    "Shirley",
    "Studley",
    "Alcester",
    "Henley-in-Arden",
    "Warwick",
    "Stratford-upon-Avon",
    "Dorridge",
]

def search_places(query, page_token=None):
    """Search Google Places API (New) for a text query."""
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
    if page_token:
        body["pageToken"] = page_token

    resp = requests.post(ENDPOINT, headers=headers, json=body)
    
    if resp.status_code != 200:
        print(f"  ERROR {resp.status_code}: {resp.text[:200]}")
        return [], None
    
    data = resp.json()
    places = data.get("places", [])
    next_token = data.get("nextPageToken")
    return places, next_token


def extract_prospect(place):
    """Convert a Places API result into a clean prospect dict."""
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
        "reviews": reviews[:3],  # Keep top 3
    }


def run_scrape(trades=None, areas=None, min_rating=4.0, min_reviews=5):
    """Run the full scrape across all trade/area combos."""
    trades = trades or TRADES
    areas = areas or AREAS
    
    all_prospects = {}  # keyed by name to dedup
    total_searches = 0
    
    print(f"Starting scrape: {len(trades)} trades × {len(areas)} areas = {len(trades) * len(areas)} searches")
    print(f"Filters: min rating {min_rating}, min reviews {min_reviews}")
    print()
    
    for trade in trades:
        for area in areas:
            query = f"{trade} in {area}"
            print(f"  Searching: {query}", end="", flush=True)
            
            places, next_token = search_places(query)
            total_searches += 1
            
            new_count = 0
            for p in places:
                prospect = extract_prospect(p)
                
                # Filter by quality
                if prospect["rating"] < min_rating:
                    continue
                if prospect["review_count"] < min_reviews:
                    continue
                
                # Dedup by name
                key = prospect["name"].lower().strip()
                if key not in all_prospects:
                    prospect["_found_via"] = query
                    prospect["_trade_search"] = trade
                    prospect["_area_search"] = area
                    all_prospects[key] = prospect
                    new_count += 1
            
            print(f" → {len(places)} results, {new_count} new")
            
            # Rate limit: be nice to the API
            time.sleep(0.3)
    
    prospects = list(all_prospects.values())
    prospects.sort(key=lambda x: (-x["rating"], -x["review_count"]))
    
    print()
    print(f"Done! {total_searches} API calls, {len(prospects)} unique prospects (after dedup + quality filter)")
    
    return prospects


def save_results(prospects, output_dir="/Users/austin/Desktop/TradeHub/prospects"):
    """Save prospects to dated JSON and markdown files."""
    os.makedirs(output_dir, exist_ok=True)
    
    date_str = datetime.now().strftime("%Y-%m-%d")
    
    # Save raw JSON
    json_path = os.path.join(output_dir, f"{date_str}-api-scrape.json")
    with open(json_path, "w") as f:
        json.dump(prospects, f, indent=2)
    print(f"Saved JSON: {json_path}")
    
    # Save readable markdown
    md_path = os.path.join(output_dir, f"{date_str}-api-scrape.md")
    with open(md_path, "w") as f:
        f.write(f"# Google Places API Scrape — {date_str}\n\n")
        f.write(f"**Total prospects:** {len(prospects)} (filtered: 4.0+ stars, 5+ reviews)\n\n")
        f.write("---\n\n")
        
        for i, p in enumerate(prospects, 1):
            f.write(f"## {i}. {p['name']}\n\n")
            f.write(f"| | |\n|---|---|\n")
            f.write(f"| **Rating** | ⭐ {p['rating']} ({p['review_count']} reviews) |\n")
            f.write(f"| **Phone** | {p['phone'] or 'N/A'} |\n")
            f.write(f"| **Address** | {p['address']} |\n")
            f.write(f"| **Website** | {p['website'] or 'None'} |\n")
            f.write(f"| **Types** | {', '.join(p['types'])} |\n")
            f.write(f"| **Found via** | \"{p['_found_via']}\" |\n")
            if p.get("google_maps_url"):
                f.write(f"| **Google Maps** | {p['google_maps_url']} |\n")
            f.write("\n")
            
            if p["reviews"]:
                f.write("**Top Reviews:**\n")
                for r in p["reviews"]:
                    f.write(f"> \"{r['text'][:200]}\" — {r['author']}\n\n")
            
            f.write("---\n\n")
    
    print(f"Saved Markdown: {md_path}")
    
    # Summary stats
    with_website = sum(1 for p in prospects if p["website"])
    without_website = sum(1 for p in prospects if not p["website"])
    avg_rating = sum(p["rating"] for p in prospects) / len(prospects) if prospects else 0
    
    print(f"\nSummary:")
    print(f"  Total: {len(prospects)}")
    print(f"  With website: {with_website}")
    print(f"  Without website: {without_website} ← website upsell targets")
    print(f"  Avg rating: {avg_rating:.1f}")


if __name__ == "__main__":
    # Parse optional args
    trades = TRADES
    areas = AREAS
    
    if "--quick" in sys.argv:
        # Quick test: just 2 trades, 3 areas
        trades = ["plumber", "electrician"]
        areas = ["Solihull", "Redditch", "Birmingham"]
        print("QUICK MODE: 2 trades × 3 areas\n")
    
    if "--trades" in sys.argv:
        # Single trade
        idx = sys.argv.index("--trades") + 1
        trades = [sys.argv[idx]]
    
    if "--areas" in sys.argv:
        idx = sys.argv.index("--areas") + 1
        areas = [sys.argv[idx]]
    
    prospects = run_scrape(trades=trades, areas=areas)
    
    if prospects:
        save_results(prospects)
    else:
        print("No prospects found!")
