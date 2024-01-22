import React from 'react';
import Box from '@mui/material/Box';
import ValueCardItem from './value-card-item-component';
import PageTitle from './page-title-component';

const ValueCardTop = () => {

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
    };

    return (
        <Box sx={{ ...sideStyle }} >
            <PageTitle title='Values' />
            <Box sx={{ display: 'flex', gap: 2, marginTop: '60px', }}>
                {valuesList.map((valuesItem, index) => (
                    <ValueCardItem key={index} imageSrc={valuesItem.imageSrc} title={valuesItem.title} description={valuesItem.description} />
                ))}
            </Box>
        </Box>
    );
};

export default ValueCardTop;
