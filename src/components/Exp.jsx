import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode } from 'swiper/modules';

const Exp = () => {
  const [active, setActive] = useState(null);

  const lang = [
    {
      Name: 'Graphic Designer',
      logo: '/asset/mag-logo.png',
      skills: '4 weeks',
      para: 'Internship at Magnion Technologies',
      desc: 'Created logos, marketing materials and digital assets using Adobe Photoshop and Canva.',
      colour: 'hue-rotate-[240deg]'
    },
    {
      Name: 'Web Development',
      logo: '/asset/code-logo.png',
      skills: '4 weeks',
      para: 'Internship at Codebind Tech',
      desc: 'Created and maintained websites using HTML, CSS, JavaScript, and PHP.',
      colour: 'hue-rotate-[180deg]'
    },
    {
      Name: 'Graphic Designer',
      logo: '/asset/mag-logo.png',
      skills: '4 weeks',
      para: 'Internship at Magnion Technologies',
      desc: 'Assisted senior designers in branding and digital design using Photoshop and Canva.',
      colour: 'hue-rotate-[240deg]'
    },
    {
      Name: 'Email Marketing',
      logo: '/asset/Untitled design (3).png',
      skills: '4 weeks',
      para: 'Internship at Vintorix Pvt Ltd',
      desc: 'Executed email campaigns to promote products and engage customers.',
      colour: 'hue-rotate-[80deg]'
    }
  ];

  return (
    <section id="experience" className="py-16 px-6 md:px-16 lg:px-32 bg-white dark:bg-[#00052a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white hover:text-[#EFB036] transition">Experience</h2>

        <Swiper
          freeMode={true}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          speed={800}
          autoplay={{ delay: 3000 }}
          onSlideChange={(cur) => setActive(cur.realIndex)}
          modules={[Autoplay, FreeMode]}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 40 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 60 }
          }}
        >
          {lang.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="h-full flex justify-center">
                <div className={`relative p-6 rounded-2xl w-full max-w-sm transition duration-300 ease-in-out
                  ${active === i ? 'scale-105 shadow-2xl' : 'scale-95 shadow-md'} 
                  bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white ${item.colour}`}>

                  <div className="flex justify-center mb-4">
                    <img src={item.logo} alt={item.Name} className="h-16 w-16 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{item.Name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{item.para}</p>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">{item.desc}</p>

                  <div className="absolute top-4 right-4 text-xs font-medium px-3 py-1 bg-[#EFB036] text-white rounded-full shadow-md">
                    {item.skills}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Exp;
