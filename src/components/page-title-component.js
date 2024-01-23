import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import { useMobileContext } from '../mobileContext';

const PageTitle = ({ title }) => {

    const theme = useTheme();
    const isMobile = useMobileContext();

    const titleContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6,
        marginBottom: isMobile ? 2 : 4,
    };

    return (
        <Box>
            <Box sx={{ ...titleContainerStyle }}>
                <Box component="img" src='/assets/bracket-left.png' sx={{ width: isMobile ? 10 : 29, height: isMobile ? 28 : 78 }} />
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
                <Box component="img" src='/assets/bracket-right.png' sx={{ width: isMobile ? 10 : 29, height: isMobile ? 28 : 78 }} />
            </Box>
        </Box>
    );
};

export default PageTitle;
