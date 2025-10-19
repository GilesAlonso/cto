import { z } from 'zod';

// Reusable primitives
export const EstimationModeSchema = z.enum(['hours', 'points']);

export const EstimateRangeSchema = z
  .object({
    low: z.number().min(0),
    high: z.number().min(0),
  })
  .strict()
  .refine((val) => val.low <= val.high, {
    message: 'low must be less than or equal to high',
    path: ['high'],
  });

export const ScopeGoalSchema = z
  .object({
    id: z.string().min(1),
    text: z.string().min(1),
  })
  .strict();

export const ScopeItemSchema = z
  .object({
    id: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1).optional(),
    estimateLow: z.number().min(0),
    estimateHigh: z.number().min(0),
    tags: z.array(z.string().min(1)).optional(),
  })
  .strict()
  .refine((val) => val.estimateLow <= val.estimateHigh, {
    message: 'estimateLow must be less than or equal to estimateHigh',
    path: ['estimateHigh'],
  });

export const ScopeRiskSchema = z
  .object({
    id: z.string().min(1),
    description: z.string().min(1),
    likelihood: z.number().int().min(1).max(5),
    impact: z.number().int().min(1).max(5),
    mitigation: z.string().min(1).optional(),
  })
  .strict();

export const ScopeMilestoneSchema = z
  .object({
    id: z.string().min(1),
    name: z.string().min(1),
    dueDate: z.string().datetime(),
    description: z.string().min(1).optional(),
  })
  .strict();

export const ScopeReportSchema = z
  .object({
    id: z.string().min(1),
    projectName: z.string().min(1),
    goals: z.array(ScopeGoalSchema),
    scopeItems: z.array(ScopeItemSchema),
    risks: z.array(ScopeRiskSchema).optional(),
    milestones: z.array(ScopeMilestoneSchema).optional(),
    estimationMode: EstimationModeSchema,
    overallEstimate: EstimateRangeSchema,
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime().optional(),
  })
  .strict();

export type ScopeReportInput = z.input<typeof ScopeReportSchema>;
export type ScopeReportOutput = z.output<typeof ScopeReportSchema>;
