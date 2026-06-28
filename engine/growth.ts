export function calculateGrowthScore(metrics: any) {
  let score = 0;

  const revenueGrowth = metrics.revenueGrowthTTMYoy ?? 0;
  const epsGrowth = metrics.epsGrowthTTMYoy ?? 0;

  if (revenueGrowth > 20) score += 40;
  else if (revenueGrowth > 10) score += 30;
  else score += 15;

  if (epsGrowth > 20) score += 35;
  else if (epsGrowth > 10) score += 25;
  else score += 10;

  const roe = metrics.roeTTM ?? 0;

  if (roe > 25) score += 25;
  else if (roe > 15) score += 15;
  else score += 5;

  return score;
}