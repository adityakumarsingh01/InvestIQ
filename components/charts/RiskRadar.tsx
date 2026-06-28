"use client";

import {

RadarChart,

PolarGrid,

PolarAngleAxis,

Radar,

ResponsiveContainer,

} from "recharts";

interface Props{

scores:any;

}

export default function RiskRadar({scores}:Props){

const data=[

{

subject:"Valuation",

value:scores.valuation

},

{

subject:"Growth",

value:scores.growth

},

{

subject:"Risk",

value:scores.risk

},

{

subject:"Overall",

value:scores.overall

}

];

return(

<div className="bg-slate-900 rounded-xl p-6 border border-slate-700">

<h2 className="text-xl font-bold mb-6">

Risk Radar

</h2>

<div className="h-80">

<ResponsiveContainer>

<RadarChart data={data}>

<PolarGrid/>

<PolarAngleAxis dataKey="subject"/>

<Radar dataKey="value"/>

</RadarChart>

</ResponsiveContainer>

</div>

</div>

)

}