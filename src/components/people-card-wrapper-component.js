import React, { createContext, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useMobileContext } from '../mobileContext';
import { HoverContext } from './hover-context-component';

const PeopleCardWrapper = ({ children }) => {

    const isMobile = useMobileContext();
    const [isHovered, setIsHovered] = useState(false);
    const [hoverProps, setHoverProps] = useSpring(() => ({
        config: { mass: 5, tension: 350, friction: 40 }
    }));

    return (
        <HoverContext.Provider value={isHovered}>
            <animated.div
                onMouseEnter={() => 
                    {
                        setIsHovered(true);
                        setHoverProps({ transform: 'scale(1.05)'});
                    }}
                onMouseLeave={() => 
                    {
                        setIsHovered(false);
                        setHoverProps({ transform: 'scale(1)'});
                    }}
                style={{ 
                    position: 'relative',
                    width: '260px',
                    height: isMobile ? '230px' : '360px',
                    ...hoverProps }}
            >
                {children}
            </animated.div>
        </HoverContext.Provider>
    );
};

export default PeopleCardWrapper;
