import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import ValueCardItem from './value-card-item-component';
import PageTitle from './page-title-component';

const ValueCardTop = ({ content }) => {

    let useTitle = content === 'applications' ? 'Applications' : 'Values';
    let useList = [];

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

    const applicationsList = [
        {
            imageSrc: '/assets/values1.png',
            title: "DeFi",
            description: 'DeFi dApps can build with models that optimize yields, reduce trading fees, and simplify on-chain interactions',
        },
        {
            imageSrc: '/assets/values2.png',
            title: "SocialFi",
            description: 'Social dApps can use models for content recommendation, ad placement, and powerful in-app search',
        }, {
            imageSrc: '/assets/applications1.png',
            title: "GameFi",
            description: 'On-chain games can use on-chain models for procedural generation, in-game NPC chat, and path finding'
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

    if (content === 'applications') {
        useList = applicationsList;
    } else {
        useList = valuesList;
    }

    console.log('content is ', content);

    return (
        <Box sx={{ ...sideStyle }} >
            <PageTitle title={useTitle} />
            <Box sx={{ ...itemContainerStyle }}>
                {useList.map((valuesItem, index) => (
                    <ValueCardItem key={index} imageSrc={valuesItem.imageSrc} title={valuesItem.title} description={valuesItem.description} />
                ))}
            </Box>
        </Box>
    );
};

export default ValueCardTop;
