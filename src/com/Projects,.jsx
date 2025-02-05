
import React from 'react'

const Exp =[
    {
        date:"public/asset/e-com.jpg",
        title: "Landing page",
        description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
       
    },
    {
        date: "public/asset/landing page.jpeg",
        title: "E-commernce",
         description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
    },

    {
        date:"public/asset/landpage 2.png",
        title: "Landing page ",
        description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
    },
        {
        date:"public/asset/e-com.jpg",
        title: "Landing page",
        description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
       
    },
    {
        date: "public/asset/landing page.jpeg",
        title: "E-commernce",
         description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
    },

    {
        date:"public/asset/landpage 2.png",
        title: "Landing page ",
        description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
    },

  

];

const Projects = () => {
  return (
   
     <section>
      <div className="top-container relative">
        <div className="container">
            <h3 className='about-text'>Projects</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                 {Exp.map(Exp =>(
                    <div key={Exp.date} className='proj-div' >
                        <img src={Exp.date} className='projects-img' alt="" />
                        <div className="proj-desc">
                             <p className='proj-p'>{Exp.description}</p>
                             <a href="#" className='proj-a'>Readmore</a>
                             
                        </div>
                         
                       
                        <h3 className='exp-title'>{Exp.title}</h3>
                        
                      
                         
                       
                        
                    </div>
                ))}
            </div>
        </div>
      </div>
     </section>
   
  )
}

export default Projects
