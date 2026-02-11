import { useEffect, useRef } from 'react';
import udayImg from '../assets/Uday.jpg';
import { motion } from 'framer-motion';
import resumePdf from '../assets/Uday_Resume.pdf';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let mouse = { x: -9999, y: -9999 };
        const squareSize = 80;
        let grid = [];

        function initGrid() {
            grid = [];
            for (let x = 0; x < width; x += squareSize) {
                for (let y = 0; y < height; y += squareSize) {
                    grid.push({ x, y, alpha: 0, fading: false, lastTouched: 0 });
                }
            }
        }

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initGrid();
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            const cell = grid.find(c => 
                mouse.x >= c.x && mouse.x < c.x + squareSize &&
                mouse.y >= c.y && mouse.y < c.y + squareSize
            );
            if (cell && cell.alpha === 0) {
                cell.alpha = 1;
                cell.lastTouched = Date.now();
                cell.fading = false;
            }
        };

        let animationFrameId;
        function draw() {
            ctx.clearRect(0, 0, width, height);
            const now = Date.now();
            ctx.strokeStyle = "rgba(0, 0, 0, 0.06)";
            ctx.lineWidth = 0.5;
            for (let x = 0; x < width; x += squareSize) {
                for (let y = 0; y < height; y += squareSize) {
                    ctx.strokeRect(x + 0.5, y + 0.5, squareSize, squareSize);
                }
            }
            for (let i = 0; i < grid.length; i++) {
                const cell = grid[i];
                if (cell.alpha > 0 && !cell.fading && now - cell.lastTouched > 300) cell.fading = true;
                if (cell.fading) {
                    cell.alpha -= 0.02;
                    if (cell.alpha <= 0) { cell.alpha = 0; cell.fading = false; }
                }
                if (cell.alpha > 0) {
                    const centerX = cell.x + squareSize / 2;
                    const centerY = cell.y + squareSize / 2;
                    const gradient = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, squareSize);
                    gradient.addColorStop(0, `rgba(255, 120, 0, ${cell.alpha})`);
                    gradient.addColorStop(1, `rgba(255, 120, 0, 0)`);
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 2;
                    ctx.strokeRect(cell.x + 0.5, cell.y + 0.5, squareSize - 1, squareSize - 1);
                }
            }
            animationFrameId = requestAnimationFrame(draw);
        }

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        initGrid();
        draw();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 relative bg-[#f8f8f8] text-[#1a1a1a] overflow-hidden">
            
            <style>
                {`
                @keyframes text-animation {
                    0% { margin-top: 0; }
                    15% { margin-top: 0; }
                    33% { margin-top: -6rem; } /* Matches new height */
                    48% { margin-top: -6rem; }
                    66% { margin-top: -12rem; } /* Matches new double height */
                    81% { margin-top: -12rem; }
                    100% { margin-top: 0; }
                }

                .animate-container {
                    height: 6rem; /* Increased to prevent clipping */
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .animate-container > div:first-child {
                    animation: text-animation 9s cubic-bezier(0.65, 0, 0.35, 1) infinite;
                }

                .text-block {
                    height: 6rem; /* Increased height */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #1a1a1a;
                    font-weight: 900;
                    white-space: nowrap;
                    transition: color 0.3s ease;
                    background: transparent;
                    text-transform: uppercase;
                    letter-spacing: -0.02em;
                    line-height: 1; /* Ensures text is centered within the block */
                }

                .text-block:hover {
                    color: #ff7800;
                    cursor: default;
                }
                `}
            </style>

            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" />

            <div className="relative z-10 flex flex-col h-full grow justify-between">
                
                <div className="w-full flex flex-col items-center justify-center py-12 md:py-20 select-none">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-[#555]">Hello</span>
                        <motion.span 
                            animate={{ rotate: [0, 15, 0, 15, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-2xl md:text-3xl inline-block origin-bottom-right"
                        >
                            👋
                        </motion.span>
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-[#555]">I'm</span>
                    </div>
                    
                    {/* Increased responsive text sizing with extra breathing room */}
                    <section className="animate-container text-4xl md:text-6xl lg:text-[5.5rem]">
                        <div className="first">
                            <div className="text-block">Vankunavath Uday Kumar</div>
                        </div>
                        <div className="second">
                            <div className="text-block">Web Developer</div>
                        </div>
                        <div className="third">
                            <div className="text-block">Software Engineer</div>
                        </div>
                    </section>
                </div>

                <div className="grid md:grid-cols-12 gap-8 items-end px-6 md:px-12 pb-12">
                    <div className="md:col-span-3 space-y-6 mb-8">
                        <div className="text-4xl text-[#1a1a1a]">↘</div>
                        <p className="text-[#333] text-lg leading-relaxed font-medium max-w-xs">
                            Full-Stack Developer open to worldwide roles. Translating complex ideas into intuitive digital experiences.
                        </p>
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-[#1a1a1a] hover:bg-[#ff7800] text-[#f0f0f0] px-8 py-4 rounded-full font-bold uppercase text-sm tracking-wide transition-all duration-300"
                        >
                            Contact ↗
                        </button>
                    </div>

                    <div className="md:col-span-6 flex justify-center items-end h-full">
                        <div className="w-[80%] aspect-[3/4] md:w-[350px] md:h-[450px] bg-gray-200 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative shadow-2xl">
                            <img src={udayImg} alt="Uday kumar" className="w-full h-full object-cover select-none" draggable="false" />
                        </div>
                    </div>

                    <div className="md:col-span-3 flex flex-col items-end justify-end h-full mb-0">
                        <div className="text-right">
                            <div className="text-2xl md:text-3xl font-black text-[#1a1a1a] tracking-tighter uppercase whitespace-nowrap mb-6 leading-none">
                                Available <br/> For Work
                            </div>
                            <a
                                href={resumePdf}
                                download="CV_UDAY_KUMAR.pdf"
                                className="inline-block border-2 border-black px-6 py-3 rounded-full font-bold uppercase text-xs tracking-wide hover:bg-[#ff7800] hover:border-[#ff7800] hover:text-white transition-all duration-300"
                            >
                                Download Resume ↓
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;