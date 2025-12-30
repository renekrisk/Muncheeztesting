import { motion } from 'framer-motion';
import { User, ArrowRight, Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourierSignup() {
    return (
        <div className="min-h-screen bg-[#F7FDFB] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Dynamic Path Motif */}
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] border-[1px] border-[#00A082]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] border-[1px] border-[#00A082]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00A082] mb-8 hover:opacity-70 transition-all group mx-auto w-fit"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Selection
                </Link>
                <Link to="/" className="flex justify-center mb-12 group transition-all">
                    <span className="font-heading font-bold text-3xl tracking-tighter text-gray-900 group-hover:text-[#00A082]">
                        Muncheez<span className="text-[#00A082]">.</span>
                    </span>
                </Link>
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-heading font-light text-gray-900 tracking-tight">
                        Freedom in Miles.
                    </h2>
                    <p className="text-sm text-gray-500 font-light italic">
                        "Earn on your terms. Fuel your own journey."
                    </p>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-12 sm:mx-auto sm:w-full sm:max-w-md relative z-10"
            >
                <div className="bg-white py-12 px-8 shadow-[0_48px_96px_-32px_rgba(0,160,130,0.15)] border border-[#00A082]/10 sm:rounded-[2.5rem] sm:px-12 ring-1 ring-black/5">
                    <form className="space-y-8">
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#00A082] mb-3">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none text-gray-400">
                                    <User size={16} />
                                </div>
                                <input
                                    type="text"
                                    required
                                    className="block w-full px-6 py-3 border-b border-gray-100 bg-transparent text-gray-900 focus:outline-none focus:border-[#00A082] sm:text-sm transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#00A082] mb-3">
                                Phone Number
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none text-gray-400">
                                    <Phone size={16} />
                                </div>
                                <input
                                    type="tel"
                                    required
                                    className="block w-full px-6 py-3 border-b border-gray-100 bg-transparent text-gray-900 focus:outline-none focus:border-[#00A082] sm:text-sm transition-all"
                                    placeholder="+254..."
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="group w-full flex justify-between items-center py-5 px-8 rounded-2xl text-sm font-bold text-white bg-gray-900 hover:bg-[#00A082] transition-all duration-500 uppercase tracking-widest shadow-xl shadow-gray-100"
                        >
                            Apply to Ride
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <Link to="/courier/login" className="text-xs font-bold text-[#00A082] uppercase tracking-widest hover:underline">
                            Already Rider? Start Shift
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
