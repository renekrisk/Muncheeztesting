import { motion } from 'framer-motion';
import { useRef } from 'react';

const offerings = [
    {
        id: "01",
        category: "Restaurant Delivery",
        title: "The Kitchens",
        description: "From Westlands' fine dining to the hidden gems of Kilimani. Delivered hot.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
        aspect: "aspect-[3/4]"
    },
    {
        id: "02",
        category: "Supermarket & Retail",
        title: "The Pantry",
        description: "Farm-to-fork goodness and household essentials from the supermarkets you trust.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
        aspect: "aspect-[4/5]",
        offset: "lg:mt-32"
    },
    {
        id: "03",
        category: "Health & Wellness",
        title: "The Pharmacy",
        description: "Quick, discreet delivery for your health essentials when you need them most.",
        image: "https://plus.unsplash.com/premium_photo-1671721438260-1adb3749253f?q=80&w=800&auto=format&fit=crop",
        aspect: "aspect-[3/4]"
    },
    {
        id: "04",
        category: "Bakery & Cafe",
        title: "The Morning",
        description: "Warm pastries and fresh sourdough from the city’s favorite artisan bakers.",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
        aspect: "aspect-[4/5]",
        offset: "lg:-mt-24"
    }
];

export default function Services() {
    const ref = useRef(null);

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
                <div className="lg:grid lg:grid-cols-12 lg:gap-24">

                    {/* Left Side: Sticky Header */}
                    <div className="lg:col-span-4 mb-12 lg:mb-0">
                        <div className="lg:sticky lg:top-40 space-y-8 lg:space-y-12 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 mb-6 block">Our Offerings</span>
                                <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-light text-white leading-[1.1] tracking-tighter">
                                    Everything <br className="hidden lg:block" />
                                    You Need.
                                </h2>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="space-y-6 max-w-sm mx-auto lg:mx-0"
                            >
                                <div className="h-px w-20 bg-white/20 mx-auto lg:mx-0" />
                                <p className="text-lg text-white/60 font-light leading-relaxed italic">
                                    "From fine dining to pharmacy essentials."
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: Horizontal Scroll (Mobile) / Staggered Grid (Desktop) */}
                    <div className="lg:col-span-8 -mx-6 lg:mx-0">
                        {/* Mobile: Horizontal Scroll Container */}
                        <div className="flex lg:grid lg:grid-cols-2 overflow-x-auto lg:overflow-visible gap-6 lg:gap-x-12 lg:gap-y-32 snap-x snap-mandatory px-6 lg:px-0 pb-12 lg:pb-0 scrollbar-hide">
                            {offerings.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    viewport={{ once: true }}
                                    className={`relative group shrink-0 w-[85vw] sm:w-[350px] lg:w-auto snap-center ${item.offset || ''}`}
                                >
                                    <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-12">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">{item.id} / {item.category}</span>
                                            <div className="h-px flex-1 bg-white/10" />
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-heading font-light tracking-tight">{item.title}</h3>
                                        <p className="text-sm lg:text-lg text-white/50 font-light leading-relaxed max-w-sm">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className={`relative ${item.aspect} rounded-[2rem] overflow-hidden shadow-2xl group-hover:-translate-y-2 transition-transform duration-700 bg-white/5 ring-1 ring-white/10`}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60" />

                                        {/* Subtle Overlay Label */}
                                        <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 hidden lg:block">
                                            <button className="text-[10px] font-bold uppercase tracking-widest bg-white text-black px-6 py-3 rounded-full hover:bg-white/90">
                                                Explore
                                            </button>
                                        </div>

                                        {/* Mobile Tap Indicator */}
                                        <div className="absolute bottom-6 right-6 lg:hidden w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                            <div className="w-1 h-1 bg-white rounded-full" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
