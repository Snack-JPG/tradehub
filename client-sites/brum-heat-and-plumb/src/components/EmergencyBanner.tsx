"use client";

import { Phone, AlertCircle } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <section className="bg-gradient-to-r from-emergency-600 to-emergency-500 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-8 h-8 flex-shrink-0" />
            <div>
              <div className="font-bold text-lg">Emergency? Don't Wait</div>
              <div className="text-sm text-emergency-100">
                Boiler breakdown, burst pipes, no heating — call now
              </div>
            </div>
          </div>

          <a
            href="tel:07592507043"
            className="flex items-center gap-3 bg-white text-emergency-600 px-6 py-3 rounded-lg font-bold hover:bg-emergency-50 transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            07592 507043
          </a>
        </div>
      </div>
    </section>
  );
}
