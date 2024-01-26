import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import ValueCardItem from './value-card-item-component';
import PageTitle from './page-title-component';
import { useMobileContext } from '../mobileContext';

const ValueCardTop = ({ content }) => {
    const isMobile = useMobileContext();
    const baseUrl = process.env.REACT_APP_BLOGS_URL;

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
            title: "DePIN",
            description: 'DePIN protocols can use models for marketplace functions like matching, dispatching, and optimization',
        },
        {
            imageSrc: '/assets/applications1.png',
            title: "GameFi",
            description: 'On-chain games can use on-chain models for procedural generation, in-game NPC chat, and path finding'
        },
    ];

    const sideStyle = {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
        paddingTop: isMobile ? '10px' : '40px',
        paddingBottom: isMobile ? '10px' : '100px'
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

    return (
        <Box sx={{ ...sideStyle }} >
            <PageTitle title={useTitle} />
            <Box sx={{ ...itemContainerStyle }}>
                {useList.map((valuesItem, index) => (
                    <ValueCardItem key={index} imageSrc={baseUrl + valuesItem.imageSrc} title={valuesItem.title} description={valuesItem.description} />
                ))}
            </Box>
        </Box>
    );
};

export default ValueCardTop;
