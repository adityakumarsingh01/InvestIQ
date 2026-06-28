"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import ChartCard from "./ChartCard";

interface Props {
  news: any;
}

export default function SentimentPieChart({
  news,
}: Props) {

  const data = [

    {
      name: "Positive",
      value: news.positive,
    },

    {
      name: "Negative",
      value: news.negative,
    },

    {
      name: "Neutral",
      value:
        news.totalArticles -
        news.positive -
        news.negative,
    },

  ];

  const COLORS = [
    "#22c55e",
    "#ef4444",
    "#3b82f6",
  ];

  return (

    <ChartCard title="📰 News Sentiment">

      <div className="h-[320px]">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
              label
            >

              {data.map((_, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </ChartCard>

  );

}