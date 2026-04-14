import Link from "next/link";
import TrustBar from "@/components/marketing/TrustBar";
import HowItWorks from "@/components/marketing/HowItWorks";
import ComparisonTable from "@/components/marketing/ComparisonTable";
import PricingSelector from "@/components/pricing/PricingSelector";
import PackageCard from "@/components/packages/PackageCard";
import { getAllPackages } from "@/lib/packages";
import HeroSection from "@/components/marketing/HeroSection";
import FadeInSection from "@/components/ui/FadeInSection";

export default function Home() {
  const featured = getAllPackages().filter((p) => p.tier === "A").slice(0, 3);

  return (
    <main>
      <HeroSection />
      <TrustBar />

      {/* Featured Packages */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-16">
        <FadeInSection>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Top Packages</h2>
              <p className="text-gray-400">Highest demand, clearest ROI. These are where most users start.</p>
            </div>
            <Link href="/packages" className="hidden md:block text-blue-400 hover:text-blue-300 text-sm font-medium transition">View all 20 &rarr;</Link>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((pkg, i) => (<PackageCard key={pkg.slug} pkg={pkg} index={i} />))}
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
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        </FadeInSection>
        <div className="space-y-6">
          {[
            { q: "What is ClawKit?", a: "ClawKit delivers pre-built AI packages powered by OpenClaw — an open-source AI assistant framework with persistent memory, multi-platform messaging, and multi-model support. We configure it for your specific business." },
            { q: "Do I need technical skills to install?", a: "No. Our Self-Install tier includes video walkthroughs and step-by-step guides. The Guided and Done-For-You tiers provide even more support." },
            { q: "How much does it cost to run monthly?", a: "Each package shows an estimated monthly API cost. Our built-in model routing optimizes costs — typically $15-120/month depending on usage and package complexity." },
            { q: "What if a package doesn't fit my business?", a: "Use our guided quiz to find the best match. If none fit perfectly, the Done-For-You tier includes custom configuration to tailor the package to your needs." },
            { q: "Is my data safe?", a: "Every package is security-audited before publishing. We check for prompt injection, data exfiltration, and permission escalation. Your data stays on your machine." },
          ].map((item, i) => (
            <FadeInSection key={item.q} delay={0.06 * i}>
              <div className="bg-[#12121a] rounded-2xl border border-gray-800 p-6">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm">{item.a}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>
    </main>
  );
}
