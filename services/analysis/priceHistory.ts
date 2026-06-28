import { getPriceHistory } from "../api/yahoo";

export async function analyzePriceHistory(
  symbol: string
) {
  const result = (await getPriceHistory(symbol)) as any;

  console.log("Quotes:", result?.quotes?.length);

  const quotes = result?.quotes as any[] | undefined;

if (!quotes) {
  return [];
}
console.log("History Count:", result?.quotes?.length);
return quotes
  .filter(
    (item: any) =>
      item.close !== null &&
      item.close !== undefined
  )
  .map((item: any) => ({
    date: new Date(item.date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    }),
    price: item.close,
    open: item.open,
    high: item.high,
    low: item.low,
    volume: item.volume ?? 0,
  }));

  return (result.quotes as any[])
    .filter(
      (item: any) =>
        item.close !== null &&
        item.close !== undefined
    )
    .map((item: any) => ({
      date: new Date(item.date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
      }),
      price: item.close,
      open: item.open,
      high: item.high,
      low: item.low,
      volume: item.volume ?? 0,
    }));
}