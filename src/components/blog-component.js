import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ValueCardItem from './value-card-item-component';
import PageTitle from './page-title-component';

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/api/blogs') 
            .then(response => response.json())
            .then(data => {
                const sortedBlogs = data.sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
                setBlogs(sortedBlogs.slice(0, 3));
            })
            .catch(error => console.error('Error fetching blogs:', error));
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
            <PageTitle title='Values' />
            <Box sx={{ display: 'flex', gap: 2, marginTop: '60px', }}>
                {valuesList.map((valuesItem, index) => (
                    <ValueCardItem key={index} imageSrc={valuesItem.imageSrc} title={valuesItem.title} description={valuesItem.description} />
                ))}
            </Box>
        </Box>
    );
};

export default Blog;
