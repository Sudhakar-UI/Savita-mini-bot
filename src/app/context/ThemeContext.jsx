"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const [isNightMode, setIsNightMode] = useState(true);
    const [isTelegram, setIsTelegram] = useState(false);

    useEffect(() => {
        const tg = window?.Telegram?.WebApp;

        if (tg) {
            setIsTelegram(true);

            // Telegram theme
            setIsNightMode(tg.colorScheme === "dark");

            const handleThemeChange = () => {
                setIsNightMode(tg.colorScheme === "dark");
            };

            tg.onEvent("themeChanged", handleThemeChange);

            return () => tg.offEvent("themeChanged", handleThemeChange);
        }
    }, []);

    useEffect(() => {
        document.body.classList.toggle("nightmode", isNightMode);
    }, [isNightMode]);

    // Manual toggle ONLY when not in Telegram
    const toggleNightMode = () => {
        if (!isTelegram) {
            setIsNightMode((prev) => !prev);
        }
    };

    return (
        <ThemeContext.Provider value={{ isNightMode, toggleNightMode, isTelegram }}>
            {children}
        </ThemeContext.Provider>
    );
}