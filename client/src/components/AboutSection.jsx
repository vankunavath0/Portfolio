import React from 'react';
import udayimp from '../assets/Uday.jpg';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-dark-bg text-off-white px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
                {/* Radiant Glow behind image on hover */}
                <div className="absolute -inset-1 bg-[#ff7800] rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-500"></div>
                
                <div className="relative aspect-[3/4] bg-white/5 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 group-hover:border-[#ff7800]/50">
                    <img
                        src={udayimp}
                        alt="Vankunavath Uday Kumar"
                        className="w-full h-full object-cover select-none"
                        draggable="false"
                    />
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">/ About Me</h2>

                <h3 className="text-3xl font-bold font-sans text-off-white leading-tight">
                    Hi, I'm <span className="text-[#ff7800]">Vankunavath Uday Kumar</span> — a Software Developer and B.TECH. Computer Science student.
                </h3>

                <div className="space-y-6 text-xl text-gray-300 font-sans leading-relaxed">
                    <p>
                        I'm passionate about building practical, user-focused web applications that solve real problems. I specialize in full-stack development with the MERN stack, working across the entire development cycle — from designing intuitive UIs to building scalable backend APIs.
                    </p>
                    <p>
                        Beyond coding, I love collaborating with others, whether it's improving UI/UX, testing applications, or suggesting smarter approaches to solve problems.
                    </p>
                    <p>
                        I may not be the best full-stack developer out there in the market, but I'm confident I'm one of the best when it comes to leveraging AI tools effectively. I don't just use AI to generate projects — I use it strategically to optimize my workflow, debug faster, and explore better solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;