"use client";

interface Props {
  items: any[];
  onSelect: (symbol: string) => void;
}

export default function SearchSuggestions({
  items,
  onSelect,
}: Props) {
  if (items.length === 0) return null;

  return (
    <div
      className="
        absolute
        left-0
        right-0
        top-full
        mt-2
        bg-card
        border
        border-border
        rounded-xl
        shadow-xl
        overflow-hidden
        z-50
        max-h-80
        overflow-y-auto
      "
    >
      {items.map((item: any) => (
        <button
          key={item.symbol}
          onClick={() => onSelect(item.symbol)}
          className="
            w-full
            text-left
            px-5
            py-4
            hover:bg-card-hover
            transition
            border-b
            border-border
            last:border-none
          "
        >
          <div className="font-semibold text-lg">
            {item.name}
          </div>

          <div className="text-sm text-muted mt-1">
            {item.symbol} • {item.sector}
          </div>
        </button>
      ))}
    </div>
  );
}