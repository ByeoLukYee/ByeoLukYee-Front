import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);