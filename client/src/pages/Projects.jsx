import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Full Stack', 'ML/AI', 'Blockchain', 'Tools'];

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)
            .then(res => {
                setProjects(res.data);
                setFilteredProjects(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (activeFilter === 'All') {
            setFilteredProjects(projects);
            return;
        }

        const filtered = projects.filter(project => {
            const stack = project.techStack.map(t => t.toLowerCase());
            const filter = activeFilter.toLowerCase();

            if (filter === 'full stack') return stack.includes('react') || stack.includes('node.js') || stack.includes('mern');
            if (filter === 'ml/ai') return stack.includes('python') || stack.includes('tensorflow') || stack.includes('pytorch') || stack.includes('ai');

            return stack.includes(filter);
        });
        setFilteredProjects(filtered);
    }, [activeFilter, projects]);

    return (
        /* 1. Added bg-black and min-h-screen for consistent theme */
        /* 2. Added pt-32 to move content down from the Navbar */
        <div className="bg-black min-h-screen pt-32 px-6 md:px-12">
            
            <div className="max-w-7xl mx-auto">
                {/* Heading with Orange accent */}
                <h2 className="text-6xl md:text-8xl font-black mb-16 text-left text-white tracking-tighter uppercase">
                    Projects <span className="text-[#ff7800]">/</span>
                </h2>

                {/* Filter Buttons - Swapped Blue for Orange */}
                <div className="flex flex-wrap justify-start gap-4 mb-20">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-8 py-2 rounded-full font-mono text-sm uppercase tracking-widest transition-all duration-300 border ${
                                activeFilter === filter
                                    ? 'bg-[#ff7800] border-[#ff7800] text-black shadow-[0_0_20px_rgba(255,120,0,0.4)]'
                                    : 'bg-transparent border-white/10 text-gray-500 hover:border-[#ff7800]/50 hover:text-white'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map(project => (
                            <motion.div
                                layout
                                key={project._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: "circOut" }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-gray-600 font-mono italic">No projects found in this category yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;