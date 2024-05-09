import React, { useState, useEffect } from 'react';
import { HOST } from '../../config/Config';
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
    const [selectedTad, setSelectedTab] = useState('/');
    const handleTitleClick = () => {
        setSelectedTab('/');
    };

    // 팝니다 게시글
    // /selling-posts GET해서 팝니다 게시물 데이터 가져오기
    // 가져온 데이터는 SellingPostItemList에 전달하기
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 16;
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
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

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
                        <SellingPostItemList data={currentPosts} />
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