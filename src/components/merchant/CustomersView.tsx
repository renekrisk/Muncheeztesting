import {
    Search,
    Star,
    AlertTriangle,
    MessageSquare,
    History,
    MoreHorizontal,
    Phone,
    MapPin,
    ShieldAlert
} from 'lucide-react';

export default function CustomersView() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-6">
                <div>
                    <h2 className="text-4xl font-heading font-light tracking-tight text-black">Clientele<span className="text-[#D4AF37]">.</span></h2>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">CRM & Relationships</p>
                </div>

                {/* Search Toolbar - Industrial Style */}
                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <Search size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#D4AF37] transition-colors" />
                        <input
                            type="text"
                            placeholder="SEARCH PHONE / NAME..."
                            className="w-64 pl-8 pr-4 py-2 bg-transparent border-b border-gray-200 text-sm font-mono focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 uppercase tracking-wider"
                        />
                    </div>
                </div>
            </div>

            {/* Customers Grid */}
            <div className="grid grid-cols-1 gap-4">
                {/* Header Row */}
                <div className="grid grid-cols-12 gap-4 px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <div className="col-span-4">Customer Profile</div>
                    <div className="col-span-2">Status / Tier</div>
                    <div className="col-span-3">Delivery Notes</div>
                    <div className="col-span-2 text-right">Lifetime Value</div>
                    <div className="col-span-1"></div>
                </div>

                {/* 1. VIP / Frequent Buyer */}
                <div className="bg-white border-l-4 border-[#D4AF37] shadow-sm p-6 grid grid-cols-12 gap-4 items-center group hover:bg-gray-50 transition-colors">
                    <div className="col-span-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-black text-[#D4AF37] flex items-center justify-center font-bold font-heading text-lg">
                                KO
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Kevin Omondi</h3>
                                <div className="flex items-center gap-2 text-xs text-gray-500 font-mono mt-1">
                                    <Phone size={12} /> 0722 *** 456
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest border border-[#D4AF37]/20">
                            <Star size={10} fill="currentColor" /> Top Tier
                        </span>
                        <div className="text-[10px] text-gray-400 mt-1 font-mono">24 Orders</div>
                    </div>

                    <div className="col-span-3">
                        <div className="flex items-start gap-2 text-xs text-gray-600 bg-gray-50 p-2 rounded border border-gray-100 italic">
                            <MapPin size={12} className="shrink-0 mt-0.5 text-gray-400" />
                            "Gate B, call me to open. Don't honk."
                        </div>
                    </div>

                    <div className="col-span-2 text-right">
                        <div className="font-mono font-bold text-gray-900">KES 45,200</div>
                        <div className="text-[10px] text-gray-400">Last: 2 days ago</div>
                    </div>

                    <div className="col-span-1 flex justify-end">
                        <button className="p-2 text-gray-300 hover:text-black transition-colors"><MoreHorizontal size={16} /></button>
                    </div>
                </div>

                {/* 2. Flagged User (Fraud/Abuse) */}
                <div className="bg-white border-l-4 border-red-500 shadow-sm p-6 grid grid-cols-12 gap-4 items-center group hover:bg-gray-50 transition-colors">
                    <div className="col-span-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold font-heading text-lg">
                                !
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                    Brian K.
                                    <ShieldAlert size={14} className="text-red-500" />
                                </h3>
                                <div className="flex items-center gap-2 text-xs text-gray-500 font-mono mt-1">
                                    <Phone size={12} /> 0733 *** 999
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest border border-red-100">
                            <AlertTriangle size={10} /> Flagged
                        </span>
                        <div className="text-[10px] text-red-400 mt-1 font-medium">Payment Disputes</div>
                    </div>

                    <div className="col-span-3">
                        <div className="flex items-start gap-2 text-xs text-red-700 bg-red-50 p-2 rounded border border-red-100 font-medium">
                            <ShieldAlert size={12} className="shrink-0 mt-0.5" />
                            WARNING: Claims items missing frequently. Verify order before dispatch.
                        </div>
                    </div>

                    <div className="col-span-2 text-right">
                        <div className="font-mono font-bold text-gray-900">KES 2,400</div>
                        <div className="text-[10px] text-gray-400">Last: 3 months ago</div>
                    </div>

                    <div className="col-span-1 flex justify-end">
                        <button className="p-2 text-gray-300 hover:text-black transition-colors"><MoreHorizontal size={16} /></button>
                    </div>
                </div>

                {/* 3. Regular Customer */}
                <div className="bg-white border-l-4 border-gray-200 shadow-sm p-6 grid grid-cols-12 gap-4 items-center group hover:bg-gray-50 transition-colors">
                    <div className="col-span-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center font-bold font-heading text-lg">
                                SM
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Sarah Mwenje</h3>
                                <div className="flex items-center gap-2 text-xs text-gray-500 font-mono mt-1">
                                    <Phone size={12} /> 0711 *** 222
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                            Standard
                        </span>
                        <div className="text-[10px] text-gray-400 mt-1 font-mono">3 Orders</div>
                    </div>

                    <div className="col-span-3">
                        <div className="text-xs text-gray-400 italic">No specific notes.</div>
                    </div>

                    <div className="col-span-2 text-right">
                        <div className="font-mono font-bold text-gray-900">KES 5,800</div>
                        <div className="text-[10px] text-gray-400">Last: 1 week ago</div>
                    </div>

                    <div className="col-span-1 flex justify-end">
                        <button className="p-2 text-gray-300 hover:text-black transition-colors"><MoreHorizontal size={16} /></button>
                    </div>
                </div>

            </div>
        </div>
    );
}
