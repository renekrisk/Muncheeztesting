
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, HelpCircle, LogOut, Share2, FileText, X } from 'lucide-react';

interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="relative w-full max-w-sm bg-[#F9F9F9] rounded-3xl overflow-hidden shadow-2xl border border-white/50"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors z-10"
                        >
                            <X size={16} className="text-black/50" />
                        </button>

                        <div className="p-6 flex flex-col items-center pt-8">
                            {/* Avatar Section */}
                            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F2D785] p-0.5 mb-4 shadow-lg">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                    <span className="text-2xl font-black text-[#D4AF37]">K</span>
                                </div>
                            </div>

                            <h2 className="text-xl font-bold text-[#1a1a1a] mb-1">KrisK Campus</h2>
                            <div className="px-3 py-1 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20 mb-8">
                                <span className="text-[10px] font-bold text-[#D4AF37] tracking-widest uppercase">Muncheez Gold</span>
                            </div>

                            {/* Main Actions Grid */}
                            <div className="grid grid-cols-2 gap-3 w-full mb-6">
                                <button className="flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-2xl shadow-sm border border-black/5 hover:border-[#D4AF37]/30 hover:shadow-md transition-all group">
                                    <div className="p-2 rounded-full bg-black/5 group-hover:bg-[#D4AF37]/10 transition-colors">
                                        <FileText size={20} className="text-black/60 group-hover:text-[#D4AF37]" />
                                    </div>
                                    <span className="text-xs font-bold text-black/70">My Orders</span>
                                </button>
                                <button className="flex flex-col items-center justify-center gap-2 bg-white p-4 rounded-2xl shadow-sm border border-black/5 hover:border-[#D4AF37]/30 hover:shadow-md transition-all group">
                                    <div className="p-2 rounded-full bg-black/5 group-hover:bg-[#D4AF37]/10 transition-colors">
                                        <User size={20} className="text-black/60 group-hover:text-[#D4AF37]" />
                                    </div>
                                    <span className="text-xs font-bold text-black/70">My Account</span>
                                </button>
                            </div>

                            {/* Secondary Actions */}
                            <div className="w-full flex flex-col gap-1">
                                <button className="flex items-center gap-4 w-full p-3 rounded-xl hover:bg-white transition-colors group">
                                    <Share2 size={18} className="text-black/40 group-hover:text-black/80" />
                                    <span className="text-sm font-medium text-black/60 group-hover:text-black/80">Share Muncheez</span>
                                </button>
                                <button className="flex items-center gap-4 w-full p-3 rounded-xl hover:bg-white transition-colors group">
                                    <HelpCircle size={18} className="text-black/40 group-hover:text-black/80" />
                                    <span className="text-sm font-medium text-black/60 group-hover:text-black/80">Help & Support</span>
                                </button>
                                <div className="h-px w-full bg-black/5 my-1" />
                                <button className="flex items-center gap-4 w-full p-3 rounded-xl hover:bg-red-50 transition-colors group">
                                    <LogOut size={18} className="text-black/40 group-hover:text-red-500" />
                                    <span className="text-sm font-medium text-black/60 group-hover:text-red-600">Log Out</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProfileModal;
