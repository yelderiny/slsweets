'use client';

import {createContext, useState, useContext, ReactNode, FC, Dispatch, SetStateAction} from 'react';
import {cartItem} from '@/types/product';

type AppContextType = {
    isMenuOpen: boolean;
    isCartOpen: boolean;
    cart: cartItem[];
    setCart: Dispatch<SetStateAction<cartItem[]>>;
    toggleMenu: () => void;
    toggleCart: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: FC<{ children: ReactNode }> = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cart, setCart] = useState<cartItem[]>([]);

    const toggleMenu = () => setIsMenuOpen(prevState => !prevState);
    const toggleCart = () => setIsCartOpen(prevState => !prevState);

    return (
        <AppContext.Provider value={{isMenuOpen, toggleMenu, isCartOpen, toggleCart, cart, setCart}}>
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