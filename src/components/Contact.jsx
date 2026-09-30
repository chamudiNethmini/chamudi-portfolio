function Contact(){

return(

<section id="contact" className="px-10 py-20">


<h2 className="text-5xl font-serif">
Let's Connect
</h2>


<p className="mt-8 text-gray-600">
Have a project idea or want to collaborate? Feel free to reach out.
</p>



<div className="mt-8 space-y-5 text-gray-700">


{/* Email */}

<p>

<span className="font-semibold">
Email:
</span>


<a

href="mailto:cnlwickrama30@gmail.com"

className="
ml-3
text-[#b89b5e]
hover:underline
"

>

cnlwickrama30@gmail.com

</a>


</p>




{/* Phone */}

<p>

<span className="font-semibold">
Phone:
</span>


<a

href="tel:+94725901592"

className="
ml-3
text-[#b89b5e]
hover:underline
"

>

+94 72 590 1592

</a>


</p>





{/* GitHub */}

<p>

<span className="font-semibold">
GitHub:
</span>


<a

href="https://github.com/chamudiNethmini"

target="_blank"

rel="noopener noreferrer"

className="
ml-3
text-[#b89b5e]
hover:underline
"

>

github.com/chamudiNethmini

</a>


</p>





{/* LinkedIn */}

<p>

<span className="font-semibold">
LinkedIn:
</span>


<a

href="https://www.linkedin.com/in/chamudi-wickrama-3b94373a2/"

target="_blank"

rel="noopener noreferrer"

className="
ml-3
text-[#b89b5e]
hover:underline
"

>

linkedin.com/in/chamudi-wickrama

</a>


</p>



</div>


</section>

)

}


export default Contact;