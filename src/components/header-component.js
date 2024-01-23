import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useTheme, IconButton, Menu, MenuItem, Select } from '@mui/material';
import PixelButton from './pixel-button-component';
import { LINKS, SECTIONS } from '../constants';
import { useMobileContext } from '../mobileContext';

const Header = () => {

    const theme = useTheme();
    const isMobile = useMobileContext();
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    const handleMenuItemClick = (value) => {
        scrollToSection(value)
    };

    return (
        <AppBar
            position="fixed"
            color="secondary"
            elevation={0}
            sx={{
                height: '55px',
                justifyContent: 'center'
            }}
        >
            <Toolbar>
                <Typography
                    sx={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: isMobile? '14px' : '18px',
                        fontWeight: 400,
                        lineHeight: '18px',
                        letterSpacing: '0.03em',
                        textAlign: 'left',
                        marginRight: isMobile? '10px' : '30px'
                    }}
                >
                    Nimbus
                </Typography>


                {isMobile ? (

                    <Box sx={{flexGrow: 1}}>
                        <Select 
                            defaultValue={SECTIONS.ABOUT} 
                            onChange={(e) => handleMenuItemClick(e.target.value)}
                            sx={{
                                height: '30px',
                                width: '110px',
                            }}
                        >
                            <MenuItem value= {SECTIONS.ABOUT} >{SECTIONS.ABOUT}</MenuItem>
                        </Select>
                    </Box>
                ) : (
                    <Box
                        sx={{
                            flexGrow: 1,
                            '& .MuiButton-root': {
                                color: theme.palette.text.primary,
                                fontWeight: 600,
                                fontSize: '16px'
                            }
                        }}
                    >
                        <Button onClick={() => scrollToSection(SECTIONS.ABOUT)}>{SECTIONS.ABOUT}</Button>
                    </Box>
                )}
                <PixelButton
                    onClick={() => { window.open(LINKS.DISCORD, '_blank'); }}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: 'black',
                        fontSize: isMobile? '10px' : '12px',
                        fontWeight: 400
                    }}
                    width= {isMobile? '120px' : '190px'}
                    height='30px'
                >
                    Our Vision
                </PixelButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
