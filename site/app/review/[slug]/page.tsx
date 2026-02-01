"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import StarRating from "@/components/StarRating";

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const [trade, setTrade] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch trade data from a simple client-side lookup
    fetch(`/api/trade/${params.slug}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        setTrade(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [params.slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (rating === 0) {
      setError("Please select a star rating.");
      return;
    }
    if (text.trim().length < 20) {
      setError("Please write at least 20 characters about your experience.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: params.slug,
          author: author.trim() || "Anonymous",
          rating,
          text: text.trim(),
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  if (!trade) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4">
        <h1 className="text-2xl font-bold text-navy">Tradesperson Not Found</h1>
        <p className="mt-2 text-gray-500">
          Sorry, we couldn&apos;t find that listing.
        </p>
        <Link href="/" className="mt-4 text-trust hover:underline">
          ← Back to TradeHub
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
          <div className="text-5xl">🎉</div>
          <h1 className="mt-4 text-2xl font-bold text-navy">
            Thanks{author ? `, ${author}` : ""}!
          </h1>
          <p className="mt-2 text-gray-600">
            Your review of{" "}
            <span className="font-semibold">{trade.name}</span> has been
            published.
          </p>

          {trade.google_maps_url && (
            <div className="mt-6 rounded-lg bg-slate-50 p-4">
              <p className="text-sm text-gray-600">
                Help {trade.name} even more — leave a Google review too!
              </p>
              <a
                href={trade.google_maps_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-navy shadow-sm transition hover:shadow-md"
              >
                ⭐ Leave a Google Review
              </a>
            </div>
          )}

          <Link
            href={`/trades/${params.slug}`}
            className="mt-6 inline-block text-sm text-trust hover:underline"
          >
            View {trade.name}&apos;s listing →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-xl font-bold text-navy">
              How was your experience with
            </h1>
            <p className="mt-1 text-2xl font-bold text-trust">{trade.name}</p>
            {trade.rating > 0 && (
              <p className="mt-1 text-sm text-gray-400">
                {trade.rating}★ · {trade.review_count} reviews
              </p>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {/* Star Rating */}
            <div className="flex flex-col items-center gap-2">
              <label className="text-sm font-medium text-gray-700">
                Your rating
              </label>
              <StarRating rating={rating} onRate={setRating} />
            </div>

            {/* Name */}
            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium text-gray-700"
              >
                Your name{" "}
                <span className="text-gray-400">(first name is fine)</span>
              </label>
              <input
                id="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                maxLength={50}
                placeholder="e.g. Sarah"
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-trust focus:outline-none focus:ring-1 focus:ring-trust"
              />
            </div>

            {/* Review Text */}
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                Your review
              </label>
              <textarea
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={500}
                rows={4}
                placeholder="Tell others about your experience..."
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-trust focus:outline-none focus:ring-1 focus:ring-trust"
              />
              <p className="mt-1 text-xs text-gray-400">
                {text.length}/500 characters
                {text.length > 0 && text.length < 20 && (
                  <span className="text-red-400">
                    {" "}
                    · {20 - text.length} more needed
                  </span>
                )}
              </p>
            </div>

            {/* Error */}
            {error && (
              <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-trust px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700 disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Submit Review"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-gray-400">
            Powered by{" "}
            <Link href="/" className="text-trust hover:underline">
              TradeHub
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
