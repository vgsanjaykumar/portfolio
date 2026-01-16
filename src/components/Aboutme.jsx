import React from "react";
import About from "/asset/me.png";
import useScrollReveal from "../hooks/useScrollReveal";

const Aboutme = () => {
  const revealRef = useScrollReveal();

  return (
    <section
      id="about"
      ref={revealRef}
      className="
        text-black dark:text-white
        py-20 bg-white dark:bg-[#00052a]
        transition-all duration-700
        opacity-0 translate-y-10
      "
    >
      <div className="mx-auto px-6 sm:px-10 md:px-16 lg:px-24">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Image */}
          <img
            src={About}
            alt="Sanjaykumar V"
            className="
              w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80
              rounded-3xl object-cover
              transition-all duration-500
              hover:scale-105
              shadow-lg shadow-cyan-400/40
            "
          />

          {/* Content */}
          <div className="flex-1">
            <p className="text-lg mb-8 leading-relaxed text-gray-400 dark:text-gray-300 font-light">
              I am a passionate full-stack developer focused on building modern,
              responsive web applications. With a strong foundation in both
              frontend and backend technologies, I aim to deliver seamless,
              user-centric digital experiences that are scalable and
              performance-optimized.
            </p>

            {/* Skills */}
            <div className="space-y-5 text-gray-400 dark:text-gray-300">
              {[
                { label: "Java", width: "w-11/12" },        // ✅ Added at top
                { label: "HTML & CSS", width: "w-11/12" },
                { label: "JavaScript", width: "w-10/12" },
                { label: "React.js", width: "w-10/12" },
                { label: "Node.js", width: "w-9/12" },
                { label: "MongoDB", level: "w-9/12" },
              ].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <label className="w-3/12 sm:w-2/12 font-medium">
                    {skill.label}
                  </label>

                  <div className="grow bg-gray-600 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`
                        h-2.5 rounded-full
                        bg-gradient-to-r from-cyan-400 to-cyan-200
                        transition-all duration-700
                        hover:scale-110
                        ${skill.width}
                      `}
                    />
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
