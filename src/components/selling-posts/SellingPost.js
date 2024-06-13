import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/selling-posts/SellingPost.module.css';


import Header from '../common/Header';
import SelectPost from '../main/SelectPost';
import SellingPostItemList from '../selling-Item/SellingPostItemList';
import SelectSort from '../main/SelectSort';
import Footer from '../../components/common/Footer';
import PageNumber from '../common/PageNumber';

function SellingPosts() {
    // 팝니다 게시글
    const [checkData, setCheckData] = useState([]);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 16;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/selling-posts`);
                if (response.status === 200) {
                    console.log("팝니다 게시글 불러오기 성공");
                    setData(response.data);
                    check();
                } else {
                    console.log("팝니다 게시글 불러오기 실패", response.status);
                }
            } catch (error) {
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
                    type: 'selling'
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
        <>
            <div className={styles['container']}>
                <Header />
                <SelectPost />
                
                <div className={styles['bodyContainer']}>
                    <div className={styles['sortText']}>
                        <SelectSort data={data} onSort={handleSort} />
                    </div>

                    <div className={styles['selling-post-item-list']}>
                        <SellingPostItemList data={currentPosts} checkData={checkData} />
                    </div>
                </div>
                <PageNumber totalPosts={data.length} postsPerPage={postsPerPage} currentPage={currentPage} onPageChange={handlePageChange}/>
                <div className={styles['footer']}>
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default SellingPosts;