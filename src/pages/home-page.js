import React from 'react';
import Box from '@mui/material/Box';
import LandingSection from '../components/landing-section-component';
import PeopleCard from '../components/people-card-component';

const HomePage = () => {
  return (
    <Box>
      <Box id="landing-section">
        <LandingSection />
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
