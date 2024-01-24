import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BlogHeader from '../components/blog-header-component';
import axios from "axios";
import BlogCard from '../components/blog-card-component';
import { useMobileContext } from '../mobileContext';

const NewsList = () => {

    const [blogs, setBlogs] = useState([]);

    const isMobile = useMobileContext();

    useEffect(() => {
        axios
            .get('/blogs/index.json')
            .then(res => {
                const indexData = res.data;
                const filesToFetch = indexData.map(blog => ({
                    fileName: blog.fileName,
                    createDate: blog.createDate
                }));

                //filesToFetch.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));

                const fetchPromises = filesToFetch.map(fileData => {
                    const fileName = fileData.fileName;
                    return axios.get(`/blogs/${fileName}`)
                        .then(response => {
                            return {
                                title: response.data.title,
                                createDate: response.data.createDate,
                                fileName: fileName
                            };
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

    return (
        <Box sx={{width: '100vw', marginTop: '55px'}}>
            <BlogHeader />
            <Box 
                sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    marginTop: '250px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                {blogs.map((blog, index) => (
                    <BlogCard title={blog.title} date={blog.createDate} fileName={blog.fileName}></BlogCard>
                ))}
            </Box>
        </Box>
        
    );
};

export default NewsList;
