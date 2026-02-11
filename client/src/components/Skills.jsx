import React from 'react';

const Skills = () => {
    const categories = [
        {
            title: "Frontend",
            items: ["React", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "JavaScript"]
        },
        {
            title: "Backend",
            items: ["Node.js", "Express.js", "Python", "REST API", "WebSocket"]
        },
        {
            title: "Database & Tools",
            items: ["MongoDB", "MySQL", "PostgreSQL", "Git", "GitHub", "Postman"]
        },
        {
            title: "Soft Skills",
            items: ["Good Listener", "Emotional Intelligence", "Time Management", "Attention to Detail", "Knowledge Sharing"]
        }
    ];

    return (
        <section id="skills" className="min-h-screen py-24 bg-light-bg text-black px-6 md:px-12 flex flex-col justify-center">
            {/* Header - Right Aligned with Orange Slash */}
            <div className="flex justify-end mb-24 border-b border-black/5 pb-8">
                <h2 className="text-6xl md:text-9xl font-black text-black tracking-tighter uppercase text-right leading-none">
                    Skills <span className="text-[#ff7800]">/</span>
                </h2>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
                {categories.map((cat, idx) => (
                    <div key={idx} className="flex flex-col group">
                        {/* Category Title with Orange Border on Hover */}
                        <h3 className="text-sm font-mono font-bold uppercase tracking-[0.3em] text-[#ff7800] mb-8 border-b-2 border-[#ff7800]/20 group-hover:border-[#ff7800] pb-4 transition-all duration-500">
                            {cat.title}
                        </h3>
                        
                        <ul className="space-y-5">
                            {cat.items.map(item => (
                                <li 
                                    key={item} 
                                    className="flex items-center gap-3 text-gray-500 font-sans text-xl hover:text-black transition-all duration-300 cursor-default font-bold group/item"
                                >
                                    {/* Animated Orange Dot */}
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff7800] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#ff7800]"></span>
                                    
                                    <span className="group-hover/item:translate-x-1 transition-transform duration-300">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;