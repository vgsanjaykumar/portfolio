import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

const WhatsAppPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: "",
    });

    const togglePopup = () => setIsOpen(!isOpen);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const validate = () => {
        const err = {};
        if (!formData.name.trim()) err.name = "Name is required";
        if (!/^\d{10}$/.test(formData.number))
            err.number = "Enter valid 10-digit number";
        if (!/\S+@\S+\.\S+/.test(formData.email))
            err.email = "Enter valid email";
        if (!formData.message.trim()) err.message = "Message required";
        return err;
    };

    const sendWhatsAppMessage = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        const { name, number, email, message } = formData;

        const url = `https://wa.me/919600417117?text=${encodeURIComponent(
            `Name: ${name}\nPhone: ${number}\nEmail: ${email}\nMessage: ${message}`
        )}`;

        window.open(url, "_blank");

        setSuccessMsg("Message sent! WhatsApp will open shortly.");

        setTimeout(() => {
            setSuccessMsg("");
            setFormData({ name: "", number: "", email: "", message: "" });
            setIsOpen(false);
        }, 2500);
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={togglePopup}
                className="
          fixed bottom-6 left-6 z-50
          bg-green-500 hover:bg-green-600
          text-white p-3 rounded-full
          shadow-xl 
        "
            >
                <FaWhatsapp size={24} />
            </button>

            {/* Modal */}
            {isOpen && (
                <div
                    className="
            fixed inset-0 z-40
            bg-black/50 backdrop-blur-sm
            flex items-center justify-center
          "
                    onClick={togglePopup}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="
              relative w-full max-w-lg mx-4
              bg-white/30 dark:bg-white/10
              backdrop-blur-xl
              border border-white/30 dark:border-white/10
              rounded-2xl p-6
              shadow-2xl
              animate-fadeIn
            "
                    >
                        {/* Close */}
                        <button
                            onClick={togglePopup}
                            className="absolute top-4 right-4 text-gray-700 dark:text-white"
                        >
                            <FaTimes size={18} />
                        </button>

                        <h2 className="text-2xl font-bold text-center text-cyan-500 mb-6">
                            Contact via WhatsApp
                        </h2>

                        {/* Form */}
                        <div className="space-y-4">
                            {[
                                { label: "Name", name: "name", type: "text" },
                                { label: "Mobile Number", name: "number", type: "tel" },
                                { label: "Email", name: "email", type: "email" },
                            ].map((field) => (
                                <div key={field.name}>
                                    <label className="text-sm">{field.label}</label>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        className="
                      w-full mt-1 p-2 rounded-lg
                      bg-white/60 dark:bg-[#3B6790]
                      text-black dark:text-white
                      border border-white/40
                      focus:ring-2 focus:ring-cyan-400 outline-none
                    "
                                    />
                                    {errors[field.name] && (
                                        <p className="text-red-400 text-sm">
                                            {errors[field.name]}
                                        </p>
                                    )}
                                </div>
                            ))}

                            {/* Message */}
                            <div>
                                <label className="text-sm">Message</label>
                                <textarea
                                    rows={3}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="
                    w-full mt-1 p-2 rounded-lg
                    bg-white/60 dark:bg-[#3B6790]
                    text-black dark:text-white
                    border border-white/40
                    focus:ring-2 focus:ring-cyan-400 outline-none
                  "
                                />
                                {errors.message && (
                                    <p className="text-red-400 text-sm">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit */}
                            <button
                                onClick={sendWhatsAppMessage}
                                className="
                  w-full mt-2
                  flex items-center justify-center gap-2
                  bg-cyan-500 hover:bg-cyan-600
                  text-white px-4 py-2 rounded-lg
                  transition
                "
                            >
                                <FaWhatsapp /> Send to WhatsApp
                            </button>

                            {successMsg && (
                                <p className="text-cyan-400 text-center mt-2">
                                    {successMsg}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default WhatsAppPopup;
