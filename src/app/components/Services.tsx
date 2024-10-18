import { FaUserTie, FaChalkboardTeacher, FaRegHandshake } from 'react-icons/fa';
import React from "react";

const Services: React.FC = () => {
    return (
        <section id="services" className="bg-slate-100 py-20 px-6">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold text-blue-700 mb-6">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    <ServiceCard
                        icon={<FaUserTie size={40} className="text-blue-600 mb-4" />}
                        title="Recruitment"
                        description="Comprehensive recruitment solutions to find the perfect talent for your business."
                    />
                    <ServiceCard
                        icon={<FaChalkboardTeacher size={40} className="text-blue-600 mb-4" />}
                        title="Training & Development"
                        description="Empower your team with customized training programs for skill enhancement."
                    />
                    <ServiceCard
                        icon={<FaRegHandshake size={40} className="text-blue-600 mb-4" />}
                        title="Consulting"
                        description="Expert HR advice to navigate complex challenges and drive organizational success."
                    />
                </div>
            </div>
        </section>
    );
};

type ServiceCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center">
                {icon}
                <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>
                <p className="text-slate-600">{description}</p>
            </div>
        </div>
    );
};

export default Services;
