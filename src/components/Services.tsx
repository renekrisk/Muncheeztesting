import { motion } from 'framer-motion';
import { useRef } from 'react';

const offerings = [
    {
        id: "01",
        category: "Fine Dining",
        title: "The Culinary Arts",
        description: "Premier kitchens delivered with absolute precision and care.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
        aspect: "aspect-[3/4]"
    },
    {
        id: "02",
        category: "Essentials",
        title: "Global Provisions",
        description: "Farm-to-table freshness sourced from local artisans and global markets.",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop",
        aspect: "aspect-[4/5]",
        offset: "lg:mt-32"
    },
    {
        id: "03",
        category: "Wellness",
        title: "Health & Rituals",
        description: "Discretion and speed for your personal well-being and daily rituals.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
        aspect: "aspect-[3/4]"
    },
    {
        id: "04",
        category: "Curated",
        title: "Specialty Boutiques",
        description: "Unique finds from the most exclusive local boutiques.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
        aspect: "aspect-[4/5]",
        offset: "lg:-mt-24"
    }
];

export default function Services() {
    const ref = useRef(null);

    return (
        <section ref={ref} className="relative py-24 lg:py-32 bg-[#4A90E2] text-white overflow-hidden" id="about">

            {/* Faint Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay grayscale">
                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container relative z-10 px-8 lg:px-20">
                <div className="lg:grid lg:grid-cols-12 lg:gap-24">

                    {/* Left Side: Sticky Header */}
                    <div className="lg:col-span-4 mb-20 lg:mb-0">
                        <div className="lg:sticky lg:top-40 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 mb-6 block">Offerings</span>
                                <h2 className="text-5xl md:text-7xl font-heading font-light text-white leading-[1.1] tracking-tighter">
                                    Curated with <br />
                                    <span className="text-white/30 italic">Intention</span>.
                                </h2>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="space-y-6 max-w-sm"
                            >
                                <div className="h-px w-20 bg-white/20" />
                                <p className="text-xl text-white/60 font-light leading-relaxed italic">
                                    "Bridging the Gap between Vision and Reality through meticulous selection."
                                </p>
                                <p className="text-sm text-white/40 font-light leading-relaxed">
                                    Our ecosystem is designed for those who value time and quality above all else. Every partner is hand-selected to ensure your experience remains unparalleled.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: Staggered Boutique Grid */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-32">
                            {offerings.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    viewport={{ once: true }}
                                    className={`relative group ${item.offset || ''}`}
                                >
                                    <div className="space-y-6 mb-8 lg:mb-12">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">{item.id} / {item.category}</span>
                                            <div className="h-px flex-1 bg-white/10" />
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-heading font-light tracking-tight">{item.title}</h3>
                                        <p className="text-lg text-white/50 font-light leading-relaxed max-w-sm">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className={`relative ${item.aspect} rounded-3xl overflow-hidden shadow-2xl group-hover:-translate-y-2 transition-transform duration-700 bg-white/5 ring-1 ring-white/10`}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60" />

                                        {/* Subtle Overlay Label */}
                                        <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                            <button className="text-[10px] font-bold uppercase tracking-widest bg-white text-black px-6 py-3 rounded-full hover:bg-white/90">
                                                Discover Collection
                                            </button>
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
