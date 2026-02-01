import { Star, CheckCircle } from "lucide-react";
import { timeAgo } from "@/lib/utils";

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

interface TestimonialCardProps {
  review: Review;
  serviceName?: string;
}

export default function TestimonialCard({ review, serviceName }: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Rating Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < review.rating
                ? "fill-amber-500 text-amber-500"
                : "fill-slate-200 text-slate-200"
            }`}
          />
        ))}
        <span className="ml-2 font-mono text-sm font-bold text-navy-950">
          {review.rating}.0
        </span>
      </div>

      {/* Review Text */}
      <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed text-slate-700">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      {/* Author & Meta */}
      <div className="mt-4 border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2">
          <p className="font-serif font-semibold text-navy-950">{review.author}</p>
          <CheckCircle className="h-4 w-4 text-verified" />
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
          <span>Verified Customer</span>
          <span>•</span>
          <span>{timeAgo(review.date)}</span>
        </div>
        {serviceName && (
          <div className="mt-2">
            <span className="inline-block rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
              Service: {serviceName}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
