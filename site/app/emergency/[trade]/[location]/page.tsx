import { Metadata } from "next";
import Link from "next/link";
import categories from "@/data/categories.json";
import locations from "@/data/locations.json";
import trades from "@/data/trades.json";
import TradeCard from "@/components/TradeCard";

type Params = {
  trade: string;
  location: string;
};

const emergencyTrades = ["plumbers", "locksmiths", "electricians"];

export async function generateStaticParams() {
  const params: Params[] = [];

  emergencyTrades.forEach((trade) => {
    locations.forEach((location) => {
      params.push({
        trade,
        location: location.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const category = categories.find((c) => c.slug === params.trade);
  const location = locations.find((l) => l.slug === params.location);

  if (!category || !location) {
    return {
      title: "Emergency Services | TradeHub",
    };
  }

  const title = `Emergency ${category.singular} in ${location.name} — 24/7 Call Out`;
  const description = `Need an emergency ${category.singular.toLowerCase()} in ${location.name}? Available 24/7 for urgent call-outs. Fast response, local tradespeople.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://tradehub.directory/emergency/${params.trade}/${params.location}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function EmergencyPage({ params }: { params: Params }) {
  const category = categories.find((c) => c.slug === params.trade);
  const location = locations.find((l) => l.slug === params.location);

  if (!category || !location) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-navy">Service not found</h1>
        <Link href="/" className="mt-4 inline-block text-trust">
          ← Back to home
        </Link>
      </div>
    );
  }

  // Filter trades by trade_type and location
  const filteredTrades = trades.filter(
    (t) =>
      t.trade_type === params.trade &&
      t.areas_served.some(
        (area) => area.toLowerCase().replace(/\s+/g, "-") === params.location
      )
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://tradehub.directory",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Emergency Services",
        item: "https://tradehub.directory/emergency",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${category.name}`,
        item: `https://tradehub.directory/emergency/${params.trade}/${params.location}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Emergency Hero */}
      <section className="bg-red-600 py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
            🚨 24/7 EMERGENCY SERVICE
          </div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Emergency {category.singular} in {location.name}
          </h1>
          <p className="mt-4 text-lg text-red-50">
            Fast response. Available 24/7. Local tradespeople ready to help.
          </p>
          <div className="mt-6">
            <a
              href="tel:07718132878"
              className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-bold text-red-600 shadow-lg transition hover:bg-red-50"
            >
              📞 Call Now: 07718 132878
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="border-b bg-gray-50 py-3">
        <div className="mx-auto max-w-4xl px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-trust">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href={`/${params.trade}`} className="hover:text-trust">
                {category.name}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/${params.trade}/${params.location}`}
                className="hover:text-trust"
              >
                {location.name}
              </Link>
            </li>
            <li>/</li>
            <li className="text-red-600 font-semibold">Emergency</li>
          </ol>
        </div>
      </nav>

      {/* Urgent Info */}
      <section className="bg-yellow-50 py-8">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold text-navy">What to Expect:</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-600">⚡</span>
              <span>Fast call-out service — most tradespeople can respond within 1-2 hours</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">⚡</span>
              <span>Available 24/7 including weekends and bank holidays</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">⚡</span>
              <span>Fully qualified, insured, and Gas Safe registered (where applicable)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">⚡</span>
              <span>Transparent pricing — emergency call-out fees quoted upfront</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Trades Listing */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-navy">
            Available Emergency {category.name} in {location.name}
          </h2>
          {filteredTrades.length > 0 ? (
            <div className="grid gap-6">
              {filteredTrades.map((trade) => (
                <TradeCard key={trade.slug} trade={trade} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
              <p className="text-gray-600">
                No emergency {category.slug} currently listed in {location.name}.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Try calling our main number for assistance:{" "}
                <a href="tel:07718132878" className="font-semibold text-trust">
                  07718 132878
                </a>
              </p>
              <div className="mt-6">
                <Link
                  href={`/${params.trade}/${params.location}`}
                  className="text-trust hover:underline"
                >
                  View all {category.slug} in {location.name} →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Emergency Tradespeople */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-navy">
            When You Need an Emergency {category.singular}
          </h2>
          <div className="mt-6 space-y-4 text-gray-700">
            <p>
              Emergencies don't wait for business hours. Whether it's a burst pipe, a
              lockout, or an electrical fault, you need a tradesperson who can respond
              fast and fix the problem safely.
            </p>
            <p>
              All {category.slug} listed on TradeHub are fully qualified, insured, and
              experienced in emergency call-outs. They understand the urgency and will
              prioritize your job.
            </p>
            <p>
              <strong>What counts as an emergency?</strong>
            </p>
            <ul className="list-inside list-disc space-y-1 pl-4">
              {params.trade === "plumbers" && (
                <>
                  <li>Burst pipes or major leaks</li>
                  <li>Blocked drains causing flooding</li>
                  <li>No heating or hot water in winter</li>
                  <li>Boiler breakdowns</li>
                </>
              )}
              {params.trade === "electricians" && (
                <>
                  <li>Complete power loss</li>
                  <li>Burning smell from electrics</li>
                  <li>Sparking outlets or fuse box</li>
                  <li>Exposed or damaged wiring</li>
                </>
              )}
              {params.trade === "locksmiths" && (
                <>
                  <li>Locked out of your home or business</li>
                  <li>Lost or stolen keys</li>
                  <li>Broken locks after a break-in</li>
                  <li>Jammed or faulty locks</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
