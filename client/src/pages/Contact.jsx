import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: 'Job Opportunity',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
            setStatus('success');
            setFormData({ name: '', email: '', reason: 'Job Opportunity', message: '' });
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        /* Root: min-h-screen and high z-index visibility */
        <div className="relative bg-black min-h-screen w-full pt-44 px-6 md:px-12 pb-24 text-white overflow-x-hidden">
            
            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24">
                
                {/* Contact Info Side */}
                <div className="flex flex-col space-y-12">
                    <motion.header
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-white">
                            Contact<span className="text-[#ff7800]">.</span>
                        </h2>
                        <p className="text-gray-500 font-mono mt-8 uppercase tracking-[0.25em] text-sm leading-relaxed max-w-md">
                            Open for new projects, creative collaborations, or full-time opportunities.
                        </p>
                    </motion.header>

                    <div className="space-y-10">
                        {/* Map Pin */}
                        <div className="flex items-center space-x-6 group">
                            <div className="flex-shrink-0 bg-[#ff7800]/10 p-5 rounded-full text-[#ff7800] border border-[#ff7800]/20 group-hover:bg-[#ff7800] group-hover:text-black transition-all duration-300">
                                <FiMapPin size={26} />
                            </div>
                            <div>
                                <h4 className="text-xs font-mono font-bold text-[#ff7800] uppercase tracking-widest mb-1">Location</h4>
                                <p className="text-gray-300 text-xl font-bold tracking-tight">Hyderabad, Telangana</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-6 group">
                            <div className="flex-shrink-0 bg-[#ff7800]/10 p-5 rounded-full text-[#ff7800] border border-[#ff7800]/20 group-hover:bg-[#ff7800] group-hover:text-black transition-all duration-300">
                                <FiMail size={26} />
                            </div>
                            <div>
                                <h4 className="text-xs font-mono font-bold text-[#ff7800] uppercase tracking-widest mb-1">Email</h4>
                                <p className="text-gray-300 text-xl font-bold tracking-tight">Vankunavathudaykumar@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative bg-[#0a0a0a] p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl"
                >
                    {/* Subtle Background Glow */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff7800]/5 blur-[100px] rounded-full pointer-events-none"></div>

                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                        <div className="space-y-6">
                            <div className="group">
                                <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-2 group-focus-within:text-[#ff7800] transition-colors">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#ff7800] transition-colors placeholder:text-white/5"
                                    placeholder="UDAY KUMAR"
                                />
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-2 group-focus-within:text-[#ff7800] transition-colors">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-[#ff7800] transition-colors placeholder:text-white/5"
                                    placeholder="UDAY@EXAMPLE.COM"
                                />
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-2 group-focus-within:text-[#ff7800] transition-colors">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#ff7800] transition-colors placeholder:text-white/5 resize-none"
                                    placeholder="HOW CAN I HELP?"
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full bg-[#ff7800] text-black font-black uppercase tracking-[0.25em] py-5 rounded-xl hover:bg-white transition-all duration-500 disabled:opacity-50 shadow-[0_20px_40px_rgba(255,120,0,0.15)]"
                        >
                            {status === 'sending' ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                        </button>

                        {status === 'success' && (
                            <p className="text-[#ff7800] font-mono text-center text-[10px] uppercase tracking-widest mt-4">
                                Message sent successfully!
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;