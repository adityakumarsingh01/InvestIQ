import { calculateGrowthScore } from "./growth";
import { calculateRiskScore } from "./risk";
import { calculateValuationScore } from "./valuation";
import { getRecommendation } from "./recommendation";

export function generateInvestmentScore(metrics: any) {

    const valuation = calculateValuationScore(metrics);

    const growth = calculateGrowthScore(metrics);

    const risk = calculateRiskScore(metrics);

    const overall = Math.round(
        (valuation + growth + risk) / 3
    );

    return {

        valuation,

        growth,

        risk,

        overall,

        recommendation: getRecommendation(overall)

    };

}