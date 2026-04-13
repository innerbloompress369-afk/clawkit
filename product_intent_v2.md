# PRODUCT_INTENT.md — OpenClaw Setup Marketplace (V2 — LOCKED)

## Non-Negotiable Truth

This product exists to give **non-technical users a working, intelligent OpenClaw system** for their specific business — without requiring them to understand configs, YAML, Docker, or agent architecture.

It is NOT:
- A custom AI builder
- A hosting platform (that's MyClaw.ai)
- A freelance setup service (that's MyClaw.tech)
- An unvetted skill dump (that's ClawHub)
- A generic automation tool

It IS:
> A curated marketplace of pre-built, security-vetted OpenClaw packages — each designed for a specific business use case — matched to buyer intent through a guided selection flow.

---

## Core Concept (FINAL)

### What We Sell

Pre-built OpenClaw systems ("packages") that are:
- Researched from the best existing repos and agent architectures
- Rebuilt as our own proprietary templates
- Security-vetted and quality-controlled
- Packaged with non-technical install guides (video, images, step-by-step)
- Matched to the buyer's business intent

### What Makes This Different From Chat

Every package includes a **non-negotiable baseline** that transforms OpenClaw from a simple chatbot into an intelligent assistant:

- **Agentic agent structures** — defined roles, decision logic, ask/act thresholds
- **Persistent memory** — structured memory systems (MEMORY.md, context files)
- **Security rules** — permission boundaries, data handling, environment checks
- **Multi-agent orchestration** — specialized agents coordinated by workflows
- **Connectors & integrations** — tools mapped to the specific use case
- **Proactive behavior** — heartbeat loops, scheduled checks, autonomous task execution
- **Install validation** — environment checks, pre-flight verification

> This baseline is what separates "AI chat" from "intelligent assistant." Every package ships with it.

---

## How It Works

### Step 1 — Browse & Discover (Landing Page)

User lands on the marketplace and immediately understands:
- What we do
- What they'll get
- How it works

The landing page should create excitement. The user should think:
> "This is exactly what I need."

Packages are displayed as cards with:
- Clear name and use case
- What it does (plain English)
- What's included (agents, connectors, workflows)
- Preview of the system architecture
- Install difficulty indicator
- Pricing tier

### Step 2 — Intent Matching (Guided Selection)

If the user isn't sure which package fits, a guided selection flow helps:
- Asks about their business type
- Asks what outcome they want
- Recommends the best-fit package(s)

This is NOT a custom builder. It matches existing packages to intent.

### Step 3 — Purchase

Three pricing tiers:

| Tier | What They Get | Price Range |
|------|--------------|-------------|
| **Self-Install** | Package + video guides + step-by-step docs + troubleshooting | $ (lowest) |
| **Guided Install** | Everything above + live guided install session | $$ (mid) |
| **Done-For-You** | Everything above + we install and configure it for them | $$$ (premium) |

Optional: Bundle pricing for multiple packages.

### Step 4 — Install

CRITICAL: This is where most OpenClaw products fail. Our install experience must be:
- **Non-technical** — no assumed knowledge
- **Linear** — one step at a time, no branching
- **Visual** — videos, screenshots, annotated images
- **Zero ambiguity** — exact commands, exact clicks, expected outcomes
- **Pre-flight checklist** — verify environment before starting
- **Troubleshooting built in** — common failures with exact fixes
- **Progress indicators** — user always knows where they are

> If the install fails, the product fails.

### Step 5 — First Results (Proof of Value)

Every package includes **3 "First Missions"** — immediate actions that produce visible results fast.

The user should feel:
> "This is already working for me."

NOT:
> "I installed complicated software."

---

## Package Architecture (Non-Negotiable Baseline)

Every package we build MUST include:

### Mandatory Files
| File | Purpose |
|------|---------|
| `MISSION.md` | Goal-specific system purpose — shaped by business type |
| `PLAYBOOK.md` | Workflow-specific procedures — what the system does and when |
| `HEARTBEAT.md` | Proactive loops — scheduled checks, autonomous actions |
| `TOOLS.md` | Connectors mapped to the use case — why each tool matters |
| `MEMORY.md` | Structured memory index — persistent context across sessions |
| `SECURITY.md` | Permission boundaries, data handling rules, environment constraints |

### Mandatory Architecture
- Agent behavior logic (ask/act thresholds by risk + domain)
- Multi-agent orchestration (where complexity warrants it)
- Memory hygiene (structured storage, cleanup, context management)
- Install validation (environment checks, dependency verification)
- Connector configuration (pre-mapped integrations)

### Token Optimization & Model Routing (NON-NEGOTIABLE)

Every package MUST include intelligent model routing and token management. OpenClaw API costs can run $300-750/month without optimization. Our packages ship with cost controls built in.

**Required Components:**

| Component | Tool | Purpose |
|-----------|------|---------|
| **Model Router** | `claw-llm-router` plugin | Routes each request to the right model tier — SIMPLE (cheapest), MEDIUM, COMPLEX, REASONING (most powerful). Rule-based, local scoring, zero external API calls. Managed via `/router` slash commands. |
| **Gateway Layer** | LiteLLM | Provider abstraction, automatic fallbacks, spend tracking per user. Already has official OpenClaw integration. |
| **Native Config** | OpenClaw built-in | `contextPruning` with `cache-ttl`, `contextTokens` limits, `keepLastAssistants`, `softTrim`, model fallback chains, thinking mode disabled for non-reasoning tasks. |

**What This Delivers:**
- Up to 80% cost reduction vs. single-model usage
- Automatic quality matching — hard tasks get the best model, simple tasks get the cheapest
- Spend tracking and budget controls out of the box
- No user configuration required — ships pre-tuned per package

**Per-Package Tuning:**
Each package's router tiers are calibrated to its use case:
- A legal assistant routes contract analysis to REASONING tier, but client scheduling to SIMPLE
- A lead gen system routes qualification logic to COMPLEX, but follow-up messages to SIMPLE
- Different businesses = different routing profiles

> The user should never think about model selection or token costs. The system handles it.

### Intent-Shaped Intelligence (CRITICAL)
Different businesses = different systems, not add-ons.

A real estate agent's system ≠ a lawyer's system ≠ an e-commerce system.

These are fundamentally different architectures:
- Different agents
- Different workflows
- Different connectors
- Different memory structures
- Different proactive behaviors
- Different risk thresholds

---

## The 20 Base Packages

Categories determined by market research, demand analysis, and gap identification.

### Tier A — Highest Demand / Clearest ROI

| # | Package | Target User | Core Value |
|---|---------|-------------|------------|
| 1 | **Lead Generation & Sales Pipeline** | Service businesses, agencies, consultants | Capture leads, qualify, follow up, track pipeline |
| 2 | **Customer Follow-Up & Retention** | Any business with repeat customers | Post-service follow-up, review requests, re-engagement |
| 3 | **Email Management & Smart Outreach** | Professionals drowning in email | Triage, draft, schedule, follow-up automation |
| 4 | **Social Media & Content Engine** | Small businesses, creators, agencies | Content planning, creation, scheduling, engagement |
| 5 | **Scheduling & Calendar Command Center** | Busy professionals, service businesses | Appointment booking, conflict resolution, prep notes |

### Tier B — Strong Vertical Demand

| # | Package | Target User | Core Value |
|---|---------|-------------|------------|
| 6 | **Real Estate Agent Assistant** | Realtors, property managers | Listing management, buyer/seller follow-up, market research |
| 7 | **Legal Practice Assistant** | Solo attorneys, small firms | Contract review, client intake, deadline tracking, research |
| 8 | **Healthcare Practice Manager** | Clinics, solo practitioners | Patient follow-up, compliance (HIPAA), scheduling, documentation |
| 9 | **Financial Advisor / Bookkeeper** | Accountants, financial advisors | Client reporting, expense tracking, tax prep support |
| 10 | **Agency & Freelancer Ops** | Creative agencies, freelancers | Project tracking, client comms, deliverable management |

### Tier C — Growing / Underserved Markets

| # | Package | Target User | Core Value |
|---|---------|-------------|------------|
| 11 | **E-Commerce & Online Store** | Shopify/Etsy sellers, DTC brands | Product listings, inventory, customer service, marketing |
| 12 | **Customer Support & Help Desk** | Any business with support volume | Ticket triage, knowledge base, escalation, response drafting |
| 13 | **HR & Recruiting** | Growing companies, recruiters | Job posting, candidate screening, onboarding workflows |
| 14 | **Personal Productivity & Task Manager** | Knowledge workers, executives | Task capture, prioritization, daily briefings, project tracking |
| 15 | **Knowledge Base & Research** | Consultants, researchers, analysts | Document analysis, research synthesis, knowledge organization |

### Tier D — Differentiation / Market Gaps

| # | Package | Target User | Core Value |
|---|---------|-------------|------------|
| 16 | **Home Services & Trades** | HVAC, plumbing, electrical, contractors | Job scheduling, estimate follow-up, review requests, dispatch |
| 17 | **Education & Tutoring** | Tutors, course creators, coaches | Student management, content creation, progress tracking |
| 18 | **Consulting & Professional Services** | Management consultants, advisors | Client deliverables, research, proposal generation |
| 19 | **Marketing Analytics & Reporting** | Marketing teams, agencies | Campaign tracking, report generation, competitor monitoring |
| 20 | **CRM & Contact Management** | Any relationship-driven business | Contact enrichment, interaction logging, pipeline management |

> These 20 are the starting base. Each must be validated against existing repos to ensure we're building from the best available architecture patterns.

---

## Package Development Process

### How We Build Each Package

1. **Research** — Scrape and evaluate existing repos, skills, and agent architectures for the use case
2. **Select** — Identify the best patterns, architectures, and approaches
3. **Build** — Create our own proprietary package using the best elements + our non-negotiable baseline
4. **Vet** — Security audit, quality check, install testing
5. **Document** — Non-technical install guide with video, images, step-by-step
6. **Test** — End-to-end: fresh install → first missions → working system
7. **Ship** — Publish to marketplace with clear positioning

### Quality Standard

Every package must pass:
- [ ] Fresh install completes without errors on standard environments
- [ ] Non-technical person can follow install guide without help
- [ ] First 3 missions produce visible results
- [ ] Security audit passes (no data exfiltration, proper permissions)
- [ ] All connectors work as documented
- [ ] Memory system initializes correctly
- [ ] Proactive behaviors fire as expected

---

## Competitive Positioning

### We Are NOT:

| Competitor | What They Sell | Why We're Different |
|-----------|---------------|-------------------|
| **MyClaw.ai** | Hosting infrastructure | We sell the intelligence, not the server |
| **MyClaw.tech** | One-on-one human setup | We scale with pre-built packages |
| **ClawHub** | Unvetted community skills | We curate, vet, and package complete systems |
| **Claw Mart** | Persona configs + playbooks | We build full architectures, not just prompts |
| **OpenClawPro** | VPS installation | We deliver business-specific systems, not generic installs |

### We ARE:

> The trusted source for business-specific OpenClaw systems that work on day one.

### Positioning Statement:

> "We build OpenClaw systems for your business. Pick your use case. Install in minutes. Get results today."

---

## UX Requirements (STRICT)

### Landing Page Must:
- Create immediate excitement and clarity
- Show packages as browsable cards
- Make the value obvious in 5 seconds
- Include guided selection flow for uncertain buyers
- Feature real use case examples and results

### After Purchase, User Must Feel:
> "I have a system working for me."

### NOT:
> "I bought complicated software."

### Language Rules:

**Use:**
- OpenClaw setup / system / package / configuration
- "Built for [your business type]"
- "Install in minutes"
- "Get results today"

**Avoid:**
- Operators (as primary terminology)
- AI workflows / automation platform
- Template marketplace
- Generic AI builder language
- Technical jargon (YAML, Docker, configs, repos)

---

## Failure Conditions (RED FLAGS)

If the product feels like:
- An unvetted skill dump → immediate correction
- A hosting platform → immediate correction
- A generic AI builder → immediate correction
- Confusing to browse or buy → immediate correction
- Difficult to install → immediate correction
- No visible results after install → immediate correction

---

## Build Enforcement Rules

When building this product, Claude MUST:

1. Anchor everything to **pre-built, use-case-specific OpenClaw packages**
2. Reject custom generation / wizard-builds-from-scratch patterns
3. Ensure every package includes the non-negotiable baseline
4. Prioritize non-technical usability at every step
5. Simplify install experience to extreme clarity (video, images, steps)
6. Ensure browse → select → buy → install → results flow is seamless
7. Research existing repos before building any package
8. Build proprietary versions inspired by the best — never resell others' work
9. Security-vet every package before shipping
10. Include 3 "First Missions" with every package
11. Flag drift from this intent immediately

---

## Pricing Model

### Package Pricing (Per Package)

| Tier | Includes | Suggested Range |
|------|----------|----------------|
| **Self-Install** | Package + video guides + docs + troubleshooting | $49 – $99 |
| **Guided Install** | Above + 1-hour guided session | $149 – $249 |
| **Done-For-You** | Above + full install + configuration + onboarding | $349 – $599 |

### Bundle Pricing
- 3-pack: 20% discount
- 5-pack: 30% discount
- Full library access: subscription model ($X/month)

### Ongoing Support (Optional Add-On)
- Monthly support: $29/month (email support + updates)
- Priority support: $79/month (live chat + priority updates + new packages)

> Pricing informed by competitive analysis: MyClaw.ai charges $19-79/mo for hosting alone. MyClaw.tech charges for human setup. ClawHub premium skills sell $10-200. Our packages deliver more value (complete systems vs. individual skills).

---

## Guiding Principle

If a user cannot:

1. Understand what they're getting in 5 seconds
2. Find the right package for their business
3. Install it without confusion
4. Get a visible result quickly

> The product has failed.

---

## Final Definition

This product is:

> A curated marketplace of pre-built, security-vetted OpenClaw systems — each designed for a specific business — delivered with extreme simplicity so non-technical users get real results on day one.

We research the best. We build our own. We make it simple. We deliver results.
