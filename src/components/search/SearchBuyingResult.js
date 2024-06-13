import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../styles/common/Styles.css';
import styles from '../../styles/search/SearchBuyingResult.module.css';

import BuyingPostList from '../buying-Item/BuyingPostItemList';
import PageNumber from '../common/PageNumber';

function SearchBuyingResult({ keyword, data, setData }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [checkData, setCheckData] = useState([]);

    let postsPerPage = 8;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${process.env.REACT_APP_HOST}/buying-posts`);
                if (response.status === 200) {
                    const filteredData = response.data.filter(item => {
                        const titleMatch = typeof item.title === 'string' && item.title.includes(keyword);
                        const statusMatch = typeof item.krStatus === 'string' && item.krStatus.includes(keyword);
                        const priceMatch = typeof item.price === 'number' && item.price === parseInt(keyword);
                        return titleMatch || statusMatch || priceMatch;
                    });
                    setData(filteredData);
                    check();
                    console.log("데이터 가져오기 성공");
                }
            } catch(error) {
                console.error("데이터 가져오기 실패: ", error);
            }
        }
        fetchData();
    }, [keyword, currentPage]);

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
        <>
            <div className={styles['container']}>
                <BuyingPostList data={currentPosts} checkData={checkData} />
            </div>
            <PageNumber totalPosts={data.length} postsPerPage={postsPerPage} currentPage={currentPage} onPageChange={handlePageChange} />
        </>
    )
}

export default SearchBuyingResult;