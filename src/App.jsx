import React from 'react'
import './App.css'
import Headers from './com/Header'
import Hero from './com/Hero'
import Aboutme from './com/Aboutme'
import Resume from './com/Resume'
import Contact from './com/Contact'
import Footer from './com/Footer'
import Projectslide from './com/Projectslide'
import Skill from './com/Skills'
import Exp from './com/Exp'

import Experience from './com/Experience'



const App = () => {
  return (
    <div >
    <Headers/>
    <Hero/>
    <Aboutme/>
    <Exp/>
    
    <Projectslide/>
    <Resume/>
    <Contact/>
    <Footer/>
    <Skill/>
    

   
    
    
   <Experience/>
    </div>

    
  )
}

export default App
