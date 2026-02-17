import type { Metadata } from "next";
import { Merriweather, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/v2/Header";
import Footer from "@/components/v2/Footer";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tradehub.directory"),
  title: "TradeHub | Find Trusted Local Tradespeople",
  description:
    "Find 5,085+ trusted, vetted tradespeople across 22 categories in the West Midlands. Plumbers, electricians, roofers, builders and more — all local, all reviewed.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  alternates: {
    canonical: "https://www.tradehub.directory",
  },
  openGraph: {
    title: "TradeHub | Find Trusted Local Tradespeople",
    description:
      "Find 5,085+ trusted, vetted tradespeople across 22 categories in the West Midlands. All local, all reviewed.",
    url: "https://www.tradehub.directory",
    siteName: "TradeHub",
    type: "website",
    images: [
      {
        url: "https://www.tradehub.directory/opengraph-image",
        width: 1200,
        height: 630,
        alt: "TradeHub - Find Trusted Tradespeople in the West Midlands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeHub | Find Trusted Local Tradespeople",
    description:
      "Find 5,085+ trusted, vetted tradespeople across 22 categories in the West Midlands.",
    images: ["https://www.tradehub.directory/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-white font-sans text-gray-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
