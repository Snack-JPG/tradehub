"use client";

import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const tradeLinks = [
    { href: "/plumbers", label: "Plumbers" },
    { href: "/electricians", label: "Electricians" },
    { href: "/roofers", label: "Roofers" },
    { href: "/builders", label: "Builders" },
    { href: "/gas-engineers", label: "Gas Engineers" },
    { href: "/landscapers", label: "Landscapers" },
    { href: "/plasterers", label: "Plasterers" },
    { href: "/painters", label: "Painters" },
    { href: "/carpenters", label: "Carpenters" },
    { href: "/locksmiths", label: "Locksmiths" },
    { href: "/handymen", label: "Handymen" },
    { href: "/tilers", label: "Tilers" },
    { href: "/fencing", label: "Fencing" },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1.5 md:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-all ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-80 overflow-y-auto bg-navy-950 shadow-xl">
            <nav className="flex flex-col p-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-800 pb-4 text-sm text-slate-300 hover:text-amber-500"
              >
                Home
              </Link>

              <div className="mt-6">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Browse Trades
                </h3>
                <div className="space-y-3">
                  {tradeLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-sm text-slate-300 hover:text-amber-500"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-slate-800 pt-6">
                <Link
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-slate-300 hover:text-amber-500"
                >
                  Blog
                </Link>
              </div>

              <Link
                href="/list-your-business"
                onClick={() => setIsOpen(false)}
                className="mt-6 rounded-lg bg-amber-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-amber-700"
              >
                List Your Business
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
