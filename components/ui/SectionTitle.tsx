interface Props{

title:string;

}

export default function SectionTitle({

title,

}:Props){

return(

<h2 className="

text-2xl

font-bold

mb-6

">

{title}

</h2>

)

}