import TestimonialCard from "./TestimonialCard";
import { getAllTrades } from "@/lib/trades";

export default function TestimonialsSection() {
  // Get all trades and extract their reviews
  const trades = getAllTrades();
  const allReviews: Array<{
    review: { author: string; rating: number; text: string; date: string };
    serviceName: string;
  }> = [];

  trades.forEach((trade) => {
    if (trade.reviews && trade.reviews.length > 0) {
      // Take the first review from each trade
      const review = trade.reviews[0];
      if (review && review.rating >= 4) {
        // Only show 4+ star reviews
        allReviews.push({
          review,
          serviceName: trade.trade_type.replace(/s$/, ""),
        });
      }
    }
  });

  // Take the first 6 reviews
  const featuredReviews = allReviews.slice(0, 6);

  if (featuredReviews.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-950 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-2 text-slate-600">
            Real reviews from real customers across the West Midlands
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredReviews.map((item, index) => (
            <TestimonialCard
              key={index}
              review={item.review}
              serviceName={item.serviceName}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="font-mono text-sm text-slate-600">
            ★ 4.8 average rating across 1,000+ reviews
          </p>
        </div>
      </div>
    </section>
  );
}
