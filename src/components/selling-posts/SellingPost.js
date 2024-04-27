import React, { useState, useEffect } from 'react';

import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/SellingPost.module.css';

import { HOST } from '../../config/Config';
import axios from 'axios';

import Header from '../common/Header';
import SelectPost from '../main/SelectPost';
import SellingPostItemList from '../selling-Item/SellingPostItemList';
import SelectSort from '../main/SelectSort';
import Footer from '../../components/common/Footer';

function SellingPosts() {
    const [selectedTad, setSelectedTab] = useState('/');
    const handleTitleClick = () => {
        setSelectedTab('/');
    };

    // 팝니다 게시글
    // /selling-posts GET해서 팝니다 게시물 데이터 가져오기
    // 가져온 데이터는 SellingPostItemList에 전달하기
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${HOST}/selling-posts`);
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
        <>
            <div className={styles['container']}>
                <Header onTitleClick={handleTitleClick} />
                <SelectPost />
                
                <div className={styles['bodyContainer']}>
                    <div className={styles['sortText']}>
                        <SelectSort />
                    </div>

                    <div className={styles['selling-post-item-list']}>
                        <SellingPostItemList data={data}/>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default SellingPosts;