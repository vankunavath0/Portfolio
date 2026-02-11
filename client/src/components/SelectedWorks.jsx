import React from 'react';
import Streamify from '../assets/Streamify.png';
import ResumeBuild from '../assets/ResumeBuild.png';

const ProjectItem = ({ project, index }) => {
    const num = (index + 1).toString().padStart(2, '0');

    return (
        <div className="py-20 border-t border-white/10 first:border-none group">
            <div className="grid md:grid-cols-12 gap-8">

                {/* Number */}
                <div className="md:col-span-1 hidden md:flex justify-end items-start pt-2">
                    <span className="text-[10rem] leading-[0.8] font-black text-[#ff7800]/10 font-mono tracking-tighter -ml-16 group-hover:text-[#ff7800]/20 transition-colors duration-500">
                        {num}
                    </span>
                </div>

                {/* Content */}
                <div className="md:col-span-11 space-y-8 pl-8">
                    {/* Title & Links Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div>
                            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter group-hover:text-[#ff7800] transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mt-2">
                                <span className="text-[#ff7800] font-bold">{project.role}</span> | {project.stack}
                            </p>
                        </div>
                        {/* CHANGED: White to Orange on Hover */}
                        <a
                            href={`https://github.com/${project.githubLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#ff7800] transition-colors duration-300 font-mono text-sm break-all border-b border-white/20 hover:border-[#ff7800]/50"
                        >
                            {project.githubLink}
                        </a>
                    </div>

                    {/* Media Embed */}
                    <div className="relative w-full aspect-video bg-black/40 rounded-xl overflow-hidden shadow-2xl group/media">
                        <div className="absolute -inset-2 bg-[#ff7800]/20 blur-2xl opacity-0 group-hover/media:opacity-100 transition-opacity duration-700"></div>
                        
                        <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/5 group-hover/media:border-[#ff7800]/50 transition-colors duration-500">
                            {project.image ? (
                                project.liveLink ? (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative cursor-pointer">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/media:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="bg-[#ff7800] p-4 rounded-full text-black">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover/media:grayscale-0 transition-all duration-700"
                                    />
                                )
                            ) : (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${project.videoId}?start=78&mute=1&controls=1`}
                                    title={project.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="w-full h-full object-cover"
                                ></iframe>
                            )}
                        </div>
                    </div>

                    {/* Description Bullets */}
                    <ul className="space-y-4 max-w-4xl">
                        {project.description.map((point, i) => (
                            <li key={i} className="flex items-start text-gray-400 font-sans text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
                                <span className="mr-4 mt-2 w-1.5 h-1.5 bg-[#ff7800] rounded-full shadow-[0_0_8px_#ff7800]"></span>
                                <span className="flex-1">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const SelectedWorks = () => {
    const projects = [
        {
            title: "Streamify",
            role: "Full-Stack Developer",
            stack: "MERN, WebRTC, Socket.IO, Zustand",
            githubLink: "vankunavath0/Streamify-app",
            liveLink: "https://streamify-app-wgnm.onrender.com/login",
            image: Streamify,
            description: [
                "Engineered a full-stack video communication platform supporting secure group and one-on-one calls with real-time chat.",
                "Implemented JWT-based authentication and Zustand for global state management to enhance application security and user experience.",
                "Optimized low-latency streaming and front-end performance to improve scalability and system stability during peak usage."
            ]
        },
        {
            title: "ResumeCraft",
            role: "Full-Stack Developer",
            stack: "Node.js, MongoDB, Gemini API, Tailwind",
            githubLink: "vankunavath0/ai-resume",
            liveLink: "https://ai-resume-marker.onrender.com/",
            image: ResumeBuild,    
            description: [
                "Developed an AI-powered resume generator leveraging the Gemini API for real-time, personalized content creation.",
                "Designed a responsive, interactive UI with live preview using Tailwind CSS to streamline the customization process.",
                "Implemented secure authentication and persistent data storage to enable seamless multi-device synchronization."
            ]
        },
        {
            title: "Drift Box",
            role: "Backend Developer",
            stack: "Node.js, Express, MongoDB, Multer",
            githubLink: "vankunavath0/DriftBox",
            description: [
                "Built a secure file storage system featuring encrypted uploads, RESTful APIs, and token-based access control.",
                "Optimized back-end performance using Multer and MongoDB Atlas to reduce latency and maintain high uptime.",
                "Automated secure file handling and storage protocols while ensuring complete data integrity and confidentiality."
            ]
        }
    ];

    return (
        <section id="projects" className="py-24 bg-black text-white px-6 md:px-12">
            <h2 className="text-6xl md:text-9xl font-black text-white mb-10 md:mb-24 tracking-tighter uppercase leading-none">
                Projects <span className="text-[#ff7800]">/</span>
            </h2>

            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <ProjectItem key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default SelectedWorks;