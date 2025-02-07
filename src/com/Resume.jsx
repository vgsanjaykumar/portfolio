import React from 'react'
import resumes from '/asset/resume.png'
import resume from '/asset/Resume sanjay.pdf'




const Resume = () => {
  return (
  <section className='bg-[#00052a]  text-white md:flex-row items-center flex flex-col about  ' id='resume' >
          <div className='md:w-1/2 w-full ' >
          <img  className='resimg h-1/2 hover:scale-110 duration-300 'src={resumes} alt="#" />
          </div>
          <div className='flex justify-center  md:w-full lg:w-1/3 w-full  '>
              <div className=' flex flex-col  items-center ' >
                  
                 <h1 className='font-bold text-3xl  hover:text-[#EFB036]  '>Dowload cv</h1>
              <p className=' text-2xl ' >you can view my resume   </p>
              <button  className='button-all '><a href={resume} download={Resume} target='blank' >Dowload </a> </button>
           
              </div>
              </div>
      
  
    </section>
  )
}

export default Resume
