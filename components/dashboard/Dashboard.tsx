import CompanyCard from "../cards/CompanyCard";
import RecommendationCard from "../cards/RecommendationCard";
import NewsCard from "../cards/NewsCard";
import ScoreChart from "../charts/ScoreChart";
import RiskRadar from "../charts/RiskRadar";
import ProgressCard from "../cards/ProgressCard";
import MarketCard from "../cards/MarketCard";
import HeroCard from "../hero/HeroCard";
import { generatePDF } from "@/utils/pdf";
import Card from "../ui/Card";
import Footer from "../layout/Footer";
import PriceHistoryChart from "../charts/PriceHistoryChart";
import AIChat from "../chat/AIChat";
import CompanyProfileCard from "../cards/CompanyProfileCard";

interface DashboardProps {
  analysis: any;
  onCompare: () => void;
}

export default function Dashboard({analysis, onCompare,}: DashboardProps) {
  if (!analysis) return null;

  const financial = analysis.financial;
  const market = analysis.market;
  const news = analysis.news;
  const committee = analysis.committee;

  
  console.log(analysis);


  return (
    <div className="space-y-6 mt-8">

      <HeroCard
  analysis={analysis}
  onDownload={() => generatePDF(analysis)}
  onCompare={onCompare}
/>

<CompanyProfileCard
  profile={analysis.profile}
/>

      <div className="grid md:grid-cols-2 gap-4">

  <ProgressCard
    title="Overall Score"
    score={financial.scores.overall}
  />

  <ProgressCard
    title="Valuation"
    score={financial.scores.valuation}
  />

  <ProgressCard
    title="Growth"
    score={financial.scores.growth}
  />

  <ProgressCard
    title="Risk"
    score={financial.scores.risk}
  />

</div>

<PriceHistoryChart
    symbol={analysis.symbol}
    history={analysis.history}
/>
      
<div className="grid md:grid-cols-2 gap-6">

<Card>

<h2 className="text-2xl font-bold text-green-400 mb-6">

Strengths

</h2>

<div className="space-y-4">

{committee.strengths.map((item:string,index:number)=>(

<div
key={index}
className="bg-green-500/10 border border-green-500/20 rounded-xl p-4"
>

✅ {item}

</div>

))}

</div>

</Card>

<Card>

<h2 className="text-2xl font-bold text-red-400 mb-6">

Weaknesses

</h2>

<div className="space-y-4">

{committee.weaknesses.map((item:string,index:number)=>(

<div
key={index}
className="bg-red-500/10 border border-red-500/20 rounded-xl p-4"
>

⚠️ {item}

</div>

))}

</div>

</Card>

</div>

      <div className="grid md:grid-cols-2 gap-6">

  <MarketCard
  market={market}
  financial={financial}
/>

  <NewsCard news={news} />

</div>


<Card>

  <h2 className="text-2xl font-bold mb-6">
    Why Invest?
  </h2>

  <div className="space-y-4">

    {committee.reasons.map((item: string, index: number) => (

      <div
        key={index}
        className="border-l-4 border-blue-500 pl-4 py-2"
      >
        {item}
      </div>

    ))}

  </div>

</Card>

<AIChat
    analysis={analysis}
/>

<Footer />
    </div>
  );
}