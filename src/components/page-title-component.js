import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';

const PageTitle = ({ title }) => {
    const theme = useTheme();

    const titleContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <Box>
            <Box sx={{ ...titleContainerStyle }}>
                <Box component="img" src='/assets/bracket-left.png' sx={{ width: 29, height: 78 }} />
                <Typography
                    sx={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: '32px',
                        fontWeight: 400,
                        letterSpacing: '0.03em',
                        textAlign: 'center',
                        color: theme.palette.text.secondary,
                        marginLeft: '30px',
                        marginRight: '30px',
                        alignItems: 'center',
                    }}>
                    {title}
                </Typography>
                <Box component="img" src='/assets/bracket-right.png' sx={{ width: 29, height: 78 }} />
            </Box>
        </Box>
    );
};

export default PageTitle;
