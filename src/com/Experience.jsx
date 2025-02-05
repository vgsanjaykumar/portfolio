import Resume from './Resume';
import resume from '/asset/Resume sanjay.pdf'
import React from 'react'
const Exp =[
    {
        date:"march 2024-march2024(4Weeks)",
        title: "Internship-Webdevelopment",
        description: "Web development involves creating and maintaining websites using front-end and back-end technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB to ensure functionality, responsiveness, and a seamless user experience. ",
       
    },
    {
        date: "February 2024 - August 2024 (6Month)",
        title: "Internship-Graphic designer",
         description: "Assisted senior designers in creating visual content and branding materials Created logos, marketing materials, and digitalassets using Adobe Creative Suite. Participated in client meetings and contributed tobrainstorming sessions for design solutions.",
    },

    {
        date:"11-07-2024 TO 10-08-2024(30DAYS)",
        title: "Internship-Email--marketing     ",
        description: "Email marketing involves sending targeted emails to promote products, engage customers, and drive conversions. It includes segmentation, automation, and analysis to optimize campaigns and improve customer relationships and sales.",
    },

  

];
const Experience = () => {
    
  return (
   <section>
    <div className='top-container'>
        <div className='container'>
            <h2 className='about-text'>EXPERIENCE</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {Exp.map(Exp =>(
                    <div key={Exp.date} className='Exp-div'>
                       
                        <h3 className='exp-title'>{Exp.title}</h3>
                         <div className='exp-id'>
                            {Exp.date}
                        </div>
                        <p className='exp-p'>{Exp.description}</p>
                         
                        <a href={resume} download={Resume} target='blank' className='exp-a button-all-submit'>Readmore</a>
                        
                    </div>
                ))}
            </div>
        </div>
    </div>
   </section>
  )
}

export default Experience
