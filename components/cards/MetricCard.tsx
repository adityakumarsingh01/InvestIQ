interface Props {

    title:string;

    value:any;

}

export default function MetricCard({

title,

value,

}:Props){

return(

<div className="bg-slate-900 rounded-xl p-5 border border-slate-700">

<p className="text-gray-400">

{title}

</p>

<h2 className="text-3xl font-bold mt-2">

{value}

</h2>

</div>

)

}