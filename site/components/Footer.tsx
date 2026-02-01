import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-white">
              Trade<span className="text-amber-600">Hub</span>
            </h3>
            <p className="font-mono mt-1 text-[10px] uppercase tracking-wider text-slate-500">
              Since 2024
            </p>
            <p className="mt-3 text-sm">
              Find trusted, local tradespeople in the West Midlands.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Popular Trades</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/plumbers" className="transition hover:text-amber-500">Plumbers</Link></li>
              <li><Link href="/electricians" className="transition hover:text-amber-500">Electricians</Link></li>
              <li><Link href="/roofers" className="transition hover:text-amber-500">Roofers</Link></li>
              <li><Link href="/builders" className="transition hover:text-amber-500">Builders</Link></li>
              <li><Link href="/landscapers" className="transition hover:text-amber-500">Landscapers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Areas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/plumbers/solihull" className="transition hover:text-amber-500">Solihull</Link></li>
              <li><Link href="/plumbers/birmingham" className="transition hover:text-amber-500">Birmingham</Link></li>
              <li><Link href="/plumbers/redditch" className="transition hover:text-amber-500">Redditch</Link></li>
              <li><Link href="/plumbers/bromsgrove" className="transition hover:text-amber-500">Bromsgrove</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">For Tradespeople</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/list-your-business" className="transition hover:text-amber-500">List Your Business</Link></li>
              <li><Link href="/blog" className="transition hover:text-amber-500">Blog</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} TradeHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
