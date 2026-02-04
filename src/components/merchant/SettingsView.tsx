import {
    Save,
    MapPin,
    Clock,
    Smartphone,
    CreditCard,
    Users,
    Shield,
    ToggleLeft,
    ToggleRight,
    Building2,
    Plus
} from 'lucide-react';

export default function SettingsView() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-6">
                <div>
                    <h2 className="text-4xl font-heading font-light tracking-tight text-black">Configuration<span className="text-[#D4AF37]">.</span></h2>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">System & Business Settings</p>
                </div>

                <button className="flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-[#D4AF37] hover:text-black transition-colors text-[10px] font-bold uppercase tracking-widest">
                    <Save size={14} /> Save Changes
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN: Business & Operations */}
                <div className="lg:col-span-2 space-y-8">

                    {/* 1. Business Profile */}
                    <div className="bg-white border border-gray-200 p-8 rounded-2xl">
                        <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
                            <Building2 size={20} className="text-[#D4AF37]" /> Business Details
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Business Name</label>
                                <input type="text" defaultValue="Westlands Branch" className="w-full p-2 border-b border-gray-200 focus:border-black outline-none font-medium" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Location</label>
                                <div className="flex items-center gap-2 border-b border-gray-200">
                                    <MapPin size={16} className="text-gray-400" />
                                    <input type="text" defaultValue="Muthithi Rd, Westlands, Nairobi" className="w-full p-2 outline-none font-medium" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Operating Hours</label>
                                <div className="flex items-center gap-2 border-b border-gray-200">
                                    <Clock size={16} className="text-gray-400" />
                                    <input type="text" defaultValue="08:00 AM - 10:00 PM" className="w-full p-2 outline-none font-medium" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Delivery Radius (KM)</label>
                                <input type="number" defaultValue="5" className="w-full p-2 border-b border-gray-200 focus:border-black outline-none font-medium" />
                            </div>
                        </div>
                    </div>

                    {/* 2. Staff Management */}
                    <div className="bg-white border border-gray-200 p-8 rounded-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-heading font-bold text-xl flex items-center gap-2">
                                <Users size={20} className="text-[#D4AF37]" /> Staff Access
                            </h3>
                            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-[#D4AF37]">
                                <Plus size={14} /> Add User
                            </button>
                        </div>

                        <div className="space-y-4">
                            {[
                                { name: 'Julius Kamau', role: 'Owner / Admin', email: 'j.kamau@gmail.com', active: true },
                                { name: 'Sarah Njoroge', role: 'Store Manager', email: 'sarah.n@munchezz.co.ke', active: true },
                                { name: 'Kevin O.', role: 'Cashier', email: 'kevin.o@munchezz.co.ke', active: false },
                            ].map((staff, i) => (
                                <div key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:border-black transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400 group-hover:bg-black group-hover:text-white transition-colors">
                                            {staff.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 text-sm">{staff.name}</div>
                                            <div className="text-xs text-gray-500">{staff.role} • {staff.email}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Status</span>
                                            {staff.active ?
                                                <span className="text-xs font-bold text-green-600">Active</span> :
                                                <span className="text-xs font-bold text-gray-400">Inactive</span>
                                            }
                                        </div>
                                        <button className="p-2 text-gray-300 hover:text-black"><Shield size={16} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: Payments & Integrations */}
                <div className="space-y-8">

                    {/* Payments */}
                    <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl">
                        <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
                            <CreditCard size={20} className="text-[#D4AF37]" /> Payment Channels
                        </h3>

                        <div className="space-y-6">
                            <div className="p-4 bg-white border border-gray-200 rounded-xl">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <Smartphone size={18} className="text-green-600" />
                                        <span className="font-bold text-sm">M-PESA Till</span>
                                    </div>
                                    <ToggleRight size={24} className="text-green-500" />
                                </div>
                                <div className="text-xs text-gray-500 mb-2">Till Number</div>
                                <div className="font-mono font-bold text-lg">882292</div>
                                <div className="text-[10px] text-gray-400 mt-2">Settlement: Real-time</div>
                            </div>

                            <div className="p-4 bg-white border border-gray-200 rounded-xl opacity-75">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-2">
                                        <Building2 size={18} className="text-gray-400" />
                                        <span className="font-bold text-sm text-gray-500">Bank Settlement</span>
                                    </div>
                                    <ToggleLeft size={24} className="text-gray-300" />
                                </div>
                                <div className="text-xs text-gray-500 mb-2">Account Number</div>
                                <div className="font-mono font-bold text-lg text-gray-400">**** **** 8821</div>
                            </div>
                        </div>
                    </div>

                    {/* Integrations Placeholder */}
                    <div className="bg-black text-white p-6 rounded-2xl">
                        <h4 className="font-bold text-[#D4AF37] uppercase tracking-widest text-xs mb-2">Coming Soon</h4>
                        <h3 className="text-xl font-heading font-bold mb-2">POS Integrations</h3>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Seamlessly connect with Lightspeed, Square, and other major POS systems to sync inventory automatically.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
