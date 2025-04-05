import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.number.trim()) {
      newErrors.number = "Number is required";
    } else if (!/^\d{10}$/.test(formData.number.trim())) {
      newErrors.number = "Enter a valid 10-digit number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setResult("Sending...");

    const sendData = new FormData();
    sendData.append("name", formData.name);
    sendData.append("email", formData.email);
    sendData.append("number", formData.number);
    sendData.append("message", formData.message);
    sendData.append("access_key", "e52bab3c-6d7d-46a9-b6bc-08ce3470ec20");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: sendData
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      setFormData({ name: '', email: '', number: '', message: '' });
    } else {
      console.log("Error", data);
      setResult(`❌ ${data.message}`);
    }
  };

  return (
    <div className='top-conta py-12 px-4 md:px-12' id='contact'>
      <div className='container mx-auto'>
        <h2 className='contact-tit text-center text-3xl md:text-4xl font-bold mb-10 hover:text-[#EFB036]'>contact me</h2>

        <div className='flex flex-col md:flex-row gap-10'>
          {/* Left Section */}
          <div className='w-full md:w-1/2 space-y-4'>
            <h3 className="text-xl font-semibold mb-2">Let’s Talk</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing design work, development opportunities, or creative collaborations.
              Whether it's building something awesome together or answering your questions, feel free to reach out anytime!
            </p>


            <div className="contact-des flex items-center gap-2 text-sm">
              <FaEnvelope className='text-[#EFB036]' />
              <a href="mailto:vgssanjayboss@gmail.com" className='hover:border-b-2 hover:border-[#EFB036]'>
                vgssanjayboss@gmail.com
              </a>
            </div>

            <div className='contact-des1 flex items-center gap-2 text-sm'>
              <FaPhone className='text-[#EFB036]' />
              <span>9600417117</span>
            </div>

            <div className='contact-des1 flex items-center gap-2 text-sm'>
              <FaMapMarkedAlt className='text-[#EFB036]' />
              <span>Karaikudi, Tamil Nadu</span>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className='w-full md:w-1/2'>
            <form className='space-y-4' onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className='formlabile block mb-1'>Your Name</label>
                <input
                  type="text"
                  name="name"
                  className='footer-input w-full'
                  placeholder='Enter your name'
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <p className='text-red-400 text-sm mt-1'>{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className='formlabile block mb-1'>Email</label>
                <input
                  type="email"
                  name="email"
                  className='footer-input w-full'
                  placeholder='Enter your Email'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className='text-red-400 text-sm mt-1'>{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="number" className='formlabile block mb-1'>Phone Number</label>
                <input
                  type="text"
                  name="number"
                  className='footer-input w-full'
                  placeholder='Enter your Number'
                  value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                />
                {errors.number && <p className='text-red-400 text-sm mt-1'>{errors.number}</p>}
              </div>

              <div>
                <label htmlFor="message" className='formlabile block mb-1'>Message</label>
                <textarea
                  name="message"
                  className='footer-input w-full'
                  rows="5"
                  placeholder='Any messages'
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <p className='text-red-400 text-sm mt-1'>{errors.message}</p>}
              </div>

              <button className='button-all w-full md:w-auto' type='submit'>Submit</button>
            </form>

            {result && (
              <p className='mt-4 text-sm text-green-400'>{result}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
