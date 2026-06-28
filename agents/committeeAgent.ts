export interface CommitteeInput {

  financial: any;

  market: any;

  news: any;

}

export function committeeAgent(data: CommitteeInput) {

  const reasons: string[] = [];

  const strengths: string[] = [];

  const weaknesses: string[] = [];

  let confidence = 70;

  //--------------------------------------------------
  // Financial
  //--------------------------------------------------

  if (data.financial.scores.overall >= 80) {

    strengths.push("Strong Financial Performance");

    if(data.financial.scores.growth>=80)

reasons.push("Strong revenue and earnings growth.");

if(data.financial.scores.valuation>=70)

reasons.push("Reasonable valuation compared to peers.");

if(data.financial.scores.risk>=80)

reasons.push("Healthy balance sheet and manageable debt.");

if(data.market.trend==="Bullish")

reasons.push("Positive market momentum supports upside.");

if(data.news.sentiment==="Positive")

reasons.push("Recent news flow supports investor confidence.");

    confidence += 10;

  } else if (data.financial.scores.overall >= 60) {

    strengths.push("Healthy Financial Position");

    reasons.push("Financial metrics are above average.");

    confidence += 5;

  } else {

    weaknesses.push("Weak Financial Performance");

    confidence -= 10;

  }

    //--------------------------------------------------
    // Market
    //--------------------------------------------------

    if (data.market.trend === "Bullish") {

        strengths.push("Positive Market Trend");

        confidence += 8;

    }

    else if (data.market.trend === "Sideways") {

        weaknesses.push("Market lacks short-term momentum");

    }

    else {

        weaknesses.push("Negative Market Momentum");

        confidence -= 8;

    }

  //--------------------------------------------------
// News
//--------------------------------------------------

if (data.news.sentiment === "Positive") {

    strengths.push("Positive News Sentiment");

    confidence += 7;

}

else if (data.news.sentiment === "Neutral") {

    weaknesses.push("No major positive catalyst");

}

else {

    weaknesses.push("Negative News Sentiment");

    confidence -= 7;

}

  //--------------------------------------------------
  // Recommendation
  //--------------------------------------------------

  let recommendation = "Hold";

  if (confidence >= 85)
    recommendation = "Strong Buy";

  else if (confidence >= 75)
    recommendation = "Buy";

  else if (confidence >= 60)
    recommendation = "Hold";

  else
    recommendation = "Avoid";


  //----------------------------------
// Auto Weakness Generator
//----------------------------------

if (weaknesses.length === 0) {

    if (data.financial.metrics.pb > 20)

        weaknesses.push("Premium Valuation");

    if (data.financial.metrics.beta > 1.3)

        weaknesses.push("Higher Price Volatility");

    if (data.market.percentChange < 0)

        weaknesses.push("Recent Price Weakness");

    if (data.news.sentiment === "Neutral")

        weaknesses.push("Limited Positive News");

    if (weaknesses.length === 0)

        weaknesses.push("Short-term Market Uncertainty");

}

  return {

    recommendation,

    confidence,

    strengths,

    weaknesses,

    reasons,

    //----------------------------------

    pros: strengths,

    cons: weaknesses,

    //----------------------------------

    riskLevel:

        confidence >= 85

            ? "Low"

            : confidence >= 70

            ? "Medium"

            : "High",

    //----------------------------------

    expectedReturn:

        confidence >= 85

            ? "High"

            : confidence >= 70

            ? "Moderate"

            : "Low",

    //----------------------------------

    investmentHorizon:

        confidence >= 85

            ? "Long Term"

            : confidence >= 70

            ? "Medium Term"

            : "Short Term",

    //----------------------------------

    targetInvestor:

        confidence >= 85

            ? "Growth Investors"

            : confidence >= 70

            ? "Balanced Investors"

            : "Conservative Investors"

};

}