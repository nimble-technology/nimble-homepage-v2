import React from 'react';
import Box from '@mui/material/Box';
import LandingSection from '../components/landing-section-component';
import InternalDescriptions from '../components/internal-descriptions-component';

const HomePage = () => {
  return (
    <Box>
      <Box id="landing-section">
        <LandingSection />
      </Box>
      <Box>
        <InternalDescriptions />
      </Box>
      <Box id="section2" sx={{ height: '500px', background: 'lightgreen' }}>
        Section 2 Content
      </Box>
    </Box>
  );
};

export default HomePage;
