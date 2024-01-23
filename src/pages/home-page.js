import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import EcosystemPartners from '../components/ecosystem-partners-component';
import InternalDescriptions from '../components/internal-descriptions-component';
import LandingSection from '../components/landing-section-component';
import PeopleCard from '../components/people-card-component';
import ValueCardTop from '../components/value-card-top-component';
import ValueCardBottom from '../components/value-card-bottom-component';
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
                <ValueCardTop />
                <ValueCardBottom />
            </Box>
            <Box id="people-card">
                <PeopleCard />
            </Box>

            <Box id="section2" sx={{ height: '500px', background: 'lightgreen' }}>
                Section 2 Content
            </Box>
        </Box>
    );
};

export default HomePage;
