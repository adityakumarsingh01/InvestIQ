interface Props {
  value: number;
}

export default function ChangeBox({ value }: Props) {
  const positive = value >= 0;

  return (
    <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">

      <p className="text-gray-400 text-sm">
        Today's Change
      </p>

      <h2
        className={`text-2xl font-bold mt-2 ${
          positive ? "text-green-400" : "text-red-400"
        }`}
      >
        {positive ? "+" : ""}
        {value.toFixed(2)}%
      </h2>

    </div>
  );
}