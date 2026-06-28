export function usdToInr(usd: number) {
  const rate = 86; // Later we'll fetch this live
  return Math.round(usd * rate);
}