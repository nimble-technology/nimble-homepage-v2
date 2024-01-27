import React from 'react';
import { useSpring, animated } from 'react-spring';

const BreathPart = ({src, alt, customStyle}) => {
    const { transform } = useSpring({
        from: {
            transform: 'scale(1)',
        },
        to: async (next, cancel) => {
            while (1) {
                await next({ transform: 'scale(1.05)' });
                await next({ transform: 'scale(1)' });
            }
        },
    });
    
    return <animated.img src={src} alt={alt} style={{ ...customStyle, transform }} />;
};

export default BreathPart;
