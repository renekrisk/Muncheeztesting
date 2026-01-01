import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Footer from '../components/Footer';

/**
 * OUR STORY - Final Content Revision
 * - Visuals: Blue -> Yellow -> Green (Curved Flow) [APPROVED]
 * - Content: DEEP DIVE into Origin, Process, and Vision [NEW REQUEST]
 */
export default function OurStory() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const titleY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // SVG Curves (Standardized)
    const BottomCurve = ({ fill }: { fill: string }) => (
        <div className="absolute bottom-[-1px] left-0 w-full leading-[0] z-20">
            <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-[60px] md:h-[100px] block" preserveAspectRatio="none">
                <path fill={fill} fillOpacity="1" d="M0,0L48,10C96,20,192,40,288,50C384,60,480,60,576,50C672,40,768,20,864,15C960,10,1056,20,1152,30C1248,40,1344,50,1392,55L1440,60L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
            </svg>
        </div>
    );

    return (
        <div ref={containerRef} className="min-h-screen bg-black font-sans selection:bg-black selection:text-white overflow-x-hidden relative">

            {/* 1. BLUE: THE ORIGIN (What brought about us) */}
            <section className="relative bg-[#4A90E2] text-white pt-40 pb-32 lg:pt-48 lg:pb-56 px-6 min-h-[90vh] flex flex-col justify-center">
                <div className="absolute inset-0 z-[5] opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay" />

                <div className="container max-w-7xl mx-auto relative z-10">
                    <motion.div style={{ y: titleY, opacity: titleOpacity }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/60 mb-8 block">
                                The Origin Story
                            </span>
                            <h1 className="text-6xl md:text-8xl font-heading font-light tracking-tighter text-white leading-[0.9] mb-8">
                                A City of <br />
                                <span className="font-bold">Hidden Gems.</span>
                            </h1>
                        </div>
                        <div className="text-lg md:text-xl font-light text-white/90 leading-relaxed space-y-6">
                            <p>
                                It started with a simple frustration: <strong>Nairobi has incredible food, but accessing it was a nightmare.</strong>
                            </p>
                            <p>
                                The best <em>kuku choma</em> wasn't in a mall; it was in a backyard in Westlands. The most authentic sourdough was in a small kitchen in Karen, not a supermarket chain. The city was bursting with flavor, but the delivery apps were only focused on the big franchises effectively ignoring the soul of the city.
                            </p>
                            <p>
                                We asked ourselves: Why should convenience cost us culture?
                                <span className="block mt-4 font-heading font-bold text-2xl">We built Muncheez to digitize the soul of Nairobi.</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
                <BottomCurve fill="#D4AF37" />
            </section>

            {/* 2. YELLOW: WHAT WE DO (The Process & Standard) */}
            <section className="relative bg-[#D4AF37] text-gray-900 py-32 lg:py-48 px-6">
                <div className="absolute inset-0 z-[5] opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-multiply" />

                <div className="container max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                        <div className="sticky top-32">
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-black/40 mb-6 block">
                                What We Do
                            </span>
                            <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight text-gray-900 mb-8 leading-none">
                                Curation, Not <br /> <span className="font-bold">Congestion.</span>
                            </h2>
                            <p className="text-lg text-gray-800 leading-relaxed font-light mb-8 max-w-md">
                                Most apps overwhelm you with choices. We overwhelm you with quality. We aren't just a delivery service; we are the gatekeepers of good taste.
                            </p>
                        </div>
                        <div className="space-y-12">
                            <div className="border-t border-black/10 pt-8">
                                <h3 className="text-2xl font-heading font-bold mb-4">1. The Scout</h3>
                                <p className="text-gray-800/80 leading-relaxed">
                                    We don't wait for restaurants to sign up. We go find them. Our team scours the city—from the CBD to Lavington—tasting, testing, and vetting. If it's on Muncheez, it's because it beat the competition.
                                </p>
                            </div>
                            <div className="border-t border-black/10 pt-8">
                                <h3 className="text-2xl font-heading font-bold mb-4">2. The Tech</h3>
                                <p className="text-gray-800/80 leading-relaxed">
                                    Nairobi traffic is legendary. Standard GPS isn't enough. We built custom routing algorithms specifically for the city's chaos, predicting jams before they happen to ensure your food arrives hot, not lukewarm.
                                </p>
                            </div>
                            <div className="border-t border-black/10 pt-8">
                                <h3 className="text-2xl font-heading font-bold mb-4">3. The Respect</h3>
                                <p className="text-gray-800/80 leading-relaxed">
                                    We treat your food with the same respect the chef did. No spilled soups. No crushed boxes. Our packaging standards are rigorous because we believe presentation is half the meal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <BottomCurve fill="#00A082" />
            </section>

            {/* 3. GREEN: OUR GOAL (Who We Are & Vision) */}
            <section className="relative bg-[#00A082] text-white py-32 lg:py-48 px-6">
                <div className="absolute inset-0 z-[5] opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay" />

                <div className="container max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/50 mb-8 block">
                            Our Goal
                        </span>
                        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-12 tracking-tight">
                            The Neighborhood <br /> <span className="font-light italic font-serif">Operating System.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-light leading-relaxed opacity-90 mx-auto max-w-4xl text-left border-l-2 border-white/20 pl-8 md:pl-12">
                        <p>
                            We want to make Nairobi feel smaller. We want to connect the passionate baker in South B with the hungry creative in Kilimani. We want to build an ecosystem where local businesses can thrive without losing their soul to mass production.
                        </p>
                        <p>
                            Ultimately, Muncheez is about <strong>connection</strong>. It's about that moment when you open the box and smell home. It's about knowing that your order supported a local family and a rider building their future.
                        </p>
                    </div>

                    <div className="mt-24 flex flex-col items-center justify-center gap-6">
                        <div className="h-16 w-[1px] bg-white/30"></div>
                        <p className="font-heading font-bold text-2xl tracking-wide uppercase">
                            Welcome to the Fam.
                        </p>
                    </div>
                </div>

                {/* Footer Transition */}
                <BottomCurve fill="#000000" />
            </section>

            <Footer />
        </div>
    );
}
