import {
  getCompanyProfile,
  getCompanyMetrics,
} from "@/services/api/finnhub";

import { generateInvestmentScore } from "@/engine/scoreEngine";

export async function analyzeFinancials(symbol: string) {
  const profile = await getCompanyProfile(symbol);
  const metrics = await getCompanyMetrics(symbol);

  const scores = generateInvestmentScore(metrics.metric);

  return {
    profile,
    metrics: metrics.metric,
    scores,
  };
}