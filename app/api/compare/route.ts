import { NextRequest, NextResponse } from "next/server";
import { analyzeCompany } from "@/services/investmentService";

export async function POST(req: NextRequest) {
  try {
    const { company1, company2 } = await req.json();

    const first = await analyzeCompany(company1);
    const second = await analyzeCompany(company2);

    return NextResponse.json({
      first,
      second,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Comparison failed" },
      { status: 500 }
    );
  }
}