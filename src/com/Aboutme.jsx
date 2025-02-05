import React from 'react'
import About from '/asset/me.png'

const Aboutme = () => {
  return (
    <div className='top-container' id='about'>
      <div className=' container ' >
        <h2 className='about-text hover:text-[#EFB036]'>About me</h2>
        <div className='about-head w-full'>
          <img src={About} alt="" className='about-img ' />
          <div className=' flex- '>
            <p className='about-p'>I am a passionate full-stack developer with a focus on building modern and responsive 
            web applications. With a strong foundation in both frontend and backend technologies,
             I strive to create seamless and efficient user experiences
          </p>
          <div className='prog-top'>
            <div className='flex items-center'>
                <label htmlFor="html&css " className='w-3/12 sm:w-2/12'>HTML & CSS</label>
                <div className=' progesbar-1'>
                  <div className='progessbar  w-11/12'>

                  </div>

                </div>
            </div>

             <div className='flex items-center'>
                <label htmlFor="Java scripts" className='w-3/12 md:w-2/12 '>Java script</label>
                <div className='progesbar-1'>
                  <div className='progessbar  w-10/12'>

                  </div>

                </div>
            </div>

             <div className='flex items-center'>
                <label htmlFor="htmlandcss" className='w-3/12 md:w-2/12'>React js</label>
                <div className='progesbar-1'>
                  <div className='progessbar  w-10/12'>

                  </div>

                </div>
            </div>

             <div className='flex items-center'>
                <label htmlFor="htmlandcss" className='w-3/12 md:w-2/12'>node js</label>
                <div className='progesbar-1'>
                  <div className='progessbar  w-9/12'>

                  </div>

                </div>
            </div>

          </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Aboutme
