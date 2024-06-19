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
                const filteredData = response.data.filter(item => item.post.user.id !== userId);
                const uniqueItemsMap = new Map();
                for (let i = filteredData.length - 1; i >= 0; i--) {
                    const item = filteredData[i];
                    if (!uniqueItemsMap.has(item.post.id)) {
                        uniqueItemsMap.set(item.post.id, item);
                    }
                }
                const uniqueItems = Array.from(uniqueItemsMap.values()).slice(0, -1);
                setCheckData(uniqueItems);
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
        console.log(data);
        const postMap = new Map();
        data.forEach(item => {
            postMap.set(item.post.id, item);
        });

        const lastFourPosts = Array.from(postMap.values()).slice(-4).reverse();
        console.log("중복된 배열 제거 : ", Array.from(postMap.values()));
        console.log("마지막 4개 추출 : ", lastFourPosts);
        return lastFourPosts;
    };

    // const uniqueRecentPosts = getUniqueRecentPosts(checkData);
    // console.log(uniqueRecentPosts);

    return (
        <>
            <div className={styles['sellTextDiv']}> <p>최근 본 팝니다</p> </div>
            <div className={styles['sellContainer']}>
                <RecentlySeenSellList data={checkData} viewData={viewData} />
            </div>

            <div className={styles['sellMoreDiv']}>
                <Link to='/selling-posts' style={{ textDecoration: 'none', color: '#C0C0C0' }}> <p>더보기</p> </Link>
            </div>
        </>
    )
}

export default RecentlySeenSell;