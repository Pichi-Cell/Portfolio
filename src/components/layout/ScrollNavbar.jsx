import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const ScrollNavbar = ({ ui }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const navLinks = [
        { name: ui.nav.portfolio, href: '#portfolio' },
        { name: ui.nav.skills, href: '#skills' },
        { name: ui.nav.experience, href: '#experience' },
        { name: ui.nav.contact, href: '#contact' },
    ];

    return (
        <header className="fixed left-0 right-0 top-0 z-40">
            <motion.nav
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="flex w-full items-center justify-between border-b border-[#5D4037]/10 bg-[#d2bea2]/35 px-5 py-4 backdrop-blur-[2px] md:px-8"
            >
                <a href="#" className="font-serif text-2xl font-semibold tracking-[-0.04em] text-[#3E2723]/80 transition hover:text-[#3E2723]">
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

                <div className="flex items-center gap-3 md:hidden">
                    <LanguageSwitcher />
                    <button
                        type="button"
                        className="rounded-full p-2 text-[#3E2723]/80 transition hover:bg-[#E9E0D2]/55 hover:text-[#3E2723]"
                        onClick={() => setIsMobileMenuOpen((open) => !open)}
                        aria-label="Toggle navigation"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 flex w-full flex-col gap-1 border-b border-[#5D4037]/15 bg-[#d2bea2]/90 p-4 backdrop-blur-md md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-2 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#5D4037] transition hover:text-[#3E2723]"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default ScrollNavbar;
