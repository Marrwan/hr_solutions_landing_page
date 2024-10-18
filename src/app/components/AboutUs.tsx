import React from "react";

const AboutUs: React.FC = () => {
    return (
        <section id="about" className="py-20 px-6 bg-gradient-to-r from-slate-100 via-white to-slate-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-700 mb-6">About Us</h2>
                <p className="text-lg text-slate-700 mb-10 leading-relaxed max-w-4xl mx-auto">
                    At HR Solutions, we are dedicated to reshaping how businesses manage and engage with their most important asset—people. We believe in harnessing the power of technology and human expertise to create workplaces that thrive and innovate.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-slate-100 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-blue-50 transition duration-300">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h3>
                        <p className="text-slate-600">
                            To provide innovative solutions that transform workplaces, empower employees, and drive success. We aim to integrate technology and human-centric strategies to achieve excellence in workforce management.
                        </p>
                    </div>
                    <div className="bg-slate-100 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-blue-50 transition duration-300">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h3>
                        <p className="text-slate-600">
                            We envision a future where organizations flourish through a seamless blend of technology and expertise, ensuring growth, harmony, and excellence in every aspect of business and human resource management.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
