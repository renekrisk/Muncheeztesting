import { motion } from 'framer-motion';
import { Mail, ArrowRight, Store, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PartnerSignup() {
    return (
        <div className="min-h-screen bg-[#FDFBF7] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Architectural Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-8 hover:opacity-70 transition-all group mx-auto w-fit"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Selection
                </Link>
                <Link to="/" className="flex justify-center mb-12 group transition-all">
                    <span className="font-heading font-bold text-3xl tracking-tighter text-gray-900 group-hover:text-[#D4AF37]">
                        Munchezz<span className="text-[#D4AF37]">.</span>
                    </span>
                </Link>
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-heading font-light text-gray-900 tracking-tight">
                        Grow Your Legacy.
                    </h2>
                    <p className="text-sm text-gray-500 font-light italic">
                        "Your craft, our platform, Nairobi's doorstep."
                    </p>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-12 sm:mx-auto sm:w-full sm:max-w-md relative z-10"
            >
                <div className="bg-white py-12 px-8 shadow-[0_48px_96px_-32px_rgba(212,175,55,0.15)] border border-[#D4AF37]/10 sm:rounded-[2.5rem] sm:px-12 ring-1 ring-black/5">
                    <form className="space-y-8">
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
                                Business Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none text-gray-400">
                                    <Store size={16} />
                                </div>
                                <input
                                    type="text"
                                    required
                                    className="block w-full px-6 py-3 border-b border-gray-100 bg-transparent text-gray-900 focus:outline-none focus:border-[#D4AF37] sm:text-sm transition-all"
                                    placeholder="e.g., Mama’s Kitchen"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
                                Business Email
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none text-gray-400">
                                    <Mail size={16} />
                                </div>
                                <input
                                    type="email"
                                    required
                                    className="block w-full px-6 py-3 border-b border-gray-100 bg-transparent text-gray-900 focus:outline-none focus:border-[#D4AF37] sm:text-sm transition-all"
                                    placeholder="business@legacy.com"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="group w-full flex justify-between items-center py-5 px-8 rounded-2xl text-sm font-bold text-white bg-gray-900 hover:bg-[#D4AF37] transition-all duration-500 uppercase tracking-widest shadow-xl shadow-gray-100"
                        >
                            Apply for Partnership
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <Link to="/partner/login" className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest hover:underline">
                            Already a Partner? Sign in
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
