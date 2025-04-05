import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "e52bab3c-6d7d-46a9-b6bc-08ce3470ec20");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("Submission failed. Please try again.");
    }
  };

  return (
    <footer className="top-conta bg-gray-900 text-white py-8">
      <div className="container mx-auto footer-container px-4">
        <div className="footer-des mb-8">
          <div className="footer-tit mb-4">
            <h3 className="text-2xl font-bold">sanjaykumar</h3>
            <p className="text-sm text-gray-400 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, iure nulla! Assumenda reprehenderit, ea saepe
              adipisci perspiciatis tempora velit iste iure quis explicabo,
              magni quisquam maxime magnam placeat aliquid dolores.
            </p>
          </div>

          <div className="flex-1 w-full mt-6">
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row items-center gap-2 py-4">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="footer-input px-4 py-2 rounded text-black w-full sm:w-auto"
                required
              />
              <button type="submit" className="button-all footer-btn bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
            <span className="text-sm text-green-400">{result}</span>
          </div>
        </div>

        <div className="footer-line border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Sanjaykumar</p>

          <div className="footer-centers flex gap-4 mt-4 sm:mt-0">
            <a
              href="https://www.instagram.com/sanju_na_mass?utm_source=qr&igsh=YzhuN2QyYWwxYTRi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay-kumar-v-a4a770261/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/vgsanjaykumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>

          <div className="footer-info flex gap-6 mt-4 sm:mt-0 text-sm text-gray-400">
            <span className="hover:text-white transition">sanjaykumar.v</span>
            <span className="hover:text-white transition">Karaikudi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
