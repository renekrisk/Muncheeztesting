import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useLocality } from '../context/LocalityContext';

export default function Hero() {
    const ref = useRef(null);
    const { city } = useLocality();
    const EASE = [0.16, 1, 0.3, 1] as const;

    const fadeScale = {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1, transition: { duration: 1, ease: EASE } }
    };

    return (
        <section ref={ref} className="relative h-screen supports-[height:100dvh]:h-[100dvh] md:min-h-[600px] flex items-center justify-center bg-black overflow-hidden">

            {/* Cinematic Background Layer - Static */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full">
                    {/* Dark layers for readability in specific corners */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/60 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=60&w=1600&auto=format&fit=crop"
                        alt="Premium Gourmet Delivery"
                        className="w-full h-full object-cover object-center scale-105"
                        loading="eager"
                    />
                </div>
            </div>

            {/* Cinematic Noise Texture */}
            <div className="absolute inset-0 z-[5] opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            {/* 
                DESKTOP LAYOUT (Default - Centered)
                Hidden on Mobile. 
            */}
            <div className="hidden md:flex container relative z-20 px-8 flex-col items-center text-center max-w-5xl">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-[10px] font-bold text-white/30 uppercase tracking-[0.6em] mb-12"
                >
                    {city}'s Selection
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-8xl lg:text-9xl font-heading font-extralight tracking-tight text-white leading-[0.8] mb-12"
                >
                    Muncheez<span className="text-[#4A90E2]">.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.4 }}
                    className="text-lg text-white/60 font-light tracking-wide mb-16 max-w-xl mx-auto italic font-serif leading-relaxed"
                >
                    Bringing Nairobi’s legendary kitchens <br className="hidden md:block" /> and hidden gems straight to your table.
                </motion.p>

                {/* Desktop Search - Slimmer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.6, ease: EASE }}
                    className="w-full max-w-sm relative group"
                >
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[#4A90E2] transition-colors" />
                    <input
                        type="text"
                        placeholder="Enter delivery address"
                        className="w-full pl-11 pr-11 py-3.5 bg-white/5 border border-white/10 backdrop-blur-sm text-white placeholder:text-white/20 rounded-full outline-none focus:bg-white/10 focus:border-white/20 transition-all text-sm appearance-none"
                    />
                    <button className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 text-white/40 hover:text-white transition-colors">
                        <ArrowRight size={18} />
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="absolute -bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
                >
                    <span className="text-[8px] font-bold text-white/20 uppercase tracking-[0.4em] rotate-90 origin-left ml-2">Scroll</span>
                    <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent"></div>
                </motion.div>
            </div>


            {/* 
                MOBILE LAYOUT (Corner Tension)
                Top-Right: Brand Editorial
                Bottom-Left: Action & Utility
            */}
            <div className="md:hidden absolute inset-0 p-8 flex flex-col justify-between pt-24 pb-20">

                {/* Top Right Zone */}
                <div className="flex flex-col items-end">
                    <motion.div
                        variants={fadeScale}
                        initial="initial"
                        animate="animate"
                        className="text-right"
                    >
                        <span className="block text-[9px] font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-2">Selection 01</span>
                        <h2 className="text-4xl font-serif italic font-light text-white leading-tight">
                            The <br /> {city} <br /> <span className="font-sans font-bold not-italic text-5xl tracking-tighter">SELECTION.</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Bottom Left Zone */}
                <div className="flex flex-col items-start">
                    <motion.p
                        variants={fadeScale}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.2 }}
                        className="text-xs text-white/50 font-medium uppercase tracking-[0.3em] mb-6"
                    >
                        Muncheez: <br /> {city} Delivered.
                    </motion.p>

                    <motion.div
                        variants={fadeScale}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.4 }}
                        className="w-full flex flex-col gap-4"
                    >
                        <div className="relative group">
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                            <input
                                type="text"
                                placeholder="Enter address"
                                className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 pl-11 pr-4 py-3.5 rounded-xl outline-none backdrop-blur-md focus:bg-white/10 transition-all text-sm"
                            />
                        </div>
                        <button className="bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
                            Order
                            <ArrowRight size={16} />
                        </button>
                    </motion.div>
                </div>

            </div>

        </section>
    );
}
