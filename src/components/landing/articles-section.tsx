import Image from "next/image";
import Link from "next/link";
import { getLatestArticles } from "@/lib/articles";

export function ArticlesSection() {
  const articles = getLatestArticles(3);

  return (
    <section className="bg-[var(--color-landing-surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-[var(--font-space-grotesk)] text-3xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl">診断の先にある、<br />伴走の記録。</h2>
        <p className="mt-3 text-base text-[var(--color-landing-text-muted)] sm:text-lg">Career Rebootは、診断だけではありません。</p>
        <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="overflow-hidden rounded-[var(--radius-lg)] bg-white shadow-[var(--shadow-sm)]">
              <Image src={article.thumbnail ?? "/ogp.png"} alt={article.title} width={1200} height={630} className="aspect-[16/9] w-full object-cover" />
              <div className="p-6">
                <span className="rounded-[var(--radius-full)] bg-[var(--color-landing-surface-strong)] px-3 py-1 text-xs font-semibold text-[var(--color-landing-accent)]">{article.category}</span>
                <h3 className="mt-4 text-lg font-semibold leading-7 text-[var(--color-primary)]">{article.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-landing-text-muted)]">{article.description}</p>
                <Link href={`/columns/${article.slug}`} className="mt-5 inline-flex text-sm font-semibold text-[var(--color-landing-accent)] transition hover:opacity-75">続きを読む <span className="ml-2" aria-hidden>→</span></Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center"><Link href="/columns" className="inline-flex text-base font-semibold text-[var(--color-landing-accent)] transition hover:opacity-75">すべての記事を見る <span className="ml-2" aria-hidden>→</span></Link></div>
      </div>
    </section>
  );
}
