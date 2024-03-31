import React from "react";
import Layout from "./layout/Layout";
import DashboardPage from "./pages/DashboardPage";
import { Route, Routes } from "react-router-dom";
import CreateNewsFeed from "./pages/CreateNewsFeed";
import ManageNewsFeed from "./pages/ManageNewsFeed";
import PerformanceReport from "./pages/PerformanceReport";
import NewsFeedDetail from "./pages/NewsFeedDetail";
import NewsEditPage from "./pages/NewsEditPage";
import NotFoundPage from "./pages/NotFoundPage";
import WorkInProgressPage from "./pages/WorkInProgressPage";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/create" element={<CreateNewsFeed />} />
        <Route path="/manage" element={<ManageNewsFeed />} />
        <Route path="/manage/view/:newsId" element={<NewsFeedDetail />} />
        <Route path="/manage/edit/:newsId" element={<NewsEditPage />} />
        <Route path="/performance" element={<PerformanceReport />} />
        <Route path="/in-progress" element={<WorkInProgressPage />} />
      </Route>
    </Routes>
  );
};

export default App;
