import { Search, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Search & Compare",
    description: "Browse verified tradespeople in your area and compare reviews, ratings, and services.",
    icon: Search,
  },
  {
    number: "2",
    title: "Contact & Quote",
    description: "Reach out to your chosen trades and request free, no-obligation quotes.",
    icon: Users,
  },
  {
    number: "3",
    title: "Hire with Confidence",
    description: "Book your tradesperson knowing they're vetted, insured, and highly rated.",
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-950 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-2 text-slate-600">
            Finding trusted tradespeople has never been easier
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connector Line (hidden on mobile, shown on desktop between items) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-amber-200 md:block" />
                )}

                {/* Number Badge */}
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg">
                  <Icon className="h-10 w-10 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="mt-6 font-serif text-xl font-bold text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
