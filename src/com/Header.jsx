import React, { useState } from 'react'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import '/src/App.css'
import img from '/asset/me.png'



const Headers = () => {

   const [menu,setMenu] = useState(false);   
    return (
    <header className='flex justify-between  bg-primary   text-2xl font-serif ease-in duration-200 bg-[#00052a]' > 
    
    
    
           <div className="py-24 md:py-32  duration-300 opacity-0 md:opacity-100">
                <div className="flex items-center gap-x-4">
                           <img alt="" src={img} className="size-20 rounded-full shadow-2xl shadow-gray-400" />
                           <div className=''>
                             
                           </div>
                         </div>
               </div>
            <nav className='hidden md:block '>
               <ul className=' flex px-4 font-serif  '>
                    <li className='header-hover '><a  href='/'>Home</a></li>
                     <li className='header-hover ' ><a href='#about'>About</a></li>
                      <li className='header-hover '><a href='#Project'>Project</a></li>
                       <li className='header-hover '><a href='#contact'>Contact</a></li>
                   <li className='header-hover '  
                      >  <a href='#resume'> Dowload cv </a> </li>
                      
                </ul>
            </nav>

             { menu && <nav className="block md:block  ">
               <ul className=' flex flex-col mobile-nav bg-gray-500  '> 
                    <li><a href='/'>Home</a></li>
                     <li><a href='#about'>About</a></li>
                      <li><a href='#Project'>Project</a></li>
                       <li><a href='#contact'>Contact</a></li>
                        <li><a href='#resume'>Dowload Cv</a></li>
                      
                </ul>
            </nav>
}

            <button className='block md:hidden  transition delay-500 duration-800 ease-in-out' onClick={ () => setMenu(!menu)}>
              { menu ? <XMarkIcon className='text-white h-8' />:<Bars3Icon className='text-white h-8'/>  }</button>

             
 
    </header>

  )
}

export default Headers
