import React from 'react'
import resume from '/asset/resume.png'


const Resume = () => {
  return (
  <section className='bg-black  text-white md:flex-row  flex flex-col about  ' id='resume' >
          <div className='md:w-1/2  ' >
          <img  className='abouth1 aboutimg 'src={resume} alt="#" />
          </div>
          <div className='flex justify-center md:w-full  '>
              <div className=' flex flex-col  justify-center ' >
                  
                 <h1 className='font-bold text-5xl abouth1  hover:text-red-500 '>Dowload cv</h1>
              <p className='abouth1 text-2xl ' >you can view my resume   <a href='#' className='btn-res'> Dowload</a></p>
           
              </div>
              </div>
      
  
    </section>
  )
}

export default Resume
