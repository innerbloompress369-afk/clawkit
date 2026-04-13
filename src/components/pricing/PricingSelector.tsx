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
    ctaText: (price: number) => `Get Started — $${price}`,
    ctaHref: (slug?: string) => slug ? `/checkout/${slug}?tier=self-install` : "/packages?intent=purchase",
  },
  {
    id: "guided-install",
    name: "Guided Install",
    price: 199,
    description: "We walk you through it live",
    features: ["Everything in Self-Install", "1-hour live guided session", "Screen-share support", "Post-install verification"],
    popular: true,
    ctaText: () => "Book My Guided Install",
    ctaHref: (slug?: string) => slug ? `/checkout/${slug}?tier=guided-install` : "mailto:support@openclaw.com?subject=Guided%20Install",
  },
  {
    id: "done-for-you",
    name: "Done-For-You",
    price: 699,
    monthlyPrice: 49,
    description: "We handle everything. You get results.",
    features: ["3 months dedicated support included (a $237 value)", "Full remote installation — we do it for you", "Custom configuration for your business", "Onboarding walkthrough with your team", "Everything in Guided Install"],
    riskReversal: "If it's not working after install, we fix it. No exceptions.",
    ctaText: () => "Apply for Done-For-You",
    ctaHref: (slug?: string) => slug ? `/checkout/${slug}?tier=done-for-you` : "mailto:support@openclaw.com?subject=Done-For-You%20Application",
    premium: true,
  },
];

export default function PricingSelector({ slug, selfInstallPrice = 49 }: PricingSelectorProps) {
  const [selected, setSelected] = useState("guided-install");

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-16">
      {/* TODO: replace with real testimonials */}
      {!slug && (
        <div className="max-w-xl mx-auto mb-12 bg-[#12121a] rounded-2xl border border-gray-800 p-6 text-center">
          <blockquote className="text-gray-300 italic mb-3">
            &ldquo;I&apos;m not technical at all. I had the Home Services package running in under 20 minutes
            and it followed up with 3 customers I had forgotten about. Paid for itself the same day.&rdquo;
          </blockquote>
          <cite className="text-gray-500 text-sm not-italic">— Marcus T., HVAC contractor, Texas</cite>
          <div className="mt-2 inline-block bg-emerald-900/30 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full">
            Result: 3 recovered follow-ups &middot; Day 1
          </div>
        </div>
      )}

      {/* Price anchor */}
      {!slug && (
        <div className="max-w-lg mx-auto mb-8 text-center text-sm text-gray-400">
          AI setup consultants charge <strong className="text-white">$2,500–$15,000</strong> per project.
          Our packages start at <strong className="text-white">$49</strong> — and you own it forever.
        </div>
      )}

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
              {tier.riskReversal && (
                <p className="text-xs text-emerald-400/80 mb-4 italic">{tier.riskReversal}</p>
              )}
              <Link href={tier.ctaHref(slug)}
                className={`block text-center py-3 rounded-xl font-semibold transition ${
                  tier.premium
                    ? "border border-yellow-600/50 bg-yellow-900/10 hover:bg-yellow-900/20 text-yellow-300"
                    : isSelected
                      ? "bg-blue-600 hover:bg-blue-500 text-white"
                      : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}>
                {slug ? tier.ctaText(price!) : tier.ctaText(selfInstallPrice)}
              </Link>
              <p className="text-xs text-gray-600 text-center mt-3">&#9889; Average install time: 15 minutes</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
