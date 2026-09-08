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
        <header className="fixed left-0 right-0 top-4 z-40 px-4">
            <motion.nav
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-[#5D4037]/20 bg-[#F4F1EA]/85 px-4 py-3 shadow-[0_12px_50px_rgba(62,39,35,0.08)] backdrop-blur-md md:px-6"
            >
                <a href="#" className="font-serif text-2xl font-medium tracking-[-0.04em] text-[#3E2723]">
                    Lucas
                </a>

                <div className="hidden items-center gap-7 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5D4037] transition hover:text-[#3E2723]"
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
                        className="rounded-full border border-[#5D4037]/20 p-2 text-[#3E2723] transition hover:bg-[#E9E0D2]"
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
                        className="mx-auto mt-3 flex max-w-5xl flex-col gap-2 rounded-3xl border border-[#5D4037]/20 bg-[#F4F1EA]/95 p-4 shadow-[0_18px_60px_rgba(62,39,35,0.1)] backdrop-blur-md md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="rounded-2xl px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[#5D4037] transition hover:bg-[#E9E0D2] hover:text-[#3E2723]"
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
