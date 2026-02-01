import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <h3 className="font-serif text-xl font-bold text-white">
                Trade<span className="text-amber-600">Hub</span>
              </h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                Since 2024
              </p>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Find trusted, local tradespeople in the West Midlands. Vetted
              professionals, real reviews, free quotes.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="#"
                className="rounded-full p-2 text-slate-400 transition hover:bg-slate-800 hover:text-amber-500"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full p-2 text-slate-400 transition hover:bg-slate-800 hover:text-amber-500"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full p-2 text-slate-400 transition hover:bg-slate-800 hover:text-amber-500"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full p-2 text-slate-400 transition hover:bg-slate-800 hover:text-amber-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Popular Trades */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Popular Trades
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/plumbers" className="transition hover:text-amber-500">
                  Plumbers
                </Link>
              </li>
              <li>
                <Link href="/electricians" className="transition hover:text-amber-500">
                  Electricians
                </Link>
              </li>
              <li>
                <Link href="/roofers" className="transition hover:text-amber-500">
                  Roofers
                </Link>
              </li>
              <li>
                <Link href="/builders" className="transition hover:text-amber-500">
                  Builders
                </Link>
              </li>
              <li>
                <Link href="/landscapers" className="transition hover:text-amber-500">
                  Landscapers
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Areas
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/plumbers/solihull"
                  className="transition hover:text-amber-500"
                >
                  Solihull
                </Link>
              </li>
              <li>
                <Link
                  href="/plumbers/birmingham"
                  className="transition hover:text-amber-500"
                >
                  Birmingham
                </Link>
              </li>
              <li>
                <Link
                  href="/plumbers/redditch"
                  className="transition hover:text-amber-500"
                >
                  Redditch
                </Link>
              </li>
              <li>
                <Link
                  href="/plumbers/bromsgrove"
                  className="transition hover:text-amber-500"
                >
                  Bromsgrove
                </Link>
              </li>
              <li>
                <Link
                  href="/plumbers/worcester"
                  className="transition hover:text-amber-500"
                >
                  Worcester
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/list-your-business"
                  className="transition hover:text-amber-500"
                >
                  List Your Business
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition hover:text-amber-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-amber-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-amber-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {currentYear} TradeHub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-amber-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-500">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-amber-500">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
