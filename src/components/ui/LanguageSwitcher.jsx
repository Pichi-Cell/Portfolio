import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher = () => {
    const { lang, toggleLanguage } = useLanguage();

    return (
        <button
            type="button"
            onClick={toggleLanguage}
            className="relative grid h-11 w-[5.75rem] grid-cols-2 overflow-hidden rounded-full border border-[#5D4037]/15 bg-[#E9E0D2]/35 p-0.5 font-mono text-[10px] font-semibold uppercase leading-none tracking-[0.16em] text-[#5D4037]"
            aria-label="Toggle language"
            id="language-switcher"
        >
            <span
                aria-hidden="true"
                className={`absolute bottom-0.5 left-0.5 top-0.5 w-[calc(50%_-_2px)] rounded-full bg-[#3E2723]/80 transition-transform duration-300 ease-out ${lang === 'es' ? 'translate-x-full' : 'translate-x-0'}`}
            />
            <span className={`relative z-10 flex h-full w-full items-center justify-center [text-indent:0.16em] transition ${lang === 'en' ? 'text-[#F4F1EA]' : 'text-[#5D4037]/75'}`}>
                EN
            </span>
            <span className={`relative z-10 flex h-full w-full items-center justify-center [text-indent:0.16em] transition ${lang === 'es' ? 'text-[#F4F1EA]' : 'text-[#5D4037]/75'}`}>
                ES
            </span>
        </button>
    );
};

export default LanguageSwitcher;
