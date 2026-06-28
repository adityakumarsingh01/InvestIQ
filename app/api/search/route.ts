import { NextRequest, NextResponse } from "next/server";

const companies = [

{ symbol:"AAPL", name:"Apple Inc.", sector:"Technology" },

{ symbol:"MSFT", name:"Microsoft Corporation", sector:"Technology" },

{ symbol:"NVDA", name:"NVIDIA Corporation", sector:"Technology" },

{ symbol:"AMZN", name:"Amazon.com Inc.", sector:"Consumer" },

{ symbol:"GOOGL", name:"Alphabet Inc.", sector:"Technology" },

{ symbol:"META", name:"Meta Platforms", sector:"Technology" },

{ symbol:"TSLA", name:"Tesla Inc.", sector:"Automobile" },

{ symbol:"NFLX", name:"Netflix Inc.", sector:"Entertainment" },

{ symbol:"JPM", name:"JPMorgan Chase", sector:"Banking" },

{ symbol:"AMD", name:"Advanced Micro Devices", sector:"Technology" },

];

export async function GET(request: NextRequest){

const q =
request.nextUrl.searchParams
.get("q")
?.toLowerCase() ?? "";

if(!q){

return NextResponse.json([]);

}

const result =
companies.filter(

company=>

company.symbol.toLowerCase().includes(q) ||

company.name.toLowerCase().includes(q)

);

return NextResponse.json(result);

}