import React from 'react'
import resume from '/asset/resume.png'


const Resume = () => {
  return (
  <section className='bg-black  text-white md:flex-row items-center flex flex-col about  ' id='resume' >
          <div className='md:w-1/2  ' >
          <img  className='resimg h-1/2'src={resume} alt="#" />
          </div>
          <div className='flex justify-center h-1/2 w-1/3  '>
              <div className=' flex flex-col  items-center restext' >
                  
                 <h1 className='font-bold text-3xl   hover:text-red-500  '>Dowload cv</h1>
              <p className=' text-2xl ' >you can view my resume   </p>
              <button href='#' className='button-all '> Dowload</button>
           
              </div>
              </div>
      
  
    </section>
  )
}

export default Resume
