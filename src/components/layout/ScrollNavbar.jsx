import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const ScrollNavbar = ({ ui }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        document.body.classList.toggle('menu-open', isMobileMenuOpen);
        return () => document.body.classList.remove('menu-open');
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: ui.nav.portfolio, href: '#portfolio' },
        { name: ui.nav.skills, href: '#skills' },
        { name: ui.nav.experience, href: '#experience' },
        { name: ui.nav.contact, href: '#contact' },
    ];

    return (
        <header className="fixed left-0 right-0 top-0 z-50">
            <motion.nav
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="relative z-20 flex min-h-[64px] w-full items-center justify-between border-b border-[#5D4037]/10 bg-[#d2bea2]/60 px-4 py-2.5 backdrop-blur-[2px] sm:px-6 md:min-h-[72px] md:px-8 md:py-4"
            >
                <a href="#" className="font-serif text-2xl font-semibold tracking-[-0.04em] text-[#3E2723]/80 transition hover:text-[#3E2723] md:text-[1.7rem]">
                    Lucas
                </a>

                <div className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5D4037]/75 transition hover:text-[#3E2723]"
                        >
                            {link.name}
                        </a>
                    ))}
                    <LanguageSwitcher />
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <LanguageSwitcher />
                    <button
                        type="button"
                        className="inline-flex min-h-[44px] items-center rounded-full border border-[#5D4037]/15 bg-[#E9E0D2]/35 px-4 font-serif text-lg font-medium tracking-[-0.03em] text-[#3E2723]/85 transition hover:bg-[#E9E0D2]/60 hover:text-[#3E2723]"
                        onClick={() => setIsMobileMenuOpen((open) => !open)}
                        aria-label="Toggle navigation"
                        aria-controls="mobile-navigation"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        id="mobile-navigation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="fixed inset-0 z-10 flex flex-col justify-between overflow-y-auto bg-[#d2bea2] px-6 pb-8 pt-24 md:hidden"
                    >
                        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_20%_10%,rgba(249,248,246,0.45),transparent_18rem),radial-gradient(circle_at_90%_80%,rgba(93,64,55,0.10),transparent_20rem)]" />

                        <nav className="relative z-10 border-y border-[#5D4037]/20 py-4" aria-label="Mobile navigation">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="group grid min-h-[72px] grid-cols-[2.5rem_1fr] items-center border-b border-[#5D4037]/15 py-3 font-serif text-[clamp(2.6rem,13vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.055em] text-[#3E2723] last:border-b-0"
                                >
                                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#8D6E63]">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                    <span className="transition group-hover:translate-x-1">{link.name}</span>
                                </a>
                            ))}
                        </nav>

                        <p className="relative z-10 max-w-xs border-l border-[#5D4037]/25 pl-4 font-mono text-[10px] uppercase leading-5 tracking-[0.18em] text-[#5D4037]/75">
                            Archival index / Lucas Picchi / mobile edition
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default ScrollNavbar;
