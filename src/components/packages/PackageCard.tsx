import Link from "next/link";
import * as Icons from "lucide-react";
import type { Package } from "@/lib/types";
import TierBadge from "@/components/ui/TierBadge";
import DifficultyBadge from "@/components/ui/DifficultyBadge";

function getIcon(iconName: string) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[iconName];
  return Icon ? <Icon size={24} /> : null;
}

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <Link href={`/packages/${pkg.slug}`}>
      <div className="gradient-border rounded-2xl bg-[#12121a] p-6 card-hover cursor-pointer h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl text-blue-400">{getIcon(pkg.icon)}</span>
          <TierBadge tier={pkg.tier} />
        </div>
        <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{pkg.tagline}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-300">
            {pkg.agents.length} Agent{pkg.agents.length !== 1 ? "s" : ""}
          </span>
          <span className="inline-block px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-300">
            {pkg.connectors.length} Connector{pkg.connectors.length !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="border-t border-gray-800 pt-4 flex items-center justify-between">
          <div>
            <span className="text-white font-bold">${pkg.pricing.selfInstall}</span>
            <span className="text-gray-500 text-sm"> self-install</span>
          </div>
          <div className="flex items-center gap-3">
            <DifficultyBadge difficulty={pkg.installDifficulty} />
            <span className="text-gray-600 text-xs">~${pkg.estimatedMonthlyCost.low}-{pkg.estimatedMonthlyCost.high}/mo</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
