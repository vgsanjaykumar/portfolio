import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { BsMoon, BsSun } from 'react-icons/bs';
import '/src/index.css';
import img from '/asset/me.png';

const Headers = () => {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className='flex justify-between items-center px-4 py-4 bg-white dark:bg-[#00052a] text-black dark:text-white text-xl font-serif relative z-50'>

      {/* Profile */}
      <div className="flex items-center gap-x-4">
        <img alt="Profile" src={img} className="size-14 md:size-20 rounded-full shadow-lg" />
      </div>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex gap-6 items-center'>
        <ul className='flex gap-x-6'>
          <li className='hover:text-[#EFB036] hover:rounded duration-300'><a href='/'>Home</a></li>
          <li className='hover:text-[#EFB036] hover:rounded duration-300'><a href='#about'>About</a></li>
          <li className='hover:text-[#EFB036] hover:rounded duration-300'><a href='#Project'>Project</a></li>
          <li className='hover:text-[#EFB036] hover:rounded duration-300'><a href='#contact'>Contact</a></li>
          <li className='hover:text-[#EFB036] hover:rounded duration-300'><a href='#resume'>Download CV</a></li>
        </ul>

        {/* Theme Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className='ml-4'>
          {darkMode ? (
            <BsSun className='text-yellow-400 text-2xl' />
          ) : (
            <BsMoon className='text-gray-800 text-2xl' />
          )}
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button className='block md:hidden z-[999]' onClick={() => setMenu(!menu)}>
        {menu ? (
          <XMarkIcon className='text-current h-8' />
        ) : (
          <Bars3Icon className='text-current h-8' />
        )}
      </button>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 backdrop-blur-md bg-white/90 dark:bg-[#00052a]/90 text-current transition-all duration-500 ease-in-out md:hidden flex flex-col justify-between z-40 ${menu ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>

        {/* Mobile Header + Close Button */}
        <div className='flex justify-between items-center px-6 pt-6'>
          <h1 className='text-2xl font-bold'>Sanjaykumar V</h1>
          
        </div>

        {/* Mobile Nav Links */}
        <ul className='flex flex-col items-center justify-center gap-8 text-2xl font-semibold flex-grow'>
          <li><a href='/' onClick={() => setMenu(false)}>Home</a></li>
          <li><a href='#about' onClick={() => setMenu(false)}>About</a></li>
          <li><a href='#Project' onClick={() => setMenu(false)}>Project</a></li>
          <li><a href='#contact' onClick={() => setMenu(false)}>Contact</a></li>
          <li><a href='#resume' onClick={() => setMenu(false)}>Download CV</a></li>
        </ul>

        {/* Footer Socials & Theme Toggle */}
        <div className='flex flex-col items-center gap-4 pb-6'>
          <div className='flex gap-6'>
            <a href="https://github.com/vgsanjaykumar" target="_blank" rel="noreferrer">
              <FaGithub className='text-2xl hover:text-yellow-400 transition' />
            </a>
            <a href="https://www.linkedin.com/in/sanjay-kumar-v-a4a770261/" target="_blank" rel="noreferrer">
              <FaLinkedin className='text-2xl hover:text-yellow-400 transition' />
            </a>
            <a href="mailto:sanjaykumarvgs@gmail.com">
              <FaEnvelope className='text-2xl hover:text-yellow-400 transition' />
            </a>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} className='mt-2'>
            {darkMode ? (
              <BsSun className='text-yellow-400 text-2xl' />
            ) : (
              <BsMoon className='text-gray-800 text-2xl' />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Headers;
