import type { ComponentType } from "react";
import BeforeRushingToChangeJobsArticle from "@/content/columns/before-rushing-to-change-jobs";
import FirstWeekAfterLeaveRegretArticle from "@/content/columns/first-week-after-leave-regret";
import NothingWasTheHardestArticle from "@/content/columns/nothing-was-the-hardest";

const articleContentMap = {
  "before-rushing-to-change-jobs": BeforeRushingToChangeJobsArticle,
  "nothing-was-the-hardest": NothingWasTheHardestArticle,
  "first-week-after-leave-regret": FirstWeekAfterLeaveRegretArticle,
} as const;

export type ArticleContentComponent = ComponentType;

export function getArticleContentBySlug(slug: string) {
  return articleContentMap[slug as keyof typeof articleContentMap] ?? null;
}

export function getAllArticleSlugs() {
  return Object.keys(articleContentMap);
}