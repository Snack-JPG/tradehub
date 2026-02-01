import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-navy-950 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Are You a Tradesperson?
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Get listed on TradeHub and start receiving enquiries from local
          homeowners. Professional directory listing, SEO boost, and more.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/list-your-business"
            className="group flex items-center gap-2 rounded-lg bg-amber-600 px-8 py-4 font-semibold text-white shadow-cta transition-all hover:scale-105 hover:bg-amber-700 active:scale-95"
          >
            <span>List Your Business</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border-2 border-slate-700 px-8 py-4 font-semibold text-white transition-all hover:border-amber-600 hover:text-amber-500"
          >
            Learn More
          </Link>
        </div>

        {/* Trust Line */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            <span>No setup fees</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            <span>Join 2,000+ trades</span>
          </div>
        </div>
      </div>
    </section>
  );
}
