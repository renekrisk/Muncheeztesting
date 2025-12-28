import { Search, ShoppingCart, Package, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
    return (
        <section className="py-24 bg-[#FFC244]" id="how-it-works">
            <div className="container">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                        Simple Process
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
                        Order in <span className="text-blue-600">3 easy steps</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        From craving to doorstep in minutes. No hassle, just great food.
                    </p>
                </motion.div>

                {/* Visual Flow */}
                <div className="max-w-5xl mx-auto">

                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col md:flex-row items-center gap-8 mb-16"
                    >
                        {/* Icon Circle */}
                        <div className="relative shrink-0">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl">
                                <Search className="text-white" size={48} />
                            </div>
                            <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-lg">
                                1
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-3">
                                Browse & Discover
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                                Explore restaurants, supermarkets, and pharmacies near you. Filter by cuisine, rating, delivery time, or your favorite dishes.
                            </p>
                        </div>

                        {/* Connector Arrow */}
                        <div className="hidden md:block shrink-0">
                            <ArrowRight className="text-gray-300" size={40} />
                        </div>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16"
                    >
                        {/* Icon Circle */}
                        <div className="relative shrink-0">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-2xl">
                                <ShoppingCart className="text-white" size={48} />
                            </div>
                            <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold text-lg">
                                2
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-right">
                            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-3">
                                Order & Pay Securely
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-xl md:ml-auto">
                                Add items to cart, customize your order, and checkout securely with multiple payment options. Track your order in real-time.
                            </p>
                        </div>

                        {/* Connector Arrow */}
                        <div className="hidden md:block shrink-0">
                            <ArrowRight className="text-gray-300 rotate-180" size={40} />
                        </div>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col md:flex-row items-center gap-8"
                    >
                        {/* Icon Circle */}
                        <div className="relative shrink-0">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-2xl">
                                <Package className="text-white" size={48} />
                            </div>
                            <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold text-lg">
                                3
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-3">
                                Fast Delivery
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                                Sit back and relax. Our riders ensure your order arrives fresh and on time. Average delivery time: just 30 minutes.
                            </p>
                        </div>

                        {/* End Badge */}
                        <div className="hidden md:block shrink-0">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                                <span className="text-2xl">🎉</span>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <a
                        href="#categories"
                        className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-black hover:scale-105 transition-all shadow-lg"
                    >
                        <span>Start Ordering Now</span>
                        <ArrowRight size={24} />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
