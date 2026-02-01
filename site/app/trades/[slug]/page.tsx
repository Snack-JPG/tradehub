import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Shield, Phone, Mail, Globe, MapPin, Star, ArrowRight } from "lucide-react";
import ReviewStars from "@/components/ReviewStars";
import { getTradeBySlug, getAllTrades, getLocationByName, getAllCategories, getCategoryBySlug, getReviewsBySlug } from "@/lib/trades";
import ReviewBadge from "@/components/ReviewBadge";
import { generateMetadata as genMeta, localBusinessSchema, breadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import relatedTradesData from "@/data/related-trades.json";

export function generateStaticParams() {
  return getAllTrades().map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const trade = getTradeBySlug(params.slug);
  if (!trade) return {};
  const tradeLabel = trade.trade_type.replace(/s$/, "").replace(/^./, (c: string) => c.toUpperCase());
  const ratingText = trade.review_count > 0 ? ` Rated ${trade.rating}/5 from ${trade.review_count} reviews.` : "";
  return genMeta({
    title: `${trade.name} — ${tradeLabel} in ${trade.area}`,
    description: `${trade.name} — trusted ${tradeLabel.toLowerCase()} in ${trade.area}, West Midlands.${ratingText} ${trade.services.slice(0, 3).join(", ")}. Get a free quote today.`,
    path: `/trades/${trade.slug}`,
    ogImageParams: {
      title: trade.name,
      subtitle: `${tradeLabel} · ${trade.area}`,
      type: "trade",
      rating: String(trade.rating),
    },
  });
}

export default function TradeProfilePage({ params }: { params: { slug: string } }) {
  const trade = getTradeBySlug(params.slug);
  if (!trade) notFound();

  const tradeLabel = trade.trade_type.replace(/s$/, "").replace(/^./, (c) => c.toUpperCase());
  const category = getCategoryBySlug(trade.trade_type);
  const primaryLocation = getLocationByName(trade.area);
  const allCategories = getAllCategories();

  const relatedTradeSlugs = (relatedTradesData as Record<string, string[]>)[trade.trade_type] || [];
  const relatedTrades = relatedTradeSlugs
    .slice(0, 3)
    .map(slug => allCategories.find(cat => cat.slug === slug))
    .filter((cat): cat is NonNullable<typeof cat> => cat !== undefined);

  // Merge Google reviews + TradeHub reviews
  const tradehubReviews = getReviewsBySlug(params.slug);
  const allReviews = [
    ...trade.reviews.map((r) => ({ ...r, source: "google" as const })),
    ...tradehubReviews.map((r) => ({ ...r, source: "tradehub" as const })),
  ].sort((a, b) => b.date.localeCompare(a.date));
  const totalReviewCount = trade.review_count + tradehubReviews.length;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema(trade)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: trade.trade_type.replace(/^./, (c) => c.toUpperCase()), url: `/${trade.trade_type}` },
            { name: trade.name, url: `/trades/${trade.slug}` },
          ])),
        }}
      />

      <Breadcrumbs
        items={[
          { name: category?.name || trade.trade_type, href: `/${trade.trade_type}` },
          { name: trade.name, href: `/trades/${trade.slug}` },
        ]}
      />

      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-12">
        <div className="mx-auto max-w-6xl px-4">
          {trade.featured && (
            <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold to-amber-500 px-3 py-1 text-xs font-bold text-navy-950">
              <Star className="h-3 w-3 fill-current" />
              FEATURED
            </span>
          )}
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            {trade.name}
          </h1>
          <p className="mt-2 text-lg capitalize text-slate-300">
            {tradeLabel} · {trade.area}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <ReviewStars rating={trade.rating} count={totalReviewCount} />
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1 rounded-full bg-green-50/10 px-3 py-1 text-xs font-medium text-green-400">
                <CheckCircle className="h-3 w-3" />
                Verified
              </span>
              <span className="flex items-center gap-1 rounded-full bg-blue-50/10 px-3 py-1 text-xs font-medium text-blue-400">
                <Shield className="h-3 w-3" />
                Insured
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 md:col-span-2">
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-950">About</h2>
              <p className="mt-3 leading-relaxed text-slate-700">
                {trade.description}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-950">Services</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {trade.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-navy-950">Areas Served</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {trade.areas_served.map((a) => (
                  <span
                    key={a}
                    className="flex items-center gap-1.5 rounded-full border-2 border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    <MapPin className="h-4 w-4 text-amber-600" />
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl font-bold text-navy-950">
                  Reviews ({totalReviewCount})
                </h2>
                <Link
                  href={`/review/${trade.slug}`}
                  className="rounded-lg bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-100"
                >
                  Leave a Review
                </Link>
              </div>
              <div className="mt-6 space-y-4">
                {allReviews.map((r, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-navy-950">{r.author}</span>
                        <ReviewBadge source={r.source} />
                      </div>
                      <span className="text-xs text-slate-500">{r.date}</span>
                    </div>
                    <div className="mt-2">
                      <ReviewStars rating={r.rating} />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-20 rounded-xl border-2 border-amber-600 bg-white p-6 shadow-lg">
              <h3 className="font-serif text-xl font-bold text-navy-950">Get a Quote</h3>
              <p className="mt-2 text-sm text-slate-600">
                Contact {trade.name} for a free, no-obligation quote
              </p>
              <a
                href={`tel:${trade.phone.replace(/\s/g, "")}`}
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-4 py-3 font-semibold text-white shadow-cta transition-all hover:scale-105 hover:bg-amber-700"
              >
                <Phone className="h-5 w-5" />
                {trade.phone}
              </a>
              {trade.email && (
                <a
                  href={`mailto:${trade.email}`}
                  className="mt-3 flex items-center justify-center gap-2 rounded-lg border-2 border-slate-200 px-4 py-3 font-semibold text-slate-700 transition hover:border-amber-600 hover:text-amber-600"
                >
                  <Mail className="h-5 w-5" />
                  Send Email
                </a>
              )}
              {trade.website_url && (
                <a
                  href={trade.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700"
                >
                  <Globe className="h-4 w-4" />
                  Visit Website
                </a>
              )}
            </div>

            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="font-serif text-lg font-bold text-navy-950">Trust Indicators</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-verified" />
                  <span>Vetted Professional</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span>Fully Insured</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-500" />
                  <span>{trade.rating}/5 ({totalReviewCount} reviews)</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span>Based in {trade.area}</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {category && primaryLocation && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-navy-950">
                  More {category.name} in {trade.area}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Discover other trusted {category.name.toLowerCase()} serving your area
                </p>
                <Link
                  href={`/${trade.trade_type}/${primaryLocation.slug}`}
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-amber-600 hover:text-amber-700"
                >
                  View all {category.name} in {trade.area}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}

            {relatedTrades.length > 0 && primaryLocation && (
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-navy-950">
                  Related Services in {trade.area}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Find other tradespeople for your project
                </p>
                <div className="mt-4 space-y-3">
                  {relatedTrades.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/${cat.slug}/${primaryLocation.slug}`}
                      className="flex items-center justify-between rounded-lg border border-slate-200 p-3 transition hover:border-amber-600 hover:bg-amber-50"
                    >
                      <span className="font-medium text-slate-900">{cat.name} in {trade.area}</span>
                      <ArrowRight className="h-4 w-4 text-amber-600" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
