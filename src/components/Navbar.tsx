import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                {/* Floating Island Container */}
                <nav className={`
            flex items-center justify-between pl-6 pr-2 py-2.5 rounded-full transition-all duration-300
            ${scrolled
                        ? 'bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl w-full max-w-5xl'
                        : 'bg-white/90 backdrop-blur-lg border border-gray-100 shadow-lg w-full max-w-4xl'}
        `}>

                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2 group">
                        <span className="font-heading font-bold text-lg tracking-tight text-gray-900 group-hover:opacity-70 transition-opacity">
                            Munchezz
                        </span>
                    </a>

                    {/* Desktop Links - Centered */}
                    <div className="hidden md:flex items-center gap-1">
                        <a href="/#categories" className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100/50 rounded-full transition-all">Categories</a>
                        <a href="/#how-it-works" className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100/50 rounded-full transition-all">How it Works</a>
                        <a href="/#about" className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100/50 rounded-full transition-all">About</a>
                        <a href="/#contact" className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100/50 rounded-full transition-all">Contact</a>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center gap-2">
                        <a
                            href="#"
                            className="hidden md:flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
                        >
                            Log in
                        </a>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2.5 rounded-full hover:bg-gray-100 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-32 px-6">
                    <div className="flex flex-col gap-6 text-center">
                        {['Categories', 'How it Works', 'About', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="text-2xl font-heading font-semibold text-gray-900"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="mt-12">
                        <a href="/#app-download" className="btn btn-primary w-full py-4 text-lg rounded-xl" onClick={() => setMobileMenuOpen(false)}>
                            Get the App
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
