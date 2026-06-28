import { getCompanyNews } from "@/services/api/finnhub";

const positiveKeywords = [
  "growth",
  "profit",
  "record",
  "acquisition",
  "partnership",
  "expansion",
  "launch",
  "beat",
  "upgrade",
  "innovation",
  "strong",
  "surge",
  "investment",
];

const negativeKeywords = [
  "lawsuit",
  "decline",
  "loss",
  "investigation",
  "layoffs",
  "recall",
  "downgrade",
  "fall",
  "drop",
  "fraud",
  "bankruptcy",
  "fine",
];

function analyzeHeadline(article: any) {
  const text =
    `${article.headline} ${article.summary}`.toLowerCase();

  let score = 0;

  positiveKeywords.forEach((word) => {
    if (text.includes(word)) score++;
  });

  negativeKeywords.forEach((word) => {
    if (text.includes(word)) score--;
  });

  if (score > 0) {
    return {
      ...article,
      sentiment: "Positive",
      impact: score >= 2 ? "High" : "Medium",
      confidence: Math.min(70 + score * 10, 98),
      reason:
        "Positive business developments detected.",
    };
  }

  if (score < 0) {
    return {
      ...article,
      sentiment: "Negative",
      impact: score <= -2 ? "High" : "Medium",
      confidence: Math.min(70 + Math.abs(score) * 10, 98),
      reason:
        "Negative business events detected.",
    };
  }

  return {
    ...article,
    sentiment: "Neutral",
    impact: "Low",
    confidence: 70,
    reason:
      "No strong positive or negative indicators.",
  };
}

export async function analyzeNews(symbol: string) {
  const news = await getCompanyNews(symbol);

  const analyzed = news
    .slice(0, 8)
    .map(analyzeHeadline);

  const positive = analyzed.filter(
  (n: any) => n.sentiment === "Positive"
).length;

  const negative = analyzed.filter(
    (n: any) => n.sentiment === "Negative"
  ).length;

  const neutral = analyzed.filter(
    (n: any) => n.sentiment === "Neutral"
  ).length;

  return {
    totalArticles: analyzed.length,
    positive,
    negative,
    neutral,

    overallSentiment:
      positive > negative
        ? "Positive"
        : negative > positive
        ? "Negative"
        : "Neutral",

    headlines: analyzed,
  };
}