import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Join from './pages/Join';
import Main from './pages/Main';
import SellingPostsId from './pages/Selling-posts-id';
import SellingPostsUpload from './pages/Selling-posts-upload';
import BuyingPostsId from './pages/Buying-posts-id';
import BuyingPostsUpload from './pages/Buying-posts-upload';

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Join />} />

                <Route path="/" element={<Main />} />

                <Route path='/selling-posts/1' element={<SellingPostsId />}/>
                <Route path='/selling-posts/upload' element={<SellingPostsUpload />} />

                <Route path='/buying-posts/1' element={<BuyingPostsId />}/>
                <Route path='/buying-posts/upload' element={<BuyingPostsUpload />} />
            </Routes>
        </Router>
    )
}

export default App;