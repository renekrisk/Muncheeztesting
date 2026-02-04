import { createContext, useContext, useState, ReactNode } from 'react';
import { Merchant, Product, Order } from '../types/schema';

// 🧠 MOCK DB CONTEXT
// This acts as our "Server" for the prototype.
// It holds the state for Merchants, Products, and Orders in memory.

interface MockDatabaseData {
    merchants: Merchant[];
    products: Product[];
    orders: Order[];

    // Actions
    updateMerchantStatus: (id: string, isOpen: boolean) => void;
    registerMerchant: (merchant: Merchant) => void;
    addOrder: (order: Order) => void;
    updateOrderStatus: (orderId: string, status: Order['status']) => void;

    // Selectors
    getMerchantProducts: (merchantId: string) => Product[];
    getMerchantOrders: (merchantId: string) => Order[];
}

const MockDatabaseContext = createContext<MockDatabaseData | undefined>(undefined);

export const MockDatabaseProvider = ({ children }: { children: ReactNode }) => {

    // 1. SEED DATA - MERCHANTS
    const [merchants, setMerchants] = useState<Merchant[]>([
        {
            id: 'm1',
            businessName: 'Java House',
            type: 'Restaurant',
            status: 'APPROVED',
            logoUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=200',
            description: 'Nairobi\'s finest coffee and casual dining.',
            ownerName: 'Julius K.',
            ownerPhone: '0722000000',
            email: 'manager@javahouse.com',
            createdAt: new Date(),
            // @ts-ignore - Extending type locally for "Open/Close" toggle not in schema yet but needed for logic
            isActive: true,
            mpesaShortcode: '555555'
        },
        {
            id: 'm2',
            businessName: 'Carrefour Market',
            type: 'Supermarket',
            status: 'APPROVED',
            logoUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200',
            description: 'Fresh groceries and daily essentials.',
            ownerName: 'Sarah M.',
            ownerPhone: '0733000000',
            email: 'sarah@carrefour.co.ke',
            createdAt: new Date(),
            isActive: true,
            mpesaShortcode: '555555'
        },
        {
            id: 'm3',
            businessName: 'Goodlife Pharmacy',
            type: 'Pharmacy',
            status: 'APPROVED',
            logoUrl: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=200',
            description: 'Trusted health and wellness.',
            ownerName: 'Dr. John',
            ownerPhone: '0711000000',
            email: 'pharmacy@goodlife.co.ke',
            createdAt: new Date(),
            isActive: true, // 🟢 OPEN (Ready to view)
            mpesaShortcode: '555555'
        }
    ]);

    // 2. SEED DATA - PRODUCTS
    const products: Product[] = [
        // Java House Items (Java House Uber Eats Seeding)
        { id: 'p1', merchantId: 'm1', name: 'Java Special Chicken Curry', price: 1110, isAvailable: true, categoryId: 'Featured items', description: '#1 most liked' },
        { id: 'p2', merchantId: 'm1', name: 'Teriyaki Beef Stir Fry', price: 1270, isAvailable: true, categoryId: 'Featured items', description: '#2 most liked' },
        { id: 'p3', merchantId: 'm1', name: 'Breakfast Maxi Combo', price: 1040, isAvailable: true, categoryId: 'Featured items', description: '#3 most liked' },
        { id: 'p4-jh', merchantId: 'm1', name: 'Sausages', price: 370, isAvailable: true, categoryId: 'Featured items' },
        { id: 'p5-jh', merchantId: 'm1', name: 'Pork Spare Ribs', price: 1620, isAvailable: true, categoryId: 'Featured items' },
        { id: 'p6-jh', merchantId: 'm1', name: "Ben's Burger", price: 1200, isAvailable: true, categoryId: 'Featured items' },
        { id: 'p7-jh', merchantId: 'm1', name: 'Chocolate Chip MilkShake', price: 570, isAvailable: true, categoryId: 'Picked for you', description: 'Popular' },
        { id: 'p8-jh', merchantId: 'm1', name: 'Loaded Full Java (with Side Fruit Salad)🥳', price: 1290, isAvailable: true, categoryId: 'Loaded Full Java Breakfast', description: 'Enjoy 15% Off this sumptous combo' },
        { id: 'p9-jh', merchantId: 'm1', name: 'Beef Burger', price: 1390, isAvailable: true, categoryId: 'Beef / Chicken Burger + Smoothie', description: 'Juicy beef patty, crisp lettuce, ripe tomato and our signature chilli mayo on a toasted brioche bun' },
        { id: 'p10-jh', merchantId: 'm1', name: 'Grilled Chicken Burger', price: 1390, isAvailable: true, categoryId: 'Beef / Chicken Burger + Smoothie', description: 'Juicy grilled chicken breast, crisp lettuce, ripe tomatoes, and chilli mayo, all stacked on a toasted brioche bun' },
        { id: 'p11-jh', merchantId: 'm1', name: 'Pineapple Mint Cake', price: 490, isAvailable: true, categoryId: 'Pineapple Mint Cake (Buy One Get One Free)', description: 'A moist vanilla sponge delicately infused with mint and crowned with airy pineapple whipped cream.' },
        { id: 'p12-jh', merchantId: 'm1', name: 'Plain Bagel', price: 150, isAvailable: true, categoryId: 'New January Specials' },
        { id: 'p13-jh', merchantId: 'm1', name: 'Grilled Beef Avo Sandwich', price: 1390, isAvailable: true, categoryId: 'Celebrity Guest Chef (Shawry For Food)', description: 'Tender grilled steak layered with crisp lettuce, fresh tomatoes, and creamy avocado in a hearty sandwich.' },
        { id: 'p14-jh', merchantId: 'm1', name: 'Two eggs with sausage', price: 830, isAvailable: true, categoryId: 'Breakfast' },
        { id: 'p15-jh', merchantId: 'm1', name: 'Barbecue Roast Chicken', price: 1400, isAvailable: true, categoryId: 'Signature Dishes' },
        { id: 'p16-jh', merchantId: 'm1', name: 'Mushroom Steak', price: 1650, isAvailable: true, categoryId: 'Signature Dishes' },
        { id: 'p17-jh', merchantId: 'm1', name: 'Ala Carte Crunchy Chicken Burger', price: 990, isAvailable: true, categoryId: 'Burgers' },
        { id: 'p18-jh', merchantId: 'm1', name: 'Ala Carte Full House Burger', price: 1060, isAvailable: true, categoryId: 'Ala Carte Burgers' },
        { id: 'p19-jh', merchantId: 'm1', name: 'Java Lunch Combo', price: 1230, isAvailable: true, categoryId: 'Sandwiches' },
        { id: 'p20-jh', merchantId: 'm1', name: 'Crunchy Chicken Strip Wrap', price: 1000, isAvailable: true, categoryId: 'Wraps' },
        { id: 'p21-jh', merchantId: 'm1', name: 'BBQ Chicken & Cheese Wrap', price: 1020, isAvailable: true, categoryId: 'Wraps', description: 'A wrap with lettuce,tomatoes,BBQ chicken and cheese folded with a home made flour tortila.' },
        { id: 'p22-jh', merchantId: 'm1', name: 'Caesar Salad with Grilled Chicken', price: 1040, isAvailable: true, categoryId: 'Salads' },
        { id: 'p23-jh', merchantId: 'm1', name: 'Chips and Beef Sausage', price: 610, isAvailable: true, categoryId: 'Snacks', description: 'Crispy fries paired with juicy beef sausages' },
        { id: 'p24-jh', merchantId: 'm1', name: 'Tomato Soup', price: 750, isAvailable: true, categoryId: 'Soup', description: 'A warm, velvety tomato soup with a hint of herbs—simple, cozy, and full of flavor.' },
        { id: 'p25-jh', merchantId: 'm1', name: 'Triple Caramel Macchiato', price: 470, isAvailable: true, categoryId: 'Coffee Drinks.' },
        { id: 'p26-jh', merchantId: 'm1', name: 'Hibiscus Mint Tea', price: 280, isAvailable: true, categoryId: 'Tea & Chocolates' },
        { id: 'p27-jh', merchantId: 'm1', name: 'Strawberry Splash Smoothie', price: 530, isAvailable: true, categoryId: 'Smoothies', description: 'A refreshing blend of ripe strawberries and creamy yogurt' },
        { id: 'p28-jh', merchantId: 'm1', name: 'Green Smoothie', price: 530, isAvailable: true, categoryId: 'Smoothies', description: 'A vibrant blend of spinach, ginger and banana with a splash of mango juice.' },
        { id: 'p29-jh', merchantId: 'm1', name: 'Chocolate MilkShake', price: 550, isAvailable: true, categoryId: 'Milkshakes' },

        // Carrefour Items
        { id: 'p30', merchantId: 'm2', name: 'Fresh Organic Kale', price: 150, isAvailable: true, stockLevel: 20, sku: 'GRN-KALE', categoryId: 'Fresh Produce', description: 'Grown locally in Limuru' },
        { id: 'p31', merchantId: 'm2', name: 'Premium Avocado (Large)', price: 90, isAvailable: true, stockLevel: 45, sku: 'FR-AVO', categoryId: 'Fresh Produce' },
        { id: 'p32', merchantId: 'm2', name: 'Full Cream Milk 1L', price: 145, isAvailable: true, stockLevel: 100, sku: 'DY-MLK', categoryId: 'Dairy' },
        { id: 'p33', merchantId: 'm2', name: 'Classic Baguette', price: 120, isAvailable: true, stockLevel: 15, sku: 'BK-BAG', categoryId: 'Bakery' },

        // Pharmacy Items
        { id: 'p34', merchantId: 'm3', name: 'Pain Relief (Extra Strength)', price: 450, isAvailable: true, stockLevel: 50, sku: 'MED-PAN', categoryId: 'Medicine', description: 'Fast-acting relief' },
        { id: 'p35', merchantId: 'm3', name: 'Vitamin C 1000mg', price: 1200, isAvailable: true, stockLevel: 30, sku: 'VIT-C', categoryId: 'Wellness' },
        { id: 'p36', merchantId: 'm3', name: 'Antiseptic Liquid 500ml', price: 850, isAvailable: true, stockLevel: 25, sku: 'AID-DET', categoryId: 'First Aid' },
        { id: 'p37', merchantId: 'm3', name: 'Gentle Baby Wipes (80pk)', price: 650, isAvailable: true, stockLevel: 40, sku: 'BBY-WIPE', categoryId: 'Baby & Child' },
        { id: 'p38', merchantId: 'm3', name: 'Hydrating Face Serum', price: 2400, isAvailable: true, stockLevel: 12, sku: 'SKN-SER', categoryId: 'Personal Care' },
    ];

    // 3. SEED DATA - ORDERS (Shared Global State)
    const [orders, setOrders] = useState<Order[]>([]);

    // ACTIONS
    const updateMerchantStatus = (id: string, isOpen: boolean) => {
        setMerchants(prev => prev.map(m => m.id === id ? { ...m, isActive: isOpen } : m));
    };

    const registerMerchant = (merchant: Merchant) => {
        console.log("⚡ [MOCK DB] New Merchant Registered:", merchant);
        setMerchants(prev => [...prev, merchant]);
    };

    const addOrder = (order: Order) => {
        console.log("⚡ [MOCK DB] New Order Injected:", order);
        setOrders(prev => [order, ...prev]);
    };

    const updateOrderStatus = (orderId: string, status: Order['status']) => {
        setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
    };

    // SELECTORS
    const getMerchantProducts = (merchantId: string) => products.filter(p => p.merchantId === merchantId);
    const getMerchantOrders = () => orders;

    return (
        <MockDatabaseContext.Provider value={{
            merchants,
            products,
            orders,
            updateMerchantStatus,
            registerMerchant,
            addOrder,
            updateOrderStatus,
            getMerchantProducts,
            getMerchantOrders
        }}>
            {children}
        </MockDatabaseContext.Provider>
    );
};

export const useMockDatabase = () => {
    const context = useContext(MockDatabaseContext);
    if (!context) throw new Error('useMockDatabase must be used within a MockDatabaseProvider');
    return context;
};
