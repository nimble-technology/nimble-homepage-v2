import React from 'react';
import Layout from "../components/layout-component.js";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home-page";
import NewsList from "../pages/news-list";
import NewsPage from "../pages/news-page";

export const AppRoutes = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/news/list" element={<NewsList />} />
                    <Route path="/news/:newsId" element={<NewsPage />} />
                    <Route path="*" element={<Navigate to="/homepage" replace />} />
                </Routes>
            </Layout>
        </Router>
    );
};
