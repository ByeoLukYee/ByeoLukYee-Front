import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Join from './pages/Join';
import Main from './pages/Main';
import SellingPostId from './pages/SellingPostId';
import SellingPostUpload from './pages/SellingPostUpload';
import BuyingPostId from './pages/BuyingPostId';
import BuyingPostUpload from './pages/BuyingPostUpload';

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Join />} />

                <Route path="/" element={<Main />} />

                <Route path='/selling-posts/1' element={<SellingPostId />}/>
                <Route path='/selling-posts/upload' element={<SellingPostUpload />} />

                <Route path='/buying-posts/1' element={<BuyingPostId />}/>
                <Route path='/buying-posts/upload' element={<BuyingPostUpload />} />
            </Routes>
        </Router>
    )
}

export default App;