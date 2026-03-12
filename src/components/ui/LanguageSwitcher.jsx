import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher = () => {
    const { lang, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="relative flex items-center gap-0.5 text-xs font-bold tracking-wider rounded-full border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden select-none"
            aria-label="Toggle language"
            id="language-switcher"
        >
            <span
                className={`relative z-10 px-2.5 py-1.5 transition-colors duration-300 ${lang === 'en' ? 'text-emerald-400' : 'text-slate-400'
                    }`}
            >
                EN
            </span>
            <span
                className={`relative z-10 px-2.5 py-1.5 transition-colors duration-300 ${lang === 'es' ? 'text-emerald-400' : 'text-slate-400'
                    }`}
            >
                ES
            </span>

            {/* Animated highlight pill */}
            <motion.div
                className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-emerald-500/15 border border-emerald-500/30"
                animate={{ x: lang === 'en' ? 2 : '100%' }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
        </button>
    );
};

export default LanguageSwitcher;
