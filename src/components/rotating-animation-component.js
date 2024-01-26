import { useSpring, animated } from 'react-spring';

const RotatingPart = ({ src, alt, style }) => {
  const { transform } = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    loop: true,
    reset: true,
    config: { duration: 4000 },
  });

  return <animated.img src={src} alt={alt} style={{ ...style, transform }} />;
};

export default RotatingPart;
