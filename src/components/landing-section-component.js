import React from 'react';
import { Typography, Button, Box, useTheme } from '@mui/material';
import PixelButton from './pixel-button-component';
import { LINKS } from '../constants'; 


const LandingSection = () => {

    const theme = useTheme();

    return (
        <Box
            sx={{
                height: 'calc(100vh - 72px)',
                background: 'linear-gradient(180deg, #1DF98F 60%, rgba(29, 249, 143, 0) 130%)',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                marginTop: '72px',
            }}
        >
            <Typography 
                sx={{ 
                    fontFamily: "'Press Start 2P', cursive",
                    fontSize: '34px',
                    fontWeight: 400,
                    textAlign: 'center',
                    color: theme.palette.text.secondary,
                    marginTop: '60px'
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
                    onClick={() => { window.location.href = LINKS.NIMBLE_APP; }}
                    sx={{
                        backgroundColor: 'black', 
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: 400
                    }}
                    width='220px'
                    height='70px'
                >
                    Nimbus App
                </PixelButton>
                <PixelButton
                    onClick={() => { window.location.href = LINKS.DISCORD; }}
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', 
                        color: 'black', 
                        fontSize: '16px',
                        fontWeight: 400
                    }}
                    width='220px'
                    height='70px'
                >
                    Get Updates
                </PixelButton>
            </Box>
            <Box component="img" src="/assets/landing.png" sx={{ width: 800, height: 'auto' }} />
         
        </Box>
    );
};

export default LandingSection;
