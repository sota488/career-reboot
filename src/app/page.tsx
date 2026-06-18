import Link from "next/link";

const highlights = [
  {
    title: "現在地を落ち着いて確認",
    description: "心と体の状態をやさしく振り返り、無理のない一歩を考えます。",
  },
  {
    title: "再始動マップで見通しを持つ",
    description: "休息期から実行期まで、今どこにいるかを5つのフェーズで可視化します。",
  },
  {
    title: "次に向かう行動を明確に",
    description: "今のフェーズに合った行動を、取り組みやすい形で整理できます。",
  },
];

const signals = ["休職中の不安", "キャリアの棚卸し", "無理のない再始動", "これからの選択肢"];

export default function HomePage() {
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
          診断を始める
        </Link>
      </header>

      <section className="grid gap-8 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
            休職中の現在地を、3分でやさしく確認する
          </span>
          <div className="space-y-5">
            <h1 className="max-w-3xl font-[var(--font-space-grotesk)] text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              いまの自分に合う
              <span className="block text-sky-700">働き方と人生の再始動を。</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Career Rebootは、休職中に先の見通しを失いやすい時期に寄り添う、人生の再始動ガイドです。今の状態を丁寧に整理し、次の一歩への道筋を示します。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/diagnosis"
              style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
              className="rounded-full bg-[#1f365c] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2a4a79]"
            >
              無料診断を始める
            </Link>
            <Link
              href="/result?profile=balance&total=74&recovery=15&selfAcceptance=14&selfUnderstanding=15&futureOrientation=15&actionReadiness=15"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              サンプル結果を見る
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {signals.map((signal) => (
              <div key={signal} className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-sm shadow-slate-900/5 backdrop-blur">
                {signal}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-6 top-6 h-72 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/80 bg-[#1f365c] p-6 text-white shadow-2xl shadow-slate-900/20">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-200">人生の再始動マップの表示イメージ</p>
              <p className="mt-4 text-2xl font-semibold leading-snug">
                いまは「急いで再開」よりも、
                <span className="text-sky-200">心身を整える期間</span>
                と考えると前に進みやすいです。
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">今の状態</p>
                  <p className="mt-2 text-sm text-slate-200">回復途中、少し波がある</p>
                </div>
                <div className="rounded-2xl bg-white/8 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">次の一歩</p>
                  <p className="mt-2 text-sm text-slate-200">短時間勤務の選択肢を比較</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 pb-16 lg:grid-cols-3 lg:pb-24">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-sm shadow-slate-900/5 backdrop-blur">
            <h2 className="font-[var(--font-space-grotesk)] text-xl font-semibold text-slate-950">{item.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
