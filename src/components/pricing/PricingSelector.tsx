"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingSelectorProps {
  slug?: string;
  selfInstallPrice?: number;
}

const tiers = [
  {
    id: "self-install",
    name: "Self-Install",
    priceKey: "selfInstall" as const,
    description: "Do it yourself with our guides",
    features: ["Complete package files", "Video install walkthrough", "Step-by-step documentation", "Troubleshooting guide"],
  },
  {
    id: "guided-install",
    name: "Guided Install",
    price: 199,
    description: "We walk you through it live",
    features: ["Everything in Self-Install", "1-hour live guided session", "Screen-share support", "Post-install verification"],
    popular: true,
  },
  {
    id: "done-for-you",
    name: "Done-For-You",
    price: 699,
    monthlyPrice: 49,
    description: "We handle everything",
    features: ["Everything in Guided Install", "Full remote installation", "Custom configuration", "Onboarding walkthrough", "3 months Pro support included"],
  },
];

export default function PricingSelector({ slug, selfInstallPrice = 49 }: PricingSelectorProps) {
  const [selected, setSelected] = useState("guided-install");

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Choose Your Install Experience</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Every tier includes the full package. Pick how much help you want with setup.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tiers.map((tier) => {
          const isSelected = selected === tier.id;
          const price = tier.priceKey ? selfInstallPrice : tier.price;
          return (
            <div key={tier.id} onClick={() => setSelected(tier.id)}
              className={`relative rounded-2xl p-6 cursor-pointer transition-all ${isSelected ? "bg-blue-600/10 border-2 border-blue-500" : "bg-[#12121a] border border-gray-800 hover:border-gray-700"}`}>
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular</span>
              )}
              <h3 className="text-lg font-bold mb-1">{tier.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{tier.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">${price}</span>
                {tier.monthlyPrice && <span className="text-gray-500 text-sm"> + ${tier.monthlyPrice}/mo</span>}
              </div>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check size={16} className="text-emerald-400 mt-0.5 shrink-0" />{feature}
                  </li>
                ))}
              </ul>
              <Link href={slug ? `/checkout/${slug}?tier=${tier.id}` : "/packages"}
                className={`block text-center py-3 rounded-xl font-semibold transition ${isSelected ? "bg-blue-600 hover:bg-blue-500 text-white" : "bg-gray-800 hover:bg-gray-700 text-gray-300"}`}>
                {slug ? "Get This Package" : "Browse Packages"}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
