import React from 'react';

const Badge = ({ children, className }) => {
    return (
        <span className={`px-3 py-1 text-xs font-semibold rounded-full border border-white/10 bg-white/5 text-slate-300 ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
