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
        const baseUrl = process.env.REACT_APP_BLOGS_URL;
        const indexJsonVersion = process.env.REACT_APP_INDEX_JSON_VERSION;
        const url = `${baseUrl}/blogs/index.json?v=${indexJsonVersion}`;
        axios
            .get(url)
            .then(res => {
                const indexData = res.data;
                const filesToFetch = indexData.map(blog => ({
                    fileName: blog.fileName,
                    createDate: blog.createDate,
                    thumb: blog.thumb
                }));

                const fetchPromises = filesToFetch.map(fileData => {
                    const fileName = fileData.fileName;
                    const thumb = fileData.thumb;
                    
                    return axios.get(`${baseUrl}/blogs/${fileName}`)
                        .then(response => {
                            return {
                                title: response.data.title,
                                createDate: response.data.createDate,
                                fileName: fileName,
                                thumb: thumb
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
                    marginTop: (isMobile) ? '250px': '400px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                {blogs.map((blog, index) => (
                    <BlogCard title={blog.title} date={blog.createDate} fileName={blog.fileName} thumb={blog.thumb}></BlogCard>
                ))}
            </Box>
        </Box>
        
    );
};

export default NewsList;
