import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BlogHeader from '../components/blog-header-component';
import axios from "axios";
import BlogCard from '../components/blog-card-component';
import { useMobileContext } from '../mobileContext';
import BlogCardWrapper from '../components/blog-card-wrapper-component';
import { DEFAULT_BLOGS } from '../constants';

const NewsList = () => {

    const [blogs, setBlogs] = useState(DEFAULT_BLOGS);
    const [isLoaded, setIsLoaded] = useState(false);

    const isMobile = useMobileContext();

    useEffect(() => {
        document.title = 'Media - Nimble Network';
    }, []);

    useEffect(() => {
        const baseUrl = process.env.REACT_APP_BLOGS_URL;
        const indexJsonVersion = process.env.REACT_APP_INDEX_JSON_VERSION;
        const url = `${baseUrl}/blogs/index.json?v=${indexJsonVersion}`;
        axios
            .get(url)
            .then(res => {
                const indexData = res.data;
                setBlogs(indexData);
                setIsLoaded(true);
            })
            .catch(error => console.error('Error fetching blog index:', error));
    }, []);

    return (
        <Box sx={{width: '100vw', marginTop: '55px'}}>
            <BlogHeader />
            <Box 
                sx={{ 
                    display: 'flex', 
                    gap: 2,
                    marginTop: (isMobile) ? '250px': '400px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                {blogs.map((blog, index) => (
                    <BlogCardWrapper>
                        <BlogCard title={blog.title} date={blog.createDate} fileName={blog.fileName} thumb={blog.thumb} canClick={isLoaded} ></BlogCard>
                    </BlogCardWrapper>
                ))}
            </Box>
        </Box>
        
    );
};

export default NewsList;
