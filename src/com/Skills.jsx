import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
import { Autoplay, FreeMode } from 'swiper/modules';
import { useState } from 'react';

const Skill = () => {
  const [active,setActive]=useState(null)
  const lang =[
    {Name:'Html',logo:'html5',skills:'70%',colour:"hue-rotate-[20deg]"},
    {Name:'Css',logo:'css3',skills:'70%',colour:"hue-rotate-[240deg]"},
    {Name:'Javascript',logo:'javascript',skills:'70%',colour:"hue-rotate-[58deg]"},
    {Name:'react.js',logo:'',skills:'70%', skillreact:"react",colour:"hue-rotate-[225deg]"},
    {Name:'react.js',logo:'angular',skills:'70%',colour:"hue-rotate-[0deg]"},
  ]
  return (
     <section>
       <div className="top-container ">
        <div className="container ">
          <div className='div-card text-white'>
      <div className="md:min-w-2xl lg:mix-w-5xl min-w-8">
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
         spaceBetween:40,
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
        <div className="h-96 flex  "> 
          <div className={`card ${active === i && 'card-active'}  ${lang.colour}`}>
            <div className='card-logo '>
              <ion-icon name={`logo-${lang.logo}`} ></ion-icon>
              
            </div>
            <h2 className='card-title'>{lang.Name}</h2>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, doloribus 
              laborum repellendus deserunt excepturi .</p>
              <div className='skill-level'>
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

export default Skill
