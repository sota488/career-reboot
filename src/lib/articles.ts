export const ARTICLE_CATEGORIES = {
  EXPERIENCE: "体験談",
  RECOVERY: "回復",
  CAREER: "キャリア",
  COLUMN: "コラム",
  KNOWLEDGE: "知識",
} as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[keyof typeof ARTICLE_CATEGORIES];

export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  category: ArticleCategory;
  tags: string[];
  thumbnail?: string;
  readingTime: number;
  featured?: boolean;
};

const articles: Article[] = [
  {
    slug: "nothing-was-the-hardest",
    title: "休職中に「何もしない」ことが一番苦しかった話",
    description:
      "休職中、「何もしない自分」に罪悪感を抱え続けていた体験をもとに、休むことの意味と回復の過程について書いた記事。",
    publishedAt: "2026-06-27",
    category: ARTICLE_CATEGORIES.EXPERIENCE,
    tags: ["休職", "何もしない", "罪悪感", "回復", "休職から人生を立て直すロードマップ"],
    thumbnail: "/ogp.png",
    readingTime: 9,
    featured: true,
  },
  {
    slug: "first-week-after-leave-regret",
    title: "休職したばかりのあなたへ。私が最初の1週間で後悔したこと",
    description:
      "休職したばかりで何も考えられなかった時期に、最初の1週間で後悔したことを静かに振り返る体験談です。",
    publishedAt: "2026-06-27",
    category: ARTICLE_CATEGORIES.EXPERIENCE,
    tags: ["休職初期", "体験談", "不安", "回復"],
    thumbnail: "/ogp.png",
    readingTime: 8,
    featured: true,
  },
];

export function getAllArticles() {
  return [...articles].sort(
    (left, right) => new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
  );
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticles() {
  return getAllArticles().filter((article) => article.featured);
}

export function getLatestArticles(limit: number) {
  return getAllArticles().slice(0, limit);
}