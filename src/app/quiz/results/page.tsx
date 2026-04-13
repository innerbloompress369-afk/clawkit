"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { scorePackages } from "@/lib/quiz-logic";
import type { QuizAnswer } from "@/lib/types";
import PackageCard from "@/components/packages/PackageCard";

function QuizResultsContent() {
  const searchParams = useSearchParams();
  const encoded = searchParams.get("a");

  let answers: QuizAnswer[] = [];
  try {
    if (encoded) answers = JSON.parse(decodeURIComponent(encoded));
  } catch { /* invalid data */ }

  const results = scorePackages(answers);
  const topResults = results.slice(0, 3);

  if (topResults.length === 0 || !encoded) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">No Results</h1>
        <p className="text-gray-400 mb-8">We couldn&apos;t determine your best match. Try the quiz again.</p>
        <Link href="/quiz" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition">Retake Quiz</Link>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Your Recommended Packages</h1>
        <p className="text-gray-400">Based on your answers, here are your best matches.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {topResults.map((result, i) => (
          <div key={result.package.slug} className="relative">
            {i === 0 && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full z-10">Best Match</div>
            )}
            <PackageCard pkg={result.package} />
            <p className="text-gray-500 text-sm mt-3 px-1">{result.reason}</p>
          </div>
        ))}
      </div>
      <div className="text-center space-y-4">
        <Link href="/packages" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Browse all packages &rarr;</Link>
        <br />
        <Link href="/quiz" className="text-gray-500 hover:text-white text-sm transition">Retake quiz</Link>
      </div>
    </main>
  );
}

export default function QuizResultsPage() {
  return (
    <Suspense fallback={<main className="max-w-7xl mx-auto px-6 py-16 text-center"><p className="text-gray-400">Loading results...</p></main>}>
      <QuizResultsContent />
    </Suspense>
  );
}
