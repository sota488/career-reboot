import Link from "next/link";
import type { ReactNode } from "react";
import type { Article } from "@/lib/articles";

type ArticleLayoutProps = {
  article: Article;
  children: ReactNode;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(value));
}

export function ArticleLayout({ article, children }: ArticleLayoutProps) {
  return (
    <article className="mx-auto min-h-screen max-w-4xl px-6 py-8 lg:px-8">
      <nav aria-label="パンくず" className="mb-8 text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="transition hover:text-slate-900">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/columns" className="transition hover:text-slate-900">
              コラム
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-slate-700">{article.title}</li>
        </ol>
      </nav>

      <header className="space-y-6 rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
            {article.category}
          </span>
          {article.featured ? (
            <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
              おすすめ
            </span>
          ) : null}
        </div>

        <div className="space-y-4">
          <h1 className="font-[var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {article.title}
          </h1>
          <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {article.description}
          </p>
        </div>

        <dl className="grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">公開日</dt>
            <dd className="mt-1 font-medium text-slate-800">{formatDate(article.publishedAt)}</dd>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">更新日</dt>
            <dd className="mt-1 font-medium text-slate-800">
              {article.updatedAt ? formatDate(article.updatedAt) : "-"}
            </dd>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">読了時間</dt>
            <dd className="mt-1 font-medium text-slate-800">約{article.readingTime}分</dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600">
              #{tag}
            </span>
          ))}
        </div>
      </header>

      <section className="mt-8 rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur sm:p-8">
        <div className="space-y-8 text-[17px] leading-8 text-slate-700 sm:text-[18px] sm:leading-8">
          {children}
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-sky-100 bg-sky-50/70 p-6 sm:p-8">
        <h2 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-slate-950">
          ひとりで整理しきれないときは
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          休職の初期は、考える力そのものが落ちていることがあります。そんなときは、無理に結論を出さず、今の状態を見つめるところからで十分です。Career Reboot の診断は、そのための小さな入口として使えます。
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/diagnosis"
            style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
            className="rounded-full bg-[#1f365c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2a4a79]"
          >
            診断を始める
          </Link>
          <Link
            href="/columns"
            className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            コラム一覧へ
          </Link>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-900/5 backdrop-blur sm:p-8">
        <h2 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-slate-950">
          関連記事
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-500">準備中です。</p>
      </section>
    </article>
  );
}