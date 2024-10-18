"use client";

import React, { useEffect } from 'react';

const Hero: React.FC = () => {
    useEffect(() => {
        const animateText = document.querySelector('.hero-text') as HTMLElement;
        if (animateText) {
            animateText.style.opacity = '1';
            animateText.style.transform = 'translateY(0)';
        }
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-700 to-slate-900 text-white">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-900 opacity-50"></div>
            <div className="z-10 text-center hero-text transition duration-1000 opacity-0 transform translate-y-10">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                    Empowering Your Workforce
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-lg mx-auto">
                    We build stronger teams, enhance skills, and drive success together.
                </p>
                <button className="bg-blue-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default Hero;
