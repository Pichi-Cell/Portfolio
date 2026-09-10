import React from 'react';

const FloralIllustration = ({ className = '' }) => {
    return (
        <img
            src="/floral.svg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            width="360"
            height="520"
            className={className}
        />
    );
};

export default FloralIllustration;
