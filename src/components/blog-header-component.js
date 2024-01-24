import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMobileContext } from '../mobileContext';

const BlogHeader = ({title = "News & Blog"}) => {

    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMobileContext();

    const handleBack = () => {
        navigate(-1);
    };

    const calculateFontSize = (title, isMobile) => {
        const maxFontSize = 30;
        const minFontSize = 10;
        const maxLength = isMobile ? 15 : 25;
        const avgCharWidth = maxFontSize / 1.5;
        const requiredWidth = title.length * avgCharWidth;
        const availableWidth = window.innerWidth - (isMobile ? theme.spacing(8) : theme.spacing(20));
        if (requiredWidth > availableWidth || title.length > maxLength) {
            return Math.max(minFontSize, (availableWidth / title.length) * 1.5);
        } else {
            return maxFontSize;
        }
    };

    const adjustedFontSize = calculateFontSize(title, isMobile);

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
        fontSize: isMobile ? '12px' : '14px',
        color: '#161818',
        position: 'absolute',
        top: theme.spacing(1),
        left: theme.spacing(1),
    };

    const textStyle = {
        fontFamily: "'Press Start 2P', cursive",
        fontSize: adjustedFontSize + 'px',
        fontWeight: 400,
        textAlign: 'center',
    };

    return (
        <Box sx={headerStyle}>
            <Button sx={backButtonStyle} onClick={handleBack}>
                {"< Back"}
            </Button>
            <Typography sx={textStyle}>{title}</Typography>
        </Box>
        
    );
};

export default BlogHeader;
