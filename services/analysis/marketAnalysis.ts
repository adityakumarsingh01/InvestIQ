import { getQuote } from "@/services/api/finnhub";

export async function analyzeMarket(symbol: string) {
  const quote = await getQuote(symbol);

  const change = quote.dp ?? 0;

  let trend = "Sideways";

  if (change > 2) trend = "Bullish";
  else if (change < -2) trend = "Bearish";

  return {
  symbol,

  currentPrice: quote.c,
  previousClose: quote.pc,
  dayHigh: quote.h,
  dayLow: quote.l,
  percentChange: change,
  trend,
};
}