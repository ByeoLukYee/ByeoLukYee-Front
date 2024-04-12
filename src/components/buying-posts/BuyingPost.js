import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/buying-posts/BuyingPost.module.css';

import Header from '../common/Header';
import SelectPost from '../main/SelectPost';
import BuyingPostItemList from '../buying-Item/BuyingPostItemList';
import SelectSort from '../main/SelectSort';
import Footer from '../common/Footer';

function BuyingPosts() {
    const [selectedTad, setSelectedTab] = useState('/');

    const handleTitleClick = () => {
        setSelectedTab('/');
    };

    return (
        <div className={styles['container']}>
            <Header onTitleClick={handleTitleClick} />
            <SelectPost />

            <div className={styles['bodyContainer']}>
                <div className={styles['sortTextDiv']}>
                    <SelectSort />
                </div>

                <div>
                    <BuyingPostItemList />
                </div>
            </div>

            <div className={styles['footer']}> <Footer /> </div>
        </div>
    )
}

export default BuyingPosts;