import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl border-2 border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-md"
    >
      <article>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-700">
            {post.category}
          </span>
        </div>

        <h2 className="mt-4 font-serif text-2xl font-bold text-navy-950 group-hover:text-amber-600 transition-colors">
          {post.title}
        </h2>

        <p className="mt-3 leading-relaxed text-slate-600">{post.excerpt}</p>

        <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 font-semibold text-amber-600 group-hover:gap-3 transition-all">
          <span>Read Article</span>
          <ArrowRight className="h-5 w-5" />
        </div>
      </article>
    </Link>
  );
}
