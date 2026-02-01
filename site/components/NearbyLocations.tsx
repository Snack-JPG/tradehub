import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import {
  Category,
  Location,
  getAllLocations,
  getAllCategories,
} from "@/lib/trades";
import relatedTradesData from "@/data/related-trades.json";

interface Props {
  category: Category;
  location?: Location;
  /** Max nearby locations to show */
  maxLocations?: number;
}

/**
 * Internal linking component for category and location pages.
 * Shows:
 * - Same trade in nearby areas
 * - Related trade categories
 */
export default function NearbyLocations({
  category,
  location,
  maxLocations = 8,
}: Props) {
  const allLocations = getAllLocations();
  const allCategories = getAllCategories();

  // Nearby locations: same county first, then others
  const nearbyLocations = location
    ? [
        ...allLocations.filter(
          (l) => l.county === location.county && l.slug !== location.slug
        ),
        ...allLocations.filter(
          (l) => l.county !== location.county && l.slug !== location.slug
        ),
      ].slice(0, maxLocations)
    : allLocations.slice(0, maxLocations);

  // Related trade categories from the mapping
  const relatedSlugs =
    (relatedTradesData as Record<string, string[]>)[category.slug] || [];
  const relatedCategories = relatedSlugs
    .map((slug) => allCategories.find((c) => c.slug === slug))
    .filter((c): c is Category => c !== undefined);

  // Also add a few more popular categories not in the related list
  const extraCategories = allCategories
    .filter(
      (c) =>
        c.slug !== category.slug &&
        !relatedSlugs.includes(c.slug)
    )
    .slice(0, Math.max(0, 4 - relatedCategories.length));

  const allRelated = [...relatedCategories, ...extraCategories].slice(0, 4);

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4 space-y-8">
        {/* Nearby locations */}
        {nearbyLocations.length > 0 && (
          <div>
            <h2 className="font-serif text-xl font-bold text-navy-950 mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-amber-600" />
              Also find {category.name.toLowerCase()} in
            </h2>
            <div className="flex flex-wrap gap-2">
              {nearbyLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/${category.slug}/${loc.slug}`}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-amber-500 hover:text-amber-600 hover:shadow-sm"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Related categories */}
        {allRelated.length > 0 && (
          <div>
            <h2 className="font-serif text-xl font-bold text-navy-950 mb-4">
              You might also need
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {allRelated.map((cat) => (
                <Link
                  key={cat.slug}
                  href={
                    location
                      ? `/${cat.slug}/${location.slug}`
                      : `/${cat.slug}`
                  }
                  className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition hover:border-amber-500 hover:shadow-sm"
                >
                  <div>
                    <span className="text-lg mr-2">{cat.icon}</span>
                    <span className="font-semibold text-navy-950">
                      {cat.name}
                    </span>
                    {location && (
                      <span className="block text-xs text-slate-500 mt-1 ml-8">
                        in {location.name}
                      </span>
                    )}
                  </div>
                  <ArrowRight className="h-4 w-4 text-amber-600 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
