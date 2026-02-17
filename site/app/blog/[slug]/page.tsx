import { Metadata } from "next";
import Link from "next/link";
import { Home, BookOpen, Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import BlogFAQ from "@/components/v2/BlogFAQ";
import blogPosts from "@/data/blog-posts.json";

type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  content: Array<{
    type: "paragraph" | "heading" | "list";
    text?: string;
    items?: string[];
  }>;
  relatedLinks: Array<{
    text: string;
    url: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
};

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found | TradeHub",
    };
  }

  return {
    title: `${post.title} | TradeHub Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.tradehub.directory/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://www.tradehub.directory/blog/${post.slug}`,
      images: [
        {
          url: `https://www.tradehub.directory/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent("TradeHub Blog")}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://www.tradehub.directory/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent("TradeHub Blog")}`],
    },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = blogPosts.find((p) => p.slug === params.slug) as BlogPost;

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="font-serif text-2xl font-bold text-navy-950">
          Post not found
        </h1>
        <Link href="/blog" className="mt-4 inline-block text-amber-600">
          ← Back to blog
        </Link>
      </div>
    );
  }

  // Article schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "TradeHub",
      logo: {
        "@type": "ImageObject",
        url: "https://www.tradehub.directory/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.tradehub.directory/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.tradehub.directory",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.tradehub.directory/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.tradehub.directory/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumbs */}
      <nav className="border-b bg-slate-50 py-4">
        <div className="mx-auto max-w-4xl px-4">
          <ol className="flex items-center gap-2 text-sm text-slate-600">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-amber-600 transition"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/blog"
                className="flex items-center gap-1 hover:text-amber-600 transition"
              >
                <BookOpen className="h-4 w-4" />
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-navy-950 truncate font-medium">{post.title}</li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <article className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12">
          {/* Meta Info */}
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-amber-700">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-sm text-slate-600">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-slate-600">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl font-bold leading-tight text-navy-950 sm:text-5xl">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-4 text-xl leading-relaxed text-slate-700">
            {post.excerpt}
          </p>

          <div className="mt-6 border-b border-slate-200 pb-6">
            <p className="text-sm text-slate-500">By {post.author}</p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg mt-8 max-w-none">
            {post.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="mb-4 mt-10 font-serif text-3xl font-bold text-navy-950"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list" && block.items) {
                return (
                  <ul key={index} className="my-6 space-y-2 pl-6">
                    {block.items.map((item, i) => (
                      <li key={i} className="leading-relaxed text-slate-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="mb-6 leading-relaxed text-slate-700">
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* FAQs */}
          {post.faqs && post.faqs.length > 0 && <BlogFAQ faqs={post.faqs} />}

          {/* Related Links */}
          {post.relatedLinks && post.relatedLinks.length > 0 && (
            <div className="mt-12 rounded-xl border-2 border-amber-200 bg-amber-50 p-8">
              <h3 className="font-serif text-2xl font-bold text-navy-950">
                Find Trusted Tradespeople
              </h3>
              <p className="mt-2 text-slate-700">
                Ready to hire? Browse our verified tradespeople in your area
              </p>
              <ul className="mt-6 space-y-3">
                {post.relatedLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className="flex items-center justify-between rounded-lg border-2 border-amber-300 bg-white p-4 font-semibold text-navy-950 transition hover:border-amber-600 hover:bg-amber-100"
                    >
                      <span>{link.text}</span>
                      <ArrowRight className="h-5 w-5 text-amber-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-8">
            <Link
              href="/blog"
              className="flex items-center gap-2 font-semibold text-amber-600 hover:text-amber-700 transition"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Blog
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-amber-600 hover:text-amber-700 transition"
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
