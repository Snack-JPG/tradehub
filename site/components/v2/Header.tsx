"use client";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import { getAllCategories } from "@/lib/trades";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const categories = getAllCategories();

  // Top 4 categories shown directly in nav
  const topCategories = categories.slice(0, 4);
  // Remaining categories in dropdown
  const remainingCategories = categories.slice(4);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-600 bg-navy-950 shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-bold text-white">
            Trade<span className="text-amber-600">Hub</span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
            Since 2024
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/plumbers"
            className="text-sm font-medium text-slate-300 transition hover:text-amber-500"
          >
            Plumbers
          </Link>
          <Link
            href="/electricians"
            className="text-sm font-medium text-slate-300 transition hover:text-amber-500"
          >
            Electricians
          </Link>
          <Link
            href="/roofers"
            className="text-sm font-medium text-slate-300 transition hover:text-amber-500"
          >
            Roofers
          </Link>
          <Link
            href="/builders"
            className="text-sm font-medium text-slate-300 transition hover:text-amber-500"
          >
            Builders
          </Link>

          {/* More Trades Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="text-sm font-medium text-slate-300 transition hover:text-amber-500">
              More Trades ▾
            </button>
            {showDropdown && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-lg border border-slate-700 bg-navy-900 shadow-xl">
                <div className="max-h-96 overflow-y-auto p-2">
                  {remainingCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/${cat.slug}`}
                      className="block rounded px-4 py-2 text-sm text-slate-300 transition hover:bg-navy-800 hover:text-amber-500"
                    >
                      {cat.icon} {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/emergency"
            className="text-sm font-medium text-red-400 transition hover:text-red-300"
          >
            🚨 Emergency
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-slate-300 transition hover:text-amber-500"
          >
            Blog
          </Link>
          <Link
            href="/list-your-business"
            className="btn-primary px-5 py-2 text-sm"
          >
            List Your Business
          </Link>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
