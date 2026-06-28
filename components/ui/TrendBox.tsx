interface Props {
  trend: string;
}

export default function TrendBox({ trend }: Props) {
  const color =
    trend === "Bullish"
      ? "text-green-400"
      : trend === "Bearish"
      ? "text-red-400"
      : "text-yellow-400";

  return (
    <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">

      <p className="text-gray-400 text-sm">
        Trend
      </p>

      <h2 className={`text-2xl font-bold mt-2 ${color}`}>
        {trend}
      </h2>

    </div>
  );
}