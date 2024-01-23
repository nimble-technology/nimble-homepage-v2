import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import PeopleCardItem from './people-card-item-component';
import { useMobileContext } from '../mobileContext';
import PageTitle from './page-title-component';

const PeopleCard = () => {
    const theme = useTheme();
    const isMobile = useMobileContext();

    const peopleInfoList = [
        {
            imageSrc: '/assets/avatar2.png',
            title: 'Xin Jin',
            career: 'Serial Web3 Entrepreneur',
            years_of_experience: '15+ years R&D Experience',
            previous_position: 'CEO, Ex. Uber',
            education: "PhD, Incentives for P2P Networks",
            university: "The University of Hong Kong"
        }, {
            imageSrc: '/assets/avatar1.png',
            title: 'Anthony Isaacson',
            career: 'Serial Entrepreneur',
            years_of_experience: '7+ years Product & Business Experiences',
            previous_position: 'COO, Ex. Palo Alto Networks',
            education: "BSc, Computer Science",
            university: "The University of British Columbia"
        }, {
            imageSrc: '/assets/avatar3.jpeg',
            title: 'Peng',
            career: "AI/ML Infrastructure Expert",
            years_of_experience: "16+ years R&D Experience",
            previous_position: "CTO, Ex. Apple",
            education: "MEng, Electrical and Computer Engineering",
            university: "McGill University"
        }, {
            imageSrc: '/assets/avatar4.png',
            title: 'Joshua',
            career: "Serial Web3 Entrepreneur",
            years_of_experience: "15+ years R&D Experience",
            previous_position: "Chief Engineer, Ex. Apricot Finance",
            education: "MSc, Electronic Engineering",
            university: "Peking University"
        }, {
            imageSrc: '/assets/avatar5.png',
            title: 'Will',
            career: "Fullstack Development",
            years_of_experience: "2+ years R&D Experience",
            previous_position: "Software Engineer",
            education: "MEng, Data Science",
            university: "UCLA"
        }];

    const sideStyle = {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        position: 'relative',
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
                    <PeopleCardItem key={index} imageSrc={people.imageSrc} title={people.title} career={people.career} years_of_experience={people.years_of_experience} previous_position={people.previous_position} education={people.education} university={people.university} />
                ))}
            </Box>
        </Box>
    );
};

export default PeopleCard;
