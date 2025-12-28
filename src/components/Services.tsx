export default function Services() {
    return (
        <section className="py-24 bg-[#4A90E2] text-white" id="about">
            <div className="container">

                {/* Header */}
                <div className="max-w-2xl mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-[#FFC244] mb-4">Our Services</h2>
                    <h3 className="text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
                        Everything you need,<br />delivered to your door.
                    </h3>
                    <p className="text-xl text-white/90">
                        From your favorite meals to daily essentials and health products.
                    </p>
                </div>

                {/* Clean Grid - 3 Equal Columns */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">

                    {/* Restaurants */}
                    <a href="#categories" className="group relative rounded-2xl overflow-hidden h-[450px] block">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                            alt="Restaurant dining"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <h4 className="text-3xl font-heading font-bold text-white mb-3">Restaurants</h4>
                            <p className="text-white/90 mb-6 leading-relaxed">
                                Hot meals from local favorites to premium dining.
                            </p>
                            <div className="inline-flex items-center text-white font-bold group-hover:gap-3 gap-2 transition-all">
                                <span>Explore</span>
                                <span className="text-xl">→</span>
                            </div>
                        </div>
                    </a>

                    {/* Groceries */}
                    <a href="#categories" className="group relative rounded-2xl overflow-hidden h-[450px] block">
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop"
                            alt="Fresh groceries"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <h4 className="text-3xl font-heading font-bold text-white mb-3">Groceries</h4>
                            <p className="text-white/90 mb-6 leading-relaxed">
                                Fresh essentials from supermarkets and stores.
                            </p>
                            <div className="inline-flex items-center text-white font-bold group-hover:gap-3 gap-2 transition-all">
                                <span>Explore</span>
                                <span className="text-xl">→</span>
                            </div>
                        </div>
                    </a>

                    {/* Pharmacy */}
                    <a href="#categories" className="group relative rounded-2xl overflow-hidden h-[450px] block">
                        <img
                            src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop"
                            alt="Pharmacy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <h4 className="text-3xl font-heading font-bold text-white mb-3">Pharmacy</h4>
                            <p className="text-white/90 mb-6 leading-relaxed">
                                Health and wellness products delivered fast.
                            </p>
                            <div className="inline-flex items-center text-white font-bold group-hover:gap-3 gap-2 transition-all">
                                <span>Explore</span>
                                <span className="text-xl">→</span>
                            </div>
                        </div>
                    </a>

                </div>


                {/* Mission Statement */}
                <div className="max-w-3xl mx-auto text-center border-t border-gray-200 pt-12">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We bridge the gap between businesses of all sizes and customers — reducing wait times, fostering healthy competition, and creating employment through delivery.
                    </p>
                </div>

            </div>
        </section>
    );
}
