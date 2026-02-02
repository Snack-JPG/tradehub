"use client";

import SearchBar from "./SearchBar";
import { getAllCategories, getAllLocations } from "@/lib/trades";

export default function Hero() {
  const categories = getAllCategories();
  const locations = getAllLocations();

  const handleGetQuotes = () => {
    // Scroll to search bar smoothly
    const searchSection = document.querySelector('input[type="text"]') as HTMLInputElement | null;
    if (searchSection) {
      searchSection.focus();
      searchSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-24 md:py-32">
      {/* Premium Gradient Orbs */}
      <div className="pointer-events-none absolute -left-48 -top-48 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-teal-500/15 blur-[120px]" />

      {/* Enhanced Diagonal Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(245, 158, 11, 0.5) 35px,
            rgba(245, 158, 11, 0.5) 36px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 35px,
            rgba(20, 184, 166, 0.3) 35px,
            rgba(20, 184, 166, 0.3) 36px
          )`,
        }}
      />

      {/* Subtle Noise Texture */}
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-50" />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-4 text-center">
        {/* Trust Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-300 backdrop-blur-sm">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>100% Verified Tradespeople</span>
        </div>

        <h1 className="font-serif text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Find Trusted Tradespeople{" "}
          <span className="text-gradient-amber inline-block">Near You</span>
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-warmgray-300 md:text-xl">
          Vetted plumbers, electricians, roofers, builders and more across the
          West Midlands. <span className="font-semibold text-white">Free quotes, no obligation.</span>
        </p>

        <div className="mt-10">
          <SearchBar categories={categories} locations={locations} />
        </div>

        {/* Enhanced CTA Button */}
        <div className="mt-8">
          <button onClick={handleGetQuotes} className="btn-primary text-lg shadow-cta-hover">
            <span>Get Free Quotes</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Premium Stats Row with Icons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="group flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-mono text-lg font-bold text-amber-400">4.8</span>
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-warmgray-400">
              Average Rating
            </span>
          </div>

          <div className="h-12 w-px bg-warmgray-700" />

          <div className="group flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-teal-400">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-mono text-lg font-bold">2,000+</span>
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-warmgray-400">
              Verified Trades
            </span>
          </div>

          <div className="h-12 w-px bg-warmgray-700" />

          <div className="group flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-teal-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-mono text-lg font-bold text-teal-300">10,000+</span>
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-warmgray-400">
              Jobs Completed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
