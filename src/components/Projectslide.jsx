import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    img: "./asset/ahmedpaint.png",
    title: "Ahmed Paint Traders Website",
    description: "A fully responsive React website for a local paint shop with product showcase and WhatsApp inquiry integration. Built using React and Tailwind CSS. Deployed on Hostinger.",
    link: "https://ahmedpainttraders.in/",
  },
  {
    img: "./asset/natarajan and co.png",
    title: "Natarajan & Co Landing Page",
    description: "A modern React-based landing page for a building material supplier, featuring company details, animated sections, and responsive design. Deployed on Hostinger.",
    link: "https://natarajanandco.com/",
  },
  {
    img: "./asset/landpage 2.png",
    title: "Smart Automated Resume Screening & Interview Scheduling System",
    description: "An automated web app for screening resumes and scheduling interviews, built with React.js and Node.js, and automated using UiPath.",
    link: "https://hrdesktop.netlify.app/",
  },

  {
    img: "./asset/melody.png",
    title: "Melody Photography – Karaikudi",
    description: "A visually elegant React portfolio site for a local photography studio, showcasing services, photo galleries, and client contact options. Built with React and Tailwind CSS. Deployed on Netlify.",
    link: "https://melodyphotographyps.netlify.app/",
  },
  {
    img: "./asset/vs traders.png",
    title: "Vs Traders – Karaikudi",
    description: "A modern React-based landing page for a building material supplier, featuring company details, animated sections, and responsive design..",
    link: "https://vstraders.netlify.app/",
  },
  {
    img: "./asset/landpage 2.png",
    title: "Dark Mode Portfolio",
    description: "Personal portfolio in React & Tailwind with dark mode toggle.",
    link: "https://github.com/vgssanjayboss/portfolio-darkmode",
  }
];

const Projectslide = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section id="Project" className="py-12 px-4 bg-white dark:bg-[#00052a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#1a1a1a] dark:text-white hover:text-[#EFB036] transition-colors duration-300">
          Projects
        </h2>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-3">
              <div className="bg-[#f9f9f9] dark:bg-[#11193f] rounded-xl overflow-hidden shadow-md hover:shadow-xl p-4 h-full flex flex-col transition-transform duration-300 hover:scale-105">
                <img
                  src={project.img}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-48 object-cover rounded-lg mb-4 transition duration-300 hover:opacity-90"
                />
                <div className="flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-[#EFB036] mb-2">{project.title}</h3>
                  <p className="text-gray-800 dark:text-gray-300 text-sm md:text-base flex-1">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 self-start bg-[#EFB036] text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all text-sm font-medium"
                  >
                    View live Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projectslide;
