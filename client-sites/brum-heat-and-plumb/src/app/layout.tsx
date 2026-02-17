import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brum Heat and Plumb | Emergency Plumber & Heating Engineer Solihull",
  description: "Emergency plumber and heating engineer in Solihull. 5★ rated service. Chris answers 7 days a week including weekends. Boiler repairs, burst pipes, emergency callouts. Call 07592 507043",
  keywords: "emergency plumber Solihull, plumber near me, boiler repair Solihull, heating engineer Solihull, burst pipe repair, weekend plumber, emergency heating repair, Gas Safe plumber",
  authors: [{ name: "Brum Heat and Plumb" }],
  openGraph: {
    title: "Brum Heat and Plumb | Emergency Plumber Solihull",
    description: "5★ rated emergency plumber. Chris answers 7 days a week. Fast response. Weekend service.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
