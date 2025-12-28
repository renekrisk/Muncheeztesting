import { Instagram, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';


export default function Footer() {
    return (
        <footer className="bg-black pt-20 pb-10 text-white" id="contact">
            <div className="container">

                {/* Newsletter */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20 border-b border-gray-900 pb-20">
                    <div className="max-w-xl">
                        <h3 className="text-3xl font-heading font-bold mb-4">Stay in the loop.</h3>
                        <p className="text-gray-400">Get exclusive deals, new restaurant partnerships, and delivery updates delivered to your inbox.</p>
                    </div>
                    <div className="w-full md:w-auto">
                        <form className="flex w-full md:w-96">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:border-gray-700 transition-colors placeholder:text-gray-600"
                            />
                            <button className="bg-white text-black font-bold px-6 py-3 rounded-r-lg hover:bg-gray-200 transition-colors">
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-20">

                    {/* Identity */}
                    <div className="col-span-2 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-6">
                            <span className="font-heading font-extrabold text-xl tracking-tighter text-white">
                                Munchezz<span className="text-[var(--primary)]">.</span>
                            </span>
                        </a>
                        <p className="text-xs text-gray-500 leading-relaxed mb-6 max-w-[200px]">
                            Premium delivery from restaurants, supermarkets, and pharmacies. Everything you need, delivered fast.
                        </p>
                        <div className="flex gap-3">
                            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Services</h4>
                        <ul className="space-y-3">
                            {['Restaurants', 'Groceries', 'Pharmacy', 'Healthy & Fresh', 'Comfort Classics', 'Sweet Treats'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Company</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Careers', 'Blog', 'Press', 'Partner With Us', 'Join as Rider'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Support</h4>
                        <ul className="space-y-3">
                            {['Help Center', 'Contact Us', 'Track Order', 'FAQs', 'Terms of Service', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Download */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Get the App</h4>
                        <ul className="space-y-4">
                            <li>
                                <div className="text-sm text-gray-400">
                                    <p className="text-white font-medium mb-2">Download the app</p>
                                    <div className="flex flex-col gap-2">
                                        <a href="#" className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                                            <span className="text-xs">📱 App Store</span>
                                        </a>
                                        <a href="#" className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                                            <span className="text-xs">🤖 Google Play</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="text-sm text-gray-400 mt-6">
                                    <p className="text-white font-medium mb-2">Follow Us</p>
                                    <p className="text-xs">@munchezz</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>© 2025 Munchezz. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400">Terms of Service</a>
                        <a href="#" className="hover:text-gray-400">Cookie Settings</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
