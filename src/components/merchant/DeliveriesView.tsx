import {
    Bike,
    Phone,
    AlertTriangle,
    RefreshCw
} from 'lucide-react';

export default function DeliveriesView() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-6">
                <div>
                    <h2 className="text-4xl font-heading font-light tracking-tight text-black">Logistics<span className="text-[#D4AF37]">.</span></h2>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">Live Delivery Tracking</p>
                </div>

                <div className="flex gap-4">
                    <div className="bg-black text-white px-4 py-2 rounded flex items-center gap-3">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest">3 Active Riders</span>
                    </div>
                </div>
            </div>

            {/* LIVE DELIVERIES GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* CARD 1: Active / On Track */}
                <div className="bg-white border border-gray-200 p-6 relative group overflow-hidden">
                    {/* Status Stripe */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />

                    <div className="flex justify-between items-start mb-6 pl-4">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 mb-1 block">In Transit</span>
                            <h3 className="text-2xl font-heading font-bold text-gray-900">Order #8823</h3>
                        </div>
                        <div className="text-right">
                            <span className="block text-4xl font-heading font-light text-gray-900">08<span className="text-sm font-bold text-gray-400 ml-1">MIN</span></span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">ETA To Customer</span>
                        </div>
                    </div>

                    <div className="pl-4 space-y-6">
                        {/* Rider Info */}
                        <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                <Bike size={24} className="text-gray-500" />
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-gray-900">Kevin Mwangi</div>
                                <div className="text-xs text-gray-500 font-mono">Motorbike • KME 456J</div>
                            </div>
                            <button className="p-3 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-colors">
                                <Phone size={16} />
                            </button>
                        </div>

                        {/* Route Info */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="flex flex-col items-center gap-1 mt-1">
                                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                                    <div className="w-0.5 h-8 bg-gray-200" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Pickup</p>
                                    <p className="text-sm font-medium text-gray-900">Westlands Branch</p>
                                    <p className="text-xs text-green-600 font-mono mt-0.5">12:30 PM • COMPLETED</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex flex-col items-center gap-1 mt-1">
                                    <div className="w-2 h-2 rounded-full bg-green-500 ring-4 ring-green-100" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Dropoff</p>
                                    <p className="text-sm font-medium text-gray-900">Yaya Center, Kilimani</p>
                                    <p className="text-xs text-gray-400 font-mono mt-0.5">Est. 12:45 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CARD 2: Delayed / Failed Issue */}
                <div className="bg-white border border-gray-200 p-6 relative group overflow-hidden">
                    {/* Status Stripe */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />

                    <div className="flex justify-between items-start mb-6 pl-4">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <AlertTriangle size={14} className="text-red-500" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-red-500 block">Delivery Stalled</span>
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-gray-900">Order #8821</h3>
                        </div>
                        <div className="text-right">
                            <span className="block text-4xl font-heading font-light text-red-500">DELAY</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">+15 MIN LATE</span>
                        </div>
                    </div>

                    <div className="pl-4 space-y-6">
                        {/* Rider Info */}
                        <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500">
                                <Bike size={24} />
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-gray-900">John Kamau</div>
                                <div className="text-xs text-red-500 font-bold uppercase tracking-wider">Not Moving</div>
                            </div>
                            <button className="p-3 border border-red-100 text-red-500 rounded-full hover:bg-black hover:text-white transition-colors">
                                <Phone size={16} />
                            </button>
                        </div>

                        {/* Issue Action */}
                        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                            <h4 className="font-bold text-red-900 text-sm mb-1">Automated Alert</h4>
                            <p className="text-xs text-red-700 leading-relaxed mb-4">
                                Rider has been stationary for 12 minutes. Customer reported delay.
                            </p>
                            <button className="w-full py-3 bg-white border border-red-200 text-red-600 rounded text-xs font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors flex items-center justify-center gap-2">
                                <RefreshCw size={14} /> Reassign Delivery
                            </button>
                        </div>
                    </div>
                </div>

                {/* CARD 3: Failed Report (Historic) */}
                <div className="bg-gray-50 border border-gray-200 p-6 relative col-span-1 lg:col-span-2 opacity-75 hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-200 rounded text-gray-500"><AlertTriangle size={16} /></div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Failed Delivery Report</h4>
                                <p className="text-xs text-gray-500">Order #8819 • Yesterday</p>
                            </div>
                        </div>
                        <span className="px-3 py-1 bg-gray-200 text-gray-600 text-[10px] font-bold uppercase tracking-widest rounded-full">Resolved</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-12">
                        Reason: <span className="font-bold">Customer Unreachable.</span> Item returned to inventory.
                    </p>
                </div>

            </div>
        </div>
    );
}
