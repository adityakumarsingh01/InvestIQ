import { NextRequest, NextResponse } from "next/server";
import { analyzeCompany } from "@/services/investmentService";

export async function POST(req: NextRequest) {
  try {
    const { company } = await req.json();

    if (!company) {
      return NextResponse.json(
        { error: "Company name is required." },
        { status: 400 }
      );
    }

    const response = await analyzeCompany(company);

    return NextResponse.json({
      success: true,
      analysis: response
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to analyze company." },
      { status: 500 }
    );
  }
}