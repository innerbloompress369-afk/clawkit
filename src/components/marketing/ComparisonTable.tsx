"use client";

import { X, Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { name: "Remembers your business context", chat: false, ours: true },
  { name: "Multiple specialized agents working together", chat: false, ours: true },
  { name: "Takes action automatically — no prompting needed", chat: false, ours: true },
  { name: "Security-vetted and safe to use", chat: false, ours: true },
  { name: "Built for your specific business type", chat: false, ours: true },
  { name: "Keeps your AI costs low automatically", chat: false, ours: true },
  { name: "Connects to the tools you already use", chat: false, ours: true },
  { name: "Answer questions", chat: true, ours: true },
];

export default function ComparisonTable() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">What&apos;s built into every package</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Every package ships complete — not just prompts. Real infrastructure, built in.</p>
      </motion.div>
      <motion.div
        className="rounded-2xl border border-gray-800 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="grid grid-cols-3 bg-gray-900/50 px-6 py-4 text-sm font-semibold">
          <div>Feature</div>
          <div className="text-center text-blue-400">Our Packages</div>
          <div className="text-center text-gray-500">Generic AI Chat</div>
        </div>
        {features.map((feature, i) => (
          <motion.div
            key={feature.name}
            className="grid grid-cols-3 px-6 py-3 border-t border-gray-800/50 text-sm"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 * i }}
          >
            <div className="text-gray-300">{feature.name}</div>
            <div className="text-center">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 + 0.05 * i }}
                className="inline-block"
              >
                <Check size={16} className="text-emerald-400 mx-auto" />
              </motion.span>
            </div>
            <div className="text-center">
              {feature.chat ? <Check size={16} className="text-gray-500 mx-auto" /> : <X size={16} className="text-gray-700 mx-auto" />}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
