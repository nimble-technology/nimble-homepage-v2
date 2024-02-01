import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import BlogHeader from '../components/blog-header-component';
import { useParams, useLocation } from 'react-router-dom';
import { marked } from 'marked';
import { SPECIAL_BLOGS } from '../constants';
import {useMobileContext} from "../mobileContext";
import Latex from '../components/latex-component';

const NewsPage = () => {

    const [news, setNews] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const location = useLocation();
    const baseUrl = process.env.REACT_APP_BLOGS_URL;
    const isMobile = useMobileContext();

    const markdownContainerStyle = {
        img: {
            maxWidth: '600px',
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: 'auto',
        },
        '& h2': {
            fontSize: '36px',
            fontWeight: '800'
        },
        '& h3': {
            fontSize: '28px',
            fontWeight: '600'
        },
        '& h4': {
            fontSize: '24px',
            fontWeight: '600'
        },
        '& p': {
            fontSize: '20px',
            fontWeight: '500'
        },
        '& li': {
            fontSize: '20px',
            fontWeight: '500'
        },
        padding: '0 50px 50px 50px',
    };

    useEffect(() => {
        const pathname = window.location.pathname;
        if (pathname === '/vision') {
            document.title = 'Vision - Nimble Network';
          } else if (pathname === '/tokenomics') {
            document.title = 'Tokenomics - Nimble Network';
          } else if (pathname.startsWith('/media/')) {
            const fileName = pathname.split('/media/')[1];
            const formattedFileName = fileName.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
            document.title = `${formattedFileName} - Nimble Network`;
          } else {
            document.title = 'Nimble - The Composable AI Protocol';
          }
    }, [location.pathname]);

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
        setIsLoading(true);
        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                setNews(data);
                setIsLoading(false); 
            })
    }, [params.fileName, location.pathname]);

    const renderMarkdown = markdown => {
        return { __html: marked(markdown) };
    };

    const loadingStyle = {
        fontSize: '24px', 
        fontFamily: "'Press Start 2P', cursive",
        position: 'fixed',
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
    };

    return (

        <Box sx={{width: '100%', marginTop: '55px', maxWidth: '1200px'}}>
            <BlogHeader title={news.title} />
            <Box 
                sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    marginTop: (isMobile) ? '250px': '400px',
                    minHeight:'1000px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                {isLoading ? (
                    <div style={loadingStyle}>Loading...</div>
                ) : (
                    <Latex>
                        <Box sx={markdownContainerStyle} dangerouslySetInnerHTML={renderMarkdown(news.content || '')} />
                    </Latex>
                )}
            </Box>
        </Box>
    );
};

export default NewsPage;
