import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

const InternalDescriptions = () => {
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
        marginTop: '72px',
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
                    Where intention comes to life
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
                    Good technology is invisible. Nimble Protocol hides the complexity of Web3 systems by translating user’s desired outcomes into action.
                </Typography>
            </Box>
            <Box >
                <Box component="img" src='/assets/internal-descriptions.png' sx={{ width: 538, height: 307 }} />
            </Box>
        </Box>
    );
};

export default InternalDescriptions;
