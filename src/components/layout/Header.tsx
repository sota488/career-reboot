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
    <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-sm shadow-slate-900/5 backdrop-blur-md">
      <Link href="/" className="font-[var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
        Career Reboot
      </Link>
      <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-slate-600" aria-label="グローバルナビゲーション">
        {headerPrimaryNavigation.map((item) => (
          <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
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
            className="inline-flex items-center gap-1 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 focus-visible:ring-offset-2"
          >
            <span>{headerBrandNavigation.label}</span>
            <span aria-hidden className={`text-[10px] transition ${isBrandOpen ? "rotate-180" : ""}`}>
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
