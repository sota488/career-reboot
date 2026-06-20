"use client";

import { trackDiagnosisComplete, trackDiagnosisStart } from "@/lib/analytics";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { questions, ratingDescriptions, type DiagnosisCategory } from "./questions";

const categoryLabels: Record<DiagnosisCategory, string> = {
  recovery: "回復度",
  selfAcceptance: "自己受容度",
  selfUnderstanding: "自己理解度",
  futureOrientation: "未来志向度",
  actionReadiness: "行動準備度",
};

const ratingCircleSizes = ["h-4 w-4", "h-5 w-5", "h-6 w-6", "h-5 w-5", "h-4 w-4"] as const;

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
  const [pendingSelection, setPendingSelection] = useState<number | null>(null);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const diagnosisStartTrackedRef = useRef(false);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentIndex];
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentIndex === questions.length - 1;

  useEffect(() => {
    if (diagnosisStartTrackedRef.current) {
      return;
    }

    diagnosisStartTrackedRef.current = true;
    trackDiagnosisStart();
  }, []);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  const finishDiagnosis = (finalAnswers: Array<number | null>) => {
    const categoryScores = questions.reduce<Record<DiagnosisCategory, number>>(
      (accumulator, question, index) => {
        accumulator[question.category] += finalAnswers[index] ?? 0;
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
    const totalScore = finalAnswers.reduce<number>((sum, answer) => sum + (answer ?? 0), 0);

    trackDiagnosisComplete({
      profile,
      totalScore,
      recovery: categoryScores.recovery,
      selfAcceptance: categoryScores.selfAcceptance,
      selfUnderstanding: categoryScores.selfUnderstanding,
      futureOrientation: categoryScores.futureOrientation,
      actionReadiness: categoryScores.actionReadiness,
    });

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

  const handleSelect = (value: number) => {
    if (pendingSelection !== null) {
      return;
    }

    const nextAnswers = [...answers];
    nextAnswers[currentIndex] = value;
    setAnswers(nextAnswers);
    setPendingSelection(value);

    transitionTimerRef.current = setTimeout(() => {
      setPendingSelection(null);

      if (isLastQuestion) {
        finishDiagnosis(nextAnswers);
        return;
      }

      setCurrentIndex((current) => current + 1);
    }, 180);
  };

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-8 lg:px-8">
      <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 backdrop-blur-md shadow-sm shadow-slate-900/5">
        <Link href="/" className="font-[var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
          Career Reboot
        </Link>
        <p className="text-sm font-medium text-slate-500">20問 / 5段階評価</p>
      </header>

      <section className="py-8 sm:py-14 lg:py-20">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
            休職中のロードマップ診断
          </span>
          <h1 className="font-[var(--font-space-grotesk)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            今の自分に合う再スタートの形を見つける
          </h1>
          <p className="hidden text-lg leading-8 text-slate-600 sm:block">
            感情や状態を確認する20の質問に答えながら、あなたの現在地を丁寧に見つめ直します。無理のないペースで、1問ずつ進められます。
          </p>
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-white/80 bg-white/85 p-4 shadow-sm shadow-slate-900/5 backdrop-blur sm:mt-10 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="w-full">
              <div className="mb-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentIndex((current) => Math.max(current - 1, 0))}
                  disabled={currentIndex === 0}
                  aria-label="前の質問へ戻る"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-base text-slate-500 transition hover:border-slate-400 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ←
                </button>
                <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                  {currentQuestion.categoryLabel}
                </span>
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
                Q{String(currentQuestion.id).padStart(2, "0")} / {questions.length}
              </p>
              <h2 className="mt-2 font-[var(--font-space-grotesk)] text-xl font-semibold text-slate-950 sm:text-3xl">
                {currentQuestion.prompt}
              </h2>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
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

          <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white px-4 py-4 sm:mt-8">
            <div className="flex items-center justify-between gap-3 text-xs font-medium text-slate-500 sm:text-sm">
              <span className="truncate">{ratingDescriptions[0]}</span>
              <span className="truncate text-right">{ratingDescriptions[4]}</span>
            </div>
            <div className="mt-3 grid grid-cols-5 gap-2">
            {ratingDescriptions.map((description, index) => {
              const value = index + 1;
              const active = pendingSelection === value || (pendingSelection === null && currentAnswer === value);

              return (
                <button
                  key={description}
                  type="button"
                  onClick={() => handleSelect(value)}
                  aria-label={`${value}: ${description}`}
                  disabled={pendingSelection !== null}
                  className={`relative inline-flex h-12 min-h-[48px] items-center justify-center rounded-2xl border transition-all duration-150 ${active ? "scale-[0.98] border-sky-600 bg-sky-600 shadow-sm shadow-sky-900/10" : "border-slate-300 bg-white hover:border-sky-400 hover:bg-sky-50"} ${pendingSelection !== null ? "cursor-wait" : ""}`}
                >
                  <span
                    className={`${ratingCircleSizes[index]} rounded-full border-2 transition ${active ? "border-white bg-white/90" : "border-slate-400 bg-white"}`}
                    aria-hidden
                  />
                  {active ? (
                    <span className="absolute right-1.5 top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/95 text-[10px] font-bold text-sky-700">
                      ✓
                    </span>
                  ) : null}
                </button>
              );
            })}
            </div>
          </div>

          <div className="mt-8 hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-5 sm:block">
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

          <div className="mt-6 rounded-2xl border border-sky-100 bg-sky-50/70 px-4 py-3 text-sm text-slate-600 sm:mt-8">
            {isLastQuestion ? "回答を選択すると、結果ページへ移動します。" : "回答を選択すると、自動で次の質問へ進みます。"}
          </div>
        </div>
      </section>
    </main>
  );
}
