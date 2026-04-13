import type { Difficulty } from "@/lib/types";

const difficultyConfig: Record<Difficulty, { label: string; className: string }> = {
  easy: { label: "Easy Install", className: "text-green-400" },
  medium: { label: "Medium Install", className: "text-yellow-400" },
  advanced: { label: "Advanced Install", className: "text-orange-400" },
};

export default function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const config = difficultyConfig[difficulty];
  return (
    <span className={`text-xs font-medium ${config.className}`}>
      {config.label}
    </span>
  );
}
