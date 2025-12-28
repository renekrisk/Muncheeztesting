import { ArrowRight, Flame, Heart, Coffee, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const collections = [
    {
        id: 1,
        name: "Healthy & Fresh",
        tagline: "Fuel your body right",
        description: "Farm-to-table freshness delivered daily",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop",
        icon: Heart,
        color: "emerald",
        featured: true
    },
    {
        id: 2,
        name: "Comfort Classics",
        tagline: "Soul food favorites",
        description: "The comfort you crave, delivered warm",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2099&auto=format&fit=crop",
        icon: Flame,
        color: "orange",
        featured: false
    },
    {
        id: 3,
        name: "Sweet Treats",
        tagline: "Indulge guilt-free",
        description: "Life's too short to skip dessert",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=2028&auto=format&fit=crop",
        icon: Coffee,
        color: "pink",
        featured: false
    },
    {
        id: 4,
        name: "Global Flavors",
        tagline: "Taste the world",
        description: "Authentic cuisine without the passport",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2087&auto=format&fit=crop",
        icon: Globe,
        color: "blue",
        featured: false
    }
];

export default function Collections() {
    return (
        <section className="relative py-24 bg-[#FFC244]" id="categories">
            {/* Top Curve: Blue to Yellow */}
            <div className="absolute top-[-1px] left-0 w-full leading-[0] z-10 rotate-180">
                <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-[60px] block" preserveAspectRatio="none">
                    <path fill="#4A90E2" fillOpacity="1" d="M0,0L48,10C96,20,192,40,288,50C384,60,480,60,576,50C672,40,768,20,864,15C960,10,1056,20,1152,30C1248,40,1344,50,1392,55L1440,60L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
                </svg>
            </div>
            <div className="container relative z-20">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 mb-6 tracking-tight">
                        Craving something?
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Browse our curated collections and discover your next favorite meal
                    </p>
                </motion.div>

                {/* Asymmetric Grid Layout */}
                <div className="grid grid-cols-12 gap-4 md:gap-6">

                    {/* Featured Large Card - Left */}
                    {collections.filter(c => c.featured).map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="col-span-12 md:col-span-7 group relative rounded-3xl overflow-hidden h-[500px] cursor-pointer"
                        >
                            {/* Background Image */}
                            <img
                                src={collection.image}
                                alt={collection.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white mb-4 w-fit">
                                    <collection.icon size={18} />
                                    <span className="text-sm font-bold uppercase tracking-wide">{collection.tagline}</span>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                                    {collection.name}
                                </h3>

                                <p className="text-white/90 text-lg mb-6 max-w-md">
                                    {collection.description}
                                </p>

                                <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors w-fit group/btn">
                                    <span>Explore Collection</span>
                                    <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}

                    {/* Right Column - 3 Smaller Cards Stacked */}
                    <div className="col-span-12 md:col-span-5 flex flex-col gap-4 md:gap-6">
                        {collections.filter(c => !c.featured).map((collection, index) => (
                            <motion.div
                                key={collection.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="group relative rounded-2xl overflow-hidden h-[155px] cursor-pointer"
                            >
                                {/* Background Image */}
                                <img
                                    src={collection.image}
                                    alt={collection.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-${collection.color}-900/90 to-${collection.color}-600/70 group-hover:from-${collection.color}-900/80 group-hover:to-${collection.color}-600/60 transition-all`}></div>

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <collection.icon size={20} className="text-white" />
                                            <span className="text-xs font-bold uppercase tracking-wide text-white/80">
                                                {collection.tagline}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-heading font-bold text-white mb-1">
                                            {collection.name}
                                        </h3>
                                        <p className="text-white/80 text-sm">{collection.description}</p>
                                    </div>

                                    <div className="ml-4">
                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                            <ArrowRight className="text-white" size={20} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
