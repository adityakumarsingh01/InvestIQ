interface Props {
  news: any;
}

export default function NewsCard({ news }: Props) {
  if (!news) return null;

  const sentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "Positive":
        return "bg-green-500/20 text-green-400 border-green-500/40";

      case "Negative":
        return "bg-red-500/20 text-red-400 border-red-500/40";

      default:
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/40";
    }
  };

  const impactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "text-red-400";

      case "Medium":
        return "text-yellow-400";

      default:
        return "text-green-400";
    }
  };

  return (
    <div className="bg-card rounded-2xl p-6 border border-border">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold">
            📰 Latest News
          </h2>

          <p className="text-muted mt-1">
            Overall Sentiment:
            <span
              className={`ml-2 px-3 py-1 rounded-full text-sm font-semibold ${sentimentColor(
                news.overallSentiment
              )}`}
            >
              {news.overallSentiment}
            </span>
          </p>

        </div>

        <div className="text-right">

          <p className="text-green-400">
            Positive: {news.positive}
          </p>

          <p className="text-yellow-400">
            Neutral: {news.neutral}
          </p>

          <p className="text-red-400">
            Negative: {news.negative}
          </p>

        </div>

      </div>

      <div className="space-y-5 mt-8">

        {news.headlines.map((item: any, index: number) => (

          <div
            key={index}
            className="bg-card-hover rounded-xl p-5 border border-border hover:border-blue-500 transition"
          >

            <div className="flex justify-between items-center mb-3">

              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold border ${sentimentColor(
                  item.sentiment
                )}`}
              >
                {item.sentiment}
              </span>

              <span
                className={`font-semibold ${impactColor(
                  item.impact
                )}`}
              >
                {item.impact} Impact
              </span>

            </div>

            <h3 className="text-lg font-semibold leading-7">

              {item.headline}

            </h3>

            <p className="text-muted mt-3">

              {item.reason}

            </p>

            <div className="flex justify-between items-center mt-5">

              <div className="space-x-5">

                <span className="text-muted text-sm">

                  {item.source}

                </span>

                <span className="text-blue-400 text-sm">

                  Confidence {item.confidence}%

                </span>

              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                Read Article →
              </a>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}