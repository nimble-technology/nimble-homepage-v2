import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import {useParams} from "react-router-dom";
import { useLocation } from 'react-router-dom';

const FramePage = () => {

    const params= useParams();
    const location = useLocation();

    // dirty hack to get this working asap
    const pageOptions = {
        'everything-marketplace-case-study': 'https://drive.google.com/file/d/1g_ENeFA1jBszHMfRpnytkX1WVPImIbvl/preview?usp=drivedk',
        'whitepaper': 'https://drive.google.com/file/d/15veTK7lwSxdhIZbMjsRFWy11ofb5lZbT/preview?usp=drivedk',
        'litepaper': 'https://drive.google.com/file/d/1I-I8PWylqdnJHGmprXKvct3IjR3ObK3L/preview?usp=drivedk'
    }

    useEffect(() => {
        const pathname = location.pathname;
    
        if (pathname === '/litepaper') {
          document.title = 'Litepaper - Nimble Network';
        } else if (pathname === '/whitepaper') {
          document.title = 'Whitepaper - Nimble Network';
        } else if (pathname === '/everything-marketplace-case-study') {
          document.title = 'Marketplace Case Study - Nimble Network';
        } else {
          document.title = 'Nimble - The Composable AI Protocol';
        }
      }, [location.pathname]);

    return (
        <Box sx={{ 
            marginTop: 0,
            padding: "0 2px",
            width: '100vw'
          }}>
            <iframe src={pageOptions[window.location.pathname.split('/')[1]]}
                    id="frameHolder"
                    style={{
                        'minWidth': '273px',
                        'width': '100%',
                        'border': "none",
                        'height': '100vh'
            }}></iframe>
        </Box>
    );
};

export default FramePage;
