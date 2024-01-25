import React from 'react';
import { Typography, Button, Box, useTheme, IconButton } from '@mui/material';
import PageTitle from './page-title-component';
import { useMobileContext } from '../mobileContext';

const EcosystemPartners = () => {

    const theme = useTheme();
    const isMobile = useMobileContext();

    const ecosystemPartnersList = [
        { img: '/assets/ecosystem-partners/avalanche.png', url: 'https://www.avax.network/' },
        { img: '/assets/ecosystem-partners/polygon.png', url: 'https://polygon.technology/' },
        { img: '/assets/ecosystem-partners/sei-network.png', url: 'https://www.sei.io/' },
        { img: '/assets/ecosystem-partners/corner-market.png', url: 'https://www.cornermarket.co/' },
        { img: '/assets/ecosystem-partners/hyper-oracle.png', url: 'https://www.hyperoracle.io/' },
        { img: '/assets/ecosystem-partners/zkme.png', url: 'https://zk.me/' },
        { img: '/assets/ecosystem-partners/nimble.png', url: 'https://twitter.com/TheNimbusApp/' },
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
        paddingTop: isMobile ? '20px' : '80px',
        paddingBottom: isMobile ? '20px' : '80px'
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
        borderRadius: '50%',
        objectFit: 'cover'
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
                    <Button
                        key={index}
                        onClick={() => window.open(partner.url, '_blank')}
                        sx={{
                            padding: 0,
                            minWidth: 0,
                            '&:hover': {
                                background: 'none',
                            }
                        }}
                    >
                        <img src={partner.img} alt="Ecosystem Partner" style={{ ...imageStyle }} />
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

export default EcosystemPartners;
