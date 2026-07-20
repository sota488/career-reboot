const previews = [
  { label: "現在地", title: "回復の初期段階にあります", body: "休養と自己理解が最優先の時期です。" },
  { label: "今の傾向", title: "比較による焦りを感じています", body: "それは状態からくる自然な反応です。" },
];

export function ResultPreviewSection() {
  return (
    <section className="overflow-hidden bg-[var(--color-landing-surface)] pb-12 sm:pb-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-5 text-center text-sm font-medium text-[var(--color-landing-text-muted)]">診断結果のイメージ</p>
        <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible">
          {previews.map((preview) => (
            <article key={preview.label} className="min-w-[19rem] rounded-[var(--radius-lg)] bg-white p-5 shadow-[var(--shadow-sm)] sm:min-w-0">
              <span className="rounded-[var(--radius-full)] bg-[var(--color-landing-surface-strong)] px-3 py-1 text-xs font-semibold text-[var(--color-landing-accent)]">
                {preview.label}
              </span>
              <h2 className="mt-4 text-lg font-semibold text-[var(--color-primary)]">{preview.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-landing-text-muted)]">{preview.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
