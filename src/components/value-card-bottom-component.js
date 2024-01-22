import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';

const ValueCardBottom = () => {
    const theme = useTheme();

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
    };

    const textContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: '80px',
        width: '597px',
    };

    return (
        <Box sx={{ ...containerStyle }} >
            <Box sx={{ ...textContainerStyle }} >
                <Typography
                    sx={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: '26px',
                        fontWeight: 400,
                        letterSpacing: '0.03em',
                        lineHeight: '61px',
                        textAlign: 'left',
                        color: theme.palette.text.secondary,
                    }}>
                    Create, IP, Ads, AI and more.
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "'Titillium Web', cursive",
                        fontSize: '16px',
                        fontWeight: 400,
                        letterSpacing: '0.03em',
                        textAlign: 'left',
                        color: theme.palette.text.secondary,
                        marginTop: '30px',
                        width: '75%',
                    }}>
                    We're creating the atomic building blocks for the Everything Marketplace that can be extended into complex IP, creator, advertisement, personalization, and matching applications across any medium.
                </Typography>
            </Box>
            <Box >
                <Box component="img" src='/assets/values4.png' sx={{ width: 538, height: 307 }} />
            </Box>
        </Box>
    );
};

export default ValueCardBottom;
