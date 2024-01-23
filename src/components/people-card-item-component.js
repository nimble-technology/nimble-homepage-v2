import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { useMobileContext } from '../mobileContext';

const PeopleCardItem = ({ imageSrc, title, career, years_of_experience, previous_position, education, university }) => {

    const theme = useTheme();
    const isMobile = useMobileContext();

    return (
        <Box>
            <Box sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box component="img" src="/assets/avatar-circle.png" sx={{ width: isMobile? '160px':'244px', height: isMobile? '160px':'245px' }} />
                <Box component="img" src={imageSrc} sx={{ width: isMobile? '110px':'167px', height: isMobile? '110px':'168px', position: 'absolute', borderRadius: '50%', objectFit: 'cover', }} />
            </Box>
            <Typography
                sx={{
                    fontFamily: "'Manrope', cursive",
                    fontSize: isMobile? '16px': '24px',
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
                    fontSize: isMobile? '12px': '14px',
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
