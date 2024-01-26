import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMobileContext } from '../mobileContext';

const BlogHeader = ({ title = "News & Blog" }) => {

    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMobileContext();
    const baseUrl = process.env.REACT_APP_BLOGS_URL;

    const [scrollY, setScrollY] = useState(0);
    const [headerHeight, setHeaderHeight] = useState({ mobile: '180px', desktop: '300px' });
    const [headerMargin, setHeaderMargin] = useState({ mobile: 0, desktop: 0 });
    const [headerFontSize, setHeaderFontSize] = useState({ mobile: 20, desktop: 30 });

    const handleBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > (isMobile ? 50 : 100)) {
                setHeaderHeight({ mobile: '30px', desktop: '80px' });
                setHeaderMargin({ mobile: 9, desktop: 20 });
                setHeaderFontSize({ mobile: 10, desktop: 20 });
            } else {
                setHeaderHeight({ mobile: '180px', desktop: '300px' });
                setHeaderMargin({ mobile: 0, desktop: 0 });
                setHeaderFontSize({ mobile: 20, desktop: 30 });
            }
            setScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    const headerStyle = {
        position: 'fixed',
        left: 0,
        top: '55px',
        backgroundColor: '#ffffff',
        background: `linear-gradient(180deg, rgba(29, 249, 143, 1), rgba(29, 249, 143, 0.7)), url("${baseUrl}/assets/blog-header.png")`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        color: '#161818',
        fontFamily: "'Press Start 2P', cursive",
        minHeight: (isMobile) ? headerHeight.mobile : headerHeight.desktop,
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
        fontSize: (isMobile) ? headerFontSize.mobile : headerFontSize.desktop + 'px',
        fontWeight: 400,
        textAlign: 'center',
        marginLeft: theme.spacing(headerMargin.mobile),
    };

    return (
        <Box sx={headerStyle} style={{ backgroundColor: 'white' }}>
            <Box sx={headerStyle}>
                <Button sx={backButtonStyle} onClick={handleBack} style={{ marginBottom: '12px' }}>
                    {"< Back"}
                </Button>
                <Typography sx={textStyle}>{title}</Typography>
            </Box>
        </Box>

    );
};

export default BlogHeader;
