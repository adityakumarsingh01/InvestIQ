const BASE_URL = "https://finnhub.io/api/v1";

const API_KEY = process.env.FINNHUB_API_KEY;

export async function fetchData(endpoint: string) {

    try {

        const response = await fetch(
            `${BASE_URL}${endpoint}&token=${API_KEY}`,
            {
                cache: "no-store",
            }
        );

        if (!response.ok) {

            throw new Error("Finnhub API Error");

        }

        return await response.json();

    }

    catch (error) {

        console.error("Finnhub Error:", error);

        return null;

    }

}

export async function getCompanyProfile(symbol: string) {
  return fetchData(`/stock/profile2?symbol=${symbol}`);
}

export async function getCompanyMetrics(symbol: string) {
  return fetchData(`/stock/metric?symbol=${symbol}&metric=all`);
}

export async function getQuote(symbol: string) {
  return fetchData(`/quote?symbol=${symbol}`);
}

export async function getCompanyNews(symbol: string) {

  const today = new Date();

  const from = new Date();

  from.setDate(today.getDate() - 30);

  return fetchData(
    `/company-news?symbol=${symbol}&from=${from.toISOString().slice(0,10)}&to=${today.toISOString().slice(0,10)}`
  );

}