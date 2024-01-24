import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMobileContext } from '../mobileContext';

const BlogHeader = () => {

    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMobileContext();

    const handleBack = () => {
        navigate(-1);
    };

    const headerStyle = {
        position: 'fixed',
        left:0,
        top:'55px',
        backgroundColor: '#ffffff', 
        background: `linear-gradient(180deg, rgba(29, 249, 143, 1), rgba(29, 249, 143, 1)), url("/assets/blog-header.png")`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover', 
        color: '#161818',
        fontFamily: "'Press Start 2P', cursive",
        height: '130px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(2),
        zIndex: 1
    };

    const backButtonStyle = {
        fontFamily: "'Press Start 2P', cursive",
        fontSize: isMobile ? '14px' : '18px',
        color: '#161818',
        position: 'absolute',
        top: theme.spacing(3),
        left: isMobile ? theme.spacing(4) : theme.spacing(10),
    };

    const textStyle = {
        fontFamily: "'Press Start 2P', cursive",
        fontSize: isMobile ? '24px' : '30px',
        fontWeight: 400,
        lineHeight: '61px',
        letterSpacing: '0.03em',
        textAlign: 'center',
    };

    return (
        <Box sx={headerStyle}>
            
            <Button sx={backButtonStyle} onClick={handleBack}>
                {"< Back"}
            </Button>
            
            <Typography sx={textStyle}>News & Blog</Typography>
        </Box>
        
    );
};

export default BlogHeader;
