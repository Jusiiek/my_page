"use client";
import { createContext, useContext, useState, useEffect } from 'react';

import en from "@/languages/en.json";
import pl from "@/languages/pl.json"

const languages = { en, pl };
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en');

    const translate = (key) => {
        if (key.includes('.')) {
            const splittedKey = key.split('.')
            return languages[language][splittedKey[0]][splittedKey[1]] || key;
        }
        return key
    };

    const switchLanguage = (lang) => {

        setLanguage(lang);
        localStorage.setItem('lang', lang);
    }

    const onLoadLanguage = () => {
        const localLanguage = localStorage.getItem('lang') || language
        switchLanguage(localLanguage)
    }

    useEffect(() => {
        let lang = localStorage.getItem('lang') || 'en'
        switchLanguage(lang)
    }, [language]);

    const value = {
        language,
        translate,
        switchLanguage,
        onLoadLanguage
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
