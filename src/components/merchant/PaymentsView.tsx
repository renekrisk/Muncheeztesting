import {
    Wallet,
    ArrowUpRight,
    ArrowDownLeft,
    Download,
    FileText,
    AlertCircle,
    CheckCircle2,
    Clock,
    DollarSign,
    RefreshCcw
} from 'lucide-react';

export default function PaymentsView() {

    // Mock Transaction Data
    const transactions = [
        { id: 'QDH892KK1', time: '10:42 AM', type: 'M-PESA', customer: 'John Kamau', amount: 4500, status: 'CONFIRMED', code: 'QDH892KK1' },
        { id: 'QDH892KK2', time: '10:30 AM', type: 'M-PESA', customer: 'Sarah M.', amount: 1200, status: 'PENDING', code: '---' },
        { id: 'QDH892KK3', time: '09:15 AM', type: 'REFUND', customer: 'Brian K.', amount: -850, status: 'REVERSED', code: 'R45521' },
        { id: 'QDH892KK4', time: 'Yesterday', type: 'M-PESA', customer: 'Hotel 680', amount: 15400, status: 'CONFIRMED', code: 'QDG771MM2' },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black/10 pb-6">
                <div>
                    <h2 className="text-4xl font-heading font-light tracking-tight text-black">Finance<span className="text-[#D4AF37]">.</span></h2>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">{new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })} Statement</p>
                </div>

                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-[#D4AF37] hover:text-black transition-colors rounded text-xs font-bold uppercase tracking-widest">
                        <Download size={16} /> Download PDF
                    </button>
                </div>
            </div>

            {/* METRICS GRID (Financial Dashboard) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* 1. Today's Earnings */}
                <div className="bg-black text-white p-6 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><DollarSign size={100} /></div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-1">Today's Earnings</p>
                    <h3 className="text-4xl font-mono font-medium">KES 18,450</h3>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                        <span className="text-green-400 flex items-center gap-1"><ArrowUpRight size={12} /> +12%</span> vs yesterday
                    </div>
                </div>

                {/* 2. Pending Checks */}
                <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Pending M-Pesa</p>
                        <div className="p-2 bg-yellow-50 text-yellow-600 rounded-full"><Clock size={16} /></div>
                    </div>
                    <h3 className="text-3xl font-mono font-medium text-gray-900">KES 3,200</h3>
                    <p className="text-xs text-gray-400 mt-2">2 Transactions awaiting confirmation.</p>
                </div>

                {/* 3. Next Payout */}
                <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Next Payout</p>
                        <div className="p-2 bg-green-50 text-green-600 rounded-full"><Wallet size={16} /></div>
                    </div>
                    <h3 className="text-3xl font-mono font-medium text-gray-900">KES 145,000</h3>
                    <p className="text-xs text-gray-400 mt-2">Scheduled for <span className="text-black font-bold">Monday, 9:00 AM</span></p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT: Transaction Feed */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="font-heading font-bold text-xl">Recent Transactions</h3>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Live Feed</div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                        <div className="divide-y divide-gray-100">
                            {transactions.map((tx, i) => (
                                <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className={`
                                            w-10 h-10 rounded-full flex items-center justify-center
                                            ${tx.status === 'CONFIRMED' ? 'bg-green-100 text-green-600' :
                                                tx.status === 'PENDING' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'}
                                        `}>
                                            {tx.status === 'CONFIRMED' ? <ArrowDownLeft size={18} /> :
                                                tx.status === 'PENDING' ? <Clock size={18} /> : <RefreshCcw size={18} />}
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 text-sm">{tx.customer}</div>
                                            <div className="text-xs text-gray-400 font-mono mt-0.5">{tx.time} • {tx.type}</div>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <div className={`font-mono font-bold text-sm ${tx.type === 'REFUND' ? 'text-gray-400' : 'text-gray-900'}`}>
                                            {tx.type === 'REFUND' ? '-' : '+'} KES {Math.abs(tx.amount).toLocaleString()}
                                        </div>
                                        <div className={`
                                            text-[10px] font-bold uppercase tracking-wider mt-1
                                            ${tx.status === 'CONFIRMED' ? 'text-green-600' :
                                                tx.status === 'PENDING' ? 'text-yellow-600' : 'text-red-500'}
                                        `}>
                                            {tx.status} {tx.code !== '---' && <span className="text-gray-300 ml-1 font-mono">{tx.code}</span>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-50 px-4 py-3 text-center border-t border-gray-200">
                            <button className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">View All Transactions</button>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Earnings Breakdown */}
                <div className="space-y-6">
                    <h3 className="font-heading font-bold text-xl">Breakdown</h3>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
                        {/* Summary Block */}
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-2">Gross Sales</p>
                            <div className="flex justify-between items-end border-b border-gray-100 pb-2">
                                <span className="font-mono text-lg font-bold">KES 185,200</span>
                            </div>
                        </div>

                        {/* Deductions */}
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Commission (20%)</span>
                                <span className="font-mono text-red-500">- KES 37,040</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">VAT (16%)</span>
                                <span className="font-mono text-red-500">- KES 29,632</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">M-Pesa Trans. Fees</span>
                                <span className="font-mono text-red-500">- KES 1,200</span>
                            </div>
                        </div>

                        {/* Net */}
                        <div className="pt-4 border-t border-black/10">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-gray-900 uppercase tracking-widest text-xs">Net Earnings</span>
                                <span className="font-mono text-xl font-bold text-[#D4AF37]">KES 117,328</span>
                            </div>
                            <p className="text-[10px] text-gray-400 text-right">Estimated Payout Amount</p>
                        </div>
                    </div>

                    {/* Alert Box */}
                    <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-4 rounded-lg flex gap-3">
                        <AlertCircle size={20} className="text-[#D4AF37] shrink-0" />
                        <div>
                            <h4 className="font-bold text-sm text-gray-900">Tax Compliance</h4>
                            <p className="text-xs text-gray-600 mt-1">Your KRA Tax Invoice for January is ready. Please download it for your records.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
