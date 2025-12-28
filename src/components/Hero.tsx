import { ArrowDownRight } from 'lucide-react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import { TextReveal } from './ui/text-reveal';

export default function Hero() {
    // Parallax Mouse Effect
    const ref = useRef<HTMLElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = clientX - left - width / 2;
        const y = clientY - top - height / 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    // Background Parallax
    const moveBackgroundX = useTransform(springX, (x) => x / 50); // Subtle movement
    const moveBackgroundY = useTransform(springY, (y) => y / 50);

    return (
        <section
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 bg-[#4A90E2] overflow-hidden"
        >
            {/* Animated Background Pattern */}
            <motion.div
                style={{ x: moveBackgroundX, y: moveBackgroundY }}
                className="absolute inset-0 z-0 opacity-10 bg-dot-pattern"
            />

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:items-end border-b border-white/20 pb-20">

                    <div className="flex-1">
                        {/* Semantic Tagline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block mb-6"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                                Available 24/7
                            </span>
                        </motion.div>

                        <h1 className="text-6xl lg:text-8xl font-heading font-extrabold tracking-tighter text-white leading-[1.0] scale-[0.95] origin-left">
                            {/* Word Split Animation */}
                            <div className="flex flex-wrap overflow-hidden pb-2">
                                <TextReveal type="word" delay={0.1} className="mr-[0.25em]">
                                    Everything You Need.
                                </TextReveal>
                            </div>
                            <div className="flex flex-wrap overflow-hidden text-[#FFC244] pb-2">
                                <TextReveal type="word" delay={0.4} className="mr-[0.25em]">
                                    Delivered.
                                </TextReveal>
                            </div>
                        </h1>
                    </div>

                    <div className="lg:w-[400px] flex flex-col gap-8">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="text-lg text-white/90 leading-relaxed font-light"
                        >
                            Premium delivery from restaurants, supermarkets, and pharmacies. Browse local businesses, order simply, delivered fast.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="flex gap-4"
                        >
                            <a href="#categories" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white border-b border-white pb-1 hover:text-[#FFC244] hover:border-[#FFC244] transition-all">
                                Browse Categories
                                <ArrowDownRight size={16} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>

                </div>

                {/* Stats Grid - with improved staggering */}
                <div className="grid grid-cols-2 md:grid-cols-4 pt-12 gap-8">
                    {[
                        { value: "30min", label: "Average Delivery" },
                        { value: "100+", label: "Partner Businesses" },
                        { value: "24/7", label: "Service Available" },
                        { value: "95%", label: "Customer Satisfaction" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                bounce: 0.4,
                                duration: 0.8,
                                delay: 1.2 + (index * 0.1)
                            }}
                        >
                            <span className="block text-3xl font-bold text-white">{stat.value}</span>
                            <span className="text-sm text-white/80 mt-1">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
