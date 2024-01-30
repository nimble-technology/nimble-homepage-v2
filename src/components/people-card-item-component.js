import React, { useState } from 'react';
import { Typography, Box, useTheme, Button } from '@mui/material';
import { useMobileContext } from '../mobileContext';

const PeopleCardItem = ({ imageSrc, title, career, link }) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const theme = useTheme();
    const isMobile = useMobileContext();
    const baseUrl = process.env.REACT_APP_BLOGS_URL;

    const titleFontSize = isMobile ? '16px' : '24px';
    const careerFontSize = isMobile ? '12px' : '14px';

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
                    <Box 
                        component="img" 
                        src={isLoaded ? imageSrc : baseUrl + "/assets/default-avatar.png"} 
                        onLoad={() => setIsLoaded(true)}
                        onError={() => setIsLoaded(false)}
                        sx={{ width: isMobile ? '110px' : '167px', height: isMobile ? '110px' : '168px', position: 'absolute', borderRadius: '50%', objectFit: 'cover', }} 
                        />
                </Box>
                <Typography
                    sx={{
                        fontFamily: "'Manrope', cursive",
                        fontSize: titleFontSize,
                        fontWeight: 700,
                        letterSpacing: 0,
                        textAlign: 'center',
                        color: theme.palette.text.secondary,
                        marginTop: '20px',
                    }}>
                    {title}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "'Manrope', cursive",
                        fontSize: careerFontSize,
                        fontWeight: 400,
                        letterSpacing: 0,
                        textAlign: 'center',
                        color: theme.palette.text.secondary,
                        marginTop: '5px',
                    }}>
                    {career}<br />
                </Typography>
            </Box>
        </Button>
    );
};

export default PeopleCardItem;
