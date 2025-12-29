import { motion, useScroll, useTransform } from 'framer-motion';
import { Search } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={ref} className="relative h-screen min-h-[750px] flex items-center justify-center bg-black overflow-hidden">

            {/* Cinematic Background Layer */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2500&auto=format&fit=crop"
                    alt="Premium Gourmet Delivery"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <div className="container relative z-20 px-8 text-center pt-20">
                <div className="max-w-5xl mx-auto">

                    {/* Editorial Header */}
                    <div className="mb-10">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="block text-[10px] font-bold text-white/40 uppercase tracking-[0.5em] mb-8"
                        >
                            Nairobi's Selection
                        </motion.span>

                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[14vw] md:text-[11vw] font-heading font-extralight tracking-[-0.06em] text-white leading-[0.85] mb-6"
                            >
                                Munchezz<span className="text-[#4A90E2]">.</span>
                            </motion.h1>
                        </div>
                    </div>

                    {/* Minimalist Narrative */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 1.2 }}
                        className="text-lg md:text-xl text-white/80 font-light tracking-wide mb-16 max-w-2xl mx-auto italic font-serif"
                    >
                        Bringing Nairobi’s legendary kitchens <br className="hidden md:block" /> and hidden gems straight to your table.
                    </motion.p>

                    {/* Address Trigger - Refined */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16 max-w-lg mx-auto"
                    >
                        <button className="w-full bg-white text-black px-12 py-6 rounded-full text-[10px] font-bold tracking-[0.2em] transition-all hover:bg-[#4A90E2] hover:text-white uppercase flex items-center justify-between group">
                            <span className="flex items-center gap-4">
                                <Search size={16} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                                Enter your address
                            </span>
                            <div className="h-2 w-2 rounded-full bg-[#4A90E2] group-hover:bg-white transition-colors" />
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Progress Line */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
            >
                <span className="text-[8px] font-bold text-white/20 uppercase tracking-[0.4em] rotate-90 origin-left ml-2">Scroll</span>
                <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent"></div>
            </motion.div>

        </section>
    );
}
