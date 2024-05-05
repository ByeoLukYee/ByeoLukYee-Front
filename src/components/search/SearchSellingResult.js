import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HOST } from '../../config/Config';

import '../../styles/common/Styles.css';
import styles from '../../styles/search/SearchSellingResult.module.css';

import SellingPostItemList from '../selling-Item/SellingPostItemList';

function SearchSellingResult({ keyword }) {
    // /selling-posts에 저장된 게시글 데이터를 GET하여
    // 내가 검색창에 입력 값과 일치하거나 포함되어있는 데이터가 있으면 그 데이터만 가져와서 화면에 보여주기
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${HOST}/selling-posts`);
                if (response.status === 200) {
                    const filteredData = response.data.filter(item => {
                        const titleMatch = typeof item.title === 'string' && item.title.includes(keyword);
                        const statusMatch = typeof item.krStatus === 'string' && item.krStatus.includes(keyword);
                        const priceMatch = typeof item.price === 'number' && item.price === parseInt(keyword);
                        return titleMatch || statusMatch || priceMatch;
                    });
                    setData(filteredData);
                }
            } catch(error) {
                console.error("데이터 가져오기 실패: ", error);
            }
        }
        fetchData();
    }, [keyword]);
    console.log(data);

    return (
        <>
            <div className={styles['container']}>
                <SellingPostItemList data={data} />
            </div>
        </>
    )
}

export default SearchSellingResult;