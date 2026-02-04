import { useNavigate, useSearchParams } from 'react-router-dom';
import {
    Search,
    MapPin,
    User,
    ShoppingBag,
    ArrowRight,
    Menu,
    X,
} from 'lucide-react';
import LocationModal from '../../components/LocationModal';
import ProfileModal from '../../components/ProfileModal';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useEffect } from 'react';
import Footer from '../../components/Footer';

// 1. BRAND PILLARS (Functional FOUNDATIONS)
const SEGMENT_MAP: Record<string, { title: string; subtitle: string; description: string; categories: string[] }> = {
    'kitchen': {
        title: "The Kitchens",
        subtitle: "Fine Dining to Street Eats",
        description: "From Westlands' boutique dining to the legendary food carts of the city center. Delivered with soul.",
        categories: ['All', 'Promotions', 'Fast food', 'Halal', 'Chicken', 'Pizza', 'Local food', 'Burgers', 'Indian']
    },
    'market': {
        title: "The Market",
        subtitle: "Supermarkets & Mama Mboga",
        description: "Full supermarket hauls and fresh produce from local stalls, handled with the respect they deserve.",
        categories: ['All', 'Supermarket', 'Mama Mboga', 'Snacks', 'Alcohol']
    },
    'bakes': {
        title: "Bakes & Blooms",
        subtitle: "Bakeries & Florists",
        description: "Artisan sourdough, delicate pastries, and the city’s most vibrant floral arrangements.",
        categories: ['All', 'Bakery', 'Desserts', 'Tea & coffee', 'Breakfast', 'Florist']
    },
    'apothecary': {
        title: "The Apothecary",
        subtitle: "Health & Hydration",
        description: "Quick, discreet pharmacy essentials and professional-grade water delivery for your home.",
        categories: ['All', 'Pharmacy', 'Wellness', 'Water']
    },
    'general': {
        title: "The Collective",
        subtitle: "Essentials, Elevated.",
        description: "Nairobi's finest selection across all departments, unified in one experience.",
        categories: ['All', 'Promotions', 'Fast food', 'Supermarket', 'Pharmacy', 'Bakery', 'Local food']
    }
};

// 2. CURATION MOODS (Editorial LAYERS)
const MOOD_MAP: Record<string, { name: string; tagline: string; image: string; color: string; letter: string }> = {
    'morning-dew': {
        name: 'Morning Dew',
        tagline: 'The Early Rise',
        image: 'https://images.unsplash.com/photo-1444418185997-1145404873e0?q=80&w=800',
        color: '#4A90E2',
        letter: 'M'
    },
    'street-kings': {
        name: 'Street Kings',
        tagline: 'The Hustle',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800',
        color: '#E63946',
        letter: 'S'
    },
    'kula-fiti': {
        name: 'Kula Fiti',
        tagline: 'The Balance',
        image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800',
        color: '#2A9D8F',
        letter: 'K'
    },
    'the-vault': {
        name: 'the vault',
        tagline: 'Elite Selection',
        image: 'https://images.unsplash.com/photo-1569701881643-5671578e39a7?q=80&w=800',
        color: '#D4AF37',
        letter: 'V'
    }
};

export default function StoreListing() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const activeView = searchParams.get('v') || 'general';
    const activeTag = searchParams.get('tag'); // Get the deep-link tag
    const config = SEGMENT_MAP[activeView] || SEGMENT_MAP.general;

    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    // Location State
    const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
    const [userLocation, setUserLocation] = useState('Lavington, Nairobi');
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const categories = config.categories;
    const isFiltered = searchQuery !== '' || activeCategory !== 'All' || !!activeTag;

    // Scroll Review: Ensure we start at the top when view/tag changes
    // Scroll Review: Ensure we start at the top when view/tag changes
    useEffect(() => {
        window.scrollTo(0, 0);

        // SYNC: If incoming tag from Home, set it as Search Query to match internal behavior
        if (activeTag) {
            const mood = MOOD_MAP[activeTag];
            if (mood) {
                setSearchQuery(mood.name);
            } else {
                setSearchQuery(activeTag.replace(/-/g, ' '));
            }
        } else {
            // IF NO TAG: We are just changing views (e.g. Kitchen -> Market)
            // We MUST clear the search query so the user isn't stuck with "Morning Dew" filter in "The Market"
            setSearchQuery('');
        }
    }, [activeView, activeTag]);

    // Unified Market Data (Categorized by Brand Department)
    // Unified Market Data (Categorized by Brand Department)
    const MARKET_STORES = useMemo(() => [
        // --- THE KITCHENS (Fine Dining to Street Eats) ---
        { id: 'smocha-guy', name: 'Smocha Guy', promo: 'Hot & Fresh', status: 'Open until 22:00', rating: '99%', count: '(1.2k)', type: 'Local food', departments: ['kitchen'], tags: ['street-kings'], actionText: 'Order Now', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800' },
        { id: 'hub-hotel', name: 'The Hub Hotel', promo: 'Gourmet Selection', status: 'Open until 23:00', rating: '97%', count: '(85)', type: 'Indian', departments: ['kitchen'], tags: ['kula-fiti'], actionText: 'Book Order', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800' },
        { id: 'street-kings-burgers', name: 'Street Kings Burgers', promo: '-20% Off', status: 'Open until 00:00', rating: '96%', count: '(900+)', type: 'Burgers', departments: ['kitchen'], tags: ['street-kings'], actionText: 'Grab a Bite', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800' },
        { id: 'java-ke', name: 'Java House', promo: 'Perfect Morning', status: 'Open until 22:00', rating: '96%', count: '(4k+)', type: 'Tea & coffee', departments: ['kitchen', 'bakes'], tags: ['morning-dew'], actionText: 'Coffee Break', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800' },
        { id: 'mama-oliech', name: 'Mama Oliech Fish', promo: 'Legendary Tilapia', status: 'Open until 21:00', rating: '98%', count: '(3k+)', type: 'Local food', departments: ['kitchen'], tags: ['kula-fiti'], actionText: 'Eat Fresh', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800' },
        { id: 'big-knife', name: 'Big Knife Shawarma', promo: '2 for 1 Tuesday', status: 'Open until 23:30', rating: '95%', count: '(1.1k)', type: 'Fast food', departments: ['kitchen'], actionText: 'Shawarma Run', image: 'https://images.unsplash.com/photo-1561651823-34fed0225304?q=80&w=800' },
        { id: 'cjs', name: "CJ's Restaurant", promo: 'Always Open', status: 'Open until 22:30', rating: '97%', count: '(5k+)', type: 'Indian', departments: ['kitchen'], tags: ['kula-fiti'], actionText: 'Feast Now', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800' },
        { id: 'kfc-ke', name: 'KFC', promo: 'Bucket List', status: 'Open until 23:00', rating: '94%', count: '(8k+)', type: 'Fast food', departments: ['kitchen'], actionText: 'Finger Lickin', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800' },
        { id: 'alchemist', name: 'The Alchemist', promo: 'Bites & Vibes', status: 'Open until 04:00', rating: '92%', count: '(150)', type: 'Burgers', departments: ['kitchen'], tags: ['the-vault'], actionText: 'Vibe Check', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800' },
        { id: 'habesha', name: 'Habesha Restaurant', promo: 'Authentic Ethiopian', status: 'Open until 22:00', rating: '98%', count: '(2k+)', type: 'Local food', departments: ['kitchen'], tags: ['kula-fiti'], actionText: 'Dine In', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800' },
        { id: 'chow-patty', name: 'Chow Patty', promo: 'Street Flavors', status: 'Open until 21:00', rating: '96%', count: '(1k+)', type: 'Indian', departments: ['kitchen'], tags: ['street-kings'], actionText: 'Order Chaat', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800' },

        // --- THE MARKET (Supermarkets & Mama Mboga) ---
        { id: 'carrefour', name: 'Carrefour Hypermarket', promo: 'Daily Savings', status: 'Open until 22:00', rating: '95%', count: '(2k+)', type: 'Supermarket', departments: ['market'], actionText: 'Shop Fresh', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800' },
        { id: 'maathai', name: 'Maathai Supermarket', promo: 'Fresh Deals', status: 'Open until 21:30', rating: '91%', count: '(400+)', type: 'Supermarket', departments: ['market'], actionText: 'Fill Cart', image: 'https://images.unsplash.com/photo-1506617564039-2f3b650ad731?q=80&w=800' },
        { id: 'naivas', name: 'Naivas', promo: 'Kenyas Own', status: 'Open until 21:00', rating: '92%', count: '(1.5k)', type: 'Supermarket', departments: ['market'], actionText: 'Shop Now', image: 'https://images.unsplash.com/photo-1506617564039-2f3b650ad731?q=80&w=800' },
        { id: 'quickmart', name: 'Quickmart', promo: 'Flash Sale', status: 'Open until 22:00', rating: '93%', count: '(1.2k)', type: 'Supermarket', departments: ['market'], actionText: 'Stock Up', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800' },
        { id: 'mama-mboga', name: 'The Fresh Stall', promo: 'Mama Mboga Special', status: 'Open until 19:00', rating: '100%', count: '(45)', type: 'Mama Mboga', departments: ['market'], tags: ['kula-fiti', 'morning-dew'], actionText: 'Get Fresh', image: 'https://images.unsplash.com/photo-1488459711635-0c842799ed62?q=80&w=800' },
        { id: 'zucchini', name: 'Zucchini Greengrocers', promo: 'Organic Pick', status: 'Open until 20:00', rating: '98%', count: '(900)', type: 'Supermarket', departments: ['market'], tags: ['kula-fiti'], actionText: 'Go Organic', image: 'https://images.unsplash.com/photo-1506617564039-2f3b650ad731?q=80&w=800' },
        { id: 'chandarana', name: 'Chandarana Foodplus', promo: 'Luxury Goods', status: 'Open until 21:00', rating: '95%', count: '(800)', type: 'Supermarket', departments: ['market'], tags: ['the-vault'], actionText: 'Shop Global', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800' },
        { id: 'healthy-u', name: 'Healthy U', promo: 'Pure Wellness', status: 'Open until 20:00', rating: '97%', count: '(1.2k)', type: 'Wellness', departments: ['market', 'apothecary'], tags: ['kula-fiti'], actionText: 'Stay Fit', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=800' },
        { id: 'tuskys', name: 'Tuskys', promo: 'Always Near', status: 'Open until 21:00', rating: '90%', count: '(600+)', type: 'Supermarket', departments: ['market'], actionText: 'Shop Now', image: 'https://images.unsplash.com/photo-1506617564039-2f3b650ad731?q=80&w=800' },
        { id: 'cleanshelf', name: 'Cleanshelf', promo: 'Value First', status: 'Open until 21:30', rating: '91%', count: '(350)', type: 'Supermarket', departments: ['market'], actionText: 'Save More', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800' },

        // --- THE APOTHECARY (Health & Hydration) ---
        { id: 'gathimaini', name: 'Gathimaini Pharmacy', promo: '24hr Care', status: 'Open 24/7', rating: '98%', count: '(200)', type: 'Pharmacy', departments: ['apothecary'], actionText: 'Get Essentials', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=800' },
        { id: 'voda-water', name: 'Voda Water', promo: 'Pure Flow', status: 'Open until 18:00', rating: '100%', count: '(50)', type: 'Water', departments: ['apothecary'], tags: ['morning-dew'], actionText: 'Hydrate Now', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=800' },
        { id: 'goodlife', name: 'Goodlife Pharmacy', promo: 'Wellness Hub', status: 'Open 24/7', rating: '98%', count: '(800+)', type: 'Pharmacy', departments: ['apothecary'], actionText: 'Buy Health', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=800' },
        { id: 'kasha', name: 'Kasha Wellness', promo: 'Discreet Delivery', status: 'Open until 20:00', rating: '99%', count: '(3k)', type: 'Wellness', departments: ['apothecary'], actionText: 'Shop Personal', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=800' },
        { id: 'mydawa', name: 'MYDAWA', promo: 'Direct Meds', status: 'Open until 23:00', rating: '96%', count: '(1.8k)', type: 'Pharmacy', departments: ['apothecary'], actionText: 'Order Meds', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=800' },
        { id: 'pure-distilled', name: 'Pure Distilled Water', promo: 'Bulk Supply', status: 'Open until 19:30', rating: '97%', count: '(90)', type: 'Water', departments: ['apothecary'], actionText: 'Refill Water', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=800' },
        { id: 'healthyu-wellness', name: 'Healthy U (Apothecary)', promo: 'Natural Health', status: 'Open until 20:00', rating: '97%', count: '(1k+)', type: 'Wellness', departments: ['apothecary'], tags: ['kula-fiti'], actionText: 'Shop Wellness', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=800' },
        { id: 'water-mart', name: 'Water Mart', promo: 'Alkaline Water', status: 'Open until 18:00', rating: '98%', count: '(120)', type: 'Water', departments: ['apothecary'], actionText: 'Fresh Hydration', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=800' },
        { id: 'pharma-plus', name: 'PharmaPlus', promo: 'Family Care', status: 'Open 24/7', rating: '95%', count: '(500+)', type: 'Pharmacy', departments: ['apothecary'], actionText: 'Shop Health', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=800' },

        // --- BAKES & BLOOMS (Bakeries & Florists) ---
        { id: 'artcaffe-bakery', name: 'Artcaffe Bakery', promo: 'Fresh Sourdough', status: 'Open until 22:00', rating: '97%', count: '(2.5k)', type: 'Bakery', departments: ['bakes', 'kitchen'], tags: ['morning-dew'], actionText: 'Get Baked', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800' },
        { id: 'karen-bakery', name: 'Karen Bakery', promo: 'Artisan Drops', status: 'Open until 19:00', rating: '99%', count: '(310)', type: 'Bakery', departments: ['bakes'], tags: ['morning-dew'], actionText: 'Sweet Treats', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800' },
        { id: 'cake-city', name: 'Cake City', promo: 'Custom Drops', status: 'Open until 21:00', rating: '95%', count: '(1.1k)', type: 'Desserts', departments: ['bakes'], actionText: 'Party Ready', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=800' },
        { id: 'valentine-cake', name: 'Valentine Cake House', promo: 'Pure Sweetness', status: 'Open until 20:00', rating: '94%', count: '(400)', type: 'Desserts', departments: ['bakes'], actionText: 'Share Love', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=800' },
        { id: 'hives-pastry', name: 'The Hives Pastry', promo: 'Gourmet Selection', status: 'Open until 20:00', rating: '96%', count: '(150)', type: 'Desserts', departments: ['bakes'], actionText: 'Sweet Drops', image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=800' },
        { id: 'the-bloom-bar', name: 'The Bloom Bar', promo: 'Curated Bouquets', status: 'Open until 18:00', rating: '99%', count: '(200)', type: 'Florist', departments: ['bakes'], tags: ['morning-dew'], actionText: 'Send Blooms', image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800' },
        { id: 'flower-palace', name: 'Flower Palace', promo: 'Fresh Cut Drops', status: 'Open until 19:00', rating: '97%', count: '(80)', type: 'Florist', departments: ['bakes'], actionText: 'Pick Flowers', image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800' },

        // --- THE MARKET RETAIL (Spirits & Boutiques) ---
        { id: 'vault-spirits', name: 'The Vault Spirits', promo: 'Elite Reserves', status: 'Open until 02:00', rating: '99%', count: '(400+)', type: 'Liquor', departments: ['market'], tags: ['the-vault'], actionText: 'Unlock Premium', image: 'https://images.unsplash.com/photo-1569701881643-5671578e39a7?q=80&w=800' },
        { id: 'fine-wine', name: 'Fine Wine Boutique', promo: 'Sommelier Selection', status: 'Open until 20:00', rating: '97%', count: '(120)', type: 'Liquor', departments: ['market'], tags: ['the-vault'], actionText: 'Shop Vintage', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800' },
        { id: 'whisky-shop', name: 'The Whisky Shop', promo: 'Rare Malts', status: 'Open until 22:00', rating: '98%', count: '(300)', type: 'Liquor', departments: ['market'], tags: ['the-vault'], actionText: 'Collect Malts', image: 'https://images.unsplash.com/photo-1527281405159-eb56860c0428?q=80&w=800' },
        { id: 'premium-cigars', name: 'The Cigar Lounge', promo: 'Hand-Rolled', status: 'Open until 00:00', rating: '99%', count: '(50)', type: 'Premium', departments: ['market'], tags: ['the-vault'], actionText: 'View Collection', image: 'https://images.unsplash.com/photo-1527281405159-eb56860c0428?q=80&w=800' },
        { id: 'luxury-boutique', name: 'Maison Noir Boutique', promo: 'Curated Fashion', status: 'Open until 19:00', rating: '100%', count: '(15)', type: 'Boutique', departments: ['market'], tags: ['the-vault'], actionText: 'Shop Elite', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800' }

    ], []);

    // Filter logic
    const filteredMarketStores = MARKET_STORES.filter(store => {
        // 1. Check if store belongs to the active view (if not 'general')
        const matchesView = activeView === 'general' || store.departments.includes(activeView as any);

        // 2. Check category filter
        const matchesCategory = activeCategory === 'All' || activeCategory === 'Promotions'
            ? (activeCategory === 'Promotions' ? !!store.promo : true)
            : store.type === activeCategory;

        // 3. Check search query
        const lowerCaseSearchQuery = searchQuery.toLowerCase();
        const matchesSearch = store.name.toLowerCase().includes(lowerCaseSearchQuery) ||
            (store.tags && store.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchQuery)));

        // 4. Check deep-link tag (if present)
        // NOTE: We now handle this via setSearchQuery effect above, so we don't need strict tag filtering here
        // This ensures "Morning Dew" in URL behaves exactly like typing "Morning Dew" or clicking the button
        return matchesView && matchesCategory && matchesSearch;
    });

    // --- Sub-Component: StoreCard ---
    const StoreCard = ({ store, idx }: { store: any, idx: number }) => (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => navigate(`/c/store/${store.id}`)}
            className="group cursor-pointer"
        >
            {/* Glass Container */}
            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-4 shadow-2xl group-hover:shadow-black/20 transition-all duration-700">
                <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.1] group-hover:grayscale-0"
                />

                {/* Dynamic Promo Tag - Minimalist Sliver (No Border) */}
                {store.promo && (
                    <div className="absolute top-4 left-4 z-10">
                        <span className="text-[9px] font-black tracking-widest text-[#D4AF37] uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                            {store.promo}
                        </span>
                    </div>
                )}

                {/* Status Overlay for Closed Stores */}
                {store.status === 'Closed' && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-2xl">
                            Currently Closed
                        </span>
                    </div>
                )}

                {/* Minimalist Action Reveal - Corner Arrow */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black">
                    <ArrowRight size={14} className="text-white group-hover:text-black transition-colors" />
                </div>
            </div>

            {/* Meta Content */}
            <div className="px-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                        {store.isTopRated && (
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">Premium Selection</span>
                        )}
                        <h3 className="text-xl font-heading font-black tracking-tighter leading-tight transition-colors">
                            {store.name}
                        </h3>
                    </div>
                </div>

                <div className="flex items-center gap-3 text-[11px] font-bold text-gray-700">
                    <span className={`${store.status.includes('Closed') ? 'text-amber-700' : 'text-green-600'}`}>
                        {store.status}
                    </span>

                    {store.rating !== '--' && (
                        <>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <div className="flex items-center gap-1.5 font-black text-gray-900">
                                <span>{store.rating}</span>
                                <span className="text-gray-400 font-medium">{store.count}</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </motion.div>
    );

    // SVG Curves (Standardized from OurStory.tsx)
    const BottomCurve = ({ fill }: { fill: string }) => (
        <div className="absolute bottom-[-1px] left-0 w-full leading-[0] z-20 pointer-events-none">
            <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] md:h-[100px] block" preserveAspectRatio="none">
                <path fill={fill} fillOpacity="1" d="M0,0L48,10C96,20,192,40,288,50C384,60,480,60,576,50C672,40,768,20,864,15C960,10,1056,20,1152,30C1248,40,1344,50,1392,55L1440,60L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
            </svg>
        </div>
    );

    return (
        <div className="min-h-screen font-sans selection:bg-black selection:text-white overflow-x-hidden relative bg-black">

            {/* 1. HEADER & ORIGIN - BLUE SECTION */}
            <section className="relative bg-[#4A90E2] text-white pt-6 pb-24 px-6 lg:px-12 overflow-hidden">
                <div className="absolute inset-0 z-[5] opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay" />

                {/* Brand Top Nav */}
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 md:gap-8 mb-16 relative z-30">
                    <div className="flex items-center gap-6">
                        {/* Hamburger for Mobile */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="lg:hidden w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center border border-white/10 transition-colors"
                        >
                            <Menu size={20} />
                        </button>

                        <div onClick={() => navigate('/')} className="cursor-pointer flex items-center gap-2 shrink-0 text-2xl font-heading font-bold tracking-tighter">
                            Muncheez<span className="text-[#D4AF37]">.</span>
                        </div>

                        {/* Location - Restored (Interactive) */}
                        <div
                            onClick={() => setIsLocationModalOpen(true)}
                            className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full cursor-pointer hover:bg-white/10 transition-all"
                        >
                            <MapPin size={12} className="text-[#D4AF37]" />
                            <span className="text-[10px] font-black uppercase tracking-widest truncate max-w-[150px]">{userLocation}</span>
                        </div>
                    </div>

                    {/* Integrated Search */}
                    <div className="flex-1 max-w-xl relative group">
                        <Search size={12} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                        <input
                            type="text"
                            placeholder="Find Nairobi's best..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full outline-none focus:bg-white/10 transition-all text-xs"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center shadow-lg cursor-pointer"><ShoppingBag size={18} /></div>
                        <div
                            onClick={() => setIsProfileOpen(true)}
                            className="hidden sm:flex w-10 h-10 bg-white/10 text-white/70 rounded-lg items-center justify-center border border-white/10 cursor-pointer hover:bg-white/20 transition-colors"
                        >
                            <User size={18} />
                        </div>
                    </div>
                </div>

                {/* Location Modal */}
                <LocationModal
                    isOpen={isLocationModalOpen}
                    onClose={() => setIsLocationModalOpen(false)}
                    onSelectLocation={(loc) => {
                        setUserLocation(loc);
                        setIsLocationModalOpen(false);
                    }}
                />

                {/* Profile Modal */}
                <ProfileModal
                    isOpen={isProfileOpen}
                    onClose={() => setIsProfileOpen(false)}
                />

                {/* MOBILE MENU DRAWER (US-STYLE REDESIGN) */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMenuOpen(false)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[300]"
                            />
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '-100%' }}
                                transition={{ type: 'spring', damping: 30, stiffness: 250 }}
                                className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-[301] p-8 flex flex-col shadow-2xl"
                            >
                                <div className="flex items-center justify-between mb-12">
                                    <div className="text-2xl font-heading font-black tracking-tighter text-black">
                                        Muncheez<span className="text-[#D4AF37]">.</span>
                                    </div>
                                    <button onClick={() => setIsMenuOpen(false)} className="w-8 h-8 flex items-center justify-center hover:bg-black/5 rounded-full transition-all">
                                        <X size={18} className="text-black" />
                                    </button>
                                </div>

                                <div className="space-y-1 flex-1 overflow-y-auto no-scrollbar">
                                    {[
                                        { label: 'The Kitchens', path: '/c/stores?v=kitchen', icon: '🍳' },
                                        { label: 'The Market', path: '/c/stores?v=market', icon: '🛒' },
                                        { label: 'Bakes & Blooms', path: '/c/stores?v=bakes', icon: '🥐' },
                                        { label: 'The Apothecary', path: '/c/stores?v=apothecary', icon: '💊' }
                                    ].map((link) => (
                                        <button
                                            key={link.label}
                                            onClick={() => { navigate(link.path); setIsMenuOpen(false); }}
                                            className="w-full flex items-center gap-4 py-4 px-4 hover:bg-black/5 rounded-xl transition-all group"
                                        >
                                            <span className="text-xl">{link.icon}</span>
                                            <span className="text-sm font-black uppercase tracking-widest text-black/80 group-hover:text-black transition-colors">{link.label}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-auto pt-8 border-t border-black/5">
                                    <div className="flex items-center gap-4 mb-4 px-4">
                                        <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center">
                                            <User size={18} className="text-black/40" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-black/80">Guest Account</div>
                                            <div className="text-[9px] font-bold text-black/40">Sign in to earn points</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Atmospheric Title Section */}
                <div className="max-w-7xl mx-auto relative z-20 mb-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="space-y-4">
                            <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.4em] block blur-[0.3px]">{config.subtitle}</span>
                            <h1 className="text-4xl md:text-8xl font-heading font-light tracking-tighter text-white leading-none">
                                {config.title}
                            </h1>
                        </div>
                        <p className="text-white/30 text-xs md:text-sm max-w-sm font-medium leading-relaxed opacity-80">
                            {config.description}
                        </p>
                    </div>

                    {/* 2. Integrated Horizontal Switcher - Only visible on segmented views */}
                    {activeView !== 'general' && activeView !== '' && (
                        <div className="flex items-center gap-8 mt-12 py-4 border-b border-white/5 overflow-x-auto no-scrollbar">
                            {['general', 'kitchen', 'market', 'bakes', 'apothecary'].map(id => {
                                const segment = SEGMENT_MAP[id];
                                const isActive = activeView === id || (id === 'general' && activeView === '');
                                return (
                                    <button
                                        key={id}
                                        onClick={() => navigate(id === 'general' ? '/c/stores' : `/c/stores?v=${id}`)}
                                        className={`text-[9px] font-black uppercase tracking-[0.4em] transition-all whitespace-nowrap relative py-2 ${isActive ? 'text-[#D4AF37]' : 'text-white/20 hover:text-white/60'}`}
                                    >
                                        {id === 'general' ? 'The Collective' : segment.title}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activePillar"
                                                className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-[#D4AF37]"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* MOOD SLIDER (Minimalist Discovery Tags) */}
                {activeView === 'kitchen' && (
                    <div className="hidden lg:block max-w-7xl mx-auto relative z-20 pb-16">
                        <div className="flex items-center gap-4 flex-wrap">
                            <span className="text-[8px] font-black uppercase tracking-[0.5em] text-white/20 mr-4">Kitchen Discoveries:</span>
                            {Object.entries(MOOD_MAP).map(([id, mood]) => (
                                <button
                                    key={id}
                                    onClick={() => setSearchQuery(mood.name)}
                                    className={`px-6 py-2 rounded-full border border-white/5 bg-white/5 hover:border-white/20 transition-all group relative overflow-hidden`}
                                >
                                    <div className="flex items-center gap-3 relative z-10">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                                            {mood.name}
                                        </span>
                                        <ArrowRight size={10} className="text-white/20 group-hover:text-[#D4AF37] transition-colors" />
                                    </div>
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                                        style={{ backgroundColor: mood.color }}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <BottomCurve fill="#D4AF37" />
            </section>

            {/* 2. CATEGORIES & STORES - YELLOW SECTION */}
            <section className="relative bg-[#D4AF37] text-gray-900 pt-16 pb-48 px-6 lg:px-12 overflow-hidden">
                <div className="absolute inset-0 z-[5] opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-multiply" />

                <div className="max-w-7xl mx-auto relative z-20">
                    {/* Category Filter Pills & Reset */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-black text-white shadow-xl' : 'bg-black/5 text-black/40 hover:bg-black/10'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Reset Filter UI */}
                        {isFiltered && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                onClick={() => {
                                    setSearchQuery('');
                                    setActiveCategory('All');
                                }}
                                className="flex items-center gap-2 px-6 py-3 bg-black/10 hover:bg-black/20 rounded-full transition-all group shrink-0"
                            >
                                <span className="text-[10px] font-black uppercase tracking-widest">Clear Discovery</span>
                                <X size={14} className="group-hover:rotate-90 transition-transform" />
                            </motion.button>
                        )}
                    </div>

                    {/* Store Grid */}
                    {activeView === 'general' && searchQuery === '' && activeCategory === 'All' ? (
                        <div className="space-y-32">
                            {['kitchen', 'market', 'bakes', 'apothecary'].map(dept => {
                                const deptStores = MARKET_STORES.filter(s => s.departments.includes(dept as any));
                                if (deptStores.length === 0) return null;
                                const segmentConfig = SEGMENT_MAP[dept];

                                return (
                                    <div key={dept} className="space-y-12">
                                        <div className="flex items-end justify-between border-b border-black/10 pb-8">
                                            <div>
                                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 mb-3 block">{segmentConfig.subtitle}</span>
                                                <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter">{segmentConfig.title}</h2>
                                            </div>
                                            <button
                                                onClick={() => navigate(`/c/stores?v=${dept}`)}
                                                className="group flex items-center gap-4 py-2 relative"
                                            >
                                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/60 group-hover:text-black transition-colors">
                                                    Discover Selection
                                                </span>
                                                <div className="relative w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
                                                    <ArrowRight size={12} className="group-hover:text-white transition-colors" />
                                                </div>
                                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                                            {deptStores.slice(0, 4).map((store, idx) => (
                                                <StoreCard key={store.id} store={store} idx={idx} />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            <AnimatePresence mode='popLayout'>
                                {filteredMarketStores.map((store, idx) => (
                                    <StoreCard key={store.id} store={store} idx={idx} />
                                ))}
                            </AnimatePresence>
                        </div>
                    )}

                    {filteredMarketStores.length === 0 && (
                        <div className="text-center py-32">
                            <ShoppingBag size={64} className="mx-auto text-black/10 mb-6" />
                            <h3 className="text-3xl font-heading font-black mb-2">No matches found</h3>
                            <p className="text-black/40 font-medium">Try searching for something else or clearing your filters.</p>
                        </div>
                    )}
                </div>

                <BottomCurve fill="#000000" />
            </section>

            <Footer />
        </div>
    );
}
