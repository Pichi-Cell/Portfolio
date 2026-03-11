import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { Menu, X } from 'lucide-react';
import content from '../../data/content.json';

const ScrollNavbar = () => {
    const { scrollDirection, isVisible } = useScrollDirection();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const navLinks = [
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
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
                            {content.profile.name.split(' ')[0]}
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden text-slate-300"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
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
                                        key={link.name}
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
