import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HOST } from '../../config/Config';
import { Link } from 'react-router-dom';

import '../../styles/common/Styles.css';
import styles from '../../styles/home/RecentlySell.module.css';

import SellingPostItemList from '../selling-Item/SellingPostItemList';

function RecentlySell() {
    // 최신 팝니다 서버 연결
    const [latestPosts, setLatestPosts] = useState([]);
    useEffect(() => {
        async function fetchLatestPosts() {
            try {
                const response = await axios.get(`${HOST}/selling-posts?limit=4&sortBy=createdAt:desc`);
                setLatestPosts(response.data);
            } catch(error) {
                console.error("요청 실패 : ", error);
            }
        }

        fetchLatestPosts();
    }, []);

    return (
        <>
            <div className={styles['sellTextDiv']}> <p>따끈따근 최신 팝니다 글</p> </div>
            <div className={styles['sellContainer']}>
                <SellingPostItemList data={latestPosts} /> 
            </div>

            <div className={styles['sellMoreDiv']}>
                <Link to='/selling-posts' style={{ textDecoration: 'none', color: '#C0C0C0' }}> <p>더보기</p> </Link>
            </div>
        </>
    )
}

export default RecentlySell;