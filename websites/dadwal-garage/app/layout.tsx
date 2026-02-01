import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dadwal Garage | Coventry's Most Trusted Mechanic | 4.9★ from 715 Reviews",
  description: "Dadwal Garage in Coventry - 4.9★ from 715 Google reviews. Expert car repairs, MOT prep, diagnostics & servicing. Honest pricing, fast turnaround. Call 07943 025557",
  keywords: "mechanic Coventry, car garage Coventry, honest mechanic, car repairs CV6, MOT Coventry, brake repair, engine diagnostics, Waheed mechanic",
  authors: [{ name: "Dadwal Garage" }],
  openGraph: {
    title: "Dadwal Garage | Coventry's Most Trusted Mechanic",
    description: "4.9★ from 715 Google reviews. Expert car repairs & servicing in Coventry CV6.",
    url: "https://dadwelgarage.com",
    siteName: "Dadwal Garage",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dadwal Garage | Coventry's Most Trusted Mechanic",
    description: "4.9★ from 715 Google reviews. Expert car repairs & servicing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Dadwal Garage",
              "image": "https://dadwelgarage.com/og-image.jpg",
              "telephone": "07943025557",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Unit 15b, Relton Mews, Eden Street",
                "addressLocality": "Coventry",
                "postalCode": "CV6 5HE",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 52.426368,
                "longitude": -1.487493
              },
              "url": "https://dadwelgarage.com",
              "priceRange": "££",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Thursday"],
                  "opens": "09:00",
                  "closes": "21:30"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday"],
                  "opens": "09:00",
                  "closes": "21:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Friday",
                  "opens": "09:00",
                  "closes": "22:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "21:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "09:00",
                  "closes": "20:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "715",
                "bestRating": "5"
              },
              "areaServed": {
                "@type": "City",
                "name": "Coventry"
              }
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
