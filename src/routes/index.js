import React, { useState, useEffect } from 'react';
import Layout from "../components/layout-component.js";
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home-page";
import NewsList from "../pages/news-list";
import NewsPage from "../pages/news-page";
import BreathPart from '../components/breath-animation-component.js';
import FramePage from "../pages/frame-page";
import { PRELOAD_FONT, PRELOAD_IMAGES } from '../constants.js';
import { useMobileContext } from '../mobileContext';
import { useSpring, animated } from 'react-spring';



export const AppRoutes = () => {

    const [loadedCount, setLoadedCount] = useState(0);
    const [allResourcesLoaded, setAllResourcesLoaded] = useState(false);
    const [showMainContent, setShowMainContent] = useState(false);
    const baseUrl = process.env.REACT_APP_BLOGS_URL;
    const isMobile = useMobileContext();

    const fadeOutProps = useSpring({
        opacity: allResourcesLoaded ? 0 : 1,
        from: { opacity: 1 },
        config: { duration: 1000 },
        onRest: () => {
            setShowMainContent(true);
        },
      });

    useEffect(() => {
       
        const totalResources = PRELOAD_IMAGES.length + PRELOAD_FONT.length;
        const updateLoadedCount = () => {
            setLoadedCount(prevCount => {
                const newCount = prevCount + 1;
                if (newCount === totalResources) {
                    setTimeout(() => {
                        setAllResourcesLoaded(true);
                    }, 2000);
                }
                return newCount;
            });
        };

        PRELOAD_IMAGES.forEach((src) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = updateLoadedCount;
        });

        PRELOAD_FONT.forEach(font => {
            font.load().then(updateLoadedCount);
        });
    }, []);

    if (!allResourcesLoaded || (allResourcesLoaded && !showMainContent)) {
        const containerStyle = allResourcesLoaded && !showMainContent ? fadeOutProps : {};
        const content = (
            <BreathPart
              src={baseUrl + "/assets/nimble.png"}
              alt="Loading"
              customStyle={{ width: isMobile ? '100px' : '200px', height: 'auto' }}
            />
          );
        return (
            <animated.div style={containerStyle}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                width="100vw"
                style={{ backgroundColor: '#161818' }}
              >
                {content}
              </Box>
            </animated.div>
        );
    }

    if (showMainContent) {
        return (
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/media" element={<NewsList />} />
                        <Route path="/vision" element={<NewsPage />} />
                        <Route path="/tokenomics" element={<NewsPage />} />
                        <Route path="/media/:fileName" element={<NewsPage />} />
                        <Route path="/litepaper" element={<FramePage />} />
                        <Route path="/whitepaper" element={<FramePage />} />
                        <Route path="/everything-marketplace-case-study" element={<FramePage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Layout>
            </Router>
        );
    }
};
