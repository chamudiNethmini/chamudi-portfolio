import profile from "../assets/profile.png";


function Hero(){

return(

<section className="
px-5
sm:px-10
py-12
sm:py-20
overflow-hidden
">


<div className="text-center w-full">


<p className="
tracking-[4px]
sm:tracking-[8px]
text-xs
sm:text-sm
">
WEB & MOBILE DEVELOPER
</p>



<h1 className="
text-[42px]
sm:text-5xl
md:text-7xl
lg:text-8xl
font-serif
leading-none
tracking-tight
break-words
">

PORTFOLIO

</h1>




<p className="
max-w-xl
mx-auto
text-gray-600
mt-8
text-sm
sm:text-base
">

I design and develop modern web and mobile
applications using React, Node.js, Flutter and MongoDB.

</p>




<div className="mt-10">

<a
href="#projects"
className="
bg-black
text-white
px-8
py-3
inline-block
"
>

View Projects

</a>

</div>


</div>





<div className="
flex
justify-center
mt-16
">


<img

src={profile}

className="
w-[280px]
h-[380px]
sm:w-[350px]
sm:h-[450px]
object-cover
"

/>


</div>




</section>

)

}


export default Hero;