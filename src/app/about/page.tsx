import type { Metadata } from "next";
import { ContentRenderer } from "@/components/content/content-renderer";
import { Header } from "@/components/layout/Header";
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
      <Header />

      <article className="mx-auto mt-8 max-w-[44rem] rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur sm:mt-10 sm:p-8">
        <h1 className="font-[var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {aboutPage.title}
        </h1>

        <ContentRenderer sections={aboutPage.sections} />
      </article>
    </main>
  );
}
