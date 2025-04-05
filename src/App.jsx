import React from 'react'
import './index.css'
import Headers from './components/Header'
import Hero from './components/Hero'
import Aboutme from './components/Aboutme'
import Exp from './components/Exp'
import Projectslide from './components/Projectslide'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppPopup from './components/Whatapp'


const App = () => {
  return (
    <div className="bg-white text-black dark:bg-[#00052a] dark:text-white transition-all duration-300">
      <Headers />
      <Hero />
      <Aboutme />
      <Exp />
      <Projectslide />
      <Resume />
      <Contact />
      <Footer />

      <WhatsAppPopup/>
    </div>
  )
}

export default App
