import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Join from './pages/join';
import Home from './components/home/home';
import SellingPosts from './components/selling-Item/selling-posts';

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Join />} />
                <Route path="/" element={<Home />} />
                <Route path='/selling-posts' element={<SellingPosts />}/>
            </Routes>
        </Router>
    )
}

export default App;