"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { headerBrandNavigation, headerPrimaryNavigation } from "@/constants/navigation";

export function Header() {
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const brandMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!brandMenuRef.current?.contains(event.target as Node)) {
        setIsBrandOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const brandMenuId = "brand-navigation-menu";

  return (
    <header className="flex items-center justify-between gap-2 rounded-full border border-white/70 bg-white/70 px-3 py-2 shadow-sm shadow-slate-900/5 backdrop-blur-md sm:gap-0 sm:px-4 sm:py-3">
      <Link href="/" className="whitespace-nowrap font-[var(--font-space-grotesk)] text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700 sm:text-sm sm:tracking-[0.3em]">
        Career Reboot
      </Link>
      <nav className="flex shrink-0 items-center justify-end gap-x-2 whitespace-nowrap text-xs text-slate-600 sm:gap-x-4 sm:text-sm" aria-label="グローバルナビゲーション">
        {headerPrimaryNavigation.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-slate-900">
            {item.label}
          </Link>
        ))}

        <div
          ref={brandMenuRef}
          className="relative"
          onMouseEnter={() => setIsBrandOpen(true)}
          onMouseLeave={() => setIsBrandOpen(false)}
        >
          <button
            type="button"
            aria-expanded={isBrandOpen}
            aria-controls={brandMenuId}
            aria-haspopup="menu"
            onClick={() => setIsBrandOpen((open) => !open)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setIsBrandOpen(false);
              }
            }}
            className="inline-flex items-center gap-0.5 whitespace-nowrap transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 focus-visible:ring-offset-2 sm:gap-1"
          >
            <span>{headerBrandNavigation.label}</span>
            <span aria-hidden className={`text-[9px] transition sm:text-[10px] ${isBrandOpen ? "rotate-180" : ""}`}>
              ▾
            </span>
          </button>

          <div
            id={brandMenuId}
            role="menu"
            aria-label="Brand"
            className={`${isBrandOpen ? "block" : "hidden"} absolute right-0 z-20 mt-2 w-40 rounded-xl border border-slate-200 bg-white p-1 text-sm shadow-lg shadow-slate-900/10`}
          >
            {headerBrandNavigation.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className="block rounded-lg px-3 py-2 text-slate-700 transition hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
                onClick={() => setIsBrandOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
