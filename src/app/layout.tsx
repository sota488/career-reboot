import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Suspense } from "react";
import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import { Footer } from "@/components/layout/Footer";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://career-reboot-omega.vercel.app",
  ),
  title: {
    default: "Career Reboot | 休職中のロードマップ診断",
    template: "%s | Career Reboot",
  },
  description:
    "5分で現在地を診断。休職中のあなたに合った次の一歩を提案するキャリア診断サービスです。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Career Reboot",
    title: "Career Reboot | 休職中のロードマップ診断",
    description: "5分で現在地を診断。あなたに合った次の一歩を提案します。",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "Career Reboot | 休職中のロードマップ診断",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Reboot | 休職中のロードマップ診断",
    description: "5分で現在地を診断。あなたに合った次の一歩を提案します。",
    images: ["/ogp.png"],
  },
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
        <Footer />
      </body>
    </html>
  );
}
