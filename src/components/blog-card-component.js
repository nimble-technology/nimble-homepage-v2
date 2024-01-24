import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useMobileContext } from '../mobileContext';
import {Navigate, useNavigate} from 'react-router-dom';

const BlogCard = ({ title, date, fileName }) => {

    const isMobile = useMobileContext();
    const navigate = useNavigate();

    const handleClick = () => {
        const fileNameWithoutExtension = fileName.replace(/\.json$/, "");
        navigate('/news/' + fileNameWithoutExtension);
    };

    return (
        <Box sx={{
            width: isMobile ? '300px' : '375px',
            overflow: 'hidden',
            marginLeft: '10px',
            marginRight: '10px'
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
