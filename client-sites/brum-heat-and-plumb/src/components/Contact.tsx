"use client";


import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-50 via-white to-emergency-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-navy-600 max-w-2xl mx-auto">
            Emergency or planned work — Chris is ready to help
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <div
            className="space-y-6"
          >
            {/* Phone */}
            <div className="bg-white rounded-xl p-6 border-2 border-navy-200 hover:border-emergency-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emergency-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-800 mb-2">Phone</h3>
                  <a
                    href="tel:07592507043"
                    className="text-2xl font-bold text-emergency-600 hover:text-emergency-700 transition-colors"
                  >
                    07592 507043
                  </a>
                  <p className="text-navy-600 text-sm mt-1">
                    Chris answers — no call centers
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-6 border-2 border-navy-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-800 mb-2">Location</h3>
                  <p className="text-navy-700">Solihull B91 2LL</p>
                  <p className="text-navy-600 text-sm mt-1">
                    Serving Solihull, Birmingham & surrounding areas
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-xl p-6 border-2 border-navy-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-800 mb-2">Availability</h3>
                  <p className="text-navy-700 font-semibold">7 Days a Week</p>
                  <p className="text-navy-600 text-sm mt-1">
                    Including weekends & evenings
                  </p>
                  <div className="inline-block bg-emergency-100 text-emergency-700 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                    Emergency callouts available
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-xl p-6 border-2 border-navy-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-800 mb-2">WhatsApp</h3>
                  <p className="text-navy-600 text-sm">
                    Prefer to message? Use the WhatsApp button
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div
            className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-2xl p-10 text-white shadow-2xl flex flex-col justify-center"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-emergency-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold mb-4">Ready to Help</h3>

              <p className="text-navy-200 text-lg mb-8 leading-relaxed">
                Whether it's an emergency or you're planning ahead, Chris is here to
                provide reliable, professional plumbing and heating services.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:07592507043"
                  className="block bg-emergency-500 hover:bg-emergency-600 text-white px-8 py-5 rounded-xl text-xl font-bold transition-colors shadow-lg"
                >
                  Call Now: 07592 507043
                </a>

                <div className="flex items-center justify-center gap-3 text-navy-300 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Available to take your call
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-navy-600">
                <p className="text-navy-300 text-sm">
                  <span className="font-semibold text-white">Fast response.</span>{" "}
                  <span className="font-semibold text-white">Fair prices.</span>{" "}
                  <span className="font-semibold text-white">Personal service.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
