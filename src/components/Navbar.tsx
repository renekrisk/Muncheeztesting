import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Hide navbar on auth-related pages
    const authPaths = [
        '/login',
        '/signup',
        '/partner/login',
        '/partner/signup',
        '/courier/login',
        '/courier/signup'
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (authPaths.includes(location.pathname)) {
        return null;
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`
                    fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[0.16, 1, 0.3, 1]
                    ${scrolled
                        ? 'py-4 bg-white/[0.08] backdrop-blur-3xl border-b border-white/5 shadow-2xl'
                        : 'py-8 bg-transparent'}
                `}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
                    {/* Left: Hamburger (Mobile) + Brand */}
                    <div className="flex items-center gap-4">
                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden text-white/70 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                        </button>

                        {/* Brand */}
                        <Link to="/" className="hidden md:flex items-center gap-2 group">
                            <span className="font-heading font-bold text-lg md:text-2xl tracking-tighter text-white">
                                Munchezz<span className="text-[#4A90E2]">.</span>
                            </span>
                        </Link>
                    </div>

                    {/* Center: Editorial Navigation (Desktop Only) */}
                    <div className="hidden md:flex items-center gap-12">
                        {[
                            { name: 'COLLECTIONS', href: '/#categories' },
                            { name: 'OUR STORY', href: '/legal/about-us' },
                            { name: 'KULA FITI', href: '/#app-download' },
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="relative text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors py-2 group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#4A90E2] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                            </a>
                        ))}
                    </div>

                    {/* Right: Login (Desktop & Mobile) */}
                    <div className="flex items-center gap-8">
                        {/* Desktop Login */}
                        <Link
                            to="/login"
                            className={`
                                hidden md:flex items-center justify-center px-10 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-500
                                ${scrolled
                                    ? 'bg-white text-black hover:bg-[#4A90E2] hover:text-white'
                                    : 'bg-white/5 text-white hover:bg-white hover:text-black border border-white/10 hover:border-transparent'}
                            `}
                        >
                            Login
                        </Link>

                        {/* Mobile Login */}
                        <Link
                            to="/login"
                            className="md:hidden text-xs font-bold uppercase tracking-widest text-white hover:text-[#4A90E2] transition-colors"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </motion.nav>

            {/* High-End Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-3xl pt-40 px-12 flex flex-col justify-between pb-32"
                    >
                        {/* Mobile Menu Logo */}
                        <Link
                            to="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-8 left-8 flex items-center gap-2 group"
                        >
                            <span className="font-heading font-bold text-2xl tracking-tighter text-white">
                                Munchezz<span className="text-[#4A90E2]">.</span>
                            </span>
                        </Link>

                        {/* Close Button */}
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-8 right-8 p-4 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>
                        <div className="flex flex-col gap-10">
                            {[
                                { name: 'COLLECTIONS', href: '/#categories' },
                                { name: 'OUR STORY', href: '/legal/about-us' },
                                { name: 'OUR TEAM', href: '/legal/our-team' },
                                { name: 'KULA FITI', href: '/#app-download' },
                            ].map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 + (i * 0.08) }}
                                    href={item.href}
                                    className="text-4xl font-heading font-extralight tracking-tight text-white hover:text-[#4A90E2] transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <Link
                                to="/login"
                                className="py-6 text-center text-[10px] font-bold uppercase tracking-[0.5em] bg-white text-black rounded-full"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="py-6 text-center text-[10px] font-bold uppercase tracking-[0.5em] border border-white/10 text-white rounded-full"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Join the Fam
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
