"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LandingFooter } from "@/components/landing/landing-footer";
import { globalNavigation } from "@/constants/navigation";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <LandingFooter />;
  }

  return (
    <footer className="border-t border-slate-200/80 bg-white/75 px-6 py-6 text-slate-600 backdrop-blur sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 text-sm">
        <p className="font-[var(--font-space-grotesk)] font-semibold tracking-[0.08em] text-slate-700">Career Reboot β</p>
        <p>休職中のロードマップ診断</p>
        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
          {globalNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-700">
              {item.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-slate-500">© Career Reboot</p>
      </div>
    </footer>
  );
}
