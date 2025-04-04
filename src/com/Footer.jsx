import React, { useState } from 'react'

import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'



const Footer = () => {


  const [result, setResult] = React.useState(""); 

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e52bab3c-6d7d-46a9-b6bc-08ce3470ec20");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
 
  return (
    <footer className='top-conta'>
      <div className='container footer-container '>
        <div className='footer-des'>
          <div className=' footer-tit'>
          <h3>sanjaykumar</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, iure nulla!
             Assumenda reprehenderit, ea saepe adipisci perspiciatis tempora velit iste iure quis explicabo, magni quisquam maxime magnam 
             placeat aliquid dolores.</p>

             </div>
             <div className='flex-1 w-full'>
              <form className='flex items-center justify-center py-4'  onSubmit={onSubmit}>
                <input type="email"  placeholder='enter Email'
                className='footer-input'/>
                <button type='submit' className='button-all footer-btn'> Subscripe</button>
              </form>
               <span>{result}</span>
             </div>

        </div>

          <div className='footer-line'>
            <p className='text-gray-400'> &copy; {new Date().getFullYear()}</p>
           <div className='footer-centers'>
            <a href='#https://www.instagram.com/sanju_na_mass?utm_source=qr&igsh=YzhuN2QyYWwxYTRi' target='blank' className='text-gray-400 hover:text-white'>
              <FaFacebook/>
            </a>
             <a href='https://www.linkedin.com/in/sanjay-kumar-v-a4a770261/' target='blank' className='text-gray-400 hover:text-white'>
              <FaLinkedin/>
            </a>
             <a href='https://github.com/vgsanjaykumar' target='blank' className='text-gray-400 hover:text-white'>
              <FaGithub/>
            </a>
           </div>

           <div className='footer-info'>
            <a href="#" className='text-gray-400 hover:text-white'>
              sanjaykumar.v
            </a>

             <a href="#"  className='text-gray-400 hover:text-white'>
              karaikudi
            </a>
            
          </div>
           </div>

      </div>
    </footer>
  )
}

export default Footer 
