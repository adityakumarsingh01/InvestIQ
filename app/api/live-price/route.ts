import { NextRequest, NextResponse } from "next/server";
import { getQuote } from "@/services/api/finnhub";

export async function GET(request: NextRequest) {
  const symbol = request.nextUrl.searchParams.get("symbol");

  if (!symbol) {
    return NextResponse.json(
      { error: "Missing symbol" },
      { status: 400 }
    );
  }

  try {
    const quote = await getQuote(symbol);

    return NextResponse.json({
      price: quote.c,
      change: quote.d,
      percent: quote.dp,
      high: quote.h,
      low: quote.l,
      previousClose: quote.pc,
    });

  } catch {

    return NextResponse.json(
      { error: "Unable to fetch price" },
      { status: 500 }
    );

  }
}