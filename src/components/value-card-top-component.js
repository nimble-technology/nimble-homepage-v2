import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import ValueCardItem from './value-card-item-component';

const ValueCardTop = () => {
    const theme = useTheme();

    const valuesList = [
        {
            imageSrc: '/assets/values1.png',
            title: "Borderless Ecosystem",
            description: 'An open system of applications spanning across the entire Web3 ecosystem',
        },
        {
            imageSrc: '/assets/values2.png',
            title: "Inclusive by Design",
            description: 'Designed for accessibility first, so people from every background can participate without requiring specialized knowledge',
        }, {
            imageSrc: '/assets/values3.png',
            title: "Free Market",
            description: 'A permissionless protocol that is extensible at every layer'
        }];
    const sideStyle = {
        height: 'calc(100vh - 72px)',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '72px',
    };
    const containerStyle = {
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
    };

    return (
        <Box sx={{ ...sideStyle }} >
            <Box sx={{ ...containerStyle }}>
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
                    Values
                </Typography>
                <Box component="img" src='/assets/bracket-right.png' sx={{ width: 29, height: 78 }} />
            </Box>

            <Box sx={{ display: 'flex', gap: 2, marginTop: '60px', }}>
                {valuesList.map((valuesItem, index) => (
                    <ValueCardItem key={index} imageSrc={valuesItem.imageSrc} title={valuesItem.title} description={valuesItem.description} />
                ))}
            </Box>
        </Box>
    );
};

export default ValueCardTop;
