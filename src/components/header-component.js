import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useTheme, IconButton, Menu, MenuItem, Select } from '@mui/material';
import PixelButton from './pixel-button-component';
import { LINKS, SECTIONS } from '../constants';
import { useMobileContext } from '../mobileContext';
import {Navigate, useNavigate} from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const theme = useTheme();
    const isMobile = useMobileContext();
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    };

    const handleMenuItemClick = (value) => {
        if (value === SECTIONS.NEWS) {
            navigate('/news/list');
        } else {
            scrollToSection(value);
        }
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
                            marginRight: isMobile? '10px' : '30px',
                            cursor: 'pointer'
                        }}
                        onClick={() => navigate('/')}
                    >
                        Nimble
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
                            <MenuItem value= {SECTIONS.VALUES} >{SECTIONS.VALUES}</MenuItem>
                            <MenuItem value= {SECTIONS.PARTNERS} >{SECTIONS.PARTNERS}</MenuItem>
                            <MenuItem value= {SECTIONS.PEOPLE} >{SECTIONS.PEOPLE}</MenuItem>
                            <MenuItem value= {SECTIONS.NEWS} >{SECTIONS.NEWS}</MenuItem>
                            <MenuItem value= {SECTIONS.CAREERS} >{SECTIONS.CAREERS}</MenuItem>
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
                        <Button onClick={() => scrollToSection(SECTIONS.VALUES)}>{SECTIONS.VALUES}</Button>
                        <Button onClick={() => scrollToSection(SECTIONS.PARTNERS)}>{SECTIONS.PARTNERS}</Button>
                        <Button onClick={() => scrollToSection(SECTIONS.PEOPLE)}>{SECTIONS.PEOPLE}</Button>
                        <Button onClick={() => navigate('/news/list')}>{SECTIONS.NEWS}</Button>
                        <Button onClick={() => scrollToSection(SECTIONS.CAREERS)}>{SECTIONS.CAREERS}</Button>
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
