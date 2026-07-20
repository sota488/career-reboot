import { Card } from "@/components/ui/card";

const benefits = [
  ["①", "現在地が分かる", "今の自分がどんな状態にいるか、言葉にならなかったことが少し整理されます。"],
  ["②", "次にやることが見つかる", "焦りではなく、今の自分に合った小さな一歩が見えてきます。"],
  ["③", "あなたに合ったロードマップ", "一般的なアドバイスではなく、今のあなたの状態から考えた提案を届けます。"],
];

export function BenefitsSection() {
  return (
    <section className="bg-[var(--color-landing-surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-[var(--font-space-grotesk)] text-3xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl">
          診断を終えると、
          <br />
          少しだけ見えてくること。
        </h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {benefits.map(([number, title, body]) => (
            <Card key={number} className="bg-white p-7 shadow-none sm:p-8">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-landing-surface-strong)] text-lg font-semibold text-[var(--color-landing-accent)]">
                {number}
              </span>
              <h3 className="mt-7 text-xl font-semibold text-[var(--color-primary)]">{title}</h3>
              <p className="mt-4 text-base leading-8 text-[var(--color-landing-text-muted)]">{body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
