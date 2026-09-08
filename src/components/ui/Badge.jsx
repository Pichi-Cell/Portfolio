import React from 'react';

const Badge = ({ children, className = '' }) => {
    return (
        <span className={`rounded-full border border-[#5D4037]/25 bg-[#F4F1EA]/70 px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#5D4037] ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
