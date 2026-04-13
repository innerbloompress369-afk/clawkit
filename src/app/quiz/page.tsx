import type { Metadata } from "next";
import QuizFlow from "@/components/quiz/QuizFlow";

export const metadata: Metadata = {
  title: "Find Your Package — OpenClaw Marketplace",
  description: "Answer 4 quick questions and we'll match you with the best OpenClaw package for your business.",
};

export default function QuizPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Find Your Package</h1>
        <p className="text-gray-400">4 quick questions. We'll recommend the best package for your business.</p>
      </div>
      <QuizFlow />
    </main>
  );
}
