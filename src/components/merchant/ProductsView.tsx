import { useState } from 'react';
import {
    Search,
    Plus,
    Upload,
    Archive,
    Edit3,
    Trash2,
    Filter,
    Tag,
    Barcode,
    FileSpreadsheet,
    UtensilsCrossed,
    ShoppingCart,
    ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export type MerchantType = 'Restaurant' | 'Supermarket' | 'Pharmacy' | 'Water' | 'Flowers';

interface ProductsViewProps {
    merchantType: MerchantType;
}

export default function ProductsView({ merchantType }: ProductsViewProps) {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-6">
                <div>
                    <h2 className="text-4xl font-heading font-light tracking-tight text-black">Inventory<span className="text-[#D4AF37]">.</span></h2>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">{merchantType} Catalog</p>
                </div>
            </div>

            {/* MAIN CONTENT SPLIT */}
            {merchantType === 'Supermarket' || merchantType === 'Pharmacy' ? (
                <RetailInventoryView type={merchantType} />
            ) : (
                <RestaurantMenuView type={merchantType} />
            )}
        </div>
    );
}

// ==========================================
// 1. RETAIL / SUPERMARKET VIEW (Industrial Ledger)
// ==========================================
function RetailInventoryView({ type: _type }: { type: MerchantType }) {
    return (
        <div className="space-y-8">
            {/* Tools Panel */}
            <div className="flex flex-wrap items-end justify-between gap-6">
                {/* Search - Minimalist Underline */}
                <div className="relative w-full md:w-96 group">
                    <Search size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#D4AF37] transition-colors" />
                    <input
                        type="text"
                        placeholder="SEARCH SKU / PRODUCT..."
                        className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-gray-200 text-sm font-mono focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 uppercase tracking-wider"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-100/50 hover:bg-[#D4AF37] hover:text-black transition-all text-[10px] font-bold uppercase tracking-widest text-gray-600">
                        <Upload size={14} /> Import CSV
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-[#D4AF37] hover:text-black transition-all text-[10px] font-bold uppercase tracking-widest">
                        <Plus size={14} /> Add Item
                    </button>
                </div>
            </div>

            {/* Product Ledger (Grid System instead of Table) */}
            <div className="bg-white border border-gray-100 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)]">
                {/* Header Row */}
                <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-black text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <div className="col-span-4">Product / SKU</div>
                    <div className="col-span-2">Category</div>
                    <div className="col-span-2">Stock Level</div>
                    <div className="col-span-2 text-right">Unit Price</div>
                    <div className="col-span-2 text-right">Action</div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-gray-100">
                    {[
                        { name: 'Jogoo Maize Meal 2kg', sku: 'SKU-8821', category: 'Pantry', stock: 145, price: 230, status: 'GOOD' },
                        { name: 'KCC Gold Milk 500ml', sku: 'SKU-8822', category: 'Dairy', stock: 12, price: 65, status: 'LOW' },
                        { name: 'Pampers Diapers Size 4', sku: 'SKU-8823', category: 'Baby', stock: 50, price: 1850, status: 'GOOD' },
                    ].map((item, i) => (
                        <div key={i} className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-gray-50/50 transition-colors group">

                            {/* Product */}
                            <div className="col-span-4">
                                <div className="font-heading font-bold text-gray-900 text-lg leading-none">{item.name}</div>
                                <div className="font-mono text-xs text-gray-400 mt-1.5 flex items-center gap-2">
                                    <Barcode size={12} /> {item.sku}
                                </div>
                            </div>

                            {/* Category */}
                            <div className="col-span-2">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 border border-gray-200 px-2 py-1">
                                    {item.category}
                                </span>
                            </div>

                            {/* Stock - Visual Bar */}
                            <div className="col-span-2">
                                <div className="flex items-center justify-between text-[10px] font-bold mb-1">
                                    <span className={item.stock < 20 ? 'text-red-500' : 'text-green-600'}>{item.status}</span>
                                    <span className="font-mono text-gray-400">{item.stock}</span>
                                </div>
                                <div className="h-1 bg-gray-100 w-full overflow-hidden">
                                    <div
                                        className={`h-full ${item.stock < 20 ? 'bg-red-500' : 'bg-black'} transition-all`}
                                        style={{ width: `${Math.min(item.stock, 100)}%` }}
                                    />
                                </div>
                            </div>

                            {/* Price */}
                            <div className="col-span-2 text-right">
                                <div className="font-mono text-sm text-gray-900">KES {item.price}</div>
                            </div>

                            {/* Actions */}
                            <div className="col-span-2 flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 hover:bg-[#D4AF37] hover:text-black text-gray-400 transition-colors"><Edit3 size={14} /></button>
                                <button className="p-2 hover:bg-red-500 hover:text-white text-gray-400 transition-colors"><Trash2 size={14} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Smart Import Teaser - Minimalist */}
            <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
                <div>
                    <h4 className="font-heading font-bold text-lg">Smart Import</h4>
                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">AI-Powered Catalog Mapping</p>
                </div>
                <button className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-widest hover:text-black transition-colors">
                    Upload Invoice <ChevronRight size={14} />
                </button>
            </div>
        </div>
    );
}

// ==========================================
// 2. RESTAURANT VIEW (Menu Board)
// ==========================================
function RestaurantMenuView({ type }: { type: MerchantType }) {
    return (
        <div className="space-y-10">
            {/* Categories */}
            <div className="flex gap-8 border-b border-gray-200 pb-px overflow-x-auto">
                {['Burgers', 'Sides', 'Drinks', 'Desserts', 'Combos'].map((cat, i) => (
                    <button key={i} className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative
                        ${i === 0 ? 'text-black' : 'text-gray-400 hover:text-black'}
                    `}>
                        {cat}
                        {i === 0 && <span className="absolute bottom-0 left-0 w-full h-1 bg-[#D4AF37]" />}
                    </button>
                ))}
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {/* Item Card 1 */}
                <div className="group cursor-pointer">
                    <div className="relative aspect-[4/3] bg-gray-100 mb-6 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                        />
                        {/* Overlay Tag */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-gray-200">
                            Best Seller
                        </div>
                        {/* Toggle */}
                        <div className="absolute bottom-4 right-4 bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                            Active
                        </div>
                    </div>

                    <div className="flex justify-between items-start mb-2">
                        <h4 className="font-heading font-bold text-2xl group-hover:text-[#D4AF37] transition-colors">Ultimate Chicken</h4>
                        <span className="font-mono text-sm text-gray-500">KES 950</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">Double patty, cheddar, caramelized onions, house sauce.</p>

                    <div className="flex gap-2">
                        {['Extra Cheese', 'No Onions'].map((mod, i) => (
                            <span key={i} className="px-2 py-1 border border-gray-200 text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:border-black hover:text-black transition-colors">{mod}</span>
                        ))}
                    </div>
                </div>

                {/* Item Card 2 (Water / Bulk Logic Example) */}
                {type === 'Water' && (
                    <div className="group cursor-pointer">
                        <div className="relative aspect-[4/3] bg-blue-50/50 mb-6 overflow-hidden flex items-center justify-center border border-blue-100/50">
                            <ShoppingCart size={48} className="text-blue-200 group-hover:text-blue-500 transition-colors" />
                            <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                                In Stock
                            </div>
                        </div>

                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-heading font-bold text-2xl group-hover:text-blue-600 transition-colors">20L Refill</h4>
                            <span className="font-mono text-sm text-gray-500">KES 350</span>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed mb-4">Empty bottle exchange required upon delivery.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
