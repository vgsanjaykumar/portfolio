import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Skill = () => {
  return (
    <div className='div-card text-white'>
      <div className="max-w-5xl">
         <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="h-96 flex"> 
          <div className={`card  `}>
            <h2>react.js</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, doloribus 
              laborum repellendus deserunt excepturi fugiat quam eum, in recusandae ipsam id
               consequun</p>
          </div>
        </div>
      </SwiperSlide>
      
      
    </Swiper>
      </div>
      
    </div>
  )
}

export default Skill
