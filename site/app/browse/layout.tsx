import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse All 5,085 Tradespeople | TradeHub",
  description:
    "Browse all 5,085 verified tradespeople across 22 categories in the West Midlands. Filter by trade, location, and rating. Find your perfect tradesperson today.",
  alternates: {
    canonical: "https://tradehub.directory/browse",
  },
  openGraph: {
    title: "Browse All 5,085 Tradespeople | TradeHub",
    description:
      "Browse all 5,085 verified tradespeople across 22 categories in the West Midlands. Filter by trade, location, and rating.",
    url: "https://tradehub.directory/browse",
    siteName: "TradeHub",
    type: "website",
    images: [
      {
        url: "https://tradehub.directory/api/og?title=Browse+All+Tradespeople&subtitle=5%2C085+verified+professionals&count=5085",
        width: 1200,
        height: 630,
        alt: "Browse All TradeHub Tradespeople",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Browse All 5,085 Tradespeople | TradeHub",
    description:
      "Browse all 5,085 verified tradespeople across 22 categories in the West Midlands.",
  },
};

export default function BrowseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
