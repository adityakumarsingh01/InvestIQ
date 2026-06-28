const BASE_URL = "https://finnhub.io/api/v1";

const API_KEY = process.env.FINNHUB_API_KEY;

export async function getCompanyProfile(symbol: string) {
  const response = await fetch(
    `${BASE_URL}/stock/profile2?symbol=${symbol}&token=${API_KEY}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch company profile.");
  }

  return await response.json();
}

export async function getCompanyMetrics(symbol: string) {
  const response = await fetch(
    `${BASE_URL}/stock/metric?symbol=${symbol}&metric=all&token=${API_KEY}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch company metrics.");
  }

  return await response.json();
}