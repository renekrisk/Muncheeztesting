import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, ThumbsUp } from 'lucide-react';

const stats = [
    {
        value: "30",
        unit: "min",
        label: "Average Delivery",
        icon: Clock,
        color: "blue"
    },
    {
        value: "100",
        unit: "+",
        label: "Partner Businesses",
        icon: Users,
        color: "emerald"
    },
    {
        value: "24",
        unit: "/7",
        label: "Service Available",
        icon: TrendingUp,
        color: "purple"
    },
    {
        value: "95",
        unit: "%",
        label: "Customer Satisfaction",
        icon: ThumbsUp,
        color: "orange"
    }
];

export default function Stats() {
    return (
        <section className="py-24 bg-[#FFC244] text-gray-900">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                bounce: 0.4,
                                duration: 0.8,
                                delay: index * 0.1
                            }}
                            className="text-center"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                                <stat.icon className={`text-${stat.color}-400`} size={28} />
                            </div>

                            {/* Value */}
                            <div className="flex items-baseline justify-center mb-2">
                                <span className="text-5xl font-heading font-bold">{stat.value}</span>
                                <span className="text-2xl font-bold text-gray-400 ml-1">{stat.unit}</span>
                            </div>

                            {/* Label */}
                            <p className="text-sm text-gray-400 uppercase tracking-[0.15em] font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
