import { NextResponse } from "next/server";
import { getCompanyInformation } from "@/services/api/fmp";

export async function GET() {
  const company = await getCompanyInformation("AAPL");

  console.log(company);

  return NextResponse.json({
    success: true,
    company,
  });
}