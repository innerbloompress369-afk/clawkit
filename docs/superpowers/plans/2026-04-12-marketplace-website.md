# OpenClaw Marketplace Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the marketplace website where non-technical users browse, discover, and select pre-built OpenClaw packages for their business.

**Architecture:** Next.js 14 App Router with Tailwind CSS. Package data lives in TypeScript files (no database). Quiz logic is client-side scoring. Dark theme with emerald/blue accents matching the approved mockup.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Lucide React icons, Framer Motion (minimal)

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout: metadata, fonts, dark theme
│   ├── page.tsx                      # Landing page (hero, trust bar, featured, how-it-works, pricing, FAQ)
│   ├── globals.css                   # Tailwind directives + custom styles
│   ├── packages/
│   │   ├── page.tsx                  # Catalog: grid of all packages + filters
│   │   └── [slug]/
│   │       └── page.tsx              # Package detail page
│   ├── quiz/
│   │   ├── page.tsx                  # Guided selection quiz
│   │   └── results/
│   │       └── page.tsx              # Quiz results with recommendations
│   ├── checkout/
│   │   └── [slug]/
│   │       └── page.tsx              # Purchase page (placeholder for V1)
│   └── success/
│       └── page.tsx                  # Post-purchase page (placeholder for V1)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                # Sticky top nav with blur backdrop
│   │   └── Footer.tsx                # Site footer
│   ├── packages/
│   │   ├── PackageCard.tsx           # Card for catalog grid
│   │   ├── PackageGrid.tsx           # Grid with filter controls
│   │   └── ArchitectureDiagram.tsx   # Visual render of agents/connectors/workflows
│   ├── pricing/
│   │   └── PricingSelector.tsx       # 3-tier pricing selector component
│   ├── quiz/
│   │   └── QuizFlow.tsx              # Multi-step quiz with state machine
│   ├── marketing/
│   │   ├── TrustBar.tsx              # Security/cost/install stats
│   │   ├── HowItWorks.tsx            # 3-step visual explainer
│   │   └── ComparisonTable.tsx       # Chat vs Intelligent Assistant
│   └── ui/
│       ├── DifficultyBadge.tsx       # Easy/Medium/Advanced indicator
│       └── TierBadge.tsx             # A/B/C/D tier indicator
├── lib/
│   ├── types.ts                      # All TypeScript types
│   ├── packages.ts                   # Package data (all 20) + helper functions
│   └── quiz-logic.ts                 # Quiz scoring and matching
└── __tests__/
    ├── packages.test.ts              # Package data integrity tests
    └── quiz-logic.test.ts            # Quiz scoring tests
```

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`, `postcss.config.mjs`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd /Users/mindhackedai/Desktop/superpowers-marketplace-main
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git --use-npm
```

When prompted about overwriting existing files, choose yes. The `--no-git` flag prevents re-initializing git.

Expected: Project scaffolded with `src/app/` directory structure.

- [ ] **Step 2: Install dependencies**

```bash
npm install lucide-react framer-motion
npm install -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom @types/jest ts-jest
```

- [ ] **Step 3: Configure Jest**

Create `jest.config.ts`:

```typescript
import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default createJestConfig(config);
```

Add to `package.json` scripts:

```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 4: Set up global styles**

Replace `src/app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

@layer base {
  body {
    @apply bg-[#0a0a0f] text-slate-200 antialiased;
    font-family: 'Inter', system-ui, sans-serif;
  }
}

@layer components {
  .gradient-border {
    @apply relative border border-transparent;
  }
  .gradient-border::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6, #f97316);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .nav-blur {
    backdrop-filter: blur(12px);
    background: rgba(10, 10, 15, 0.8);
  }

  .section-divider {
    @apply my-20;
    height: 1px;
    background: linear-gradient(90deg, transparent, #1e293b, transparent);
  }

  .glow {
    box-shadow: 0 0 40px rgba(59, 130, 246, 0.15);
  }
}
```

- [ ] **Step 5: Set up root layout**

Replace `src/app/layout.tsx` with:

```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenClaw Marketplace — Business-Ready AI Systems",
  description:
    "Pre-built, security-vetted OpenClaw packages for your specific business. Pick your use case. Install in minutes. Get results today.",
  openGraph: {
    title: "OpenClaw Marketplace",
    description:
      "Pre-built, security-vetted AI systems for your business. Install in minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 6: Create placeholder homepage**

Replace `src/app/page.tsx` with:

```typescript
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">OpenClaw Marketplace</h1>
    </main>
  );
}
```

- [ ] **Step 7: Verify build**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 8: Commit**

```bash
git add src/ package.json package-lock.json tsconfig.json tailwind.config.ts next.config.ts postcss.config.mjs jest.config.ts .eslintrc.json
git commit -m "feat: scaffold Next.js project with Tailwind, Jest, and dark theme"
```

---

## Task 2: Types and Package Data

**Files:**
- Create: `src/lib/types.ts`
- Create: `src/lib/packages.ts`
- Create: `src/__tests__/packages.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/__tests__/packages.test.ts`:

```typescript
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern=packages.test
```

Expected: FAIL — modules not found.

- [ ] **Step 3: Create types**

Create `src/lib/types.ts`:

```typescript
export type Tier = "A" | "B" | "C" | "D";
export type Difficulty = "easy" | "medium" | "advanced";
export type PackageStatus = "available" | "coming-soon";

export interface PackagePricing {
  selfInstall: number;
  guidedInstall: number;
  doneForYou: number;
  doneForYouMonthly: number;
}

export interface MonthlyCostEstimate {
  low: number;
  high: number;
  workloadType: "simple-heavy" | "balanced" | "complex-heavy";
}

export interface FirstMission {
  title: string;
  description: string;
  expectedResult: string;
  estimatedMinutes: number;
}

export interface AgentInfo {
  name: string;
  role: string;
  routerTier: "SIMPLE" | "MEDIUM" | "COMPLEX" | "REASONING";
}

export interface ConnectorInfo {
  name: string;
  purpose: string;
}

export interface WorkflowInfo {
  name: string;
  trigger: string;
  steps: string[];
}

export interface Package {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  tier: Tier;
  tierRank: number;
  category: string;
  tags: string[];
  icon: string;
  pricing: PackagePricing;
  installDifficulty: Difficulty;
  estimatedInstallMinutes: number;
  estimatedMonthlyCost: MonthlyCostEstimate;
  agents: AgentInfo[];
  connectors: ConnectorInfo[];
  workflows: WorkflowInfo[];
  firstMissions: FirstMission[];
  status: PackageStatus;
}

export interface QuizAnswer {
  questionId: string;
  answerId: string;
}

export interface QuizResult {
  package: Package;
  score: number;
  reason: string;
}
```

- [ ] **Step 4: Create package data with all 20 packages**

Create `src/lib/packages.ts`:

```typescript
import type { Package, Tier } from "./types";

const packages: Package[] = [
  // --- TIER A: Highest Demand / Clearest ROI ---
  {
    name: "Email Management & Smart Outreach",
    slug: "email-management",
    tagline: "Tame your inbox and automate follow-ups",
    description:
      "Triage incoming email, draft responses, schedule follow-ups, and manage outreach campaigns — all on autopilot. Your inbox works for you, not the other way around.",
    tier: "A",
    tierRank: 1,
    category: "Productivity",
    tags: ["email", "outreach", "follow-up", "automation", "inbox"],
    icon: "Mail",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy",
    estimatedInstallMinutes: 10,
    estimatedMonthlyCost: { low: 15, high: 40, workloadType: "simple-heavy" },
    agents: [
      { name: "Inbox Triager", role: "Categorizes and prioritizes incoming email", routerTier: "SIMPLE" },
      { name: "Draft Composer", role: "Writes contextual email replies", routerTier: "MEDIUM" },
      { name: "Follow-Up Scheduler", role: "Tracks threads and sends timely follow-ups", routerTier: "SIMPLE" },
    ],
    connectors: [
      { name: "Email (IMAP/SMTP)", purpose: "Read and send email" },
      { name: "Calendar", purpose: "Schedule follow-ups and meetings" },
    ],
    workflows: [
      { name: "Inbox Triage", trigger: "New email received", steps: ["Categorize", "Prioritize", "Draft response", "Queue for review"] },
      { name: "Outreach Campaign", trigger: "Campaign scheduled", steps: ["Personalize template", "Send", "Track opens", "Follow up"] },
    ],
    firstMissions: [
      { title: "Triage Your Inbox", description: "Forward 10 emails and watch the system categorize and prioritize them", expectedResult: "Emails sorted into action/FYI/archive with suggested responses", estimatedMinutes: 5 },
      { title: "Auto-Draft a Reply", description: "Pick a customer email and let the system draft a professional response", expectedResult: "Ready-to-send reply matching your tone and context", estimatedMinutes: 3 },
      { title: "Schedule a Follow-Up", description: "Mark a thread for follow-up and set a timeline", expectedResult: "Automatic follow-up sent if no reply within your timeframe", estimatedMinutes: 2 },
    ],
    status: "available",
  },
  {
    name: "Social Media & Content Engine",
    slug: "social-media",
    tagline: "Plan, create, and schedule content across platforms",
    description:
      "Content planning, creation, scheduling, and engagement tracking for every major platform. From idea to published post — the system handles the heavy lifting.",
    tier: "A",
    tierRank: 2,
    category: "Marketing",
    tags: ["social media", "content", "scheduling", "marketing", "engagement"],
    icon: "Share2",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy",
    estimatedInstallMinutes: 12,
    estimatedMonthlyCost: { low: 25, high: 60, workloadType: "balanced" },
    agents: [
      { name: "Content Planner", role: "Creates content calendars aligned to strategy", routerTier: "COMPLEX" },
      { name: "Post Writer", role: "Writes platform-specific posts from briefs", routerTier: "MEDIUM" },
      { name: "Engagement Monitor", role: "Tracks responses and suggests replies", routerTier: "SIMPLE" },
    ],
    connectors: [
      { name: "Social Platforms", purpose: "Publish and monitor posts" },
      { name: "Image Generation", purpose: "Create post visuals" },
      { name: "Analytics", purpose: "Track engagement metrics" },
    ],
    workflows: [
      { name: "Weekly Content Plan", trigger: "Monday 8am", steps: ["Analyze trends", "Generate ideas", "Create calendar", "Queue for approval"] },
      { name: "Publish & Monitor", trigger: "Scheduled time", steps: ["Publish post", "Monitor engagement", "Respond to comments"] },
    ],
    firstMissions: [
      { title: "Generate a Week of Content", description: "Describe your business and watch the system plan 7 days of posts", expectedResult: "Content calendar with 7 platform-ready posts", estimatedMinutes: 5 },
      { title: "Write a Post From Scratch", description: "Give a topic and target platform, get a polished post", expectedResult: "Ready-to-publish post with hashtags and optimal timing", estimatedMinutes: 3 },
      { title: "Analyze Your Best Content", description: "Connect your accounts and see what's working", expectedResult: "Performance report with actionable recommendations", estimatedMinutes: 5 },
    ],
    status: "available",
  },
  {
    name: "Lead Generation & Sales Pipeline",
    slug: "lead-generation",
    tagline: "Capture, qualify, and close leads on autopilot",
    description:
      "Capture leads from any channel, qualify them automatically, follow up on schedule, and track your entire pipeline. Never miss a prospect again.",
    tier: "A",
    tierRank: 3,
    category: "Sales & Marketing",
    tags: ["leads", "sales", "crm", "follow-up", "pipeline", "qualification"],
    icon: "Target",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy",
    estimatedInstallMinutes: 12,
    estimatedMonthlyCost: { low: 30, high: 80, workloadType: "balanced" },
    agents: [
      { name: "Lead Qualifier", role: "Scores and qualifies incoming leads", routerTier: "COMPLEX" },
      { name: "Follow-Up Manager", role: "Sends timely, personalized follow-ups", routerTier: "SIMPLE" },
      { name: "Pipeline Tracker", role: "Monitors deal stages and flags stalled opportunities", routerTier: "MEDIUM" },
    ],
    connectors: [
      { name: "Email", purpose: "Inbound capture + outbound follow-up" },
      { name: "CRM", purpose: "Pipeline management and contact storage" },
      { name: "SMS", purpose: "Quick follow-up messages" },
      { name: "Calendar", purpose: "Book meetings with qualified leads" },
    ],
    workflows: [
      { name: "New Lead Capture", trigger: "Email received / Form submission", steps: ["Qualify", "Score", "Route", "Follow up"] },
      { name: "Pipeline Review", trigger: "Daily 9am", steps: ["Check stalled deals", "Send reminders", "Update forecasts"] },
    ],
    firstMissions: [
      { title: "Capture Your First Lead", description: "Forward a customer inquiry and watch the system qualify and respond", expectedResult: "Lead scored, follow-up scheduled, pipeline entry created", estimatedMinutes: 5 },
      { title: "Automate a Follow-Up", description: "Set up a 3-touch follow-up sequence for a prospect", expectedResult: "Automated emails sent at day 1, 3, and 7", estimatedMinutes: 3 },
      { title: "Review Your Pipeline", description: "Ask the system to summarize your current pipeline", expectedResult: "Pipeline summary with deals by stage and next actions", estimatedMinutes: 2 },
    ],
    status: "available",
  },
  {
    name: "Customer Follow-Up & Retention",
    slug: "customer-follow-up",
    tagline: "Keep customers coming back automatically",
    description:
      "Post-service follow-ups, review requests, re-engagement campaigns, and retention workflows. Turn one-time buyers into repeat customers.",
    tier: "A",
    tierRank: 4,
    category: "Customer Success",
    tags: ["follow-up", "retention", "reviews", "re-engagement", "loyalty"],
    icon: "Heart",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy",
    estimatedInstallMinutes: 10,
    estimatedMonthlyCost: { low: 15, high: 35, workloadType: "simple-heavy" },
    agents: [
      { name: "Follow-Up Agent", role: "Sends timely post-service check-ins", routerTier: "SIMPLE" },
      { name: "Review Requester", role: "Asks for reviews at the optimal moment", routerTier: "SIMPLE" },
      { name: "Re-Engagement Agent", role: "Identifies and re-activates dormant customers", routerTier: "MEDIUM" },
    ],
    connectors: [
      { name: "Email", purpose: "Follow-up messages and review requests" },
      { name: "SMS", purpose: "Quick check-ins and reminders" },
      { name: "Review Platforms", purpose: "Google, Yelp review prompts" },
    ],
    workflows: [
      { name: "Post-Service Follow-Up", trigger: "Service completed", steps: ["Wait 24h", "Send check-in", "Request review if positive", "Schedule next touch"] },
      { name: "Win-Back Campaign", trigger: "90 days no activity", steps: ["Identify dormant customers", "Personalize offer", "Send sequence", "Track re-engagement"] },
    ],
    firstMissions: [
      { title: "Send Your First Follow-Up", description: "Enter a recent customer and trigger a post-service check-in", expectedResult: "Personalized follow-up sent with review request queued", estimatedMinutes: 3 },
      { title: "Request a Review", description: "Pick a happy customer and send a review request", expectedResult: "Review request sent to Google/Yelp with direct link", estimatedMinutes: 2 },
      { title: "Find Dormant Customers", description: "Ask the system to identify customers who haven't returned", expectedResult: "List of re-engagement candidates with suggested offers", estimatedMinutes: 3 },
    ],
    status: "available",
  },
  {
    name: "Scheduling & Calendar Command Center",
    slug: "scheduling",
    tagline: "Never double-book or miss an appointment again",
    description:
      "Appointment booking, conflict resolution, prep notes, and smart scheduling. Your calendar manages itself so you can focus on the work.",
    tier: "A",
    tierRank: 5,
    category: "Productivity",
    tags: ["scheduling", "calendar", "appointments", "booking", "time management"],
    icon: "Calendar",
    pricing: { selfInstall: 29, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy",
    estimatedInstallMinutes: 8,
    estimatedMonthlyCost: { low: 10, high: 25, workloadType: "simple-heavy" },
    agents: [
      { name: "Scheduling Agent", role: "Manages bookings and resolves conflicts", routerTier: "SIMPLE" },
      { name: "Prep Agent", role: "Creates meeting prep notes and agendas", routerTier: "MEDIUM" },
      { name: "Reminder Agent", role: "Sends confirmations and reduces no-shows", routerTier: "SIMPLE" },
    ],
    connectors: [
      { name: "Calendar (Google/Outlook)", purpose: "Read and write calendar events" },
      { name: "Email", purpose: "Send confirmations and prep notes" },
      { name: "SMS", purpose: "Appointment reminders" },
    ],
    workflows: [
      { name: "Book Appointment", trigger: "Booking request received", steps: ["Check availability", "Resolve conflicts", "Book slot", "Send confirmation"] },
      { name: "Meeting Prep", trigger: "30 min before meeting", steps: ["Gather context", "Create prep notes", "Send to attendee"] },
    ],
    firstMissions: [
      { title: "Book Your First Appointment", description: "Send a scheduling request and watch the system find the best slot", expectedResult: "Appointment booked with confirmation sent", estimatedMinutes: 3 },
      { title: "Get Meeting Prep Notes", description: "Pick an upcoming meeting and get an auto-generated brief", expectedResult: "Prep notes with context, agenda, and talking points", estimatedMinutes: 2 },
      { title: "Set Up Reminders", description: "Configure no-show prevention for your next 5 appointments", expectedResult: "SMS/email reminders scheduled 24h and 1h before each", estimatedMinutes: 3 },
    ],
    status: "available",
  },

  // --- TIER B: Strong Vertical Demand ---
  {
    name: "Home Services & Trades",
    slug: "home-services",
    tagline: "Run your trades business like a tech company",
    description:
      "Job scheduling, estimate follow-up, review requests, dispatch, and crew management — built for HVAC, plumbing, electrical, and contractors.",
    tier: "B",
    tierRank: 6,
    category: "Home Services",
    tags: ["hvac", "plumbing", "electrical", "contractor", "trades", "dispatch"],
    icon: "Wrench",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy",
    estimatedInstallMinutes: 12,
    estimatedMonthlyCost: { low: 20, high: 50, workloadType: "simple-heavy" },
    agents: [
      { name: "Dispatch Manager", role: "Schedules jobs and assigns crews", routerTier: "MEDIUM" },
      { name: "Estimate Follow-Up", role: "Tracks quotes and follows up with prospects", routerTier: "SIMPLE" },
      { name: "Review Generator", role: "Requests reviews after completed jobs", routerTier: "SIMPLE" },
    ],
    connectors: [
      { name: "Calendar", purpose: "Job scheduling and crew calendars" },
      { name: "SMS", purpose: "Customer updates and crew notifications" },
      { name: "Email", purpose: "Estimates, invoices, follow-ups" },
      { name: "Review Platforms", purpose: "Google/Yelp review collection" },
    ],
    workflows: [
      { name: "New Job Request", trigger: "Call/email received", steps: ["Capture details", "Check availability", "Schedule crew", "Send confirmation"] },
      { name: "Post-Job Follow-Up", trigger: "Job marked complete", steps: ["Send invoice", "Request review", "Schedule maintenance check"] },
    ],
    firstMissions: [
      { title: "Schedule Your First Job", description: "Enter a job request and let the system assign a crew and time", expectedResult: "Job scheduled, crew notified, customer confirmation sent", estimatedMinutes: 5 },
      { title: "Follow Up on an Estimate", description: "Enter a pending estimate and trigger the follow-up sequence", expectedResult: "Follow-up sent with updated availability", estimatedMinutes: 3 },
      { title: "Request a Review", description: "Mark a job complete and trigger the review request", expectedResult: "Review request sent to customer with direct link", estimatedMinutes: 2 },
    ],
    status: "available",
  },
  {
    name: "Real Estate Agent Assistant",
    slug: "real-estate",
    tagline: "Close more deals with less manual work",
    description:
      "Listing management, buyer/seller follow-up, market research, and CMA automation — built for realtors and property managers.",
    tier: "B",
    tierRank: 7,
    category: "Real Estate",
    tags: ["real estate", "listings", "buyers", "sellers", "property", "CMA"],
    icon: "Home",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium",
    estimatedInstallMinutes: 15,
    estimatedMonthlyCost: { low: 35, high: 80, workloadType: "balanced" },
    agents: [
      { name: "Listing Manager", role: "Tracks listings and updates across platforms", routerTier: "MEDIUM" },
      { name: "Client Follow-Up", role: "Nurtures buyer and seller relationships", routerTier: "SIMPLE" },
      { name: "Market Researcher", role: "Pulls comps and generates CMA reports", routerTier: "REASONING" },
    ],
    connectors: [
      { name: "Email", purpose: "Client communication and drip campaigns" },
      { name: "Calendar", purpose: "Showing schedules and open houses" },
      { name: "CRM", purpose: "Contact and deal management" },
    ],
    workflows: [
      { name: "New Listing", trigger: "Listing added", steps: ["Create marketing materials", "Schedule showings", "Set up drip campaign"] },
      { name: "Buyer Follow-Up", trigger: "Showing completed", steps: ["Send thank you", "Gather feedback", "Suggest next properties"] },
    ],
    firstMissions: [
      { title: "Add a Listing", description: "Enter a property and let the system create marketing materials", expectedResult: "Listing description, social post, and email template generated", estimatedMinutes: 5 },
      { title: "Follow Up With a Buyer", description: "Enter a buyer contact and trigger the nurture sequence", expectedResult: "Personalized follow-up with matching property suggestions", estimatedMinutes: 3 },
      { title: "Run a Market Analysis", description: "Enter an address and get comparable sales data", expectedResult: "CMA report with recent comps and suggested pricing", estimatedMinutes: 5 },
    ],
    status: "available",
  },
  {
    name: "Legal Practice Assistant",
    slug: "legal-practice",
    tagline: "More billable hours, less admin work",
    description:
      "Contract review, client intake, deadline tracking, research assistance, and ethics checking — built for solo attorneys and small firms.",
    tier: "B",
    tierRank: 8,
    category: "Legal",
    tags: ["legal", "contracts", "law", "compliance", "client intake"],
    icon: "Scale",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium",
    estimatedInstallMinutes: 15,
    estimatedMonthlyCost: { low: 50, high: 120, workloadType: "complex-heavy" },
    agents: [
      { name: "Contract Reviewer", role: "Analyzes contracts for risks and key terms", routerTier: "REASONING" },
      { name: "Intake Manager", role: "Handles new client onboarding and conflict checks", routerTier: "MEDIUM" },
      { name: "Deadline Tracker", role: "Monitors filing dates and statute of limitations", routerTier: "SIMPLE" },
    ],
    connectors: [
      { name: "Email", purpose: "Client communication" },
      { name: "Calendar", purpose: "Court dates and deadlines" },
      { name: "Document Storage", purpose: "Case files and contracts" },
    ],
    workflows: [
      { name: "New Client Intake", trigger: "Inquiry received", steps: ["Conflict check", "Gather information", "Generate engagement letter", "Set up matter"] },
      { name: "Contract Review", trigger: "Document uploaded", steps: ["Extract key terms", "Flag risks", "Generate summary", "Suggest edits"] },
    ],
    firstMissions: [
      { title: "Review a Contract", description: "Upload a contract and get an automated risk analysis", expectedResult: "Summary of key terms, flagged risks, and suggested edits", estimatedMinutes: 5 },
      { title: "Intake a New Client", description: "Enter a prospective client and run the intake workflow", expectedResult: "Conflict check complete, engagement letter drafted", estimatedMinutes: 5 },
      { title: "Check Your Deadlines", description: "Ask the system to audit your upcoming deadlines", expectedResult: "Calendar of critical dates with reminders set", estimatedMinutes: 3 },
    ],
    status: "available",
  },
  {
    name: "Healthcare Practice Manager",
    slug: "healthcare",
    tagline: "Better patient care, less paperwork",
    description:
      "Patient follow-up, HIPAA-compliant workflows, scheduling, and documentation — built for clinics and solo practitioners.",
    tier: "B",
    tierRank: 9,
    category: "Healthcare",
    tags: ["healthcare", "patients", "HIPAA", "clinic", "medical", "compliance"],
    icon: "Stethoscope",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "advanced",
    estimatedInstallMinutes: 20,
    estimatedMonthlyCost: { low: 45, high: 110, workloadType: "complex-heavy" },
    agents: [
      { name: "Patient Follow-Up", role: "Sends post-visit instructions and check-ins", routerTier: "MEDIUM" },
      { name: "Compliance Monitor", role: "Ensures all workflows meet HIPAA requirements", routerTier: "REASONING" },
      { name: "Documentation Agent", role: "Assists with visit notes and referral letters", routerTier: "COMPLEX" },
    ],
    connectors: [
      { name: "Email (encrypted)", purpose: "HIPAA-compliant patient communication" },
      { name: "Calendar", purpose: "Appointment scheduling" },
      { name: "SMS (compliant)", purpose: "Appointment reminders only" },
    ],
    workflows: [
      { name: "Post-Visit Follow-Up", trigger: "Visit completed", steps: ["Send care instructions", "Schedule follow-up", "Check compliance"] },
      { name: "Appointment Reminder", trigger: "48h before appointment", steps: ["Send reminder", "Confirm attendance", "Prepare visit notes"] },
    ],
    firstMissions: [
      { title: "Send a Patient Follow-Up", description: "Enter a recent visit and trigger the follow-up workflow", expectedResult: "HIPAA-compliant follow-up sent with care instructions", estimatedMinutes: 5 },
      { title: "Schedule a Patient", description: "Book an appointment and set up reminders", expectedResult: "Appointment booked, reminders scheduled, prep notes queued", estimatedMinutes: 3 },
      { title: "Run a Compliance Check", description: "Audit your current workflows for HIPAA compliance", expectedResult: "Compliance report with any gaps flagged", estimatedMinutes: 5 },
    ],
    status: "available",
  },
  {
    name: "Financial Advisor / Bookkeeper",
    slug: "financial-advisor",
    tagline: "Automate reporting and focus on advising",
    description:
      "Client reporting, expense tracking, tax prep support, and financial analysis — built for accountants and financial advisors.",
    tier: "B",
    tierRank: 10,
    category: "Finance",
    tags: ["finance", "accounting", "tax", "bookkeeping", "reporting"],
    icon: "DollarSign",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium",
    estimatedInstallMinutes: 15,
    estimatedMonthlyCost: { low: 35, high: 85, workloadType: "balanced" },
    agents: [
      { name: "Report Generator", role: "Creates client financial summaries and reports", routerTier: "COMPLEX" },
      { name: "Expense Tracker", role: "Categorizes and tracks business expenses", routerTier: "SIMPLE" },
      { name: "Tax Prep Assistant", role: "Organizes documents and identifies deductions", routerTier: "REASONING" },
    ],
    connectors: [
      { name: "Email", purpose: "Client communication and report delivery" },
      { name: "Spreadsheets", purpose: "Financial data import/export" },
      { name: "Document Storage", purpose: "Tax documents and receipts" },
    ],
    workflows: [
      { name: "Monthly Report", trigger: "Month end", steps: ["Gather data", "Generate report", "Review", "Send to client"] },
      { name: "Expense Processing", trigger: "Receipt uploaded", steps: ["Extract data", "Categorize", "Record", "Flag anomalies"] },
    ],
    firstMissions: [
      { title: "Generate a Client Report", description: "Enter sample financial data and generate a professional report", expectedResult: "Formatted financial summary ready to send", estimatedMinutes: 5 },
      { title: "Categorize Expenses", description: "Upload a batch of receipts and let the system sort them", expectedResult: "Expenses categorized by type with totals", estimatedMinutes: 3 },
      { title: "Start Tax Prep", description: "Ask the system to create a tax document checklist for a client", expectedResult: "Personalized checklist with status tracking", estimatedMinutes: 5 },
    ],
    status: "available",
  },

  // --- TIER C: Growing / Underserved ---
  {
    name: "Agency & Freelancer Ops",
    slug: "agency-ops",
    tagline: "Run your agency without the chaos",
    description:
      "Project tracking, client communication, and deliverable management — built for creative agencies and freelancers.",
    tier: "C",
    tierRank: 11,
    category: "Professional Services",
    tags: ["agency", "freelancer", "projects", "clients", "deliverables"],
    icon: "Briefcase",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy",
    estimatedInstallMinutes: 12,
    estimatedMonthlyCost: { low: 25, high: 60, workloadType: "balanced" },
    agents: [
      { name: "Project Tracker", role: "Monitors deadlines and deliverable status", routerTier: "SIMPLE" },
      { name: "Client Communicator", role: "Manages client updates and expectations", routerTier: "MEDIUM" },
      { name: "Scope Manager", role: "Tracks scope changes and flags risks", routerTier: "COMPLEX" },
    ],
    connectors: [
      { name: "Email", purpose: "Client communication" },
      { name: "Calendar", purpose: "Deadlines and milestones" },
      { name: "Project Management", purpose: "Task and deliverable tracking" },
    ],
    workflows: [
      { name: "New Project Setup", trigger: "Contract signed", steps: ["Create project", "Set milestones", "Assign tasks", "Send kickoff email"] },
      { name: "Weekly Status Update", trigger: "Friday 4pm", steps: ["Gather progress", "Draft update", "Send to client"] },
    ],
    firstMissions: [
      { title: "Set Up a Project", description: "Enter a new project and let the system create the structure", expectedResult: "Project created with milestones, tasks, and client notified", estimatedMinutes: 5 },
      { title: "Send a Client Update", description: "Trigger a weekly status report for an active project", expectedResult: "Professional status email with progress summary", estimatedMinutes: 3 },
      { title: "Track a Deadline", description: "Add a deliverable deadline and get reminder sequences", expectedResult: "Reminders set at 7d, 3d, and 1d before deadline", estimatedMinutes: 2 },
    ],
    status: "available",
  },
  {
    name: "E-Commerce & Online Store",
    slug: "ecommerce",
    tagline: "Sell more with less manual work",
    description:
      "Product listings, inventory management, customer service automation, and marketing — built for Shopify, Etsy, and DTC sellers.",
    tier: "C",
    tierRank: 12,
    category: "E-Commerce",
    tags: ["ecommerce", "shopify", "etsy", "products", "inventory", "marketing"],
    icon: "ShoppingCart",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium",
    estimatedInstallMinutes: 15,
    estimatedMonthlyCost: { low: 30, high: 70, workloadType: "balanced" },
    agents: [
      { name: "Listing Optimizer", role: "Improves product titles, descriptions, and SEO", routerTier: "MEDIUM" },
      { name: "Customer Service Bot", role: "Handles common support questions", routerTier: "SIMPLE" },
      { name: "Marketing Automator", role: "Creates and schedules promotional campaigns", routerTier: "COMPLEX" },
    ],
    connectors: [
      { name: "Shopify/Etsy API", purpose: "Product and order management" },
      { name: "Email", purpose: "Customer communication and marketing" },
      { name: "Analytics", purpose: "Sales and traffic tracking" },
    ],
    workflows: [
      { name: "New Product Launch", trigger: "Product added", steps: ["Optimize listing", "Create social posts", "Schedule email campaign"] },
      { name: "Order Follow-Up", trigger: "Order delivered", steps: ["Send thank you", "Request review", "Suggest related products"] },
    ],
    firstMissions: [
      { title: "Optimize a Listing", description: "Pick a product and let the system rewrite the title and description", expectedResult: "SEO-optimized listing with improved copy", estimatedMinutes: 5 },
      { title: "Set Up Auto-Replies", description: "Configure responses for your top 5 support questions", expectedResult: "Auto-replies active for common inquiries", estimatedMinutes: 5 },
      { title: "Plan a Promotion", description: "Describe a sale and let the system create the campaign", expectedResult: "Email, social post, and discount code ready to launch", estimatedMinutes: 5 },
    ],
    status: "available",
  },
  {
    name: "Customer Support & Help Desk",
    slug: "customer-support",
    tagline: "Resolve tickets faster, keep customers happier",
    description:
      "Ticket triage, knowledge base management, escalation workflows, and response drafting — for any business with support volume.",
    tier: "C",
    tierRank: 13,
    category: "Customer Success",
    tags: ["support", "help desk", "tickets", "knowledge base", "customer service"],
    icon: "Headphones",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy",
    estimatedInstallMinutes: 10,
    estimatedMonthlyCost: { low: 20, high: 50, workloadType: "simple-heavy" },
    agents: [
      { name: "Ticket Triager", role: "Categorizes and prioritizes incoming tickets", routerTier: "SIMPLE" },
      { name: "Response Drafter", role: "Writes contextual replies using knowledge base", routerTier: "MEDIUM" },
      { name: "Escalation Manager", role: "Routes complex issues to the right team", routerTier: "SIMPLE" },
    ],
    connectors: [
      { name: "Email", purpose: "Ticket intake and responses" },
      { name: "Knowledge Base", purpose: "Answer lookup and article suggestions" },
      { name: "Chat", purpose: "Live support integration" },
    ],
    workflows: [
      { name: "New Ticket", trigger: "Support request received", steps: ["Categorize", "Search knowledge base", "Draft response", "Route if needed"] },
      { name: "Escalation", trigger: "Ticket unresolved 24h", steps: ["Flag", "Notify team", "Provide context summary"] },
    ],
    firstMissions: [
      { title: "Triage a Ticket", description: "Submit a sample support request and watch it get categorized", expectedResult: "Ticket categorized, priority set, response drafted", estimatedMinutes: 3 },
      { title: "Draft a Response", description: "Pick a common question and let the system answer it", expectedResult: "Professional response using your knowledge base", estimatedMinutes: 2 },
      { title: "Set Up Escalation", description: "Configure escalation rules for your team", expectedResult: "Rules active: unresolved tickets escalate after 24h", estimatedMinutes: 5 },
    ],
    status: "available",
  },
  {
    name: "Personal Productivity & Task Manager",
    slug: "personal-productivity",
    tagline: "Your AI-powered executive assistant",
    description:
      "Task capture, prioritization, daily briefings, and project tracking — for knowledge workers who want to focus on what matters.",
    tier: "C",
    tierRank: 14,
    category: "Productivity",
    tags: ["tasks", "productivity", "planning", "briefings", "project management"],
    icon: "CheckSquare",
    pricing: { selfInstall: 29, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy",
    estimatedInstallMinutes: 8,
    estimatedMonthlyCost: { low: 10, high: 30, workloadType: "simple-heavy" },
    agents: [
      { name: "Task Manager", role: "Captures, organizes, and prioritizes tasks", routerTier: "SIMPLE" },
      { name: "Daily Briefer", role: "Creates morning briefings with priorities and calendar", routerTier: "MEDIUM" },
      { name: "Project Tracker", role: "Monitors project progress and flags blockers", routerTier: "MEDIUM" },
    ],
    connectors: [
      { name: "Calendar", purpose: "Schedule integration" },
      { name: "Email", purpose: "Task extraction from emails" },
      { name: "Notes", purpose: "Knowledge capture" },
    ],
    workflows: [
      { name: "Morning Briefing", trigger: "Daily 7am", steps: ["Review calendar", "Prioritize tasks", "Generate briefing", "Send summary"] },
      { name: "Task Capture", trigger: "On demand", steps: ["Extract task", "Set priority", "Assign deadline", "Add to project"] },
    ],
    firstMissions: [
      { title: "Get Your Morning Briefing", description: "Run the morning briefing and see your day organized", expectedResult: "Prioritized task list with calendar overview", estimatedMinutes: 2 },
      { title: "Capture Tasks From Email", description: "Forward 5 emails and let the system extract action items", expectedResult: "Tasks created with deadlines and priorities set", estimatedMinutes: 3 },
      { title: "Set Up a Project", description: "Describe a project and let the system create the task breakdown", expectedResult: "Project with milestones and tracked tasks", estimatedMinutes: 5 },
    ],
    status: "available",
  },
  {
    name: "Knowledge Base & Research",
    slug: "knowledge-base",
    tagline: "Turn information overload into actionable knowledge",
    description:
      "Document analysis, research synthesis, and knowledge organization — for consultants, researchers, and analysts.",
    tier: "C",
    tierRank: 15,
    category: "Research",
    tags: ["research", "knowledge", "documents", "analysis", "synthesis"],
    icon: "BookOpen",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium",
    estimatedInstallMinutes: 12,
    estimatedMonthlyCost: { low: 40, high: 100, workloadType: "complex-heavy" },
    agents: [
      { name: "Document Analyzer", role: "Extracts key insights from uploaded documents", routerTier: "REASONING" },
      { name: "Research Synthesizer", role: "Combines multiple sources into coherent summaries", routerTier: "COMPLEX" },
      { name: "Knowledge Organizer", role: "Maintains and searches the knowledge base", routerTier: "MEDIUM" },
    ],
    connectors: [
      { name: "Document Storage", purpose: "File upload and management" },
      { name: "Web Search", purpose: "External research" },
      { name: "Notes", purpose: "Knowledge capture and retrieval" },
    ],
    workflows: [
      { name: "Document Analysis", trigger: "Document uploaded", steps: ["Extract text", "Identify key points", "Generate summary", "Add to knowledge base"] },
      { name: "Research Brief", trigger: "Research request", steps: ["Search knowledge base", "Search external sources", "Synthesize findings", "Generate brief"] },
    ],
    firstMissions: [
      { title: "Analyze a Document", description: "Upload a PDF and get an automated summary with key insights", expectedResult: "Summary with extracted facts, figures, and takeaways", estimatedMinutes: 5 },
      { title: "Research a Topic", description: "Ask a research question and get a synthesized brief", expectedResult: "Research brief with sources and key findings", estimatedMinutes: 5 },
      { title: "Build Your Knowledge Base", description: "Upload 3 documents and search across them", expectedResult: "Searchable knowledge base with cross-referenced insights", estimatedMinutes: 10 },
    ],
    status: "available",
  },

  // --- TIER D: Differentiation / Future Expansion ---
  {
    name: "HR & Recruiting",
    slug: "hr-recruiting",
    tagline: "Hire faster, onboard smoother",
    description:
      "Job posting, candidate screening, interview scheduling, and onboarding workflows — for growing companies and recruiters.",
    tier: "D",
    tierRank: 16,
    category: "Human Resources",
    tags: ["hr", "recruiting", "hiring", "onboarding", "candidates"],
    icon: "Users",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium",
    estimatedInstallMinutes: 15,
    estimatedMonthlyCost: { low: 30, high: 70, workloadType: "balanced" },
    agents: [
      { name: "Candidate Screener", role: "Reviews resumes and ranks candidates", routerTier: "COMPLEX" },
      { name: "Interview Scheduler", role: "Coordinates interview times across teams", routerTier: "SIMPLE" },
      { name: "Onboarding Manager", role: "Guides new hires through onboarding steps", routerTier: "MEDIUM" },
    ],
    connectors: [
      { name: "Email", purpose: "Candidate communication" },
      { name: "Calendar", purpose: "Interview scheduling" },
      { name: "Document Storage", purpose: "Resumes and onboarding docs" },
    ],
    workflows: [
      { name: "New Application", trigger: "Resume received", steps: ["Screen", "Score", "Schedule interview", "Notify hiring manager"] },
      { name: "Onboarding", trigger: "Offer accepted", steps: ["Send welcome kit", "Create accounts", "Schedule orientation", "Assign buddy"] },
    ],
    firstMissions: [
      { title: "Screen a Candidate", description: "Upload a resume and job description to get a fit analysis", expectedResult: "Candidate scorecard with strengths and concerns", estimatedMinutes: 3 },
      { title: "Schedule an Interview", description: "Pick a candidate and let the system find a time slot", expectedResult: "Interview scheduled with all parties notified", estimatedMinutes: 3 },
      { title: "Create an Onboarding Plan", description: "Enter a new hire and generate their onboarding checklist", expectedResult: "Day-by-day onboarding plan with task assignments", estimatedMinutes: 5 },
    ],
    status: "available",
  },
  {
    name: "Education & Tutoring",
    slug: "education",
    tagline: "Teach smarter, not harder",
    description:
      "Student management, content creation, progress tracking, and adaptive learning — for tutors, course creators, and coaches.",
    tier: "D",
    tierRank: 17,
    category: "Education",
    tags: ["education", "tutoring", "courses", "students", "learning"],
    icon: "GraduationCap",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy",
    estimatedInstallMinutes: 10,
    estimatedMonthlyCost: { low: 20, high: 50, workloadType: "balanced" },
    agents: [
      { name: "Content Creator", role: "Generates lesson plans, quizzes, and study materials", routerTier: "COMPLEX" },
      { name: "Progress Tracker", role: "Monitors student performance and suggests interventions", routerTier: "MEDIUM" },
      { name: "Student Manager", role: "Handles scheduling, reminders, and communication", routerTier: "SIMPLE" },
    ],
    connectors: [
      { name: "Email", purpose: "Student and parent communication" },
      { name: "Calendar", purpose: "Session scheduling" },
      { name: "Document Storage", purpose: "Materials and assignments" },
    ],
    workflows: [
      { name: "New Student Setup", trigger: "Student enrolled", steps: ["Create profile", "Assess level", "Generate curriculum", "Schedule first session"] },
      { name: "Session Prep", trigger: "1h before session", steps: ["Review progress", "Prepare materials", "Set goals for session"] },
    ],
    firstMissions: [
      { title: "Create a Lesson Plan", description: "Enter a topic and student level to generate a lesson", expectedResult: "Complete lesson with objectives, activities, and assessment", estimatedMinutes: 5 },
      { title: "Track Student Progress", description: "Enter assessment results and get a progress report", expectedResult: "Visual progress report with recommendations", estimatedMinutes: 3 },
      { title: "Generate a Quiz", description: "Describe a topic and get an instant quiz with answer key", expectedResult: "Quiz with 10 questions, difficulty levels, and explanations", estimatedMinutes: 3 },
    ],
    status: "available",
  },
  {
    name: "Consulting & Professional Services",
    slug: "consulting",
    tagline: "Deliver more value with less overhead",
    description:
      "Client deliverables, research, proposal generation, and engagement management — for management consultants and advisors.",
    tier: "D",
    tierRank: 18,
    category: "Professional Services",
    tags: ["consulting", "proposals", "deliverables", "clients", "advisory"],
    icon: "PieChart",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium",
    estimatedInstallMinutes: 15,
    estimatedMonthlyCost: { low: 40, high: 90, workloadType: "balanced" },
    agents: [
      { name: "Proposal Writer", role: "Generates client proposals from briefs", routerTier: "COMPLEX" },
      { name: "Research Agent", role: "Gathers market and industry data", routerTier: "REASONING" },
      { name: "Engagement Manager", role: "Tracks deliverables and client milestones", routerTier: "MEDIUM" },
    ],
    connectors: [
      { name: "Email", purpose: "Client communication" },
      { name: "Document Storage", purpose: "Proposals, reports, deliverables" },
      { name: "Calendar", purpose: "Meeting and milestone tracking" },
    ],
    workflows: [
      { name: "New Engagement", trigger: "Contract signed", steps: ["Create project plan", "Set milestones", "Assign deliverables", "Schedule kickoff"] },
      { name: "Proposal Generation", trigger: "RFP received", steps: ["Analyze requirements", "Research market", "Draft proposal", "Review and send"] },
    ],
    firstMissions: [
      { title: "Write a Proposal", description: "Describe an opportunity and generate a professional proposal", expectedResult: "Formatted proposal with executive summary, approach, and pricing", estimatedMinutes: 10 },
      { title: "Research a Market", description: "Ask for market analysis on a specific industry", expectedResult: "Market brief with size, trends, and competitive landscape", estimatedMinutes: 5 },
      { title: "Plan an Engagement", description: "Enter project details and generate a delivery plan", expectedResult: "Project plan with milestones, deliverables, and timeline", estimatedMinutes: 5 },
    ],
    status: "available",
  },
  {
    name: "Marketing Analytics & Reporting",
    slug: "marketing-analytics",
    tagline: "Turn data into decisions automatically",
    description:
      "Campaign tracking, report generation, competitor monitoring, and performance analytics — for marketing teams and agencies.",
    tier: "D",
    tierRank: 19,
    category: "Marketing",
    tags: ["analytics", "marketing", "reports", "campaigns", "competitors"],
    icon: "BarChart3",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium",
    estimatedInstallMinutes: 12,
    estimatedMonthlyCost: { low: 30, high: 70, workloadType: "balanced" },
    agents: [
      { name: "Report Generator", role: "Creates weekly/monthly marketing reports", routerTier: "COMPLEX" },
      { name: "Campaign Tracker", role: "Monitors live campaign performance", routerTier: "MEDIUM" },
      { name: "Competitor Monitor", role: "Tracks competitor activity and market shifts", routerTier: "MEDIUM" },
    ],
    connectors: [
      { name: "Analytics Platforms", purpose: "Google Analytics, social analytics" },
      { name: "Email", purpose: "Report delivery" },
      { name: "Spreadsheets", purpose: "Data export and custom analysis" },
    ],
    workflows: [
      { name: "Weekly Report", trigger: "Monday 8am", steps: ["Pull data", "Analyze trends", "Generate insights", "Send report"] },
      { name: "Competitor Alert", trigger: "Daily scan", steps: ["Monitor competitors", "Flag changes", "Summarize updates"] },
    ],
    firstMissions: [
      { title: "Generate a Report", description: "Connect a data source and get your first automated report", expectedResult: "Professional marketing report with charts and insights", estimatedMinutes: 10 },
      { title: "Track a Campaign", description: "Enter campaign details and set up monitoring", expectedResult: "Live dashboard tracking key metrics", estimatedMinutes: 5 },
      { title: "Monitor a Competitor", description: "Enter a competitor and start tracking their activity", expectedResult: "Competitor profile with recent changes flagged", estimatedMinutes: 5 },
    ],
    status: "available",
  },
  {
    name: "CRM & Contact Management",
    slug: "crm",
    tagline: "Know every contact, miss no opportunity",
    description:
      "Contact enrichment, interaction logging, pipeline management, and relationship tracking — for any relationship-driven business.",
    tier: "D",
    tierRank: 20,
    category: "Sales",
    tags: ["crm", "contacts", "relationships", "pipeline", "networking"],
    icon: "Contact",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy",
    estimatedInstallMinutes: 10,
    estimatedMonthlyCost: { low: 15, high: 40, workloadType: "simple-heavy" },
    agents: [
      { name: "Contact Enricher", role: "Fills in missing contact details from public sources", routerTier: "MEDIUM" },
      { name: "Interaction Logger", role: "Tracks all touchpoints with each contact", routerTier: "SIMPLE" },
      { name: "Opportunity Tracker", role: "Monitors deal progress and flags stalled opportunities", routerTier: "MEDIUM" },
    ],
    connectors: [
      { name: "Email", purpose: "Communication tracking" },
      { name: "Calendar", purpose: "Meeting logging" },
      { name: "LinkedIn", purpose: "Contact enrichment" },
    ],
    workflows: [
      { name: "New Contact", trigger: "Contact added", steps: ["Enrich profile", "Set follow-up", "Add to appropriate list"] },
      { name: "Relationship Review", trigger: "Weekly", steps: ["Identify neglected contacts", "Suggest touchpoints", "Update scores"] },
    ],
    firstMissions: [
      { title: "Add and Enrich a Contact", description: "Enter a name and email, watch the system fill in the rest", expectedResult: "Complete profile with company, role, and social links", estimatedMinutes: 2 },
      { title: "Log an Interaction", description: "Record a meeting or call and see it linked to the contact", expectedResult: "Interaction logged with notes and follow-up set", estimatedMinutes: 2 },
      { title: "Review Your Network", description: "Ask the system to audit your relationship health", expectedResult: "Report showing who needs attention and suggested actions", estimatedMinutes: 3 },
    ],
    status: "available",
  },
];

export function getAllPackages(): Package[] {
  return packages;
}

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((p) => p.slug === slug);
}

export function getPackagesByTier(tier: Tier): Package[] {
  return packages.filter((p) => p.tier === tier);
}

export function getPackagesByCategory(category: string): Package[] {
  return packages.filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(packages.map((p) => p.category))];
}

export function searchPackages(query: string): Package[] {
  const q = query.toLowerCase();
  return packages.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q)) ||
      p.category.toLowerCase().includes(q)
  );
}
```

- [ ] **Step 5: Run tests to verify they pass**

```bash
npm test -- --testPathPattern=packages.test
```

Expected: All 6 tests PASS.

- [ ] **Step 6: Commit**

```bash
git add src/lib/types.ts src/lib/packages.ts src/__tests__/packages.test.ts
git commit -m "feat: add package types, all 20 package data entries, and helper functions"
```

---

## Task 3: Layout — Navbar and Footer

**Files:**
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/Footer.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create Navbar**

Create `src/components/layout/Navbar.tsx`:

```typescript
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="nav-blur sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            OC
          </div>
          <span className="text-xl font-bold">
            OpenClaw<span className="text-blue-400">Store</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <Link href="/packages" className="hover:text-white transition">
            Packages
          </Link>
          <Link href="/#how-it-works" className="hover:text-white transition">
            How It Works
          </Link>
          <Link href="/#pricing" className="hover:text-white transition">
            Pricing
          </Link>
          <Link
            href="/quiz"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Find My Package
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-800 px-6 py-4 flex flex-col gap-4 text-sm">
          <Link
            href="/packages"
            className="text-gray-400 hover:text-white transition"
            onClick={() => setMobileOpen(false)}
          >
            Packages
          </Link>
          <Link
            href="/#how-it-works"
            className="text-gray-400 hover:text-white transition"
            onClick={() => setMobileOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="/#pricing"
            className="text-gray-400 hover:text-white transition"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/quiz"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium transition text-center"
            onClick={() => setMobileOpen(false)}
          >
            Find My Package
          </Link>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Create Footer**

Create `src/components/layout/Footer.tsx`:

```typescript
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                OC
              </div>
              <span className="text-lg font-bold">
                OpenClaw<span className="text-blue-400">Store</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              Pre-built, security-vetted OpenClaw systems for your business.
            </p>
          </div>

          {/* Packages */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Packages</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/packages" className="hover:text-white transition">
                  Browse All
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-white transition">
                  Find My Package
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/#faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <span className="text-gray-600">Terms (coming soon)</span>
              </li>
              <li>
                <span className="text-gray-600">Privacy (coming soon)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} OpenClaw Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Add Navbar and Footer to root layout**

Update `src/app/layout.tsx`:

```typescript
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenClaw Marketplace — Business-Ready AI Systems",
  description:
    "Pre-built, security-vetted OpenClaw packages for your specific business. Pick your use case. Install in minutes. Get results today.",
  openGraph: {
    title: "OpenClaw Marketplace",
    description:
      "Pre-built, security-vetted AI systems for your business. Install in minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/ src/app/layout.tsx
git commit -m "feat: add Navbar with mobile menu and Footer"
```

---

## Task 4: UI Primitives — Badges

**Files:**
- Create: `src/components/ui/TierBadge.tsx`
- Create: `src/components/ui/DifficultyBadge.tsx`

- [ ] **Step 1: Create TierBadge**

Create `src/components/ui/TierBadge.tsx`:

```typescript
import type { Tier } from "@/lib/types";

const tierConfig: Record<Tier, { label: string; className: string }> = {
  A: { label: "Tier A", className: "bg-emerald-900/50 text-emerald-300 border border-emerald-700/50" },
  B: { label: "Tier B", className: "bg-blue-900/50 text-blue-300 border border-blue-700/50" },
  C: { label: "Tier C", className: "bg-purple-900/50 text-purple-300 border border-purple-700/50" },
  D: { label: "Tier D", className: "bg-gray-800/50 text-gray-300 border border-gray-700/50" },
};

export default function TierBadge({ tier }: { tier: Tier }) {
  const config = tierConfig[tier];
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${config.className}`}>
      {config.label}
    </span>
  );
}
```

- [ ] **Step 2: Create DifficultyBadge**

Create `src/components/ui/DifficultyBadge.tsx`:

```typescript
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
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/
git commit -m "feat: add TierBadge and DifficultyBadge components"
```

---

## Task 5: PackageCard Component

**Files:**
- Create: `src/components/packages/PackageCard.tsx`

- [ ] **Step 1: Create PackageCard**

Create `src/components/packages/PackageCard.tsx`:

```typescript
import Link from "next/link";
import * as Icons from "lucide-react";
import type { Package } from "@/lib/types";
import TierBadge from "@/components/ui/TierBadge";
import DifficultyBadge from "@/components/ui/DifficultyBadge";

function getIcon(iconName: string) {
  const Icon = (Icons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[iconName];
  return Icon ? <Icon size={24} /> : null;
}

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <Link href={`/packages/${pkg.slug}`}>
      <div className="gradient-border rounded-2xl bg-[#12121a] p-6 card-hover cursor-pointer h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl text-blue-400">{getIcon(pkg.icon)}</span>
          <TierBadge tier={pkg.tier} />
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{pkg.tagline}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-300">
            {pkg.agents.length} Agent{pkg.agents.length !== 1 ? "s" : ""}
          </span>
          <span className="inline-block px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-300">
            {pkg.connectors.length} Connector{pkg.connectors.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-4 flex items-center justify-between">
          <div>
            <span className="text-white font-bold">${pkg.pricing.selfInstall}</span>
            <span className="text-gray-500 text-sm"> self-install</span>
          </div>
          <div className="flex items-center gap-3">
            <DifficultyBadge difficulty={pkg.installDifficulty} />
            <span className="text-gray-600 text-xs">
              ~${pkg.estimatedMonthlyCost.low}-{pkg.estimatedMonthlyCost.high}/mo
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/packages/PackageCard.tsx
git commit -m "feat: add PackageCard component with pricing and metadata"
```

---

## Task 6: Landing Page

**Files:**
- Create: `src/components/marketing/TrustBar.tsx`
- Create: `src/components/marketing/HowItWorks.tsx`
- Create: `src/components/marketing/ComparisonTable.tsx`
- Create: `src/components/pricing/PricingSelector.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create TrustBar**

Create `src/components/marketing/TrustBar.tsx`:

```typescript
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
```

- [ ] **Step 2: Create HowItWorks**

Create `src/components/marketing/HowItWorks.tsx`:

```typescript
import { Search, Download, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Browse & Choose",
    description: "Find the package built for your business — or let our quiz match you.",
  },
  {
    icon: Download,
    title: "2. Install in Minutes",
    description: "Follow the step-by-step guide. Video walkthroughs. Zero terminal commands.",
  },
  {
    icon: Rocket,
    title: "3. Get Results Today",
    description: "Complete your first 3 missions and see the system working for you.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        From choosing a package to getting real results — in under 30 minutes.
      </p>
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
```

- [ ] **Step 3: Create ComparisonTable**

Create `src/components/marketing/ComparisonTable.tsx`:

```typescript
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
      <h2 className="text-3xl font-bold text-center mb-4">
        More Than Just Chat
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Every package includes the infrastructure that turns a chatbot into an intelligent assistant.
      </p>
      <div className="rounded-2xl border border-gray-800 overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-3 bg-gray-900/50 px-6 py-4 text-sm font-semibold">
          <div>Feature</div>
          <div className="text-center text-gray-500">Basic AI Chat</div>
          <div className="text-center text-blue-400">Our Packages</div>
        </div>
        {/* Rows */}
        {features.map((feature) => (
          <div
            key={feature.name}
            className="grid grid-cols-3 px-6 py-3 border-t border-gray-800/50 text-sm"
          >
            <div className="text-gray-300">{feature.name}</div>
            <div className="text-center">
              {feature.chat ? (
                <Check size={16} className="text-gray-500 mx-auto" />
              ) : (
                <X size={16} className="text-gray-700 mx-auto" />
              )}
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
```

- [ ] **Step 4: Create PricingSelector**

Create `src/components/pricing/PricingSelector.tsx`:

```typescript
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
    features: [
      "Complete package files",
      "Video install walkthrough",
      "Step-by-step documentation",
      "Troubleshooting guide",
    ],
  },
  {
    id: "guided-install",
    name: "Guided Install",
    price: 199,
    description: "We walk you through it live",
    features: [
      "Everything in Self-Install",
      "1-hour live guided session",
      "Screen-share support",
      "Post-install verification",
    ],
    popular: true,
  },
  {
    id: "done-for-you",
    name: "Done-For-You",
    price: 699,
    monthlyPrice: 49,
    description: "We handle everything",
    features: [
      "Everything in Guided Install",
      "Full remote installation",
      "Custom configuration",
      "Onboarding walkthrough",
      "3 months Pro support included",
    ],
  },
];

export default function PricingSelector({ slug, selfInstallPrice = 49 }: PricingSelectorProps) {
  const [selected, setSelected] = useState("guided-install");

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Choose Your Install Experience</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Every tier includes the full package. Pick how much help you want with setup.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tiers.map((tier) => {
          const isSelected = selected === tier.id;
          const price = tier.priceKey ? selfInstallPrice : tier.price;
          return (
            <div
              key={tier.id}
              onClick={() => setSelected(tier.id)}
              className={`relative rounded-2xl p-6 cursor-pointer transition-all ${
                isSelected
                  ? "bg-blue-600/10 border-2 border-blue-500"
                  : "bg-[#12121a] border border-gray-800 hover:border-gray-700"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold mb-1">{tier.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{tier.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">${price}</span>
                {tier.monthlyPrice && (
                  <span className="text-gray-500 text-sm"> + ${tier.monthlyPrice}/mo</span>
                )}
              </div>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={slug ? `/checkout/${slug}?tier=${tier.id}` : "/packages"}
                className={`block text-center py-3 rounded-xl font-semibold transition ${
                  isSelected
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
              >
                {slug ? "Get This Package" : "Browse Packages"}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Build the landing page**

Replace `src/app/page.tsx` with:

```typescript
import Link from "next/link";
import TrustBar from "@/components/marketing/TrustBar";
import HowItWorks from "@/components/marketing/HowItWorks";
import ComparisonTable from "@/components/marketing/ComparisonTable";
import PricingSelector from "@/components/pricing/PricingSelector";
import PackageCard from "@/components/packages/PackageCard";
import { getAllPackages } from "@/lib/packages";

export default function Home() {
  const featured = getAllPackages().filter((p) => p.tier === "A").slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm bg-blue-900/50 text-blue-300 border border-blue-700/50">
            20 Business-Ready Packages
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Your Business.
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            Powered by OpenClaw.
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Pre-built, security-vetted AI systems for your specific business. Pick
          your use case. Install in minutes. Get results today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/packages"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition glow"
          >
            Browse Packages
          </Link>
          <Link
            href="/quiz"
            className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition"
          >
            Help Me Choose
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          Not just chat. Agents. Memory. Orchestration. Security. Built in.
        </p>
      </section>

      <TrustBar />

      <div className="section-divider" />

      {/* Featured Packages */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Top Packages</h2>
            <p className="text-gray-400">
              Highest demand, clearest ROI. These are where most users start.
            </p>
          </div>
          <Link
            href="/packages"
            className="hidden md:block text-blue-400 hover:text-blue-300 text-sm font-medium transition"
          >
            View all 20 &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/packages"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium"
          >
            View all 20 packages &rarr;
          </Link>
        </div>
      </section>

      <div className="section-divider" />

      <HowItWorks />

      <div className="section-divider" />

      <ComparisonTable />

      <div className="section-divider" />

      <PricingSelector />

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "What is OpenClaw?",
              a: "OpenClaw is an open-source personal AI assistant framework with persistent memory, multi-platform messaging, and multi-model support. Our packages configure it for your specific business.",
            },
            {
              q: "Do I need technical skills to install?",
              a: "No. Our Self-Install tier includes video walkthroughs and step-by-step guides. The Guided and Done-For-You tiers provide even more support.",
            },
            {
              q: "How much does it cost to run monthly?",
              a: "Each package shows an estimated monthly API cost. Our built-in model routing optimizes costs — typically $15-120/month depending on usage and package complexity.",
            },
            {
              q: "What if a package doesn't fit my business?",
              a: "Use our guided quiz to find the best match. If none fit perfectly, the Done-For-You tier includes custom configuration to tailor the package to your needs.",
            },
            {
              q: "Is my data safe?",
              a: "Every package is security-audited before publishing. We check for prompt injection, data exfiltration, and permission escalation. Your data stays on your machine.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="bg-[#12121a] rounded-2xl border border-gray-800 p-6"
            >
              <h3 className="font-semibold mb-2">{item.q}</h3>
              <p className="text-gray-400 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 6: Verify build**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 7: Commit**

```bash
git add src/components/marketing/ src/components/pricing/ src/app/page.tsx
git commit -m "feat: build landing page with hero, trust bar, featured packages, how-it-works, comparison, pricing, FAQ"
```

---

## Task 7: Package Catalog Page with Filtering

**Files:**
- Create: `src/components/packages/PackageGrid.tsx`
- Create: `src/app/packages/page.tsx`

- [ ] **Step 1: Create PackageGrid with filter controls**

Create `src/components/packages/PackageGrid.tsx`:

```typescript
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

  const categories = useMemo(
    () => [...new Set(packages.map((p) => p.category))].sort(),
    [packages]
  );

  const filtered = useMemo(() => {
    return packages.filter((pkg) => {
      if (tierFilter !== "all" && pkg.tier !== tierFilter) return false;
      if (categoryFilter !== "all" && pkg.category !== categoryFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          pkg.name.toLowerCase().includes(q) ||
          pkg.tagline.toLowerCase().includes(q) ||
          pkg.tags.some((t) => t.includes(q))
        );
      }
      return true;
    });
  }, [packages, search, tierFilter, categoryFilter]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search packages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#12121a] border border-gray-800 rounded-xl px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition flex-grow"
        />
        <select
          value={tierFilter}
          onChange={(e) => setTierFilter(e.target.value as Tier | "all")}
          className="bg-[#12121a] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-blue-500 transition"
        >
          <option value="all">All Tiers</option>
          {(["A", "B", "C", "D"] as Tier[]).map((t) => (
            <option key={t} value={t}>
              {tierLabels[t]}
            </option>
          ))}
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="bg-[#12121a] border border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-blue-500 transition"
        >
          <option value="all">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="text-gray-500 text-sm mb-6">
        {filtered.length} package{filtered.length !== 1 ? "s" : ""} found
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 mb-4">No packages match your filters.</p>
          <button
            onClick={() => {
              setSearch("");
              setTierFilter("all");
              setCategoryFilter("all");
            }}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Create catalog page**

Create `src/app/packages/page.tsx`:

```typescript
import type { Metadata } from "next";
import { getAllPackages } from "@/lib/packages";
import PackageGrid from "@/components/packages/PackageGrid";

export const metadata: Metadata = {
  title: "All Packages — OpenClaw Marketplace",
  description:
    "Browse 20 pre-built, security-vetted OpenClaw packages for every business type.",
};

export default function PackagesPage() {
  const packages = getAllPackages();

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">All Packages</h1>
      <p className="text-gray-400 mb-8">
        Each package is a complete, working OpenClaw system — not just prompts or
        configs.
      </p>
      <PackageGrid packages={packages} />
    </main>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/components/packages/PackageGrid.tsx src/app/packages/page.tsx
git commit -m "feat: add package catalog page with search, tier, and category filters"
```

---

## Task 8: Package Detail Page

**Files:**
- Create: `src/components/packages/ArchitectureDiagram.tsx`
- Create: `src/app/packages/[slug]/page.tsx`

- [ ] **Step 1: Create ArchitectureDiagram**

Create `src/components/packages/ArchitectureDiagram.tsx`:

```typescript
import type { AgentInfo, ConnectorInfo, WorkflowInfo } from "@/lib/types";
import { Bot, Plug, GitBranch } from "lucide-react";

const routerTierColors: Record<string, string> = {
  SIMPLE: "bg-emerald-900/50 text-emerald-300",
  MEDIUM: "bg-blue-900/50 text-blue-300",
  COMPLEX: "bg-purple-900/50 text-purple-300",
  REASONING: "bg-orange-900/50 text-orange-300",
};

interface ArchitectureDiagramProps {
  agents: AgentInfo[];
  connectors: ConnectorInfo[];
  workflows: WorkflowInfo[];
}

export default function ArchitectureDiagram({
  agents,
  connectors,
  workflows,
}: ArchitectureDiagramProps) {
  return (
    <div className="space-y-8">
      {/* Agents */}
      <div>
        <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-4">
          <Bot size={16} /> Agents
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">{agent.name}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${routerTierColors[agent.routerTier]}`}
                >
                  {agent.routerTier}
                </span>
              </div>
              <p className="text-gray-500 text-xs">{agent.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Connectors */}
      <div>
        <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-4">
          <Plug size={16} /> Connectors
        </h4>
        <div className="flex flex-wrap gap-3">
          {connectors.map((conn) => (
            <div
              key={conn.name}
              className="bg-[#0a0a0f] border border-gray-800 rounded-xl px-4 py-3"
            >
              <span className="font-medium text-sm">{conn.name}</span>
              <p className="text-gray-500 text-xs mt-1">{conn.purpose}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Workflows */}
      <div>
        <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-400 mb-4">
          <GitBranch size={16} /> Workflows
        </h4>
        <div className="space-y-3">
          {workflows.map((wf) => (
            <div
              key={wf.name}
              className="bg-[#0a0a0f] border border-gray-800 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">{wf.name}</span>
                <span className="text-xs text-gray-500">
                  Trigger: {wf.trigger}
                </span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {wf.steps.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                      {step}
                    </span>
                    {i < wf.steps.length - 1 && (
                      <span className="text-blue-500 text-xs">&rarr;</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create package detail page**

Create `src/app/packages/[slug]/page.tsx`:

```typescript
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, DollarSign, Zap, Shield } from "lucide-react";
import { getAllPackages, getPackageBySlug } from "@/lib/packages";
import TierBadge from "@/components/ui/TierBadge";
import DifficultyBadge from "@/components/ui/DifficultyBadge";
import ArchitectureDiagram from "@/components/packages/ArchitectureDiagram";
import PricingSelector from "@/components/pricing/PricingSelector";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPackages().map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return { title: "Package Not Found" };
  return {
    title: `${pkg.name} — OpenClaw Marketplace`,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <Link href="/packages" className="hover:text-white transition">
          Packages
        </Link>{" "}
        / <span className="text-gray-300">{pkg.name}</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <TierBadge tier={pkg.tier} />
          <DifficultyBadge difficulty={pkg.installDifficulty} />
          <span className="text-xs text-gray-500">{pkg.category}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{pkg.name}</h1>
        <p className="text-xl text-gray-400 max-w-3xl">{pkg.description}</p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-[#12121a] border border-gray-800 rounded-xl p-4 text-center">
          <Clock size={20} className="text-blue-400 mx-auto mb-2" />
          <div className="text-lg font-bold">{pkg.estimatedInstallMinutes} min</div>
          <div className="text-xs text-gray-500">Install Time</div>
        </div>
        <div className="bg-[#12121a] border border-gray-800 rounded-xl p-4 text-center">
          <DollarSign size={20} className="text-emerald-400 mx-auto mb-2" />
          <div className="text-lg font-bold">
            ${pkg.estimatedMonthlyCost.low}-{pkg.estimatedMonthlyCost.high}
          </div>
          <div className="text-xs text-gray-500">Est. Monthly API Cost</div>
        </div>
        <div className="bg-[#12121a] border border-gray-800 rounded-xl p-4 text-center">
          <Zap size={20} className="text-purple-400 mx-auto mb-2" />
          <div className="text-lg font-bold">{pkg.agents.length} Agents</div>
          <div className="text-xs text-gray-500">Working For You</div>
        </div>
        <div className="bg-[#12121a] border border-gray-800 rounded-xl p-4 text-center">
          <Shield size={20} className="text-green-400 mx-auto mb-2" />
          <div className="text-lg font-bold">Verified</div>
          <div className="text-xs text-gray-500">Security Audited</div>
        </div>
      </div>

      {/* Architecture */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">System Architecture</h2>
        <div className="bg-[#12121a] border border-gray-800 rounded-2xl p-6 md:p-8">
          <ArchitectureDiagram
            agents={pkg.agents}
            connectors={pkg.connectors}
            workflows={pkg.workflows}
          />
        </div>
      </section>

      {/* First Missions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Your First 3 Missions</h2>
        <p className="text-gray-400 mb-6">
          Complete these right after install to see the system in action.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pkg.firstMissions.map((mission, i) => (
            <div
              key={mission.title}
              className="bg-[#12121a] border border-gray-800 rounded-2xl p-6"
            >
              <div className="text-3xl font-black text-blue-600/30 mb-3">
                {i + 1}
              </div>
              <h3 className="font-semibold mb-2">{mission.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{mission.description}</p>
              <div className="text-xs text-gray-500 border-t border-gray-800 pt-3">
                <span className="text-emerald-400">Expected:</span>{" "}
                {mission.expectedResult}
              </div>
              <div className="text-xs text-gray-600 mt-2">
                ~{mission.estimatedMinutes} min
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <PricingSelector slug={pkg.slug} selfInstallPrice={pkg.pricing.selfInstall} />
    </main>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

Expected: Build succeeds with all 20 package detail pages generated statically.

- [ ] **Step 4: Commit**

```bash
git add src/components/packages/ArchitectureDiagram.tsx src/app/packages/\[slug\]/page.tsx
git commit -m "feat: add package detail page with architecture diagram, first missions, and pricing"
```

---

## Task 9: Quiz Flow

**Files:**
- Create: `src/lib/quiz-logic.ts`
- Create: `src/__tests__/quiz-logic.test.ts`
- Create: `src/components/quiz/QuizFlow.tsx`
- Create: `src/app/quiz/page.tsx`
- Create: `src/app/quiz/results/page.tsx`

- [ ] **Step 1: Write the failing test for quiz logic**

Create `src/__tests__/quiz-logic.test.ts`:

```typescript
import { scorePackages, quizQuestions } from "@/lib/quiz-logic";
import type { QuizAnswer } from "@/lib/types";

describe("Quiz scoring", () => {
  test("returns results sorted by score descending", () => {
    const answers: QuizAnswer[] = [
      { questionId: "business-type", answerId: "service-business" },
      { questionId: "challenge", answerId: "getting-customers" },
      { questionId: "current-tools", answerId: "mostly-manual" },
      { questionId: "success-looks-like", answerId: "more-leads" },
    ];
    const results = scorePackages(answers);
    expect(results.length).toBeGreaterThan(0);
    for (let i = 1; i < results.length; i++) {
      expect(results[i - 1].score).toBeGreaterThanOrEqual(results[i].score);
    }
  });

  test("service business wanting leads scores lead-generation high", () => {
    const answers: QuizAnswer[] = [
      { questionId: "business-type", answerId: "service-business" },
      { questionId: "challenge", answerId: "getting-customers" },
      { questionId: "current-tools", answerId: "mostly-manual" },
      { questionId: "success-looks-like", answerId: "more-leads" },
    ];
    const results = scorePackages(answers);
    const topSlugs = results.slice(0, 3).map((r) => r.package.slug);
    expect(topSlugs).toContain("lead-generation");
  });

  test("quizQuestions has 4 questions each with options", () => {
    expect(quizQuestions).toHaveLength(4);
    for (const q of quizQuestions) {
      expect(q.id).toBeTruthy();
      expect(q.question).toBeTruthy();
      expect(q.options.length).toBeGreaterThanOrEqual(3);
    }
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- --testPathPattern=quiz-logic.test
```

Expected: FAIL — module not found.

- [ ] **Step 3: Implement quiz logic**

Create `src/lib/quiz-logic.ts`:

```typescript
import type { QuizAnswer, QuizResult } from "./types";
import { getAllPackages } from "./packages";

export interface QuizQuestion {
  id: string;
  question: string;
  options: { id: string; label: string; tags: string[] }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "business-type",
    question: "What type of business do you run?",
    options: [
      { id: "service-business", label: "Service business (plumbing, HVAC, consulting, etc.)", tags: ["hvac", "plumbing", "contractor", "consulting"] },
      { id: "ecommerce", label: "Online store or e-commerce", tags: ["ecommerce", "products", "shopify", "etsy"] },
      { id: "real-estate", label: "Real estate or property management", tags: ["real estate", "property", "listings"] },
      { id: "healthcare", label: "Healthcare or medical practice", tags: ["healthcare", "medical", "patients"] },
      { id: "legal", label: "Legal or professional services", tags: ["legal", "law", "consulting", "advisory"] },
      { id: "agency-freelance", label: "Agency or freelancer", tags: ["agency", "freelancer", "clients", "deliverables"] },
      { id: "education", label: "Education, tutoring, or coaching", tags: ["education", "tutoring", "courses", "students"] },
      { id: "other", label: "Something else", tags: [] },
    ],
  },
  {
    id: "challenge",
    question: "What's your biggest challenge right now?",
    options: [
      { id: "getting-customers", label: "Getting more customers or leads", tags: ["leads", "sales", "pipeline", "customers"] },
      { id: "follow-up", label: "Following up with customers and getting reviews", tags: ["follow-up", "retention", "reviews", "re-engagement"] },
      { id: "scheduling", label: "Managing appointments and scheduling", tags: ["scheduling", "calendar", "appointments", "booking"] },
      { id: "email-overload", label: "Drowning in email", tags: ["email", "inbox", "outreach"] },
      { id: "content", label: "Creating content and social media presence", tags: ["social media", "content", "marketing"] },
      { id: "operations", label: "Managing projects and operations", tags: ["projects", "clients", "deliverables", "tasks"] },
      { id: "admin", label: "Too much paperwork and admin", tags: ["reporting", "documents", "bookkeeping"] },
    ],
  },
  {
    id: "current-tools",
    question: "How do you handle this today?",
    options: [
      { id: "mostly-manual", label: "Mostly manual — spreadsheets, notes, memory", tags: [] },
      { id: "some-tools", label: "Some tools but nothing connected", tags: [] },
      { id: "existing-ai", label: "Already using AI but want something better", tags: [] },
    ],
  },
  {
    id: "success-looks-like",
    question: "What would success look like for you?",
    options: [
      { id: "more-leads", label: "More leads and customers coming in", tags: ["leads", "sales", "pipeline"] },
      { id: "less-time", label: "Spending less time on repetitive tasks", tags: ["automation", "tasks", "scheduling", "email"] },
      { id: "better-follow-up", label: "Better follow-up and customer relationships", tags: ["follow-up", "retention", "crm", "reviews"] },
      { id: "more-content", label: "Consistent content and marketing output", tags: ["content", "social media", "marketing"] },
      { id: "organized", label: "Everything organized and nothing falling through cracks", tags: ["tasks", "projects", "calendar", "knowledge"] },
    ],
  },
];

export function scorePackages(answers: QuizAnswer[]): QuizResult[] {
  const packages = getAllPackages();

  const answerTags: string[] = [];
  for (const answer of answers) {
    const question = quizQuestions.find((q) => q.id === answer.questionId);
    if (!question) continue;
    const option = question.options.find((o) => o.id === answer.answerId);
    if (!option) continue;
    answerTags.push(...option.tags);
  }

  const results: QuizResult[] = packages.map((pkg) => {
    let score = 0;

    // Score based on tag overlap
    for (const tag of answerTags) {
      if (pkg.tags.includes(tag)) score += 2;
      if (pkg.name.toLowerCase().includes(tag)) score += 1;
    }

    // Tier A packages get a small boost (higher demand = more likely to be relevant)
    if (pkg.tier === "A") score += 1;

    const reason = generateReason(pkg.name, answerTags, pkg.tags);
    return { package: pkg, score, reason };
  });

  return results.sort((a, b) => b.score - a.score);
}

function generateReason(
  name: string,
  answerTags: string[],
  packageTags: string[]
): string {
  const matched = answerTags.filter((t) => packageTags.includes(t));
  if (matched.length === 0) return `${name} covers general business needs.`;
  return `${name} matches your needs for ${matched.slice(0, 3).join(", ")}.`;
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- --testPathPattern=quiz-logic.test
```

Expected: All 3 tests PASS.

- [ ] **Step 5: Create QuizFlow component**

Create `src/components/quiz/QuizFlow.tsx`:

```typescript
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { quizQuestions } from "@/lib/quiz-logic";
import type { QuizAnswer } from "@/lib/types";

export default function QuizFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const currentQuestion = quizQuestions[step];
  const progress = ((step + 1) / quizQuestions.length) * 100;

  function handleSelect(answerId: string) {
    const newAnswers = [
      ...answers.filter((a) => a.questionId !== currentQuestion.id),
      { questionId: currentQuestion.id, answerId },
    ];
    setAnswers(newAnswers);

    if (step < quizQuestions.length - 1) {
      setStep(step + 1);
    } else {
      // Encode answers and navigate to results
      const encoded = encodeURIComponent(JSON.stringify(newAnswers));
      router.push(`/quiz/results?a=${encoded}`);
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>
            Question {step + 1} of {quizQuestions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-800 rounded-full">
          <div
            className="h-2 bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-bold mb-8">{currentQuestion.question}</h2>

      {/* Options */}
      <div className="space-y-3">
        {currentQuestion.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className="w-full text-left bg-[#12121a] border border-gray-800 hover:border-blue-500 rounded-xl p-4 text-sm transition"
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Back button */}
      {step > 0 && (
        <button
          onClick={() => setStep(step - 1)}
          className="mt-6 text-gray-500 hover:text-white text-sm transition"
        >
          &larr; Back
        </button>
      )}
    </div>
  );
}
```

- [ ] **Step 6: Create quiz page**

Create `src/app/quiz/page.tsx`:

```typescript
import type { Metadata } from "next";
import QuizFlow from "@/components/quiz/QuizFlow";

export const metadata: Metadata = {
  title: "Find Your Package — OpenClaw Marketplace",
  description:
    "Answer 4 quick questions and we'll match you with the best OpenClaw package for your business.",
};

export default function QuizPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Find Your Package</h1>
        <p className="text-gray-400">
          4 quick questions. We'll recommend the best package for your business.
        </p>
      </div>
      <QuizFlow />
    </main>
  );
}
```

- [ ] **Step 7: Create quiz results page**

Create `src/app/quiz/results/page.tsx`:

```typescript
"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { scorePackages } from "@/lib/quiz-logic";
import type { QuizAnswer } from "@/lib/types";
import PackageCard from "@/components/packages/PackageCard";

function QuizResultsContent() {
  const searchParams = useSearchParams();
  const encoded = searchParams.get("a");

  let answers: QuizAnswer[] = [];
  try {
    if (encoded) answers = JSON.parse(decodeURIComponent(encoded));
  } catch {
    // Invalid data — show empty results
  }

  const results = scorePackages(answers);
  const topResults = results.slice(0, 3);

  if (topResults.length === 0 || !encoded) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">No Results</h1>
        <p className="text-gray-400 mb-8">
          We couldn&apos;t determine your best match. Try the quiz again.
        </p>
        <Link
          href="/quiz"
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition"
        >
          Retake Quiz
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Your Recommended Packages</h1>
        <p className="text-gray-400">
          Based on your answers, here are your best matches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {topResults.map((result, i) => (
          <div key={result.package.slug} className="relative">
            {i === 0 && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full z-10">
                Best Match
              </div>
            )}
            <PackageCard pkg={result.package} />
            <p className="text-gray-500 text-sm mt-3 px-1">{result.reason}</p>
          </div>
        ))}
      </div>

      <div className="text-center space-y-4">
        <Link
          href="/packages"
          className="text-blue-400 hover:text-blue-300 text-sm font-medium"
        >
          Browse all packages &rarr;
        </Link>
        <br />
        <Link
          href="/quiz"
          className="text-gray-500 hover:text-white text-sm transition"
        >
          Retake quiz
        </Link>
      </div>
    </main>
  );
}

export default function QuizResultsPage() {
  return (
    <Suspense
      fallback={
        <main className="max-w-7xl mx-auto px-6 py-16 text-center">
          <p className="text-gray-400">Loading results...</p>
        </main>
      }
    >
      <QuizResultsContent />
    </Suspense>
  );
}
```

- [ ] **Step 8: Verify build**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 9: Commit**

```bash
git add src/lib/quiz-logic.ts src/__tests__/quiz-logic.test.ts src/components/quiz/ src/app/quiz/
git commit -m "feat: add guided selection quiz with scoring logic and results page"
```

---

## Task 10: Checkout and Success Placeholder Pages

**Files:**
- Create: `src/app/checkout/[slug]/page.tsx`
- Create: `src/app/success/page.tsx`

- [ ] **Step 1: Create checkout placeholder page**

Create `src/app/checkout/[slug]/page.tsx`:

```typescript
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPackages, getPackageBySlug } from "@/lib/packages";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPackages().map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return { title: "Not Found" };
  return { title: `Checkout — ${pkg.name}` };
}

export default async function CheckoutPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-center">
      <div className="bg-[#12121a] border border-gray-800 rounded-2xl p-8 md:p-12">
        <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">🚀</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
        <p className="text-gray-400 mb-2">
          <strong>{pkg.name}</strong> is almost ready for purchase.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          Join the waitlist to be first in line when we launch.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-[#0a0a0f] border border-gray-800 rounded-xl px-4 py-3 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500 transition flex-grow"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition whitespace-nowrap"
          >
            Join Waitlist
          </button>
        </form>

        <Link
          href={`/packages/${pkg.slug}`}
          className="text-gray-500 hover:text-white text-sm transition"
        >
          &larr; Back to {pkg.name}
        </Link>
      </div>
    </main>
  );
}
```

- [ ] **Step 2: Create success placeholder page**

Create `src/app/success/page.tsx`:

```typescript
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You — OpenClaw Marketplace",
};

export default function SuccessPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-center">
      <div className="bg-[#12121a] border border-gray-800 rounded-2xl p-8 md:p-12">
        <div className="w-16 h-16 rounded-2xl bg-emerald-600/10 border border-emerald-600/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">✓</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-gray-400 mb-8">
          We&apos;ll email you when your package is ready for download.
        </p>
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/app/checkout/ src/app/success/
git commit -m "feat: add checkout waitlist and success placeholder pages"
```

---

## Task 11: Polish — Responsive, Animations, Card Hover

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/packages/PackageCard.tsx`

- [ ] **Step 1: Add card hover animation to globals.css**

Add to the `@layer components` section in `src/app/globals.css`:

```css
  .card-hover {
    @apply transition-all duration-300;
  }
  .card-hover:hover {
    transform: translateY(-4px);
  }
```

- [ ] **Step 2: Verify the entire app builds and all tests pass**

```bash
npm run build && npm test
```

Expected: Build succeeds, all tests pass.

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: add card hover animations and final polish"
```

---

## Task 12: Final Verification

- [ ] **Step 1: Run full test suite**

```bash
npm test
```

Expected: All tests pass (packages.test.ts and quiz-logic.test.ts).

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: Build succeeds with all static pages generated.

- [ ] **Step 3: Start dev server and manually verify**

```bash
npm run dev
```

Verify in browser:
- `/` — Landing page loads with hero, trust bar, featured packages, how-it-works, comparison, pricing, FAQ
- `/packages` — All 20 packages display, filters work
- `/packages/email-management` — Detail page loads with architecture, missions, pricing
- `/quiz` — Quiz flows through 4 questions
- `/quiz/results?a=...` — Results show recommended packages
- `/checkout/email-management` — Waitlist page loads
- Mobile responsive on all pages

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: final build verification — marketplace website complete"
```
