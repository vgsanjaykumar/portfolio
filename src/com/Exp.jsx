import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
import { Autoplay, FreeMode } from 'swiper/modules';
import { useState } from 'react';

const Exp = () => {
  const [active,setActive]=useState(null)
  const lang =[
    
    {
        Name:'Graphic designer',
        logo:'/asset/mag-logo.png',
        skills:'4week',
        para:"Internship at magniontechnologies",
        desc:"creating visual content and branding materials Created logos,marketing materials and digitalassets using Adobe photoshop and canva",
        colour:"hue-rotate-[240deg]"
    },
    {
        Name:'Web-development',
        logo:'/asset/code-logo.png'
        ,skills:'4week',
        para:"Internship at codebind tech ",
        desc:"creating and maintaining websites using front-end and back-end technologies like HTML,CSS,JavaScript and PHP ",
        colour:"hue-rotate-[180deg]"},
   
    {  
         Name:'Graphic designer',
        logo:'/asset/mag-logo.png',
        skills:'4week',
        para:"Internship at magniontechnologies",
        desc:"Assisted senior designers in creating visual content and branding materials Created logos,marketing materials and digitalassets using Adobe photoshop and canva.",
        colour:"hue-rotate-[240deg]"
    },
     {
        Name:'Email-marketing',
        logo:'/asset/Untitled design (3).png',
        skills:'4week',
        para:"Internship at vintorix pvt",
        desc:"Email marketing involves sending targeted emails to promote products,engage customers,and drive conversions.",
        colour:"hue-rotate-[80deg]"
    },
    

  ]
  return (
     <section>
       <div className="top-container ">
        <div className="container ">
          <div className='exp-div-card text-white'>
      <div className="md:min-w-2xl lg:min-w-3xl  xl:minw-5xl min-w-8">
         <Swiper
      
      freeMode={true}
      onSlideChange={(cur) => setActive(cur.realIndex)}
      
      loop={true}
      grabCursor={true}
      centeredSlides={true}
      speed={800}
      className='mySwiper'
      autoplay={{
        delay:3000,
      }}
      modules={[Autoplay,FreeMode]}
      breakpoints={{
        0:{
          slidesPerView:1,
          spaceBetween:40,
        },
        480:{
          slidesPerView:1,
          spaceBetween:40,
        },
         768:{
           spaceBetween:20,
           slidesPerView:3,
        },
         1024:{
         spaceBetween:80,
         slidesPerView:3,
        },
          1280:{
         spaceBetween:80,
         slidesPerView:3,
        },
      }}
    >
      
      {
        lang.map((lang,i)=>(
          <SwiperSlide key={i}>
        <div className="h-96  flex  "> 
          <div className={`exp-card ${active === i && 'exp-card-active'}  ${lang.colour}`}>
            <div className='exp-logo '>
             <img src={lang.logo} alt="" />
              
            </div>
            <h2 className='exp-card-title'>{lang.Name}</h2>
            <p className='exp-para'>{lang.para}</p>
            <p className='exp-des'>{lang.desc}</p>
              <div className='exp-skill-level'>
                {lang.skills}
              </div>
          </div>
        </div>
      </SwiperSlide>
        ))
      }
      
      
    </Swiper>
      </div>
      
    </div>
    </div>
    </div>
    </section>

  )
}

export default Exp
