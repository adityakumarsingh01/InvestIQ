export interface InvestmentResult {
  company: string;
  symbol: string;

  valuationScore: number;
  growthScore: number;
  riskScore: number;

  overallScore: number;

  recommendation: string;

  summary: string;
}