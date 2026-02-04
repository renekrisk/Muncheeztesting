// Core System Entities for Muncheez
// Following the "Nairobi Soul" Architecture

export type MerchantType = 'Restaurant' | 'Supermarket' | 'Pharmacy' | 'Water' | 'Flowers';

export type MerchantStatus = 'PENDING' | 'VERIFICATION_PENDING' | 'APPROVED' | 'SUSPENDED';

// 1. Merchant Entity (Parent)
export interface Merchant {
    id: string;
    businessName: string;
    type: MerchantType;
    status: MerchantStatus;
    logoUrl?: string;
    coverImageUrl?: string;
    description: string;
    // Contact
    ownerName: string;
    ownerPhone: string; // M-Pesa linked
    email: string;
    // Compliance
    kraPin?: string;
    createdAt: Date;
    // Operational Toggles (Nairobi Specific)
    isActive: boolean;
    mpesaShortcode: string;
}

// 2. Merchant Location (Branch)
export interface MerchantLocation {
    id: string;
    merchantId: string;
    branchName: string; // e.g. "Westlands", "CBD"
    address: string;
    geo: {
        lat: number;
        lng: number;
    };
    deliveryRadiusKm: number;
    isActive: boolean; // "Live" toggle
}

// 3. Product / Inventory (Polymorphic)
export interface Product {
    id: string;
    merchantId: string;
    name: string;
    description?: string;
    price: number;
    imageUrl?: string;
    isAvailable: boolean;

    // Restaurant Specific
    categoryId?: string; // "Starters", "Mains"
    preparationTimeMin?: number;

    // Retail Specific (Supermarket/Pharmacy)
    sku?: string;
    stockLevel?: number;
    barcode?: string;
    isPrescriptionRequired?: boolean; // Pharmacy
    vatRate?: number; // 16% standard
}

// 4. Order (The "Process")
export type OrderStatus =
    | 'CREATED'
    | 'PAYMENT_PENDING'
    | 'PAYMENT_CONFIRMED'
    | 'AWAITING_MERCHANT_ACTION'
    | 'ACCEPTED'
    | 'PREPARING' // Restaurant
    | 'PACKING'   // Retail
    | 'READY_FOR_PICKUP'
    | 'RIDER_ASSIGNED'
    | 'PICKED_UP'
    | 'OUT_FOR_DELIVERY'
    | 'DELIVERED'
    | 'COMPLETED'
    | 'DECLINED'
    | 'CANCELLED'
    | 'FAILED';

export interface Order {
    id: string;
    customer: {
        id?: string;
        name: string;
        phone: string;
        orders_count?: number; // Added for CRM support
    };
    items: Array<{
        productId?: string;
        name: string;
        quantity: number;
        price: number;
        options?: string[]; // e.g. "Spicy", "No Onion"
    }>;
    total: number; // Simplified to match OrdersView expectation
    payment?: {
        method: string;
        status: string;
        mpesa_code?: string;
        amount_paid?: number;
    };
    status: OrderStatus;
    placedAt?: Date;
    time_placed?: string; // For display: "2 mins ago"
    delivery_address?: string;
    notes?: string;
}
