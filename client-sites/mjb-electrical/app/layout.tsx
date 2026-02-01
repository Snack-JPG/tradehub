import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MJB Electrical Services | Electrician in Halesowen | 24/7 Emergency',
  description: 'Trusted local electrician in Halesowen & West Midlands. 9.93/10 on Checkatrade with 105+ reviews. Rewiring, fuseboards, EV chargers, emergency callouts. Call 07941 746878',
  keywords: 'electrician Halesowen, emergency electrician West Midlands, rewiring, fuseboard installation, EV charger installation, EICR testing, electrical services Birmingham',
  // DEMO SITE: Prevent indexing until client approves
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    title: 'MJB Electrical Services | Trusted Electrician in Halesowen',
    description: 'Professional electrical services with 9.93/10 rating. 24/7 emergency callouts available.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Electrician"],
              "name": "MJB Electrical Services Ltd",
              "image": "/logo.webp",
              "telephone": "07941746878",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Halesowen",
                "addressRegion": "West Midlands",
                "addressCountry": "GB"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "9.93",
                "bestRating": "10",
                "reviewCount": "105"
              },
              "priceRange": "££",
              "openingHours": "Mo-Su 00:00-23:59",
              "areaServed": [
                "Halesowen", "Birmingham", "Dudley", "Stourbridge",
                "Oldbury", "West Midlands"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
