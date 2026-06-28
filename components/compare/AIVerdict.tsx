interface Props {
  first: any;
  second: any;
}

export default function AIVerdict({
  first,
  second,
}: Props) {

  const winner =
    first.financial.scores.overall >
    second.financial.scores.overall
      ? first
      : second;

  const loser =
    winner.symbol === first.symbol
      ? second
      : first;

  return (
    <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-xl p-6 border border-blue-500">

      <h2 className="text-2xl font-bold mb-5">
        🤖 InvestIQ AI Verdict
      </h2>

      <p className="text-lg">
        Based on financial strength, valuation,
        growth, risk, and market trends,
        <span className="font-bold text-green-400">
          {" "}{winner.symbol}
        </span>
        is currently a better investment than
        <span className="font-bold text-red-400">
          {" "}{loser.symbol}
        </span>.
      </p>

      <div className="grid grid-cols-2 gap-6 mt-6">

        <div>
          <h3 className="font-bold text-green-400 mb-2">
            Why {winner.symbol} Wins
          </h3>

          <ul className="space-y-2 text-gray-300">
            {winner.committee.reasons
              .slice(0,3)
              .map((item:string,index:number)=>(
                <li key={index}>
                  ✅ {item}
                </li>
            ))}
          </ul>

        </div>

        <div>

          <h3 className="font-bold text-red-400 mb-2">
            Weaknesses of {loser.symbol}
          </h3>

          <ul className="space-y-2 text-gray-300">

            {loser.committee.weaknesses
              .slice(0,3)
              .map((item:string,index:number)=>(
                <li key={index}>
                  ⚠️ {item}
                </li>
            ))}

          </ul>

        </div>

      </div>

    </div>
  );
}