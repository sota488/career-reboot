"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { questions, ratingDescriptions, ratingLabels, type DiagnosisCategory } from "./questions";

const categoryLabels: Record<DiagnosisCategory, string> = {
  recovery: "回復度",
  selfAcceptance: "自己受容度",
  selfUnderstanding: "自己理解度",
  futureOrientation: "未来志向度",
  actionReadiness: "行動準備度",
};

function resolveProfile(categoryScores: Record<DiagnosisCategory, number>) {
  const recoveryScore = categoryScores.recovery;

  if (recoveryScore <= 10) {
    return "small-return";
  }

  const totalOtherScore = categoryScores.selfAcceptance + categoryScores.selfUnderstanding + categoryScores.futureOrientation + categoryScores.actionReadiness;

  if (categoryScores.futureOrientation >= 14 && categoryScores.actionReadiness >= 13) {
    return "reset";
  }

  if (categoryScores.selfUnderstanding >= 15) {
    return "independence";
  }

  if (totalOtherScore >= 50) {
    return "balance";
  }

  return "stability";
}

export default function DiagnosisPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(() => questions.map(() => null));

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentIndex];
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelect = (value: number) => {
    setAnswers((current) => {
      const next = [...current];
      next[currentIndex] = value;
      return next;
    });
  };

  const handleNext = () => {
    if (currentAnswer === null) {
      return;
    }

    if (!isLastQuestion) {
      setCurrentIndex((current) => current + 1);
      return;
    }

    const categoryScores = questions.reduce<Record<DiagnosisCategory, number>>(
      (accumulator, question, index) => {
        accumulator[question.category] += answers[index] ?? 0;
        return accumulator;
      },
      {
        recovery: 0,
        selfAcceptance: 0,
        selfUnderstanding: 0,
        futureOrientation: 0,
        actionReadiness: 0,
      },
    );

    const profile = resolveProfile(categoryScores);
    const totalScore = answers.reduce<number>((sum, answer) => sum + (answer ?? 0), 0);

    const params = new URLSearchParams({
      profile,
      total: String(totalScore),
      recovery: String(categoryScores.recovery),
      selfAcceptance: String(categoryScores.selfAcceptance),
      selfUnderstanding: String(categoryScores.selfUnderstanding),
      futureOrientation: String(categoryScores.futureOrientation),
      actionReadiness: String(categoryScores.actionReadiness),
    });

    router.push(`/result?${params.toString()}`);
  };

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-8 lg:px-8">
      <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 backdrop-blur-md shadow-sm shadow-slate-900/5">
        <Link href="/" className="font-[var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
          Career Reboot
        </Link>
        <p className="text-sm font-medium text-slate-500">20問 / 5段階評価</p>
      </header>

      <section className="py-14 lg:py-20">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
            休職後の現在地診断
          </span>
          <h1 className="font-[var(--font-space-grotesk)] text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            今の自分に合う再スタートの形を見つける
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            感情や状態を確認する20の質問に答えながら、あなたの現在地を丁寧に見つめ直します。無理のないペースで、1問ずつ進められます。
          </p>
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-sm shadow-slate-900/5 backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
                Q{String(currentQuestion.id).padStart(2, "0")} / {questions.length}
              </p>
              <h2 className="mt-2 font-[var(--font-space-grotesk)] text-2xl font-semibold text-slate-950 sm:text-3xl">
                {currentQuestion.prompt}
              </h2>
            </div>
            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
              {currentQuestion.categoryLabel}
            </span>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>進捗 {currentIndex + 1} / {questions.length}</span>
              <span>回答済み {answeredCount} / {questions.length}</span>
            </div>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {ratingLabels.map((label, index) => {
              const value = index + 1;
              const active = currentAnswer === value;

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => handleSelect(value)}
                  className={`rounded-[1.5rem] border px-4 py-5 text-left transition ${active ? "border-sky-500 bg-sky-50 text-sky-950 shadow-sm shadow-sky-900/5" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"}`}
                >
                  <span className="text-2xl font-semibold">{label}</span>
                  <span className="mt-2 block text-sm leading-6">{ratingDescriptions[index]}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-5">
            <div className="flex gap-3 overflow-x-auto pb-1 md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
            {(Object.keys(categoryLabels) as DiagnosisCategory[]).map((category) => {
              const categoryAnswerCount = questions.filter((question, index) => question.category === category && answers[index] !== null).length;

              return (
                <div key={category} className="min-w-[148px] rounded-2xl bg-white px-4 py-4 md:min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{categoryLabels[category]}</p>
                  <p className="mt-2 text-sm text-slate-600">{categoryAnswerCount} / 4 回答</p>
                </div>
              );
            })}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => setCurrentIndex((current) => Math.max(current - 1, 0))}
              disabled={currentIndex === 0}
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              前へ
            </button>

            <div className="text-sm text-slate-500">
              {currentAnswer === null ? "5段階から1つ選ぶと次へ進めます。" : "回答を変更してから進むこともできます。"}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentAnswer === null}
              className="rounded-full bg-[#1f365c] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2a4a79] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLastQuestion ? "診断結果を見る" : "次へ"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
