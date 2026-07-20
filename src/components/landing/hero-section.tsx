import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-[var(--color-landing-surface)] pb-10 pt-12 sm:pb-14 sm:pt-16 lg:pb-16 lg:pt-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[var(--color-landing-text-muted)]">今のあなたから、始めていい。</p>
          <h1 className="mt-5 font-[var(--font-space-grotesk)] text-4xl font-semibold leading-[1.2] tracking-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
            休職中の現在地を、
            <br />
            <span className="text-[var(--color-landing-accent)]">5分で整理する。</span>
          </h1>
          <p className="mt-6 text-base leading-8 text-[var(--color-landing-text-muted)] sm:text-lg">
            急いで答えを出す必要はありません。
            <br />
            今の状態を知ることが、最初の一歩になります。
          </p>
          <p className="mt-3 text-base text-[var(--color-landing-text-muted)] sm:text-lg">We walk with you.</p>
          <Link
            href="/diagnosis"
            className="mt-9 inline-flex min-h-[var(--size-button-lg)] w-full items-center justify-center gap-4 rounded-[var(--radius-md)] bg-[var(--color-primary)] px-[var(--space-3)] text-base font-semibold text-white shadow-[var(--shadow-md)] transition hover:opacity-90 sm:w-auto sm:min-w-80 sm:text-lg"
          >
            無料診断を始める <span aria-hidden>→</span>
          </Link>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-[var(--color-landing-text-muted)] sm:justify-start">
            <li>◷ 5分</li>
            <li>♔ 無料</li>
            <li>♧ 登録不要</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
