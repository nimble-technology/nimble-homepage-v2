import React from 'react';
import { Typography, Button, Box, useTheme, IconButton } from '@mui/material';
import PageTitle from './page-title-component';
import { useMobileContext } from '../mobileContext';

const EcosystemPartners = () => {

    const theme = useTheme();
    const isMobile = useMobileContext();

    const ecosystemPartnersList = [
        '/assets/ecosystem-partners/corner-market.png',
        '/assets/ecosystem-partners/hyper-oracle.png',
        '/assets/ecosystem-partners/sei-network.png',
        '/assets/ecosystem-partners/zkme.png'
    ];

    const containerStyle = {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        background: '#F8F8F8',
        paddingTop: isMobile ? '20px' : '140px',
        paddingBottom: isMobile ? '20px' : '140px'
    };

    const imageContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        columnGap: isMobile ? 5 : 15,
        rowGap: 5,
        marginTop: isMobile ? '20px' : '40px',
    };

    const imageStyle = {
        width: isMobile ? '52px' : '134px',
        height: isMobile ? '52px' : '134px',
        borderRadius: '50%'
    };

    return (
        <Box sx={{ ...containerStyle }}>
            <PageTitle title='Ecosystem Partners' />
            <Typography
                sx={{
                    fontFamily: "'Titillium Web', sans-serif",
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 400,
                    lineHeight: '21px',
                    letterSpacing: '0.03em',
                    textAlign: 'center',
                    color: theme.palette.text.secondary,
                }}>
                Trusted by
            </Typography>
            <Box sx={{ ...imageContainerStyle }}>
                {ecosystemPartnersList.map((partner, index) => (
                    <Box component="img" key={index} src={partner} sx={{ ...imageStyle }} />
                ))}
            </Box>

        </Box>
    );
};

export default EcosystemPartners;
