import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import BlogHeader from '../components/blog-header-component';
import {useParams} from "react-router-dom";
import { marked } from 'marked';

const NewsPage = () => {

    const [news, setNews] = useState({});
    const params = useParams();

    const markdownContainerStyle = {
        img: {
            maxWidth: '100%',
            height: 'auto',
        },
        padding: '0 50px 50px 50px'
    };

    useEffect(() => {
        fetch(`/blogs/${params.fileName}.json`)
            .then(response => response.json())
            .then(data => setNews(data))
    }, [params.fileName]);

    const renderMarkdown = markdown => {
        return { __html: marked(markdown) };
    };

    return (

        <Box sx={{width: '100vw', marginTop: '55px'}}>
            <BlogHeader title={news.title} />
            <Box 
                sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    marginTop: '250px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                <Box sx={markdownContainerStyle} dangerouslySetInnerHTML={renderMarkdown(news.content || '')} />
            </Box>
        </Box>


        // <Box sx={{ 
        //     marginTop: 20,
        //     padding: 2,
        //     width: '100vw'
        //   }}>
        //     <h1>{news.title}</h1>
        //     <h4>Author: {news.author}</h4>
        //     <p>Date: {news.createDate}</p>
        //     <Box sx={markdownContainerStyle} dangerouslySetInnerHTML={renderMarkdown(news.content || '')} />
        // </Box>
    );
};

export default NewsPage;
