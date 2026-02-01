import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";

export const metadata = genMeta({
  title: "List Your Business",
  description: "Get your trade business listed on TradeHub. Professional directory listing, SEO boost, and new customer enquiries from day one.",
  path: "/list-your-business",
});

const packages = [
  {
    name: "Free Listing",
    price: "£0",
    period: "",
    features: [
      "Profile page on TradeHub",
      "Appear in search results",
      "Category & location pages",
      "Customer reviews displayed",
      "Phone number & contact info",
    ],
    cta: "Get Listed Free",
    highlight: false,
    note: "",
  },
  {
    name: "Professional Website",
    price: "£99",
    period: "one-off",
    features: [
      "Everything in Free Listing",
      "Full website built for you",
      "Mobile-responsive design",
      "SEO & schema markup",
      "Contact form & click-to-call",
      "Live in 3–5 days",
      "Featured listing on TradeHub",
    ],
    cta: "Get Your Website",
    highlight: true,
    note: "+ £19/mo hosting & maintenance",
  },
  {
    name: "Premium Website",
    price: "£199",
    period: "one-off",
    features: [
      "Everything in Professional",
      "Google Business Profile setup",
      "3 blog articles written for you",
      "AI search optimisation",
      "Monthly content updates",
      "Priority support",
    ],
    cta: "Go Premium",
    highlight: false,
    note: "+ £29/mo hosting & maintenance",
  },
];

export default function ListYourBusinessPage() {
  return (
    <>
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Grow Your Trade Business{" "}
            <span className="text-trust">Online</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Get found by local homeowners searching for your services. Professional
            website, directory listing, and SEO — all done for you.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: "🔍", title: "Get Found on Google", desc: "Show up when locals search for your trade. SEO built in from day one." },
              { icon: "📞", title: "More Enquiries", desc: "Click-to-call, contact forms, and a professional online presence that converts." },
              { icon: "⚡", title: "Live in Days, Not Months", desc: "AI-powered build process means your site is live in 2–5 days." },
            ].map((b) => (
              <div key={b.title} className="text-center">
                <span className="text-4xl">{b.icon}</span>
                <h3 className="mt-3 font-bold text-navy">{b.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl font-bold text-navy">
            Simple, Honest Pricing
          </h2>
          <p className="mt-2 text-center text-gray-500">
            No hidden fees. No lock-in contracts. Cancel anytime.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-xl border p-6 ${
                  pkg.highlight
                    ? "border-trust bg-white shadow-lg ring-2 ring-trust/20"
                    : "border-gray-100 bg-white shadow-sm"
                }`}
              >
                {pkg.highlight && (
                  <span className="mb-3 inline-block rounded-full bg-trust/10 px-3 py-1 text-xs font-semibold text-trust">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-navy">{pkg.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-navy">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-gray-500"> {pkg.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-trust">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                {pkg.note && (
                  <p className="mt-4 text-center text-xs font-medium text-gray-500">
                    {pkg.note}
                  </p>
                )}
                <button
                  className={`mt-4 w-full rounded-lg py-2.5 text-sm font-semibold transition ${
                    pkg.highlight
                      ? "bg-trust text-white hover:bg-green-700"
                      : "border border-gray-200 text-navy hover:border-trust hover:text-trust"
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            No lock-in contracts on hosting. Cancel anytime. You own your website.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-2xl font-bold text-navy">Ready to Get Started?</h2>
          <p className="mt-3 text-gray-600">
            Call, text, or fill in the form below for a free, no-obligation chat about what TradeHub
            can do for your business.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="tel:07718132878"
              className="inline-block rounded-lg bg-trust px-8 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              📞 Call 07718 132878
            </a>
            <a
              href="https://wa.me/447718132878"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-trust bg-white px-8 py-3 text-sm font-semibold text-trust transition hover:bg-trust/5"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-navy">Or Send Us a Message</h2>
            <p className="mt-2 text-gray-600">
              Fill in the form and we'll get back to you within 24 hours.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
