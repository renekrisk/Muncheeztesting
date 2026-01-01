import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ComingSoon() {
    const EASE = [0.16, 1, 0.3, 1] as const;
    const navigate = useNavigate();

    return (
        <section className="relative h-screen supports-[height:100dvh]:h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
            {/* Noise Texture */}
            <div className="absolute inset-0 z-[5] opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            {/* Content - Centered */}
            <div className="relative z-20 px-8 flex flex-col items-center text-center max-w-4xl">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: EASE }}
                    className="text-[10px] font-bold text-white/30 uppercase tracking-[0.6em] mb-12"
                >
                    Under Development
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: EASE }}
                    className="text-5xl md:text-8xl lg:text-9xl font-heading font-extralight text-white tracking-tighter mb-8"
                >
                    Coming Soon
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: EASE }}
                    className="text-base md:text-lg text-white/60 font-light max-w-xl mb-12"
                >
                    We're cooking up something special for the 254.
                </motion.p>

                <motion.button
                    onClick={() => navigate(-1)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9, ease: EASE }}
                    className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#4A90E2] hover:text-white transition-colors cursor-pointer"
                >
                    Go Back
                </motion.button>
            </div>
        </section>
    );
}
