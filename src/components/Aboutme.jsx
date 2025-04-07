import React from 'react';
import About from '/asset/me.png';

const Aboutme = () => {
  return (
    <section className='text-black dark:text-white py-20 bg-white dark:bg-[#00052a] transition-colors duration-500' id='about'>
      <div className='mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12  transition-colors'>
          About Me
        </h2>

        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <img
            src={About}
            alt="Sanjaykumar V"
            className='w-72 h-72 md:w-80 md:h-80 rounded-3xl duration-500 object-cover mb-8 md:mb-0 hover:scale-105 shadow-lg shadow-[#3B6790]/40'
          />

          <div className='flex-1'>
            <p className='text-lg mb-8 leading-relaxed  dark:text-white text-gray-400 font-light'>
              I am a passionate full-stack developer focused on building modern, responsive web applications.
              With a strong foundation in both frontend and backend technologies, I aim to deliver seamless,
              user-centric digital experiences that are scalable and performance-optimized.
            </p>

            {/* Skills Section */}
            <div className='space-y-5 dark:text-white text-gray-400'>
              {[
                { label: 'HTML & CSS', width: 'w-11/12' },
                { label: 'JavaScript', width: 'w-10/12' },
                { label: 'React.js', width: 'w-10/12' },
                { label: 'Node.js', width: 'w-9/12' },
              ].map((skill, idx) => (
                <div className='flex items-center gap-4' key={idx}>
                  <label className='w-3/12 sm:w-2/12 font-medium'>{skill.label}</label>
                  <div className='grow bg-gray-600 rounded-full h-2.5'>
                    <div
                      className={`bg-gradient-to-r from-[#EFB036] to-gray-300 h-2.5 rounded-full transform transition-transform duration-500 hover:scale-110 ${skill.width}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
