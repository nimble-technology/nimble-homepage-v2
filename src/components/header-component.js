import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useTheme, IconButton, Menu, MenuItem, Select } from '@mui/material';
import PixelButton from './pixel-button-component';
import { LINKS, SECTIONS, SPECIAL_BLOGS } from '../constants';
import { useMobileContext } from '../mobileContext';
import {Navigate, useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const theme = useTheme();
    const isMobile = useMobileContext();

    const navigateAndScroll = (event, sectionId, targetPath = '/') => {
        event.preventDefault();
        if (location.pathname !== targetPath) {
            navigate(targetPath, { state: { scrollToSection: sectionId } });
        } else {
            const section = document.getElementById(sectionId);
            section.scrollIntoView({behavior: 'smooth'});
        }
    };

    const handleMenuItemClick = (event, value) => {
        event.preventDefault();
        if (value === SECTIONS.TOKENOMICS) {
            navigate("/tokenomics")
        } else if (value === SECTIONS.NEWS) {
            navigate('/media/')
        } else {
            navigateAndScroll(value);
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
                            sx={{
                                height: '30px',
                                width: '110px',
                            }}
                        >
                            <MenuItem value= {SECTIONS.ABOUT} component="a" href={"/"} target="_blank" onClick={ (event) => handleMenuItemClick(event, SECTIONS.ABOUT)}>
                                {SECTIONS.ABOUT}
                            </MenuItem>
                            <MenuItem value= {SECTIONS.VALUES} component="a" href={"/"} target="_blank" onClick={(event) => handleMenuItemClick(event, SECTIONS.VALUES)}>
                                {SECTIONS.VALUES}
                            </MenuItem>
                            <MenuItem value= {SECTIONS.NEWS} component="a" href={"/media"} target="_blank" onClick={(event) => handleMenuItemClick(event, SECTIONS.NEWS)}>
                                {SECTIONS.NEWS}
                            </MenuItem>
                            <MenuItem value= {SECTIONS.TOKENOMICS} component="a" href={"/tokenomics"} target="_blank" onClick={(event) => handleMenuItemClick(event, SECTIONS.TOKENOMICS)}>
                                {SECTIONS.TOKENOMICS}
                            </MenuItem>
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
                        <Button component="a" href={"/"} target="_blank" onClick={(event) => navigateAndScroll(event, SECTIONS.ABOUT)}>{SECTIONS.ABOUT}</Button>
                        <Button component="a" href={"/"} target="_blank" onClick={(event) => navigateAndScroll(event, SECTIONS.VALUES)}>{SECTIONS.VALUES}</Button>
                        <Button component="a" href={"/media"} target="_blank" onClick={(event) => {event.preventDefault(); navigate('/media')}}>{SECTIONS.NEWS}</Button>
                        <Button component="a" href={"/tokenomics"} target="_blank" onClick={(event) => {event.preventDefault(); navigate('/tokenomics')}}>{SECTIONS.TOKENOMICS}</Button>
                    </Box>
                )}
                <PixelButton
                    href={"/vision"}
                    onClick={(event) => {event.preventDefault(); navigate('/vision')}}
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
