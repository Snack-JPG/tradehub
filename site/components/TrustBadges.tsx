import { ShieldCheck, Check, MapPin, MessageCircle } from "lucide-react";

const badges = [
  { label: "Vetted Professionals", icon: ShieldCheck, description: "Every tradesperson is carefully verified" },
  { label: "Fully Insured", icon: Check, description: "All trades carry proper insurance coverage" },
  { label: "Local to You", icon: MapPin, description: "West Midlands based and trusted" },
  { label: "Free Quotes", icon: MessageCircle, description: "No obligation, no hidden fees" },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {badges.map((b) => {
        const Icon = b.icon;
        return (
          <div
            key={b.label}
            className="group flex flex-col items-center gap-3 rounded-xl border-2 border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-md"
          >
            <Icon className="h-12 w-12 text-amber-600" strokeWidth={2} />
            <div>
              <div className="font-serif text-base font-bold text-navy-950">{b.label}</div>
              <div className="mt-1 text-xs text-slate-600 line-clamp-2">{b.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
