import type { ContentSection } from "@/types/content";

export type AboutPageContent = {
  title: string;
  sections: ContentSection[];
};

export const aboutPage: AboutPageContent = {
  title: "Career Rebootについて",
  sections: [
    {
      title: "Career Rebootについて",
      blocks: [
        { type: "paragraph", text: "Career Rebootは、「自分らしい働き方を見つける」ためのキャリアメディアです。" },
        { type: "paragraph", text: "転職や休職、働き方の変化は、多くの人にとって人生の大きな転機になります。" },
        { type: "paragraph", text: "そんなとき、私たちは「次はどこで働くか」を考えることに意識が向きがちです。" },
        { type: "paragraph", text: "Career Rebootが大切にしているのは、その前に「自分はどう働きたいのか」を考えることです。" },
        { type: "paragraph", text: "このメディアでは、実体験をもとに、キャリア・働き方・休職・転職・生き方について発信しています。" },
      ],
    },
    {
      title: "このサイトを始めた理由",
      blocks: [
        { type: "paragraph", text: "私自身、うつ病による休職を経験しました。" },
        { type: "paragraph", text: "休職中は、「早く元に戻らなければ」「転職すれば解決するかもしれない」と焦り続けていました。" },
        { type: "paragraph", text: "でも振り返ると、本当に必要だったのは次の会社を探すことではなく、自分自身を見つめ直す時間でした。" },
        {
          type: "list",
          items: [
            "なぜ苦しくなったのか",
            "何を大切にして働きたいのか",
            "どんな環境なら無理なく力を発揮できるのか",
          ],
        },
        { type: "paragraph", text: "そうした問いに向き合うことで、「どこで働くか」だけではなく、「どう働くか」を考えるようになりました。" },
        { type: "paragraph", text: "Career Rebootは、その経験から生まれたメディアです。" },
      ],
    },
    {
      title: "発信していること",
      blocks: [
        { type: "paragraph", text: "Career Rebootでは、主に次のテーマを扱っています。" },
        {
          type: "list",
          items: [
            "休職・復職の体験談",
            "転職やキャリアについて考えるコラム",
            "自分らしい働き方を見つけるヒント",
            "マーケティングやキャリアに関する実践的な学び",
            "ブランドや事業づくりを通じて得た気づき",
          ],
        },
        { type: "paragraph", text: "実体験を大切にしながら、読者が自分自身と向き合うきっかけになる情報を発信していきます。" },
      ],
    },
    {
      title: "運営方針",
      blocks: [
        { type: "paragraph", text: "Career Rebootでは、次のことを大切にしています。" },
        {
          type: "list",
          items: [
            "実体験をもとに発信すること",
            "読者自身が答えを見つけられるよう支えること",
            "不安をあおる表現をしないこと",
            "誰かの正解を押し付けないこと",
            "長く続けられる働き方を考えること",
          ],
        },
        { type: "paragraph", text: "詳しい考え方については、Brand Bookをご覧ください。" },
      ],
    },
    {
      title: "最後に",
      blocks: [
        { type: "paragraph", text: "人生は、思い通りに進まないことがあります。" },
        { type: "paragraph", text: "休職や転職、環境の変化によって、不安や迷いを抱えることもあるでしょう。" },
        { type: "paragraph", text: "Career Rebootは、「こうすれば正解です」と答えを示す場所ではありません。" },
        { type: "paragraph", text: "一人ひとりが、自分にとって納得できる選択を見つけ、自分らしく歩み続けられるよう、その過程に寄り添う存在でありたいと考えています。" },
        { type: "paragraph", text: "もしこのサイトが、あなたが次の一歩を考えるきっかけになれば、とてもうれしく思います。" },
      ],
    },
  ],
};
