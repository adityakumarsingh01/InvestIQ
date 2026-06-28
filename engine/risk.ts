export function calculateRiskScore(metrics: any) {
  let score = 100;

  const debt = metrics["totalDebt/totalEquityQuarterly"] ?? 1;
  const currentRatio = metrics.currentRatioQuarterly ?? 1;
  const beta = metrics.beta ?? 1;

  if (debt > 1) score -= 25;

  if (currentRatio < 1) score -= 20;

  if (beta > 1.5) score -= 20;

  return Math.max(score, 0);
}