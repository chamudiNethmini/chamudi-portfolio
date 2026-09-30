import { Code2, Smartphone, Database, Palette } from "lucide-react";


function Services(){

const services=[

{
icon:<Code2 size={35}/>,
title:"Web Development",
desc:"Building responsive and modern websites using React, JavaScript and modern frameworks."
},

{
icon:<Smartphone size={35}/>,
title:"Mobile Development",
desc:"Creating user-friendly mobile applications using Flutter and Firebase."
},

{
icon:<Database size={35}/>,
title:"Backend Development",
desc:"Developing scalable APIs, databases and backend systems."
},

{
icon:<Palette size={35}/>,
title:"UI/UX Design",
desc:"Designing clean interfaces focused on usability and user experience."
}

];


return(

<section className="px-10 py-20">


<h2 className="text-5xl font-serif">
Services
</h2>


<p className="mt-5 text-gray-600 max-w-xl">
I create digital solutions combining design,
technology and functionality.
</p>



<div className="grid md:grid-cols-4 gap-6 mt-12">


{
services.map((service,index)=>(


<div

key={index}

className="
group
bg-white
border
border-[#e5dac8]
p-8
rounded-2xl
transition-all
duration-300
hover:-translate-y-3
hover:shadow-xl
"


>


<div
className="
w-16
h-16
flex
items-center
justify-center
rounded-full
bg-[#f5f0e8]
text-[#b89b5e]
group-hover:bg-black
group-hover:text-white
transition
"
>

{service.icon}

</div>



<h3 className="
text-2xl
font-serif
mt-6
">

{service.title}

</h3>



<p className="
text-gray-600
mt-4
leading-7
text-sm
">

{service.desc}

</p>



</div>


))

}


</div>


</section>

)

}


export default Services;