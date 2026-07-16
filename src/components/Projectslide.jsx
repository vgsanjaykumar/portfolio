import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useScrollReveal from "../hooks/useScrollReveal";

const projects = [
  {
    img: "./asset/project/ahmedpaint.png",
    title: "Ahmed Paint Traders Website",
    description:
      "A fully responsive React website for a local paint shop with product showcase and WhatsApp inquiry integration. Built using React and Tailwind CSS. Deployed on Hostinger.",
    link: "https://ahmedpainttraders.in/",
  },
  {
    img: "./asset/project/natarajan_and_co.png",
    title: "Natarajan & Co Landing Page",
    description:
      "A modern React-based landing page for a building material supplier, featuring company details, animated sections, and responsive design. Deployed on Hostinger.",
    link: "https://natarajanandco.com/",
  },
  {
  img: "/asset/project/msk_solution.png",
  title: "MSK Solution",
  description:
    "A modern business website developed using React.js and Tailwind CSS, featuring responsive design, service highlights, company information, and an intuitive user experience optimized for all devices.",
  link: "https://msksolution.in/", // Update with your actual URL
},
{
  img: "/asset/project/aqeel_traders.png",
  title: "Aqeel Traders",
  description:
    "A professional business website built with React.js and Tailwind CSS for a building materials supplier, showcasing products, company details, contact information, and a fully responsive modern interface.",
  link: "https://aqeeltraders.com/", // Update with your actual URL
},
  {
    img: "./asset/project/hr_desk.png",
    title: "Smart Automated Resume Screening & Interview Scheduling System",
    description:
      "An automated web app for screening resumes and scheduling interviews, built with React.js and Node.js, and automated using UiPath.",
    link: "https://hrdesktop.netlify.app/",
  },
  {
    img: "./asset/project/melody.png",
    title: "Melody Photography – Karaikudi",
    description:
      "A visually elegant React portfolio site for a local photography studio, showcasing services, photo galleries, and client contact options. Built with React and Tailwind CSS. Deployed on Netlify.",
    link: "https://melodyphotographyps.netlify.app/",
  },
  {
    img: "./asset/project/vs_traders.png",
    title: "VS Traders – Karaikudi",
    description:
      "A modern React-based landing page for a building material supplier, featuring company details, animated sections, and responsive design.",
    link: "https://vstraders.netlify.app/",
  },
  {
    img: "./asset/landpage 2.png",
    title: "Dark Mode Portfolio",
    description:
      "Personal portfolio built using React and Tailwind CSS with dark mode toggle and modern UI components.",
    link: "https://github.com/vgssanjayboss/portfolio-darkmode",
  },
];

const Projectslide = () => {
  const revealRef = useScrollReveal();

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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="Project"
      ref={revealRef}
      className="
        py-20 px-4
        bg-white dark:bg-[#00052a]
        transition-all duration-700
        opacity-0 translate-y-10
      "
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Projects
        </h2>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-3">
              <div
                className="
                  h-full flex flex-col
                  rounded-2xl overflow-hidden
                  bg-white/30 dark:bg-white/10
                  backdrop-blur-xl
                  border border-white/30 dark:border-white/10
                  shadow-lg
                  transition-all duration-500
                  hover:scale-105 hover:shadow-cyan-500/30
                "
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="
                    w-full h-48 object-cover
                    transition duration-300
                    hover:opacity-90
                  "
                />

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-cyan-500 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-800 dark:text-gray-300 text-sm flex-1">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-4 self-start
                      bg-cyan-400 hover:bg-cyan-500
                      text-white px-4 py-2
                      rounded-lg
                      transition text-sm font-medium
                    "
                  >
                    View Live Project
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
