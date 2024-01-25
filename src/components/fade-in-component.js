import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const FadeInSection = ({ children }) => {
    const [isVisible, setVisible] = useState(false);
    const ref = useRef();

    const props = useSpring({ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        config: { duration: 1000 }
    });

    const onScroll = () => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const isIntersecting = rect.top < window.innerHeight && rect.bottom >= 0;
            setVisible(isIntersecting);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <animated.div style={props} ref={ref}>
            {children}
        </animated.div>
    );
};

export default FadeInSection;
