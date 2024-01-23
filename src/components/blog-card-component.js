import React from 'react';
import { Typography, Box } from '@mui/material';

const BlogCard = ({ title, date }) => {

    console.log(title, date);
    return (
        <Box sx={{
            width: '375px',
            overflow: 'hidden',
        }}>
            <Box sx={{
                width: '100%',
            }}>
                <img src={"/assets/blog-card.png"} alt="Icon" style={{ width: '100%' }} />
            </Box>
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <Typography  
                        sx={{
                        fontFamily: 'Manrope',
                        fontSize: '24px',
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
                    <img src={"/assets/arrow.png"} alt="Arrow Icon" style={{ width: 24 }} />
                </Box>

                <Typography 
                    sx={{
                        fontFamily: 'Manrope',
                        fontSize: '16px',
                        fontWeight: 400,
                        textAlign: 'left',
                        color: 'rgba(0, 0, 0, 0.5)',
                        marginTop: '15px'
                    }}>
                    {date}
                </Typography>
            </Box>
        </Box>
    );
};

export default BlogCard;
