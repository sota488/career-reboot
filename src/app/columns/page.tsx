import type { Metadata } from "next";
import Link from "next/link";
import { ColumnCard } from "@/components/columns/column-card";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "コラム",
  description: "Career Reboot の体験談やコラムをまとめた一覧ページです。",
};

export default function ColumnsPage() {
  const articles = getAllArticles();

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-8 lg:px-8">
      <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-sm shadow-slate-900/5 backdrop-blur-md">
        <Link href="/" className="font-[var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
          Career Reboot
        </Link>
        <Link href="/diagnosis" className="rounded-full bg-[#1f365c] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#2a4a79]">
          診断を始める
        </Link>
      </header>

      <section className="py-10 sm:py-14 lg:py-20">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
            コラム
          </span>
          <h1 className="font-[var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            休職中の気持ちに寄り添うコラム
          </h1>
          <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            焦らず、自分のペースで読める体験談や考え方をまとめています。今のあなたに必要なものだけ、静かに受け取ってもらえたら十分です。
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <ColumnCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}