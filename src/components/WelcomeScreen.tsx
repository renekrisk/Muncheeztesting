import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface WelcomeScreenProps {
    onComplete: () => void;
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 1000);
        }, 4000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    const EASE = [0.16, 1, 0.3, 1] as const;

    const letterVariants = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 1, ease: EASE } }
    };

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden h-[100dvh]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
                >
                    <div className="relative z-10 text-center px-4 w-full">
                        <motion.div
                            className="overflow-hidden flex items-center justify-center gap-0.5 md:gap-3 mb-8 md:mb-6"
                            variants={containerVariants}
                            initial="initial"
                            animate="animate"
                        >
                            {['M', 'u', 'n', 'c', 'h', 'e', 'z', 'z'].map((letter, i) => (
                                <motion.span
                                    key={i}
                                    variants={letterVariants}
                                    className="text-[18vw] md:text-9xl font-heading font-bold tracking-tighter text-white inline-block lowercase"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            <motion.span
                                variants={letterVariants}
                                className="text-[18vw] md:text-9xl font-heading font-bold tracking-tighter text-[#4A90E2] inline-block"
                            >
                                .
                            </motion.span>
                        </motion.div>

                        <div className="overflow-hidden h-16 md:h-16 flex items-center justify-center">
                            <motion.p
                                initial={{ y: "150%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
                                className="text-[10px] md:text-sm font-medium text-white/50 uppercase tracking-[0.5em] md:tracking-[0.8em]"
                            >
                                The 254 Selection
                            </motion.p>
                        </div>
                    </div>

                    {/* Minimalist Loading Bar */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 3.5, ease: "easeInOut" }}
                        className="absolute bottom-0 left-0 h-1.5 md:h-1 bg-[#4A90E2] w-full origin-left"
                    />

                    {/* Cinematic Grain/Texture Overlay */}
                    <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                    {/* Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#4A90E2] rounded-full blur-[80px] md:blur-[120px] opacity-10 pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
