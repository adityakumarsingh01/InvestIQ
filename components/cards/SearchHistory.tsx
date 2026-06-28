"use client";

import { useState } from "react";

interface Props {
  history: string[];
  onSelect: (symbol: string) => void;
  onClear: () => void;
}

export default function SearchHistory({
  history,
  onSelect,
  onClear,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-5">

      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 flex justify-between items-center hover:border-blue-500 transition"
      >
        <div>

          <p className="font-semibold text-left">

            🕘 Recent Searches

          </p>

          <p className="text-sm text-gray-400">

            {history.length} Companies

          </p>

        </div>

        <span>

          {open ? "▲" : "▼"}

        </span>

      </button>

      {open && (

        <div className="bg-slate-900 border border-slate-700 rounded-xl mt-2 overflow-hidden">

          {history.length === 0 ? (

            <div className="p-5 text-center text-gray-400">

              No recent searches

            </div>

          ) : (

            <>

              {history.map((item, index) => (

                <button
                  key={index}
                  onClick={() => {

                    onSelect(item);

                    setOpen(false);

                  }}
                  className="w-full text-left px-5 py-3 hover:bg-slate-800 transition border-b border-slate-800 last:border-b-0"
                >

                  🔹 {item}

                </button>

              ))}

              <button
                onClick={() => {

                  onClear();

                  setOpen(false);

                }}
                className="w-full bg-red-900 hover:bg-red-800 py-3 font-semibold transition"
              >

                🗑 Clear History

              </button>

            </>

          )}

        </div>

      )}

    </div>
  );
}