"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Category, Location } from "@/lib/trades";

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
    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
      <select
        value={trade}
        onChange={(e) => setTrade(e.target.value)}
        className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-trust focus:outline-none focus:ring-1 focus:ring-trust"
      >
        <option value="">Select a trade...</option>
        {categories.map((c) => (
          <option key={c.slug} value={c.slug}>
            {c.name}
          </option>
        ))}
      </select>
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-trust focus:outline-none focus:ring-1 focus:ring-trust"
      >
        <option value="">Select an area...</option>
        {locations.map((l) => (
          <option key={l.slug} value={l.slug}>
            {l.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="rounded-lg bg-trust px-8 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
      >
        Search
      </button>
    </form>
  );
}
