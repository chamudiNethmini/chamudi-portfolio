import profile from "../assets/profile.png";


function Hero(){

return(

<section className="px-10 py-20">


<div className="text-center">


<p className="tracking-[8px] text-sm">
WEB & MOBILE DEVELOPER
</p>


<h1 className="text-[80px] md:text-[150px] font-serif leading-none">

PORTFOLIO

</h1>


<p className="max-w-xl mx-auto text-gray-600 mt-8">

I design and develop modern web and mobile
applications using React, Node.js, Flutter and MongoDB.

</p>


<div className="mt-10">

<a
  href="#projects"
  className="bg-black text-white px-8 py-3 inline-block"
>
  View Projects
</a>

</div>


</div>



<div className="flex justify-center mt-16">


<img

src={profile}

className="w-[350px] h-[450px] object-cover"

/>


</div>



</section>

)

}


export default Hero;