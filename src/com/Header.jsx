import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import '/src/App.css'
import img from '/asset/me.png'

const Headers = () => {

   const [menu,setMenu] = useState(false);   
    return (
    <header className='flex justify-between  bg-primary bg-black text-2xl font-serif' > 
    
           <div className="py-24 md:py-32  opacity-0 md:opacity-100">
                <div className="flex items-center gap-x-4">
                           <img alt="" src={img} className="size-20 rounded-full" />
                           <div className=''>
                             <h3 className="text-3xl  text-white font-bold tracking-tight  ">SK</h3>
                           </div>
                         </div>
               </div>
            <nav className='hidden md:block '>
               <ul className=' flex px-4 font-serif  '>
                    <li className='hover:text-red-500 '><a  href='/'>Home</a></li>
                     <li className='hover:text-red-500  ' ><a href='#about'>About</a></li>
                      <li className='hover:text-red-500 '><a href='#Project'>Project</a></li>
                       <li className='hover:text-red-500 '><a href='#'>Contact</a></li>
                      <button className='button-all' 
                      >Dowload cv </button>
                      
                </ul>
            </nav>

             { menu && <nav className="block md:block  ">
               <ul className=' flex flex-col  px-4   mobile-nav bg-gray-400 '> 
                    <li><a href='#'>Home</a></li>
                     <li><a href='#'>About</a></li>
                      <li><a href='#'>Project</a></li>
                       <li><a href='#'>Contact</a></li>
                        <li><a href='#'>Dowload Cv</a></li>
                      
                </ul>
            </nav>
}

            <button className='block md:hidden  transition delay-150 duration-300 ease-in-out' onClick={ () => setMenu(!menu)}> <Bars3Icon className='text-white h-8' />  </button>

             
 
    </header>
  )
}

export default Headers
