import { ShieldCheck, Check, MapPin, MessageCircle } from "lucide-react";

const indicators = [
  {
    label: "Vetted Professionals",
    icon: ShieldCheck,
    description: "Every tradesperson is carefully verified and background checked",
  },
  {
    label: "Fully Insured",
    icon: Check,
    description: "All trades carry proper insurance coverage for your peace of mind",
  },
  {
    label: "Local to You",
    icon: MapPin,
    description: "West Midlands based tradespeople you can trust",
  },
  {
    label: "Free Quotes",
    icon: MessageCircle,
    description: "Get multiple quotes with no obligation or hidden fees",
  },
];

export default function TrustIndicators() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {indicators.map((indicator) => {
            const Icon = indicator.icon;
            return (
              <div
                key={indicator.label}
                className="group flex flex-col items-center gap-3 rounded-xl border-2 border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-md"
              >
                <div className="rounded-full bg-amber-100 p-3">
                  <Icon className="h-8 w-8 text-amber-600" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-serif text-base font-bold text-navy-950">
                    {indicator.label}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-slate-600">
                    {indicator.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
