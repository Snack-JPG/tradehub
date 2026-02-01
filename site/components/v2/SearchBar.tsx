"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { Category, Location } from "@/lib/trades";
import { cn } from "@/lib/utils";

export default function SearchBar({
  categories,
  locations,
}: {
  categories: Category[];
  locations: Location[];
}) {
  const router = useRouter();
  const [trade, setTrade] = useState("");
  const [location, setLocation] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (trade && location) {
      router.push(`/${trade}/${location}`);
    } else if (trade) {
      router.push(`/${trade}`);
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <form
        onSubmit={handleSearch}
        className="rounded-xl bg-white p-6 shadow-lg"
      >
        <label className="mb-3 block text-sm font-medium text-navy-900">
          What are you looking for?
        </label>
        <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
          {/* Trade Select */}
          <div className="relative">
            <select
              value={trade}
              onChange={(e) => setTrade(e.target.value)}
              className={cn(
                "w-full appearance-none rounded-lg border-2 border-slate-200 bg-slate-50 px-4 py-3.5 pr-10 text-base text-navy-900",
                "focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20",
                "transition-all duration-200",
                "hover:border-slate-300"
              )}
            >
              <option value="">Select a trade...</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.icon} {c.name}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-600" />
          </div>

          {/* Location Select */}
          <div className="relative">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={cn(
                "w-full appearance-none rounded-lg border-2 border-slate-200 bg-slate-50 px-4 py-3.5 pr-10 text-base text-navy-900",
                "focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20",
                "transition-all duration-200",
                "hover:border-slate-300"
              )}
            >
              <option value="">Select an area...</option>
              {locations.map((l) => (
                <option key={l.slug} value={l.slug}>
                  {l.name}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-600" />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className={cn(
              "flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-8 py-3.5 font-semibold text-white shadow-cta",
              "transition-all duration-200",
              "hover:scale-105 hover:bg-amber-700",
              "active:scale-95",
              "focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2",
              "sm:w-auto w-full"
            )}
          >
            <Search className="h-5 w-5" />
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
}
