import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Flame, Utensils, Globe, ArrowRight } from 'lucide-react';

const collections = [
    {
        id: "01",
        name: "Healthy & Fresh",
        tagline: "Fuel your body right",
        description: "Farm-to-table freshness delivered daily from local estates and artisan gardens.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080",
        icon: Heart,
        layout: "lg:col-span-8 lg:pr-24",
        aspect: "aspect-[16/10] lg:aspect-[16/9]"
    },
    {
        id: "02",
        name: "Comfort",
        tagline: "Soul food favorites",
        description: "The comfort you crave, elevated with premium ingredients.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2099",
        icon: Flame,
        layout: "lg:col-span-4 lg:mt-80",
        aspect: "aspect-[4/5]"
    },
    {
        id: "03",
        name: "Quick Bites",
        tagline: "Speed meets taste",
        description: "Delicious options, fast, without compromising on quality.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=2028",
        icon: Utensils,
        layout: "lg:col-span-5 lg:-mt-40",
        aspect: "aspect-[4/5]"
    },
    {
        id: "04",
        name: "Global Flavors",
        tagline: "Taste the world",
        description: "Authentic cuisine from global masters brought to your doorstep.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2087",
        icon: Globe,
        layout: "lg:col-span-7 lg:mt-20 lg:pl-12",
        aspect: "aspect-[21/9] lg:aspect-[16/7]"
    }
];

export default function Collections() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <section ref={sectionRef} className="relative py-24 lg:py-40 bg-[#D4AF37] overflow-hidden" id="categories">

            {/* Top Curve: Blue to Gold */}
            <div className="absolute top-[-1px] left-0 w-full leading-[0] z-10 rotate-180">
                <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-[60px] block" preserveAspectRatio="none">
                    <path fill="#4A90E2" fillOpacity="1" d="M0,0L48,10C96,20,192,40,288,50C384,60,480,60,576,50C672,40,768,20,864,15C960,10,1056,20,1152,30C1248,40,1344,50,1392,55L1440,60L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
                </svg>
            </div>

            {/* Editorial Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay grayscale">
                <img
                    src="https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=2000"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container relative z-20 px-8 lg:px-20">

                {/* Header - Huge Architectural Typo */}
                <div className="relative mb-20 lg:mb-64">
                    <motion.span
                        style={{ opacity }}
                        className="text-[20vw] font-heading font-black text-black/5 absolute -top-[10vw] -left-[2vw] whitespace-nowrap pointer-events-none"
                    >
                        COLLECTION
                    </motion.span>

                    <div className="relative z-10 space-y-8">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-bold uppercase tracking-[0.8em] text-gray-900/40 block ml-1"
                        >
                            Curated Selection
                        </motion.span>
                        <motion.h2
                            style={{ y: titleY }}
                            className="text-6xl md:text-9xl font-heading font-light text-gray-900 leading-[0.8] tracking-tighter"
                        >
                            The Pursuit <br />
                            <span className="text-gray-900/10 italic">of Perfection</span>.
                        </motion.h2>
                    </div>
                </div>

                {/* Boutique Lookbook Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-24 lg:gap-y-0 lg:gap-x-0">
                    {collections.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, amount: 0.1 }}
                            className={`relative group ${item.layout}`}
                        >
                            <div className="relative">
                                {/* Floating Number Indicator */}
                                <span className="absolute -top-10 -left-6 text-7xl font-heading font-black text-black/5 group-hover:text-black/10 transition-colors duration-700 pointer-events-none lg:block hidden">
                                    {item.id}
                                </span>

                                {/* Card Body */}
                                <div className="space-y-12">
                                    <div className={`relative ${item.aspect} rounded-[3rem] overflow-hidden shadow-[0_64px_128px_-32px_rgba(0,0,0,0.3)] bg-gray-100 ring-1 ring-black/5 transform group-hover:scale-[1.02] transition-transform duration-[2000ms] ease-out`}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms] ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />

                                        {/* Minimal Hover Overlay */}
                                        <div className="absolute inset-0 flex flex-col justify-end p-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                            <div className="flex items-center gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                                <div className="h-px w-12 bg-white/40" />
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">View Details</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Editorial Metadata, High density, premium details */}
                                    <div className="space-y-6 lg:max-w-md">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-900/30">{item.tagline}</span>
                                            <div className="w-10 h-10 rounded-full border border-gray-900/10 flex items-center justify-center text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-500">
                                                <ArrowRight size={16} className="-rotate-45" />
                                            </div>
                                        </div>
                                        <h3 className="text-4xl lg:text-5xl font-heading font-light text-gray-900 tracking-tighter leading-none">
                                            {item.name}
                                        </h3>
                                        <p className="text-base text-gray-600 font-light leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final Lookbook Section Stat */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="mt-32 lg:mt-64 pt-16 lg:pt-24 border-t border-gray-900/5 flex flex-col md:flex-row justify-between items-center gap-12"
                >
                    <div className="flex gap-16">
                        <div className="space-y-2">
                            <span className="text-[10px] font-bold text-gray-900/20 uppercase tracking-widest block">Partnership</span>
                            <span className="text-2xl font-heading font-light">Curated Global Network</span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] font-bold text-gray-900/20 uppercase tracking-widest block">Quality Control</span>
                            <span className="text-2xl font-heading font-light">100% Manual Selection</span>
                        </div>
                    </div>
                    <a href="#about" className="text-sm font-bold uppercase tracking-[0.4em] hover:text-gray-900/60 transition-colors">
                        Discover More
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
