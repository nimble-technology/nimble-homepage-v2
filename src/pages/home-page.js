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

const HomePage = () => {

    return (
        <Box>
            <Box id={SECTIONS.ABOUT}>
                <LandingSection />
            </Box>
            <Box id={SECTIONS.PARTNERS}>
                <EcosystemPartners />
            </Box>
            <Box>
                <InternalDescriptions />
            </Box>
            <Box id={SECTIONS.VALUES}>
                <ValueCardTop content={'values'} />
                <ValueCardBottom />
            </Box>

            <Box id={SECTIONS.APPLICATIONS}>
                <ValueCardTop content={'applications'} />
            </Box>
            <Box id={SECTIONS.PEOPLE}>
                <PeopleCard />
            </Box>
            <Box id={SECTIONS.NEWS}>
                <Blog />
            </Box>
            <Box id={SECTIONS.CAREERS}>
                <CareersCard />
            </Box>
        </Box>
    );
};

export default HomePage;
