import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import PageTitle from './page-title-component';
import axios from "axios";

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

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
        height: 'calc(100vh - 72px)',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
    };

    return (
        <Box sx={{ ...sideStyle }} >
            <PageTitle title='Our Media' />
            <Box sx={{ display: 'flex', gap: 2, marginTop: '60px', }}>
                {blogs.map((blog, index) => (
                    <Box sx={{ color: 'black' }}> {blog.title}</Box>
                ))}
            </Box>
        </Box>
    );
};

export default Blog;
