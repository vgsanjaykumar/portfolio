import React from 'react'

const Exp =[
    {
        date:"./asset/e-com.jpg",
        title: "Landing page",
        description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
       
    },
    {
        date: "./asset/landing page.jpeg",
        title: "E-commernce",
         description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
    },

    {
        date:"./asset/landpage 2.png",
        title: "Landing page ",
        description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
    },
        {
        date:"./asset/e-com.jpg",
        title: "Landing page",
        description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
       
    },
    {
        date: "./asset/landing page.jpeg",
        title: "E-commernce",
         description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
    },

    {
        date:"./asset/landpage 2.png",
        title: "Landing page ",
        description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
    },

  

];

const Projects = () => {
  return (
   
     <section>
       
      <div className="top-container ">
        <div className="container ">
            <h3 className='about-text  hover:text-[#EFB036]'>Projects</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                 {Exp.map(Exp =>(
                    <div key={Exp.date} className='proj-div' >
                        <img src={Exp.date} className='projects-img' alt="" />
                        <div className="proj-desc">
                             <p className='proj-p'>{Exp.description}</p>
                             <a href="#" className=' button-all-submit'>Readmore</a>
                             
                        </div>
                         
                       
                        <h3 className='exp-title'>{Exp.title}</h3>
                        
                      
                         
                       
                        
                    </div>
                ))}
                  
            </div>

           
           
          <h1 className=' about-button'> <button className=' button-all-submits'>More projects</button> </h1>
        </div>
         
      </div>
       

     </section>
   
  )
}

export default Projects
