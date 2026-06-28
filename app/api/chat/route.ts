import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { question, analysis } = await req.json();

    const q = question.toLowerCase();

    const financial = analysis.financial;
    const market = analysis.market;
    const committee = analysis.committee;

    let answer = "";

    if (
      q.includes("buy") ||
      q.includes("invest") ||
      q.includes("purchase")
    ) {
      answer = `
Recommendation: ${committee.recommendation}

Overall Score: ${financial.scores.overall}/100

Top Reasons:
${committee.reasons.map((r: string) => `• ${r}`).join("\n")}

Risk Factors:
${committee.weaknesses.map((w: string) => `• ${w}`).join("\n")}
`;
    }

    else if (
      q.includes("risk")
    ) {

      answer = `

Risk Score: ${financial.scores.risk}/100

Main Risks:

${committee.weaknesses.map((w:string)=>`• ${w}`).join("\n")}

`;

    }

    else if (
      q.includes("growth")
    ) {

      answer = `

Growth Score: ${financial.scores.growth}/100

Growth Highlights:

${committee.strengths.map((s:string)=>`• ${s}`).join("\n")}

`;

    }

    else if (
      q.includes("valuation")
    ) {

      answer = `

Valuation Score: ${financial.scores.valuation}/100

The company appears to have a valuation profile based on the analyzed financial metrics.

`;

    }

    else if (
      q.includes("price")
    ) {

      answer = `

Current Price

$${market.currentPrice}

Today's Change

${market.percentChange}%

Trend

${market.trend}

`;

    }

    else {

      answer = `

I can answer questions like:

• Should I invest?

• What are the risks?

• Explain the valuation.

• How strong is growth?

• What's the current price?

`;

    }

    return NextResponse.json({
      answer,
    });

  }

  catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "Chat failed",
      },
      {
        status: 500,
      }
    );

  }

}