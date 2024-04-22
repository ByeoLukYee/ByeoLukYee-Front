import React, { useState, useEffect } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/buying-posts/BuyingPost.module.css';

import { HOST } from '../../config/Config';
import axios from 'axios';

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

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${HOST}/buying-posts`);
                if (response.status === 200) {
                    setData(response.data);
                }
            } catch (error) {
                console.error("데이터 가져오기 실패: ", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className={styles['container']}>
            <Header onTitleClick={handleTitleClick} />
            <SelectPost />

            <div className={styles['bodyContainer']}>
                <div className={styles['sortTextDiv']}>
                    <SelectSort />
                </div>

                <div>
                    <BuyingPostItemList data={data} />
                </div>
            </div>

            {/* <div className={styles['footer']}> <Footer /> </div> */}
            <Footer />
        </div>
    )
}

export default BuyingPosts;