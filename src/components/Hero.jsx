import React from 'react'
import { Typewriter, Cursor } from 'react-simple-typewriter'
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook
} from 'react-icons/ai'

const Hero = () => {
  return (
    <section className='transition-colors duration-500 w-full h-[650px] bg-white dark:bg-[#00052a] text-black dark:text-white text-center py-32 px-4'>
      <h1 className='text-4xl font-bold'>
        Hey!<br />
        <span className='text-3xl sm:text-4xl mt-2 inline-block dark:text-white text-[#3e64ff]'>I'm Sanjaykumar V</span>
      </h1>

      <p className='text-2xl font-bold mt-6'>
        I'm a{' '}
        <span className='dark:text-[#EFB036] text-[#3e64ff]'>
          <Typewriter
            words={['Full Stack Developer', 'Graphic Designer', 'Developer']}
            loop
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
          <Cursor />
        </span>
      </p>

      <div className='flex justify-center gap-6 mt-8'>
        <a
          href='https://www.linkedin.com/in/sanjay-kumar-v-a4a770261/'
          target='_blank'
          rel='noreferrer'
          className='text-[#0077B5] dark:text-white dark:hover:text-[#EFB036] transition-colors'
        >
          <AiOutlineLinkedin size={40} />
        </a>
        <a
          href='https://www.instagram.com/sanju_na_mass/'
          target='_blank'
          rel='noreferrer'
          className='text-[#E1306C] dark:text-white dark:hover:text-[#EFB036] transition-colors'
        >
          <AiOutlineInstagram size={40} />
        </a>
        <a
          href='https://www.facebook.com/share/15QvxoZCn3/'
          target='_blank'
          rel='noreferrer'
          className='text-[#1877F2] dark:text-white dark:hover:text-[#EFB036] transition-colors'
        >
          <AiOutlineFacebook size={40} />
        </a>
        <a
          href='https://github.com/vgsanjaykumar'
          target='_blank'
          rel='noreferrer'
          className='text-[#333] dark:text-white dark:hover:text-[#EFB036] transition-colors'
        >
          <AiOutlineGithub size={40} />
        </a>
      </div>
    </section>
  )
}

export default Hero
