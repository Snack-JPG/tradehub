"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#reviews", label: "Reviews" },
    { href: "#about", label: "About" },
    { href: "#areas", label: "Areas" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg border-b border-navy-200"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-emergency-500 to-emergency-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-2xl">🔧</span>
              </div>
              <div>
                <div className="font-bold text-base sm:text-lg text-navy-800 leading-tight">
                  Brum Heat and Plumb
                </div>
                <div className="text-xs text-navy-600 hidden sm:block">Emergency Service 24/7</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-navy-700 hover:text-emergency-600 font-semibold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Call Button */}
            <div className="flex items-center gap-4">
              <a
                href="tel:07592507043"
                className="hidden sm:flex items-center gap-2 bg-emergency-500 hover:bg-emergency-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden lg:inline">07592 507043</span>
                <span className="lg:hidden">Call Now</span>
              </a>

              {/* Mobile call button */}
              <a
                href="tel:07592507043"
                className="sm:hidden flex items-center justify-center w-12 h-12 bg-emergency-500 hover:bg-emergency-600 text-white rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center justify-center w-12 h-12 text-navy-800 hover:bg-navy-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-navy-200 shadow-lg md:hidden">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-navy-700 hover:text-emergency-600 font-semibold text-lg py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20" />
    </>
  );
}
