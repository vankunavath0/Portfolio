import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    /* Changed background from bg-black to bg-[#0a0a0a] for separation */
    <footer className="bg-[#0a0a0a] text-white py-12 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Brand & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-black tracking-tighter uppercase italic">
            Uday Kumar<span className="text-[#ff7800]">.</span>
          </h2>
          <p className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.3em] mt-2">
            © {new Date().getFullYear()} Engineered with intent
          </p>
        </div>

        {/* Center: Status Indicator */}
        <div className="hidden lg:flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7800] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff7800]"></span>
          </span>
          <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
            Available for opportunities
          </span>
        </div>

        {/* Right Side: Socials */}
        <div className="flex space-x-8">
          <a
            href="https://github.com/vankunavath0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#ff7800] transition-colors duration-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vankunavath-uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#ff7800] transition-colors duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#ff7800] transition-colors duration-300 text-2xl"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Bottom thin line for extra detail */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;