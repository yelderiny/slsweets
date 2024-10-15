'use client';

import React, {createContext, useState, useContext, ReactNode} from 'react';

type AppContextType = {
    isMenuOpen: boolean;
    toggleMenu: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

    return (
        <AppContext.Provider value={{ isMenuOpen, toggleMenu }}>
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