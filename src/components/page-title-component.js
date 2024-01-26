import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import { useMobileContext } from '../mobileContext';

const PageTitle = ({ title }) => {

    const theme = useTheme();
    const isMobile = useMobileContext();
    const baseUrl = process.env.REACT_APP_BLOGS_URL;

    const titleContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: isMobile ? "16px" : "14px",
        marginBottom: isMobile ? "20px" : "14px",
    };

    return (
        <Box>
            <Box sx={{ ...titleContainerStyle }}>
                <Box component="img" src={baseUrl + '/assets/bracket-left.png'} sx={{ width: isMobile ? 10 : 29, height: isMobile ? 28 : 78 }} />
                <Typography
                    sx={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: isMobile ? '14px' : '32px',
                        fontWeight: 400,
                        letterSpacing: '0.03em',
                        textAlign: 'center',
                        color: theme.palette.text.secondary,
                        marginLeft: 2,
                        marginRight: 2,
                    }}>
                    {title}
                </Typography>
                <Box component="img" src={baseUrl + '/assets/bracket-right.png'} sx={{ width: isMobile ? 10 : 29, height: isMobile ? 28 : 78 }} />
            </Box>
        </Box>
    );
};

export default PageTitle;