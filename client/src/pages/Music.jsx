import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import SpotifyPlayer from '../components/SpotifyPlayer';

const Music = () => {
    const [books, setBooks] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [booksRes, playlistsRes] = await Promise.all([
                    axios.get(`${import.meta.env.VITE_API_URL}/api/books`),
                    axios.get(`${import.meta.env.VITE_API_URL}/api/playlists`)
                ]);
                setBooks(booksRes.data);
                setPlaylists(playlistsRes.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="bg-black min-h-screen pt-32 px-6 md:px-12 pb-24 text-white">
            <div className="max-w-7xl mx-auto">
                
                {/* Playlists Section */}
                <section className="mb-40">
                    <header className="mb-16">
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                            Playlist <span className="text-[#ff7800]">/</span>
                        </h2>
                        <p className="text-gray-500 font-mono mt-4 uppercase tracking-[0.3em] text-sm">
                            Codes, coffee, and these tunes 🎧
                        </p>
                    </header>

                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence mode='popLayout'>
                            {playlists.map((playlist, index) => (
                                <motion.div 
                                    layout
                                    key={playlist._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <h3 className="text-xs font-mono font-bold text-[#ff7800] uppercase tracking-[0.3em] mb-4">
                                        {playlist.title} 
                                        <span className="text-gray-600 ml-2">[{playlist.mood}]</span>
                                    </h3>
                                    <div className="rounded-xl overflow-hidden border border-white/5 group-hover:border-[#ff7800]/40 transition-all duration-500 shadow-2xl bg-[#0a0a0a]">
                                        <SpotifyPlayer url={playlist.spotifyEmbedUrl} />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </section>

                {/* Minimalist Books Section - Pure Typography */}
                <section>
                    <div className="flex flex-col mb-16">
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                            Library <span className="text-[#ff7800]">.</span>
                        </h2>
                        <p className="text-gray-500 font-mono mt-4 uppercase tracking-[0.3em] text-sm leading-relaxed">
                            A curated collection of mind-shapers
                        </p>
                    </div>

                    <div className="border-t border-white/10">
                        {books.map((book, index) => (
                            <motion.div
                                key={book._id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group border-b border-white/10 py-10 flex items-center justify-between transition-all duration-500 hover:bg-[#0a0a0a] hover:px-8"
                            >
                                <div className="flex items-center gap-12">
                                    {/* Bold Index */}
                                    <span className="font-mono text-[#ff7800] text-sm font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    
                                    <div>
                                        {/* Title with Italic Hover State */}
                                        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter transition-all duration-500 group-hover:italic group-hover:text-[#ff7800]">
                                            {book.title}
                                        </h3>
                                        <div className="flex items-center gap-4 mt-2">
                                            <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                                                Author: <span className="text-gray-300">{book.author}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Category Tag */}
                                <div className="hidden md:block">
                                    <span className="font-mono text-[10px] text-gray-700 uppercase tracking-[0.4em] border border-white/5 px-6 py-2 rounded-full group-hover:border-[#ff7800]/40 group-hover:text-white transition-all duration-500">
                                        {book.category || "General"}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Music;