import React, { useEffect, useState } from "react";
import { HOST } from "../../config/Config";
import axios from "axios";

import styles from '../../styles/buying-Item/BuyGrid.module.css';

import BuyPostItem from '../buying-Item/BuyPostItem';

function BuyPostItemList() {
    //  user.id가 같은 buying-posts item만 GET
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${HOST}/buying-posts`);
                if (response.status === 200) {
                    const filteredData = response.data.filter(item => item.user.id === 1);
                    setData(filteredData);
                }
            } catch (error) {
                console.error("데이터 가져오기 실패: ", error);
            }
        };

        fetchData();
    }, []);
    console.log(data);

    return (
        <div className={styles['profile-grid-container']}>
            {data.length > 0 && data.map(item => (
              console.log(item),
              <div className={styles['buy-grid-item']} key={item.id}> 
                <BuyPostItem
                  title={item.title}
                  status={item.krStatus}
                  price={item.price}
                  description={item.description}
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

export default BuyPostItemList;