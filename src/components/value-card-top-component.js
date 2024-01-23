import React from 'react';
import Box from '@mui/material/Box';
import ValueCardItem from './value-card-item-component';
import PageTitle from './page-title-component';

const ValueCardTop = () => {

    const valuesList = [
        {
            imageSrc: '/assets/values1.png',
            title: "Borderless Ecosystem",
            description: 'An open system of developers & applications spanning across the entire AI ecosystem',
        },
        {
            imageSrc: '/assets/values2.png',
            title: "Inclusive by Design",
            description: 'Designed for accessibility first, so everyone can contribute their knowledge & resources',
        }, {
            imageSrc: '/assets/values3.png',
            title: "Open Protocol",
            description: 'A permissionless protocol that is extensible at every layer of AI with network rewards'
        }];

    const sideStyle = {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
    };

    const itemContainerStyle = {
        display: 'flex',
        columnGap: 2,
        rowGap: 2,
        flexFlow: 'wrap',
        justifyContent: 'center',
    };

    return (
        <Box sx={{ ...sideStyle }} >
            <PageTitle title='Values' />
            <Box sx={{ ...itemContainerStyle }}>
                {valuesList.map((valuesItem, index) => (
                    <ValueCardItem key={index} imageSrc={valuesItem.imageSrc} title={valuesItem.title} description={valuesItem.description} />
                ))}
            </Box>
        </Box>
    );
};

export default ValueCardTop;
