"use client";

import { Phone, Clock, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy-800 via-navy-700 to-navy-600 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emergency-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Emergency badge */}
            <div className="inline-flex items-center gap-2 bg-emergency-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              24/7 Emergency Service Available
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Emergency Plumber & Heating Engineer
              <span className="block text-emergency-400 mt-2">Solihull</span>
            </h1>

            <p className="text-xl text-navy-100 mb-8 leading-relaxed">
              When your boiler breaks down or you have a burst pipe,{" "}
              <span className="font-semibold text-white">Chris answers the phone</span> and{" "}
              <span className="font-semibold text-white">comes straight away</span> — even on weekends.
            </p>

            {/* Trust points */}
            <div className="space-y-3 mb-10">
              {[
                "5★ rated on Google (25 reviews)",
                "Answers phone 7 days a week",
                "Fast emergency response",
                "Honest, fair pricing",
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-emergency-400 flex-shrink-0" />
                  <span className="text-navy-50">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="tel:07592507043"
              className="inline-flex items-center gap-3 bg-emergency-500 hover:bg-emergency-600 text-white px-8 py-5 rounded-xl text-lg font-bold shadow-2xl transition-colors duration-300 group"
            >
              <Phone className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm font-normal opacity-90">Call Chris Now</div>
                <div className="text-xl">07592 507043</div>
              </div>
            </a>
          </div>

          {/* Right content - Key features */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-emergency-400" />
                <h3 className="text-2xl font-bold">Available When You Need Us</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emergency-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Emergency Plumbing</h4>
                    <p className="text-navy-200 text-sm">
                      Burst pipes, leaks, blocked drains — fixed fast
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emergency-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔥</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Boiler & Heating</h4>
                    <p className="text-navy-200 text-sm">
                      No heating? Boiler breakdown? We'll get you warm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emergency-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Chris Answers</h4>
                    <p className="text-navy-200 text-sm">
                      No call centers. Talk directly to the engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
