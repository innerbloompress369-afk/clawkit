import { Shield, Zap, Clock, Package } from "lucide-react";

const stats = [
  { icon: Shield, label: "Security Vetted", color: "text-green-400" },
  { icon: Zap, label: "Token Optimized", color: "text-green-400" },
  { icon: Clock, label: "15-Min Install", color: "text-green-400" },
  { icon: Package, label: "20 Packages", color: "text-green-400" },
];

export default function TrustBar() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-4 pb-2">
      <div className="border-t border-gray-800/60 pt-6" />
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-gray-400 text-sm">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-2.5">
            <stat.icon size={20} className={stat.color} />
            <span className="text-[14px]">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
