import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

const Button = ({ children, className, variant = 'primary', ...props }) => {
    const variants = {
        primary: "bg-emerald-500/20 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/30",
        secondary: "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10",
        outline: "border-white/20 text-white hover:bg-white/5",
    };

    return (
        <button
            className={cn(
                "px-6 py-3 rounded-xl border font-medium transition-all active:scale-95",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
