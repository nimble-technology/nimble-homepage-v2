import React, { useState, useEffect } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import Layout from "../components/layout-component.js";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home-page";
import NewsList from "../pages/news-list";
import NewsPage from "../pages/news-page";
import FramePage from "../pages/frame-page";
import { PRELOAD_FONT, PRELOAD_IMAGES } from '../constants.js';

export const AppRoutes = () => {

    const [loadedCount, setLoadedCount] = useState(0);
    const [allResourcesLoaded, setAllResourcesLoaded] = useState(false);

    useEffect(() => {
       
        const totalResources = PRELOAD_IMAGES.length + PRELOAD_FONT.length;
        const updateLoadedCount = () => {
            setLoadedCount(prevCount => {
                const newCount = prevCount + 1;
                if (newCount === totalResources) {
                    setAllResourcesLoaded(true);
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
            font.load().then(updateLoadedCount, updateLoadedCount);
        });
    }, []);

    if (!allResourcesLoaded) {
        return <div>Loading...</div>;
    }

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
};
