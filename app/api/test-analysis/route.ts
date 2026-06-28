import { NextResponse } from "next/server";

import { analyzeFinancials } from "@/services/analysis/financialAnalysis";
import { analyzeMarket } from "@/services/analysis/marketAnalysis";
import { analyzeNews } from "@/services/analysis/newsAnalysis";

export async function GET() {
  const financial = await analyzeFinancials("AAPL");
  const market = await analyzeMarket("AAPL");
  const news = await analyzeNews("AAPL");

  return NextResponse.json({
    financial,
    market,
    news,
  });
}