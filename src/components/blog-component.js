import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import PageTitle from './page-title-component';
import axios from "axios";
import BlogCard from './blog-card-component';
import { useMobileContext } from '../mobileContext';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    const isMobile = useMobileContext();

    useEffect(() => {
        axios
            .get('./blogs/index.json')
            .then(res => {
                const indexData = res.data;
                const filesToFetch = indexData.map(blog => ({
                    fileName: blog.fileName,
                    createDate: blog.createDate
                }));

                filesToFetch.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));

                const latestFiles = filesToFetch.slice(0, 3);

                const fetchPromises = latestFiles.map(fileData => {
                    const fileName = fileData.fileName;
                    return axios.get(`./blogs/${fileName}`)
                        .then(response => {
                            return response.data;
                        });
                });

                Promise.all(fetchPromises)
                    .then(blogDataArray => {
                        setBlogs(blogDataArray);
                    })
                    .catch(error => console.error('Error fetching JSON files:', error));
            })
            .catch(error => console.error('Error fetching blog index:', error));
    }, []);

    const sideStyle = {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        background: '#F8F8F8',
        paddingTop: '50px',
        paddingBottom: '100px'

    };

    return (
        <Box sx={{ ...sideStyle }} >
            <PageTitle title='Our Media' />
            <Box 
                sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    marginTop: isMobile ? '40px' : '60px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                {blogs.map((blog, index) => (
                    <BlogCard title={blog.title} date={blog.createDate}></BlogCard>
                ))}
            </Box>
        </Box>
    );
};

export default Blog;
