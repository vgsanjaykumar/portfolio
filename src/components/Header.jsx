import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";
import img from "/asset/me.png";

const Headers = () => {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true; // default dark
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="
      sticky top-0 z-50
      flex justify-between items-center
      px-4 py-4
      bg-white dark:bg-[#00052a]
      text-black dark:text-white
      transition-colors duration-500
    ">

      {/* Logo */}
      <div className="flex items-center gap-x-4">
        <img
          src={img}
          alt="Profile"
          className="size-14 md:size-20 rounded-full shadow-lg"
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center">
        <ul className="flex gap-x-6 text-lg font-medium">
          {["Home", "About", "Project", "Contact", "Resume"].map((item) => (
            <li
              key={item}
              className="hover:text-cyan-400 transition duration-300"
            >
              <a href={item === "Home" ? "/" : `#${item.toLowerCase()}`}>
                {item === "Resume" ? "Download CV" : item}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 transition-colors duration-500"
          aria-label="Toggle Theme"
        >
          {darkMode ? (
            <BsSun className="text-cyan-400 text-2xl" />
          ) : (
            <BsMoon className="text-gray-800 text-2xl" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="block md:hidden z-[999]"
        onClick={() => setMenu(!menu)}
      >
        {menu ? (
          <XMarkIcon className="h-8" />
        ) : (
          <Bars3Icon className="h-8" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-40
          backdrop-blur-md
          bg-white/90 dark:bg-[#00052a]/90
          transition-all duration-500 ease-in-out
          md:hidden flex flex-col justify-between
          ${menu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center px-6 pt-6">
          <h1 className="text-2xl font-bold">Sanjaykumar V</h1>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col items-center gap-8 text-2xl font-semibold flex-grow justify-center">
          {["Home", "About", "Project", "Contact", "Resume"].map((item) => (
            <li key={item}>
              <a
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                onClick={() => setMenu(false)}
                className="hover:text-cyan-400 transition"
              >
                {item === "Resume" ? "Download CV" : item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Footer */}
        <div className="flex flex-col items-center gap-4 pb-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/vgsanjaykumar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl hover:text-cyan-400 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay-kumar-v-a4a770261/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-cyan-400 transition" />
            </a>
            <a href="mailto:sanjaykumarvgs@gmail.com">
              <FaEnvelope className="text-2xl hover:text-cyan-400 transition" />
            </a>
          </div>

          {/* Mobile Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 transition-colors duration-500"
          >
            {darkMode ? (
              <BsSun className="text-cyan-400 text-2xl" />
            ) : (
              <BsMoon className="text-gray-800 text-2xl" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Headers;
