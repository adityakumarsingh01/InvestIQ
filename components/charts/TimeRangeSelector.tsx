"use client";

interface Props {
  selected: string;
  onChange: (range: string) => void;
}

const ranges = [
  "1D",
  "1W",
  "1M",
  "6M",
  "1Y",
  "5Y",
];

export default function TimeRangeSelector({
  selected,
  onChange,
}: Props) {
  return (
    <div className="flex gap-2 flex-wrap">

      {ranges.map((range) => (

        <button
          key={range}
          onClick={() => onChange(range)}
          className={`px-4 py-2 rounded-lg transition ${
            selected === range
              ? "bg-blue-600 text-white"
              : "bg-slate-800 hover:bg-slate-700"
          }`}
        >
          {range}
        </button>

      ))}

    </div>
  );
}