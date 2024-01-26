import React from 'react';
import { useContext } from 'react';
import { Typography, Box, useTheme, Button } from '@mui/material';
import { useMobileContext } from '../mobileContext';
import { HoverContext } from './hover-context-component';

const PeopleCardItem = ({ imageSrc, title, career, link }) => {

    const theme = useTheme();
    const isMobile = useMobileContext();
    const isHovered = useContext(HoverContext);

    const titleFontSize = isMobile ? '16px' : isHovered ? '26px' : '24px';
    const careerFontSize = isMobile ? '12px' : isHovered ? '16px' : '14px';

    return (
        <Button onClick={() => window.open(link, '_blank')} sx={{ padding: 0, width: '100%', textAlign: 'left' }}>
            <Box>
                <Box sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Box component="img" src="/assets/avatar-circle.png" sx={{ width: isMobile ? '160px' : '244px', height: isMobile ? '160px' : '245px' }} />
                    <Box component="img" src={imageSrc} sx={{ width: isMobile ? '110px' : '167px', height: isMobile ? '110px' : '168px', position: 'absolute', borderRadius: '50%', objectFit: 'cover', }} />
                </Box>
                <Typography
                    sx={{
                        fontFamily: "'Manrope', cursive",
                        fontSize: titleFontSize,
                        fontWeight: isHovered ? 800 : 700,
                        letterSpacing: 0,
                        textAlign: 'center',
                        color: isHovered ? theme.palette.primary.main : theme.palette.text.secondary,
                        marginTop: '20px',
                    }}>
                    {title}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "'Manrope', cursive",
                        fontSize: careerFontSize,
                        fontWeight: isHovered ? 500 : 400,
                        letterSpacing: 0,
                        textAlign: 'center',
                        color: isHovered ? theme.palette.primary.main : theme.palette.text.secondary,
                        marginTop: '5px',
                    }}>
                    {career}<br />
                </Typography>
            </Box>
        </Button>
    );
};

export default PeopleCardItem;
