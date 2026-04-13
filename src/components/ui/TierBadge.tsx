import type { Tier } from "@/lib/types";

const tierConfig: Record<Tier, { label: string; className: string }> = {
  A: { label: "Tier A", className: "bg-emerald-900/50 text-emerald-300 border border-emerald-700/50" },
  B: { label: "Tier B", className: "bg-blue-900/50 text-blue-300 border border-blue-700/50" },
  C: { label: "Tier C", className: "bg-purple-900/50 text-purple-300 border border-purple-700/50" },
  D: { label: "Tier D", className: "bg-gray-800/50 text-gray-300 border border-gray-700/50" },
};

export default function TierBadge({ tier }: { tier: Tier }) {
  const config = tierConfig[tier];
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${config.className}`}>
      {config.label}
    </span>
  );
}
