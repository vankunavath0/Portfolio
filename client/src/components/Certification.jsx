import React from 'react';

const Certification = () => {
    const certs = [
        {
            name: "GitHub Foundations",
            issuer: "GitHub",
            link: "#",
            year: "2024"
        },
        {
            name: "Object-Oriented Design",
            issuer: "University of Alberta",
            link: "#",
            year: "2024"
        },
        {
            name: "Programming with JavaScript",
            issuer: "Meta",
            link: "#",
            year: "2023"
        },
        {
            name: "Oracle Cloud Certification",
            issuer: "Oracle",
            link: "#",
            year: "2025"
        }
    ];

    return (
        <section id="certifications" className="py-24 bg-light-bg text-black px-6 md:px-12">
            <style>
                {`
                .cert-row-light:hover {
                    background-color: white;
                    box-shadow: 0 10px 30px -15px rgba(255, 120, 0, 0.2);
                    transform: translateX(10px);
                }
                `}
            </style>

            {/* Header Section */}
            <div className="mb-20 border-b border-black/10 pb-10 flex justify-between items-end">
                <div>
                    <h2 className="text-[8vw] font-black tracking-tighter leading-none text-black uppercase">
                        CERTIFICATIONS <span className="text-[#ff7800]">/</span>
                    </h2>
                    <p className="font-mono text-[#ff7800] mt-4 tracking-[0.3em] uppercase text-xs md:text-sm font-bold">
                        Professional Milestones
                    </p>
                </div>
                <div className="hidden md:block font-mono text-black/40 text-sm font-bold">
                    VOL. 2026
                </div>
            </div>

            {/* List Section */}
            <div className="flex flex-col">
                {certs.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-row-light group border-b border-black/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center transition-all duration-400 px-4"
                    >
                        <div className="flex gap-6 items-start">
                            {/* Orange Index Marker */}
                            <span className="font-mono text-[#ff7800] text-sm mt-2 font-bold">
                                (0{index + 1})
                            </span>
                            
                            <div>
                                <div className="flex items-center gap-4">
                                    <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-black/90 group-hover:text-[#ff7800] transition-colors duration-300">
                                        {cert.name}
                                    </h3>
                                    {/* Minimalist Orange Arrow */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-[#ff7800] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                                <p className="text-gray-500 font-mono text-xs md:text-sm uppercase tracking-widest mt-2 group-hover:text-black transition-colors">
                                    {cert.issuer}
                                </p>
                            </div>
                        </div>

                        {/* Year Badge - Becomes Orange on Hover */}
                        <div className="mt-6 md:mt-0">
                            <span className="px-6 py-2 rounded-full border border-black/10 font-mono text-sm font-bold text-black/40 group-hover:border-[#ff7800] group-hover:text-[#ff7800] transition-all duration-300">
                                {cert.year}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Certification;