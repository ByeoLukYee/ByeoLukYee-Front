import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Join from './pages/join';
import Main from './components/main/main';
import SellingPosts from './components/selling-Item/selling-posts';
import BuyingPostsId from './components/store/buying-posts-id';

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Join />} />
                <Route path="/" element={<Main />} />
                <Route path='/selling-posts' element={<SellingPosts />}/>
                <Route path='/buying-posts' element={<BuyingPostsId />}/>
            </Routes>
        </Router>
    )
}

export default App;