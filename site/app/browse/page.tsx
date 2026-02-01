"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Filter, Search, MapPin } from "lucide-react";
import TradeCard from "@/components/TradeCard";
import { getAllTrades, getAllCategories, getAllLocations } from "@/lib/trades";

export default function BrowseAllPage() {
  const allTrades = getAllTrades();
  const categories = getAllCategories();
  const locations = getAllLocations();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrade, setSelectedTrade] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"rating" | "reviews" | "recent">("rating");

  // Filter and sort trades
  const filteredTrades = useMemo(() => {
    let filtered = allTrades;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (trade) =>
          trade.name.toLowerCase().includes(query) ||
          trade.description.toLowerCase().includes(query) ||
          trade.services.some((s) => s.toLowerCase().includes(query))
      );
    }

    // Trade type filter
    if (selectedTrade !== "all") {
      filtered = filtered.filter((trade) => trade.trade_type === selectedTrade);
    }

    // Location filter
    if (selectedLocation !== "all") {
      filtered = filtered.filter((trade) =>
        trade.areas_served.some(
          (area) => area.toLowerCase() === selectedLocation.toLowerCase()
        )
      );
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating || b.review_count - a.review_count;
      } else if (sortBy === "reviews") {
        return b.review_count - a.review_count;
      } else {
        // recent
        return new Date(b.added_date).getTime() - new Date(a.added_date).getTime();
      }
    });

    return filtered;
  }, [allTrades, searchQuery, selectedTrade, selectedLocation, sortBy]);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Browse All <span className="text-gradient-amber">Tradespeople</span>
            </h1>
            <p className="mt-4 text-lg text-white md:text-xl">
              <span className="font-semibold text-amber-400">{allTrades.length}</span> verified tradespeople across the West Midlands
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="border-b border-warmgray-200 bg-white py-6 shadow-sm">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-4 md:grid-cols-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-warmgray-400" />
              <input
                type="text"
                placeholder="Search by name or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-warmgray-300 py-2.5 pl-10 pr-4 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            {/* Trade Type Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-warmgray-400" />
              <select
                value={selectedTrade}
                onChange={(e) => setSelectedTrade(e.target.value)}
                className="w-full appearance-none rounded-lg border border-warmgray-300 py-2.5 pl-10 pr-10 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              >
                <option value="all">All Trades</option>
                {categories.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-warmgray-400" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full appearance-none rounded-lg border border-warmgray-300 py-2.5 pl-10 pr-10 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              >
                <option value="all">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc.slug} value={loc.name}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-lg border border-warmgray-300 py-2.5 px-4 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            >
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviews</option>
              <option value="recent">Recently Added</option>
            </select>
          </div>

          {/* Active Filters Display */}
          {(searchQuery || selectedTrade !== "all" || selectedLocation !== "all") && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-warmgray-700">Active filters:</span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-700 hover:bg-amber-200"
                >
                  <span>Search: "{searchQuery}"</span>
                  <span className="text-lg leading-none">×</span>
                </button>
              )}
              {selectedTrade !== "all" && (
                <button
                  onClick={() => setSelectedTrade("all")}
                  className="inline-flex items-center gap-1 rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700 hover:bg-teal-200"
                >
                  <span>{categories.find((c) => c.slug === selectedTrade)?.name}</span>
                  <span className="text-lg leading-none">×</span>
                </button>
              )}
              {selectedLocation !== "all" && (
                <button
                  onClick={() => setSelectedLocation("all")}
                  className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 hover:bg-blue-200"
                >
                  <span>{selectedLocation}</span>
                  <span className="text-lg leading-none">×</span>
                </button>
              )}
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTrade("all");
                  setSelectedLocation("all");
                }}
                className="text-sm font-medium text-warmgray-600 hover:text-warmgray-900"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-warmgray-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-warmgray-600">
              Showing <span className="font-semibold text-warmgray-900">{filteredTrades.length}</span> {filteredTrades.length === 1 ? "tradesperson" : "tradespeople"}
            </p>
          </div>

          {filteredTrades.length === 0 ? (
            <div className="rounded-xl border border-warmgray-200 bg-white p-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-warmgray-100">
                <Search className="h-8 w-8 text-warmgray-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-navy-950">No tradespeople found</h3>
              <p className="text-warmgray-600">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTrade("all");
                  setSelectedLocation("all");
                }}
                className="btn-secondary mt-6"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTrades.map((trade) => (
                <TradeCard key={trade.slug} trade={trade} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-heading-3">Can't find what you're looking for?</h2>
          <p className="text-body-primary mt-3">
            Get in touch and we'll help you find the right tradesperson
          </p>
          <Link href="/list-your-business" className="btn-primary mt-6">
            List Your Business
          </Link>
        </div>
      </section>
    </>
  );
}
