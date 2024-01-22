import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

const PeopleCardItem = ({ imageSrc, title, career, years_of_experience, previous_position, education, university }) => {

    const theme = useTheme();

    return (
        <Box>
            <Box sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box component="img" src="/assets/avatar-circle.png" sx={{ width: 244, height: 245 }} />
                <Box component="img" src={imageSrc} sx={{ width: 167, height: 168, position: 'absolute', borderRadius: '50%', objectFit: 'cover', }} />
            </Box>

            <Typography
                sx={{
                    fontFamily: "'Manrope', cursive",
                    fontSize: '24px',
                    fontWeight: 700,
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: theme.palette.text.secondary,
                    marginTop: '20px',
                }}>
                {title}
            </Typography>
            <Typography
                sx={{
                    fontFamily: "'Manrope', cursive",
                    fontSize: '14px',
                    fontWeight: 400,
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: theme.palette.text.secondary,
                    marginTop: '5px',
                }}>
                {previous_position}<br />
                {career}<br />
                {years_of_experience}<br />
                {education}<br />
                {university}<br />
            </Typography>
        </Box>
    );
};

export default PeopleCardItem;
