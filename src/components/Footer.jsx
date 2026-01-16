import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import useScrollReveal from "../hooks/useScrollReveal";

const Footer = () => {
  const [theme, setTheme] = useState("light");
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [result, setResult] = useState("");

  const revealRef = useScrollReveal();

  /* ===== Load Theme ===== */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  /* ===== Theme Toggle ===== */
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  /* ===== Back to Top ===== */
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  /* ===== Subscribe ===== */
  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append(
      "access_key",
      "e52bab3c-6d7d-46a9-b6bc-08ce3470ec20"
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setResult("Subscribed successfully!");
        e.target.reset();
      } else {
        setResult("Something went wrong");
      }
    } catch {
      setResult("Submission failed");
    }
  };

  return (
    <footer
      ref={revealRef}
      className="
        bg-white dark:bg-[#00052a]
        text-gray-800 dark:text-white
        pt-12 pb-10
        transition-all duration-700
        opacity-0 translate-y-10
        relative
      "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-bold text-cyan-500">
              Sanjaykumar
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-md">
              Frontend Developer from Karaikudi. I build beautiful and
              responsive web applications that deliver real value.
            </p>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold text-lg mb-2">
              Subscribe for updates
            </h4>
            <form
              onSubmit={onSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="
                  w-full px-4 py-2 rounded
                  bg-[#d4e7f9] dark:bg-[#3B6790]
                  text-black dark:text-white
                  placeholder-gray-400
                  focus:ring-2 focus:ring-cyan-400 outline-none
                "
              />
              <button
                type="submit"
                className="
                  bg-cyan-400 hover:bg-cyan-500
                  text-white px-6 py-2 rounded
                  transition
                "
              >
                Subscribe
              </button>
            </form>
            {result && (
              <p className="mt-2 text-sm text-cyan-500">
                {result}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="
          border-t border-cyan-400/40 dark:border-gray-700
          pt-6 flex flex-col md:flex-row
          justify-between items-center gap-6
          text-sm text-gray-600 dark:text-gray-400
        ">
          <p>
            &copy; {new Date().getFullYear()} Sanjaykumar
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/sanju_na_mass"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay-kumar-v-a4a770261/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/vgsanjaykumar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub size={20} />
            </a>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-4">
            <span>sanjaykumar.v</span>
            <span>Karaikudi</span>
            <button
              onClick={toggleTheme}
              className="
                p-2 rounded-full
                bg-gray-200 dark:bg-gray-700
                transition
              "
            >
              {theme === "dark" ? (
                <MdOutlineLightMode size={20} />
              ) : (
                <MdOutlineDarkMode size={20} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 z-50
            bg-cyan-500 hover:bg-cyan-600
            text-white p-3 rounded-full
            shadow-md transition
            hover:-translate-y-1
          "
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
