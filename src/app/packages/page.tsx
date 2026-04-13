import type { Metadata } from "next";
import { getAllPackages } from "@/lib/packages";
import PackageGrid from "@/components/packages/PackageGrid";

export const metadata: Metadata = {
  title: "All Packages — OpenClaw Marketplace",
  description: "Browse 20 pre-built, security-vetted OpenClaw packages for every business type.",
};

export default function PackagesPage() {
  const packages = getAllPackages();
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">All Packages</h1>
      <p className="text-gray-400 mb-8">Each package is a complete, working OpenClaw system — not just prompts or configs.</p>
      <PackageGrid packages={packages} />
    </main>
  );
}
