import { useSpring, animated } from 'react-spring';

const AnimatedPart = ({ src, alt, customStyle, startX, startY, endX, endY }) => {
    const animation = useSpring({
        from: { transform: `translate(${startX}px, ${startY}px)` },
        to: [
            { transform: `translate(${endX}px, ${endY}px)` },
            { transform: `translate(${startX}px, ${startY}px)` },
        ],
        reset: true,
        loop: true,
        config: { duration: 3000 },
    });

    const animatedStyle = {
        ...customStyle,
        ...animation,
    };
    
    return <animated.img src={src} alt={alt} style={animatedStyle} />;
};
    
export default AnimatedPart;
