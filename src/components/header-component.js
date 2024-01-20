import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useTheme } from '@mui/material';

const Header = () => {

    const theme = useTheme();
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (

        <AppBar position="fixed" color="secondary" elevation={0}>
            <Toolbar>
                <Typography
                    sx={{ 
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: '18px',
                        fontWeight: 400,
                        lineHeight: '18px',
                        letterSpacing: '0.03em',
                        textAlign: 'left', 
                        marginRight: '30px'
                    }}
                >
                    Nimbus
                </Typography>
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
                    <Button onClick={() => scrollToSection('section1')}>About</Button>
                    <Button onClick={() => scrollToSection('section2')}>Values</Button>
                    <Button onClick={() => scrollToSection('section3')}>Partners</Button>
                    <Button onClick={() => scrollToSection('section4')}>People</Button>
                    <Button onClick={() => scrollToSection('section5')}>News</Button>
                    <Button onClick={() => scrollToSection('section6')}>Careers</Button>
                  
                </Box>
                <Button
                    sx={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: '12px',
                        fontWeight: 400,
                        color: theme.palette.text.primary,
                        backgroundColor: theme.palette.primary.main,
                    }}
                    onClick={() => scrollToSection('vision')}
                >
                    Our Vision
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
