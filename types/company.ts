export interface CompanyProfile {
  name: string;
  ticker: string;
  exchange: string;
  sector: string;
  industry: string;
  country: string;
  marketCap: number;
  currentPrice: number;
}

export interface CompanyMetrics {
  peRatio: number;
  pbRatio: number;
  epsGrowth: number;
  roe: number;
  debtToEquity: number;
  currentRatio: number;
}