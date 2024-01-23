import React from 'react';
import { Typography, Button, Box, useTheme, IconButton } from '@mui/material';
import PageTitle from './page-title-component';
import PixelButton from './pixel-button-component';
import { useMobileContext } from '../mobileContext';
import { LINKS } from '../constants';

const CareersCard = () => {

    const theme = useTheme();
    const isMobile = useMobileContext();

    const containerStyle = {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
    };

    const imageStyle = {
        width: isMobile ? '311px' : '547px',
        height: isMobile ? '145px' : '233px',
        marginTop: isMobile ? '15px' : '20px',
        marginBottom: isMobile ? '15px' : '30px',
    };

    return (
        <Box sx={{ ...containerStyle }}>
            <PageTitle title='Careers' />
            <Box component="img" src='/assets/careers1.png' sx={{ ...imageStyle }} />
            <Typography
                sx={{
                    fontFamily: "'HarmonyOS Sans', cursive",
                    fontSize: isMobile ? '14px' : '32px',
                    fontWeight: 400,
                    lineHeight: '22px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: theme.palette.text.secondary,
                    marginBottom: isMobile ? '25px' : '55px',
                }}>
                Join Our Team

            </Typography>
            <PixelButton
                onClick={() => { window.open(LINKS.CAREERS, '_blank'); }}
                sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: isMobile ? 300 : 400,
                }}
                width={isMobile ? '311px' : '581px'}
                height={isMobile ? '49px' : '91px'}
            >
                See openings
            </PixelButton>
        </Box>
    );
};

export default CareersCard;
