"use client";

import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import ChartCard from "./ChartCard";
import TimeRangeSelector from "./TimeRangeSelector";

interface HistoryItem {
  date: string;
  price: number;
  open: number;
  high: number;
  low: number;
  volume: number;
}

interface Props {
  symbol: string;
  history: HistoryItem[];
}

export default function PriceHistoryChart({
  symbol,
  history,
}: Props) {
  const [range, setRange] = useState("1M");

  if (!history || history.length === 0) {
    return (
      <div className="bg-red-500 text-white p-6 rounded-xl">
        No history data received
      </div>
    );
  }

  const filteredData = useMemo(() => {
    switch (range) {
      case "1D":
        return history.slice(-1);

      case "1W":
        return history.slice(-7);

      case "1M":
        return history.slice(-30);

      case "6M":
        return history.slice(-180);

      case "1Y":
        return history.slice(-365);

      case "5Y":
        return history;

      default:
        return history;
    }
  }, [history, range]);

  const positive =
    filteredData[filteredData.length - 1].price >=
    filteredData[0].price;

  const color = positive ? "#22c55e" : "#ef4444";

  const currentPrice =
    filteredData[filteredData.length - 1].price;

  const totalVolume = filteredData.reduce(
    (sum, item) => sum + item.volume,
    0
  );

  const highestPrice = Math.max(
    ...filteredData.map((item) => item.high)
  );

  const lowestPrice = Math.min(
    ...filteredData.map((item) => item.low)
  );

  return (
    <ChartCard title="📈 Price History">

      <TimeRangeSelector
        selected={range}
        onChange={setRange}
      />

      <div className="h-[420px] mt-6">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={filteredData}>

            <defs>
              <linearGradient
                id="priceFill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={color}
                  stopOpacity={0.45}
                />
                <stop
                  offset="95%"
                  stopColor={color}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="date"
              tick={{ fill: "#94a3b8" }}
            />

            <YAxis
              tick={{ fill: "#94a3b8" }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
              }}
            />

            <Area
              type="monotone"
              dataKey="price"
              stroke={color}
              strokeWidth={3}
              fill="url(#priceFill)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-gray-400">Current Price</p>
          <h2 className="text-2xl font-bold mt-2">
            ${currentPrice.toFixed(2)}
          </h2>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-gray-400">Highest</p>
          <h2 className="text-2xl font-bold mt-2 text-green-400">
            ${highestPrice.toFixed(2)}
          </h2>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-gray-400">Lowest</p>
          <h2 className="text-2xl font-bold mt-2 text-red-400">
            ${lowestPrice.toFixed(2)}
          </h2>
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-gray-400">Total Volume</p>
          <h2 className="text-xl font-bold mt-2">
            {totalVolume.toLocaleString()}
          </h2>
        </div>

      </div>

    </ChartCard>
  );
}