import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import EcosystemPartners from '../components/ecosystem-partners-component';
import CareersCard from '../components/careers-card-component';
import InternalDescriptions from '../components/internal-descriptions-component';
import LandingSection from '../components/landing-section-component';
import PeopleCard from '../components/people-card-component';
import ValueCardTop from '../components/value-card-top-component';
import ValueCardBottom from '../components/value-card-bottom-component';
import Blog from '../components/blog-component';
import { SECTIONS } from '../constants';
import FadeInSection from '../components/fade-in-component';

const HomePage = () => {
    

    useEffect(() => {
        document.title = 'Nimble - The Modular AI Network';
    }, []);

    return (
        <Box>
            <Box id={SECTIONS.ABOUT}>
                <LandingSection />
            </Box>
            <FadeInSection>
                <Box id={SECTIONS.PARTNERS}>
                    <EcosystemPartners />
                </Box>
            </FadeInSection>
            <FadeInSection>
                <Box>
                    <InternalDescriptions />
                </Box>
            </FadeInSection>
            <FadeInSection>
                <Box id={SECTIONS.VALUES}>
                    <ValueCardTop content={'values'} />
                    <ValueCardBottom />
                </Box>
            </FadeInSection>
            <FadeInSection>
                <Box id={SECTIONS.APPLICATIONS}>
                    <ValueCardTop content={'applications'} />
                </Box>
            </FadeInSection>
            <FadeInSection>
                <Box id={SECTIONS.PEOPLE} sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <PeopleCard />
                </Box>
            </FadeInSection>
            <FadeInSection>
                <Box id={SECTIONS.NEWS}>
                    <Blog />
                </Box>
            </FadeInSection>
            <FadeInSection>
                <Box id={SECTIONS.CAREERS}>
                    <CareersCard />
                </Box>
            </FadeInSection>
        </Box>
    );
};

export default HomePage;
