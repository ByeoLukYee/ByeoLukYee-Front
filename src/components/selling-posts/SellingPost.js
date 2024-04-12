import React, { useState } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/SellingPost.module.css';

import Header from '../common/Header';
import SelectPost from '../main/SelectPost';
import SellingPostItemList from '../selling-Item/SellingPostItemList';
import SelectSort from '../main/SelectSort';
import Footer from '../../components/common/Footer';

function SellingPosts() {
    const [selectedTad, setSelectedTab] = useState('/');
    const [selected, setSelected] = useState('1');

    const handleSelectedClick = (number) => {
        setSelected(number);
    };

    const handleTitleClick = () => {
        setSelectedTab('/');
    };

    return (
        <>
            <div className={styles['container']}>
                <Header onTitleClick={handleTitleClick} />
                <SelectPost />
                
                <div className={styles['bodyContainer']}>
                    <div className={styles['sortText']}>
                    <SelectSort />
                    </div>

                    <div style={{marginBottom: '10%'}}>
                        <SellingPostItemList />
                    </div>
                </div>

                <div className={styles['selectDiv']}>
                    <div className={styles[selected === '1' ? 'selected' : '']} onClick={() => handleSelectedClick('1')}> <p>1</p> </div>
                </div>

                <Footer />
            </div>

        </>
    )
}

export default SellingPosts;