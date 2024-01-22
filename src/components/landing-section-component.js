import React from 'react';
import { Typography, Button, Box, useTheme, IconButton } from '@mui/material';
import PixelButton from './pixel-button-component';
import { LINKS } from '../constants'; 
import SocialIcons from './social-icons-component';


const LandingSection = () => {

    const theme = useTheme();

    const imageStyle = {
      width: 800,
      height: 'auto',
      position: 'relative',
    };
    
    const buttonContainerStyle = {
      position: 'absolute',
      top: '0%',
      left: '50%',
      transform: 'translate(-50%)',
      display: 'flex',
      alignItems: 'center',
    };

    return (
        <Box
            sx={{
                height: '730px',
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
                    fontSize: '34px',
                    fontWeight: 400,
                    textAlign: 'center',
                    color: theme.palette.text.secondary,
                    marginTop: '50px'
                }}>
                Your Everything Marketplace Infrastructure
            </Typography>
            <Typography 
                sx={{ 
                  mt: 1, 
                  mb: 2, 
                  fontSize: '14px',
                  fontWeight: 400, 
                  textAlign: 'center',
                  color: 'rgba(0, 0, 0, 0.5)',
                }}
            >
                Nimble is building the first-ever everything marketplace for intents.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <PixelButton
                    onClick={() => { window.open(LINKS.NIMBLE_APP, '_blank'); }}
                    sx={{
                        backgroundColor: 'black', 
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: 400
                    }}
                    width='200px'
                    height='55px'
                >
                    Nimbus App
                </PixelButton>
                <PixelButton
                    onClick={() => { window.open(LINKS.DISCORD, '_blank'); }}
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', 
                        color: 'black', 
                        fontSize: '16px',
                        fontWeight: 400
                    }}
                    width='200px'
                    height='55px'
                >
                    Get Updates
                </PixelButton>
            </Box>
            <Box position="relative" sx={{marginTop: '20px' }} >
                <Box component="img" src="/assets/landing.png" alt="Landing" sx={imageStyle} />
                <Box style={buttonContainerStyle}>
                    <SocialIcons />
                </Box>
                
         
            </Box>
        </Box>
    );
};

export default LandingSection;
