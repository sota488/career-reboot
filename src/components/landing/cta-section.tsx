import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-[var(--color-landing-surface)] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="rounded-[calc(var(--radius-lg)+8px)] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-landing-accent)] px-6 py-12 text-center shadow-[var(--shadow-md)] sm:px-12 sm:py-16">
          <p className="text-sm font-medium text-sky-200">準備しなくていい。今のままで大丈夫。</p>
          <h2 className="mt-6 font-[var(--font-space-grotesk)] text-3xl font-semibold leading-tight text-white sm:text-4xl">
            ここから、現在地を
            <br />
            一緒に整理してみましょう。
          </h2>
          <Link href="/diagnosis" className="mt-8 inline-flex min-h-[var(--size-button-lg)] w-full max-w-sm items-center justify-center gap-4 rounded-[var(--radius-md)] bg-white px-[var(--space-3)] text-base font-semibold text-[var(--color-primary)] transition hover:bg-slate-50 sm:text-lg">
            無料診断を始める <span aria-hidden>→</span>
          </Link>
          <p className="mt-4 text-sm text-sky-200">5分・無料・登録不要</p>
        </div>
      </div>
    </section>
  );
}
