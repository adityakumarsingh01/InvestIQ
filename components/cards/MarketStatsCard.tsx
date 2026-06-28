interface Props {
  title: string;
  value: number | string;
  subtitle?: string;
}

export default function MarketStatsCard({
  title,
  value,
  subtitle,
}: Props) {
  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-3">
        {value}
      </h2>

      {subtitle && (
        <p className="text-gray-400 mt-2 text-sm">
          {subtitle}
        </p>
      )}

    </div>
  );
}