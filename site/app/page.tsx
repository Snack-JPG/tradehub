import Link from "next/link";
import TradeCard from "@/components/TradeCard";
import Hero from "@/components/v2/Hero";
import StatsBar from "@/components/v2/StatsBar";
import TrustIndicators from "@/components/v2/TrustIndicators";
import CertificationBar from "@/components/v2/CertificationBar";
import TestimonialsSection from "@/components/v2/TestimonialsSection";
import HowItWorks from "@/components/v2/HowItWorks";
import CTASection from "@/components/v2/CTASection";
import TradeIcon from "@/components/v2/TradeIcon";
import { getFeaturedTrades, getAllCategories, getAllTrades } from "@/lib/trades";
import { websiteSchema, breadcrumbSchema } from "@/lib/seo";

export default function HomePage() {
  const allFeatured = getFeaturedTrades();
  const featured = allFeatured.slice(0, 10); // Show only top 10
  const categories = getAllCategories();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }])),
        }}
      />
      {/* Hero with Search */}
      <Hero />

      {/* Stats Bar */}
      <StatsBar />

      {/* Emergency Services */}
      <section className="bg-red-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
              🚨 NEED HELP NOW?
            </div>
            <h2 className="text-heading-3 mt-6">
              24/7 Emergency Services
            </h2>
            <p className="text-body-primary mt-3">
              Fast response when you need it most — available around the clock
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { name: 'Emergency Locksmiths', slug: 'locksmiths', icon: '🔐' },
              { name: 'Emergency Plumbers', slug: 'plumbers', icon: '🔧' },
              { name: 'Emergency Electricians', slug: 'electricians', icon: '⚡' },
              { name: 'Vehicle Recovery', slug: 'vehicle-recovery', icon: '🚗' },
              { name: 'Emergency Glaziers', slug: 'emergency-glaziers', icon: '🪟' },
            ].map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group flex flex-col items-center gap-3 rounded-xl border-2 border-red-200 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-xl"
              >
                <div className="rounded-full bg-red-100 p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:shadow-lg">
                  <span className="text-3xl transition-transform group-hover:scale-110">{service.icon}</span>
                </div>
                <span className="font-serif text-base font-bold text-navy-950">
                  {service.name}
                </span>
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">24/7 Available</span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/emergency"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg"
            >
              View All Emergency Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Certification Bar */}
      <CertificationBar />

      {/* Featured Trades */}
      <section className="bg-warmgray-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-heading-3 text-center">
            Featured Tradespeople
          </h2>
          <p className="text-body-primary mt-3 text-center">
            Top-rated professionals in your area
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((trade) => (
              <TradeCard key={trade.slug} trade={trade} />
            ))}
          </div>

          {/* Browse All Button */}
          <div className="mt-10 text-center">
            <Link href="/browse" className="btn-primary text-base">
              <span>Browse All {allFeatured.length} Tradespeople</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by Trade */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-heading-3 text-center">
            Browse by Trade
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group flex flex-col items-center gap-3 rounded-xl border-2 border-warmgray-200 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-amber-500 hover:shadow-lg"
              >
                <div className="rounded-full bg-amber-50 p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-amber group-hover:shadow-amber-glow">
                  <TradeIcon
                    tradeSlug={cat.slug}
                    className="h-8 w-8 text-amber-600 transition-colors group-hover:text-white"
                  />
                </div>
                <span className="font-serif text-sm font-bold text-navy-950 transition-colors group-hover:text-amber-600">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* How It Works */}
      <HowItWorks />

      {/* CTA */}
      <CTASection />
    </>
  );
}
