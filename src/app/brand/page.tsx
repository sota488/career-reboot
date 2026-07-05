import type { Metadata } from "next";
import Link from "next/link";
import { ContentRenderer } from "@/components/content/content-renderer";
import { brandBook } from "@/content/brand";

export const metadata: Metadata = {
  title: "Career Reboot Brand Book",
  description:
    "Acceptance is the mindset. We believe every person has inherent value. Discover the philosophy, mission, and principles behind Career Reboot.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Career Reboot",
    title: "Career Reboot Brand Book",
    description:
      "Acceptance is the mindset. We believe every person has inherent value. Discover the philosophy, mission, and principles behind Career Reboot.",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "Career Reboot Brand Book",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Reboot Brand Book",
    description:
      "Acceptance is the mindset. We believe every person has inherent value. Discover the philosophy, mission, and principles behind Career Reboot.",
    images: ["/ogp.png"],
  },
};

export default function BrandBookPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-8 lg:px-8">
      <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-sm shadow-slate-900/5 backdrop-blur-md">
        <Link href="/" className="font-[var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
          Career Reboot
        </Link>
        <Link href="/columns" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
          コラム
        </Link>
      </header>

      <article className="mx-auto mt-8 max-w-[44rem] rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur sm:mt-10 sm:p-8">
        <h1 className="font-[var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {brandBook.title}
        </h1>

        <aside className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-slate-700">
          <p>{brandBook.aside.icon}</p>
          {brandBook.aside.lines.map((line, index) => (
            line.strong ? (
              <p key={line.text} className={index === 0 ? "mt-2" : undefined}>
                <strong>{line.text}</strong>
              </p>
            ) : (
              <p key={line.text}>{line.text}</p>
            )
          ))}
        </aside>

        <ContentRenderer sections={brandBook.sections} />
      </article>
    </main>
  );
}