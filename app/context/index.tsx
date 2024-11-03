'use client';

import React, {createContext, useState, useContext, ReactNode} from 'react';
import {product} from '@/types/product';

type AppContextType = {
    isMenuOpen: boolean;
    isCartOpen: boolean;
    products: product[];
    cart: product[];
    setCart: (cart: product[]) => void;
    setProducts: (products: product[]) => void;
    toggleMenu: () => void;
    toggleCart: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cart, setCart] = useState<product[]>([]);
    const [products, setProducts] = useState<product[]>([]);

    const toggleMenu = () => setIsMenuOpen(prevState => !prevState);
    const toggleCart = () => setIsCartOpen(prevState => !prevState);

    return (
        <AppContext.Provider value={{ isMenuOpen, toggleMenu, isCartOpen, toggleCart, cart, setCart, products, setProducts }}>
            {children}
        </AppContext.Provider>
    );
};

// Create a custom hook for easier context usage
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};