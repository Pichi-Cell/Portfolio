import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const ScrollNavbar = ({ ui }) => {
    const { scrollDirection, isVisible } = useScrollDirection();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const navLinks = [
        { name: ui.nav.portfolio, href: '#portfolio' },
        { name: ui.nav.skills, href: '#skills' },
        { name: ui.nav.experience, href: '#experience' },
        { name: ui.nav.contact, href: '#contact' },
    ];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    initial={{ y: -100 }}
                    animate={{ y: scrollDirection === 'down' ? -100 : 0 }}
                    exit={{ y: -100 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-center"
                >
                    <div className="glass px-6 py-3 flex items-center justify-between w-full max-w-4xl">
                        <a href="#" className="font-bold text-lg bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            Lucas
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <LanguageSwitcher />
                        </div>

                        {/* Mobile Toggle */}
                        <div className="flex md:hidden items-center gap-3">
                            <LanguageSwitcher />
                            <button
                                className="text-slate-300"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="absolute top-20 left-4 right-4 glass p-6 flex flex-col gap-4 md:hidden"
                            >
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-lg font-medium text-slate-300 hover:text-emerald-400"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default ScrollNavbar;
