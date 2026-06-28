import Card from "../ui/Card";
import Badge from "../ui/Badge";

import { useEffect, useRef, useState } from "react";

import { formatMarketCap, marketCapINR } from "@/utils/format";
import { usdToInr } from "@/utils/currency";

interface Props {
  analysis: any;
  onDownload: () => void;
  onCompare: () => void;
}

export default function HeroCard({
  analysis,
  onCompare,
}: Props) {
  if (!analysis) return null;

  const profile = analysis.financial.profile;
  const committee = analysis.committee;
  const market = analysis.market;

  const [livePrice, setLivePrice] = useState(market.currentPrice);
  const [livePercent, setLivePercent] = useState(
    market.percentChange
  );
  const [updatedAt, setUpdatedAt] = useState("Just now");

  const [countdown, setCountdown] = useState(15);

  const previousPrice = useRef(market.currentPrice);

  const [priceFlash, setPriceFlash] = useState<"up" | "down" | "">("");

  const badgeColor =
    committee.recommendation === "Strong Buy"
      ? "green"
      : committee.recommendation === "Buy"
      ? "green"
      : committee.recommendation === "Hold"
      ? "yellow"
      : committee.recommendation === "Watch"
      ? "orange"
      : "red";

  useEffect(() => {
    async function refreshPrice() {
      try {
        const response = await fetch(
          `/api/live-price?symbol=${profile.ticker}`
        );

        const data = await response.json();

        if (data.price !== undefined) {

  if (data.price > previousPrice.current) {

    setPriceFlash("up");

  } else if (data.price < previousPrice.current) {

    setPriceFlash("down");

  }

  previousPrice.current = data.price;

  setLivePrice(data.price);

  setLivePercent(data.percent);

  setUpdatedAt(new Date().toLocaleTimeString());

  setTimeout(() => {

    setPriceFlash("");

  }, 700);

}
      } catch (err) {
        console.error(err);
      }
    }

    refreshPrice();

    const interval = setInterval(refreshPrice, 15000);

    const timer = setInterval(() => {

setCountdown((c)=>{

if(c===1) return 15;

return c-1;

});

},1000);

    return () => {clearInterval(interval);clearInterval(timer);};
  }, [profile.ticker]);

  return (
    <Card>
      {/* Header */}

      <div className="flex justify-between items-start">

        <div className="flex gap-5">

          <img
            src={profile.logo}
            alt={profile.name}
            className="w-24 h-24 rounded-2xl bg-white p-3 shadow-lg"
          />

          <div>

            <h1 className="text-4xl font-bold">
              {profile.name}
            </h1>

            <p className="text-muted mt-2">
              {profile.ticker} • {profile.finnhubIndustry}
            </p>

            <a
              href={profile.weburl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-blue-500 hover:underline"
            >
              🌐 Visit Official Website
            </a>

          </div>

        </div>

        <div className="flex flex-col items-end gap-3">

          <Badge
            text={committee.recommendation}
            color={badgeColor as any}
          />

          <span className="text-yellow-400 text-xl">
            ★★★★★
          </span>

        </div>

      </div>

      {/* Metrics */}

      <div className="grid md:grid-cols-4 gap-6 mt-10">

        {/* Market Cap */}

        <div>

          <p className="text-muted">
            Market Cap
          </p>

          <h2 className="text-2xl font-bold">
            {formatMarketCap(
              profile.marketCapitalization
            )}
          </h2>

          <p className="text-sm text-muted">
            {marketCapINR(profile.marketCapitalization)}
          </p>

        </div>

        {/* Live Price */}

        <div>

          <p className="text-muted">
            Current Price
          </p>

          <h2
  className={`

text-2xl

font-bold

transition-all

duration-500

rounded-lg

inline-block

px-2

${
priceFlash === "up"
? "bg-green-500/20 text-green-500 scale-110"
: priceFlash === "down"
? "bg-red-500/20 text-red-500 scale-110"
: livePercent >= 0
? "text-green-500"
: "text-red-500"
}

`}
>
            ${livePrice.toFixed(2)}
          </h2>

          <p className="text-sm text-muted">
            ₹
            {usdToInr(livePrice).toLocaleString(
              "en-IN"
            )}
          </p>

          <p
            className={`mt-2 text-sm font-semibold ${
              livePercent >= 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {livePercent >= 0 ? "▲" : "▼"}{" "}
            {livePercent.toFixed(2)}%
          </p>

          <p className="text-xs text-green-500 mt-1">
            <span className="animate-pulse">

🟢 LIVE

</span>

<span className="text-muted">

Updated {updatedAt}

•

Refresh in {countdown}s

</span>
          </p>

        </div>

        {/* Confidence */}

        <div>

          <p className="text-muted">
            Confidence
          </p>

          <h2 className="text-2xl font-bold">
            {committee.confidence}%
          </h2>

          <p className="text-green-500 text-sm mt-1">
            AI Confidence
          </p>

        </div>

        {/* IPO */}

        <div>

          <p className="text-muted">
            IPO
          </p>

          <h2 className="text-2xl font-bold">
            {new Date(profile.ipo).toLocaleDateString(
              "en-IN",
              {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }
            )}
          </h2>

          <p className="text-sm text-muted">
            Listed Date
          </p>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex gap-4 mt-10">

        <button
          onClick={onCompare}
          className="bg-primary hover:bg-primary-hover text-white rounded-xl px-8 py-4 font-semibold transition"
        >
          Compare Companies
        </button>

      </div>

    </Card>
  );
}