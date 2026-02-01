import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-600 bg-navy-950">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-xl font-bold text-white">
            Trade<span className="text-amber-600">Hub</span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
            Since 2024
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/plumbers" className="text-sm text-slate-300 transition hover:text-amber-500">
            Plumbers
          </Link>
          <Link href="/electricians" className="text-sm text-slate-300 transition hover:text-amber-500">
            Electricians
          </Link>
          <Link href="/roofers" className="text-sm text-slate-300 transition hover:text-amber-500">
            Roofers
          </Link>
          <Link href="/builders" className="text-sm text-slate-300 transition hover:text-amber-500">
            Builders
          </Link>
          <Link href="/blog" className="text-sm text-slate-300 transition hover:text-amber-500">
            Blog
          </Link>
          <Link
            href="/list-your-business"
            className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            List Your Business
          </Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
