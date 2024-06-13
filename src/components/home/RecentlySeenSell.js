import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/home/RecentlySeenSell.module.css';

import RecentlySeenSellList from './RecentlySeenSellList';

function RecentlySeenSell({ viewData }) {
    // 최근 본 팝니다 서버 불러오기
    const userId = Number(useSelector(state => state.userId));
    const [checkData, setCheckData] = useState([]);

    async function UserCheck() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/users/${userId}/view-histories`, {
                params: {
                    type: 'selling'
                }
            });
            if (response.status === 200) {
                console.log("최근 본 팝니다 게시글 조회 성공");
                setCheckData(response.data);
            } else {
                console.log("최근 본 팝니다 게시글 조회 실패", response.status);
            }
        } catch(error) {
            console.error("서버 연결 실패", error);
        }
    }

    useEffect(() => {
        UserCheck();
    }, []);

    const getUniqueRecentPosts = (data) => {
        const postMap = new Map();
        data.forEach(item => {
            postMap.set(item.post.id, item);
        });
        const uniquePosts = Array.from(postMap.values()).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return uniquePosts.slice(-4).reverse();
    };

    const uniqueRecentPosts = getUniqueRecentPosts(checkData);

    return (
        <>
            <div className={styles['sellTextDiv']}> <p>최근 본 팝니다</p> </div>
            <div className={styles['sellContainer']}>
                <RecentlySeenSellList data={uniqueRecentPosts} viewData={viewData} />
            </div>

            <div className={styles['sellMoreDiv']}>
                <Link to='/selling-posts' style={{ textDecoration: 'none', color: '#C0C0C0' }}> <p>더보기</p> </Link>
            </div>
        </>
    )
}

export default RecentlySeenSell;