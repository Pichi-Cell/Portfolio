import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

const Button = ({ children, className, variant = 'primary', ...props }) => {
    const variants = {
        primary: 'border-[#3E2723] bg-[#3E2723] text-[#F4F1EA] hover:bg-[#5D4037]',
        secondary: 'border-[#5D4037]/25 bg-[#F4F1EA]/70 text-[#3E2723] hover:bg-[#E9E0D2]',
        outline: 'border-[#5D4037]/30 text-[#3E2723] hover:bg-[#E9E0D2]',
    };

    return (
        <button
            className={cn(
                'min-h-[44px] w-full rounded-full border px-6 py-3 font-mono text-xs font-medium uppercase tracking-[0.16em] transition-all active:scale-95 sm:w-auto',
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
