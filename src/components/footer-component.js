import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import SocialIcons from './social-icons-component';
import { useMobileContext } from '../mobileContext';

const Footer = () => {

    const theme = useTheme();
    const isMobile = useMobileContext();

    const footerStyle = {
        backgroundColor: '#f8f8f8',
        width: '100vw',
        height: '150px',
        color: theme.palette.text.primary,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', 
        alignItems: isMobile ? 'center' : 'flex-start',
        justifyContent: isMobile ? 'center' : 'space-between',
        paddingTop: isMobile? '0px' : '40px',
        paddingLeft: isMobile? '20px' : '70px',
        paddingRight: isMobile? '20px' : '70px',
        marginTop: '105px'
    };

    return (
        <Box sx={footerStyle}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                    sx={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: isMobile ? '18px' : '24px',
                        fontWeight: 400,
                        lineHeight: '18px',
                        letterSpacing: '0.03em',
                        textAlign: isMobile ? 'center' : 'left',

                        cursor: 'pointer',
                    }}
                >
                    Nimble
                </Typography>
                <Typography sx={{ fontSize: isMobile ? '12px' : '14px', color: '#6C6C6C', mt: 2,}}>
                    Nimble Network. All Rights Reserved 2024.
                </Typography>
            </Box>
            <Box sx={{mt: 2}}>
                <SocialIcons />
            </Box>
        </Box>
    );
};

export default Footer;
