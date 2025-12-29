import { motion } from 'framer-motion';
import { Clock, Users, TrendingUp, ThumbsUp } from 'lucide-react';

const stats = [
    {
        value: "30",
        unit: "min",
        label: "Premium Delivery",
        icon: Clock
    },
    {
        value: "100",
        unit: "+",
        label: "Elite Partners",
        icon: Users
    },
    {
        value: "24",
        unit: "/7",
        label: "Always On",
        icon: TrendingUp
    },
    {
        value: "95",
        unit: "%",
        label: "Trust Score",
        icon: ThumbsUp
    }
];

export default function Stats() {
    return (
        <section className="relative py-24 lg:py-32 bg-[#D4AF37] text-gray-900 overflow-hidden">

            {/* Editorial Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay grayscale">
                <img
                    src="https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=2000"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container relative z-10 px-8 lg:px-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 mx-auto mb-12 rounded-2xl bg-black/5 border border-black/5 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all duration-700">
                                <stat.icon size={24} />
                            </div>

                            {/* Value */}
                            <div className="flex items-baseline justify-center mb-6">
                                <span className="text-6xl md:text-7xl font-heading font-light tracking-tighter">{stat.value}</span>
                                <span className="text-2xl font-light text-gray-900/40 ml-1">{stat.unit}</span>
                            </div>

                            {/* Label */}
                            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-900/60 leading-tight">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
