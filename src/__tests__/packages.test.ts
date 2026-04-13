import { getAllPackages, getPackageBySlug, getPackagesByTier } from "@/lib/packages";
import type { Package } from "@/lib/types";

describe("Package data", () => {
  test("returns all 20 packages", () => {
    const packages = getAllPackages();
    expect(packages).toHaveLength(20);
  });

  test("every package has required fields", () => {
    const packages = getAllPackages();
    for (const pkg of packages) {
      expect(pkg.name).toBeTruthy();
      expect(pkg.slug).toBeTruthy();
      expect(pkg.tagline).toBeTruthy();
      expect(["A", "B", "C", "D"]).toContain(pkg.tier);
      expect(pkg.tierRank).toBeGreaterThan(0);
      expect(pkg.category).toBeTruthy();
      expect(pkg.pricing.selfInstall).toBeGreaterThan(0);
      expect(pkg.pricing.guidedInstall).toBeGreaterThan(0);
      expect(pkg.pricing.doneForYou).toBeGreaterThan(0);
      expect(["easy", "medium", "advanced"]).toContain(pkg.installDifficulty);
      expect(pkg.agents.length).toBeGreaterThan(0);
      expect(pkg.connectors.length).toBeGreaterThan(0);
      expect(pkg.firstMissions).toHaveLength(3);
    }
  });

  test("slugs are unique", () => {
    const packages = getAllPackages();
    const slugs = packages.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  test("getPackageBySlug returns correct package", () => {
    const pkg = getPackageBySlug("email-management");
    expect(pkg).toBeDefined();
    expect(pkg!.name).toBe("Email Management & Smart Outreach");
  });

  test("getPackageBySlug returns undefined for invalid slug", () => {
    const pkg = getPackageBySlug("nonexistent");
    expect(pkg).toBeUndefined();
  });

  test("getPackagesByTier returns only packages of that tier", () => {
    const tierA = getPackagesByTier("A");
    expect(tierA.length).toBe(5);
    for (const pkg of tierA) {
      expect(pkg.tier).toBe("A");
    }
  });
});
