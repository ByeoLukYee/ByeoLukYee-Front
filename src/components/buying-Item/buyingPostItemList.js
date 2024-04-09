import '../../styles/common/Styles.css';
import styles from '../../styles/buying-Item/Buy-grid.module.css';

import BuyingPostItem from './BuyingPostItem';

import axios from "axios";
import { useEffect, useState } from "react";
import { HOST } from "../../config/config";

function BuyingPostItemList() {
    const [buyingPostList, setBuyingPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        // `${HOST}/buying-posts/1`
        const response = await axios.get('http://localhost:8080/buying-posts/1');
        console.log(response.data);
        setBuyingPostList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div className={styles['buying-grid-container']}>
           {isLoading ? (
                <p className={styles['noMessage']}>게시글이 없습니다.</p>
            ) : (
                buyingPostList.map((item, index) => (
                    <div key={index} className={styles['buying-grid-item']}> 
                        <BuyingPostItem
                            title={item.title}
                            status={item.krStatus}
                            price={item.price}
                        />
                    </div>
                ))
            )}
        </div>
    )
}

export default BuyingPostItemList;