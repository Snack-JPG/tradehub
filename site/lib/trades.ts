import tradesData from "@/data/trades.json";
import categoriesData from "@/data/categories.json";
import locationsData from "@/data/locations.json";
import reviewsData from "@/data/reviews.json";

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Trade {
  name: string;
  slug: string;
  trade_type: string;
  area: string;
  phone: string;
  email: string;
  website_url: string;
  description: string;
  services: string[];
  areas_served: string[];
  reviews: Review[];
  rating: number;
  review_count: number;
  featured: boolean;
  image: string;
  added_date: string;
}

export interface Category {
  name: string;
  slug: string;
  singular: string;
  description: string;
  icon: string;
}

export interface Location {
  name: string;
  slug: string;
  county: string;
}

export function getAllTrades(): Trade[] {
  return tradesData as Trade[];
}

export function getFeaturedTrades(): Trade[] {
  return (tradesData as Trade[]).filter((t) => t.featured);
}

export function getTradeBySlug(slug: string): Trade | undefined {
  return (tradesData as Trade[]).find((t) => t.slug === slug);
}

export function getTradesByCategory(categorySlug: string): Trade[] {
  return (tradesData as Trade[]).filter((t) => t.trade_type === categorySlug);
}

export function getTradesByLocation(locationName: string): Trade[] {
  return (tradesData as Trade[]).filter((t) =>
    t.areas_served.some((a) => a.toLowerCase() === locationName.toLowerCase())
  );
}

export function getTradesByCategoryAndLocation(
  categorySlug: string,
  locationName: string
): Trade[] {
  return (tradesData as Trade[]).filter(
    (t) =>
      t.trade_type === categorySlug &&
      t.areas_served.some((a) => a.toLowerCase() === locationName.toLowerCase())
  );
}

export function getAllCategories(): Category[] {
  return categoriesData as Category[];
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return (categoriesData as Category[]).find((c) => c.slug === slug);
}

export function getAllLocations(): Location[] {
  return locationsData as Location[];
}

export function getLocationBySlug(slug: string): Location | undefined {
  return (locationsData as Location[]).find((l) => l.slug === slug);
}

export function getLocationByName(name: string): Location | undefined {
  return (locationsData as Location[]).find((l) => l.name.toLowerCase() === name.toLowerCase());
}

export interface TradeHubReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: "tradehub";
  approved: boolean;
}

export function getReviewsBySlug(slug: string): TradeHubReview[] {
  const reviews = (reviewsData as Record<string, TradeHubReview[]>)[slug];
  return reviews ? reviews.filter((r) => r.approved) : [];
}

/**
 * Minimum threshold for a page to have enough content
 * Pages with fewer listings risk SEO penalties for thin content
 */
export const MIN_LISTINGS_THRESHOLD = 5;

/**
 * Check if a page has enough listings to avoid thin content penalty
 */
export function hasEnoughListings(count: number): boolean {
  return count >= MIN_LISTINGS_THRESHOLD;
}

/**
 * Get trade count by category and location
 * Useful for deciding whether to generate a page
 */
export function getTradeCount(categorySlug?: string, locationName?: string): number {
  if (categorySlug && locationName) {
    return getTradesByCategoryAndLocation(categorySlug, locationName).length;
  } else if (categorySlug) {
    return getTradesByCategory(categorySlug).length;
  } else if (locationName) {
    return getTradesByLocation(locationName).length;
  }
  return getAllTrades().length;
}

/**
 * Get related categories (for bulk up thin pages)
 */
export function getRelatedCategories(categorySlug: string, limit = 3): Category[] {
  // Simple implementation: just get other popular categories
  // Could be enhanced with actual related trades logic
  return (categoriesData as Category[])
    .filter((c) => c.slug !== categorySlug)
    .slice(0, limit);
}

/**
 * Get nearby locations (for bulk up thin pages)
 */
export function getNearbyLocations(locationName: string, limit = 3): Location[] {
  const location = getLocationByName(locationName);
  if (!location) return [];

  // Get locations in same county
  return (locationsData as Location[])
    .filter((l) => l.county === location.county && l.name !== locationName)
    .slice(0, limit);
}
