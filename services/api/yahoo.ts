import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance();

export async function getPriceHistory(symbol: string) {
  try {
    const period1 = new Date();
    period1.setFullYear(period1.getFullYear() - 5);

    const period2 = new Date();

    const result = await yahooFinance.chart(symbol, {
      period1,
      period2,
      interval: "1d",
    });

    console.log("Yahoo Result:", result);

    return result;
  } catch (error) {
    console.error("Yahoo Finance Error:", error);
    return null;
  }
}