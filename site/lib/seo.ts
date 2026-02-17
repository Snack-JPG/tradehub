import { Trade } from "./trades";

const SITE_NAME = "TradeHub";
const SITE_URL = "https://www.tradehub.directory";

export function generateMetadata({
  title,
  description,
  path = "",
  includeCount,
  ogImageParams,
}: {
  title: string;
  description: string;
  path?: string;
  includeCount?: number;
  ogImageParams?: Record<string, string>;
}) {
  const url = `${SITE_URL}${path}`;
  const finalTitle = includeCount && includeCount > 0
    ? title.replace("Trusted", `Find ${includeCount}+ Trusted`)
    : title;

  // Build OG image URL with params
  let ogImageUrl = `${SITE_URL}/opengraph-image`;
  if (ogImageParams) {
    const params = new URLSearchParams(ogImageParams);
    ogImageUrl = `${SITE_URL}/api/og?${params.toString()}`;
  }

  return {
    title: `${finalTitle} | ${SITE_NAME}`,
    description,
    openGraph: {
      title: `${finalTitle} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${finalTitle} | ${SITE_NAME}`,
      description,
      images: [ogImageUrl],
    },
    alternates: { canonical: url },
  };
}

export function localBusinessSchema(trade: Trade) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: trade.name,
    description: trade.description,
    telephone: trade.phone,
    email: trade.email,
    url: trade.website_url || `${SITE_URL}/trades/${trade.slug}`,
    areaServed: trade.areas_served.map((a) => ({
      "@type": "City",
      name: a,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: trade.area,
      addressRegion: "West Midlands",
      addressCountry: "GB",
    },
    aggregateRating: trade.review_count > 0 ? {
      "@type": "AggregateRating",
      ratingValue: trade.rating,
      reviewCount: trade.review_count,
      bestRating: 5,
      worstRating: 1,
    } : undefined,
    review: trade.reviews.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
      datePublished: r.date,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function itemListSchema(name: string, trades: Trade[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: trades.length,
    itemListElement: trades.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      url: `${SITE_URL}/trades/${t.slug}`,
    })),
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: "Find trusted, local tradespeople in the West Midlands. Vetted plumbers, electricians, roofers, builders and more.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/browse?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
