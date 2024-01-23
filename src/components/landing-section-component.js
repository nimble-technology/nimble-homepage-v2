import React, { useState, useEffect } from 'react';
import { Typography, Button, Box, useTheme, IconButton } from '@mui/material';
import PixelButton from './pixel-button-component';
import { LINKS } from '../constants';
import SocialIcons from './social-icons-component';
import {Navigate, useNavigate} from 'react-router-dom';
import { useMobileContext } from '../mobileContext';
import { useLocation } from 'react-router-dom';


const LandingSection = () => {

    const theme = useTheme();
    const isMobile = useMobileContext();
    const location = useLocation();
    const navigate = useNavigate();

    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: isMobile ? '80px' : '20px',
    };

    const imageStyle = {
        maxWidth: 800,
        width: '90%',
        height: 'auto',
    };

    const buttonContainerStyle = {
        position: 'absolute',
        top: '0%',
        left: '50%',
        transform: 'translate(-50%)',
        display: 'flex',
        alignItems: 'center',
        marginTop: isMobile ? '-60px' : '0',
    };

    useEffect(() => {
        if (location.state?.scrollToSection) {
            const sectionId = location.state.scrollToSection;
            const section = document.getElementById(sectionId);
            console.log('s',sectionId, section );
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                navigate(location.pathname, { replace: true });
            }
        }
    }, [location]);

    return (
        <Box
            sx={{
                height: '1000px',
                background: 'linear-gradient(180deg, #1DF98F 60%, rgba(29, 249, 143, 0) 130%)',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                marginTop: '55px',
            }}
        >
            <Typography
                sx={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: isMobile ? '26px' : '34px',
                    fontWeight: 400,
                    textAlign: 'center',
                    color: theme.palette.text.secondary,
                    marginTop: '130px'
                }}>
                The Composable AI Protocol
            </Typography>
            <Typography
                sx={{
                    mt: 1,
                    mb: 2,
                    fontSize: isMobile ? '12px' : '14px',
                    fontWeight: 400,
                    textAlign: 'center',
                    color: 'rgba(0, 0, 0, 0.5)',
                }}
            >
                Nimble is building the first-ever decentralized AI framework.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, marginTop: isMobile ? '50px' : '20px' }}>
                <PixelButton
                    onClick={() => { window.open(LINKS.WHITEPAPER, '_blank'); }}
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        fontSize: isMobile ? '14px' : '16px',
                        fontWeight: isMobile ? 300 : 400,
                    }}
                    width={isMobile ? '150px' : '200px'}
                    height={isMobile ? '45px' : '55px'}
                >
                    Whitepaper
                </PixelButton>
                <PixelButton
                    onClick={() => { window.open(LINKS.LITEPAPER, '_blank'); }}
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        color: 'black',
                        fontSize: isMobile ? '14px' : '16px',
                        fontWeight: isMobile ? 300 : 400,
                    }}
                    width={isMobile ? '150px' : '200px'}
                    height={isMobile ? '45px' : '55px'}
                >
                    Litepaper
                </PixelButton>
            </Box>
            <Box position="relative" sx={imageContainerStyle} >
                <Box component="img" src="/assets/landing.png" alt="Landing" sx={imageStyle} />
                <Box style={buttonContainerStyle}>
                    <SocialIcons isMobile={isMobile} />
                </Box>


            </Box>
        </Box>
    );
};

export default LandingSection;
