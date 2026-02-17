import Link from "next/link";
import { CheckCircle, Shield, Star, ArrowRight, Camera, Globe } from "lucide-react";
import ReviewStars from "./ReviewStars";
import { Trade, tradeHasPhotos } from "@/lib/trades";

export default function TradeCard({ trade }: { trade: Trade }) {
  const firstReview = trade.reviews && trade.reviews.length > 0 ? trade.reviews[0] : null;

  return (
    <Link
      href={`/trades/${trade.slug}`}
      className="group relative block overflow-hidden rounded-xl border border-warmgray-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-card-hover"
    >
      {/* Gradient accent on hover */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 to-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Featured Badge */}
      {trade.featured && (
        <span className="badge-featured mb-4 animate-float">
          <Star className="h-3.5 w-3.5 fill-current" />
          FEATURED
        </span>
      )}

      {/* Business Name - Larger and more prominent */}
      <h3 className="font-serif text-2xl font-bold leading-tight tracking-tight text-navy-950 transition-colors group-hover:text-amber-600">
        {trade.name}
      </h3>

      {/* Trade Type & Location */}
      <p className="mt-2 text-sm font-medium capitalize text-warmgray-600">
        {trade.trade_type.replace(/s$/, "")} · {trade.area}
      </p>

      {/* Reviews */}
      <div className="mt-3">
        <ReviewStars rating={trade.rating} count={trade.review_count} />
      </div>

      {/* Trust Badges - Enhanced styling */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge-verified">
          <CheckCircle className="h-3.5 w-3.5" />
          Verified
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700 shadow-sm">
          <Shield className="h-3.5 w-3.5" />
          Insured
        </span>
        {tradeHasPhotos(trade) && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-sm font-semibold text-purple-700 shadow-sm">
            <Camera className="h-3.5 w-3.5" />
            Photos
          </span>
        )}
        {!trade.website_url && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-500 shadow-sm" title="This business doesn't have a website yet">
            <Globe className="h-3.5 w-3.5" />
            No Website
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mt-4 text-base leading-relaxed text-warmgray-700 line-clamp-2">
        {trade.description}
      </p>

      {/* Testimonial Snippet - Enhanced with quotation styling */}
      {firstReview && (
        <div className="relative mt-4 rounded-lg border-l-3 border-amber-500 bg-amber-50/50 py-3 pl-4 pr-3">
          <svg className="absolute -top-1 left-2 h-5 w-5 text-amber-400/40" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-sm italic leading-relaxed text-warmgray-700 line-clamp-2">
            {firstReview.text}
          </p>
          <p className="mt-2 text-xs font-bold text-navy-900">
            — {firstReview.author}
          </p>
        </div>
      )}

      {/* Services Pills - Refined styling */}
      <div className="mt-5 flex flex-wrap gap-2">
        {trade.services.slice(0, 3).map((s) => (
          <span
            key={s}
            className="rounded-full bg-warmgray-100 px-3 py-1 text-xs font-medium text-warmgray-700 transition-colors group-hover:bg-amber-100 group-hover:text-amber-700"
          >
            {s}
          </span>
        ))}
        {trade.services.length > 3 && (
          <span className="rounded-full bg-warmgray-100 px-3 py-1 text-xs font-medium text-warmgray-700 transition-colors group-hover:bg-amber-100 group-hover:text-amber-700">
            +{trade.services.length - 3} more
          </span>
        )}
      </div>

      {/* CTA - More prominent */}
      <div className="mt-6 flex items-center gap-2 font-semibold text-amber-600 transition-all group-hover:gap-3">
        <span>View Full Profile</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
