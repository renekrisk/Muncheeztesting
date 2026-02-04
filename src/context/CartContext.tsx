import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types/schema';

export interface CartItem extends Product {
    quantity: number;
    options?: string[];
}

interface CartContextData {
    items: CartItem[];
    merchantId: string | null;
    addItem: (product: Product, quantity?: number) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, delta: number) => void;
    clearCart: () => void;
    total: number;
    itemCount: number;
}

const CartContext = createContext<CartContextData | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [merchantId, setMerchantId] = useState<string | null>(null);

    const addItem = (product: Product, quantity: number = 1) => {
        // Enforce single-merchant cart (Nairobi operational reality)
        if (merchantId && merchantId !== product.merchantId) {
            if (window.confirm("Adding this item will clear your cart from the previous store. Proceed?")) {
                setItems([{ ...product, quantity }]);
                setMerchantId(product.merchantId);
            }
            return;
        }

        setMerchantId(product.merchantId);
        setItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                // Stock Check for Retail
                if (product.stockLevel && existing.quantity >= product.stockLevel) {
                    alert(`Sorry, only ${product.stockLevel} units left in stock.`);
                    return prev;
                }
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
            }
            return [...prev, { ...product, quantity }];
        });
    };

    const updateQuantity = (productId: string, delta: number) => {
        setItems(prev => prev.map(item => {
            if (item.id !== productId) return item;
            const newQty = Math.max(0, item.quantity + delta);

            // Stock Check for Retail
            if (item.stockLevel && newQty > item.stockLevel) {
                alert(`Cannot exceed ${item.stockLevel} available units.`);
                return item;
            }
            return { ...item, quantity: newQty };
        }).filter(item => item.quantity > 0));
    };

    const removeItem = (productId: string) => {
        setItems(prev => {
            const newItems = prev.filter(item => item.id !== productId);
            if (newItems.length === 0) setMerchantId(null);
            return newItems;
        });
    };

    const clearCart = () => {
        setItems([]);
        setMerchantId(null);
    };

    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            items,
            merchantId,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            total,
            itemCount
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};
