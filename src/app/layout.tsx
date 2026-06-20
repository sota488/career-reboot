import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Suspense } from "react";
import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import { PageViewTracker } from "@/components/analytics/page-view-tracker";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Career Reboot",
  description: "休職後のロードマップ診断で、次の一歩を明確にするキャリアガイド",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} flex min-h-screen flex-col bg-transparent text-slate-900 antialiased`}
      >
        <div className="flex-1">{children}</div>
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        <AnalyticsScripts />
        <footer className="border-t border-slate-200/80 bg-white/75 px-6 py-6 text-slate-600 backdrop-blur sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 text-sm">
            <p className="font-[var(--font-space-grotesk)] font-semibold tracking-[0.08em] text-slate-700">Career Reboot β</p>
            <p>休職後のロードマップ診断</p>
            <p className="text-xs text-slate-500">© Career Reboot</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
