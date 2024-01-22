import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

const ValueCardItem = ({ imageSrc, title, description }) => {
    const theme = useTheme();

    const sideStyle = {
        backgroundColor: '#1DF98F',
        height: 450,
        width: 400,
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        padding: 8,
    };

    return (
        <Box>
            <Box sx={{ ...sideStyle }} >
                <Box component="img" src={imageSrc} sx={{ width: 252, height: 144 }} />
                <Typography
                    sx={{
                        fontFamily: "'Manrope', cursive",
                        fontSize: '26px',
                        fontWeight: 800,
                        textAlign: 'center',
                        color: theme.palette.text.secondary,
                        marginTop: '60px',
                    }}>
                    {title}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "'Titillium Web', cursive",
                        fontSize: '16px',
                        fontWeight: 400,
                        letterSpacing: '0.03em',
                        textAlign: 'center',
                        color: theme.palette.text.secondary,
                        marginTop: '15px',
                    }}>
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};

export default ValueCardItem;
