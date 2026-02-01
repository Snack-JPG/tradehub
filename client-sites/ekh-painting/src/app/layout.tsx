import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: '--font-crimson',
  display: 'swap',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: "EKH Painting & Decorating | Painters in Sutton Coldfield | 5★ Reviews",
  description: "Professional painters and decorators in Sutton Coldfield, Birmingham. 5-star rated on Google with 50+ reviews. Interior & exterior painting, wallpapering, full redecorations. Call Glen on 07380 906902 for a free quote.",
  keywords: "painter, decorator, painting, decorating, Sutton Coldfield, Birmingham, interior painting, exterior painting, wallpapering",
  openGraph: {
    title: "EKH Painting & Decorating | Professional Painters in Sutton Coldfield",
    description: "5-star rated painters and decorators in Birmingham. Interior & exterior painting, wallpapering, full redecorations.",
    type: "website",
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "", // Add Google Search Console verification when available
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "HousePainter"],
              "name": "EKH Painting & Decorating",
              "description": "Professional painting and decorating service in Sutton Coldfield, Birmingham",
              "telephone": "+447380906902",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "63 Elizabeth Rd",
                "addressLocality": "Sutton Coldfield",
                "addressRegion": "Birmingham",
                "postalCode": "B73 5AP",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "52.5630",
                "longitude": "-1.8240"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "50",
                "bestRating": "5",
                "worstRating": "1"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Sutton Coldfield"
                },
                {
                  "@type": "City",
                  "name": "Birmingham"
                },
                {
                  "@type": "City",
                  "name": "Erdington"
                },
                {
                  "@type": "City",
                  "name": "Lichfield"
                },
                {
                  "@type": "City",
                  "name": "Tamworth"
                },
                {
                  "@type": "City",
                  "name": "Solihull"
                }
              ],
              "priceRange": "££",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <body className="antialiased bg-cream-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
