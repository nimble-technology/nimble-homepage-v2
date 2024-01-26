import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import PeopleCardItem from './people-card-item-component';
import { useMobileContext } from '../mobileContext';
import PageTitle from './page-title-component';
import PeopleCardWrapper from './people-card-wrapper-component';
import { LINKEDIN_LINK } from '../constants';

const PeopleCard = () => {
    const theme = useTheme();
    const isMobile = useMobileContext();

    const peopleInfoList = [
        {
            imageSrc: '/assets/team-avatars/Xin.png',
            title: 'Xin Jin',
            career: 'Founder',
            link: LINKEDIN_LINK.XIN
        }, {
            imageSrc: '/assets/team-avatars/Anthony.png',
            title: 'Anthony Isaacson',
            career: 'Cofounder',
            link: LINKEDIN_LINK.ANTHONY
        }, {
            imageSrc: '/assets/team-avatars/Peng.png',
            title: 'Peng Jia',
            career: "Cofounder",
            link: LINKEDIN_LINK.PENG
        },
        {
            imageSrc: '/assets/team-avatars/Joshua.png',
            title: 'Joshua Chen',
            career: "Core Engineer",
            link: LINKEDIN_LINK.JOSHUA
        },
        {
            imageSrc: '/assets/team-avatars/Shanpeng.png',
            title: 'Shanpeng Wang',
            career: "Core Engineer",
            link: LINKEDIN_LINK.SHANPENG
        },
        {
            imageSrc: '/assets/team-avatars/Henry.png',
            title: 'Henry',
            career: "Core Engineer",
            link: LINKEDIN_LINK.HENRY
        },
        // {
        //     imageSrc: '/assets/team-avatars/Henry.png',
        //     title: 'Henry',
        //     career: "Core Engineer",
        //     link: LINKEDIN_LINK.HENRY
        // }
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

    return (
        <Box sx={{ ...sideStyle }}>
            {isMobile ? (
                <PageTitle title='people' />
            ) : (
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Box sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#1DFA90',
                        marginBottom: 7,
                        opacity: 0.2,
                        angle: '-180 deg',
                    }} />
                    <Typography
                        sx={{
                            fontFamily: "'Press Start 2P', cursive",
                            fontSize: '138px',
                            fontWeight: 400,
                            letterSpacing: '0.03em',
                            textAlign: 'center',
                            color: theme.palette.text.secondary,
                            marginTop: '60px',
                        }}>
                        people
                    </Typography>
                    <Box sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: '#1DFA90',
                        opacity: 0.2,
                        angle: '-180 deg',
                    }} />
                </Box>
            )}
            <Box sx={{
                display: 'flex',
                columnGap: 25,
                rowGap: 3,
                flexFlow: 'wrap',
                justifyContent: 'center',
            }} >
                {peopleInfoList.map((people, index) => (
                    <PeopleCardWrapper key={index}>
                        <PeopleCardItem key={index} imageSrc={people.imageSrc} title={people.title} career={people.career} link={people.link} />
                    </PeopleCardWrapper>
                ))}
            </Box>
        </Box>
    );
};

export default PeopleCard;
