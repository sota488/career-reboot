import { Card } from "@/components/ui/card";

const concerns = [
  ["🌙", "休んでいていいのか分からない", "休むことに、罪悪感を感じてしまう。"],
  ["🔄", "転職するべきか、戻るべきか", "どちらも正解に見えず、どちらも怖い。"],
  ["⌛", "焦っているのに、動けない", "頭では分かっているのに、体が動かない。"],
  ["👥", "周囲と比べてしまう", "同世代の活躍が、自分を追いつめる。"],
  ["🧩", "何から始めればいいか分からない", "動きたいのに、最初の一歩が見つからない。"],
  ["🚪", "復職が怖い", "職場のことを思い出すと、体が重くなる。"],
];

export function EmpathySection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-center text-sm font-medium text-[var(--color-landing-text-muted)]">あなただけではありません。</p>
        <h2 className="mt-3 text-center font-[var(--font-space-grotesk)] text-3xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl">
          こんなことで、悩んでいませんか？
        </h2>
        <div className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {concerns.map(([icon, title, body]) => (
            <Card key={title} variant="outline" className="border-slate-200 bg-[var(--color-landing-card)] p-4 shadow-none sm:p-6">
              <span className="text-2xl" aria-hidden>{icon}</span>
              <h3 className="mt-4 text-base font-semibold leading-6 text-[var(--color-primary)] sm:text-lg">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-landing-text-muted)]">{body}</p>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-center text-sm font-medium text-[var(--color-landing-text-muted)]">その気持ちは、弱さではありません。</p>
      </div>
    </section>
  );
}
