"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { quizQuestions } from "@/lib/quiz-logic";
import type { QuizAnswer } from "@/lib/types";

export default function QuizFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const currentQuestion = quizQuestions[step];
  const progress = ((step + 1) / quizQuestions.length) * 100;

  function handleSelect(answerId: string) {
    const newAnswers = [...answers.filter((a) => a.questionId !== currentQuestion.id), { questionId: currentQuestion.id, answerId }];
    setAnswers(newAnswers);
    if (step < quizQuestions.length - 1) {
      setStep(step + 1);
    } else {
      const encoded = encodeURIComponent(JSON.stringify(newAnswers));
      router.push(`/quiz/results?a=${encoded}`);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>Question {step + 1} of {quizQuestions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-800 rounded-full">
          <div className="h-2 bg-blue-600 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-8">{currentQuestion.question}</h2>
      <div className="space-y-3">
        {currentQuestion.options.map((option) => (
          <button key={option.id} onClick={() => handleSelect(option.id)}
            className="w-full text-left bg-[#12121a] border border-gray-800 hover:border-blue-500 rounded-xl p-4 text-sm transition">
            {option.label}
          </button>
        ))}
      </div>
      {step > 0 && (
        <button onClick={() => setStep(step - 1)} className="mt-6 text-gray-500 hover:text-white text-sm transition">
          &larr; Back
        </button>
      )}
    </div>
  );
}
