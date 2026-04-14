"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { quizQuestions } from "@/lib/quiz-logic";
import type { QuizAnswer } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";

export default function QuizFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back

  const currentQuestion = quizQuestions[step];
  const progress = ((step + 1) / quizQuestions.length) * 100;

  function handleSelect(answerId: string) {
    const newAnswers = [...answers.filter((a) => a.questionId !== currentQuestion.id), { questionId: currentQuestion.id, answerId }];
    setAnswers(newAnswers);
    if (step < quizQuestions.length - 1) {
      setDirection(1);
      setStep(step + 1);
    } else {
      const encoded = encodeURIComponent(JSON.stringify(newAnswers));
      router.push(`/quiz/results?a=${encoded}`);
    }
  }

  function handleBack() {
    setDirection(-1);
    setStep(step - 1);
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <p className="text-xs text-gray-500 text-center mb-3">Takes 60 seconds &middot; We&apos;ll match you with your best-fit package</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>Question {step + 1} of {quizQuestions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-2 bg-blue-600 rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -60 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-2xl font-bold mb-8">{currentQuestion.question}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentQuestion.options.map((option, i) => (
              <motion.button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className="w-full text-left bg-[#12121a] border border-gray-800 hover:border-blue-500 rounded-xl p-4 text-sm transition"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                whileHover={{ scale: 1.02, borderColor: "rgb(59 130 246)" }}
                whileTap={{ scale: 0.98 }}
              >
                {option.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {step > 0 && (
        <motion.button
          onClick={handleBack}
          className="mt-6 text-gray-500 hover:text-white text-sm transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          &larr; Back
        </motion.button>
      )}
    </div>
  );
}
