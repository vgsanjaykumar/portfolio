import React, { useState } from "react";
import resumes from "/asset/resume.png";
import resumePDF from "/asset/Resume sanjay.pdf";
import { FaTimes, FaEye, FaDownload } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

const Resume = () => {
  const revealRef = useScrollReveal();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== Resume Section ===== */}
      <section
        id="resume"
        ref={revealRef}
        className="
          py-20 px-6
          bg-white dark:bg-[#00052a]
          text-gray-900 dark:text-white
          transition-all duration-700
          opacity-0 translate-y-10
        "
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Resume Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={resumes}
              alt="Resume Preview"
              className="
                max-w-sm w-full rounded-xl
                shadow-xl
                transition-transform duration-300
                hover:scale-105
              "
            />
          </div>

          {/* Actions */}
          <div className="md:w-1/2 lg:w-1/3 flex justify-center">
            <div className="text-center space-y-5">
              <h2 className="text-3xl font-bold text-cyan-500">
                Resume
              </h2>

              <p className="text-gray-600 dark:text-gray-300">
                Preview or download my resume
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Preview */}
                <button
                  onClick={() => setOpen(true)}
                  className="
                    flex items-center gap-2
                    bg-cyan-400 hover:bg-cyan-500
                    text-white px-6 py-2 rounded-lg
                    transition hover:scale-105
                  "
                >
                  <FaEye /> Preview
                </button>

                {/* Download */}
                <a
                  href={resumePDF}
                  download="Sanjaykumar_Resume.pdf"
                  className="
                    flex items-center gap-2
                    bg-gray-800 dark:bg-gray-700
                    hover:bg-gray-900
                    text-white px-6 py-2 rounded-lg
                    transition hover:scale-105
                  "
                >
                  <FaDownload /> Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SIMPLE PREVIEW MODAL ===== */}
      {open && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/70
            flex items-center justify-center
          "
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative w-[95%] max-w-5xl h-[90vh]
              bg-white dark:bg-[#00052a]
              rounded-xl shadow-2xl
              overflow-hidden
            "
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute top-4 right-4
                text-gray-700 dark:text-white
                hover:text-cyan-500 transition
                z-10
              "
            >
              <FaTimes size={22} />
            </button>

            {/* PDF */}
            <iframe
              src={resumePDF}
              title="Resume Preview"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Resume;
