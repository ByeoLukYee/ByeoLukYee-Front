import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HOST } from '../../config/Config';
import { Link } from 'react-router-dom';

import '../../styles/common/Styles.css';
import styles from '../../styles/home/RecentlyBuy.module.css';

import BuyPostItemList from "../buying-Item/BuyPostItemList";

function RecentlyBuy() {
    // 최신 삽니다 서버 연결
    const [latestPosts, setLatestPosts] = useState([]);
    useEffect(() => {
        async function fetchLatestPosts() {
            try {
                const response = await axios.get(`${HOST}/buying-posts`);
                // createAt 기준 내림차순으로 정렬
                const sortedData = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                // 정렬된 데이터 중 처음 4개의 데이터만 추출
                const latestFourPosts = sortedData.slice(0, 4);
                setLatestPosts(latestFourPosts);
            } catch(error) {
                console.error("요청 실패 : ", error);
            }
        }

        fetchLatestPosts();
    }, []);

    return (
        <>
            <div className={styles['buyTextDiv']}> <p>따끈따근 최신 삽니다 글</p> </div>
            <div className={styles['buyContainer']}>
                <BuyPostItemList data={latestPosts}/>
            </div>

            <div className={styles['buyMoreDiv']}>
                <Link to='/buying-posts' style={{ textDecoration: 'none', color: '#C0C0C0' }}> <p>더보기</p> </Link>
            </div>
        </>
    )
}

export default RecentlyBuy;