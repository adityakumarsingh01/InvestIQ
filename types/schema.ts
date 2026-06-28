import { z } from "zod";

export const InvestmentSchema = z.object({
  company: z.string(),

  industry: z.string(),

  overview: z.string(),

  recommendation: z.enum([
    "INVEST",
    "WATCH",
    "PASS"
  ]),

  confidence: z.number(),

  scores: z.object({
    financialHealth: z.number(),
    growthPotential: z.number(),
    marketPosition: z.number(),
    innovation: z.number(),
    riskLevel: z.number(),
  }),

  strengths: z.array(z.string()),

  weaknesses: z.array(z.string()),

  opportunities: z.array(z.string()),

  threats: z.array(z.string()),

  keyRisks: z.array(z.string()),

  summary: z.string(),
});

export type InvestmentResult =
  z.infer<typeof InvestmentSchema>;