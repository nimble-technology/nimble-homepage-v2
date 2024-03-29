import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useMobileContext } from '../mobileContext';
import {Navigate, useNavigate} from 'react-router-dom';
import { SPECIAL_BLOGS } from '../constants';

const BlogCard = ({ title, date, fileName, thumb, href, canClick = true }) => {

    const isMobile = useMobileContext();
    const navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_BLOGS_URL;
    const [isLoaded, setIsLoaded] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        if (canClick) {
            const fileNameWithoutExtension = fileName.replace(/\.json$/, "");
            let urlPath;
            if (fileNameWithoutExtension === SPECIAL_BLOGS.TOKENOMICS || fileNameWithoutExtension === SPECIAL_BLOGS.VISION) {
                urlPath = '/' + fileNameWithoutExtension;
            } else {
                urlPath = '/media/' + fileNameWithoutExtension;
            }
            navigate(urlPath);
        }
       
    };

    return (
        <Button 
            onClick={handleClick} 
            href={href}
            sx={{ 
                padding: 0, 
                textAlign: 'left',
                '&:hover': {
                    backgroundColor: 'transparent', 
                }
            }}>
            <Box sx={{
                width: isMobile ? '300px' : '375px',
                overflow: 'hidden',
                marginLeft: '10px',
                marginRight: '10px'
            }}>
                <Box sx={{
                    width: '100%',
                }}>
                    <span style={{ padding: 0 }}>
                        <img 
                            src={isLoaded ? `${baseUrl}/assets/blog-images/${thumb}` : `${baseUrl}/assets/blog-preloading-cover.png`} 
                            alt="Icon" 
                            style={{ width: '100%', height : isMobile ? '169px' : '211px' }} 
                            onLoad={() => setIsLoaded(true)}
                            onError={() => setIsLoaded(false)}
                        />
                    </span>
                </Box>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                        <Typography  
                            sx={{
                            fontFamily: 'Manrope',
                            fontSize: isMobile ? '20px' : '24px',
                            color: 'black',
                            fontWeight: 800,
                            textAlign: 'left',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            flex: 1,
                            marginTop: '10px'
                        }}>
                            {title}
                        </Typography>
                            <img src={`${baseUrl}/assets/arrow.png`} alt="Arrow Icon" style={{ width: isMobile ? '20px' : '24px' }} />
                    </Box>

                    <Typography 
                        sx={{
                            fontFamily: 'Manrope',
                            fontSize: isMobile ? '12px' : '16px',
                            fontWeight: 400,
                            textAlign: 'left',
                            color: 'rgba(0, 0, 0, 0.5)',
                            marginTop: isMobile ? '8px' : '15px'
                        }}>
                        {date}
                    </Typography>
                </Box>
            </Box>
        </Button>
    );
};

export default BlogCard;
