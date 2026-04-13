import type { Package, Tier } from "./types";

const packages: Package[] = [
  // TIER A (5 packages)
  {
    name: "Email Management & Smart Outreach",
    slug: "email-management",
    tagline: "Tame your inbox and automate follow-ups",
    description: "Triage incoming email, draft responses, schedule follow-ups, and manage outreach campaigns — all on autopilot. Your inbox works for you, not the other way around.",
    tier: "A", tierRank: 1,
    category: "Productivity",
    tags: ["email", "outreach", "follow-up", "automation", "inbox"],
    icon: "Mail",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy", estimatedInstallMinutes: 10,
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
    description: "Content planning, creation, scheduling, and engagement tracking for every major platform. From idea to published post — the system handles the heavy lifting.",
    tier: "A", tierRank: 2,
    category: "Marketing",
    tags: ["social media", "content", "scheduling", "marketing", "engagement"],
    icon: "Share2",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy", estimatedInstallMinutes: 12,
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
    description: "Capture leads from any channel, qualify them automatically, follow up on schedule, and track your entire pipeline. Never miss a prospect again.",
    tier: "A", tierRank: 3,
    category: "Sales & Marketing",
    tags: ["leads", "sales", "crm", "follow-up", "pipeline", "qualification"],
    icon: "Target",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy", estimatedInstallMinutes: 12,
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
    description: "Post-service follow-ups, review requests, re-engagement campaigns, and retention workflows. Turn one-time buyers into repeat customers.",
    tier: "A", tierRank: 4,
    category: "Customer Success",
    tags: ["follow-up", "retention", "reviews", "re-engagement", "loyalty"],
    icon: "Heart",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy", estimatedInstallMinutes: 10,
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
    description: "Appointment booking, conflict resolution, prep notes, and smart scheduling. Your calendar manages itself so you can focus on the work.",
    tier: "A", tierRank: 5,
    category: "Productivity",
    tags: ["scheduling", "calendar", "appointments", "booking", "time management"],
    icon: "Calendar",
    pricing: { selfInstall: 29, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy", estimatedInstallMinutes: 8,
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

  // TIER B (5 packages)
  {
    name: "Home Services & Trades", slug: "home-services",
    tagline: "Run your trades business like a tech company",
    description: "Job scheduling, estimate follow-up, review requests, dispatch, and crew management — built for HVAC, plumbing, electrical, and contractors.",
    tier: "B", tierRank: 6, category: "Home Services",
    tags: ["hvac", "plumbing", "electrical", "contractor", "trades", "dispatch"],
    icon: "Wrench",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy", estimatedInstallMinutes: 12,
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
    name: "Real Estate Agent Assistant", slug: "real-estate",
    tagline: "Close more deals with less manual work",
    description: "Listing management, buyer/seller follow-up, market research, and CMA automation — built for realtors and property managers.",
    tier: "B", tierRank: 7, category: "Real Estate",
    tags: ["real estate", "listings", "buyers", "sellers", "property", "CMA"],
    icon: "Home",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium", estimatedInstallMinutes: 15,
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
    name: "Legal Practice Assistant", slug: "legal-practice",
    tagline: "More billable hours, less admin work",
    description: "Contract review, client intake, deadline tracking, research assistance, and ethics checking — built for solo attorneys and small firms.",
    tier: "B", tierRank: 8, category: "Legal",
    tags: ["legal", "contracts", "law", "compliance", "client intake"],
    icon: "Scale",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium", estimatedInstallMinutes: 15,
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
    name: "Healthcare Practice Manager", slug: "healthcare",
    tagline: "Better patient care, less paperwork",
    description: "Patient follow-up, HIPAA-compliant workflows, scheduling, and documentation — built for clinics and solo practitioners.",
    tier: "B", tierRank: 9, category: "Healthcare",
    tags: ["healthcare", "patients", "HIPAA", "clinic", "medical", "compliance"],
    icon: "Stethoscope",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "advanced", estimatedInstallMinutes: 20,
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
    name: "Financial Advisor / Bookkeeper", slug: "financial-advisor",
    tagline: "Automate reporting and focus on advising",
    description: "Client reporting, expense tracking, tax prep support, and financial analysis — built for accountants and financial advisors.",
    tier: "B", tierRank: 10, category: "Finance",
    tags: ["finance", "accounting", "tax", "bookkeeping", "reporting"],
    icon: "DollarSign",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium", estimatedInstallMinutes: 15,
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

  // TIER C (5 packages)
  {
    name: "Agency & Freelancer Ops", slug: "agency-ops",
    tagline: "Run your agency without the chaos",
    description: "Project tracking, client communication, and deliverable management — built for creative agencies and freelancers.",
    tier: "C", tierRank: 11, category: "Professional Services",
    tags: ["agency", "freelancer", "projects", "clients", "deliverables"],
    icon: "Briefcase",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy", estimatedInstallMinutes: 12,
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
    name: "E-Commerce & Online Store", slug: "ecommerce",
    tagline: "Sell more with less manual work",
    description: "Product listings, inventory management, customer service automation, and marketing — built for Shopify, Etsy, and DTC sellers.",
    tier: "C", tierRank: 12, category: "E-Commerce",
    tags: ["ecommerce", "shopify", "etsy", "products", "inventory", "marketing"],
    icon: "ShoppingCart",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium", estimatedInstallMinutes: 15,
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
    name: "Customer Support & Help Desk", slug: "customer-support",
    tagline: "Resolve tickets faster, keep customers happier",
    description: "Ticket triage, knowledge base management, escalation workflows, and response drafting — for any business with support volume.",
    tier: "C", tierRank: 13, category: "Customer Success",
    tags: ["support", "help desk", "tickets", "knowledge base", "customer service"],
    icon: "Headphones",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy", estimatedInstallMinutes: 10,
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
    name: "Personal Productivity & Task Manager", slug: "personal-productivity",
    tagline: "Your AI-powered executive assistant",
    description: "Task capture, prioritization, daily briefings, and project tracking — for knowledge workers who want to focus on what matters.",
    tier: "C", tierRank: 14, category: "Productivity",
    tags: ["tasks", "productivity", "planning", "briefings", "project management"],
    icon: "CheckSquare",
    pricing: { selfInstall: 29, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy", estimatedInstallMinutes: 8,
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
    name: "Knowledge Base & Research", slug: "knowledge-base",
    tagline: "Turn information overload into actionable knowledge",
    description: "Document analysis, research synthesis, and knowledge organization — for consultants, researchers, and analysts.",
    tier: "C", tierRank: 15, category: "Research",
    tags: ["research", "knowledge", "documents", "analysis", "synthesis"],
    icon: "BookOpen",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium", estimatedInstallMinutes: 12,
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

  // TIER D (5 packages)
  {
    name: "HR & Recruiting", slug: "hr-recruiting",
    tagline: "Hire faster, onboard smoother",
    description: "Job posting, candidate screening, interview scheduling, and onboarding workflows — for growing companies and recruiters.",
    tier: "D", tierRank: 16, category: "Human Resources",
    tags: ["hr", "recruiting", "hiring", "onboarding", "candidates"],
    icon: "Users",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium", estimatedInstallMinutes: 15,
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
    name: "Education & Tutoring", slug: "education",
    tagline: "Teach smarter, not harder",
    description: "Student management, content creation, progress tracking, and adaptive learning — for tutors, course creators, and coaches.",
    tier: "D", tierRank: 17, category: "Education",
    tags: ["education", "tutoring", "courses", "students", "learning"],
    icon: "GraduationCap",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy", estimatedInstallMinutes: 10,
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
    name: "Consulting & Professional Services", slug: "consulting",
    tagline: "Deliver more value with less overhead",
    description: "Client deliverables, research, proposal generation, and engagement management — for management consultants and advisors.",
    tier: "D", tierRank: 18, category: "Professional Services",
    tags: ["consulting", "proposals", "deliverables", "clients", "advisory"],
    icon: "PieChart",
    pricing: { selfInstall: 49, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium", estimatedInstallMinutes: 15,
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
    name: "Marketing Analytics & Reporting", slug: "marketing-analytics",
    tagline: "Turn data into decisions automatically",
    description: "Campaign tracking, report generation, competitor monitoring, and performance analytics — for marketing teams and agencies.",
    tier: "D", tierRank: 19, category: "Marketing",
    tags: ["analytics", "marketing", "reports", "campaigns", "competitors"],
    icon: "BarChart3",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "medium", estimatedInstallMinutes: 12,
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
    name: "CRM & Contact Management", slug: "crm",
    tagline: "Know every contact, miss no opportunity",
    description: "Contact enrichment, interaction logging, pipeline management, and relationship tracking — for any relationship-driven business.",
    tier: "D", tierRank: 20, category: "Sales",
    tags: ["crm", "contacts", "relationships", "pipeline", "networking"],
    icon: "Contact",
    pricing: { selfInstall: 39, guidedInstall: 199, doneForYou: 699, doneForYouMonthly: 49 },
    installDifficulty: "easy", estimatedInstallMinutes: 10,
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
