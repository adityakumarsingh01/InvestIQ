"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import ChartCard from "./ChartCard";

interface Props {
  score: number;
}

export default function FinancialDonut({
  score,
}: Props) {

  const data = [

    {
      name: "Score",
      value: score,
    },

    {
      name: "Remaining",
      value: 100 - score,
    },

  ];

  return (

    <ChartCard title="📊 Overall Score">

      <div className="h-[320px]">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              innerRadius={70}
              outerRadius={100}
              dataKey="value"
            >

              <Cell fill="#22c55e"/>

              <Cell fill="#1e293b"/>

            </Pie>

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="text-center -mt-40">

        <h2 className="text-5xl font-bold">

          {score}

        </h2>

        <p className="text-gray-400">

          Overall Score

        </p>

      </div>

    </ChartCard>

  );

}