"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Trade } from "@/lib/trades";
import TradeCard from "./TradeCard";

type SortOption = "rating" | "reviews" | "name";

interface ListingsToolbarProps {
  trades: Trade[];
  locations: string[];
  categoryName: string;
}

export default function ListingsToolbar({
  trades,
  locations,
  categoryName,
}: ListingsToolbarProps) {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [sort, setSort] = useState<SortOption>("rating");

  const filtered = useMemo(() => {
    let result = trades;

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.services.some((s) => s.toLowerCase().includes(q))
      );
    }

    if (locationFilter) {
      result = result.filter((t) =>
        t.areas_served.some(
          (a) => a.toLowerCase() === locationFilter.toLowerCase()
        )
      );
    }

    switch (sort) {
      case "reviews":
        result = [...result].sort((a, b) => b.review_count - a.review_count);
        break;
      case "name":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "rating":
      default:
        result = [...result].sort(
          (a, b) => b.rating - a.rating || b.review_count - a.review_count
        );
        break;
    }

    return result;
  }, [trades, search, locationFilter, sort]);

  // Get unique locations from all trades
  const uniqueLocations = useMemo(() => {
    const locs = new Set<string>();
    trades.forEach((t) => t.areas_served.forEach((a) => locs.add(a)));
    return Array.from(locs).sort();
  }, [trades]);

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${categoryName.toLowerCase()}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>

        {/* Location Filter */}
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        >
          <option value="">All locations</option>
          {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        >
          <option value="rating">Highest Rated</option>
          <option value="reviews">Most Reviews</option>
          <option value="name">Name A–Z</option>
        </select>
      </div>

      {/* Results count */}
      <p className="mb-4 text-sm text-gray-500">
        {filtered.length} {categoryName.toLowerCase()} found
        {search && ` for "${search}"`}
        {locationFilter && ` in ${locationFilter}`}
      </p>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <TradeCard key={t.slug} trade={t} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
          <p className="text-gray-600">
            No {categoryName.toLowerCase()} match your filters.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setLocationFilter("");
            }}
            className="mt-3 text-sm font-medium text-amber-600 hover:text-amber-700"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
