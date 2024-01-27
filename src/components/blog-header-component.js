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
    const [isScrolled, setIsScrolled] = useState(false);
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
                setIsScrolled(true);
                setHeaderHeight({ mobile: '30px', desktop: '80px' });
                setHeaderMargin({ mobile: 9, desktop: 20 });
                setHeaderFontSize({ mobile: 12, desktop: 20 });
            } else {
                setIsScrolled(false);
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
        minHeight: (isMobile) ? headerHeight.mobile : headerHeight.desktop,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        transitionProperty: 'min-height',
        transitionDuration: '0.2s',
    };

    const headerInsideStyle = {
        background: `linear-gradient(180deg, rgba(29, 249, 143, 1), rgba(29, 249, 143, 0.7)), url("${baseUrl}/assets/blog-header.png")`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        minHeight: (isMobile) ? headerHeight.mobile : headerHeight.desktop,
        color: '#161818',
        fontFamily: "'Press Start 2P', cursive",
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(2),
        transitionProperty: 'min-height font-size',
        transitionDuration: '0.2s',
    }

    const backButtonStyle = {
        fontFamily: "'Press Start 2P', cursive",
        fontSize: isMobile ? '12px' : '14px',
        color: '#161818',
        position: 'absolute',
        top: isScrolled ? 'inherit' : theme.spacing(1),
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
            <Box sx={headerInsideStyle}>
                <Button sx={backButtonStyle} onClick={handleBack}>
                    {"< Back"}
                </Button>
                <Typography sx={textStyle}>{title}</Typography>
            </Box>
        </Box>

    );
};

export default BlogHeader;
