"use client";
import { useState, useContext, createContext } from "react";

const ThemeContext = createContext<[number, React.Dispatch<React.SetStateAction<number> >]| []>([]);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(0);
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
