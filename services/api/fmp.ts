const API_KEY = process.env.FMP_API_KEY;

export async function getCompanyInformation(
  symbol: string
) {
  try {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${API_KEY}`
    );

    const data = await response.json();

    console.log("FMP Response:", data);

    if (!Array.isArray(data) || data.length === 0) {
      return null;
    }

    return data[0];

  } catch (error) {
    console.error("FMP Error:", error);
    return null;
  }
}