#!/usr/bin/env python3
"""
Checkatrade Profile Scraper
Usage: python3 scrape-checkatrade.py <checkatrade_url>

Example: python3 scrape-checkatrade.py https://www.checkatrade.com/trades/powerplusheatingltd
"""

import sys
import json
import re
from urllib.request import urlopen, Request
from html.parser import HTMLParser

def fetch(url):
    req = Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    })
    with urlopen(req) as resp:
        return resp.read().decode('utf-8')

def extract_json_ld(html):
    """Extract structured data from JSON-LD scripts"""
    pattern = r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>'
    matches = re.findall(pattern, html, re.DOTALL)
    results = []
    for m in matches:
        try:
            results.append(json.loads(m))
        except:
            pass
    return results

def extract_reviews(html):
    """Extract review text from the page"""
    reviews = []
    
    # Try to find review blocks - Checkatrade uses various patterns
    # Pattern 1: Look for review content in data attributes or structured blocks
    review_pattern = r'"reviewBody"\s*:\s*"([^"]*)"'
    bodies = re.findall(review_pattern, html)
    
    # Pattern 2: author names
    author_pattern = r'"author"\s*:\s*\{[^}]*"name"\s*:\s*"([^"]*)"'
    authors = re.findall(author_pattern, html)
    
    # Pattern 3: ratings
    rating_pattern = r'"ratingValue"\s*:\s*["\']?(\d+(?:\.\d+)?)["\']?'
    ratings = re.findall(rating_pattern, html)
    
    for i, body in enumerate(bodies):
        review = {
            'text': body.replace('\\n', ' ').replace('\\/', '/').strip(),
            'author': authors[i] if i < len(authors) else 'Customer',
            'rating': float(ratings[i]) if i < len(ratings) else 10
        }
        reviews.append(review)
    
    return reviews

def extract_services(html):
    """Try to extract services list"""
    services = []
    # Checkatrade lists services in various ways
    # Look for service-related structured data or list items
    service_pattern = r'<li[^>]*class="[^"]*service[^"]*"[^>]*>([^<]+)</li>'
    found = re.findall(service_pattern, html, re.IGNORECASE)
    if found:
        services = [s.strip() for s in found]
    return services

def scrape_checkatrade(url):
    print(f"Fetching: {url}")
    html = fetch(url)
    
    # Extract JSON-LD structured data (richest source)
    json_ld = extract_json_ld(html)
    
    # Extract reviews from page
    reviews = extract_reviews(html)
    
    # Extract services
    services = extract_services(html)
    
    # Try to get business name from page title
    title_match = re.search(r'<title>([^<]+)</title>', html)
    title = title_match.group(1) if title_match else 'Unknown'
    
    # Try to get description
    desc_match = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']+)', html)
    description = desc_match.group(1) if desc_match else ''
    
    # Try to get overall rating
    rating_match = re.search(r'"ratingValue"\s*:\s*["\']?([\d.]+)', html)
    rating = rating_match.group(1) if rating_match else 'N/A'
    
    review_count_match = re.search(r'"reviewCount"\s*:\s*["\']?(\d+)', html)
    review_count = review_count_match.group(1) if review_count_match else 'N/A'
    
    # Phone
    phone_match = re.search(r'"telephone"\s*:\s*"([^"]+)"', html)
    phone = phone_match.group(1) if phone_match else 'N/A'
    
    result = {
        'url': url,
        'title': title,
        'description': description,
        'rating': rating,
        'review_count': review_count,
        'phone': phone,
        'services': services,
        'reviews': reviews[:15],  # Cap at 15 best
        'json_ld': json_ld,
    }
    
    # Save raw HTML for manual inspection if needed
    slug = url.rstrip('/').split('/')[-1]
    
    output_dir = f"/Users/austin/Desktop/TradeHub/client-sites/{slug}"
    import os
    os.makedirs(output_dir, exist_ok=True)
    
    # Save extracted data
    with open(f"{output_dir}/checkatrade-data.json", 'w') as f:
        json.dump(result, f, indent=2)
    
    # Save raw HTML
    with open(f"{output_dir}/checkatrade-raw.html", 'w') as f:
        f.write(html)
    
    print(f"\n{'='*60}")
    print(f"Business: {title}")
    print(f"Rating: {rating}/10 ({review_count} reviews)")
    print(f"Phone: {phone}")
    print(f"Description: {description[:100]}...")
    print(f"\nServices found: {len(services)}")
    for s in services[:10]:
        print(f"  - {s}")
    print(f"\nReviews extracted: {len(reviews)}")
    for r in reviews[:5]:
        print(f"  ★ {r['author']}: \"{r['text'][:80]}...\"")
    print(f"\nJSON-LD blocks found: {len(json_ld)}")
    print(f"\nData saved to: {output_dir}/checkatrade-data.json")
    print(f"Raw HTML saved to: {output_dir}/checkatrade-raw.html")
    print(f"{'='*60}")
    
    return result

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python3 scrape-checkatrade.py <checkatrade_url>")
        print("Example: python3 scrape-checkatrade.py https://www.checkatrade.com/trades/powerplusheatingltd")
        sys.exit(1)
    
    scrape_checkatrade(sys.argv[1])
