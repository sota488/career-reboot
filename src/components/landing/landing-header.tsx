import Link from "next/link";

export function LandingHeader() {
  return (
    <header className="border-b border-slate-200/80 bg-[var(--color-landing-surface)]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-[var(--font-space-grotesk)] text-lg font-semibold tracking-tight text-[var(--color-primary)]">
          Career Reboot
        </Link>
        <Link
          href="/diagnosis"
          className="inline-flex min-h-[var(--size-button-sm)] items-center justify-center rounded-[var(--radius-full)] bg-[var(--color-primary)] px-4 text-xs font-semibold text-white shadow-[var(--shadow-sm)] transition hover:opacity-90 sm:px-5 sm:text-sm"
        >
          無料診断を始める
        </Link>
      </div>
    </header>
  );
}
