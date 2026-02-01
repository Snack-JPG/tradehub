import Link from "next/link";
import { Star, ArrowRight, MapPin } from "lucide-react";
import { Trade, getAllTrades, getCategoryBySlug } from "@/lib/trades";
import relatedTradesData from "@/data/related-trades.json";

interface Props {
  trade: Trade;
}

/**
 * Shows 3-4 related tradespeople on a trade profile page:
 * - Same trade type in same/nearby area (sorted by rating)
 * - Different but complementary trade type
 */
export default function RelatedTradespeople({ trade }: Props) {
  const allTrades = getAllTrades();

  // 1. Same trade type, same or nearby area (exclude self)
  const sameTradeSameArea = allTrades
    .filter(
      (t) =>
        t.slug !== trade.slug &&
        t.trade_type === trade.trade_type &&
        (t.area === trade.area ||
          t.areas_served.some((a) =>
            trade.areas_served.some(
              (b) => a.toLowerCase() === b.toLowerCase()
            )
          ))
    )
    .sort((a, b) => b.rating * b.review_count - a.rating * a.review_count)
    .slice(0, 2);

  // 2. Complementary trade types in same area
  const relatedSlugs =
    (relatedTradesData as Record<string, string[]>)[trade.trade_type] || [];
  const complementary = relatedSlugs
    .flatMap((catSlug) =>
      allTrades
        .filter(
          (t) =>
            t.trade_type === catSlug &&
            (t.area === trade.area ||
              t.areas_served.some((a) =>
                trade.areas_served.some(
                  (b) => a.toLowerCase() === b.toLowerCase()
                )
              ))
        )
        .sort((a, b) => b.rating * b.review_count - a.rating * a.review_count)
        .slice(0, 1)
    )
    .slice(0, 2);

  const related = [...sameTradeSameArea, ...complementary].slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="py-12 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-serif text-2xl font-bold text-navy-950 mb-6">
          Related Tradespeople Near {trade.area}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((t) => {
            const category = getCategoryBySlug(t.trade_type);
            const tradeLabel = category?.singular || t.trade_type.replace(/s$/, "").replace(/^./, (c) => c.toUpperCase());
            return (
              <Link
                key={t.slug}
                href={`/trades/${t.slug}`}
                className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-amber-400 hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-amber-600">
                  {tradeLabel}
                </p>
                <h3 className="mt-1 font-serif text-lg font-bold text-navy-950 group-hover:text-amber-600 transition-colors">
                  {t.name}
                </h3>
                <div className="mt-2 flex items-center gap-1 text-sm text-slate-600">
                  <MapPin className="h-3.5 w-3.5 text-amber-500" />
                  {t.area}
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-semibold text-navy-950">
                    {t.rating}
                  </span>
                  <span className="text-xs text-slate-500">
                    ({t.review_count} reviews)
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-amber-600 group-hover:gap-2 transition-all">
                  View Profile <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
