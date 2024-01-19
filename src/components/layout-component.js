import React from 'react';
import Box from '@mui/material/Box';

const Layout = (props) => {

    return (
        <Box sx={{ 
            padding: 2,
          }}>
            This is header!
            {props.children}
        </Box>
    );
};

export default Layout;
