"use client";
import React, { useState } from "react";

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    return (
        <section id="contact" className="py-20 px-6 bg-gradient-to-b from-white to-slate-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold text-blue-700 mb-6">Contact Us</h2>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-4 border rounded-lg transition-transform focus:ring focus:ring-blue-500 focus:outline-none text-lg font-bold text-black placeholder-gray-400"
                            style={{
                                backgroundColor: '#f9fafb',
                                transition: 'background-color 0.3s ease',
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-4 border rounded-lg transition-transform focus:ring focus:ring-blue-500 focus:outline-none text-lg font-bold text-black placeholder-gray-400"
                            style={{
                                backgroundColor: '#f9fafb',
                                transition: 'background-color 0.3s ease',
                            }}
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-4 border rounded-lg transition-transform focus:ring focus:ring-blue-500 focus:outline-none h-32 text-lg font-bold text-black placeholder-gray-400"
                            style={{
                                backgroundColor: '#f9fafb',
                                transition: 'background-color 0.3s ease',
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 px-6 py-3 rounded-full text-white font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
