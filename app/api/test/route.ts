import { NextResponse } from "next/server";

import { getCompanyProfile } from "@/services/api/finnhub";

export async function GET() {

    const data = await getCompanyProfile("AAPL");

    return NextResponse.json(data);

}