import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HOST } from '../../config/Config';
import { Link } from 'react-router-dom';

import '../../styles/common/Styles.css';
import styles from '../../styles/home/RecentlySeenSell.module.css';

import SellingPostItemList from '../selling-Item/SellingPostItemList';

function RecentlySeenSell() {
    // 최근 본 팝니다 서버 불러오기
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await axios.get(`${HOST}/selling-posts?limit=4&sortBy=createdAt:desc`);
    //             setData(response.data);
    //         } catch(error) {
    //             console.error("요청 실패 : ", error);
    //         }
    //     }

    //     fetchData();
    // }, []);

    return (
        <>
            <div className={styles['sellTextDiv']}> <p>최근 본 팝니다</p> </div>
            <div className={styles['sellContainer']}>
                {/* <SellingPostItemList data={data}/> */}
            </div>

            <div className={styles['sellMoreDiv']}>
                <Link to='/selling-posts' style={{ textDecoration: 'none', color: '#C0C0C0' }}> <p>더보기</p> </Link>
            </div>
        </>
    )
}

export default RecentlySeenSell;