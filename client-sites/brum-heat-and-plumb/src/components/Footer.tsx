"use client";

import { Phone, MapPin, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Brum Heat and Plumb</h3>
            <p className="text-navy-300 mb-4">
              Emergency plumber and heating engineer serving Solihull and Birmingham
            </p>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-navy-300 ml-2">5.0 on Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-navy-300 hover:text-emergency-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-navy-300 hover:text-emergency-400 transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-navy-300 hover:text-emergency-400 transition-colors"
                >
                  About Chris
                </a>
              </li>
              <li>
                <a
                  href="#areas"
                  className="text-navy-300 hover:text-emergency-400 transition-colors"
                >
                  Areas Served
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-navy-300 hover:text-emergency-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="tel:07592507043"
                className="flex items-center gap-3 text-navy-300 hover:text-emergency-400 transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="font-semibold">07592 507043</span>
              </a>
              <div className="flex items-start gap-3 text-navy-300">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Solihull B91 2LL</span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://maps.google.com/?cid=16286825322165907960"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emergency-500 hover:bg-emergency-600 text-white px-6 py-3 rounded-lg font-bold transition-colors text-sm"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-navy-800 text-center text-navy-400 text-sm">
          <p>
            © {new Date().getFullYear()} Brum Heat and Plumb. All rights reserved.
          </p>
          <p className="mt-2">
            Gas Safe Registered | Fully Insured | Emergency Service Available
          </p>
          <p className="mt-2">
            Listed on{" "}
            <a
              href="https://tradehub.directory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emergency-400 hover:text-emergency-300 underline transition-colors"
            >
              TradeHub Directory
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
