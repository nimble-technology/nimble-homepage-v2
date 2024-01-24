import React from 'react';
import Box from '@mui/material/Box';
import BlogHeader from '../components/blog-header-component';

const NewsList = () => {

    return (
        <Box sx={{width: '100vw', marginTop: '55px'}}>
            <BlogHeader />
            <Box sx={{ 
                marginTop: 50,
                padding: 2,
                height: '2500px'
            }}>
                Welcome to our news list page!
                
            </Box>
        </Box>
        
    );
};

export default NewsList;
