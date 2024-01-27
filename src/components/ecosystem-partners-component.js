import React from 'react';
import { Typography, Button, Box, useTheme, IconButton } from '@mui/material';
import PageTitle from './page-title-component';
import { useMobileContext } from '../mobileContext';
import styled, { keyframes, css } from "styled-components";

const EcosystemPartners = () => {

    const theme = useTheme();
    const isMobile = useMobileContext();
    const baseUrl = process.env.REACT_APP_BLOGS_URL;

    const AppContainer = styled.div`
      width: 100vw;
      color: #000000;
      position: relative;
      display: flex;
      margin-top: 5vw;
      align-items: center;
      justify-content: center;
    `;

    const Wrapper = styled.div`
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `;

    const Marquee = styled.div`
      display: flex;
      width: 1200px;
      overflow: hidden;
      user-select: none;
      mask-image: linear-gradient(
              to right,
              hsl(0 0% 0% / 0),
              hsl(0 0% 0% / 1) 10%,
              hsl(0 0% 0% / 1) 90%,
              hsl(0 0% 0% / 0)
      );
    `;

    const scrollX = keyframes`
      from {
        left: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    `;

    const mobileWidth = (isMobile) ? '100%' : '200%';

    const common = css`
      flex-shrink: 0;
      display: flex;
      align-items: center;
      white-space: nowrap;
      width: ${mobileWidth};
      animation: ${scrollX} 90s linear infinite;
      &:hover {
        animation-play-state: paused;
      }
    `;

    const MarqueeGroup = styled.div`
      ${common}
    `;

    const ImageGroup = styled.div`
      display: grid;
      place-items: center;
      width: clamp(10rem, 1rem + 40vmin, 30rem);
    `;

    const Image = styled.img`
      object-fit: contain;
      width: 100%;
      height: 100%;
      /* border: 1px solid black; */
      border-radius: 0.5rem;
      aspect-ratio: 16/9;
      min-height: 143px;
    `;

    const ecosystemPartnersList = [
        { img: '/assets/ecosystem-partners/avalanche.png', url: 'https://www.avax.network/' },
        { img: '/assets/ecosystem-partners/polygon.png', url: 'https://polygon.technology/' },
        { img: '/assets/ecosystem-partners/sei-network.png', url: 'https://www.sei.io/' },
        { img: '/assets/ecosystem-partners/corner-market.png', url: 'https://www.cornermarket.co/' },
        { img: '/assets/ecosystem-partners/hyper-oracle.png', url: 'https://www.hyperoracle.io/' },
        { img: '/assets/ecosystem-partners/zkme.png', url: 'https://zk.me/' },
        { img: '/assets/ecosystem-partners/nimble.png', url: 'https://twitter.com/TheNimbusApp/' },
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
                <span style={{color: '#7c7c7c'}}>Trusted by</span>
            </Typography>
            <Box sx={{
                width: '100%',
                overflow: 'hidden',
            }}>
                <AppContainer>
                    <Wrapper>
                        <Marquee>
                            <MarqueeGroup>
                                {ecosystemPartnersList.map((el, index) => (
                                    <ImageGroup key={index}>
                                        <Button
                                            key={index}
                                            onClick={() => window.open(el.url, '_blank')}
                                            sx={{
                                                padding: 0,
                                                minWidth: 0,
                                                '&:hover': {
                                                    transform: 'scale(1.2)',
                                                },
                                                transition: 'transform 0.2s ease-in-out',
                                            }}
                                        >
                                            <Image src={baseUrl + el.img} />
                                        </Button>
                                    </ImageGroup>
                                ))}
                            </MarqueeGroup>
                        </Marquee>
                    </Wrapper>
                </AppContainer>
            </Box>
        </Box>
    );
};

export default EcosystemPartners;
