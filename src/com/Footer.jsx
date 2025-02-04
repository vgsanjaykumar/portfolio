import React from 'react'
import { AiOutlineGithub ,AiOutlineLinkedin,AiOutlineInstagram,AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <section className=' bg-gray-400 '>
       <div className='foo-cen'>
        <div className='footer-decs font-bold text-white text-center  h-[50px] ' > © Sanjaykumar 2025 </div>
       </div>
          <div className=" text-white  flex foo-cen  ">
                  <a href='#' className='hover:text-red-500' > <AiOutlineLinkedin size={30} />  </a>
                  <a href='#' className='hover:text-red-500'> <AiOutlineInstagram size={30} />  </a>
                  <a href='#' className='hover:text-red-500'> <AiOutlineFacebook size={30} />  </a>
                    <a href='#' className='hover:text-red-500 ' > <AiOutlineGithub size={30}  />  </a>
                  
                  
              </div>
    </section>   
       


       
   
 
  )
}

export default Footer
