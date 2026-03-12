import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const STORAGE_KEY = 'portfolio-lang';

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        try {
            return localStorage.getItem(STORAGE_KEY) || 'en';
        } catch {
            return 'en';
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch { /* ignore */ }
    }, [lang]);

    const toggleLanguage = () => setLang((prev) => (prev === 'en' ? 'es' : 'en'));

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
    return ctx;
};
