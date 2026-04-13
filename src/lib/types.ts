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
