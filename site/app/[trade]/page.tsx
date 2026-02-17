import { notFound } from "next/navigation";
import ListingsToolbar from "@/components/ListingsToolbar";
import Link from "next/link";
import TradeIcon from "@/components/v2/TradeIcon";
import {
  getCategoryBySlug,
  getTradesByCategory,
  getAllCategories,
  getAllLocations,
} from "@/lib/trades";
import { generateMetadata as genMeta, itemListSchema, breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyLocations from "@/components/NearbyLocations";
import FAQAccordion from "@/components/FAQAccordion";
import faqsData from "@/data/faqs.json";
import relatedTradesData from "@/data/related-trades.json";
import hiringGuidesData from "@/data/hiring-guides.json";

export function generateStaticParams() {
  return getAllCategories().map((c) => ({ trade: c.slug }));
}

export function generateMetadata({ params }: { params: { trade: string } }) {
  const cat = getCategoryBySlug(params.trade);
  if (!cat) return {};
  const trades = getTradesByCategory(params.trade);
  return genMeta({
    title: `Trusted ${cat.name} in the West Midlands`,
    description: `Find ${trades.length}+ trusted ${cat.name.toLowerCase()} in the West Midlands. Vetted, insured, and reviewed by local homeowners. Get free quotes today.`,
    path: `/${cat.slug}`,
    includeCount: trades.length,
    ogImageParams: {
      title: `${cat.name} in the West Midlands`,
      subtitle: `${trades.length} verified professionals`,
      type: "category",
      count: String(trades.length),
    },
  });
}

export default function CategoryPage({ params }: { params: { trade: string } }) {
  const category = getCategoryBySlug(params.trade);
  if (!category) notFound();

  const trades = getTradesByCategory(params.trade);
  const locations = getAllLocations();
  const allCategories = getAllCategories();
  const faqs = (faqsData as Record<string, { question: string; answer: string }[]>)[params.trade] || [];
  const relatedTradeSlugs = (relatedTradesData as Record<string, string[]>)[params.trade] || [];
  const relatedTrades = relatedTradeSlugs
    .map(slug => allCategories.find(cat => cat.slug === slug))
    .filter((cat): cat is NonNullable<typeof cat> => cat !== undefined);
  const hiringGuide = (hiringGuidesData as Record<string, {
    qualifications: string[];
    questions: string[];
    redFlags: string[];
    priceRange: string;
  }>)[params.trade];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: category.name, url: `/${category.slug}` },
          ])),
        }}
      />
      {trades.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(itemListSchema(category.name, trades)),
          }}
        />
      )}
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageSchema(faqs)),
          }}
        />
      )}

      <Breadcrumbs items={[{ name: category.name, href: `/${category.slug}` }]} />

      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            Trusted {category.name} in the{" "}
            <span className="text-amber-500">West Midlands</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300">{category.description}</p>
          {trades.length > 0 && (
            <p className="mt-3 text-sm text-slate-400">
              Last verified:{" "}
              {new Date(
                Math.max(...trades.map((t) => new Date(t.added_date).getTime()))
              ).toLocaleDateString("en-GB", {
                month: "long",
                year: "numeric",
              })}
            </p>
          )}
        </div>
      </section>

      {/* Location Links */}
      <section className="border-b border-gray-100 bg-slate-50 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-4">
          {locations.slice(0, 6).map((loc) => (
            <Link
              key={loc.slug}
              href={`/${params.trade}/${loc.slug}`}
              className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-600 transition hover:border-trust hover:text-trust"
            >
              {category.name} in {loc.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Request a Quote CTA */}
      {trades.length > 0 && (
        <section className="border-b border-gray-100 bg-amber-50 py-6">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-4 sm:flex-row sm:justify-between">
            <div>
              <p className="font-semibold text-navy-950">
                Need a {category.singular.toLowerCase()}?
              </p>
              <p className="text-sm text-gray-600">
                Get free, no-obligation quotes from trusted local professionals.
              </p>
            </div>
            <Link
              href="/list-your-business#quote"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-amber-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-amber-700"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          {trades.length > 0 ? (
            <ListingsToolbar
              trades={trades}
              locations={locations.map((l) => l.name)}
              categoryName={category.name}
            />
          ) : (
            <p className="text-center text-gray-500">
              No {category.name.toLowerCase()} listed yet.{" "}
              <Link href="/list-your-business" className="text-trust underline">
                Be the first!
              </Link>
            </p>
          )}
        </div>
      </section>

      {hiringGuide && (
        <section className="py-12 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold text-navy mb-6">
              How to Choose a Good {category.singular}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-navy mb-3 flex items-center gap-2">
                  <span className="text-trust">✓</span> Key Qualifications
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {hiringGuide.qualifications.map((qual, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-trust mt-0.5">•</span>
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-navy mb-3 flex items-center gap-2">
                  <span className="text-trust">?</span> Questions to Ask
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {hiringGuide.questions.slice(0, 5).map((question, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-trust mt-0.5">•</span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-navy mb-3 flex items-center gap-2">
                  <span className="text-red-500">⚠</span> Red Flags to Avoid
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {hiringGuide.redFlags.map((flag, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">•</span>
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-navy mb-3 flex items-center gap-2">
                  <span className="text-trust">£</span> Typical Prices
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Average cost for {category.name.toLowerCase()} in the West Midlands:
                </p>
                <p className="text-lg font-semibold text-navy">
                  {hiringGuide.priceRange}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Prices vary by job complexity, urgency, and location. Always get multiple quotes.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="bg-slate-50 py-12 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold text-navy mb-6">
              Frequently Asked Questions About {category.name}
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>
      )}

      {relatedTrades.length > 0 && (
        <section className="py-12 border-t border-gray-100">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold text-navy mb-6">
              Related Trades
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedTrades.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/${cat.slug}`}
                  className="group block rounded-lg border-2 border-slate-200 bg-white p-5 transition-all duration-300 hover:border-amber-600 hover:shadow-md"
                >
                  <div className="mb-3 rounded-full bg-amber-100 p-2 w-fit transition-colors group-hover:bg-amber-600">
                    <TradeIcon
                      tradeSlug={cat.slug}
                      className="h-6 w-6 text-amber-600 transition-colors group-hover:text-white"
                    />
                  </div>
                  <h3 className="font-serif font-semibold text-navy-950 mb-2">{cat.name}</h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {cat.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-slate-50 py-12 border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-navy mb-6">
            Browse {category.name} by Area
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${params.trade}/${loc.slug}`}
                className="block p-4 rounded-lg border border-gray-200 bg-white hover:border-trust hover:shadow-sm transition"
              >
                <span className="font-medium text-navy">
                  {category.name} in {loc.name}
                </span>
                <span className="text-sm text-gray-500 block mt-1">
                  {loc.county}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced internal linking */}
      <NearbyLocations category={category} />
    </>
  );
}
