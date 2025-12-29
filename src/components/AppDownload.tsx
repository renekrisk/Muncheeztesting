import { motion } from 'framer-motion';
import appStoreIcon from '../assets/app-store-icon.png';
import googlePlayIcon from '../assets/google-play-icon.png';

export default function AppDownload() {
    return (
        <section className="relative py-24 lg:py-32 bg-[#00A082] text-white overflow-hidden" id="app-download">

            {/* Editorial Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay grayscale">
                <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container relative z-20 px-8 lg:px-20">
                <div className="max-w-4xl flex flex-col md:flex-row items-center justify-between gap-16">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/60 block">Experience Glovo</span>
                        <h2 className="text-5xl md:text-6xl font-heading font-light text-white leading-[1.1] tracking-tight">
                            The world at your <br />
                            <span className="text-white/30 italic text-6xl">fingertips.</span>
                        </h2>
                        <p className="text-xl text-white/70 font-light leading-relaxed max-w-md">
                            Download our premium application and experience the seamless integration of choice and delivery.
                        </p>
                    </motion.div>

                    {/* App Icons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="flex gap-8 items-center"
                    >
                        <a href="#" className="transition-all duration-500 hover:scale-110 hover:-translate-y-1">
                            <img src={appStoreIcon} alt="App Store" className="w-16 h-16 shadow-2xl rounded-2xl" />
                        </a>
                        <a href="#" className="transition-all duration-500 hover:scale-110 hover:-translate-y-1">
                            <img src={googlePlayIcon} alt="Google Play" className="w-16 h-16 shadow-2xl rounded-2xl" />
                        </a>
                    </motion.div>

                </div>
            </div>

            {/* Bottom Curve (Transition to Footer) */}
            <div className="absolute bottom-[-1px] left-0 w-full leading-[0] z-10">
                <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-[60px] block" preserveAspectRatio="none">
                    <path fill="#000000" fillOpacity="1" d="M0,80L48,71C96,62,192,45,288,47C384,49,480,70,576,73C672,77,768,63,864,58C960,53,1056,57,1152,62C1248,67,1344,75,1392,78L1440,82L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
                </svg>
            </div>
        </section>
    );
}
