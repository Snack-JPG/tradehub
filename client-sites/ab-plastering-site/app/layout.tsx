import type { Metadata } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'A.B Plastering & Rendering | Plasterer in Birmingham | 5★ (64 Reviews)',
  description: 'Expert plasterer in Kings Heath, Birmingham. Perfect 5-star Google rating across 64 reviews. Plastering, rendering, dry lining, and repairs. Call Adam on 07864 670314 for a free quote.',
  keywords: ['plasterer Birmingham', 'rendering Birmingham', 'plastering Kings Heath', 'dry lining Birmingham', 'artex removal'],
  authors: [{ name: 'A.B Plastering & Rendering' }],
  openGraph: {
    title: 'A.B Plastering & Rendering | Expert Plasterer in Birmingham',
    description: 'Perfect 5-star Google rating across 64 reviews. Expert plastering, rendering, and dry lining services in Birmingham.',
    type: 'website',
    locale: 'en_GB',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
              name: 'A.B Plastering & Rendering',
              image: '',
              '@id': '',
              url: '',
              telephone: '07864670314',
              priceRange: '££',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '11 Ardley Rd',
                addressLocality: 'Kings Heath',
                addressRegion: 'Birmingham',
                postalCode: 'B14 4AH',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 52.4342,
                longitude: -1.8924,
              },
              areaServed: [
                'Kings Heath',
                'Birmingham',
                'Hall Green',
                'Moseley',
                'Solihull',
                'Stirchley',
                'Bournville',
                'Selly Oak',
                'Harborne',
                'Edgbaston',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '64',
                bestRating: '5',
                worstRating: '5',
              },
              sameAs: ['https://www.google.com/maps'],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
