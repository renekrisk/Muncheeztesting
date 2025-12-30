import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const offerings = [
    {
        id: "01",
        category: "Restaurant Delivery",
        title: "The Kitchens",
        description: "From Westlands' fine dining to the hidden gems of Kilimani. Delivered hot.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200",
        color: "#F5F5F5"
    },
    {
        id: "02",
        category: "Supermarket & Retail",
        title: "The Pantry",
        description: "Farm-to-fork goodness and household essentials from the supermarkets you trust.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200",
        color: "#E0E0E0"
    },
    {
        id: "03",
        category: "Health & Wellness",
        title: "The Pharmacy",
        description: "Quick, discreet delivery for your health essentials when you need them most.",
        image: "https://plus.unsplash.com/premium_photo-1671721438260-1adb3749253f?q=80&w=1200",
        color: "#F5F5F5"
    },
    {
        id: "04",
        category: "Bakery & Cafe",
        title: "The Morning",
        description: "Warm pastries and fresh sourdough from the city’s favorite artisan bakers.",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200",
        color: "#E0E0E0"
    }
];

export default function Services() {
    const ref = useRef(null);
    const [activeId, setActiveId] = useState("01");

    return (
        <section ref={ref} className="relative py-20 lg:py-32 bg-[#4A90E2] text-white overflow-hidden" id="about">

            {/* Faint Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay grayscale">
                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container relative z-10 px-6 lg:px-20">
                {/* Header */}
                <div className="mb-12 lg:mb-20 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 mb-4 block">Our Offerings</span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-light text-white leading-[1.1] tracking-tighter">
                            Essentials, <br className="hidden lg:block" />
                            Elevated.
                        </h2>
                    </motion.div>
                </div>

                {/* Desktop: Hover-Accordion Interactive Layout */}
                <div className="hidden lg:flex h-[600px] gap-4">
                    {offerings.map((item) => (
                        <motion.div
                            key={item.id}
                            className="relative h-full rounded-[2rem] overflow-hidden cursor-pointer group"
                            layout
                            initial={{ flex: 1 }}
                            animate={{ flex: activeId === item.id ? 3 : 1 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            onHoverStart={() => setActiveId(item.id)}
                            onClick={() => setActiveId(item.id)}
                        >
                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className={`absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 ${activeId === item.id ? 'bg-black/0' : ''}`} />

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col justify-end">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${activeId === item.id ? 'bg-white text-black border-white' : 'text-white/60 border-white/20'}`}>
                                        {item.category}
                                    </span>
                                </div>

                                <h3 className={`font-heading font-light tracking-tight transition-all duration-300 ${activeId === item.id ? 'text-5xl mb-6' : 'text-3xl mb-2 text-white/80'}`}>
                                    {item.title}
                                </h3>

                                {/* Description - Only Visible when Active */}
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{
                                        opacity: activeId === item.id ? 1 : 0,
                                        height: activeId === item.id ? 'auto' : 0
                                    }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-lg text-white/80 font-light leading-relaxed max-w-md mb-8">
                                        {item.description}
                                    </p>
                                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-white/80 transition-colors group/btn">
                                        Explore
                                        <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </button>
                                </motion.div>
                            </div>

                            {/* ID Number (Top Right) */}
                            <div className="absolute top-8 right-8">
                                <span className="text-xl font-heading font-bold text-white/20">{item.id}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile: Horizontal Snap Scroll (Preserved) */}
                <div className="lg:hidden -mx-6">
                    <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory px-6 pb-12 scrollbar-hide">
                        {offerings.map((item, index) => (
                            <div
                                key={item.id}
                                className="relative shrink-0 w-[85vw] aspect-[4/5] rounded-[2rem] overflow-hidden snap-center group"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90" />

                                <div className="absolute bottom-0 left-0 w-full p-8">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-3 block">
                                        {item.category}
                                    </span>
                                    <h3 className="text-3xl font-heading font-light text-white mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-white/70 font-light leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
