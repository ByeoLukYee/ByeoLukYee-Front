import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Join from './pages/Join';
import Main from './pages/Main';
import Profile from './pages/Profile';

import SellingPost from './pages/SellingPost';
import SellingPostId from './pages/SellingPostId';
import SellingPostUpload from './pages/SellingPostUpload';
import SellingPostEdit from './pages/SellingPostEdit';

import BuyingPost from './pages/BuyingPost';
import BuyingPostId from './pages/BuyingPostId';
import BuyingPostUpload from './pages/BuyingPostUpload';
import BuyingPostEdit from './pages/BuyingPostEdit';

import Chatting from './pages/Chatting';

import Search from './pages/Search';


function App() {
    return(
        <Router>
            <Routes>
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Join />} />

                <Route path="/" element={<Main />} />

                <Route path='/selling-posts' element={<SellingPost />} />
                <Route path='/selling-posts/:id' element={<SellingPostId />}/>
                <Route path='/selling-posts/upload' element={<SellingPostUpload />} />
                <Route path='/selling-posts/:id/edit' element={<SellingPostEdit />} />

                <Route path='/buying-posts' element={<BuyingPost />} />
                <Route path='/buying-posts/:id' element={<BuyingPostId />}/>
                <Route path='/buying-posts/upload' element={<BuyingPostUpload />} />
                <Route path='/buying-posts/:id/edit' element={<BuyingPostEdit />} />

                <Route path='/chatting' element={<Chatting />} />

                <Route path='/profile' element={<Profile />} />

                <Route path='/search' element={<Search />} />
            </Routes>
        </Router>
    )
}

export default App;