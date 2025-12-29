import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface WelcomeScreenProps {
    onComplete: () => void;
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Total duration of the welcome sequence before triggering completion
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800); // Wait for exit animation
        }, 3500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                >
                    <div className="relative z-10 text-center">
                        <div className="overflow-hidden mb-4">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                className="text-6xl md:text-8xl font-heading font-bold tracking-tighter text-white"
                            >
                                Munchezz<span className="text-[#4A90E2]">.</span>
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                                className="text-sm md:text-base font-medium text-white/40 uppercase tracking-[0.5em]"
                            >
                                The 254 Selection
                            </motion.p>
                        </div>
                    </div>

                    {/* Subtle Background Effects */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 2 }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
