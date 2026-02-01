import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Emergency Services | TradeHub",
  description:
    "Find 24/7 emergency tradespeople across the West Midlands. Fast response for locksmiths, plumbers, electricians, glaziers, and vehicle recovery.",
  alternates: {
    canonical: "https://tradehub.directory/emergency",
  },
  openGraph: {
    title: "24/7 Emergency Services | TradeHub",
    description:
      "Find 24/7 emergency tradespeople across the West Midlands. Fast response for locksmiths, plumbers, electricians, glaziers, and vehicle recovery.",
    url: "https://tradehub.directory/emergency",
    siteName: "TradeHub",
    type: "website",
    images: [
      {
        url: "https://tradehub.directory/api/og?title=24%2F7+Emergency+Services&subtitle=Fast+response+across+the+West+Midlands&type=emergency",
        width: 1200,
        height: 630,
        alt: "TradeHub 24/7 Emergency Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Emergency Services | TradeHub",
    description:
      "Find 24/7 emergency tradespeople across the West Midlands. Fast response when you need it most.",
  },
};

const emergencyServices = [
  {
    name: "Emergency Locksmiths",
    slug: "locksmiths",
    icon: "🔐",
    description:
      "Locked out? Emergency locksmiths available 24/7 for lockouts, broken locks, and home security emergencies.",
    responseTime: "30-60 minutes",
    situations: [
      "Locked out of home or car",
      "Lost or stolen keys",
      "Broken or jammed locks",
      "Post-burglary lock changes",
    ],
  },
  {
    name: "Emergency Plumbers",
    slug: "plumbers",
    icon: "🔧",
    description:
      "24/7 emergency plumbers for burst pipes, major leaks, boiler breakdowns, and heating emergencies.",
    responseTime: "1-2 hours",
    situations: [
      "Burst pipes and flooding",
      "Major water leaks",
      "No heating or hot water (winter)",
      "Boiler breakdowns",
    ],
  },
  {
    name: "Emergency Electricians",
    slug: "electricians",
    icon: "⚡",
    description:
      "Emergency electricians available 24/7 for power failures, electrical faults, and safety hazards.",
    responseTime: "1-2 hours",
    situations: [
      "Complete power loss",
      "Burning smells or sparking",
      "Tripped circuit breakers",
      "Electrical safety hazards",
    ],
  },
  {
    name: "Emergency Glaziers",
    slug: "emergency-glaziers",
    icon: "🪟",
    description:
      "24/7 emergency glazing for broken windows, smashed glass, and emergency boarding up services.",
    responseTime: "1-2 hours",
    situations: [
      "Broken windows (burglary or accident)",
      "Smashed glass doors",
      "Emergency boarding up",
      "Storm damage to glazing",
    ],
  },
  {
    name: "Vehicle Recovery",
    slug: "vehicle-recovery",
    icon: "🚗",
    description:
      "24/7 vehicle recovery and breakdown services across the West Midlands. Fast response for accidents and breakdowns.",
    responseTime: "30-60 minutes",
    situations: [
      "Roadside breakdowns",
      "Accident recovery",
      "Vehicle transport",
      "Motorway breakdowns",
    ],
  },
  {
    name: "Gas Engineers (Emergency)",
    slug: "gas-engineers",
    icon: "🔥",
    description:
      "Gas Safe registered engineers available 24/7 for boiler breakdowns, no heating, and gas safety emergencies.",
    responseTime: "1-2 hours",
    situations: [
      "Boiler breakdowns",
      "No heating in winter",
      "Carbon monoxide concerns",
      "Gas safety checks",
    ],
  },
  {
    name: "Drainage Specialists",
    slug: "drainage",
    icon: "🚿",
    description:
      "Emergency drain clearance available 24/7 for blocked drains, sewage backups, and drainage emergencies.",
    responseTime: "1-2 hours",
    situations: [
      "Blocked drains and toilets",
      "Sewage backup",
      "Overflowing drains",
      "Collapsed drains",
    ],
  },
  {
    name: "Mobile Tyre Fitting",
    slug: "mobile-tyre-fitting",
    icon: "🛞",
    description:
      "Mobile tyre fitting and emergency puncture repairs. We come to you — home, work, or roadside.",
    responseTime: "1-3 hours",
    situations: [
      "Flat or punctured tyres",
      "Emergency tyre replacement",
      "Blowouts on motorways",
      "Same-day tyre fitting",
    ],
  },
];

export default function EmergencyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur-sm">
            🚨 EMERGENCY SERVICES
          </div>
          <h1 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
            24/7 Emergency Tradespeople
          </h1>
          <p className="mt-4 text-lg text-red-100">
            Fast response times across the West Midlands. Help when you need it
            most.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="border-b border-red-200 bg-red-50 py-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-lg border-2 border-red-600 bg-white p-6">
            <h2 className="font-serif text-xl font-bold text-navy-950">
              ⚠️ Important: Gas Leaks
            </h2>
            <p className="mt-2 text-slate-700">
              If you smell gas, <strong>do not use switches or phones</strong>.
              Open windows, evacuate, and call the National Grid Gas Emergency
              Service immediately on{" "}
              <a
                href="tel:0800111999"
                className="font-bold text-red-600 underline"
              >
                0800 111 999
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Services Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {emergencyServices.map((service) => (
              <div
                key={service.slug}
                className="rounded-xl border-2 border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-red-600 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-red-100 p-4 text-3xl">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-navy-950">
                      {service.name}
                    </h3>
                    <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
                      ⏱️ {service.responseTime}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-slate-700">{service.description}</p>

                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-navy-950">
                    Common situations:
                  </h4>
                  <ul className="mt-2 space-y-1">
                    {service.situations.map((situation, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span className="text-red-600">•</span>
                        {situation}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/${service.slug}`}
                  className="mt-6 block rounded-lg bg-red-600 px-6 py-3 text-center font-semibold text-white transition-all hover:bg-red-700"
                >
                  Find {service.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center font-serif text-3xl font-bold text-navy-950">
            Tips for Emergency Call-Outs
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="text-3xl">💰</div>
              <h3 className="mt-4 font-serif text-lg font-bold text-navy-950">
                Get a Quote First
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Emergency rates are higher (often 50-100% more than standard
                rates). Always ask for a quote before work begins.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="text-3xl">🆔</div>
              <h3 className="mt-4 font-serif text-lg font-bold text-navy-950">
                Verify Credentials
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Ask to see ID, insurance, and relevant certifications (Gas Safe
                for gas work, NICEIC for electricians, etc.).
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="text-3xl">📋</div>
              <h3 className="mt-4 font-serif text-lg font-bold text-navy-950">
                Get a Receipt
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Always get a written receipt with company details, work
                description, and guarantee information for insurance purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-serif text-3xl font-bold">
            Need help but not an emergency?
          </h2>
          <p className="mt-4 text-slate-300">
            Browse all our vetted tradespeople and save on emergency call-out
            fees by booking during normal hours.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-amber-600 px-8 py-3 font-semibold transition-all hover:scale-105 hover:bg-amber-700"
          >
            Browse All Trades
          </Link>
        </div>
      </section>
    </>
  );
}
