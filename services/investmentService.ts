import { analyzeFinancials } from "./analysis/financialAnalysis";
import { analyzeMarket } from "./analysis/marketAnalysis";
import { analyzeNews } from "./analysis/newsAnalysis";
import { analyzePriceHistory } from "./analysis/priceHistory";
import { analyzeCompanyProfile } from "./analysis/companyProfile";

import { committeeAgent } from "@/agents/committeeAgent";

export async function analyzeCompany(
  symbol: string
) {

  const profile = await analyzeCompanyProfile(symbol);
  const financial = await analyzeFinancials(symbol);

  const market = await analyzeMarket(symbol);

  const news = await analyzeNews(symbol);
  const history = await analyzePriceHistory(symbol);

  const committee = committeeAgent({

    financial,

    market,

    news,

  });

 return {

    symbol,

    profile,

    financial,

    market,

    history,

    news,

    committee,

};

}