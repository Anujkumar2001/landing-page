'use client'
import { useState, useEffect } from 'react';

export const useDevice = () => {
    const [device, setDevice] = useState('');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setDevice('ismobile');
            } else if (window.innerWidth < 1024) {
                setDevice('tablet');
            } else {
                setDevice('bigsreen');
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return device;
};
