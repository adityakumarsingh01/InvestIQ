import ChartCard from "./ChartCard";

interface Props {
  recommendation: string;
  confidence: number;
}

export default function RecommendationGauge({
  recommendation,
  confidence,
}: Props) {

  return (

    <ChartCard title="🎯 Recommendation">

      <div className="mt-6">

        <div className="flex justify-between text-sm text-gray-400">

          <span>SELL</span>

          <span>BUY</span>

        </div>

        <div className="relative mt-4 h-4 rounded-full bg-slate-700">

          <div
            className="absolute top-0 left-0 h-4 rounded-full bg-green-500"
            style={{
              width: `${confidence}%`,
            }}
          />

        </div>

        <div
          className="mt-6 text-center text-3xl font-bold"
        >
          {recommendation}
        </div>

        <div className="text-center text-gray-400 mt-2">

          Confidence {confidence}%

        </div>

      </div>

    </ChartCard>

  );

}