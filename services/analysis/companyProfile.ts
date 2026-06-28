import { getCompanyProfile } from "../api/finnhub";
import { companyExecutives } from "@/data/companyExecutives";

export async function analyzeCompanyProfile(
  symbol: string
) {
  const profile = await getCompanyProfile(symbol);

  const executive =
  companyExecutives[
    profile.ticker?.toUpperCase() || symbol.toUpperCase()
  ];

  const exchangeMap: Record<string, string> = {
    "NEW YORK STOCK EXCHANGE, INC.": "NYSE",
    "NASDAQ NMS - GLOBAL MARKET": "NASDAQ",
    "NASDAQ": "NASDAQ",
  };

  return {
    name: profile.name,

    ticker: profile.ticker,

    exchange:
      exchangeMap[profile.exchange] ??
      profile.exchange,

    industry: profile.finnhubIndustry,

    country: profile.country,

    currency: profile.currency,

    ipo: profile.ipo,

    logo: profile.logo,

    website: profile.weburl,

    description:
      `${profile.name} is a leading company in the ${profile.finnhubIndustry} industry. Listed on ${exchangeMap[profile.exchange] ?? profile.exchange}, the company primarily operates in ${profile.country} and focuses on long-term business growth, innovation, and creating value for shareholders.`,

    // These will be replaced with real values
    // after integrating a richer Company Profile API.

    ceo:
        executive?.ceo ??
        "Information Unavailable",

    founded:
        executive?.founded ??
        (profile.ipo
            ? new Date(profile.ipo).getFullYear().toString()
            : "Information Unavailable"),

    headquarters:
        executive?.headquarters ??
        profile.country,

  };
}