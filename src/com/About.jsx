import React from 'react'
import about from '/asset/about.png'

const About = () => {
  return (
  <section className='bg-black  text-white md:flex-row  flex flex-col about ' id='about' >
        <div className='md:w-1/2  ' >
        <img  className='abouth1 aboutimg hover:scale-110 duration-300 'src={about} alt="#" />
        </div>
        <div className='flex justify-center md:w-full  '>
            <div className=' flex flex-col  justify-center ' >
                
               <h1 className='font-bold text-3xl abouth1  hover:text-red-500 '>About me</h1>
            <p className='abouth1' >hi,my name is sanjaykumar v . iam a full stack developer.i build beautiful websites with react.js,Tailwindcss and bootstarp</p>
            <p className='abouth1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio suscipit soluta, labore dolor sequi architecto nesciunt voluptatem repellendus eaque, possimus saepe dolorem pariatur quam, ab quia perferendis quibusdam obcaecati tenetur.</p>
           <p className='abouth1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio suscipit soluta, labore dolor sequi architecto nesciunt voluptatem repellendus eaque, possimus saepe dolorem pariatur quam, ab quia perferendis quibusdam obcaecati tenetur.</p>
            </div>
            </div>
    

  </section>
  )
}

export default About
