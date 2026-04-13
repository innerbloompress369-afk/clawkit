import { Search, Download, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "1. Browse & Choose", description: "Find the package built for your business — or let our quiz match you." },
  { icon: Download, title: "2. Install in Minutes", description: "Follow the step-by-step guide. Video walkthroughs. Zero terminal commands." },
  { icon: Rocket, title: "3. Get Results Today", description: "Complete your first 3 missions and see the system working for you." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">From choosing a package to getting real results — in under 30 minutes.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.title} className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mx-auto mb-6">
              <step.icon size={28} className="text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
