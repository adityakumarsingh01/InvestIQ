export function getRecommendation(score: number) {

    if (score >= 85)
        return "Strong Buy";

    if (score >= 70)
        return "Buy";

    if (score >= 55)
        return "Hold";

    if (score >= 40)
        return "Watch";

    return "Avoid";
}