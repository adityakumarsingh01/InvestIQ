"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  scores: any;
}

export default function ScoreChart({ scores }: Props) {

  const data = [
    {
      name: "Valuation",
      score: scores.valuation,
    },
    {
      name: "Growth",
      score: scores.growth,
    },
    {
      name: "Risk",
      score: scores.risk,
    },
    {
      name: "Overall",
      score: scores.overall,
    },
  ];

  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">

      <h2 className="text-xl font-bold mb-6">
        Financial Scores
      </h2>

      <div className="h-80">

        <ResponsiveContainer>

          <BarChart data={data}>

            <XAxis dataKey="name" />

            <YAxis domain={[0, 100]} />

            <Tooltip />

            <Bar
  dataKey="score"
  fill="#f6b23b"
  radius={[6, 6, 0, 0]}
/>

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}