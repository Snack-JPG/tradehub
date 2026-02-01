import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-serif text-4xl font-bold text-navy-950">Page Not Found</h1>
      <p className="mt-4 text-slate-600">Sorry, we couldn't find what you're looking for.</p>
      <Link href="/" className="mt-6 rounded-lg bg-amber-600 px-6 py-3 font-semibold text-white hover:bg-amber-700">
        Back to Home
      </Link>
    </div>
  );
}
