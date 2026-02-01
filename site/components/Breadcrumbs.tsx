import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-warmgray-100 bg-warmgray-50">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-warmgray-600">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 transition hover:text-amber-600"
              aria-label="Home"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 text-warmgray-400" aria-hidden="true" />
                {isLast ? (
                  <span className="font-medium text-navy-950" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="transition hover:text-amber-600">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
