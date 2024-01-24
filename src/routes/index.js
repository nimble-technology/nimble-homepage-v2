import React from 'react';
import Layout from "../components/layout-component.js";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home-page";
import NewsList from "../pages/news-list";
import NewsPage from "../pages/news-page";
import FramePage from "../pages/frame-page";

export const AppRoutes = () => {
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
