import React, { useState, useEffect } from 'react';
import { Typography, Button, Box, useTheme, IconButton } from '@mui/material';
import PixelButton from './pixel-button-component';
import { LINKS } from '../constants';
import SocialIcons from './social-icons-component';
import {Navigate, useNavigate} from 'react-router-dom';
import { useMobileContext } from '../mobileContext';
import { useLocation } from 'react-router-dom';
import AnimatedPart from './animation-part-component';
import RotatingPart from './rotating-animation-component';

const LandingSection = () => {

    const theme = useTheme();
    const isMobile = useMobileContext();
    const location = useLocation();
    const navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_BLOGS_URL;

    const partStyle1 = { position: 'absolute', top: '10%', left: '10%', width: '110px', height: '125px' };
    const partStyle2 = { position: 'absolute', top: '80%', left: '10%', width: '95px', height: '107px' };
    const partStyle3 = { position: 'absolute', top: '80%', left: '80%',width: '110px', height: '125px'  };
    const partStyle4 = { position: 'absolute', top: '10%', left: '80%', width: '120px', height: '120px' };
    

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

    const centeredImageStyle = {
      position: 'absolute',
      top: '60%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '300px',
      height: '180px'
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
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                navigate(location.pathname, { replace: true });
            }
        }
    }, [location]);

    return (
        <Box
            sx={{
                maxHeight: '800px',
                background: 'linear-gradient(180deg, #1DF98F 60%, rgba(29, 249, 143, 0) 130%)',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                marginTop: '35px',
                padding: '40px 0'
            }}
        >
            <Typography
                sx={{
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: isMobile ? '26px' : '34px',
                    fontWeight: 400,
                    textAlign: 'center',
                    color: theme.palette.text.secondary,
                    marginTop: '60px'
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
                    onClick={() => { navigate(LINKS.WHITEPAPER); }}
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
                    onClick={() => { navigate(LINKS.LITEPAPER); }}
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
            <Box component="img" src={baseUrl + "/assets/landing-base.png"} alt="Landing" sx={imageStyle} />
                <img src={baseUrl + "/assets/landing-part5.png"} alt="Centered Image" style={centeredImageStyle} />
                <AnimatedPart src={baseUrl + "/assets/landing-part1.png"} alt="Part 1" startX={'0'} startY={'0'} endX={'50'} endY={'20'} customStyle={{ ...partStyle1 }}/>
                <AnimatedPart src={baseUrl + "/assets/landing-part2.png"} alt="Part 2" startX={'0'} startY={'0'} endX={'40'} endY={'-20'} customStyle={{...partStyle2}} />
                <AnimatedPart src={baseUrl + "/assets/landing-part3.png"} alt="Part 3" startX={'0'} startY={'0'} endX={'-40'} endY={'-20'} customStyle={{...partStyle3}} />
                <RotatingPart src={baseUrl + "/assets/landing-part4.png"} alt="Part 4" style={{...partStyle4}} />
                
                <Box style={buttonContainerStyle}>
                    <SocialIcons isMobile={isMobile} />
                </Box>


            </Box>
        </Box>
    );
};

export default LandingSection;
