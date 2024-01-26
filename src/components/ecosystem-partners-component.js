import React from 'react';
import { Typography, Button, Box, useTheme, IconButton } from '@mui/material';
import PageTitle from './page-title-component';
import { useMobileContext } from '../mobileContext';
import styled, { keyframes, css } from "styled-components";

const EcosystemPartners = () => {

    const theme = useTheme();
    const isMobile = useMobileContext();

    const ecosystemPartnersList = [
        { img: '/assets/ecosystem-partners/avalanche.png', url: 'https://www.avax.network/', bgc: '#d64f49' },
        { img: '/assets/ecosystem-partners/polygon.png', url: 'https://polygon.technology/', bgc: '#843acc' },
        { img: '/assets/ecosystem-partners/sei-network.png', url: 'https://www.sei.io/', bgc: '#f0e3cf' },
        { img: '/assets/ecosystem-partners/corner-market.png', url: 'https://www.cornermarket.co/', bgc: '#6ad4b1' },
        { img: '/assets/ecosystem-partners/hyper-oracle.png', url: 'https://www.hyperoracle.io/', bgc: '#ffffff' },
        { img: '/assets/ecosystem-partners/zkme.png', url: 'https://zk.me/', bgc: '#235463' },
        { img: '/assets/ecosystem-partners/nimble.png', url: 'https://twitter.com/TheNimbusApp/', bgc: '#75f599' },
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
                Trusted by
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
                                    <ImageGroup>
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
                                            <Image src={el.img} />
                                        </Button>
                                    </ImageGroup>
                                ))}
                            </MarqueeGroup>
                            <MarqueeGroup>
                                {ecosystemPartnersList.map((el, index) => (
                                    <ImageGroup>
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
                                            <Image src={el.img} />
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

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: isMobile ? 100% : 200%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
