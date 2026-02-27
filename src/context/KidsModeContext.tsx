import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface KidsModeContextType {
    isKidsMode: boolean;
    toggleKidsMode: () => void;
}

const KidsModeContext = createContext<KidsModeContextType | undefined>(undefined);

export const KidsModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isKidsMode, setIsKidsMode] = useState(false);

    const toggleKidsMode = () => {
        setIsKidsMode((prev) => !prev);
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    return (
        <KidsModeContext.Provider value={{ isKidsMode, toggleKidsMode }}>
            {children}
        </KidsModeContext.Provider>
    );
};

export const useKidsMode = () => {
    const context = useContext(KidsModeContext);
    if (context === undefined) {
        throw new Error('useKidsMode must be used within a KidsModeProvider');
    }
    return context;
};
