import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHM Heating Services Ltd | Gas Engineer & Heating Specialist Solihull",
  description: "24/7 Emergency Gas Engineer in Solihull. Boiler installation, repairs, servicing & Gas Safety Certificates. 5★ rated service from Craig. Call 07971 131515",
  keywords: [
    "gas engineer Solihull",
    "boiler repair Solihull",
    "emergency boiler breakdown Solihull",
    "heating engineer Solihull",
    "Gas Safe registered Solihull",
    "boiler installation Solihull",
    "central heating Solihull",
    "Gas Safety Certificate Solihull",
    "emergency heating repair",
    "24/7 gas engineer",
  ],
  openGraph: {
    title: "CHM Heating Services Ltd | Gas Engineer Solihull",
    description: "24/7 Emergency Gas Engineer in Solihull. 5★ rated service. Boiler installation, repairs & servicing.",
    type: "website",
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://chmheating.co.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
