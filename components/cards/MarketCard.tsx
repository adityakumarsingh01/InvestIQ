import { usdToInr } from "@/utils/currency";
import MarketStatsCard from "./MarketStatsCard";
import TrendBox from "../ui/TrendBox";
import ChangeBox from "../ui/ChangeBox";

interface Props {
  market: any;
  financial: any;
}

export default function MarketCard({
    market,
    financial,
}: Props) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">

      <h2 className="text-2xl font-bold mb-6">
        Market Statistics
      </h2>

      <div className="grid grid-cols-2 gap-4">

  <MarketStatsCard
    title="Current Price"
    value={`$${market.currentPrice.toFixed(2)}`}
    subtitle={`₹${usdToInr(market.currentPrice).toLocaleString("en-IN")}`}
  />

  <MarketStatsCard
title="Previous Close"
value={`$${market.previousClose.toFixed(2)}`}
subtitle={`₹${usdToInr(market.previousClose).toLocaleString("en-IN")}`}
/>

  <MarketStatsCard
title="Day High"
value={`$${market.dayHigh.toFixed(2)}`}
subtitle={`₹${usdToInr(market.dayHigh).toLocaleString("en-IN")}`}
/>

  <MarketStatsCard
title="Day Low"
value={`$${market.dayLow.toFixed(2)}`}
subtitle={`₹${usdToInr(market.dayLow).toLocaleString("en-IN")}`}
/>

    <MarketStatsCard
title="52 Week High"
value={`$${financial.metrics["52WeekHigh"].toFixed(2)}`}
subtitle={`₹${usdToInr(financial.metrics["52WeekHigh"]).toLocaleString("en-IN")}`}
/>

<MarketStatsCard
title="52 Week Low"
value={`$${financial.metrics["52WeekLow"].toFixed(2)}`}
subtitle={`₹${usdToInr(financial.metrics["52WeekLow"]).toLocaleString("en-IN")}`}
/>

<MarketStatsCard
title="Dividend Yield"
value={`${financial.metrics.currentDividendYieldTTM.toFixed(2)} %`}
/>

<MarketStatsCard
title="P/E Ratio"
value={financial.metrics.peTTM.toFixed(2)}
/>

<MarketStatsCard
title="Trend"
value={market.trend}
/>

<MarketStatsCard
title="Today's Change"
value={`${market.percentChange.toFixed(2)} %`}
/>

</div>

    </div>
  );
}

