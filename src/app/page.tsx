import Link from "next/link";
import { ColumnCard } from "@/components/columns/column-card";
import { getLatestArticles } from "@/lib/articles";

const highlights = [
  {
    title: "いまは休養を優先すべきか分かる",
    description: "回復状態を可視化し、無理に動かず整える判断がしやすくなります。",
  },
  {
    title: "復職準備を始めるタイミングが分かる",
    description: "いま準備を始める段階かを見極め、行動開始のタイミングを判断できます。",
  },
  {
    title: "転職前に整理すべきことが分かる",
    description: "焦って求人を見る前に、先に整えるべき状態や優先事項を明確にできます。",
  },
];

const signals = ["休職中の不安", "キャリアの棚卸し", "無理のない再始動", "これからの選択肢"];

const diagnosisOutcomes = [
  "今は休養を優先すべきか、行動を増やせる時期か",
  "復職準備を始めるなら、どの準備から着手すべきか",
  "転職活動を始める前に、整理しておくべき条件や不安",
  "次の2〜4週間で試せる、負担の少ない一歩",
  "いまの現在地に合う再始動の方向性",
];

const recommendationChecks = [
  "休職中で、何から考えればいいか分からない方",
  "復職するか転職するか、判断が止まっている方",
  "焦って動く前に、現在地を整理したい方",
  "一人で悩み続ける状態から抜け出したい方",
];

export default function HomePage() {
  const latestArticles = getLatestArticles(3);

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-8 lg:px-8">
      <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 backdrop-blur-md shadow-sm shadow-slate-900/5">
        <div>
          <p className="font-[var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
            Career Reboot
          </p>
        </div>
        <Link
          href="/diagnosis"
          style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
          className="rounded-full bg-[#1f365c] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#2a4a79]"
        >
          無料診断を始める
        </Link>
      </header>

      <section className="py-16 lg:py-20">
        <div className="space-y-7">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
            休職中の現在地診断
          </span>
          <div className="space-y-5">
            <h1 className="max-w-3xl font-[var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              休職中のいまを整理し、
              <span className="block text-sky-700">次の一歩を決める現在地診断。</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Career Rebootは、適職診断でも転職サービスでもなく、休職中の人が「いま何を優先すべきか」を整理するための診断です。現在地を知ることで、焦らず次の行動を決めやすくします。
            </p>
          </div>
          <div className="space-y-3">
            <Link
              href="/diagnosis"
              style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
              className="inline-flex items-center justify-center rounded-full bg-[#1f365c] px-9 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2a4a79] sm:text-lg"
            >
              無料診断を始める
            </Link>
            <p className="text-sm text-slate-500">約5分・登録不要・完全無料。回答後すぐに結果が表示されます。</p>
            <p className="text-sm text-slate-500">復職・転職・休養のどれかを押し付ける診断ではありません。</p>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-slate-500">
            {signals.map((signal) => (
              <span key={signal} className="rounded-full bg-slate-100/80 px-3 py-1">
                {signal}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10 lg:pb-12">
        <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/70 p-5 sm:p-6">
          <h2 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-slate-950 sm:text-2xl">Career Rebootの現在地診断とは</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-700 sm:text-base">
            <li>向いている職種を判定する適職診断ではなく、いまの回復段階を整理する診断です。</li>
            <li>求人を勧める転職サービスではなく、動く前の意思決定を整えるための診断です。</li>
            <li>症状を判定するメンタル診断ではなく、次の一歩の優先順位を決めるための診断です。</li>
          </ul>
        </div>
      </section>

      <section className="pb-14 lg:pb-16">
        <div className="rounded-[2rem] border border-sky-200 bg-white/90 p-6 shadow-md shadow-slate-900/10 backdrop-blur sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">解決策: いまの現在地を可視化する</p>
          <h2 className="mt-3 font-[var(--font-space-grotesk)] text-2xl font-semibold text-slate-950 sm:text-3xl">
            「いま何を優先すべきか」を、5分で整理できます
          </h2>
          <p className="mt-3 text-slate-600">
            今の気持ちに近い選択肢を選ぶだけで、回復フェーズと次に取り組みやすい行動が分かります。転職を急ぐのではなく、いまの自分に合う順番で動くための判断土台を作れます。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/diagnosis"
              style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
              className="inline-flex items-center justify-center rounded-full bg-[#1f365c] px-10 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2a4a79] sm:text-lg"
            >
              無料診断を始める
            </Link>
            <Link
              href="/result?profile=balance&total=74&recovery=15&selfAcceptance=14&selfUnderstanding=15&futureOrientation=15&actionReadiness=15"
              className="inline-flex items-center justify-center px-3 py-2 text-sm font-semibold text-slate-600 underline-offset-2 transition hover:text-slate-800 hover:underline"
            >
              先に結果イメージを見る
            </Link>
          </div>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
            <li>約5分で完了</li>
            <li>登録不要</li>
            <li>完全無料</li>
            <li>結果はすぐ表示</li>
            <li>いつでも中断可能</li>
          </ul>
        </div>
      </section>

      <section className="pb-10 lg:pb-12">
        <h2 className="font-[var(--font-space-grotesk)] text-2xl font-semibold text-slate-950 sm:text-3xl">共感: こんな迷いはありませんか</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {recommendationChecks.map((item) => (
            <li key={item} className="flex items-start gap-3 border-b border-slate-200/80 pb-3 text-sm leading-7 text-slate-700 sm:text-base">
              <span className="mt-2 inline-flex h-2 w-2 shrink-0 rounded-full bg-sky-500" aria-hidden>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="pb-10 lg:pb-12">
        <h2 className="font-[var(--font-space-grotesk)] text-2xl font-semibold text-slate-950 sm:text-3xl">診断すると得られること</h2>
        <p className="mt-3 max-w-3xl text-slate-600">無料だからではなく、現在地に合う次の一歩を決めるために使える情報が得られます。</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {diagnosisOutcomes.map((item) => (
            <li key={item} className="border-b border-slate-200/80 pb-3 text-sm leading-7 text-slate-700 sm:text-base">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-4 pb-12 lg:grid-cols-3 lg:pb-14">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-[1.25rem] border border-slate-200/80 bg-white/75 p-5 shadow-sm shadow-slate-900/5 backdrop-blur">
            <h2 className="font-[var(--font-space-grotesk)] text-lg font-semibold text-slate-950">{item.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="pb-10 lg:pb-12">
        <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/70 p-5 sm:p-6">
          <h2 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-slate-950 sm:text-2xl">信頼して使える理由</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-700 sm:text-base">
            <li>休職経験でつまずきやすい意思決定をもとに質問を設計</li>
            <li>キャリア支援で使われる整理観点を参考に診断ロジックを構成</li>
            <li>回答傾向を見ながら、継続的に改善しているβ版サービス</li>
            <li>転職を勧めるためではなく、いまの状態を整理することを目的に設計</li>
          </ul>
        </div>
      </section>

      <section className="pb-14 lg:pb-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-[#1f365c] p-7 text-white shadow-2xl shadow-slate-900/20 sm:p-10">
          <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" aria-hidden></div>
          <p className="text-sm font-medium text-sky-100">診断するとこのような結果が表示されます</p>
          <p className="mt-4 max-w-3xl font-[var(--font-space-grotesk)] text-3xl font-semibold leading-snug sm:text-4xl">
            いまは「急いで再開」よりも、
            <span className="text-sky-200">心身を整える期間</span>
            と捉えると前に進みやすいです。
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/8 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-300">今の状態</p>
              <p className="mt-2 text-base text-slate-100">回復途中。少し波がある</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/8 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-300">次の一歩</p>
              <p className="mt-2 text-base text-slate-100">短時間勤務の選択肢を比較する</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="rounded-[1.75rem] border border-sky-200 bg-sky-50/70 p-6 text-center sm:p-8">
          <p className="text-sm text-sky-800">転職を急ぐ前に、まず今の現在地を整理しませんか？</p>
          <h2 className="mt-2 font-[var(--font-space-grotesk)] text-2xl font-semibold text-slate-950 sm:text-3xl">
            今の自分を整理する無料診断を始める
          </h2>
          <Link
            href="/diagnosis"
            style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1f365c] px-10 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2a4a79] sm:text-lg"
          >
            今の自分を整理する無料診断を始める
          </Link>
          <p className="mt-3 text-sm text-slate-500">約5分・登録不要・完全無料・結果はすぐ表示</p>
        </div>
      </section>

      <section className="mt-6 rounded-[2rem] border border-slate-200/80 bg-white/70 p-6 pb-16 shadow-sm shadow-slate-900/5 backdrop-blur sm:p-8 lg:mt-8 lg:pb-20">
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
              コラム
            </span>
            <h2 className="font-[var(--font-space-grotesk)] text-2xl font-semibold text-slate-950 sm:text-3xl">
              休職中に役立つコラム
            </h2>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              診断だけでなく、体験談や知識も読めます。まずは最新の3本を、無理のないペースで読めるように載せています。
            </p>
          </div>
          <Link
            href="/columns"
            className="shrink-0 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            すべて見る
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {latestArticles.map((article) => (
            <ColumnCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <div className="pointer-events-none fixed inset-x-4 bottom-4 z-40 md:hidden">
        <Link
          href="/diagnosis"
          style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
          className="pointer-events-auto inline-flex w-full items-center justify-center rounded-full bg-[#1f365c] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-[#2a4a79]"
        >
          無料診断を始める
        </Link>
      </div>
    </main>
  );
}
