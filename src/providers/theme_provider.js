"use client";
import {createContext, useContext, useState, useEffect} from "react";
import {LanguageProvider} from "@/providers/language_provider";


const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light')

    const switchTheme = (theme) => {
        setTheme(theme);
        localStorage.setItem('theme', theme)
        document.body.className = theme;
    }

    const onLoadTheme = () => {
        const localTheme = localStorage.getItem('theme') || theme
        switchTheme(localTheme)
    }

    useEffect(() => {
        let th = localStorage.getItem('theme')
        if (!th) th = 'light'
        setTheme(th)
        localStorage.setItem('theme', theme)
    }, []);

    const value = {
        theme,
        switchTheme,
        onLoadTheme
    }

    return (
        <body className={theme}>
            <ThemeContext.Provider value={value}>
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </ThemeContext.Provider>
        </body>
    )

}

export function useTheme() {
    return useContext(ThemeContext);
}
