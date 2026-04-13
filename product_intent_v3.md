# PRODUCT_INTENT.md — OpenClaw Setup Marketplace (V3 — RESEARCH-VALIDATED)

> **V3 Changelog:** This version incorporates findings from the Pre-Build Research Report (April 12, 2026). All competitive claims verified against live data. Tier rankings adjusted by market demand analysis. Pricing restructured against consultant benchmarks. Technical stack validated. Install architecture defined. Sections marked `[RESEARCH-UPDATED]` indicate material changes from V2.

---

## Non-Negotiable Truth

This product exists to give **non-technical users a working, intelligent OpenClaw system** for their specific business — without requiring them to understand configs, YAML, Docker, or agent architecture.

It is NOT:
- A custom AI builder
- A hosting platform (that's MyClaw.ai)
- A freelance setup service (that's MyClaw.tech)
- An unvetted skill dump (that's ClawHub — where 1,467 malicious skills have been detected)
- A generic automation tool
- A persona/playbook store (that's Claw Mart — though they've expanded beyond this, see Competitive Positioning)

It IS:
> A curated marketplace of pre-built, security-vetted OpenClaw packages — each designed for a specific business use case — matched to buyer intent through a guided selection flow.

---

## Core Concept (FINAL)

### What We Sell

Pre-built OpenClaw systems ("packages") that are:
- Researched from the best existing repos and agent architectures
- Rebuilt as our own proprietary templates
- Security-vetted and quality-controlled (our #1 differentiator — competitors don't do this)
- Packaged with non-technical install guides (video, images, step-by-step)
- Matched to the buyer's business intent
- Cost-optimized with intelligent model routing (saves users $200-600/month vs. unoptimized usage)

### What Makes This Different From Chat

Every package includes a **non-negotiable baseline** that transforms OpenClaw from a simple chatbot into an intelligent assistant:

- **Agentic agent structures** — defined roles, decision logic, ask/act thresholds
- **Persistent memory** — structured memory systems (MEMORY.md, context files)
- **Security rules** — permission boundaries, data handling, environment checks
- **Multi-agent orchestration** — specialized agents coordinated by workflows
- **Connectors & integrations** — tools mapped to the specific use case
- **Proactive behavior** — heartbeat loops, scheduled checks, autonomous task execution
- **Install validation** — environment checks, pre-flight verification
- **Cost controls** — intelligent model routing so the user never overspends on API costs

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
- Estimated monthly API cost (transparency builds trust)

### Step 2 — Intent Matching (Guided Selection)

If the user isn't sure which package fits, a guided selection flow helps:
- Asks about their business type
- Asks what outcome they want
- Recommends the best-fit package(s)

This is NOT a custom builder. It matches existing packages to intent.

### Step 3 — Purchase

Three pricing tiers (see Pricing Model section for details):

| Tier | What They Get | Price |
|------|--------------|-------|
| **Self-Install** | Package + video guides + step-by-step docs + troubleshooting | $29 – $49 |
| **Guided Install** | Everything above + 1-hour live guided install session | $199 |
| **Done-For-You** | Everything above + full install + configuration + onboarding + 3 months Pro support | $699 + $49/mo |

Optional: Bundle pricing for multiple packages.

### Step 4 — Install `[RESEARCH-UPDATED]`

CRITICAL: This is where most OpenClaw products fail. Our install experience must be:
- **Non-technical** — no assumed knowledge
- **Linear** — one step at a time, no branching
- **Visual** — videos, screenshots, annotated images
- **Zero ambiguity** — exact commands, exact clicks, expected outcomes
- **Pre-flight checklist** — verify environment before starting
- **Troubleshooting built in** — common failures with exact fixes
- **Progress indicators** — user always knows where they are

**Install Architecture Decision (LOCKED):**
- Electron-based native desktop installer (95% success rate in comparable products)
- Bundles Node.js 18.x LTS + Python 3.11.x (eliminates 80% of common install failures)
- Zero terminal commands required for Self-Install tier
- 10-15 minute target install time

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
| `ROUTER.md` | Model routing configuration — tier assignments, cost targets, fallback chains |

### Mandatory Architecture
- Agent behavior logic (ask/act thresholds by risk + domain)
- Multi-agent orchestration (where complexity warrants it)
- Memory hygiene (structured storage, cleanup, context management)
- Install validation (environment checks, dependency verification)
- Connector configuration (pre-mapped integrations)

### Token Optimization & Model Routing (NON-NEGOTIABLE) `[RESEARCH-UPDATED]`

Every package MUST include intelligent model routing and token management. OpenClaw API costs can run $300-750/month without optimization. Our packages ship with cost controls built in.

**Required Components:**

| Component | Tool | Purpose | Verified? |
|-----------|------|---------|-----------|
| **Model Router** | `claw-llm-router` plugin | Routes each request to the right model tier — SIMPLE (cheapest), MEDIUM, COMPLEX, REASONING (most powerful). Rule-based, local scoring, zero external API calls. Managed via `/router` slash commands. | **YES — Production-ready** |
| **Gateway Layer** | LiteLLM | Provider abstraction, automatic fallbacks, spend tracking per user. Official OpenClaw integration documented. | **YES — Production-ready, open source** |
| **OpenClaw Config** | OpenClaw settings | `contextPruning` with `cache-ttl`, `contextTokens` limits, `keepLastAssistants`, `softTrim`, model fallback chains, thinking mode disabled for non-reasoning tasks. | **PARTIAL — These are OpenClaw-level configs, NOT Claude Code native features. Do not conflate.** |

**Current API Pricing Reference (as of April 2026):**

| Model | Input (per 1M tokens) | Output (per 1M tokens) |
|-------|----------------------|------------------------|
| Claude Opus 4.6 | $5.00 | $25.00 |
| Claude Sonnet 4.6 | $3.00 | $15.00 |
| Claude Haiku 4.5 | $1.00 | $5.00 |

**Realistic Cost Reduction by Workload Type:**

| Workload Profile | % Simple Tasks | Estimated Savings | Example Package |
|-----------------|---------------|-------------------|-----------------|
| Simple-heavy | 60%+ | **70-85%** | Scheduling, Follow-Up |
| Balanced | 30-60% | **40-60%** | Lead Gen, Social Media |
| Complex-heavy | <30% | **20-35%** | Legal, Healthcare |

> **V2 claimed "up to 80% cost reduction" as a blanket statement. V3 sets tiered expectations by workload type.** Marketing materials should say "up to 85% savings" with an asterisk referencing workload composition.

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
- Different model routing profiles

---

## The 20 Base Packages `[RESEARCH-UPDATED]`

Categories validated by market research, demand analysis, competitive gap identification, and TAM/willingness-to-pay data (April 2026). Tier rankings adjusted from V2 based on findings.

### Tier A — Highest Demand / Clearest ROI

**Build order: 1 → 2 → 3 in sequence. These ship first.**

| # | Package | Target User | Core Value | Market Size | Competition Level |
|---|---------|-------------|------------|-------------|-------------------|
| 1 | **Email Management & Smart Outreach** | Professionals drowning in email | Triage, draft, schedule, follow-up automation | $6.65B → $15B by 2030 | Moderate (Inbox Zero is dominant OSS) |
| 2 | **Social Media & Content Engine** | Small businesses, creators, agencies | Content planning, creation, scheduling, engagement | $21.6B (22-24% CAGR) | Low for AI-native tools |
| 3 | **Lead Generation & Sales Pipeline** | Service businesses, agencies, consultants | Capture leads, qualify, follow up, track pipeline | $5.6B → $12.6B | High — differentiate on compliance + ABM |
| 4 | **Customer Follow-Up & Retention** | Any business with repeat customers | Post-service follow-up, review requests, re-engagement | $3.8B | Low — no vertical-specific solutions |
| 5 | **Scheduling & Calendar Command Center** | Busy professionals, service businesses | Appointment booking, conflict resolution, prep notes | $2.1B | Very Low — major opportunity |

> **V3 Change:** Email Management moved from #3 to #1 (highest non-tech adoption, fastest time-to-value at 1-2 days). Social Media moved from #4 to #2 (largest single market at $21.6B). Lead Gen moved from #1 to #3 (proven but saturated — needs compliance/ABM differentiation to win).

### Tier B — Strong Vertical Demand

**Build order: 6 → 7 after Tier A completes. Others follow based on early sales data.**

| # | Package | Target User | Core Value | Market Size | Competition Level |
|---|---------|-------------|------------|-------------|-------------------|
| 6 | **Home Services & Trades** | HVAC, plumbing, electrical, contractors | Job scheduling, estimate follow-up, review requests, dispatch, crew management | $3-5B | **ZERO** — No open-source solutions exist |
| 7 | **Real Estate Agent Assistant** | Realtors, property managers | Listing management, buyer/seller follow-up, market research, CMA automation | $12B+ | Low — no MLS integrations in OSS |
| 8 | **Legal Practice Assistant** | Solo attorneys, small firms | Contract review, client intake, deadline tracking, research, ethics checking | $4.2B | Low (LawGlance is basic) |
| 9 | **Healthcare Practice Manager** | Clinics, solo practitioners | Patient follow-up, compliance (HIPAA), scheduling, documentation | $8.7B | Very Low — privacy gaps everywhere |
| 10 | **Financial Advisor / Bookkeeper** | Accountants, financial advisors | Client reporting, expense tracking, tax prep support | $3.1B | Low (FinRobot is investment-focused) |

> **V3 Change:** Home Services & Trades moved UP from Tier D (#16) to Tier B (#6). Research found ZERO competition, exceptional willingness to pay ($150-400/month), and severely underserved non-technical buyer profile. This is a blue ocean.

### Tier C — Growing / Underserved Markets

| # | Package | Target User | Core Value | Market Size | Competition Level |
|---|---------|-------------|------------|-------------|-------------------|
| 11 | **Agency & Freelancer Ops** | Creative agencies, freelancers | Project tracking, client comms, deliverable management | $2.8B | Moderate |
| 12 | **E-Commerce & Online Store** | Shopify/Etsy sellers, DTC brands | Product listings, inventory, customer service, marketing | $5.2B | Moderate |
| 13 | **Customer Support & Help Desk** | Any business with support volume | Ticket triage, knowledge base, escalation, response drafting | $4.1B | Mature (Chatwoot, Helpy) |
| 14 | **Personal Productivity & Task Manager** | Knowledge workers, executives | Task capture, prioritization, daily briefings, project tracking | $1.8B | Moderate |
| 15 | **Knowledge Base & Research** | Consultants, researchers, analysts | Document analysis, research synthesis, knowledge organization | $1.5B | Moderate |

### Tier D — Differentiation / Future Expansion

| # | Package | Target User | Core Value | Market Size | Competition Level |
|---|---------|-------------|------------|-------------|-------------------|
| 16 | **HR & Recruiting** | Growing companies, recruiters | Job posting, candidate screening, onboarding workflows | $3.6B | Moderate |
| 17 | **Education & Tutoring** | Tutors, course creators, coaches | Student management, content creation, progress tracking | $2.4B | Low (math-focused only) |
| 18 | **Consulting & Professional Services** | Management consultants, advisors | Client deliverables, research, proposal generation | $1.9B | Very Low |
| 19 | **Marketing Analytics & Reporting** | Marketing teams, agencies | Campaign tracking, report generation, competitor monitoring | $2.7B | Low |
| 20 | **CRM & Contact Management** | Any relationship-driven business | Contact enrichment, interaction logging, pipeline management | $73-90B TAM but **extremely saturated** | Very High (HubSpot, Salesforce dominate) |

> **V3 Change:** CRM stays in Tier D despite massive TAM — market is saturated. Better positioned as an embedded feature within other packages rather than a standalone product. HR & Recruiting moved down from Tier C.

### Packages Under Consideration (From Research)

These categories showed strong demand signals but were not in V2. Evaluate for V2 expansion:

| Package | Market Size | Why Consider |
|---------|-------------|--------------|
| **AI Customer Service & Chatbot Builder** | $5-8B | High demand, overlaps with #13 but distinct |
| **AI Content Creation & Copywriting** | $4-6B | Explosive growth, overlaps with #2 but distinct |
| **Subscription/Billing Management** | $6-10B | SaaS creator market, underserved |

> These 20 are the starting base. Each has been validated against existing repos to ensure we're building from the best available architecture patterns. See Research Report for per-package architecture findings.

---

## Package Development Process

### How We Build Each Package

1. **Research** — Evaluate existing repos, skills, and agent architectures for the use case (per-package findings documented in Research Report)
2. **Select** — Identify the best patterns, architectures, and approaches
3. **Build** — Create our own proprietary package using the best elements + our non-negotiable baseline
4. **Vet** — Security audit, quality check, install testing (use ClawHub's 1,467 malicious skills as our standard for what NOT to ship)
5. **Document** — Non-technical install guide with video, images, step-by-step
6. **Test** — End-to-end: fresh install → first missions → working system (on all Tier 1 supported environments)
7. **Ship** — Publish to marketplace with clear positioning

### Key Architecture Patterns to Leverage (From Research)

| Pattern | Best For | Source Frameworks |
|---------|----------|-------------------|
| **Single-Agent + Tools** | Simple packages (Scheduling, Follow-Up) | LangChain, native OpenClaw |
| **Multi-Agent Orchestration** | Complex packages (Legal, Healthcare, Lead Gen) | CrewAI (46.6K stars), LangGraph, AutoGen (56K stars) |
| **RAG + Tool Calling** | Knowledge-heavy packages (Legal, Research, Consulting) | LlamaIndex, LangChain RAG |
| **Workflow Engine + AI** | Automation-heavy packages (E-Commerce, Email) | n8n, Activepieces |

### Quality Standard

Every package must pass:
- [ ] Fresh install completes without errors on all Tier 1 environments (Windows 10/11, macOS 12-15)
- [ ] Non-technical person can follow install guide without help
- [ ] Install completes in under 15 minutes
- [ ] First 3 missions produce visible results
- [ ] Security audit passes (no data exfiltration, proper permissions, no prompt injection vectors)
- [ ] All connectors work as documented
- [ ] Memory system initializes correctly
- [ ] Proactive behaviors fire as expected
- [ ] Model routing reduces costs by at least 40% vs. single-model baseline
- [ ] API spend stays within documented monthly estimate

---

## Competitive Positioning `[RESEARCH-UPDATED]`

### Direct Competitors (Verified April 2026)

| Competitor | What They Actually Sell | Threat Level | Why We're Different |
|-----------|------------------------|--------------|-------------------|
| **MyClaw.ai** | Hosting infrastructure. Lite/Pro/Max tiers, $19-79/mo confirmed. | **Low** — complementary | We sell the intelligence, not the server. Can recommend MyClaw.ai for hosting. |
| **MyClaw.tech** | Founder-led human setup service. Custom/negotiated pricing. | **Low** — doesn't scale | We scale with pre-built packages. They do 1:1 consulting. |
| **ClawHub** | Community skills marketplace. 10,700+ skills. **1,467 malicious skills detected** (91% prompt injection + malware). Pricing unverified. | **Medium** — brand risk | We curate, vet, and package complete systems. Their security problem is our marketing angle. |
| **Claw Mart** | **CORRECTED:** Sells complete packages including memory systems, multi-agent architectures, and decision frameworks. NOT just persona configs + playbooks as V2 stated. | **HIGH** — closest competitor | We differentiate on install experience, security vetting, cost optimization, and non-technical guides. Must monitor closely. |
| **OpenClawPro** | **CORRECTED:** More sophisticated than generic VPS install. Features 6-layer memory system (85.9% recall accuracy), hardened security. | **Medium-High** | We differentiate on business-specific architectures and non-technical UX. Their memory system is strong — learn from it. |

### Adjacent Competitors (Discovered in Research)

| Competitor | What They Sell | Threat Level | Notes |
|-----------|---------------|--------------|-------|
| **Moltbot** | Open-source, 100% free, 50+ integrations | **Medium** — free alternative | Direct ecosystem competitor. Can't compete on price. Compete on completeness and support. |
| **Zapier Agents** | ~100 pre-built agent templates, 8,000 app integrations | **Medium** — massive install base | Non-technical audience overlap. Weaker on depth, stronger on breadth. |
| **n8n Workflows** | 9,166+ community workflows, 600+ AI agent templates | **Medium** — developer-focused | More technical audience but growing non-technical tools. |
| **CrewAI Marketplace** | Enterprise marketplace (launched Q2 2025). Pre-configured agent workflows. | **Low-Medium** — enterprise focus | Different audience (enterprise vs. SMB). Watch for downmarket moves. |

### We ARE:

> The trusted source for business-specific OpenClaw systems that work on day one — security-vetted, cost-optimized, and built for people who aren't developers.

### Positioning Statement:

> "We build OpenClaw systems for your business. Pick your use case. Install in minutes. Get results today."

### Key Differentiators (Ranked by Defensibility):

1. **Security vetting** — In a market where 14% of ClawHub skills are malicious, we're the only marketplace that audits every package
2. **Non-technical install experience** — Electron installer, zero terminal, 15-minute target
3. **Cost optimization built in** — Model routing saves $200-600/month out of the box
4. **Business-specific architectures** — Not generic agents with industry labels. Fundamentally different systems.
5. **Complete packages** — Memory, security, orchestration, proactive behavior. Not just prompts.

---

## Install Architecture `[NEW SECTION]`

### Supported Environments

| Platform | Market Share | Support Tier | Notes |
|----------|-------------|--------------|-------|
| **Windows 11** | 72% combined | **Tier 1 (Full)** | Primary target. Bundle runtimes to avoid PATH issues. |
| **Windows 10 (21H2+)** | (with above) | **Tier 1 (Full)** | Test WSL2 requirement scenarios. |
| **macOS 12-15** | 18% | **Tier 1 (Full)** | Intel + Apple Silicon. Xcode CLI tools may add 10+ min. |
| **Ubuntu 22.04 LTS** | 10% | **Tier 2 (Supported)** | Verify demand before investing. Add post-launch if data warrants. |

### Minimum Hardware Requirements

- **CPU:** Intel i5 / AMD Ryzen 3 (2018 or newer)
- **RAM:** 4 GB minimum
- **Storage:** 10 GB free space
- **Internet:** 5 Mbps broadband

### Installer Approach (LOCKED)

**Electron-based native desktop installer:**
- Achieves 95% success rate in comparable products
- Bundles Node.js 18.x LTS + Python 3.11.x (eliminates 80% of common failures)
- Zero terminal commands for Self-Install tier
- 10-15 minute target install time
- Auto-detects OS, architecture, and existing dependencies
- Pre-flight checklist runs before any changes are made

### Top Failure Points (Build Troubleshooting For These)

**Tier 1 — Catastrophic (Install Fails Completely):**
- Node.js installation fails or wrong version
- PATH environment variable not set correctly
- Insufficient disk space
- Network timeout during dependency download
- Missing or invalid API key

**Tier 2 — Major (Significant Friction):**
- macOS: Xcode command line tools not installed
- Windows: Docker requires WSL2 + BIOS virtualization
- Port conflicts with existing services
- Firewall blocking required connections
- npm cache corruption

### NOT Supported (Explicit Exclusions)

- Corporate proxy environments (provide separate IT guide)
- Docker without WSL2 on Windows
- WSL2 for non-technical users (too complex)
- Legacy OS: Windows 7/8, macOS 10.x
- Enterprise Linux distributions
- Offline / air-gapped deployments

### Installer Build Timeline

| Phase | Timeframe | Deliverable |
|-------|-----------|-------------|
| Windows MVP | Weeks 1-4 | Windows installer for Package #1 |
| macOS | Weeks 5-6 | macOS installer |
| Linux | Weeks 7-8 | Ubuntu installer |
| Polish | Weeks 9-10 | Auto-update, telemetry, crash reporting |

---

## UX Requirements (STRICT)

### Landing Page Must:
- Create immediate excitement and clarity
- Show packages as browsable cards
- Make the value obvious in 5 seconds
- Include guided selection flow for uncertain buyers
- Feature real use case examples and results
- Show estimated monthly API cost per package (transparency)
- Highlight security vetting as top differentiator

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
- "Security-vetted" / "Verified safe"
- "Saves you $X/month on AI costs"

**Avoid:**
- Operators (as primary terminology)
- AI workflows / automation platform
- Template marketplace
- Generic AI builder language
- Technical jargon (YAML, Docker, configs, repos)
- Unqualified cost savings claims (always specify workload type)

---

## Failure Conditions (RED FLAGS)

If the product feels like:
- An unvetted skill dump → immediate correction
- A hosting platform → immediate correction
- A generic AI builder → immediate correction
- Confusing to browse or buy → immediate correction
- Difficult to install → immediate correction
- No visible results after install → immediate correction
- A weaker version of Claw Mart → immediate correction (we must out-execute on install UX and security)
- Overpriced for what you get → immediate correction (value must be obvious)

---

## Build Enforcement Rules

When building this product, Claude MUST:

1. Anchor everything to **pre-built, use-case-specific OpenClaw packages**
2. Reject custom generation / wizard-builds-from-scratch patterns
3. Ensure every package includes the non-negotiable baseline (including ROUTER.md)
4. Prioritize non-technical usability at every step
5. Simplify install experience to extreme clarity (video, images, steps)
6. Ensure browse → select → buy → install → results flow is seamless
7. Research existing repos before building any package (leverage Research Report findings)
8. Build proprietary versions inspired by the best — never resell others' work
9. Security-vet every package before shipping (audit for prompt injection, data exfiltration, permission escalation)
10. Include 3 "First Missions" with every package
11. Flag drift from this intent immediately
12. Set realistic cost expectations per workload type (never blanket "80% savings")
13. Test every package on all Tier 1 environments before shipping
14. Track Claw Mart closely — they are our closest competitor, not a weak player

---

## Pricing Model `[RESEARCH-UPDATED]`

### Package Pricing (Per Package)

| Tier | Includes | Price | Rationale |
|------|----------|-------|-----------|
| **Self-Install** | Package + video guides + docs + troubleshooting | **$29 – $49** | Low barrier drives volume. Acts as funnel to higher tiers. Zapier/n8n are free-$20/mo — we must compete on entry price. |
| **Guided Install** | Above + 1-hour live guided install session | **$199** | Well-positioned vs. $150-300/hr consultant rates. Fixed price simplifies decision. |
| **Done-For-You** | Above + full install + configuration + onboarding + 3 months Pro support included | **$699 + $49/mo** (6-month minimum) | V2 was $349-599 — underpriced by 60-90% vs. consultant market ($2,500-15,000). Hybrid model adds recurring revenue. |

> **V3 Change:** Self-Install lowered to drive volume. Done-For-You increased significantly with recurring component. Research showed V2 pricing left substantial revenue on the table — the Done-For-You adjustment alone represents a 58% revenue increase per sale.

### Bundle Pricing
- 3-pack: 20% discount
- 5-pack: 30% discount
- Full library access: $149/month (all packages + all updates + priority support)

### Ongoing Support (Optional Add-On for Self-Install and Guided Install)
- Monthly support: $29/month (email support + updates)
- Priority support: $79/month (live chat + priority updates + new packages)

> Note: Done-For-You tier includes 3 months of Pro support ($79/mo value) bundled in, then converts to optional renewal.

### Competitive Price Benchmarks (Verified)

| Competitor | Pricing | Our Position |
|-----------|---------|-------------|
| MyClaw.ai hosting | $19-79/mo | We're complementary, not competing on hosting |
| MyClaw.tech setup | Custom/negotiated | We're cheaper and scalable |
| ClawHub premium skills | $10-200 | We deliver complete systems, not individual skills |
| Claw Mart packages | Varies | We add security vetting + install UX + cost optimization |
| Freelance AI setup (Fiverr/Upwork) | $150-350/hr | Our Done-For-You is 70-80% cheaper for comparable work |
| Professional AI consultants | $2,500-15,000/project | Our Done-For-You is 85-95% cheaper |

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

---

## Appendix: Research References

This V3 intent file is backed by the **OpenClaw Pre-Build Research Report** (April 12, 2026), which contains:

1. **Research Area 1:** Existing repo & agent architecture analysis for all 20 package categories
2. **Research Area 2:** Competitive landscape validation (all 5 named competitors + 4 additional discovered)
3. **Research Area 3:** Market demand validation with TAM data, willingness-to-pay signals, and tier re-ranking rationale
4. **Research Area 4:** Token optimization stack verification (claw-llm-router, LiteLLM, native configs)
5. **Research Area 5:** Pricing validation against consultant benchmarks, competitor pricing, and SaaS entry points
6. **Research Area 6:** Install environment matrix, hardware requirements, failure points, and installer architecture

Data sources include: Grand View Research, Gartner, Technavio, SkyQuest Technology, Market Research Future, Emarsys, Business Research Insights, and 15+ additional market research firms.
