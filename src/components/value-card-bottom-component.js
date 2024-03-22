import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import { useMobileContext } from '../mobileContext';

const ValueCardBottom = () => {
    const theme = useTheme();
    const isMobile = useMobileContext();
    const baseUrl = process.env.REACT_APP_BLOGS_URL;

    const containerStyle = {
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        paddingTop: isMobile ? '40px' : '80px',
        paddingBottom: isMobile ? '10px' : '100px'
    };

    const textContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: isMobile ? '344px' : '597px',
    };

    const textContentContainerStyle = {
        marginTop: isMobile ? '10px' : '30px',
        marginBottom: isMobile ? '20px' : '30px',
        width: isMobile ? '100%' : '75%',
    };

    return (
        <Box sx={{ ...containerStyle }} >
            <Box sx={{ ...textContainerStyle }} >
                <Typography
                    sx={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: isMobile ? '14px' : '26px',
                        fontWeight: 400,
                        letterSpacing: '0.03em',
                        lineHeight: isMobile ? '22px' : '61px',
                        textAlign: isMobile ? 'center' : 'left',
                        color: theme.palette.text.secondary,
                    }}>
                    Data, model, compute, framework and more.
                </Typography>
                <Box sx={{ ...textContentContainerStyle }} >
                    <Typography
                        sx={{
                            fontFamily: "'Titillium Web', cursive",
                            fontSize: isMobile ? '14px' : '16px',
                            fontWeight: 400,
                            letterSpacing: '0.03em',
                            textAlign: isMobile ? 'center' : 'left',
                            color: theme.palette.text.secondary,
                        }}>
                        We're creating the atomic building blocks for the Modular AI Network that can be extended into complex IP, creator, advertisement, personalization, and chatbot applications across any medium.
                    </Typography>
                </Box>
            </Box>
            <Box >
                <Box component="img" src={baseUrl + '/assets/values4.png'} sx={{ width: isMobile ? '296px' : '538px', height: isMobile ? '169px' : '307px' }} />
            </Box>
        </Box>
    );
};

export default ValueCardBottom;
