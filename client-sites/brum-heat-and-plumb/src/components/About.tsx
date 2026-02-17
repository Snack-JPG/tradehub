"use client";


import { User, Phone, CheckCircle, Shield, Award, Clock } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Phone,
      title: "Chris Answers",
      description: "No call centers, no waiting — talk directly to the engineer",
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Available 7 days a week including weekends and evenings",
    },
    {
      icon: Shield,
      title: "Gas Safe Registered",
      description: "Fully qualified and insured for your peace of mind",
    },
    {
      icon: Award,
      title: "Fair Pricing",
      description: "Honest quotes with no hidden charges or call-out fees",
    },
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div
          >
            <div className="flex items-center gap-3 mb-6">
              <User className="w-10 h-10 text-emergency-500" />
              <h2 className="text-4xl lg:text-5xl font-bold text-navy-800">
                Meet Chris
              </h2>
            </div>

            <p className="text-xl text-navy-700 leading-relaxed mb-6">
              When you call Brum Heat and Plumb, you're calling{" "}
              <span className="font-bold text-emergency-600">Chris directly</span> — not
              a call center, not an answering service. Just a reliable, experienced
              engineer who genuinely cares about getting your plumbing or heating
              problem sorted.
            </p>

            <p className="text-lg text-navy-600 leading-relaxed mb-8">
              Based in Solihull, Chris has built a reputation for being the plumber
              who actually answers the phone, especially during emergencies and
              weekends when other tradespeople don't. With Gas Safe registration and
              years of experience, he's helped hundreds of local homeowners with
              everything from burst pipes to boiler breakdowns.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Personal service — Chris does the work himself",
                "Transparent pricing — you'll know the cost upfront",
                "Available when you need him — 7 days a week",
                "Local to Solihull — fast response times",
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-emergency-500 flex-shrink-0 mt-1" />
                  <span className="text-navy-700 text-lg">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:07592507043"
              className="inline-flex items-center gap-3 bg-emergency-500 hover:bg-emergency-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-colors shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Call Chris: 07592 507043
            </a>
          </div>

          {/* Right content - Highlights grid */}
          <div
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-navy-50 to-white border-2 border-navy-200 rounded-xl p-6 hover:border-emergency-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-emergency-500 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
