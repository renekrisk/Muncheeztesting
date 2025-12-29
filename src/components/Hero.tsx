import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export default function Hero() {
    const ref = useRef(null);
    // Use window size to determine if we should enable parallax (desktop only)
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth > 768);
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        if (!isDesktop) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth - 0.5) * 20; // Move up to 20px
            const y = (clientY / innerHeight - 0.5) * 20;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isDesktop, mouseX, mouseY]);

    // Smooth spring animation for mouse movement
    const x = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const yParallax = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    const EASE = [0.16, 1, 0.3, 1] as const;

    const titleVariants = {
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    };

    const letterVariants = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 1, ease: EASE } }
    };

    return (
        <section ref={ref} className="relative h-screen supports-[height:100dvh]:h-[100dvh] min-h-[600px] flex items-center justify-center bg-black overflow-hidden">

            {/* Cinematic Background Layer with Parallax */}
            <motion.div
                style={{
                    y,
                    scale
                }}
                className="absolute inset-0 z-0"
            >
                <motion.div
                    style={{
                        x: isDesktop ? x : 0,
                        y: isDesktop ? yParallax : 0
                    }}
                    className="w-full h-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=60&w=1600&auto=format&fit=crop"
                        alt="Premium Gourmet Delivery"
                        className={`w-full h-full object-cover ${isDesktop ? 'scale-105' : 'scale-100 object-center'}`}
                        loading="eager"
                    />
                </motion.div>
            </motion.div>

            {/* Cinematic Noise Texture - Reduced Opacity for Performance */}
            <div className="absolute inset-0 z-[5] opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            <div className="container relative z-20 px-4 md:px-8 text-center pt-24 md:pt-20">
                <div className="max-w-5xl mx-auto flex flex-col items-center">

                    {/* Editorial Header */}
                    <div className="mb-6 md:mb-12 w-full">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="block text-[9px] md:text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 md:mb-8"
                        >
                            Nairobi's Selection
                        </motion.span>

                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 mb-3 md:mb-6"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4A90E2] animate-pulse" />
                            <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-widest">Coming Soon</span>
                        </motion.div>

                        <div className="overflow-hidden px-1">
                            <motion.h1
                                variants={titleVariants}
                                initial="initial"
                                animate="animate"
                                className="flex justify-center flex-wrap gap-0.5 md:gap-4 text-[15vw] md:text-[11vw] font-heading font-extralight tracking-[-0.04em] md:tracking-[-0.06em] text-white leading-[0.9] mb-3 md:mb-8"
                            >
                                {['M', 'u', 'n', 'c', 'h', 'e', 'z', 'z'].map((letter, i) => (
                                    <motion.span key={i} variants={letterVariants} className="inline-block">
                                        {letter}
                                    </motion.span>
                                ))}
                                <motion.span variants={letterVariants} className="text-[#4A90E2] inline-block">.</motion.span>
                            </motion.h1>
                        </div>
                    </div>

                    {/* Minimalist Narrative */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 1.2 }}
                        className="text-[3.8vw] md:text-xl text-white/80 font-light tracking-wide mb-8 md:mb-16 max-w-[85%] md:max-w-2xl mx-auto italic font-serif leading-relaxed"
                    >
                        Bringing Nairobi’s legendary kitchens <br className="hidden md:block" /> and hidden gems straight to your table.
                    </motion.p>

                    {/* Address Input - Mobile Optimized */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center justify-center gap-3 mt-4 md:mt-16 w-full max-w-[90vw] md:max-w-md"
                    >
                        <p className="text-[10px] md:text-xs text-white/60 font-medium">What's your address?</p>
                        <div className="relative w-full group">
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#4A90E2] transition-colors" />
                            <input
                                type="text"
                                placeholder="Enter delivery address"
                                className="w-full pl-11 pr-11 py-3.5 md:py-4 bg-white/95 backdrop-blur-sm text-gray-900 placeholder:text-gray-400 rounded-full outline-none focus:ring-2 focus:ring-white/40 transition-all text-sm shadow-lg appearance-none"
                            />
                            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-gray-900 text-white rounded-full hover:bg-[#4A90E2] transition-all duration-300 shadow-md active:scale-95 flex items-center justify-center">
                                <ArrowRight size={14} />
                            </button>
                        </div>
                        <button className="text-[10px] md:text-xs text-white/50 hover:text-white transition-colors py-2 active:opacity-70">
                            Use current location
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Progress Line */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-6"
            >
                <span className="text-[8px] font-bold text-white/20 uppercase tracking-[0.4em] rotate-90 origin-left ml-2">Scroll</span>
                <div className="w-[1px] h-8 md:h-20 bg-gradient-to-b from-white/20 to-transparent"></div>
            </motion.div>

        </section>
    );
}
