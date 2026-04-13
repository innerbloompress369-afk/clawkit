import { X, Check } from "lucide-react";

const features = [
  { name: "Persistent memory across sessions", chat: false, ours: true },
  { name: "Multi-agent orchestration", chat: false, ours: true },
  { name: "Proactive scheduled actions", chat: false, ours: true },
  { name: "Security & permission rules", chat: false, ours: true },
  { name: "Business-specific workflows", chat: false, ours: true },
  { name: "Cost-optimized model routing", chat: false, ours: true },
  { name: "Connectors to your tools", chat: false, ours: true },
  { name: "Answer questions", chat: true, ours: true },
];

export default function ComparisonTable() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">More Than Just Chat</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Every package includes the infrastructure that turns a chatbot into an intelligent assistant.</p>
      <div className="rounded-2xl border border-gray-800 overflow-hidden">
        <div className="grid grid-cols-3 bg-gray-900/50 px-6 py-4 text-sm font-semibold">
          <div>Feature</div>
          <div className="text-center text-gray-500">Basic AI Chat</div>
          <div className="text-center text-blue-400">Our Packages</div>
        </div>
        {features.map((feature) => (
          <div key={feature.name} className="grid grid-cols-3 px-6 py-3 border-t border-gray-800/50 text-sm">
            <div className="text-gray-300">{feature.name}</div>
            <div className="text-center">
              {feature.chat ? <Check size={16} className="text-gray-500 mx-auto" /> : <X size={16} className="text-gray-700 mx-auto" />}
            </div>
            <div className="text-center">
              <Check size={16} className="text-emerald-400 mx-auto" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
