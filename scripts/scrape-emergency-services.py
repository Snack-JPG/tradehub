#!/usr/bin/env python3
"""
TradeHub — Emergency/Panic Services Scrape
New categories: pest control, drainage, glaziers, tree surgeons, 
mobile fuel delivery, appliance repair, garage door repair, skip hire
"""

import json
import os
import sys
import time
import requests
from datetime import datetime

API_KEY = "AIzaSyAcPT4MoPatD4z90b7bryid8QasHYJTnyM"
ENDPOINT = "https://places.googleapis.com/v1/places:searchText"

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
    "pest control",
    "drainage blocked drains",
    "emergency glazier window repair",
    "tree surgeon",
    "mobile fuel delivery roadside",
    "appliance repair",
    "garage door repair",
    "skip hire",
    "emergency electrician",
    "boiler repair engineer",
    "vehicle recovery breakdown",
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


def run_scrape(trades=None, areas=None, min_rating=4.0, min_reviews=5):
    trades = trades or TRADES
    areas = areas or AREAS

    all_prospects = {}
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

                if prospect["rating"] < min_rating:
                    continue
                if prospect["review_count"] < min_reviews:
                    continue

                key = prospect["name"].lower().strip()
                if key not in all_prospects:
                    prospect["_found_via"] = query
                    prospect["_trade_search"] = trade
                    prospect["_area_search"] = area
                    all_prospects[key] = prospect
                    new_count += 1

            print(f" → {len(places)} results, {new_count} new")
            time.sleep(0.3)

    prospects = list(all_prospects.values())
    prospects.sort(key=lambda x: (-x["rating"], -x["review_count"]))

    print()
    print(f"Done! {total_searches} API calls, {len(prospects)} unique prospects")

    return prospects


def save_results(prospects, output_dir="/Users/austin/Desktop/TradeHub/prospects"):
    os.makedirs(output_dir, exist_ok=True)

    date_str = datetime.now().strftime("%Y-%m-%d")

    json_path = os.path.join(output_dir, f"{date_str}-emergency-services-scrape.json")
    with open(json_path, "w") as f:
        json.dump(prospects, f, indent=2)
    print(f"Saved JSON: {json_path}")

    md_path = os.path.join(output_dir, f"{date_str}-emergency-services-scrape.md")
    with open(md_path, "w") as f:
        f.write(f"# Emergency Services Scrape — {date_str}\n\n")
        f.write(f"**Total prospects:** {len(prospects)} (filtered: 4.0+ stars, 5+ reviews)\n\n")

        # Group by trade
        by_trade = {}
        for p in prospects:
            trade = p.get("_trade_search", "unknown")
            by_trade.setdefault(trade, []).append(p)

        for trade, items in sorted(by_trade.items()):
            no_web = sum(1 for p in items if not p["website"])
            f.write(f"## {trade.title()} ({len(items)} found, {no_web} without website)\n\n")

            for i, p in enumerate(items, 1):
                web_flag = " 🎯 NO WEBSITE" if not p["website"] else ""
                f.write(f"### {i}. {p['name']}{web_flag}\n\n")
                f.write(f"- **Rating:** ⭐ {p['rating']} ({p['review_count']} reviews)\n")
                f.write(f"- **Phone:** {p['phone'] or 'N/A'}\n")
                f.write(f"- **Address:** {p['address']}\n")
                f.write(f"- **Website:** {p['website'] or 'None'}\n")
                f.write(f"- **Google Maps:** {p['google_maps_url']}\n")

                if p["reviews"]:
                    f.write(f"\n**Top Reviews:**\n")
                    for r in p["reviews"]:
                        f.write(f"> \"{r['text'][:200]}\" — {r['author']}\n\n")

                f.write("---\n\n")

    print(f"Saved Markdown: {md_path}")

    with_website = sum(1 for p in prospects if p["website"])
    without_website = sum(1 for p in prospects if not p["website"])
    avg_rating = sum(p["rating"] for p in prospects) / len(prospects) if prospects else 0

    print(f"\nSummary:")
    print(f"  Total: {len(prospects)}")
    print(f"  With website: {with_website}")
    print(f"  Without website: {without_website} ← website upsell targets")
    print(f"  Avg rating: {avg_rating:.1f}")

    # Quick no-website prospect list
    no_web = [p for p in prospects if not p["website"]]
    no_web.sort(key=lambda x: -x["review_count"])
    
    nw_path = os.path.join(output_dir, f"{date_str}-emergency-no-website.md")
    with open(nw_path, "w") as f:
        f.write(f"# Emergency Services — No Website Prospects\n\n")
        f.write(f"**{len(no_web)} prospects** with no website, sorted by review count\n\n")
        f.write("| # | Name | Trade | Rating | Reviews | Phone | Area |\n")
        f.write("|---|------|-------|--------|---------|-------|------|\n")
        for i, p in enumerate(no_web, 1):
            f.write(f"| {i} | {p['name']} | {p['_trade_search']} | {p['rating']} | {p['review_count']} | {p['phone']} | {p['_area_search']} |\n")
    
    print(f"Saved no-website list: {nw_path}")


if __name__ == "__main__":
    prospects = run_scrape()
    if prospects:
        save_results(prospects)
    else:
        print("No prospects found!")
