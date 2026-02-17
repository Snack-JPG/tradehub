import { notFound } from "next/navigation";
import ListingsToolbar from "@/components/ListingsToolbar";
import Link from "next/link";
import TradeIcon from "@/components/v2/TradeIcon";
import {
  getCategoryBySlug,
  getLocationBySlug,
  getTradesByCategoryAndLocation,
  getAllCategories,
  getAllLocations,
} from "@/lib/trades";
import { generateMetadata as genMeta, itemListSchema, breadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import NearbyLocations from "@/components/NearbyLocations";
import locationContentData from "@/data/location-content.json";

export function generateStaticParams() {
  const categories = getAllCategories();
  const locations = getAllLocations();
  return categories.flatMap((c) =>
    locations.map((l) => ({ trade: c.slug, location: l.slug }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { trade: string; location: string };
}) {
  const cat = getCategoryBySlug(params.trade);
  const loc = getLocationBySlug(params.location);
  if (!cat || !loc) return {};

  const trades = getTradesByCategoryAndLocation(params.trade, loc.name);
  const hasListings = trades.length >= 3; // Minimum 3 listings to avoid thin content

  const desc = hasListings
    ? `Find ${trades.length} vetted ${cat.name.toLowerCase()} in ${loc.name}, ${loc.county}. Rated by local homeowners. Get free, no-obligation quotes today.`
    : `Looking for trusted ${cat.name.toLowerCase()} in ${loc.name}, ${loc.county}? Browse nearby professionals and get free quotes.`;
  return {
    ...genMeta({
      title: `Trusted ${cat.name} in ${loc.name}`,
      description: desc,
      path: `/${cat.slug}/${loc.slug}`,
      includeCount: trades.length,
      ogImageParams: {
        title: `${cat.name} in ${loc.name}`,
        subtitle: `${loc.county} · West Midlands`,
        type: "location",
        count: String(trades.length),
      },
    }),
    robots: hasListings ? undefined : { index: false, follow: true },
  };
}

export default function CombinedPage({
  params,
}: {
  params: { trade: string; location: string };
}) {
  const category = getCategoryBySlug(params.trade);
  const location = getLocationBySlug(params.location);
  if (!category || !location) notFound();

  const trades = getTradesByCategoryAndLocation(params.trade, location.name);
  const locationContent = (locationContentData as Record<string, { description: string; nearby: string[] }>)[params.location];
  const allLocations = getAllLocations();
  const allCategories = getAllCategories();

  const nearbyLocations = locationContent?.nearby
    ? allLocations.filter((loc) => locationContent.nearby.includes(loc.slug))
    : [];

  const relatedCategories = allCategories.filter((cat) => cat.slug !== params.trade).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: category.name, url: `/${category.slug}` },
            { name: location.name, url: `/${category.slug}/${location.slug}` },
          ])),
        }}
      />
      {trades.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              itemListSchema(`${category.name} in ${location.name}`, trades)
            ),
          }}
        />
      )}

      <Breadcrumbs
        items={[
          { name: category.name, href: `/${category.slug}` },
          { name: location.name, href: `/${category.slug}/${location.slug}` },
        ]}
      />

      <section className="bg-navy py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Trusted {category.name} in{" "}
            <span className="text-trust">{location.name}</span>
          </h1>
          <p className="mt-3 text-gray-300">
            Find vetted, reviewed {category.name.toLowerCase()} in{" "}
            {location.name}, {location.county}. Free quotes from local
            professionals.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          {trades.length > 0 ? (
            <ListingsToolbar
              trades={trades}
              locations={[location.name]}
              categoryName={category.name}
            />
          ) : (
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-gray-600 text-lg mb-4">
                  No {category.name.toLowerCase()} listed in {location.name} yet.
                </p>
                <Link
                  href="/list-your-business"
                  className="inline-block rounded-lg bg-trust px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  List Your Business Here
                </Link>
              </div>

              {nearbyLocations.length > 0 && (
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-xl font-semibold text-navy mb-4 text-center">
                    Browse {category.name} in Nearby Areas
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {nearbyLocations.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/${params.trade}/${loc.slug}`}
                        className="block p-4 rounded-lg border border-gray-200 bg-white hover:border-trust hover:shadow-md transition"
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
              )}

              {relatedCategories.length > 0 && (
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-xl font-semibold text-navy mb-4 text-center">
                    Other Trades in {location.name}
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {relatedCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/${cat.slug}/${params.location}`}
                        className="group flex items-center gap-3 rounded-lg border-2 border-slate-200 bg-white p-4 transition-all hover:border-amber-600 hover:shadow-md"
                      >
                        <div className="rounded-full bg-amber-100 p-2 transition-colors group-hover:bg-amber-600">
                          <TradeIcon
                            tradeSlug={cat.slug}
                            className="h-5 w-5 text-amber-600 transition-colors group-hover:text-white"
                          />
                        </div>
                        <span className="font-serif font-semibold text-navy-950">{cat.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="border-t border-gray-100 bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 text-sm leading-relaxed text-gray-600">
          <h2 className="mb-4 text-lg font-semibold text-navy">
            Finding a Reliable {category.singular} in {location.name}
          </h2>
          {locationContent && (
            <p className="mb-3">{locationContent.description}</p>
          )}
          <p>
            Looking for a trusted {category.singular.toLowerCase()} in{" "}
            {location.name}? TradeHub connects you with vetted, reviewed{" "}
            {category.name.toLowerCase()} serving {location.name} and
            surrounding areas in {location.county}. All our listed tradespeople
            are checked for quality, insurance, and customer satisfaction.
          </p>
          <p className="mt-3">
            Whether you need an emergency call-out or a planned project, our{" "}
            {location.name} {category.name.toLowerCase()} are ready to help. Get
            free, no-obligation quotes today.
          </p>
        </div>
      </section>

      {/* Enhanced internal linking */}
      <NearbyLocations category={category} location={location} />
    </>
  );
}
