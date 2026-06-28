import { scoreColor, scoreLabel } from "@/utils/score";

interface Props {

title:string;

score:number;

}

export default function ProgressCard({

title,

score,

}:Props){

return(

<div className="bg-slate-900 rounded-xl p-5 border border-slate-700">

<div className="flex justify-between">

<h3>{title}</h3>

<p className="font-semibold">

{score}

</p>

</div>

<div className="w-full h-3 bg-slate-700 rounded-full mt-3">

<div

className={`${scoreColor(score)} h-3 rounded-full transition-all duration-700`}

style={{

width:`${score}%`

}}

></div>

</div>

<p className="text-gray-400 mt-3">

{scoreLabel(score)}

</p>

</div>

)

}