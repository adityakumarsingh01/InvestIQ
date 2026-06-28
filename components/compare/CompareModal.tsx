"use client";

import { useState } from "react";
import CompareDashboard from "./CompareDashboard";

interface Props {
  open: boolean;
  onClose: () => void;
  company: string;
}

export default function CompareModal({
  open,
  onClose,
  company,
}: Props) {
  const [company2, setCompany2] = useState("");
  const [loading, setLoading] = useState(false);
  const [comparison, setComparison] = useState<any>(null);

  if (!open) return null;

  async function compare() {
    if (!company2.trim()) return;

    try {
      setLoading(true);

      const response = await fetch("/api/compare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company1: company,
          company2,
        }),
      });

      const data = await response.json();

      setComparison(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-slate-900 rounded-xl w-[900px] max-h-[90vh] overflow-auto p-8">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-bold">
            Compare Companies
          </h2>

          <button
            onClick={onClose}
            className="bg-red-600 px-4 py-2 rounded-lg"
          >
            Close
          </button>

        </div>

        <p className="mb-4">
          <b>Company 1:</b> {company}
        </p>

        <div className="flex gap-3 mb-6">

          <input
            value={company2}
            onChange={(e) => setCompany2(e.target.value)}
            placeholder="Enter second company (MSFT, NVDA...)"
            className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3"
          />

          <button
            onClick={compare}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 px-6 rounded-lg"
          >
            {loading ? "Comparing..." : "Compare"}
          </button>

        </div>

        {comparison && (
          <CompareDashboard
            data={comparison}
          />
        )}

      </div>

    </div>
  );
}