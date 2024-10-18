"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-opacity-90 bg-blue-600 text-white p-4 z-50 shadow-lg transition duration-500">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-extrabold tracking-wider hover:scale-110 transition-transform">
                    HR Solutions
                </Link>
                <div className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </div>
                <div className={`md:flex space-x-8 items-center ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent`}>
                    <Link href="#about" className="hover:underline hover:text-blue-300 transition-all duration-200 py-2 md:py-0">
                        About Us
                    </Link>
                    <Link href="#services" className="hover:underline hover:text-blue-300 transition-all duration-200 py-2 md:py-0">
                        Services
                    </Link>
                    <Link href="#contact" className="hover:underline hover:text-blue-300 transition-all duration-200 py-2 md:py-0">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
