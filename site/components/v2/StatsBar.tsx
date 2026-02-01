"use client";

import { Star } from "lucide-react";

const stats = [
  { number: "2,000+", label: "Verified Trades" },
  { number: "4.8", label: "Average Rating", icon: Star },
  { number: "10,000+", label: "Jobs Completed" },
  { number: "Since 2024", label: "Trusted Locally" },
];

export default function StatsBar() {
  return (
    <section className="bg-navy-900 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-4xl font-bold text-amber-500 flex items-center justify-center gap-2">
                {stat.icon && <stat.icon className="h-8 w-8" />}
                {stat.number}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wide text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
