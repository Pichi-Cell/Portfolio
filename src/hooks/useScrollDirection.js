import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState('up');
    const [prevOffset, setPrevOffset] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentOffset = window.pageYOffset;
            const direction = currentOffset > prevOffset ? 'down' : 'up';

            if (direction !== scrollDirection && (currentOffset - prevOffset > 10 || currentOffset - prevOffset < -10)) {
                setScrollDirection(direction);
            }

            setPrevOffset(currentOffset);
            setIsVisible(currentOffset > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollDirection, prevOffset]);

    return { scrollDirection, isVisible };
};
