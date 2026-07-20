import { Card } from "@/components/ui/card";

export function FounderSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Card variant="outline" className="border-slate-200 bg-[var(--color-landing-card)] p-7 shadow-none sm:p-10">
          <h2 className="font-[var(--font-space-grotesk)] text-2xl font-semibold leading-snug text-[var(--color-primary)] sm:text-3xl">
            「自分は大丈夫なのか」と、
            <br />
            一人で抱えていた経験から。
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-landing-text-muted)]">
            このサービスは、答えを教えるためにあるのではありません。今の状態を整理して、自分で次の一歩を選べるようにするための場所です。
          </p>
          <div className="mt-8 flex items-start gap-4 border-t border-sky-100 pt-7">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-landing-surface-strong)] text-3xl" aria-hidden>🧑🏻</span>
            <div>
              <p className="text-lg font-semibold text-[var(--color-primary)]">漆原 壮太</p>
              <p className="mt-1 text-sm font-medium text-[var(--color-landing-text-muted)]">Career Reboot 代表</p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-landing-text-muted)]">
                5年前にうつ病を発症し、3度休職を経験しました。そのとき最も困ったのは、「自分が今どんな状態なのか」が分からないことでした。
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
