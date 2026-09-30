function Projects(){

const projects=[


{
title:"Villa Booking System",
desc:"A full-stack MERN application for villa businesses where customers can view rooms, request bookings and admins can manage reservations.",
tech:["MongoDB","Express.js","React","Node.js"],
type:"MERN Stack Application",
github:"https://github.com/chamudiNethmini/Villa-Booking-System"
},

{
title:"Unimate",
desc:"A university timetable and resource management system designed to manage academic resources, sessions and scheduling efficiently.",
tech:["React","Node.js","MongoDB"],
type:"Full Stack Web Application",
github:"https://github.com/chamudiNethmini/Y3S1_ITPM"
},



{
title:"Smart Campus Hub",
desc:"A campus management platform developed using Spring Boot to provide efficient handling of campus services and information.",
tech:["Spring Boot","Java","React","MySQL"],
type:"Enterprise Web Application",
github:"https://github.com/chamudiNethmini/it3030-paf-2026-smart-campus-group79"
},


{
title:"TickTrack",
desc:"A mobile application focused on task management and productivity with a simple user-friendly interface.",
tech:["Android","Java","Mobile Development"],
type:"Mobile Application",
github:"https://github.com/chamudiNethmini/TickTrack"
},


{
title:"Shopify",
desc:"A MERN stack e-commerce platform with product management, shopping features and user functionalities.",
tech:["MongoDB","Express.js","React","Node.js"],
type:"E-Commerce Platform",
github:"https://github.com/chamudiNethmini/Shopify_Y2S2"
},

{
title:"Train Reservation System",
desc:"A Java-based train reservation system built using Object-Oriented Programming principles. The system follows MVC architecture and uses a database-driven approach for managing reservations and ticket operations.",
tech:["Java","MySQL","MVC","OOP","Singleton Pattern"],
type:"Java Desktop Application",
github:"https://github.com/chamudiNethmini/Train-Reservation-System"
},
];


return(

<section id="projects" className="px-10 py-20">


<h2 className="text-5xl font-serif">
Selected Works
</h2>


<p className="mt-5 text-gray-600 max-w-xl">

A collection of projects showcasing my experience
in web development, mobile applications and software engineering.

</p>



<div className="grid md:grid-cols-2 gap-8 mt-12">


{
projects.map((project,index)=>(


<div
key={index}

className="
group
bg-white
border
border-[#e5dac8]
rounded-2xl
p-8
transition-all
duration-300
hover:-translate-y-3
hover:shadow-2xl
"

>


<div

className="
h-44
bg-[#f5f0e8]
rounded-xl
flex
items-center
justify-center
text-4xl
font-serif
text-[#b89b5e]
"

>

{project.title}

</div>



<h3 className="text-3xl font-serif mt-7">

{project.title}

</h3>



<p className="text-[#b89b5e] mt-2">

{project.type}

</p>



<p className="text-gray-600 mt-4 leading-7">

{project.desc}

</p>



<div className="flex flex-wrap gap-2 mt-5">


{
project.tech.map((item)=>(

<span

key={item}

className="
bg-[#f5f0e8]
px-3
py-1
rounded-full
text-sm
"

>

{item}

</span>

))

}


</div>



<div className="mt-7">


<a

href={project.github}

target="_blank"

rel="noopener noreferrer"

className="
border
border-black
px-6
py-2
rounded-full
hover:bg-black
hover:text-white
transition
inline-block
"

>

View Project

</a>


</div>



</div>


))

}


</div>


</section>

)

}


export default Projects;