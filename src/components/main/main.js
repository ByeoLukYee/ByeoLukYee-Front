import React, { useState } from 'react';

import mainStyle from '../../styles/main/main.module.css';

import Footer from '../common/footer';
import Header from '../common/header';
import Home from '../home/home';
import SellingPosts from '../selling-Item/selling-posts';
import BuyingPosts from '../buying-Item/buying-posts';

function Main() {
    const [selectedTab, setSelectedTab] = useState('/');

    const renderContent = () => {
        switch (selectedTab) {
            case 'sell':
                return <SellingPosts />;
            case 'buy':
                return <BuyingPosts />;
            default:
                return <Home />;
        }
    };
    const handleTitleClick = () => {
        setSelectedTab('/');
    };

    return (
        <>
            <div className={mainStyle["container"]}>
                <Header onTitleClick={handleTitleClick} />
                <div className={mainStyle['textDiv']}>
                    <p className={selectedTab === 'sell' ? mainStyle['textActive'] : mainStyle['text']} onClick={() => setSelectedTab('sell')}>팝니다 게시글</p>
                    <p className={selectedTab === 'buy' ? mainStyle['textActive'] : mainStyle['text']} onClick={() => setSelectedTab('buy')}>삽니다 게시글</p>
                </div>

                <div>
                    {renderContent()}
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Main;