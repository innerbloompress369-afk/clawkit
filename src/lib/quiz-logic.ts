import type { QuizAnswer, QuizResult } from "./types";
import { getAllPackages } from "./packages";

export interface QuizQuestion {
  id: string;
  question: string;
  options: { id: string; label: string; tags: string[] }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "business-type",
    question: "What type of business do you run?",
    options: [
      { id: "service-business", label: "Service business (plumbing, HVAC, consulting, etc.)", tags: ["hvac", "plumbing", "contractor", "consulting"] },
      { id: "ecommerce", label: "Online store or e-commerce", tags: ["ecommerce", "products", "shopify", "etsy"] },
      { id: "real-estate", label: "Real estate or property management", tags: ["real estate", "property", "listings"] },
      { id: "healthcare", label: "Healthcare or medical practice", tags: ["healthcare", "medical", "patients"] },
      { id: "legal", label: "Legal or professional services", tags: ["legal", "law", "consulting", "advisory"] },
      { id: "agency-freelance", label: "Agency or freelancer", tags: ["agency", "freelancer", "clients", "deliverables"] },
      { id: "education", label: "Education, tutoring, or coaching", tags: ["education", "tutoring", "courses", "students"] },
      { id: "other", label: "Something else", tags: [] },
    ],
  },
  {
    id: "challenge",
    question: "What's your biggest challenge right now?",
    options: [
      { id: "getting-customers", label: "Getting more customers or leads", tags: ["leads", "sales", "pipeline", "customers"] },
      { id: "follow-up", label: "Following up with customers and getting reviews", tags: ["follow-up", "retention", "reviews", "re-engagement"] },
      { id: "scheduling", label: "Managing appointments and scheduling", tags: ["scheduling", "calendar", "appointments", "booking"] },
      { id: "email-overload", label: "Drowning in email", tags: ["email", "inbox", "outreach"] },
      { id: "content", label: "Creating content and social media presence", tags: ["social media", "content", "marketing"] },
      { id: "operations", label: "Managing projects and operations", tags: ["projects", "clients", "deliverables", "tasks"] },
      { id: "admin", label: "Too much paperwork and admin", tags: ["reporting", "documents", "bookkeeping"] },
    ],
  },
  {
    id: "current-tools",
    question: "How do you handle this today?",
    options: [
      { id: "mostly-manual", label: "Mostly manual — spreadsheets, notes, memory", tags: [] },
      { id: "some-tools", label: "Some tools but nothing connected", tags: [] },
      { id: "existing-ai", label: "Already using AI but want something better", tags: [] },
    ],
  },
  {
    id: "success-looks-like",
    question: "What would success look like for you?",
    options: [
      { id: "more-leads", label: "More leads and customers coming in", tags: ["leads", "sales", "pipeline"] },
      { id: "less-time", label: "Spending less time on repetitive tasks", tags: ["automation", "tasks", "scheduling", "email"] },
      { id: "better-follow-up", label: "Better follow-up and customer relationships", tags: ["follow-up", "retention", "crm", "reviews"] },
      { id: "more-content", label: "Consistent content and marketing output", tags: ["content", "social media", "marketing"] },
      { id: "organized", label: "Everything organized and nothing falling through cracks", tags: ["tasks", "projects", "calendar", "knowledge"] },
    ],
  },
];

export function scorePackages(answers: QuizAnswer[]): QuizResult[] {
  const packages = getAllPackages();

  const answerTags: string[] = [];
  for (const answer of answers) {
    const question = quizQuestions.find((q) => q.id === answer.questionId);
    if (!question) continue;
    const option = question.options.find((o) => o.id === answer.answerId);
    if (!option) continue;
    answerTags.push(...option.tags);
  }

  const results: QuizResult[] = packages.map((pkg) => {
    let score = 0;
    for (const tag of answerTags) {
      if (pkg.tags.includes(tag)) score += 2;
      if (pkg.name.toLowerCase().includes(tag)) score += 1;
    }
    if (pkg.tier === "A") score += 1;

    const matched = answerTags.filter((t) => pkg.tags.includes(t));
    const reason = matched.length === 0
      ? `${pkg.name} covers general business needs.`
      : `${pkg.name} matches your needs for ${matched.slice(0, 3).join(", ")}.`;

    return { package: pkg, score, reason };
  });

  return results.sort((a, b) => b.score - a.score);
}
