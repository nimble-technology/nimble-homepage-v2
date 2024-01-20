import React from 'react';
import Box from '@mui/material/Box';
import Header from './header-component'; 

const Layout = (props) => {

    return (
        <Box>
            <Header />
            {props.children}
        </Box>
    );
};

export default Layout;
