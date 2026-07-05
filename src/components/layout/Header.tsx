import Link from "next/link";
import { globalNavigation } from "@/constants/navigation";

export function Header() {
  return (
    <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-sm shadow-slate-900/5 backdrop-blur-md">
      <Link href="/" className="font-[var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
        Career Reboot
      </Link>
      <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-slate-600" aria-label="グローバルナビゲーション">
        {globalNavigation.map((item) => (
          <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
