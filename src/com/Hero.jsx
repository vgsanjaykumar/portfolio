import React from 'react'
import {Typewriter,Cursor, } from 'react-simple-typewriter'
import { AiOutlineGithub ,AiOutlineLinkedin,AiOutlineInstagram,AiOutlineFacebook } from "react-icons/ai";


const Hero = () => {

  return (
    <section className=' banner  w-full  bg-black h-[650px] text-white text-center py-32 ' >
     <h1 className='text-4xl  font-bold gap-2 '>Hey ! <br/><span className='my-2 herosanjay'>Im Sanjaykumar v</span> </h1>
    <p className='p-5 text-2xl letter-type'> Im a
         <span className='text-red-500 '>
              <Typewriter 
            loop
             typeSpeed={60}
            deleteSpeed={50}
            words={[' Full Stack Devloper',' Graphic Designer ',' Developer']}
            />
       ... </span>
        <Cursor/>
        </p>

        <div className="socialmedia text-white flex justify-center  ">
            <a href='#' className='hover:text-red-500' > <AiOutlineLinkedin size={40} />  </a>
            <a href='#' className='hover:text-red-500'> <AiOutlineInstagram size={40} />  </a>
            <a href='#' className='hover:text-red-500'> <AiOutlineFacebook size={40} />  </a>
              <a href='#' className='hover:text-red-500 ' > <AiOutlineGithub size={40}  />  </a>
            
            
        </div>
    </section>
  )
}

export default Hero
