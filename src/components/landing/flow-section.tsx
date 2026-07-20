const steps = [
  ["1", "20問に回答", "選ぶだけ"],
  ["2", "現在地を分析", "状態を整理"],
  ["3", "結果を表示", "正直に、シンプルに"],
  ["4", "次の一歩を提案", "あなたのペースで"],
];

export function FlowSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="text-center font-[var(--font-space-grotesk)] text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">4つのステップで、5分。</h2>
        <p className="mt-3 text-center text-[var(--color-landing-text-muted)]">記述なし。途中でやめても大丈夫です。</p>
        <ol className="mx-auto mt-10 max-w-md space-y-0">
          {steps.map(([number, title, body], index) => (
            <li key={number} className="relative flex gap-5 pb-8 last:pb-0">
              {index < steps.length - 1 ? <span className="absolute left-6 top-12 h-[calc(100%-2rem)] w-px bg-[var(--color-landing-surface-strong)]" aria-hidden /> : null}
              <span className={`relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-lg font-semibold ${index === 0 ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white" : "border-[var(--color-landing-text-muted)] bg-[var(--color-landing-surface)] text-[var(--color-landing-accent)]"}`}>
                {number}
              </span>
              <div className="pt-1">
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">{title}</h3>
                <p className="mt-1 text-base text-[var(--color-landing-text-muted)]">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
