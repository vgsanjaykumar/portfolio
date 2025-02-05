import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {

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
    <div className=' top-conta ' id='contact'>

      <div className='container contact-container     ' id='contact'>
        <h2 className='contact-tit  hover:text-[#EFB036] '>contact me</h2>
        <div className=' cont-titl-2'>
          <div className='  '>
            <h3>letz talt</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus illo, commodi laborum rem ex et quam doloribus, quae autem quas cumque blanditiis esse magnam odio? Quia eos culpa obcaecati vero.</p>
          <div className=" contact-des">
            <FaEnvelope className='inline-block  text-[#EFB036] margin-r'></FaEnvelope>
            <a href="mailto:vgssanjayboss@gmail.com" className='hover:border-b-2 hover:border-[#EFB036]'>
              vgssanjayboss@gmail.com
            </a>
          </div>
          <div className=' contact-des1'>
            <FaPhone className='inline-block  text-[#EFB036] margin-r'></FaPhone>
            <span> 9600417117</span>
             
          
          </div>
          <div className='contact-des1'>
            <FaMapMarkedAlt className='inline-block  text-[#EFB036] margin-r'></FaMapMarkedAlt>
            <span> karaikudi,tamilnadu</span>
             
           </div>
          </div>
          <div className=' w-full'>
            <form className='space-y-4' onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className='formlabile'>your name</label>
                <input type="text" className='footer-input' 
                placeholder='Enter your name' />
              </div>

               <div>
                <label htmlFor="email" className='formlabile'>email</label>
                <input type="email" className='footer-input' 
                placeholder='Enter your Email' />
              </div>

               <div>
                <label htmlFor="Number" className='formlabile'>number</label>
                <input type="text" className='footer-input' 
                placeholder='Enter your Number' />
              </div>

               <div>
                <label htmlFor="email" className='formlabile'>Message</label>
                <textarea type="text" className='footer-input'
                rows="5" 
                placeholder='Any messages' />
              </div>
              <button className='button-all' type='submit'>Submit</button>
            </form>

            <span>{result}</span>

          </div>
         
        </div>
      </div>
      
    </div>
  )
}

export default Contact
