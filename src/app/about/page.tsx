import type { Metadata } from "next";
import Link from "next/link";
import { ContentRenderer } from "@/components/content/content-renderer";
import { aboutPage } from "@/content/brand";

export const metadata: Metadata = {
  title: "Career Rebootについて",
  description:
    "Career Rebootの運営背景や発信方針、読者に届けたい価値について紹介します。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Career Reboot",
    title: "Career Rebootについて",
    description:
      "Career Rebootの運営背景や発信方針、読者に届けたい価値について紹介します。",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "Career Rebootについて",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Rebootについて",
    description:
      "Career Rebootの運営背景や発信方針、読者に届けたい価値について紹介します。",
    images: ["/ogp.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-8 lg:px-8">
      <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-sm shadow-slate-900/5 backdrop-blur-md">
        <Link href="/" className="font-[var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
          Career Reboot
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/brand" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
            Brand Book
          </Link>
          <Link href="/columns" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
            コラム
          </Link>
        </div>
      </header>

      <article className="mx-auto mt-8 max-w-[44rem] rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur sm:mt-10 sm:p-8">
        <h1 className="font-[var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {aboutPage.title}
        </h1>

        <ContentRenderer sections={aboutPage.sections} />
      </article>
    </main>
  );
}
