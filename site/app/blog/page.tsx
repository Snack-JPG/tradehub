import Link from "next/link";
import { Home, BookOpen } from "lucide-react";
import BlogCard from "@/components/v2/BlogCard";
import blogPosts from "@/data/blog-posts-updated.json";

export const metadata = {
  title: "TradeHub Blog | Tips, Guides & Advice for Homeowners",
  description:
    "Expert tips and guides for finding reliable tradespeople, home improvement advice, and everything you need to know about hiring trades in the West Midlands.",
  alternates: {
    canonical: "https://www.tradehub.directory/blog",
  },
  openGraph: {
    title: "TradeHub Blog | Tips, Guides & Advice for Homeowners",
    description:
      "Expert tips and guides for finding reliable tradespeople, home improvement advice, and hiring trades in the West Midlands.",
    url: "https://www.tradehub.directory/blog",
    siteName: "TradeHub",
    type: "website",
    images: [
      {
        url: "https://www.tradehub.directory/api/og?title=TradeHub+Blog&subtitle=Tips%2C+Guides+%26+Advice+for+Homeowners",
        width: 1200,
        height: 630,
        alt: "TradeHub Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "TradeHub Blog | Tips, Guides & Advice",
    description:
      "Expert tips and guides for finding reliable tradespeople in the West Midlands.",
  },
};

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <Link href="/" className="flex items-center gap-1 hover:text-amber-500 transition">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="flex items-center gap-1 text-amber-500">
              <BookOpen className="h-4 w-4" />
              <span>Blog</span>
            </span>
          </div>

          <h1 className="font-serif text-5xl font-bold text-white sm:text-6xl">
            Trade<span className="text-amber-500">Hub</span> Blog
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Expert tips, guides, and advice for homeowners and tradespeople across
            the West Midlands.
          </p>

          {/* Category Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-slate-600 px-3 py-1 text-sm text-slate-300"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-950">
            Need a Tradesperson?
          </h2>
          <p className="mt-2 text-slate-600">
            Browse our directory of vetted professionals across the West Midlands
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-lg bg-amber-600 px-8 py-3 font-semibold text-white shadow-cta transition-all hover:scale-105 hover:bg-amber-700"
          >
            Find a Tradesperson
          </Link>
        </div>
      </section>
    </>
  );
}
