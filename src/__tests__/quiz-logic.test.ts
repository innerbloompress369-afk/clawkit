import { scorePackages, quizQuestions } from "@/lib/quiz-logic";
import type { QuizAnswer } from "@/lib/types";

describe("Quiz scoring", () => {
  test("returns results sorted by score descending", () => {
    const answers: QuizAnswer[] = [
      { questionId: "business-type", answerId: "service-business" },
      { questionId: "challenge", answerId: "getting-customers" },
      { questionId: "current-tools", answerId: "mostly-manual" },
      { questionId: "success-looks-like", answerId: "more-leads" },
    ];
    const results = scorePackages(answers);
    expect(results.length).toBeGreaterThan(0);
    for (let i = 1; i < results.length; i++) {
      expect(results[i - 1].score).toBeGreaterThanOrEqual(results[i].score);
    }
  });

  test("service business wanting leads scores lead-generation high", () => {
    const answers: QuizAnswer[] = [
      { questionId: "business-type", answerId: "service-business" },
      { questionId: "challenge", answerId: "getting-customers" },
      { questionId: "current-tools", answerId: "mostly-manual" },
      { questionId: "success-looks-like", answerId: "more-leads" },
    ];
    const results = scorePackages(answers);
    const topSlugs = results.slice(0, 3).map((r) => r.package.slug);
    expect(topSlugs).toContain("lead-generation");
  });

  test("quizQuestions has 4 questions each with options", () => {
    expect(quizQuestions).toHaveLength(4);
    for (const q of quizQuestions) {
      expect(q.id).toBeTruthy();
      expect(q.question).toBeTruthy();
      expect(q.options.length).toBeGreaterThanOrEqual(3);
    }
  });
});
