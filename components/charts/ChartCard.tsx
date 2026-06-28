interface Props{

title:string;

children:React.ReactNode;

}

export default function ChartCard({

title,

children,

}:Props){

return(

<div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 shadow-lg">

<h2 className="text-2xl font-bold mb-6">

{title}

</h2>

{children}

</div>

);

}