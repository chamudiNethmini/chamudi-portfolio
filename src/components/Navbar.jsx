function Navbar(){

return(

<nav className="flex justify-between items-center px-10 py-8">

<h1 className="text-4xl font-serif">
Chamudi Wickrama
</h1>


<div className="hidden md:flex gap-8 uppercase text-sm tracking-widest">

<a href="#about">About</a>
<a href="#projects">Projects</a>
<a href="#skills">Skills</a>
<a href="#contact">Contact</a>

</div>


</nav>

)

}

export default Navbar;