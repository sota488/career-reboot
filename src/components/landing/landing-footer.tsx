import Link from "next/link";

const footerLinks = [
  { label: "ホーム", href: "/" }, { label: "コラム", href: "/columns" }, { label: "運営について", href: "/about" }, { label: "ブランドブック", href: "/brand" },
];

export function LandingFooter() {
  return (
    <footer className="bg-white px-5 py-12 sm:px-8"><div className="mx-auto max-w-6xl">
      <p className="font-[var(--font-space-grotesk)] text-xl font-semibold text-[var(--color-primary)]">Career Reboot</p>
      <p className="mt-2 text-base text-[var(--color-landing-text-muted)]">We walk with you.</p>
      <nav aria-label="フッターナビゲーション" className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-base text-[var(--color-landing-text-muted)]">
        {footerLinks.map((link) => <Link key={link.href} href={link.href} className="transition hover:text-[var(--color-primary)]">{link.label}</Link>)}
        <span>プライバシーポリシー</span>
      </nav>
      <p className="mt-10 border-t border-slate-200 pt-7 text-sm text-[var(--color-landing-text-muted)]">© 2026 Career Reboot. All rights reserved.</p>
    </div></footer>
  );
}
