import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const PixelButton = ({ children, onClick, sx }) => {
    const cornerSize = '6px';
    const defaultStyles = {
        fontFamily: "'Press Start 2P', cursive",
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: 1,
        color: 'text.primary',
        bgcolor: 'primary.main',
        padding: '10px 20px',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            bgcolor: 'primary.dark',
        },
    };

    const combinedStyles = { ...defaultStyles, ...sx };

    return (
        <Box position="relative" display="inline-block">
            <Button
                onClick={onClick}
                sx={combinedStyles}
            >
                {children}
            </Button>
            <Box position="absolute" top={0} left={0} width={cornerSize} height={cornerSize} bgcolor="background.paper" />
            <Box position="absolute" top={0} right={0} width={cornerSize} height={cornerSize} bgcolor="background.paper" />
            <Box position="absolute" bottom={0} left={0} width={cornerSize} height={cornerSize} bgcolor="background.paper" />
            <Box position="absolute" bottom={0} right={0} width={cornerSize} height={cornerSize} bgcolor="background.paper" />
        </Box>
    );
};

export default PixelButton;
