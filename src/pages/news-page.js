import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import {useParams} from "react-router-dom";

const NewsPage = () => {

    const params= useParams();

    useEffect(() => {
        console.log('params', params.newsId);
        fetch(`/blogs/${params.newsId}.json`)
            .then(response => response.json())
            .then(data => console.log(data))
    });

    return (
        <Box sx={{ 
            marginTop: 20,
            padding: 2,
          }}>
            Welcome to our newspage!
        </Box>
    );
};

export default NewsPage;
