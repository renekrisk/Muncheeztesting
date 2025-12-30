import { Instagram, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import appStoreIcon from '../assets/app-store-icon.png';
import googlePlayIcon from '../assets/google-play-icon.png';


export default function Footer() {
    return (
        <footer className="bg-black pt-20 pb-10 text-white" id="contact">
            <div className="container">

                {/* Newsletter - Soulful Update */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24 border-b border-white/5 pb-24">
                    <div className="max-w-xl">
                        <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-4 block">Newsletter</span>
                        <h3 className="text-4xl md:text-5xl font-heading font-light mb-6 tracking-tight">Join the Fam<span className="text-[#4A90E2]">.</span></h3>
                        <p className="text-white/40 font-light leading-relaxed max-w-sm">
                            Get the 254 scoop: exclusive deals, city favorites, and the soul of Nairobi delivered to your inbox.
                        </p>
                    </div>
                    <div className="w-full lg:w-auto">
                        <form className="flex w-full md:w-96 relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-white/5 border border-white/10 text-white px-6 py-4 rounded-2xl w-full focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all placeholder:text-white/20 text-sm"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black font-bold p-2.5 rounded-xl hover:bg-[#D4AF37] transition-colors">
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-16 lg:gap-12 mb-24">

                    {/* Identity - Mobile Centered Branding */}
                    <div className="col-span-1 md:col-span-1 border-b border-white/5 pb-12 md:border-none md:pb-0">
                        <a href="#" className="flex items-center gap-2 mb-8">
                            <span className="font-heading font-extrabold text-2xl tracking-tighter text-white">
                                Munchezz<span className="text-[#4A90E2]">.</span>
                            </span>
                        </a>
                        <p className="text-white/40 text-[11px] uppercase tracking-widest leading-loose mb-8">
                            Built for the 254. Bringing Nairobi’s favorite kitchens straight to your door.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-white hover:text-black transition-all border border-white/10">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] mb-8">The Selection</h4>
                        <ul className="space-y-4">
                            {['The Kitchens', 'The Pantry', '254 Gems', 'The Oven', 'Home Favs', 'Sweet Fixes'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-white/40 hover:text-white transition-colors font-light tracking-wide">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] mb-8">Company</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', slug: 'about-us' },
                                { name: 'Our Team', slug: 'our-team' },
                                { name: 'Careers', slug: 'careers' },
                                { name: 'Partner With Us', href: '/partner/login' },
                                { name: 'Join as Rider', href: '/courier/login' }
                            ].map((item) => (
                                <li key={item.name}>
                                    {item.slug ? (
                                        <Link to={`/legal/${item.slug}`} className="text-sm text-white/40 hover:text-white transition-colors font-light tracking-wide">{item.name}</Link>
                                    ) : (
                                        <Link to={item.href || '#'} className="text-sm text-white/40 hover:text-white transition-colors font-light tracking-wide">{item.name}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] mb-8">Support</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Help Center', slug: 'help-center' },
                                { name: 'Contact Us', slug: 'contact-us' },
                                { name: 'FAQs', slug: 'faq' },
                                { name: 'Terms of Service', slug: 'terms-of-service' },
                                { name: 'Privacy Policy', slug: 'privacy-policy' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={`/legal/${item.slug}`} className="text-sm text-white/40 hover:text-white transition-colors font-light tracking-wide">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Download */}
                    <div>
                        <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] mb-8">Get the App</h4>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-4 rounded-2xl hover:bg-[#4A90E2] hover:border-[#4A90E2] transition-all group overflow-hidden">
                                <img src={appStoreIcon} alt="App Store" className="w-10 h-10 rounded-lg shrink-0 object-contain invert opacity-50 group-hover:opacity-100 transition-opacity" />
                                <div className="flex flex-col">
                                    <span className="text-[8px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">Download on</span>
                                    <span className="text-xs font-bold font-heading text-white">App Store</span>
                                </div>
                            </a>
                            <a href="#" className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-4 rounded-2xl hover:bg-[#00A082] hover:border-[#00A082] transition-all group overflow-hidden">
                                <img src={googlePlayIcon} alt="Google Play" className="w-10 h-10 rounded-lg shrink-0 object-contain opacity-50 group-hover:opacity-100 transition-opacity" />
                                <div className="flex flex-col">
                                    <span className="text-[8px] font-bold uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">Get it on</span>
                                    <span className="text-xs font-bold font-heading text-white">Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/20">
                    <p>© 2025 Munchezz. Built for Nairobi.</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <Link to="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/legal/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                        <button className="hover:text-white transition-colors">Cookie Settings</button>
                    </div>
                </div>

            </div>
        </footer>
    );
}
