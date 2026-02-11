import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SkillBadge from '../components/SkillBadge';
import { motion } from 'framer-motion';

const About = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/skills`)
            .then(res => setSkills(res.data))
            .catch(err => console.error(err));
    }, []);

    const categories = [...new Set(skills.map(skill => skill.category))];

    return (
        /* Changed to bg-black and ensured it covers full height */
        <div className="bg-black min-h-screen">
            <div className="max-w-4xl mx-auto space-y-32 pb-24 px-6">

                {/* Intro Section - Increased pt-20 to pt-32 to move text down */}
                <section className="pt-32">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black mb-10 leading-none text-white tracking-tighter"
                    >
                        I'M <span className="text-[#ff7800]">UDAY.</span> I TURN COFFEE INTO <span className="text-[#ff7800]">CODE.</span>
                    </motion.h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                        <div className="md:col-span-3 text-gray-400 text-xl space-y-6 leading-relaxed font-medium">
                            <p>
                                My journey started with a fascination for data and automation. As a Computer Science undergrad, I quickly realized that building models wasn't enough—I wanted to build <span className="text-white border-b-2 border-[#ff7800]">full products.</span>
                            </p>
                            <p>
                                I specialize in the <span className="text-white italic">MERN stack</span> and React, where I can optimize React render cycles or improve other features. I love the challenge of engineering efficient systems.
                            </p>
                        </div>
                        
                        {/* Visual Accent Box */}
                        <div className="md:col-span-2 hidden md:flex items-center justify-center">
                            <div className="w-full h-full border-2 border-[#ff7800]/20 rounded-2xl relative p-8 group">
                                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-[#ff7800]"></div>
                                <p className="text-[#ff7800] font-mono text-xs uppercase tracking-[0.4em] mb-4">Current Status</p>
                                <p className="text-white font-bold text-2xl uppercase italic tracking-tighter">Available for Freelance & Projects</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills / Stack */}
                <section>
                    <div className="flex items-center gap-6 mb-12">
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Stack & Tools</h2>
                        <div className="h-[2px] flex-grow bg-gradient-to-r from-[#ff7800] to-transparent"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {categories.map(category => (
                            <div key={category} className="space-y-4">
                                <h3 className="text-xs font-mono font-bold text-[#ff7800] uppercase tracking-[0.3em]">{category}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.filter(s => s.category === category).map(skill => (
                                        <SkillBadge key={skill._id} skill={skill} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience Timeline */}
                <section>
                    <div className="flex items-center gap-6 mb-12">
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Experience</h2>
                        <div className="h-[2px] flex-grow bg-gradient-to-r from-[#ff7800] to-transparent"></div>
                    </div>

                    <div className="relative border-l-2 border-[#ff7800]/30 pl-8 space-y-16">
                        

                        {/* Item 2 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-black border-4 border-gray-700 hover:border-[#ff7800] transition-colors"></div>
                            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">CS Student</h3>
                            <p className="text-gray-500 font-mono text-sm font-bold mb-4">2022 — 2026</p>
                            <p className="text-gray-400 text-lg max-w-xl">
                                IIITBH University. Deep diving into <span className="text-white">Data Structures, Algorithms</span>, and high-level System Design,Full Stack.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;