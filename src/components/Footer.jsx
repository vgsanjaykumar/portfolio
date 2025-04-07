import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Footer = () => {
  const [theme, setTheme] = useState('light');
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [result, setResult] = useState('');

  // Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  // Scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle form submit (Web3Forms)
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const formData = new FormData(event.target);
    formData.append('access_key', 'e52bab3c-6d7d-46a9-b6bc-08ce3470ec20');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully!');
        event.target.reset();
      } else {
        setResult(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setResult('Submission failed. Please try again.');
    }
  };

  return (
    <footer className="bg-white dark:bg-[#00052a] text-gray-800 dark:text-white pt-12 pb-10 transition-colors duration-500 relative over">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Footer Content */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-bold dark:text-[#EFB036] text-blue-400">Sanjaykumar</h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-md">
              Frontend Developer from Karaikudi. I build beautiful and responsive web apps that provide real value.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Subscribe for updates</h4>
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-[#d4e7f9] dark:bg-[#3B6790] text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
              />
              <button
                type="submit"
                className="dark:bg-[#EFB036] bg-[#3e65ff6c] hover:bg-[#3e64ff] dark:hover:bg-[#dfa029] text-white px-6 py-2 rounded transition"
              >
                Subscribe
              </button>
            </form>
            {result && <p className="mt-2 text-sm text-green-500">{result}</p>}
          </div>
        </div>

        {/* Bottom Footer Content */}
        <div className="border-t border-blue-400 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sanjaykumar</p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://www.instagram.com/sanju_na_mass" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="dark:hover:text-[#EFB036] text-[#E1306C] transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sanjay-kumar-v-a4a770261/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="dark:hover:text-[#EFB036] text-[#0077B5] transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/vgsanjaykumar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#EFB036] transition">
              <FaGithub size={20} />
            </a>
          </div>

          {/* Footer Location & Theme Toggle */}
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="hover:text-[#EFB036] transition">sanjaykumar.v</span>
            <span className="hover:text-[#EFB036] transition">Karaikudi</span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#EFB036] hover:bg-[#dfa029] text-white p-3 rounded-full shadow-md transition transform hover:-translate-y-1 overflow-hidden"
          aria-label="Back to top"
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
