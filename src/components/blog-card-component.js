import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useMobileContext } from '../mobileContext';

const BlogCard = ({ title, date }) => {

    const isMobile = useMobileContext();

    const handleClick = () => {

        // Todo: add the redirect page link here
        console.log('Button clicked!');
    };

    return (
        <Box sx={{
            width: isMobile ? '300px' : '375px',
            overflow: 'hidden',
        }}>
            <Box sx={{
                width: '100%',
            }}>
                <Button onClick={handleClick} sx={{ padding: 0 }}>
                    <img src={"/assets/blog-card.png"} alt="Icon" style={{ width: '100%' }} />
                </Button>
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
                    <Button onClick={handleClick} sx={{ padding: 0, width: isMobile ? '20px' : '24px', minWidth: 0}}>
                        <img src={"/assets/arrow.png"} alt="Arrow Icon" style={{ width: '100%' }} />
                    </Button>
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
    );
};

export default BlogCard;
