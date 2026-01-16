import React, { useEffect, useRef } from "react";
import { FaSchool, FaGraduationCap } from "react-icons/fa";

/* ========= DATA ========= */
const educationData = [
    {
        title: "SSLC (10th Standard)",
        institute: "S.M.S.V Higher Secondary School, Karaikudi",
        period: "2018 – 2019",
        score: "62%",
        icon: FaSchool,
        align: "left",
    },
    {
        title: "HSC (12th Standard)",
        institute: "S.M.S.V Higher Secondary School, Karaikudi",
        period: "2019 – 2021",
        score: "72%",
        icon: FaSchool,
        align: "right",
    },
    {
        title: "Bachelor of Engineering – CSE",
        institute:
            "Mount Zion College of Engineering & Technology, Pudukkottai",
        period: "2021 – 2025",
        score: "CGPA 7.8",
        icon: FaGraduationCap,
        align: "left",
    },
];

/* ========= DOT ========= */
const Dot = () => (
    <span
        className="
      absolute left-4 top-6
      w-3 h-3 rounded-full bg-cyan-500
      md:left-1/2 md:top-1/2
      md:-translate-x-1/2 md:-translate-y-1/2
    "
    />
);

const EducationTimeline = () => {
    const itemsRef = useRef([]);

    /* ========= SCROLL ANIMATION ========= */
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove(
                            "opacity-0",
                            "translate-x-12",
                            "-translate-x-12"
                        );
                        entry.target.classList.add(
                            "opacity-100",
                            "translate-x-0"
                        );
                    }
                });
            },
            { threshold: 0.25 }
        );

        itemsRef.current.forEach(el => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="education"
            className="py-20 bg-white dark:bg-[#00052a] text-black dark:text-white transition-colors duration-500"
        >
            <div className="mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Education
                </h2>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="
            absolute left-4 top-0 h-full w-1
            bg-gray-400 dark:bg-gray-600
            md:left-1/2 md:-translate-x-1/2
          " />

                    {educationData.map((edu, index) => {
                        const Icon = edu.icon;
                        const isLeft = edu.align === "left";

                        return (
                            <div
                                key={index}
                                ref={el => (itemsRef.current[index] = el)}
                                className={`
                  relative mb-16 pl-16 md:pl-0
                  md:flex md:items-center
                  ${!isLeft ? "md:flex-row-reverse" : ""}
                  opacity-0
                  ${isLeft ? "-translate-x-12" : "translate-x-12"}
                  transition-all duration-700 ease-out
                `}
                            >
                                <Dot />

                                <div
                                    className={`
                    md:w-1/2
                    ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}
                  `}
                                >
                                    <div className="
                    group
                    bg-gray-100 dark:bg-[#0a0f3d]
                    p-6 rounded-2xl
                    shadow-lg
                    transition-all duration-500
                    hover:-translate-y-2 hover:scale-[1.02]
                    hover:shadow-cyan-500/30 hover:shadow-2xl
                  ">
                                        <div
                                            className={`
                        flex items-center gap-3
                        ${isLeft ? "md:justify-end" : ""}
                      `}
                                        >
                                            <Icon
                                                className="
                          text-cyan-500 text-lg
                          transition-transform duration-500
                          group-hover:rotate-6 group-hover:scale-110
                        "
                                            />
                                            <h3 className="font-semibold text-lg">
                                                {edu.title}
                                            </h3>
                                        </div>

                                        <p className="text-sm text-gray-400 mt-1">
                                            {edu.institute}
                                        </p>

                                        <p className="text-sm mt-2">
                                            {edu.period} | <b>{edu.score}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EducationTimeline;
