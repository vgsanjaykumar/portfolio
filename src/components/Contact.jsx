import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);

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
      setShowPopup(true);

      setTimeout(() => setShowPopup(false), 3000);
    } else {
      setResult(`❌ ${data.message}`);
    }
  };

  return (
    <section
      className="py-16 px-6 md:px-16 lg:px-32 bg-white dark:bg-[#00052a] text-gray-900 dark:text-gray-100 transition-colors duration-500"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-wide capitalize text-gray-900 dark:text-white hover:text-[#EFB036] transition">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let’s Talk</h3>
            <p className="text-gray-400 dark:text-gray-400 leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing design work, development opportunities, or creative collaborations.
            </p>

            <div className="flex items-center gap-3 text-sm">
              <FaEnvelope className="dark:text-[#EFB036] text-blue-400" />
              <a href="mailto:vgssanjayboss@gmail.com" className="hover:underline text-gray-400">
                vgssanjayboss@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FaPhone className="dark:text-[#EFB036] text-blue-400" />
              <span className='text-gray-400'>9600417117</span>
            </div>

            <div className="flex items-center gap-3 text-sm ">
              <FaMapMarkedAlt className="dark:text-[#EFB036] text-blue-400" />
              <span className='text-gray-400'>Karaikudi, Tamil Nadu</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={onSubmit}>
            {['name', 'email', 'number'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block mb-1 capitalize">
                  {field}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  required
                  className="w-full px-4 py-2 border rounded-lg bg-[#d4e7f9] dark:bg-[#3B6790] text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#EFB036] focus:outline-none ring-offset-1 dark:ring-offset-[#00052a]"
                  placeholder={`Enter your ${field}`}
                  value={formData[field]}
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                />
                {errors[field] && (
                  <p className="text-red-400 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 border rounded-lg bg-[#d4e7f9] dark:bg-[#3B6790] text-white dark:text-white placeholder-gray-400 dark:placeholder-gray-300 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#EFB036] focus:outline-none ring-offset-1 dark:ring-offset-[#00052a]"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={result === "Sending..."}
              className="dark:bg-[#EFB036] bg-[#3e65ff6c] hover:bg-[#3e64ff] dark:hover:bg-[#dfa029] text-white font-medium px-6 py-2 rounded-lg transition-transform hover:scale-105 disabled:opacity-50"
            >
              {result === "Sending..." ? "Sending..." : "Submit"}
            </button>

            {result && !result.startsWith("✅") && (
              <p
                className={`mt-4 text-sm px-3 py-2 rounded-md transition-all duration-300 ${result.includes('✅')
                  ? 'text-green-600 bg-green-100 dark:bg-green-800'
                  : 'text-red-600 bg-red-100 dark:bg-red-800'
                  }`}
              >
                {result}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Custom Success Popup */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 animate-slide-up">
          ✅ Form Submitted Successfully!
        </div>
      )}
    </section>
  );
};

export default Contact;
