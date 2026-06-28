interface Props{

value:number;

color?:string;

}

export default function Progress({

value,

color="bg-blue-500",

}:Props){

return(

<div className="w-full h-3 bg-slate-700 rounded-full">

<div

className={`${color} h-3 rounded-full transition-all duration-700`}

style={{

width:`${value}%`

}}

></div>

</div>

)

}