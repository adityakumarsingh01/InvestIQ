export function formatMarketCap(value: number) {
  if (value >= 1000)
    return `$${(value / 1000).toFixed(2)} T`;

  return `$${value.toFixed(2)} B`;
}

export function marketCapINR(value: number) {
  const inr = value * 86;

  if (inr >= 100000)
    return `₹${(inr / 100000).toFixed(2)} Trillion`;

  return `₹${inr.toFixed(2)} Billion`;
}