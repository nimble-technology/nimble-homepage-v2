import React from 'react';
import Box from '@mui/material/Box';

const HomePage = () => {
  return (
    <Box>
      <Box id="section1" sx={{ height: '500px', background: 'lightblue' }}>
        Section 1 Content
      </Box>
      <Box id="section2" sx={{ height: '500px', background: 'lightgreen' }}>
        Section 2 Content
      </Box>
    </Box>
  );
};

export default HomePage;