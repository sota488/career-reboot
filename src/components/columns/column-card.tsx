import Link from "next/link";
import type { Article } from "@/lib/articles";

type ColumnCardProps = {
  article: Article;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
}

export function ColumnCard({ article }: ColumnCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur">
      <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
        <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-700">{article.category}</span>
        <span>{formatDate(article.publishedAt)}</span>
        <span>{article.readingTime}分</span>
      </div>
      <h2 className="mt-4 font-[var(--font-space-grotesk)] text-xl font-semibold leading-snug text-slate-950">
        {article.title}
      </h2>
      <p className="mt-3 leading-7 text-slate-600">{article.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-500">
            #{tag}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <Link href={`/columns/${article.slug}`} className="inline-flex rounded-full bg-[#1f365c] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2a4a79]">
          続きを読む
        </Link>
      </div>
    </article>
  );
}