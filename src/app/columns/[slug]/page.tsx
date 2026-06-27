import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleContentBySlug } from "@/lib/article-content";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const title = `${article.title} | Career Reboot`;
  const image = article.thumbnail ?? "/ogp.png";

  return {
    title,
    description: article.description,
    openGraph: {
      type: "article",
      title,
      description: article.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.description,
      images: [image],
    },
  };
}

export default async function ColumnDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const ArticleContent = getArticleContentBySlug(slug);

  if (!article || !ArticleContent) {
    notFound();
  }

  return <ArticleContent />;
}