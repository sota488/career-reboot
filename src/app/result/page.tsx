import { ResultViewEvent } from "@/components/analytics/result-view-event";
import Link from "next/link";

type SearchParams = Record<string, string | string[] | undefined>;

type Phase = {
  id: number;
  name: string;
  theme: string;
  currentState: string;
  nextPhase: string;
  actions: string[];
};

const phases: Record<number, Phase> = {
  1: {
    id: 1,
    name: "休息期",
    theme: "休む勇気",
    currentState: "まずは心身の回復を最優先に。生活リズムの安定や、無理なく続けられる日常を整えることが大切な時期です。焦らず、できることから始める土台作りに専念しています。",
    nextPhase: "整理期",
    actions: [
      "毎日の気力や体調の変化を記録する",
      "これまでの仕事で辛かった場面を思い出し、共通点を探す",
      "家族や信頼できる人に今の状態を伝える",
    ],
  },
  2: {
    id: 2,
    name: "整理期",
    theme: "自分を知る",
    currentState: "体力が戻ってきて、次のことを考え始めるタイミング。これまでの人生の棚卸しをしながら、『何がしたいのか』『何は避けたいのか』が少しずつ見えてきています。",
    nextPhase: "探索期",
    actions: [
      "できていた仕事・得意だったことを3つ書き出す",
      "働く上で『絶対に嫌だこと』を3つ整理する",
      "これからの働き方（職場復帰・転職・学び直し）の選択肢を情報収集する",
    ],
  },
  3: {
    id: 3,
    name: "探索期",
    theme: "可能性を広げる",
    currentState: "進むべき方向の仮説を持ち始めている段階。組織に戻る道もあれば、副業や業務委託など別の選択肢も視野に入ってきています。どの選択肢の相性が良いのか、小さく試しながら確かめようとしています。",
    nextPhase: "準備期",
    actions: [
      "気になる職種や働き方の求人情報を3つ集める",
      "実際に携わったことのある領域と新しい領域の割合を決める",
      "試しやすい副業や案件があるか、情報収集する",
    ],
  },
  4: {
    id: 4,
    name: "準備期",
    theme: "方向性を固める",
    currentState: "『次はこの方向だ』という判断がほぼ固まり、実際の行動に向けて準備を始めている段階。条件整理や必要なスキル習得など、実現に向けた具体的なステップを踏み始めています。",
    nextPhase: "実行期",
    actions: [
      "職務経歴書や自己PRを最新版に整理する",
      "求人情報から『譲れない条件』と『あるといい条件』を分ける",
      "面談や試験の日程調整に向けた準備をする",
    ],
  },
  5: {
    id: 5,
    name: "実行期",
    theme: "小さく動き出す",
    currentState: "新しい働き方をスタートさせている、または具体的に動き始めている段階。これまでの準備を活かしながら、実際の環境で自分がどう動くか試している真っ最中です。",
    nextPhase: "継続・軌道修正",
    actions: [
      "最初の3ヶ月は様子を見て、無理がないか確認する",
      "定期的に『今のところはどうか』を信頼できる人に相談する",
      "必要に応じて条件交渉や配置変更を検討する",
    ],
  },
};

const profilePhaseMap: Record<string, number> = {
  "small-return": 1,
  stability: 2,
  independence: 3,
  balance: 4,
  reset: 5,
};

const categoryItems = [
  { key: "recovery", label: "回復度" },
  { key: "selfAcceptance", label: "自己受容度" },
  { key: "selfUnderstanding", label: "自己理解度" },
  { key: "futureOrientation", label: "未来志向度" },
  { key: "actionReadiness", label: "行動準備度" },
] as const;

function pickValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function pickScore(value: string | string[] | undefined) {
  const rawValue = pickValue(value);
  const parsed = Number(rawValue);

  return Number.isFinite(parsed) ? parsed : null;
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;
  const profileKey = pickValue(resolvedSearchParams.profile) ?? "balance";
  const currentPhaseId = profilePhaseMap[profileKey] ?? 4;
  const currentPhase = phases[currentPhaseId];
  const totalScore = pickScore(resolvedSearchParams.total);
  const categoryScores = categoryItems.map((item) => ({
    ...item,
    score: pickScore(resolvedSearchParams[item.key]),
  }));

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-8 lg:px-8">
      <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 backdrop-blur-md shadow-sm shadow-slate-900/5">
        <Link href="/" className="font-[var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
          Career Reboot
        </Link>
        <Link href="/diagnosis" className="text-sm font-medium text-slate-600 hover:text-slate-950">
          もう一度診断する
        </Link>
      </header>

      <section className="py-10 lg:py-20">
        <div className="max-w-3xl space-y-6">
          <ResultViewEvent
            phaseId={currentPhaseId}
            phaseName={currentPhase.name}
            profileKey={profileKey}
            totalScore={totalScore}
          />

          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
              休職中の現在地診断
            </span>
            <h1 className="font-[var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              あなたの現在地は{currentPhase.name}です
            </h1>
            <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              いまの状態を5つのフェーズで可視化し、次に向かう道筋を整理します。ここから、あなたの再始動を始めましょう。
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-sm shadow-slate-900/5 backdrop-blur sm:p-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">再始動のマップ</p>
                <div className="overflow-x-auto pb-1">
                  <div className="flex min-w-[520px] items-center justify-between gap-2">
                  {Array.from({ length: 5 }).map((_, index) => {
                    const phaseId = index + 1;
                    const isCurrentPhase = phaseId === currentPhaseId;
                    const isPast = phaseId < currentPhaseId;

                    return (
                      <div key={phaseId} className="flex flex-1 flex-col items-center gap-2">
                        <div
                          className={`w-full rounded-full py-3 text-center text-xs font-semibold transition sm:text-sm ${
                            isCurrentPhase
                              ? "border-2 border-sky-500 bg-sky-50 text-sky-700"
                              : isPast
                                ? "border border-sky-300 bg-sky-100/50 text-sky-700"
                                : "border border-slate-300 bg-slate-100 text-slate-500"
                          }`}
                        >
                          {phases[phaseId].name}
                        </div>
                        {isCurrentPhase && (
                          <span className="inline-flex rounded-full bg-sky-600 px-2 py-1 text-xs font-bold text-white">
                            今ここ
                          </span>
                        )}
                      </div>
                    );
                  })}
                  </div>
                </div>
                <p className="text-xs text-slate-500 sm:hidden">横にスワイプして全フェーズを確認できます。</p>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-slate-950">フェーズテーマ</h2>
                    <div className="mt-3 inline-flex rounded-full border border-sky-300 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                      {currentPhase.theme}
                    </div>
                  </div>

                  <div>
                    <h2 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-slate-950">現在の状態</h2>
                    <p className="mt-3 text-base leading-7 text-slate-700">{currentPhase.currentState}</p>
                  </div>

                  <div>
                    <h2 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-slate-950">次に目指すフェーズ</h2>
                    <div className="mt-3 inline-flex rounded-full border border-sky-300 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                      {currentPhase.nextPhase}
                    </div>
                  </div>

                  <div>
                    <h2 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-slate-950">次のフェーズへ進むための行動</h2>
                    <ul className="mt-4 space-y-3">
                      {currentPhase.actions.map((action, index) => (
                        <li key={action} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-700">
                          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-700">
                            {index + 1}
                          </span>
                          <span className="leading-7">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {categoryScores.some((item) => item.score !== null) ? (
            <details open className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur">
              <summary className="cursor-pointer list-none font-[var(--font-space-grotesk)] text-xl font-semibold text-slate-950">
                カテゴリ別スコア
              </summary>
              <p className="mt-2 text-sm text-slate-500">必要に応じてスコア詳細を確認できます。</p>
              <div className="mt-4 space-y-3">
                {categoryScores.map((item) => {
                  const score = item.score ?? 0;
                  const width = `${Math.min((score / 20) * 100, 100)}%`;

                  return (
                    <div key={item.key}>
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <span>{item.label}</span>
                        <span>{score} / 20</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                        <div className="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" style={{ width }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </details>
          ) : null}

          <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur sm:p-8">
            <h2 className="font-[var(--font-space-grotesk)] text-2xl font-semibold text-slate-950">次の一歩</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
              仮置きの導線です。後でアフィリエイトリンクに差し替えられるよう、プレースホルダーとして設置しています。
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-[var(--font-space-grotesk)] text-lg font-semibold text-slate-900">転職を考えている方へ</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">求人比較やキャリア相談サービスの導線を設置予定です。</p>
                <a
                  href="#"
                  className="mt-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-100"
                >
                  プレースホルダーリンク
                </a>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-[var(--font-space-grotesk)] text-lg font-semibold text-slate-900">自己理解を深めたい方へ</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">自己分析ツールや学習コンテンツの導線を設置予定です。</p>
                <a
                  href="#"
                  className="mt-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-100"
                >
                  プレースホルダーリンク
                </a>
              </article>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
