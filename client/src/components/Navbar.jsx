import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const navLinks = ['Projects', 'Skills', 'About', 'Certifications', 'Contact'];
    
    return (
        <nav className="fixed top-0 left-0 w-full z-50 py-8 px-6 md:px-12 flex justify-between items-center bg-white/40 backdrop-blur-xl border-b border-black/5">
            {/* Left: Logo Section */}
            <button 
                onClick={() => scrollToHome()} 
                className="flex items-center gap-4 group z-50"
            >
                <div className="relative">
                    <img src={logo} alt="Logo" className="w-10 h-10 object-contain relative z-10 transition-transform duration-500 group-hover:rotate-12" />
                    <div className="absolute inset-0 bg-[#ff7800] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                </div>
                <div className="flex flex-col items-start leading-none">
                    <span className="text-xl font-black tracking-tighter text-black uppercase">UDAY</span>
                    <span className="text-[10px] font-bold text-[#ff7800] tracking-[0.2em] uppercase">Portfolio</span>
                </div>
            </button>

            {/* Right: Increased Desktop Links */}
            <div className="hidden md:flex items-center space-x-10">
                {navLinks.map((item) => (
                    <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="relative group py-2"
                    >
                        {/* Increased Text Size and Weight */}
                        <span className="text-base font-black uppercase tracking-tighter text-black/80 transition-all duration-300 group-hover:text-[#ff7800] group-hover:tracking-normal inline-block group-hover:-translate-y-1">
                            {item}
                        </span>
                        
                        {/* More visible Orange Indicator */}
                        <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#ff7800] transition-all duration-300 ease-out group-hover:w-full shadow-[0_2px_10px_rgba(255,120,0,0.4)]"></span>
                    </button>
                ))}

                {/* Main CTA Button */}
                <button 
                    onClick={() => scrollToSection('contact')}
                    className="ml-6 bg-black text-white text-sm font-black uppercase px-8 py-4 rounded-full hover:bg-[#ff7800] hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-[#ff7800]/20"
                >
                    Hire Me ↗
                </button>
            </div>
        </nav>
    );
};

export default Navbar;