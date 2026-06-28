"use client";

import { useEffect, useState } from "react";
import Dashboard from "@/components/dashboard/Dashboard";
import SearchHistory from "@/components/cards/SearchHistory";
import { generatePDF } from "@/utils/pdf";
import CompareModal from "@/components/compare/CompareModal";
import ThemeToggle from "@/components/common/ThemeToggle";
import SearchSuggestions from "@/components/search/SearchSuggestions";
import LoadingScreen from "@/components/common/LoadingScreen";

export default function Home() {
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [range, setRange] = useState("1M");
  const [error, setError] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [suggestions,setSuggestions]=useState<any[]>([]);


  
  useEffect(() => {
  const saved = localStorage.getItem("searchHistory");

  if (saved) {
    setHistory(JSON.parse(saved));
  }
}, []);


  async function fetchSuggestions(value:string){

setCompany(value);

if (value.trim().length < 1) {

setSuggestions([]);

return;

}

const response=await fetch(

`/api/search?q=${value}`

);

const data=await response.json();

setSuggestions(data);

}

  async function analyzeCompany(selectedCompany?: string) {
    const companyToAnalyze = (
  selectedCompany ?? company
)
  .trim()
  .toUpperCase();

if (!companyToAnalyze) {
      alert("Please enter a company name.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setAnalysis(null);

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify({
  company: companyToAnalyze,
}),


      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      if (data.success) {
        console.log(data.analysis);
        setAnalysis(data.analysis);
        const updatedHistory = [
  companyToAnalyze,
  ...history.filter(
    (item) => item !== companyToAnalyze
  ),
].slice(0, 10);

setHistory(updatedHistory);

localStorage.setItem(
  "searchHistory",
  JSON.stringify(updatedHistory)
);
      }
    } catch (error: any) {
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
  if (company.trim() && analysis) {
    analyzeCompany();
  }
}, [range]);


  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
  <div className="w-full max-w-[1800px] mx-auto px-8 lg:px-12 py-4">

        <div className="flex flex-col items-center">

  <img
  src="/logo.png"
  alt="InvestIQ Logo"
  className="w-[250px] md:w-[250px] object-contain"
/>

  <p className="text-center text-gray-400 mt-4 text-xl">
    Investment Research Platform
  </p>

</div>

        <div className="flex gap-4 mt-10">

  <div className="relative flex-1">

    <input
      value={company}
      onChange={(e) =>
        fetchSuggestions(e.target.value)
      }
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          analyzeCompany();
          setSuggestions([]);
        }
      }}
      placeholder="Search company (Apple, AAPL, Microsoft...)"
      className="w-full rounded-xl bg-card border border-border px-5 py-4 outline-none focus:border-blue-500 transition"
    />

    <SearchSuggestions
  items={suggestions}
  onSelect={(symbol) => {
    setCompany(symbol);
    setSuggestions([]);
    analyzeCompany(symbol);
  }}
/>

  </div>

  <div className="flex gap-3 items-center">

    <ThemeToggle />

    <button
      onClick={() => analyzeCompany()}
      disabled={loading}
      className="bg-blue-600 hover:bg-blue-700 rounded-xl px-8 py-4 font-semibold"
    >
      {loading ? "Analyzing..." : "Analyze"}
    </button>

    <button
      disabled={!analysis}
      onClick={() => generatePDF(analysis)}
      className="bg-green-600 hover:bg-green-700 rounded-xl px-8 py-4 font-semibold disabled:opacity-50"
    >
      📄 Download
    </button>

  </div>

</div>

        
<SearchHistory
  history={history}

  onSelect={async (symbol) => {

    setCompany(symbol);

    try {

      setLoading(true);

      setError("");

      setAnalysis(null);

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: symbol,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      setAnalysis(data.analysis);

    } catch (error: any) {

      setError(error.message);

    } finally {

      setLoading(false);

    }

  }}

  onClear={() => {

    localStorage.removeItem("searchHistory");

    setHistory([]);

  }}
/>


        {error && (
  <div className="mt-6 rounded-lg bg-red-600 text-white p-4">
    {error}
  </div>
)}

{loading && (
  <LoadingScreen
    text={`Analyzing ${company.toUpperCase()}...`}
  />
)}

<Dashboard
  analysis={analysis}
  onCompare={() => setCompareOpen(true)}
/>

      </div>
      <CompareModal
  open={compareOpen}
  onClose={() => setCompareOpen(false)}
  company={company}
/>
    </main>
  );
}