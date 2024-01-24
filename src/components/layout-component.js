import React from 'react';
import Box from '@mui/material/Box';
import Header from './header-component'; 
import Footer from './footer-component'; 

const Layout = (props) => {

    return (
        <Box>
            <Header />
            {props.children}
            <Footer />
        </Box>
    );
};

export default Layout;
