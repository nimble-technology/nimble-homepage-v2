import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import BlogHeader from '../components/blog-header-component';
import { useParams, useLocation } from 'react-router-dom';
import { marked } from 'marked';
import { SPECIAL_BLOGS } from '../constants';
import {useMobileContext} from "../mobileContext";

const NewsPage = () => {

    const [news, setNews] = useState({});
    const params = useParams();
    const location = useLocation();
    const baseUrl = process.env.REACT_APP_BLOGS_URL;
    const isMobile = useMobileContext();

    const markdownContainerStyle = {
        img: {
            maxWidth: '600px',
            width: '100%',
            height: 'auto',
        },
        padding: '0 50px 50px 50px',
    };

    useEffect(() => {

        let jsonFileName;

        switch (location.pathname) {
            case '/' + SPECIAL_BLOGS.VISION:
                jsonFileName = SPECIAL_BLOGS.VISION;
                break;
            case '/' + SPECIAL_BLOGS.TOKENOMICS:
                jsonFileName = SPECIAL_BLOGS.TOKENOMICS;
                break;
            default:
                jsonFileName = params.fileName;
                break;
        }

        const fetchUrl = `${baseUrl}/blogs/${jsonFileName}.json`;


        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => setNews(data))
    }, [params.fileName, location.pathname]);

    const renderMarkdown = markdown => {
        return { __html: marked(markdown) };
    };

    return (

        <Box sx={{width: '100%', marginTop: '55px', maxWidth: '1200px'}}>
            <BlogHeader title={news.title} />
            <Box 
                sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    marginTop: (isMobile) ? '250px': '400px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                <Box sx={markdownContainerStyle} dangerouslySetInnerHTML={renderMarkdown(news.content || '')} />
            </Box>
        </Box>
    );
};

export default NewsPage;
