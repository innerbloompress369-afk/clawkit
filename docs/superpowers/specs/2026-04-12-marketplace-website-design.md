# OpenClaw Marketplace Website — Design Spec

**Sub-Project:** #1 of 5
**Status:** Approved
**Date:** 2026-04-12
**Source:** product_intent_v3.md (research-validated)

---

## Overview

Build the marketplace website for OpenClaw packages — a Next.js + Tailwind application that lets non-technical users browse, discover, and purchase pre-built OpenClaw systems for their specific business.

This is the storefront. Everything else (package content, installer, payments, admin) depends on this.

---

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 14 (App Router) | SSR/SSG for SEO, API routes for future Stripe, React for interactive flows |
| Styling | Tailwind CSS | Mockup already uses it, rapid iteration, dark theme support |
| Content | Static JSON + MDX files | No database needed for V1, version-controlled, easy to update |
| Deployment | Vercel | Zero-config, edge CDN, perfect for Next.js |
| Icons | Lucide React | Clean, consistent, lightweight |
| Animations | Framer Motion (minimal) | Subtle entrance animations, quiz transitions |

---

## Pages & Routes

### `/` — Landing Page

**Purpose:** Immediate excitement and clarity. User understands what we do in 5 seconds.

**Sections (top to bottom):**
1. **Hero** — Headline, sub-headline, CTA ("Browse Packages" / "Find Your Package")
2. **Trust Bar** — Security-vetted count, cost savings stat, install time stat, packages available
3. **How It Works** — 3-step visual: Browse → Install → Results
4. **Featured Packages** — 3-5 top-tier packages as cards
5. **Chat vs Intelligent Assistant** — Visual comparison of what makes our packages different
6. **Pricing Overview** — 3 tiers at a glance
7. **FAQ** — Common questions
8. **Footer** — Links, support, legal

### `/packages` — Package Catalog

**Purpose:** Browse and filter all 20 packages.

**Features:**
- Grid of PackageCards
- Filter by: business category, tier (A/B/C/D), price range, install difficulty
- Sort by: popularity, price, newest
- Search by keyword

### `/packages/[slug]` — Package Detail

**Purpose:** Full information about a single package. This is where the purchase decision happens.

**Sections:**
1. Package name, tagline, tier badge
2. What it does (plain English, 2-3 sentences)
3. What's included (agents, connectors, workflows — listed with icons)
4. Architecture diagram (visual render from JSON)
5. First 3 Missions preview (proof of value)
6. Estimated monthly API cost (with workload type context)
7. Install difficulty indicator
8. Pricing selector (3 tiers) with CTA
9. Related packages

### `/quiz` — Guided Selection Flow

**Purpose:** Match uncertain buyers to the right package(s).

**Flow:**
1. "What type of business do you run?" (multiple choice, 8-10 options)
2. "What's your biggest challenge right now?" (multiple choice, mapped to package value props)
3. "How do you handle [challenge] today?" (gauges current state)
4. "What would success look like?" (maps to specific package outcomes)
5. Results page with 1-3 recommended packages, ranked by fit

**Implementation:** Client-side state machine. No backend needed — scoring logic maps answers to package tags.

### `/quiz/results` — Quiz Results

**Purpose:** Show recommended packages with explanation of why each fits.

**Features:**
- Top recommendation highlighted
- "Why this fits" explanation per package
- Direct link to package detail / checkout
- Option to retake quiz

### `/checkout/[slug]` — Purchase Page

**Purpose:** Select tier and complete purchase.

**V1 (placeholder):** Tier selector + "Coming Soon" / waitlist email capture. Real Stripe integration is Sub-Project #4.

### `/success` — Post-Purchase

**Purpose:** Deliver access and guide next steps.

**V1 (placeholder):** Thank you message + "We'll email you when your package is ready."

---

## Data Architecture

### Package Content Structure

Each package lives in a directory under `content/packages/`:

```
content/packages/lead-generation/
├── meta.json           # Structured metadata
├── description.mdx     # Rich marketing description
├── architecture.json   # Agents, connectors, workflows (for diagram rendering)
├── first-missions.json # The 3 proof-of-value actions
└── thumbnail.png       # Card image
```

### meta.json Schema

```json
{
  "name": "Lead Generation & Sales Pipeline",
  "slug": "lead-generation",
  "tagline": "Capture leads, qualify them, and close deals — automatically",
  "tier": "A",
  "tierRank": 3,
  "category": "Sales & Marketing",
  "tags": ["leads", "sales", "crm", "follow-up", "pipeline"],
  "pricing": {
    "selfInstall": 49,
    "guidedInstall": 199,
    "doneForYou": 699,
    "doneForYouMonthly": 49
  },
  "installDifficulty": "easy",
  "estimatedInstallMinutes": 12,
  "estimatedMonthlyCost": {
    "low": 30,
    "high": 80,
    "workloadType": "balanced"
  },
  "agents": ["Lead Qualifier", "Follow-Up Manager", "Pipeline Tracker"],
  "connectors": ["Email", "CRM", "SMS", "Calendar"],
  "status": "available"
}
```

### architecture.json Schema

```json
{
  "agents": [
    {
      "name": "Lead Qualifier",
      "role": "Scores and qualifies incoming leads",
      "tier": "COMPLEX",
      "connections": ["Follow-Up Manager", "Pipeline Tracker"]
    }
  ],
  "workflows": [
    {
      "name": "New Lead Capture",
      "trigger": "Email received / Form submission",
      "steps": ["Qualify", "Score", "Route", "Follow-up"]
    }
  ],
  "connectors": [
    {
      "name": "Email",
      "purpose": "Inbound lead capture + outbound follow-up"
    }
  ]
}
```

### first-missions.json Schema

```json
{
  "missions": [
    {
      "title": "Capture Your First Lead",
      "description": "Forward a customer inquiry email and watch the system qualify and respond",
      "expectedResult": "Lead scored, follow-up scheduled, entry created in pipeline",
      "estimatedMinutes": 5
    }
  ]
}
```

---

## Key Components

| Component | Purpose | Location |
|-----------|---------|----------|
| `PackageCard` | Browsable card for catalog grid | `components/packages/PackageCard.tsx` |
| `PackageDetail` | Full package page content | `components/packages/PackageDetail.tsx` |
| `ArchitectureDiagram` | Visual render of agents/connectors/workflows | `components/packages/ArchitectureDiagram.tsx` |
| `PricingSelector` | 3-tier pricing with CTA | `components/pricing/PricingSelector.tsx` |
| `QuizFlow` | Step-by-step intent matcher | `components/quiz/QuizFlow.tsx` |
| `QuizResults` | Recommended packages display | `components/quiz/QuizResults.tsx` |
| `TrustBar` | Security/cost/install stats bar | `components/marketing/TrustBar.tsx` |
| `HowItWorks` | 3-step visual explainer | `components/marketing/HowItWorks.tsx` |
| `ComparisonTable` | Chat vs Intelligent Assistant | `components/marketing/ComparisonTable.tsx` |
| `DifficultyBadge` | Easy/Medium/Advanced indicator | `components/ui/DifficultyBadge.tsx` |
| `TierBadge` | A/B/C/D tier indicator | `components/ui/TierBadge.tsx` |
| `Navbar` | Top navigation | `components/layout/Navbar.tsx` |
| `Footer` | Bottom navigation + links | `components/layout/Footer.tsx` |

---

## Visual Direction

Carried forward from approved mockup (`mockup.html`):

- **Theme:** Dark background (#0a0a0a / #111827), emerald accents (#10b981)
- **Cards:** Subtle borders, hover elevation, glass-morphism hints
- **Typography:** Clean sans-serif (Inter or system font stack)
- **Security emphasis:** Shield icons, "Verified Safe" badges, vetting callouts
- **Transparency:** Monthly API cost shown on every package card
- **Mobile-first:** Responsive design, touch-friendly quiz flow

---

## What's Explicitly NOT in This Sub-Project

- Actual OpenClaw package files (Sub-Project #2)
- Electron desktop installer (Sub-Project #3)
- Real Stripe payment processing (Sub-Project #4)
- Admin dashboard (Sub-Project #5)
- User accounts / authentication
- Package download delivery system
- Support ticket system

---

## Success Criteria

1. User lands on homepage and understands what we sell in under 5 seconds
2. User can browse all 20 packages and filter by category
3. User can view full detail page for any package
4. User can complete the guided quiz and get relevant recommendations
5. User can select a pricing tier on any package
6. Site is fully responsive (mobile + desktop)
7. All package data is driven by static JSON (easy to update)
8. Site builds and deploys without errors
9. Lighthouse score > 90 for performance
10. SEO-ready with proper meta tags, OG images, structured data
