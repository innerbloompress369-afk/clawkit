"use client";

import { useState, useMemo } from "react";
import type { Package, Tier } from "@/lib/types";
import PackageCard from "./PackageCard";

interface PackageGridProps {
  packages: Package[];
}

const tierLabels: Record<Tier, string> = {
  A: "Tier A — Highest Demand",
  B: "Tier B — Strong Verticals",
  C: "Tier C — Growing Markets",
  D: "Tier D — Specialized",
};

export default function PackageGrid({ packages }: PackageGridProps) {
  const [search, setSearch] = useState("");
  const [tierFilter, setTierFilter] = useState<Tier | "all">("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const categories = useMemo(() => [...new Set(packages.map((p) => p.category))].sort(), [packages]);

  const filtered = useMemo(() => {
    return packages.filter((pkg) => {
      if (tierFilter !== "all" && pkg.tier !== tierFilter) return false;
      if (categoryFilter !== "all" && pkg.category !== categoryFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return pkg.name.toLowerCase().includes(q) || pkg.tagline.toLowerCase().includes(q) || pkg.tags.some((t) => t.includes(q));
      }
      return true;
    });
  }, [packages, search, tierFilter, categoryFilter]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input type="text" placeholder="Search packages..." value={search} onChange={(e) => setSearch(e.target.value)}
          className="bg-[#12121a] border border-gray-800 rounded-xl px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition flex-grow" />
        <select value={tierFilter} onChange={(e) => setTierFilter(e.target.value as Tier | "all")}
          className="bg-[#12121a] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-blue-500 transition">
          <option value="all">All Tiers</option>
          {(["A", "B", "C", "D"] as Tier[]).map((t) => (<option key={t} value={t}>{tierLabels[t]}</option>))}
        </select>
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}
          className="bg-[#12121a] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-blue-500 transition">
          <option value="all">All Categories</option>
          {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
        </select>
      </div>
      <p className="text-gray-500 text-sm mb-6">{filtered.length} package{filtered.length !== 1 ? "s" : ""} found</p>
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg, i) => (<PackageCard key={pkg.slug} pkg={pkg} index={i} />))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 mb-4">No packages match your filters.</p>
          <button onClick={() => { setSearch(""); setTierFilter("all"); setCategoryFilter("all"); }}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium">Clear filters</button>
        </div>
      )}
    </div>
  );
}
