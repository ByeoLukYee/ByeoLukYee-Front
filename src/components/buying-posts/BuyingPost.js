import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/buying-posts/BuyingPost.module.css';

import Header from '../common/Header';
import SelectPost from '../main/SelectPost';
import BuyingPostItemList from '../buying-Item/BuyingPostItemList';
import SelectSort from '../main/SelectSort';
import Footer from '../common/Footer';
import PageNumber from '../common/PageNumber';

function BuyingPosts() {
    // 삽니다 게시글
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [checkData, setCheckData] = useState([]);

    const postsPerPage = 8;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/buying-posts`);
                if (response.status === 200) {
                    setData(response.data);
                    check();
                }
            } catch(error) {
                console.error("데이터 가져오기 실패: ", error);
            }
        }

        fetchData();
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 데이터 정렬
    const handleSort = (sortedData) => {
        setData(sortedData);
    };

    async function check() {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/view-histories`, {
                params: {
                    type: 'buying'
                }
            });
            if (response.status === 200) {
                console.log("조회수 불러오기 성공");
                setCheckData(response.data);
            } else {
                console.log("조회수 불러오기 실패", response.status);
            }
        } catch(error) {
            console.error("서버 연결 실패", error);
        }
    }

    return (
        <div className={styles['container']}>
            <Header />
            <SelectPost />

            <div className={styles['bodyContainer']}>
                <div className={styles['sortTextDiv']}>
                    <SelectSort data={data} onSort={handleSort} />
                </div>

                <div className={styles['buying-post-item-list']}>
                    <BuyingPostItemList data={currentPosts} checkData={checkData} />
                </div>
            </div>
            <PageNumber totalPosts={data.length} postsPerPage={postsPerPage} currentPage={currentPage} onPageChange={handlePageChange}/>
            <div className={styles['footer']}>
                <Footer />
            </div>
        </div>
    )
}

export default BuyingPosts;