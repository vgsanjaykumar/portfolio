import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WhatsAppPopup = () => {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [successMsg, setSuccessMsg] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => setIsOpen(!isOpen);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.number.trim()) {
            newErrors.number = "Mobile number is required";
        } else if (!/^\d{10}$/.test(formData.number.trim())) {
            newErrors.number = "Enter a valid 10-digit mobile number";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
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

        setSuccessMsg("✅ Message sent! WhatsApp will open shortly...");
        window.open(url, "_blank");

        setTimeout(() => {
            setSuccessMsg("");
            setFormData({ name: "", number: "", email: "", message: "" });
            setIsOpen(false);
        }, 3000);
    };

    return (
        <>
            {/* Floating WhatsApp Button */}
            <button
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
                onClick={togglePopup}
            >
                <FaWhatsapp size={24} className="animate-pulse" />
            </button>

            {/* Popup Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40"
                    onClick={togglePopup}
                >
                    <div
                        className="bg-[#243447] text-white w-full max-w-xl p-6 rounded-xl relative shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent click inside from closing
                    >
                        {/* Close Icon */}
                        <button
                            className="absolute top-3 right-4 text-white"
                            onClick={togglePopup}
                        >
                            <FaTimes size={20} />
                        </button>

                        <h2 className="text-center text-2xl font-bold mb-4">
                            Contact via WhatsApp
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full p-2 rounded bg-[#3B6790] border border-gray-400 focus:outline-none"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-sm">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label>Mobile Number:</label>
                                <input
                                    type="tel"
                                    name="number"
                                    className="w-full p-2 rounded bg-[#3B6790] border border-gray-400 focus:outline-none"
                                    value={formData.number}
                                    onChange={handleChange}
                                />
                                {errors.number && (
                                    <p className="text-red-400 text-sm">{errors.number}</p>
                                )}
                            </div>

                            <div>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full p-2 rounded bg-[#3B6790] border border-gray-400 focus:outline-none"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-sm">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label>Message:</label>
                                <textarea
                                    name="message"
                                    rows={3}
                                    className="w-full p-2 rounded bg-[#3B6790] border border-gray-400 focus:outline-none"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                {errors.message && (
                                    <p className="text-red-400 text-sm">{errors.message}</p>
                                )}
                            </div>

                            <button
                                onClick={sendWhatsAppMessage}
                                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300 w-full"
                            >
                                <FaWhatsapp /> Send to WhatsApp
                            </button>

                            {successMsg && (
                                <p className="text-green-400 text-center">{successMsg}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default WhatsAppPopup;
