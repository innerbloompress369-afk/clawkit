import type { Metadata } from "next";
import { getAllPackages } from "@/lib/packages";
import PackageGrid from "@/components/packages/PackageGrid";

export const metadata: Metadata = {
  title: "All Packages — ClawKit",
  description: "Browse 20 pre-built, security-vetted AI packages for every business type.",
};

export default function PackagesPage() {
  const packages = getAllPackages();
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">All Packages</h1>
      <p className="text-gray-400 mb-2">Each package is a complete, working AI system — not just prompts or configs.</p>
      <p className="text-gray-500 text-sm mb-8">Package price reflects system complexity. All tiers include the same quality baseline.</p>
      <PackageGrid packages={packages} />
    </main>
  );
}
