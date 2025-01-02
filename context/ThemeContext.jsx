'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme } from "@radix-ui/themes";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('inherit');

    useEffect(() => {
        const storedTheme = window.localStorage.getItem('x-theme');
        if (storedTheme && ['inherit', 'light', 'dark'].includes(storedTheme)) {
            setTheme(storedTheme);
        }
    }, []);

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        window.localStorage.setItem('x-theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
            <Theme appearance={theme}>{children}</Theme>
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
