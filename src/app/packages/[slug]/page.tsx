import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, DollarSign, Zap, Shield } from "lucide-react";
import { getAllPackages, getPackageBySlug } from "@/lib/packages";
import TierBadge from "@/components/ui/TierBadge";
import DifficultyBadge from "@/components/ui/DifficultyBadge";
import ArchitectureDiagram from "@/components/packages/ArchitectureDiagram";
import PricingSelector from "@/components/pricing/PricingSelector";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPackages().map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return { title: "Package Not Found" };
  return { title: `${pkg.name} — ClawKit`, description: pkg.description };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-sm text-gray-500 mb-8">
        <Link href="/packages" className="hover:text-white transition">Packages</Link> / <span className="text-gray-300">{pkg.name}</span>
      </div>

      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <TierBadge tier={pkg.tier} />
          <DifficultyBadge difficulty={pkg.installDifficulty} />
          <span className="text-xs text-gray-500">{pkg.category}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{pkg.name}</h1>
        <p className="text-xl text-gray-400 max-w-3xl">{pkg.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-[#12121a] border border-gray-800 rounded-xl p-4 text-center">
          <Clock size={20} className="text-blue-400 mx-auto mb-2" />
          <div className="text-lg font-bold">{pkg.estimatedInstallMinutes} min</div>
          <div className="text-xs text-gray-500">Install Time</div>
        </div>
        <div className="bg-[#12121a] border border-gray-800 rounded-xl p-4 text-center">
          <DollarSign size={20} className="text-emerald-400 mx-auto mb-2" />
          <div className="text-lg font-bold">${pkg.estimatedMonthlyCost.low}-{pkg.estimatedMonthlyCost.high}</div>
          <div className="text-xs text-gray-500">Est. Monthly API Cost</div>
        </div>
        <div className="bg-[#12121a] border border-gray-800 rounded-xl p-4 text-center">
          <Zap size={20} className="text-purple-400 mx-auto mb-2" />
          <div className="text-lg font-bold">{pkg.agents.length} Agents</div>
          <div className="text-xs text-gray-500">Working For You</div>
        </div>
        <div className="bg-[#12121a] border border-gray-800 rounded-xl p-4 text-center">
          <Shield size={20} className="text-green-400 mx-auto mb-2" />
          <div className="text-lg font-bold">Verified</div>
          <div className="text-xs text-gray-500">Security Audited</div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">System Architecture</h2>
        <div className="bg-[#12121a] border border-gray-800 rounded-2xl p-6 md:p-8">
          <ArchitectureDiagram agents={pkg.agents} connectors={pkg.connectors} workflows={pkg.workflows} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Your First 3 Missions</h2>
        <p className="text-gray-400 mb-6">Complete these right after install to see the system in action.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pkg.firstMissions.map((mission, i) => (
            <div key={mission.title} className="bg-[#12121a] border border-gray-800 rounded-2xl p-6">
              <div className="text-3xl font-black text-blue-600/30 mb-3">{i + 1}</div>
              <h3 className="font-semibold mb-2">{mission.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{mission.description}</p>
              <div className="text-xs text-gray-500 border-t border-gray-800 pt-3">
                <span className="text-emerald-400">Expected:</span> {mission.expectedResult}
              </div>
              <div className="text-xs text-gray-600 mt-2">~{mission.estimatedMinutes} min</div>
            </div>
          ))}
        </div>
      </section>

      <PricingSelector slug={pkg.slug} selfInstallPrice={pkg.pricing.selfInstall} />
    </main>
  );
}
