import React from 'react';
import Box from '@mui/material/Box';
import LandingSection from '../components/landing-section-component';
import ValueCardTop from '../components/value-card-top-component';
import ValueCardBottom from '../components/value-card-bottom-component';

const HomePage = () => {
  return (
    <Box>
      <Box id="landing-section">
        <LandingSection />
      </Box>
      <Box id="value-card">
        <ValueCardTop />
        <ValueCardBottom />
      </Box>
      <Box id="section2" sx={{ height: '500px', background: 'lightgreen' }}>
        Section 2 Content
      </Box>
    </Box>
  );
};

export default HomePage;
