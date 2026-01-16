import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

const Contact = () => {
  const revealRef = useScrollReveal();

  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.number.trim()) {
      newErrors.number = "Number is required";
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = "Enter a valid 10-digit number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setResult("Sending...");

    const sendData = new FormData();
    Object.entries(formData).forEach(([k, v]) =>
      sendData.append(k, v)
    );
    sendData.append("access_key", "e52bab3c-6d7d-46a9-b6bc-08ce3470ec20");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: sendData,
    });

    const data = await res.json();

    if (data.success) {
      setResult("Success");
      setFormData({ name: "", email: "", number: "", message: "" });
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } else {
      setResult("Error");
    }
  };

  return (
    <section
      id="contact"
      ref={revealRef}
      className="
        py-20 bg-white dark:bg-[#00052a]
        text-gray-900 dark:text-white
        transition-all duration-700
        opacity-0 translate-y-10
      "
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let’s Talk</h3>
            <p className="text-gray-400 leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to
              discussing development work or collaborations.
            </p>

            <div className="flex items-center gap-3 text-sm">
              <FaEnvelope className="text-cyan-400" />
              <a
                href="mailto:vgssanjayboss@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                vgssanjayboss@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FaPhone className="text-cyan-400" />
              <span className="text-gray-400">9600417117</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <FaMapMarkedAlt className="text-cyan-400" />
              <span className="text-gray-400">Karaikudi, Tamil Nadu</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-6">
            {["name", "email", "number"].map((field) => (
              <div key={field}>
                <label className="block mb-1 capitalize">{field}</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className="
                    w-full px-4 py-2 rounded-lg
                    bg-[#d4e7f9] dark:bg-[#3B6790]
                    text-black dark:text-white
                    border border-gray-300 dark:border-gray-700
                    focus:ring-2 focus:ring-cyan-400 outline-none
                  "
                  placeholder={`Enter your ${field}`}
                />
                {errors[field] && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}

            <div>
              <label className="block mb-1">Message</label>
              <textarea
                rows="5"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="
                  w-full px-4 py-2 rounded-lg
                  bg-[#d4e7f9] dark:bg-[#3B6790]
                  text-black dark:text-white
                  border border-gray-300 dark:border-gray-700
                  focus:ring-2 focus:ring-cyan-400 outline-none
                "
                placeholder="Your message"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={result === "Sending..."}
              className="
                bg-cyan-400 hover:bg-cyan-500
                text-white font-medium
                px-6 py-2 rounded-lg
                transition-transform hover:scale-105
                disabled:opacity-50
              "
            >
              {result === "Sending..." ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="
          fixed bottom-6 right-6
          bg-cyan-500 text-white
          px-6 py-3 rounded-lg shadow-lg
          animate-slide-up
        ">
          ✅ Form Submitted Successfully!
        </div>
      )}
    </section>
  );
};

export default Contact;
