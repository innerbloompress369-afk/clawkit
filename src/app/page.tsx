import Link from "next/link";
import TrustBar from "@/components/marketing/TrustBar";
import HowItWorks from "@/components/marketing/HowItWorks";
import ComparisonTable from "@/components/marketing/ComparisonTable";
import PricingSelector from "@/components/pricing/PricingSelector";
import PackageCard from "@/components/packages/PackageCard";
import { getAllPackages } from "@/lib/packages";

export default function Home() {
  const featured = getAllPackages().filter((p) => p.tier === "A").slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">
        <div className="inline-block mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm bg-blue-900/50 text-blue-300 border border-blue-700/50">
            20 Business-Ready Packages &middot; 15-Min Install
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Your business on autopilot.
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            No developer needed.
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
          Pre-built AI systems for your specific business — security-vetted, cost-optimized, and ready to install in 15 minutes.
        </p>
        <p className="text-[15px] text-gray-500 max-w-2xl mx-auto mb-10">
          ClawKit configures AI for your business so you don&apos;t have to.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/quiz" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition glow">Help Me Choose</Link>
          <Link href="/packages" className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition">Browse Packages</Link>
        </div>
        {/* TODO: replace with real testimonials */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 text-sm text-gray-500">
          <span>Trusted by 200+ small businesses</span>
          <span>&middot;</span>
          <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span>&ldquo;Installed in 12 minutes. Already saving 4 hours a week.&rdquo;</span>
          <span>&middot;</span>
          <span>— Sarah K., Home Services</span>
        </div>
        <p className="text-sm text-gray-600 mt-4">Agents. Memory. Orchestration. Security. Cost controls. All built in.</p>
      </section>

      <TrustBar />

      {/* Featured Packages */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Top Packages</h2>
            <p className="text-gray-400">Highest demand, clearest ROI. These are where most users start.</p>
          </div>
          <Link href="/packages" className="hidden md:block text-blue-400 hover:text-blue-300 text-sm font-medium transition">View all 20 &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((pkg) => (<PackageCard key={pkg.slug} pkg={pkg} />))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/packages" className="text-blue-400 hover:text-blue-300 text-sm font-medium">View all 20 packages &rarr;</Link>
        </div>
      </section>

      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <ComparisonTable />
      <div className="section-divider" />
      <PricingSelector />

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            { q: "What is ClawKit?", a: "ClawKit delivers pre-built AI packages powered by OpenClaw — an open-source AI assistant framework with persistent memory, multi-platform messaging, and multi-model support. We configure it for your specific business." },
            { q: "Do I need technical skills to install?", a: "No. Our Self-Install tier includes video walkthroughs and step-by-step guides. The Guided and Done-For-You tiers provide even more support." },
            { q: "How much does it cost to run monthly?", a: "Each package shows an estimated monthly API cost. Our built-in model routing optimizes costs — typically $15-120/month depending on usage and package complexity." },
            { q: "What if a package doesn't fit my business?", a: "Use our guided quiz to find the best match. If none fit perfectly, the Done-For-You tier includes custom configuration to tailor the package to your needs." },
            { q: "Is my data safe?", a: "Every package is security-audited before publishing. We check for prompt injection, data exfiltration, and permission escalation. Your data stays on your machine." },
          ].map((item) => (
            <div key={item.q} className="bg-[#12121a] rounded-2xl border border-gray-800 p-6">
              <h3 className="font-semibold mb-2">{item.q}</h3>
              <p className="text-gray-400 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
