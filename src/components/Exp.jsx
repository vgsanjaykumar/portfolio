import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import useScrollReveal from "../hooks/useScrollReveal";

const Exp = () => {
  const [active, setActive] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const revealRef = useScrollReveal();

  /* ========= TEXT LIMIT ========= */
  const limitText = (text, limit = 100) =>
    text.length > limit ? text.slice(0, limit).trim() + "..." : text;

  /* ========= THEME COLORS ========= */
  const themeClasses = {
    blue: {
      badge: "bg-blue-500",
      glow: "hover:shadow-blue-500/30",
    },
    pink: {
      badge: "bg-pink-500",
      glow: "hover:shadow-pink-500/30",
    },
    red: {
      badge: "bg-red-500",
      glow: "hover:shadow-red-500/30",
    },
    green: {
      badge: "bg-green-500",
      glow: "hover:shadow-green-500/30",
    },
  };

  /* ========= EXPERIENCE DATA ========= */
  const experiences = [
    {
      name: "Full Stack Developer Intern",
      logo: "/asset/Hashtag-Logo.png",
      duration: "Apr 2025 – Aug 2025",
      company: "Hazhtech Solution, Tiruppur (Remote)",
      desc: "Worked on full stack web application development using React, Node.js, MongoDB, and REST APIs. Actively contributed to feature development, bug fixing, API integration, and performance optimization in a remote agile environment.",
      theme: "pink",
    },
    {
      name: "Graphic Designer",
      logo: "/asset/mag-logo.png",
      duration: "4 weeks",
      company: "Internship at Magnion Technologies",
      desc: "Designed logos, marketing creatives, posters, and digital assets using Adobe Photoshop and Canva. Collaborated with the design team to deliver visually appealing branding materials for clients and internal promotional campaigns.",
      theme: "blue",
    },
    {
      name: "Web Development",
      logo: "/asset/code-logo.png",
      duration: "4 weeks",
      company: "Internship at Codebind Tech",
      desc: "Developed and maintained responsive websites using HTML, CSS, JavaScript, and PHP. Worked on form handling, UI improvements, and basic backend logic while following coding standards and project requirements.",
      theme: "red",
    },
    {
      name: "Email Marketing",
      logo: "/asset/Untitled design (3).png",
      duration: "4 weeks",
      company: "Internship at Vintorix Pvt Ltd",
      desc: "Planned and executed email marketing campaigns to promote products and services. Assisted in audience segmentation, content creation, campaign scheduling, and performance tracking to improve engagement rates.",
      theme: "green",
    },
  ];

  return (
    <section
      id="experience"
      ref={revealRef}
      className="
        py-20 bg-white dark:bg-[#00052a]
        transition-all duration-700
        opacity-0 translate-y-10
      "
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Experience
        </h2>

        <Swiper
          freeMode
          loop
          grabCursor
          centeredSlides
          speed={800}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSlideChange={(cur) => setActive(cur.realIndex)}
          modules={[Autoplay, FreeMode]}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 60 },
          }}
        >
          {experiences.map((item, i) => {
            const isExpanded = expandedIndex === i;
            const theme = themeClasses[item.theme];

            return (
              <SwiperSlide key={i}>
                <div className="h-full flex justify-center">
                  <div
                    className={`
                      relative p-6 rounded-2xl w-full max-w-sm
                      transition-all duration-500
                      ${active === i ? "scale-105 shadow-2xl" : "scale-95 shadow-md"}
                      bg-gray-100 dark:bg-[#0a0f3d]
                      text-gray-900 dark:text-white
                      ${theme.glow}
                    `}
                  >
                    {/* Duration Badge */}
                    <span
                      className={`
                        absolute top-4 right-4
                        text-xs font-medium px-3 py-1
                        text-white rounded-full shadow-md
                        ${theme.badge}
                      `}
                    >
                      {item.duration}
                    </span>

                    {/* Logo */}
                    <div className="flex justify-center mb-4">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="h-16 w-16 object-contain transition-transform duration-500 hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-1">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {item.company}
                    </p>

                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {isExpanded ? item.desc : limitText(item.desc)}
                    </p>

                    {/* Read More */}
                    {item.desc.length > 200 && (
                      <button
                        onClick={() =>
                          setExpandedIndex(isExpanded ? null : i)
                        }
                        className="mt-3 text-sm font-medium text-cyan-500 hover:underline"
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </button>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Exp;
