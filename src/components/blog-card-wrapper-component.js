import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const BlogCardWrapper = ({ children }) => {
    const [isVisible, setVisible] = useState(false);
    const [isHovered, setHovered] = useState(false); 
    const ref = useRef();

    const props = useSpring({
        transform: isVisible ? (isHovered ? 'scale(1.05)' : 'scale(1)') : 'scale(0.7)',
        config: { tension: 150, friction: 40 }
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return (
        <animated.div 
            ref={ref} 
            style={props}
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
        >
            {children}
        </animated.div>
    );
};

export default BlogCardWrapper;
