import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className=' top-conta ' id='contact'>

      <div className='container contact-container   '>
        <h2 className='contact-tit hover:text-red-500 '>contact me</h2>
        <div className=' cont-titl-2'>
          <div className='  '>
            <h3>letz talt</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus illo, commodi laborum rem ex et quam doloribus, quae autem quas cumque blanditiis esse magnam odio? Quia eos culpa obcaecati vero.</p>
          <div className=" contact-des">
            <FaEnvelope className='inline-block text-red-500 margin-r'></FaEnvelope>
            <a href="mailto:vgssanjayboss@gmail.com" className='hover:border-2 hover:border-red-400'>
              vgssanjayboss@gmail.com
            </a>
          </div>
          <div className=' contact-des1'>
            <FaPhone className='inline-block text-red-500 margin-r'></FaPhone>
            <span> 960041771</span>
             
          
          </div>
          <div className='contact-des1'>
            <FaMapMarkedAlt className='inline-block text-red-500 margin-r'></FaMapMarkedAlt>
            <span> karaikudi,tamilnadu</span>
             
           </div>
          </div>
          <div className=' w-full'>
            <form className='space-y-4'>
              <div>
                <label htmlFor="name" className='formlabile'>your name</label>
                <input type="text" className='w-full p-2 rounded bg-red-800 border border-gray-400 focus:outline-none focus:border-white' 
                placeholder='enter your name' />
              </div>

               <div>
                <label htmlFor="email" className='formlabile'>email</label>
                <input type="text" className='w-full p-2 rounded bg-red-800 border border-gray-400 focus:outline-none focus:border-white' 
                placeholder='enter your name' />
              </div>

               <div>
                <label htmlFor="Number" className='formlabile'>number</label>
                <input type="text" className='w-full p-2 rounded bg-red-800 border border-gray-400 focus:outline-none focus:border-white' 
                placeholder='enter your name' />
              </div>

               <div>
                <label htmlFor="email" className='formlabile'>Message</label>
                <textarea type="text" className='w-full p-2 rounded bg-red-800 border border-gray-400 focus:outline-none focus:border-white'
                rows="5" 
                placeholder='enter your name' />
              </div>
              <button className='button-all'>Submit</button>
            </form>

          </div>
         
        </div>
      </div>
      
    </div>
  )
}

export default Contact
