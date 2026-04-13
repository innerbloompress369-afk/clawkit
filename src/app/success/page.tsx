import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Thank You — ClawKit" };

export default function SuccessPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-center">
      <div className="bg-[#12121a] border border-gray-800 rounded-2xl p-8 md:p-12">
        <div className="w-16 h-16 rounded-2xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">✓</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-400 mb-8">We&apos;ll email you when your package is ready for download.</p>
        <Link href="/" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition">Back to Home</Link>
      </div>
    </main>
  );
}
