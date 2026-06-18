export type DiagnosisCategory =
  | "recovery"
  | "selfAcceptance"
  | "selfUnderstanding"
  | "futureOrientation"
  | "actionReadiness";

export type DiagnosisQuestion = {
  id: number;
  category: DiagnosisCategory;
  categoryLabel: string;
  prompt: string;
};

export const ratingLabels = ["1", "2", "3", "4", "5"] as const;

export const ratingDescriptions = [
  "まったく当てはまらない",
  "あまり当てはまらない",
  "どちらともいえない",
  "やや当てはまる",
  "とても当てはまる",
] as const;

export const questions: DiagnosisQuestion[] = [
  {
    id: 1,
    category: "recovery",
    categoryLabel: "回復度",
    prompt: "最近、自分のペースで過ごせていると感じる",
  },
  {
    id: 2,
    category: "recovery",
    categoryLabel: "回復度",
    prompt: "朝、起き上がることが以前より楽になった",
  },
  {
    id: 3,
    category: "recovery",
    categoryLabel: "回復度",
    prompt: "毎日の気力や体調の変動が落ち着いてきた",
  },
  {
    id: 4,
    category: "recovery",
    categoryLabel: "回復度",
    prompt: "何かを始めることに、身構える気持ちが減った",
  },
  {
    id: 5,
    category: "selfAcceptance",
    categoryLabel: "自己受容度",
    prompt: "今の自分を、ありのままに受け入れられている",
  },
  {
    id: 6,
    category: "selfAcceptance",
    categoryLabel: "自己受容度",
    prompt: "休職したことに対する自責や後悔が薄れてきた",
  },
  {
    id: 7,
    category: "selfAcceptance",
    categoryLabel: "自己受容度",
    prompt: "自分の弱さや限界を、認めるようになった",
  },
  {
    id: 8,
    category: "selfAcceptance",
    categoryLabel: "自己受容度",
    prompt: "これからを作っていく力が、自分の中にあると感じる",
  },
  {
    id: 9,
    category: "selfUnderstanding",
    categoryLabel: "自己理解度",
    prompt: "自分が大切にしたいことが、見えてきた",
  },
  {
    id: 10,
    category: "selfUnderstanding",
    categoryLabel: "自己理解度",
    prompt: "自分が本当に避けたい働き方が、明確になった",
  },
  {
    id: 11,
    category: "selfUnderstanding",
    categoryLabel: "自己理解度",
    prompt: "これまでの人生で、自分を活かせていた場面が思い当たる",
  },
  {
    id: 12,
    category: "selfUnderstanding",
    categoryLabel: "自己理解度",
    prompt: "自分がどういう人間か、説明できるようになった",
  },
  {
    id: 13,
    category: "futureOrientation",
    categoryLabel: "未来志向度",
    prompt: "これからの人生に、少し期待を持てる",
  },
  {
    id: 14,
    category: "futureOrientation",
    categoryLabel: "未来志向度",
    prompt: "自分にとって『心地よい人生』の形が、少しずつ見えてきた",
  },
  {
    id: 15,
    category: "futureOrientation",
    categoryLabel: "未来志向度",
    prompt: "働くことに、再びやりがいや喜びを感じられそうだ",
  },
  {
    id: 16,
    category: "futureOrientation",
    categoryLabel: "未来志向度",
    prompt: "今の状態から、少し前に進んでみようという気持ちがある",
  },
  {
    id: 17,
    category: "actionReadiness",
    categoryLabel: "行動準備度",
    prompt: "自分の気持ちや考えを、人に伝える勇気が出てきた",
  },
  {
    id: 18,
    category: "actionReadiness",
    categoryLabel: "行動準備度",
    prompt: "情報を集めたり、相談したりすることができている",
  },
  {
    id: 19,
    category: "actionReadiness",
    categoryLabel: "行動準備度",
    prompt: "次にやってみたいことが、具体的に想像できる",
  },
  {
    id: 20,
    category: "actionReadiness",
    categoryLabel: "行動準備度",
    prompt: "迷いながらでも、少しずつ動き出す準備ができている",
  },
];