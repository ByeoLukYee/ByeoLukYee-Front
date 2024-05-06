import React, { useEffect, useState } from "react";
import { HOST } from "../../config/Config";
import axios from "axios";

import '../../styles/common/Styles.css';
import styles from '../../styles/selling-Item/SellGrid.module.css';

import SellingPostItem from '../selling-Item/SellingPostItem';


function SellingPostItemList() {
    //  user.id가 같은 selling-posts item만 GET
    const [data, setData] = useState([]);
    let userId = Number(localStorage.getItem('userId'));
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${HOST}/selling-posts`);
                if (response.status === 200) {
                    const filteredData = response.data.filter(item => item.user.id === userId);
                    setData(filteredData);
                }
            } catch (error) {
                console.error("데이터 가져오기 실패: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles['three-grid-container']}>
            {data.length > 0 && data.map(item  => (
                <div key={item.id} className={styles['grid-item']}> 
                    <SellingPostItem
                        status={item.krStatus}
                        price={item.price}
                        title={item.title}
                        id={item.id}
                    />
                </div>
            ))}
            {data.length <= 0 && 
                <p>게시글 없습니다.</p>
            }
        </div>
    )
}

export default SellingPostItemList;