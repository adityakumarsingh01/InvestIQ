export function calculateValuationScore(metrics: any) {
  let score = 0;

  const pe = metrics.peTTM ?? 999;
  const pb = metrics.pb ?? 999;
  const marketCap = metrics.marketCapitalization ?? 0;

  // PE
  if (pe < 20) score += 35;
  else if (pe < 35) score += 25;
  else score += 10;

  // PB
  if (pb < 5) score += 25;
  else if (pb < 15) score += 15;
  else score += 5;

  // Market Cap (Finnhub returns millions USD)
  if (marketCap > 1000000) score += 40;
  else if (marketCap > 100000) score += 30;
  else score += 20;

  return score;
}