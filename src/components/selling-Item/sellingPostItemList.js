import '../../styles/common/Styles.css';
import styles from '../../styles/selling-Item/Sell-grid.module.css';

import SellingPostItem from './SellingPostItem';

import axios from "axios";
import { useEffect, useState } from "react";
import { HOST } from "../../config/config";

function SellingPostItemList() {
    const [sellingPostList, setSellingPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        // `${HOST}/selling-posts/1`
        const response = await axios.get('http://localhost:8080/selling-posts/1');
        console.log(response.data);
        setSellingPostList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    
    return (
        <div className={styles['selling-grid-container']}>
            {isLoading ? (
                <p className={styles['noMessage']}>게시글이 없습니다.</p>
            ) : (
              sellingPostList.map((item, index) => (
                    <div key={index} className={styles['selling-grid-item']}> 
                        <SellingPostItem
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

export default SellingPostItemList;