import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import LandingSection from '../components/landing-section-component';
import { SECTIONS } from '../constants';

const HomePage = () => {

    return (
        <Box>
            <Box id={SECTIONS.ABOUT}>
                <LandingSection />
            </Box>
        </Box>
  );
};

export default HomePage;
