import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { useMobileContext } from '../mobileContext';

const ValueCardItem = ({ imageSrc, title, description }) => {
    const theme = useTheme();
    const isMobile = useMobileContext();

    const sideStyle = {
        backgroundColor: '#1DF98F',
        height: isMobile ? '274px' : '450px',
        width: isMobile ? '294px' : '400px',
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        padding: isMobile ? '20px' : '30px',
    };

    const textDescriptionContainerStyle = {
        marginTop: isMobile ? '10px' : '30px',
        marginBottom: isMobile ? '20px' : '30px',
    };

    return (
        <Box>
            <Box sx={{ ...sideStyle }} >
                <Box sx={{ marginTop: isMobile ? 3 : 7 }}>
                    <Box component="img" src={imageSrc} sx={{ width: isMobile ? '148px' : '252px', height: isMobile ? '84.05px' : '144px' }} />
                </Box>
                <Box sx={{ marginTop: isMobile ? 3 : 7 }}>
                    <Typography
                        sx={{
                            fontFamily: "'Manrope', cursive",
                            fontSize: isMobile ? '16px' : '26px',
                            fontWeight: 800,
                            lineHeight: '21px',
                            textAlign: 'center',
                            color: theme.palette.text.secondary,
                        }}>
                        {title}
                    </Typography>
                </Box>
                <Box sx={{ ...textDescriptionContainerStyle }}>
                    <Typography
                        sx={{
                            fontFamily: "'Titillium Web', cursive",
                            fontSize: isMobile ? '14px' : '16px',
                            fontWeight: 400,
                            lineHeight: '21px',
                            letterSpacing: '0.03em',
                            textAlign: 'center',
                            color: theme.palette.text.secondary,
                        }}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Box >
    );
};

export default ValueCardItem;
