"use client";

import {
Radar,
RadarChart,
PolarGrid,
PolarAngleAxis,
ResponsiveContainer,
Legend,
} from "recharts";

interface Props{
    first:any;
    second:any;
}

export default function CompareRadar({
    first,
    second,
}:Props){

const data=[

{
subject:"Overall",
A:first.financial.scores.overall,
B:second.financial.scores.overall,
},

{
subject:"Growth",
A:first.financial.scores.growth,
B:second.financial.scores.growth,
},

{
subject:"Risk",
A:first.financial.scores.risk,
B:second.financial.scores.risk,
},

{
subject:"Valuation",
A:first.financial.scores.valuation,
B:second.financial.scores.valuation,
},

];

return(

<div className="bg-slate-800 rounded-xl p-6">

<h2 className="text-2xl font-bold mb-5">
Score Comparison
</h2>

<div className="h-[420px]">

<ResponsiveContainer>

<RadarChart data={data}>

<PolarGrid/>

<PolarAngleAxis dataKey="subject"/>

<Radar
name={first.symbol}
dataKey="A"
stroke="#22c55e"
fill="#22c55e"
fillOpacity={0.4}
/>

<Radar
name={second.symbol}
dataKey="B"
stroke="#3b82f6"
fill="#3b82f6"
fillOpacity={0.4}
/>

<Legend/>

</RadarChart>

</ResponsiveContainer>

</div>

</div>

);

}