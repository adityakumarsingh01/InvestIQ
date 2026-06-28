import {
  getCompanyProfile,
  getCompanyMetrics,
} from "@/services/financialDataService";

import { generateInvestmentScore } from "@/engine/scoreEngine";

export async function financialAgent(symbol: string) {
  const profile = await getCompanyProfile(symbol);
  const metrics = await getCompanyMetrics(symbol);

  const scores = generateInvestmentScore(metrics.metric);

  return {
    company: profile.name,
    symbol: profile.ticker,
    sector: profile.finnhubIndustry,

    valuationScore: scores.valuation,
    growthScore: scores.growth,
    riskScore: scores.risk,

    overallScore: scores.overall,
    recommendation: scores.recommendation,

    financialHealth: scores.valuation,
    growthPotential: scores.growth,

    confidence: scores.overall,

    summary:
      "Financial analysis generated using InvestIQ AI scoring engine.",

    strengths: [],
    weaknesses: [],
    opportunities: [],
    threats: [],
  };
}