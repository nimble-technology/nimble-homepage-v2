import React from 'react';
import { useSpring, animated } from 'react-spring';

const SwingingSquare = ({src, alt, customStyle}) => {
  const { transform } = useSpring({
    from: { transform: 'rotate(-45deg)' },
    to: { transform: 'rotate(0deg)' },
    loop: { reverse: true },
    config: {
      duration: 2000,
    },
    loop: { reverse: true },
  });

  return <animated.img src={src} alt={alt} style={{ ...customStyle, transform }} />;
};

export default SwingingSquare;
