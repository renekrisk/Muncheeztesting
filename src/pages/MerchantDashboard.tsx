import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    ShoppingBag,
    UtensilsCrossed,
    BarChart3,
    Settings,
    LogOut,
    Menu,
    Bell,
    Users,
    Truck,
    Wallet,
    Megaphone,
    HelpCircle,
    Power,
    Plus,
    ChevronDown
} from 'lucide-react';
import OrdersView from '../components/merchant/OrdersView';
import ProductsView from '../components/merchant/ProductsView';
import CustomersView from '../components/merchant/CustomersView';
import DeliveriesView from '../components/merchant/DeliveriesView';
import PaymentsView from '../components/merchant/PaymentsView';
import MarketingView from '../components/merchant/MarketingView';
import ReportsView from '../components/merchant/ReportsView';
import SettingsView from '../components/merchant/SettingsView';
import HelpView from '../components/merchant/HelpView';

// Define type locally for now if not shared, or import from ProductsView if exported.
// Since we have it in ProductsView, let's just use string literal for state to avoid circular deps for this step
// or just redefine/import.
// Let's assume we import the type or just use the string union compatible.

import { useMockDatabase } from '../context/MockDatabaseContext';

export default function MerchantDashboard() {
    const { merchants, orders, updateMerchantStatus, updateOrderStatus } = useMockDatabase();

    // UI State
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState('Overview');

    // Derived: Active Merchant (For now, just pick the first one or allow switching)
    const [activeMerchantId, setActiveMerchantId] = useState(merchants[0].id);
    const activeBusiness = merchants.find(m => m.id === activeMerchantId) || merchants[0];

    // Derived State
    const actionRequiredCount = orders.filter(o => ['CREATED', 'PAYMENT_PENDING', 'PAYMENT_CONFIRMED', 'AWAITING_MERCHANT_ACTION'].includes(o.status)).length;

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const merchantType = activeBusiness.type;

    const menuItems = [
        { icon: LayoutDashboard, label: 'Overview' },
        { icon: ShoppingBag, label: 'Orders', badge: actionRequiredCount > 0 ? actionRequiredCount.toString() : undefined },
        { icon: UtensilsCrossed, label: 'Products / Inventory' },
        { icon: Users, label: 'Customers' },
        { icon: Truck, label: 'Deliveries' },
        { icon: Wallet, label: 'Payments & Earnings' },
        { icon: Megaphone, label: 'Marketing ' },
        { icon: BarChart3, label: 'Reports' },
        { icon: Settings, label: 'Settings' },
        { icon: HelpCircle, label: 'Help' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans">
            {/* Sidebar */}
            <motion.aside
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-black text-white transition-all duration-300 ease-in-out fixed h-full z-30 flex flex-col border-r border-[#D4AF37]/20`}
            >
                {/* Brand */}
                <div className="h-20 flex items-center px-6 border-b border-white/10">
                    {sidebarOpen ? (
                        <span className="font-heading font-bold text-xl tracking-tighter text-white">
                            Muncheez<span className="text-[#D4AF37]">.</span>
                        </span>
                    ) : (
                        <span className="font-heading font-bold text-xl text-[#D4AF37]">M.</span>
                    )}
                </div>

                {/* Nav Items */}
                <nav className="flex-1 py-8 px-3 space-y-2">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSection(item.label)}
                            className={`
                                w-full flex items-center gap-4 px-3 py-3 rounded-xl transition-all group
                                ${activeSection === item.label
                                    ? 'bg-[#D4AF37] text-black font-bold'
                                    : 'text-white/60 hover:text-white hover:bg-white/5'}
                            `}
                        >
                            <item.icon size={20} strokeWidth={activeSection === item.label ? 2.5 : 1.5} />
                            {sidebarOpen && (
                                <span className={`text-sm tracking-wide ${activeSection === item.label ? 'font-bold' : 'font-medium'}`}>
                                    {item.label}
                                </span>
                            )}
                            {sidebarOpen && item.badge && (
                                <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    {item.badge}
                                </span>
                            )}
                        </button>
                    ))}
                </nav>

                {/* User / Logout */}
                <div className="p-4 border-t border-white/10">
                    <button className="w-full flex items-center gap-4 px-3 py-3 rounded-xl text-white/40 hover:text-red-400 transition-colors">
                        <LogOut size={20} />
                        {sidebarOpen && <span className="text-sm font-medium tracking-wide">Logout</span>}
                    </button>
                </div>
            </motion.aside>

            {/* Main Content */}
            <main className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 min-h-screen flex flex-col`}>

                {/* Topbar */}
                <header className="h-20 bg-white border-b border-gray-200 sticky top-0 z-20 px-4 md:px-8 flex items-center justify-between gap-4">

                    {/* Left: Sidebar Toggle + Brand + Outlet Selector */}
                    <div className="flex items-center gap-4 md:gap-6 flex-1">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors shrink-0"
                        >
                            <Menu size={20} />
                        </button>

                        <div className="flex items-center gap-3 relative">
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Business</span>
                                {/* Business Dropdown Trigger */}
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center gap-2 font-heading font-bold text-gray-900 leading-none group text-left hover:text-[#D4AF37] transition-colors"
                                >
                                    {activeBusiness.businessName}
                                    <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                            </div>

                            {/* DROPDOWN MENU */}
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-4 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 animate-in fade-in slide-in-from-top-2">
                                    <div className="px-3 py-2 border-b border-gray-50 mb-2">
                                        <p className="text-[10px] font-bold uppercase text-gray-400">Select Business</p>
                                    </div>
                                    {merchants.map((biz) => (
                                        <button
                                            key={biz.id}
                                            onClick={() => {
                                                setActiveMerchantId(biz.id);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`
                                                w-full flex items-center justify-between px-3 py-3 rounded-xl text-left transition-colors
                                                ${activeBusiness.id === biz.id ? 'bg-black text-white' : 'hover:bg-gray-50 text-gray-700'}
                                            `}
                                        >
                                            <div>
                                                <div className="font-bold text-sm leading-none">{biz.businessName}</div>
                                                <div className={`text-[10px] uppercase font-bold mt-1 ${activeBusiness.id === biz.id ? 'text-[#D4AF37]' : 'text-gray-400'}`}>
                                                    {biz.type}
                                                </div>
                                            </div>
                                            {activeBusiness.id === biz.id && <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />}
                                        </button>
                                    ))}
                                    <div className="mt-2 pt-2 border-t border-gray-50">
                                        <button className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-gray-500 hover:text-black transition-colors">
                                            <Plus size={14} /> Register New Business
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="hidden lg:flex items-center gap-4 ml-6 pl-6 border-l border-gray-200">
                            {actionRequiredCount > 0 && (
                                <div className="flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 animate-pulse">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    {actionRequiredCount} New Orders
                                </div>
                            )}
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                                0 Riders Waiting
                            </div>
                        </div>
                    </div>

                    {/* Right: Online Toggle, Notifs, Profile */}
                    <div className="flex items-center gap-4 md:gap-6 shrink-0">
                        {/* Online Toggle */}
                        <button
                            onClick={() => updateMerchantStatus(activeBusiness.id, !(activeBusiness as any).isActive)}
                            className={`flex items-center gap-3 px-1.5 py-1.5 pr-4 rounded-full transition-all group ${(activeBusiness as any).isActive ? 'bg-green-100 hover:bg-green-200' : 'bg-red-100 hover:bg-red-200'
                                }`}
                        >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm transition-colors ${(activeBusiness as any).isActive ? 'bg-[#00A082]' : 'bg-red-600'
                                }`}>
                                <Power size={14} strokeWidth={3} />
                            </div>
                            <span className={`text-xs font-bold uppercase tracking-wider ${(activeBusiness as any).isActive ? 'text-green-800' : 'text-red-800'}`}>
                                {(activeBusiness as any).isActive ? 'Online' : 'Offline'}
                            </span>
                        </button>

                        <div className="h-8 w-[1px] bg-gray-200 hidden md:block" />

                        {/* Notifications */}
                        <button className="relative p-2 text-gray-400 hover:text-[#D4AF37] transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </button>

                        {/* Profile Dropdown */}
                        <div className="flex items-center gap-3 cursor-pointer group">
                            <div className="text-right hidden md:block">
                                <div className="text-sm font-bold text-gray-900 leading-none">{activeBusiness.businessName}</div>
                                <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{activeBusiness.ownerName}</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-transparent group-hover:border-[#D4AF37] transition-all overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=200"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content Area - The "Kitchen Pass" Aesthetic */}
                <div className="flex-1 p-8 overflow-y-auto bg-[#F5F5F7] relative">
                    {/* Cinematic Grain Texture */}
                    <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

                    <div className="max-w-7xl mx-auto relative z-10">

                        {activeSection === 'Orders' ? (
                            <OrdersView
                                orders={orders}
                                onUpdateStatus={updateOrderStatus}
                            />
                        ) : activeSection === 'Products / Inventory' ? (
                            <ProductsView merchantType={merchantType} />
                        ) : activeSection === 'Customers' ? (
                            <CustomersView />
                        ) : activeSection === 'Deliveries' ? (
                            <DeliveriesView />
                        ) : activeSection === 'Payments & Earnings' ? (
                            <PaymentsView />
                        ) : activeSection === 'Marketing ' ? (
                            <MarketingView />
                        ) : activeSection === 'Reports' ? (
                            <ReportsView merchantType={merchantType} />
                        ) : activeSection === 'Settings' ? (
                            <SettingsView />
                        ) : activeSection === 'Help' ? (
                            <HelpView />
                        ) : (
                            /* Overview Content */
                            <div className="space-y-12">

                                {/* 1. HUD Metrics (Heads Up Display) - Clean, no boxes */}
                                <div className="flex flex-col md:flex-row items-baseline justify-between border-b-2 border-black/5 pb-8">
                                    {[
                                        { label: 'Revenue', value: 'KES 24,500', sub: 'Today', color: 'text-black' },
                                        { label: 'Volume', value: '45', sub: 'Orders', color: 'text-black' },
                                        {
                                            label: merchantType === 'Restaurant' ? 'Kitchen' : 'Stock',
                                            value: merchantType === 'Restaurant' ? '18m' : 'Alert',
                                            sub: merchantType === 'Restaurant' ? 'Avg Prep' : 'Low Items',
                                            color: merchantType === 'Restaurant' ? 'text-black' : 'text-red-500'
                                        },
                                    ].map((stat, i) => (
                                        <div key={i} className="flex flex-col md:w-1/4">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">{stat.label}</span>
                                            <span className={`text-5xl md:text-6xl font-heading font-light tracking-tighter ${stat.color}`}>
                                                {stat.value}
                                            </span>
                                            <span className="text-xs font-medium text-gray-400 -translate-y-4">{stat.sub}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* 2. The "Pass" - Active Orders as Tickets */}
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                                    {/* LIVE TICKETS (Pending) */}
                                    <div className="lg:col-span-3">
                                        <div className="flex items-center justify-between mb-8">
                                            <h3 className="text-xl font-heading font-bold uppercase tracking-tight">The Pass <span className="text-gray-300 ml-2 font-light">3 Pending</span></h3>
                                            <button className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">View All History</button>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {[1, 2, 3].map((ticket) => (
                                                <div key={ticket} className="bg-white p-6 relative group hover:-translate-y-1 transition-transform duration-300 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                                                    {/* Serrated Top Edge (CSS Trick) */}
                                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-transparent bg-[length:10px_10px] bg-repeat-x" style={{
                                                        backgroundImage: 'radial-gradient(circle at 10px 0, transparent 5px, #fff 6px)'
                                                    }} />

                                                    <div className="flex justify-between items-start mb-6 border-b border-dashed border-gray-200 pb-4">
                                                        <div>
                                                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">#882{ticket}</span>
                                                            <div className="text-xs text-gray-400 mt-1">12:3{ticket} PM</div>
                                                        </div>
                                                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white font-bold text-xs">{ticket * 4}m</span>
                                                    </div>

                                                    <div className="space-y-3 mb-8">
                                                        <div className="flex justify-between text-sm font-bold border-b border-gray-50 pb-2">
                                                            <span>2x Ult. Chicken Burger</span>
                                                        </div>
                                                        <div className="flex justify-between text-sm text-gray-500 pb-2">
                                                            <span>1x Lg. Spicy Fries</span>
                                                        </div>
                                                        <div className="flex justify-between text-sm text-gray-500 pb-2">
                                                            <span>1x Vanilla Shake</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <button className="flex-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest py-3 hover:bg-[#D4AF37] transition-colors">
                                                            Accept
                                                        </button>
                                                        <button className="px-3 border border-gray-200 py-2.5 hover:border-black transition-colors text-gray-400 hover:text-black">
                                                            <Bell size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: Dynamic Widget (Changes based on Merchant Type) */}
                                    <div className="lg:col-span-1 bg-black text-white rounded-3xl p-8 relative overflow-hidden">
                                        <div className="relative z-10">

                                            {merchantType === 'Restaurant' ? (
                                                <>
                                                    <div className="flex items-center gap-3 mb-8">
                                                        <div className="p-2 bg-white/10 rounded-lg">
                                                            <UtensilsCrossed size={16} className="text-[#D4AF37]" />
                                                        </div>
                                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Kitchen Status</span>
                                                    </div>

                                                    <div className="space-y-6">
                                                        <div>
                                                            <div className="flex justify-between text-sm mb-2 text-white/60">
                                                                <span>Prep Time</span>
                                                                <span className="text-white">18m</span>
                                                            </div>
                                                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                                                <div className="h-full bg-[#D4AF37] w-[80%]"></div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className="flex justify-between text-sm mb-2 text-white/60">
                                                                <span>Kitchen Load</span>
                                                                <span className="text-white">High</span>
                                                            </div>
                                                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                                                <div className="h-full bg-red-500 w-[75%]"></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-10 p-4 bg-white/5 rounded-2xl border border-white/10">
                                                        <p className="text-xs text-white/60 leading-relaxed">
                                                            <span className="text-[#D4AF37] font-bold">Insight:</span> Lunch rush incoming. Prep times degraded by 2%.
                                                        </p>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    {/* SUPERMARKET WIDGET */}
                                                    <div className="flex items-center gap-3 mb-8">
                                                        <div className="p-2 bg-white/10 rounded-lg">
                                                            <ShoppingBag size={16} className="text-[#D4AF37]" />
                                                        </div>
                                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Inventory Alert</span>
                                                    </div>

                                                    <div className="space-y-6">
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <div className="text-3xl font-heading font-light">12</div>
                                                                <div className="text-xs text-red-400 font-bold uppercase tracking-wider">Low Stock SKUs</div>
                                                            </div>
                                                            <div className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500">
                                                                !
                                                            </div>
                                                        </div>

                                                        <div className="h-px bg-white/10 my-4" />

                                                        <div className="space-y-3">
                                                            <div className="flex justify-between text-xs">
                                                                <span className="text-white/60">KCC Gold Milk</span>
                                                                <span className="text-red-400 font-bold">4 left</span>
                                                            </div>
                                                            <div className="flex justify-between text-xs">
                                                                <span className="text-white/60">Jogoo Flour</span>
                                                                <span className="text-red-400 font-bold">12 left</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-8">
                                                        <button className="w-full py-3 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-white transition-colors">
                                                            Auto-Reorder
                                                        </button>
                                                    </div>
                                                </>
                                            )}

                                        </div>

                                        {/* Background Texture */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-[0.05] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                    </div>

                                </div>

                            </div>
                        )}
                    </div>
                </div >

            </main >
        </div >
    );
}