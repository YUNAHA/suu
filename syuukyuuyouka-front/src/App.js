import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@yamada-ui/react';
import Home from './pages/Home';
import Research from './pages/Research';
import Addtion from './pages/Addtion';
import Custom1 from './pages/Custom1';
import PostDetail from './PostDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();

  return (
    <Box className="App">
      {location.pathname === '/'}
      <Box mt={location.pathname === '/' ? "60px" : "0px"}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Research" element={<Research/>} />
          <Route path="Addtion" element={<Addtion/>} />
          <Route path="/post/:id" element={<PostDetail />} /> 
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
