"use client";


import { MapPin, CheckCircle } from "lucide-react";

export default function AreasServed() {
  const areas = [
    "Solihull",
    "Birmingham",
    "Shirley",
    "Dorridge",
    "Knowle",
    "Dickens Heath",
    "Hall Green",
    "Acocks Green",
    "Yardley",
    "Kings Heath",
    "Moseley",
  ];

  return (
    <section className="py-20 bg-navy-800 text-white" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-10 h-10 text-emergency-400" />
            <h2 className="text-4xl lg:text-5xl font-bold">Areas We Serve</h2>
          </div>
          <p className="text-xl text-navy-200 max-w-2xl mx-auto">
            Fast emergency response across Solihull, Birmingham, and surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-navy-700 rounded-lg px-4 py-3 hover:bg-navy-600 transition-colors"
            >
              <CheckCircle className="w-5 h-5 text-emergency-400 flex-shrink-0" />
              <span className="font-semibold">{area}</span>
            </div>
          ))}
        </div>

        <div
          className="text-center bg-navy-700/50 backdrop-blur rounded-2xl p-8 border border-navy-600"
        >
          <h3 className="text-2xl font-bold mb-3">Not Listed?</h3>
          <p className="text-navy-200 mb-6 max-w-2xl mx-auto">
            We cover a wide area around Solihull and Birmingham. If your location isn't
            listed, give Chris a call — we might still be able to help, especially for
            emergencies.
          </p>
          <a
            href="tel:07592507043"
            className="inline-flex items-center gap-2 bg-emergency-500 hover:bg-emergency-600 text-white px-8 py-4 rounded-xl font-bold transition-colors"
          >
            <MapPin className="w-5 h-5" />
            Call to Check Your Area
          </a>
        </div>
      </div>
    </section>
  );
}
