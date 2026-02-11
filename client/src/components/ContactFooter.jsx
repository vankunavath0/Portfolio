import React, { useState, useEffect } from 'react';
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

const ContactFooter = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit', 
                hour12: false, 
                timeZone: 'Asia/Kolkata' 
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="contact" className="pt-20 bg-black text-white font-['Anonymous_Pro',_monospace]">
            <style>
                {`
                @import url('https://fonts.googleapis.com/css?family=Anonymous+Pro');

                /* Typewriter Container */
                .typewriter-container {
                    display: inline-block;
                    position: relative;
                    margin: 0 auto;
                    border-right: 3px solid #ff7800;
                    white-space: nowrap;
                    overflow: hidden;
                    width: 0;
                }

                .typewriter-animation {
                    animation: 
                        typewriter 10s steps(40) infinite, 
                        blinkingCursor 500ms steps(40) infinite normal;
                }

                @keyframes typewriter {
                    0%, 10% { width: 0; }        /* Start at 0% */
                    70%, 90% { width: 100%; }    /* Stay full from 70% to 90% duration */
                    100% { width: 0; }           /* Reset to 0 at the very end */
                }

                @keyframes blinkingCursor {
                    from { border-right-color: #ff7800; }
                    to { border-right-color: transparent; }
                }

                .radiant-btn {
                    transition: all 0.4s ease;
                }

                .radiant-btn:hover {
                    border-color: #ff7800;
                    box-shadow: 0 0 30px 2px rgba(255, 120, 0, 0.3);
                    background: rgba(255, 120, 0, 0.05);
                }
                `}
            </style>

            <div className="px-6 md:px-12 pb-20 relative text-center">
                {/* Looping Typewriter */}
                <div className="mb-20 inline-block">
                    <h2 className="typewriter-container typewriter-animation text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase">
                        LET'S MAKE IT HAPPEN!
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">
                    <div className="space-y-4">
                        <a href="mailto:Vankunavathudaykumar@gmail.com" className="block text-xl md:text-5xl font-black text-white hover:text-[#ff7800] transition-colors duration-500 break-all">
                            Vankunavathudaykumar@gmail.com
                        </a>
                        <a href="tel:+919963006185" className="block text-2xl md:text-3xl text-gray-500 hover:text-white transition-colors">
                            +91 9963006185
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { icon: <FiMail />, label: 'Email Me', href: 'mailto:Vankunavathudaykumar@gmail.com' },
                            { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vankunavath-uk/' },
                            { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/vankunavath0' },
                            { icon: <FiInstagram />, label: 'Instagram', href: 'https://www.instagram.com/_uday_kumar__22/' }
                        ].map((btn, i) => (
                            <a
                                key={i}
                                href={btn.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="radiant-btn px-8 py-4 w-52 bg-transparent border-2 border-[#222] text-white font-bold uppercase tracking-widest rounded-full flex items-center justify-center gap-3 group"
                            >
                                <span className="text-xl group-hover:text-[#ff7800] transition-colors duration-300">
                                    {btn.icon}
                                </span>
                                <span className="text-sm group-hover:text-[#ff7800] transition-colors duration-300">
                                    {btn.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#050505] py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[#555] font-mono text-xs uppercase border-t border-white/5">
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="font-black text-[#ff7800] mb-4 tracking-[0.2em]">Socials</h4>
                    <ul className="flex gap-8 md:flex-col md:gap-2">
                        <li><a href="https://www.linkedin.com/in/vankunavath-uk/" className="hover:text-white transition-colors">Linkedin</a></li>
                        <li><a href="https://github.com/vankunavath0" className="hover:text-white transition-colors">Github</a></li>
                        <li><a href="https://www.instagram.com/_uday_kumar__22/" className="hover:text-white transition-colors">Instagram</a></li>
                    </ul>
                </div>

                <div className="mt-10 md:mt-0 text-center md:text-right">
                    <h4 className="font-black text-[#444] mb-1 tracking-[0.2em]">LOCAL TIME</h4>
                    <p className="text-lg font-bold text-white tracking-widest">{time} <span className="text-[#ff7800]">IST</span></p>
                </div>
            </div>
        </section>
    );
};

export default ContactFooter;