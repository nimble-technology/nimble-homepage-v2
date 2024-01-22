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
      <Box id="section2">
        <ValueCardTop />
        <ValueCardBottom />
      </Box>
      <Box id="section3">
        Section 3 Content
      </Box>
      <Box id="section4">
        Section 4 Content
      </Box>
      <Box id="section5" sx={{ height: '500px', background: 'lightgreen' }}>
        Section 5 Content
      </Box>
    </Box>
  );
};

export default HomePage;
