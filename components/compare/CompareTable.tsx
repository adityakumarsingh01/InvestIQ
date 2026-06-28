import ProgressCard from "../cards/ProgressCard";

export default function CompareTable({
  first,
  second,
}: any) {

  const usdToInr = 86;

  const formatINR = (usd: number) =>
    `₹${(usd * usdToInr).toLocaleString("en-IN")}`;

  const winner =
    first.financial.scores.overall >
    second.financial.scores.overall
      ? first
      : second;

  return (

<div className="space-y-8">

<div className="grid grid-cols-2 gap-8">

<div
  className={`rounded-xl p-6 border-2 transition-all ${
    winner.symbol === first.symbol
      ? "bg-green-900/20 border-green-500 shadow-lg shadow-green-500/20"
      : "bg-slate-800 border-slate-700"
  }`}
>

<h2 className="text-3xl font-bold">
  {first.symbol}
  {winner.symbol === first.symbol && " 🏆"}
</h2>

<p className="text-gray-400 mt-2">

${first.market.currentPrice.toFixed(2)}

</p>

<p className="text-green-400">

{formatINR(first.market.currentPrice)}

</p>

<div
  className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold ${
    first.committee.recommendation?.toLowerCase().includes("buy")
      ? "bg-green-600"
      : first.committee.recommendation?.toLowerCase().includes("sell")
      ? "bg-red-600"
      : "bg-yellow-600"
  }`}
>
  {first.committee.recommendation}
</div>

<h3
  className={`text-3xl font-bold mt-5 ${
    winner.symbol === first.symbol
      ? "text-green-400"
      : "text-red-400"
  }`}
>
  {first.financial.scores.overall}/100
</h3>

<ProgressCard
title="Overall Score"
score={first.financial.scores.overall}
/>

<div className="border-t border-slate-700 mt-5 pt-4 space-y-2 text-sm">

  <div className="flex justify-between">
    <span className="text-gray-400">Market Cap</span>
    <span>{first.financial.marketCap}</span>
  </div>

  <div className="flex justify-between">
    <span className="text-gray-400">Current Price</span>
    <span>${first.market.currentPrice.toFixed(2)}</span>
  </div>

  <div className="flex justify-between">
    <span className="text-gray-400">Trend</span>
    <span
      className={
        first.market.trend === "Bullish"
          ? "text-green-400"
          : first.market.trend === "Bearish"
          ? "text-red-400"
          : "text-yellow-400"
      }
    >
      {first.market.trend}
    </span>
  </div>

</div>

</div>

<div
  className={`rounded-xl p-6 border-2 transition-all ${
    winner.symbol === second.symbol
      ? "bg-green-900/20 border-green-500 shadow-lg shadow-green-500/20"
      : "bg-slate-800 border-slate-700"
  }`}
>

<h2 className="text-3xl font-bold">
  {second.symbol}
  {winner.symbol === second.symbol && " 🏆"}
</h2>
<p className="text-gray-400 mt-2">

${second.market.currentPrice.toFixed(2)}

</p>

<p className="text-green-400">

{formatINR(second.market.currentPrice)}

</p>

<div
  className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold ${
    second.committee.recommendation?.toLowerCase().includes("buy")
      ? "bg-green-600"
      : second.committee.recommendation?.toLowerCase().includes("sell")
      ? "bg-red-600"
      : "bg-yellow-600"
  }`}
>
  {second.committee.recommendation}
</div>

<h3
  className={`text-3xl font-bold mt-5 ${
    winner.symbol === second.symbol
      ? "text-green-400"
      : "text-red-400"
  }`}
>
  {second.financial.scores.overall}/100
</h3>

<ProgressCard
title="Overall Score"
score={second.financial.scores.overall}
/>



<div className="border-t border-slate-700 mt-5 pt-4 space-y-2 text-sm">

  <div className="flex justify-between">
    <span className="text-gray-400">Market Cap</span>
    <span>{second.financial.marketCap}</span>
  </div>

  <div className="flex justify-between">
    <span className="text-gray-400">Current Price</span>
    <span>${second.market.currentPrice.toFixed(2)}</span>
  </div>

  <div className="flex justify-between">
    <span className="text-gray-400">Trend</span>
    <span
      className={
        second.market.trend === "Bullish"
          ? "text-green-400"
          : second.market.trend === "Bearish"
          ? "text-red-400"
          : "text-yellow-400"
      }
    >
      {second.market.trend}
    </span>
  </div>

</div>


</div>

</div>

<div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500 rounded-xl p-8 text-center">

<h2 className="text-2xl font-bold">

🏆 Winner

</h2>

<p className="mt-4 text-5xl font-bold text-green-400">
  🏆 {winner.symbol}
</p>

<p className="mt-4 text-gray-300">
  Higher AI score, stronger fundamentals and better investment outlook.
</p>

</div>

</div>

  );

}