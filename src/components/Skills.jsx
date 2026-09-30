import {
  Code2,
  Server,
  Database,
  Smartphone,
  Palette,
  GitBranch,
  Cloud,
  Layers
} from "lucide-react";


function Skills(){

const skills=[

{
icon:<Code2 size={32}/>,
title:"Frontend",
items:"React.js • JavaScript • HTML • CSS • Tailwind"
},

{
icon:<Server size={32}/>,
title:"Backend",
items:"Node.js • Express.js • Spring Boot • REST APIs"
},

{
icon:<Database size={32}/>,
title:"Database",
items:"MongoDB • Firebase • MySQL • Oracle"
},

{
icon:<Smartphone size={32}/>,
title:"Mobile",
items:"Flutter • Dart • Firebase"
},

{
icon:<Palette size={32}/>,
title:"UI/UX",
items:"Figma • Responsive Design • User Experience"
},

{
icon:<GitBranch size={32}/>,
title:"Version Control",
items:"Git • GitHub • Collaboration"
},

{
icon:<Cloud size={32}/>,
title:"Cloud & Tools",
items:"Firebase • Vercel • Postman"
},

{
icon:<Layers size={32}/>,
title:"Architecture",
items:"MVC • REST Architecture • Software Design"
}

];


return(

<section id="skills" className="px-10 py-20">


<h2 className="text-5xl font-serif">
Skills & Technologies
</h2>


<p className="mt-5 text-gray-600 max-w-xl">

Technologies and tools I use to create
modern digital solutions.

</p>



<div className="grid md:grid-cols-4 gap-6 mt-12">


{
skills.map((skill,index)=>(


<div

key={index}

className="
group
bg-white
border
border-[#e5dac8]
p-7
rounded-2xl
transition-all
duration-300
hover:-translate-y-3
hover:shadow-xl
"


>


<div

className="
w-14
h-14
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

{skill.icon}

</div>



<h3 className="text-2xl font-serif mt-6">

{skill.title}

</h3>



<p className="text-gray-600 mt-3 text-sm leading-6">

{skill.items}

</p>



</div>


))

}


</div>


</section>

)

}


export default Skills;