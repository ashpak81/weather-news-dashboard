import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Dashboard from './Dashboard';
import NewsHeadlines from './NewsHeadlines.jsx';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='news' element={<NewsHeadlines />} />
    </Routes>
  );
}
