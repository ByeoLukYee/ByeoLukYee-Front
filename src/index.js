import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Join from './pages/join';
import Page from './pages/page';

import SellDetail from './pages/sellDetail';
import BuyDetail from './pages/buyDetail';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/page" element={<Page />} />
            
            <Route path="/sellDetail" element={<SellDetail />} />
            <Route path="/buyDetail" element={<BuyDetail />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);