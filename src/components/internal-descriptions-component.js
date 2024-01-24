import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { useMobileContext } from '../mobileContext';

const InternalDescriptions = () => {

    const theme = useTheme();
    const isMobile = useMobileContext();

    const containerStyle = {
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '55px',
        paddingTop: isMobile ? '20px' : '140px',
        paddingBottom: isMobile ? '10px' : '100px'
    };

    const textContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: isMobile ? '344px' : '597px',
    };

    const textContentContainerStyle = {
        marginTop: isMobile ? '10px' : '30px',
        marginBottom: isMobile ? '20px' : '30px',
        width: isMobile ? '100%' : '75%',
        alignItems: 'center'
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
                    Where decentralized AI meets blockchain
                </Typography>
                <Box sx={{ ...textContentContainerStyle }}>
                    <Typography
                        sx={{
                            fontFamily: "'Titillium Web', cursive",
                            fontSize: isMobile ? '14px' : '16px',
                            fontWeight: 400,
                            letterSpacing: '0.03em',
                            lineHeight: isMobile ? '21px' : '24px',
                            color: theme.palette.text.secondary,
                            textAlign: isMobile ? 'center' : 'left',
                        }}>
                        Nimble provides a decentralized framework that enables AI models and data to be combined and reused. A network of interconnected AI agents, data providers, and compute resources replaces centralized platforms.
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Box component="img" src='/assets/internal-descriptions.png' sx={{ width: isMobile ? 281 : 538, height: isMobile ? 160 : 307, }} />
            </Box>
        </Box>
    );
};

export default InternalDescriptions;
