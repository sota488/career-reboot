export type ServiceCategory = "book" | "career" | "job";

export type ServiceItem = {
  /** GA service_name パラメータ。英数字とアンダースコアのみ */
  id: string;
  name: string;
  description?: string;
  url: string;
  category: ServiceCategory;
};

export type PhaseServiceGuide = {
  /** GA phase パラメータ */
  phase: string;
  message: string;
  services: ServiceItem[];
};

/** フェーズID → サービスガイドのマップ */
export const phaseServiceGuides: Record<number, PhaseServiceGuide> = {
  1: {
    phase: "rest",
    message:
      "今は焦って次の進路を決めるよりも、心身の回復と自己理解を優先することをおすすめします。",
    services: [
      {
        id: "kirawareru_yuki",
        name: "嫌われる勇気",
        description: "他人との比較や自己否定に悩んでいる方へ",
        url: "https://www.amazon.co.jp/%E5%AB%8C%E3%82%8F%E3%82%8C%E3%82%8B%E5%8B%87%E6%B0%97%E2%80%95%E2%80%95%E2%80%95%E8%87%AA%E5%B7%B1%E5%95%93%E7%99%BA%E3%81%AE%E6%BA%90%E6%B5%81%E3%80%8C%E3%82%A2%E3%83%89%E3%83%A9%E3%83%BC%E3%80%8D%E3%81%AE%E6%95%99%E3%81%88-%E5%B2%B8%E8%A6%8B-%E4%B8%80%E9%83%8E/dp/4478025819",
        category: "book",
      },
      {
        id: "hanno_shinai_renshu",
        name: "反応しない練習",
        description: "不安や焦りが強く、頭の中が休まらない方へ",
        url: "https://www.amazon.co.jp/%E5%8F%8D%E5%BF%9C%E3%81%97%E3%81%AA%E3%81%84%E7%B7%B4%E7%BF%92-%E3%81%82%E3%82%89%E3%82%86%E3%82%8B%E6%82%A9%E3%81%BF%E3%81%8C%E6%B6%88%E3%81%88%E3%81%A6%E3%81%84%E3%81%8F%E3%83%96%E3%83%83%E3%83%80%E3%81%AE%E8%B6%85%E3%83%BB%E5%90%88%E7%90%86%E7%9A%84%E3%81%AA%E3%80%8C%E8%80%83%E3%81%88%E6%96%B9%E3%80%8D-%E8%8D%89%E8%96%99%E9%BE%8D%E7%9E%AC/dp/4041030404",
        category: "book",
      },
    ],
  },
  2: {
    phase: "organize",
    message:
      "少しずつ自分の価値観や強みを整理し、これからの方向性を考えていく段階です。",
    services: [
      {
        id: "posiwill",
        name: "POSIWILL CAREER",
        description: "自己理解やキャリアの棚卸しを進めたい方へ",
        url: "https://posiwill.jp/career/",
        category: "career",
      },
      {
        id: "strength_finder",
        name: "ストレングスファインダー2.0",
        description: "自分の強みや得意なことを言語化したい方へ",
        url: "https://www.amazon.co.jp/%E3%81%95%E3%81%82%E3%80%81%E6%89%8D%E8%83%BD-%E3%81%98%E3%81%B6%E3%82%93-%E3%81%AB%E7%9B%AE%E8%A6%9A%E3%82%81%E3%82%88%E3%81%86-%E6%96%B0%E7%89%88-%E3%82%B9%E3%83%88%E3%83%AC%E3%83%B3%E3%82%B0%E3%82%B9%E3%83%BB%E3%83%95%E3%82%A1%E3%82%A4%E3%83%B3%E3%83%80%E3%83%BC2-0/dp/4532321433",
        category: "book",
      },
      {
        id: "life_shift",
        name: "LIFE SHIFT",
        description: "これからの人生やキャリアを長期視点で考えたい方へ",
        url: "https://www.amazon.co.jp/LIFE-SHIFT-%E3%83%A9%E3%82%A4%E3%83%95%E3%83%BB%E3%82%B7%E3%83%95%E3%83%88-%E3%83%AA%E3%83%B3%E3%83%80-%E3%82%B0%E3%83%A9%E3%83%83%E3%83%88%E3%83%B3/dp/4492533877",
        category: "book",
      },
    ],
  },
  3: {
    phase: "explore",
    message:
      "可能性を広げながら、自分に合う働き方や生き方を探していく段階です。",
    services: [
      {
        id: "posiwill",
        name: "POSIWILL CAREER",
        description: "自己理解を深めながら方向性を模索したい方へ",
        url: "https://posiwill.jp/career/",
        category: "career",
      },
      {
        id: "die_with_zero",
        name: "DIE WITH ZERO",
        description: "人生全体の使い方を見直したい方へ",
        url: "https://www.amazon.co.jp/DIE-ZERO-%E4%BA%BA%E7%94%9F%E3%81%8C%E8%B1%8A%E3%81%8B%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%99%E3%81%8E%E3%82%8B%E7%A9%B6%E6%A5%B5%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%AB-%E3%83%93%E3%83%AB%E3%83%BB%E3%83%91%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B9/dp/4478109680",
        category: "book",
      },
      {
        id: "yaritai_mitureke",
        name: "世界一やさしい「やりたいこと」の見つけ方",
        description: "やりたいことが見つからず迷っている方へ",
        url: "https://www.amazon.co.jp/%E4%B8%96%E7%95%8C%E4%B8%80%E3%82%84%E3%81%95%E3%81%97%E3%81%84%E3%80%8C%E3%82%84%E3%82%8A%E3%81%9F%E3%81%84%E3%81%93%E3%81%A8%E3%80%8D%E3%81%AE%E8%A6%8B%E3%81%A4%E3%81%91%E6%96%B9-%E4%BA%BA%E7%94%9F%E3%81%AE%E3%83%A2%E3%83%A4%E3%83%A2%E3%83%A4%E3%81%8B%E3%82%89%E8%A7%A3%E6%94%BE%E3%81%95%E3%82%8C%E3%82%8B%E8%87%AA%E5%B7%B1%E7%90%86%E8%A7%A3%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89-%E5%85%AB%E6%9C%A8-%E4%BB%81%E5%B9%B3/dp/4046044357",
        category: "book",
      },
    ],
  },
  4: {
    phase: "prepare",
    message:
      "方向性が見えてきたら、具体的な行動の準備を進めていきましょう。",
    services: [
      {
        id: "posiwill",
        name: "POSIWILL CAREER",
        description: "転職の軸や優先条件を整理したい方へ",
        url: "https://posiwill.jp/career/",
        category: "career",
      },
      {
        id: "recruit_agent",
        name: "リクルートエージェント",
        description: "幅広い求人から自分に合う選択肢を探したい方へ",
        url: "https://www.r-agent.com/",
        category: "job",
      },
      {
        id: "career_ticket",
        name: "キャリアチケット転職エージェント",
        description: "若手・第二新卒向けに丁寧なサポートを受けたい方へ",
        url: "https://career-ticket.jp/tensyoku/",
        category: "job",
      },
      {
        id: "tensyoku_shikouho",
        name: "転職の思考法",
        description: "転職を判断するための軸を身につけたい方へ",
        url: "https://www.amazon.co.jp/%E3%81%93%E3%81%AE%E3%81%BE%E3%81%BE%E4%BB%8A%E3%81%AE%E4%BC%9A%E7%A4%BE%E3%81%AB%E3%81%84%E3%81%A6%E3%81%84%E3%81%84%E3%81%AE%E3%81%8B-%E3%81%A8%E4%B8%80%E5%BA%A6%E3%81%A7%E3%82%82%E6%80%9D%E3%81%A3%E3%81%9F%E3%82%89%E8%AA%AD%E3%82%80-%E8%BB%A2%E8%81%B7%E3%81%AE%E6%80%9D%E8%80%83%E6%B3%95-%E5%8C%97%E9%87%8E-%E5%94%AF%E6%88%91/dp/4478105553",
        category: "book",
      },
      {
        id: "kurushikatta_toki",
        name: "苦しかったときの話をしようか",
        description: "自分のキャリアを深く考えたい方へ",
        url: "https://www.amazon.co.jp/%E8%8B%A6%E3%81%97%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%8D%E3%81%AE%E8%A9%B1%E3%82%92%E3%81%97%E3%82%88%E3%81%86%E3%81%8B-%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%9E%E3%83%B3%E3%81%AE%E7%88%B6%E3%81%8C%E6%88%91%E3%81%8C%E5%AD%90%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AB%E6%9B%B8%E3%81%8D%E3%81%9F%E3%82%81%E3%81%9F%E3%80%8C%E5%83%8D%E3%81%8F%E3%81%93%E3%81%A8%E3%81%AE%E6%9C%AC%E8%B3%AA%E3%80%8D-%E6%A3%AE%E5%B2%A1-%E6%AF%85/dp/4478107823",
        category: "book",
      },
    ],
  },
  5: {
    phase: "action",
    message:
      "実際に動き始めている段階です。自分のペースを守りながら、着実に進めていきましょう。",
    services: [
      {
        id: "posiwill",
        name: "POSIWILL CAREER",
        description: "転職後の方向性を再確認したい方へ",
        url: "https://posiwill.jp/career/",
        category: "career",
      },
      {
        id: "recruit_agent",
        name: "リクルートエージェント",
        description: "幅広い求人から自分に合う選択肢を探したい方へ",
        url: "https://www.r-agent.com/",
        category: "job",
      },
      {
        id: "rikunabi_next",
        name: "リクナビNEXT",
        description: "自分のペースで求人を探したい方へ",
        url: "https://next.rikunabi.com/",
        category: "job",
      },
      {
        id: "career_ticket",
        name: "キャリアチケット転職エージェント",
        description: "若手・第二新卒向けに丁寧なサポートを受けたい方へ",
        url: "https://career-ticket.jp/tensyoku/",
        category: "job",
      },
      {
        id: "tensyoku_2_0",
        name: "転職2.0",
        description: "現代の転職市場で通用するキャリア戦略を知りたい方へ",
        url: "https://www.amazon.co.jp/%E8%BB%A2%E8%81%B72-0-%E6%97%A5%E6%9C%AC%E4%BA%BA%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%AA%E3%82%A2%E3%81%AE%E6%96%B0%E3%83%BB%E3%83%AB%E3%83%BC%E3%83%AB-%E6%9D%91%E4%B8%8A-%E8%87%A3/dp/4815608032",
        category: "book",
      },
      {
        id: "kurushikatta_toki",
        name: "苦しかったときの話をしようか",
        description: "自分のキャリアを深く考えたい方へ",
        url: "https://www.amazon.co.jp/%E8%8B%A6%E3%81%97%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%8D%E3%81%AE%E8%A9%B1%E3%82%92%E3%81%97%E3%82%88%E3%81%86%E3%81%8B-%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%9E%E3%83%B3%E3%81%AE%E7%88%B6%E3%81%8C%E6%88%91%E3%81%8C%E5%AD%90%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AB%E6%9B%B8%E3%81%8D%E3%81%9F%E3%82%81%E3%81%9F%E3%80%8C%E5%83%8D%E3%81%8F%E3%81%93%E3%81%A8%E3%81%AE%E6%9C%AC%E8%B3%AA%E3%80%8D-%E6%A3%AE%E5%B2%A1-%E6%AF%85/dp/4478107823",
        category: "book",
      },
    ],
  },
};
