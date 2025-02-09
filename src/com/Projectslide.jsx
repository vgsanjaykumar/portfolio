import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Exp =[
    {
        img:"./asset/e-com.jpg",
        title: "Landing page",
        description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
       
    },
    {
        img: "./asset/landing page.jpeg",
        title: "E-commernce",
         description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
    },

    {
        img:"./asset/landpage 2.png",
        title: "Landing page ",
        description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
    },
        {
        img:"./asset/e-com.jpg",
        title: "Landing page",
        description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
       
    },
    {
        img: "./asset/landing page.jpeg",
        title: "E-commernce",
         description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
    },

    {
        img:"./asset/landpage 2.png",
        title: "Landing page ",
        description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
    },
        {
        img: "./asset/landing page.jpeg",
        title: "E-commernce",
         description: "A landing page is a focused web page designed for marketing, featuring a clear CTA to drive conversions, leads, or sales.",
    },

  

];

const Projectslide = () => {
    var settings = {
    dots:false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 1000,
    autoplaySpeed: 500,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
   
     <section>
       
      <div className="top-container " id='Project'>
        <div className="container ">
            <h3 className='about-text  hover:text-[#EFB036]'>Projects</h3>

            
              <Slider {...settings}>
                 {Exp.map(Exp =>(
                    <div key={Exp.img} className='proj-div' >
                        <img src={Exp.img} className='projectslide-img' alt="" />
                        <div className="proj-desc">
                          <h1 className='text-2xl font-bold text-[#EFB036] proj-p'>{Exp.title}</h1>
                             <p className=''>{Exp.description}</p>
                             <a href="#" className=' button-all-submit'>Readmore</a>
                             
                        </div>
                         
                       
                       
                        
                      
                         
                       
                        
                    </div>
                ))}
                  </Slider>
           

           
           
          
        </div>
         
      </div>
       

     </section>
   
  )
}

export default Projectslide
