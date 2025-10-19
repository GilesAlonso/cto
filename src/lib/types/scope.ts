// Shared TypeScript interfaces for ScopeReport domain

export type EstimationMode = 'hours' | 'points';

export interface EstimateRange {
  low: number;
  high: number;
}

export interface ScopeGoal {
  id: string;
  text: string;
}

export interface ScopeItem {
  id: string;
  title: string;
  description?: string;
  // Dual estimate fields for uncertainty-aware estimation
  estimateLow: number; // minimum/optimistic estimate
  estimateHigh: number; // maximum/pessimistic estimate
  tags?: string[];
}

export interface ScopeRisk {
  id: string;
  description: string;
  likelihood: number; // 1-5
  impact: number; // 1-5
  mitigation?: string;
}

export interface ScopeMilestone {
  id: string;
  name: string;
  dueDate: string; // ISO8601 date string
  description?: string;
}

export interface ScopeReport {
  id: string;
  projectName: string;
  goals: ScopeGoal[];
  scopeItems: ScopeItem[];
  risks?: ScopeRisk[];
  milestones?: ScopeMilestone[];
  estimationMode: EstimationMode;
  overallEstimate: EstimateRange;
  createdAt: string; // ISO8601 date-time string
  updatedAt?: string; // ISO8601 date-time string
}
