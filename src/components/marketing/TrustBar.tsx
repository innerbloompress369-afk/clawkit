import { Shield, Zap, Clock, Package } from "lucide-react";

const stats = [
  { icon: Shield, label: "Security Vetted", color: "text-green-400" },
  { icon: Zap, label: "Token Optimized", color: "text-green-400" },
  { icon: Clock, label: "15-Min Install", color: "text-green-400" },
  { icon: Package, label: "20 Packages", color: "text-green-400" },
];

export default function TrustBar() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-gray-500 text-sm">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-2">
            <stat.icon size={16} className={stat.color} />
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
