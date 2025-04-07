import React from 'react';
import resumes from '/asset/resume.png';
import resumePDF from '/asset/Resume sanjay.pdf';

const Resume = () => {
  return (
    <section
      className="bg-white text-gray-900 dark:bg-[#00052a] dark:text-white flex flex-col md:flex-row items-center justify-center py-12 px-6 transition-colors duration-500 overflow-hidden"
      id="resume"
    >
      {/* Left - Resume Image */}
      <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
        <img
          className="h-[80%] max-w-sm hover:scale-105 transition-transform duration-300"
          src={resumes}
          alt="Resume Preview"
        />
      </div>

      {/* Right - Download Info */}
      <div className="flex justify-center md:w-1/2 lg:w-1/3 w-full">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="font-bold text-3xl hover:text-[#EFB036] transition duration-300">
            Download CV
          </h1>
          <p className="text-xl text-gray-400 dark:text-gray-300">
            You can view or download my resume
          </p>
          <a
            href={resumePDF}
            download="Sanjay_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:bg-[#EFB036] bg-[#3e65ff6c] hover:bg-[#3e64ff]  text-white px-6 py-2 rounded-md dark:hover:bg-[#dfa029] transition-transform hover:scale-105 font-medium"
          >
            Download
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
