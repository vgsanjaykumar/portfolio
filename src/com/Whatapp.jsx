import { useState } from "react";

const WhatsApp = () => {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendWhatsAppMessage = () => {
        const { name, number, email, message } = formData;

        if (!name || !number || !email || !message) {
            alert("Please fill in all fields before sending the message.");
            return;
        }

        const url = `https://wa.me/919176627389?text=${encodeURIComponent(
            `Name of Customer: ${name}\nMobile Number: ${number}\nEmail: ${email}\nMessage: ${message}`
        )}`;

        window.open(url, "_blank");
    };

    return (
        <div className="container w-full">
            <h2 className="text-center mt-2">Send WhatsApp Message</h2>
            <div className="space-y-4">
                <label className="block mb-2">Name:</label>
                <input
                    type="text"
                    name="name"
                    className="w-full p-2 rounded bg-[#3B6790] border border-gray-400 focus:outline-none focus:border-white"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label className="block mb-2">Mobile Number:</label>
                <input
                    type="tel"
                    name="number"

                    className="w-full p-2 rounded bg-[#3B6790] border border-gray-400 focus:outline-none focus:border-white"
                    value={formData.number}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label className="block mb-2">Email:</label>
                <input
                    type="email"
                    name="email"
                    className="w-full p-2 rounded bg-[#3B6790] border border-gray-400 focus:outline-none focus:border-white"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <label className="block mb-2">Message:</label>
            <textarea
                name="message"
                className="w-full p-2 rounded bg-[#3B6790] border border-gray-400 focus:outline-none focus:border-white"
                value={formData.message}
                onChange={handleChange}
            />

            <button className="button-all" onClick={sendWhatsAppMessage}>
                Send to WhatsApp
            </button>
        </div>
    );
};

export default WhatsApp;
