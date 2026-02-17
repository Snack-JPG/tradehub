"use client";

import { Star, Shield, Clock, ThumbsUp } from "lucide-react";

export default function TrustBar() {
  const stats = [
    {
      icon: Star,
      value: "5.0★",
      label: "Google Rating",
      subtext: "25 reviews",
    },
    {
      icon: Shield,
      value: "Gas Safe",
      label: "Registered",
      subtext: "Fully qualified",
    },
    {
      icon: Clock,
      value: "Same Day",
      label: "Service",
      subtext: "Fast response",
    },
    {
      icon: ThumbsUp,
      value: "100%",
      label: "Satisfied",
      subtext: "Happy customers",
    },
  ];

  return (
    <section className="bg-navy-50 border-y border-navy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="w-14 h-14 bg-emergency-500 rounded-full flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-3xl font-bold text-navy-800 mb-1">{stat.value}</div>
              <div className="text-navy-700 font-semibold">{stat.label}</div>
              <div className="text-sm text-navy-500 mt-1">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
